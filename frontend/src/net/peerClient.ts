import { useCallback, useEffect, useRef, useState } from 'react';
import Peer, { type DataConnection } from 'peerjs';
import { generateTeams, coinWinner, winsNeeded } from '../game/logic.js';
import type { Pokemon } from '../pokemon/pool.js';

type Phase = 'calls' | 'spin' | 'pick' | 'battle' | 'between' | 'complete';
export type RoomState = {
  code: string;
  players: [{ name: string; token: string } | null, { name: string; token: string } | null];
  bestOf: number; phase: Phase;
  calls: [string | null, string | null];
  result: 'heads' | 'tails' | null; tossWinner: number | null;
  candidates: [Pokemon[], Pokemon[]] | null;
  teams: [Pokemon[], Pokemon[]]; wins: [number, number]; games: number;
  history: { game: number; winner: number; teams: [Pokemon[], Pokemon[]] }[];
};

const blank = (code: string, name: string, bestOf: number): RoomState => ({
  code, players: [{ name, token: crypto.randomUUID() }, null], bestOf,
  phase: 'calls', calls: [null, null], result: null, tossWinner: null,
  candidates: null, teams: [[], []], wins: [0, 0], games: 0, history: [],
});

/** Public PeerJS relay. The room creator is the authoritative host. No account needed. */
export function usePeerSocket() {
  const [room, setRoom] = useState<RoomState | null>(null);
  const [seat, setSeat] = useState<number | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState('');
  const peerRef = useRef<Peer | null>(null);
  const conns = useRef<DataConnection[]>([]);
  const stateRef = useRef<RoomState | null>(null);
  const seatRef = useRef<number | null>(null);
  const hostRef = useRef(false);
  const pending = useRef<{ kind: 'create' | 'join'; name: string; bestOf?: number; code?: string } | null>(null);

  const publish = useCallback(() => {
    const r = stateRef.current;
    if (!r) return;
    setRoom({ ...r });
    conns.current.forEach(c => { if (c.open) c.send({ type: 'state', room: r }); });
  }, []);

  const apply = useCallback((msg: any, from = 0) => {
    const r = stateRef.current;
    if (!r || !hostRef.current) return;
    const s = JSON.parse(JSON.stringify(r)) as RoomState;
    if (msg.type === 'join' && !s.players[1]) {
      s.players[1] = { name: String(msg.name || 'Player 2').slice(0, 24), token: crypto.randomUUID() };
    } else if (msg.type === 'call' && s.phase === 'calls') {
      const side = msg.side === 'heads' || msg.side === 'tails' ? msg.side : null;
      if (side && s.calls[from] !== side) s.calls[from] = side;
    } else if (msg.type === 'flip' && s.phase === 'calls' && s.calls.every(Boolean) && s.players[1]) {
      s.result = (crypto.getRandomValues(new Uint8Array(1))[0] & 1) === 0 ? 'heads' : 'tails';
      s.tossWinner = coinWinner(s.calls as [string, string], s.result);
      s.phase = 'spin';
    } else if (msg.type === 'spin' && s.phase === 'spin') {
      const rnd = () => crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000;
      s.candidates = generateTeams(rnd); s.phase = 'pick';
    } else if (msg.type === 'pick' && s.phase === 'pick' && from === s.tossWinner && s.candidates) {
      const t = Number(msg.team) === 0 ? 0 : 1;
      s.teams[from] = s.candidates[t].slice(); s.teams[1 - from] = s.candidates[1 - t].slice(); s.phase = 'battle';
    } else if (msg.type === 'result' && s.phase === 'battle' && s.teams[0].length === 6) {
      const w = Number(msg.winner) === 0 ? 0 : 1;
      s.games++; s.wins[w]++;
      s.history.push({ game: s.games, winner: w, teams: [s.teams[0].slice(), s.teams[1].slice()] });
      s.phase = s.wins[w] >= winsNeeded(s.bestOf) ? 'complete' : 'between';
    } else if (msg.type === 'next' && s.phase === 'between') {
      s.phase = 'calls'; s.calls = [null, null]; s.result = null; s.tossWinner = null; s.candidates = null; s.teams = [[], []];
    } else if (msg.type === 'reset') {
      s.phase = 'calls'; s.calls = [null, null]; s.result = null; s.tossWinner = null;
      s.candidates = null; s.teams = [[], []]; s.wins = [0, 0]; s.games = 0; s.history = [];
      s.bestOf = Number(msg.bestOf) === 5 ? 5 : 3;
    }
    stateRef.current = s; publish();
  }, [publish]);

  useEffect(() => {
    const peer = new Peer({ debug: 0 });
    peerRef.current = peer;
    peer.on('open', () => {
      setConnected(true);
      const p = pending.current;
      if (!p) return;
      pending.current = null;
      if (p.kind === 'create') {
        const r = blank(peer.id, p.name, p.bestOf || 3);
        stateRef.current = r; hostRef.current = true; seatRef.current = 0;
        setSeat(0); setRoom(r);
        localStorage.setItem('pc-peer', JSON.stringify({ code: peer.id, name: p.name }));
      } else if (p.code) {
        const conn = peer.connect(p.code);
        conns.current.push(conn);
        conn.on('open', () => { conn.send({ type: 'join', name: p.name }); seatRef.current = 1; setSeat(1); });
        conn.on('data', (data: any) => { if (data?.type === 'state') { stateRef.current = data.room; setRoom(data.room); } });
        conn.on('error', () => setError('Peer connection failed'));
      }
    });
    peer.on('connection', conn => {
      conns.current.push(conn);
      conn.on('data', (data: any) => { if (data?.type !== 'state') apply(data, 1); });
      conn.on('open', () => publish());
    });
    peer.on('error', e => setError('Relay: ' + String((e as Error).message)));
    peer.on('disconnected', () => { setError('Relay disconnected — retrying'); try { peer.reconnect(); } catch { /* ignore */ } });
    return () => { conns.current.forEach(c => c.close()); peer.destroy(); };
  }, [apply, publish]);

  const create = useCallback((name: string, bestOf: number) => {
    localStorage.removeItem('pc-peer');
    if (peerRef.current?.open) {
      const r = blank(peerRef.current.id, name, bestOf);
      stateRef.current = r; hostRef.current = true; seatRef.current = 0;
      setSeat(0); setRoom(r);
      localStorage.setItem('pc-peer', JSON.stringify({ code: peerRef.current.id, name }));
    } else pending.current = { kind: 'create', name, bestOf };
  }, []);

  const join = useCallback((code: string, name: string) => {
    if (peerRef.current?.open && code) {
      const conn = peerRef.current.connect(code);
      conns.current.push(conn);
      conn.on('open', () => { conn.send({ type: 'join', name }); seatRef.current = 1; setSeat(1); });
      conn.on('data', (data: any) => { if (data?.type === 'state') { stateRef.current = data.room; setRoom(data.room); } });
      conn.on('error', () => setError('Peer connection failed'));
    } else pending.current = { kind: 'join', name, code };
  }, []);

  const send = useCallback((msg: object) => {
    if (hostRef.current) apply(msg, 0);
    else if (conns.current[0]?.open) conns.current[0].send(msg);
    else setError('Not connected to host');
  }, [apply]);

  return { room, seat: seat ?? seatRef.current, connected, error, create, join, send, setError, relay: 'peerjs' as const };
}
