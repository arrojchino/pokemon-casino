import { useCallback, useEffect, useRef, useState } from 'react';
import type { Pokemon } from '../pokemon/pool.js';

export type RoomState = {
  code: string;
  players: [{ name: string; token: string } | null, { name: string; token: string } | null];
  bestOf: number; phase: 'calls' | 'spin' | 'pick' | 'battle' | 'between' | 'complete';
  calls: [string | null, string | null]; result: 'heads' | 'tails' | null;
  tossWinner: number | null; candidates: [Pokemon[], Pokemon[]] | null;
  teams: [Pokemon[], Pokemon[]]; wins: [number, number]; games: number;
  history: { game: number; winner: number; teams: [Pokemon[], Pokemon[]] }[];
};

const URL = import.meta.env.VITE_BACKEND_URL || '';

export function useCasinoSocket() {
  const [room, setRoom] = useState<RoomState | null>(null);
  const [seat, setSeat] = useState<number | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState('');
  const wsRef = useRef<WebSocket | null>(null);
  const seatRef = useRef<number | null>(null);

  const open = useCallback((onReady?: (ws: WebSocket) => void) => {
    const ws = new WebSocket(URL);
    wsRef.current = ws;
    ws.onopen = () => { setConnected(true); onReady?.(ws); };
    ws.onclose = () => setConnected(false);
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      if (msg.type === 'state') setRoom(msg.room as RoomState);
      if (msg.type === 'joined') {
        setSeat(msg.seat); seatRef.current = msg.seat;
        localStorage.setItem('pc-session', JSON.stringify({ code: msg.code, token: msg.token }));
      }
      if (msg.type === 'error') setError(String(msg.message));
    };
    return ws;
  }, []);

  useEffect(() => {
    if (!URL) return;
    let saved: { code: string; token: string } | null = null;
    try { saved = JSON.parse(localStorage.getItem('pc-session') || 'null'); } catch { /* ignore */ }
    const ws = open(ready => {
      if (saved) ready.send(JSON.stringify({ type: 'resume', code: saved.code, token: saved.token }));
    });
    return () => ws.close();
  }, [open]);

  const send = useCallback((msg: object) => {
    if (!URL) { setError('No backend configured'); return; }
    if (wsRef.current?.readyState === WebSocket.OPEN) wsRef.current.send(JSON.stringify(msg));
    else setError('Backend offline — start the WebSocket server.');
  }, []);

  const create = useCallback((name: string, bestOf: number) => {
    localStorage.removeItem('pc-session');
    open(ws => ws.send(JSON.stringify({ type: 'create', name, bestOf })));
  }, [open]);
  const join = useCallback((code: string, name: string) => {
    localStorage.removeItem('pc-session');
    open(ws => ws.send(JSON.stringify({ type: 'join', code: code.toUpperCase(), name })));
  }, [open]);

  return { room, seat: seat ?? seatRef.current, connected, error, create, join, send, setError };
}
