import http from 'node:http';
import { randomBytes, randomUUID } from 'node:crypto';
import { WebSocketServer, WebSocket } from 'ws';
import { generateTeams, coinWinner, winsNeeded } from './game.js';
import type { Pokemon } from './pool.js';

type Phase = 'calls' | 'spin' | 'pick' | 'battle' | 'between' | 'complete';
type Player = { id: string; name: string; token: string };
type Room = {
  code: string; players: [Player | null, Player | null]; bestOf: number;
  phase: Phase; calls: [string | null, string | null]; result: 'heads' | 'tails' | null;
  tossWinner: number | null; candidates: [Pokemon[], Pokemon[]] | null;
  teams: [Pokemon[], Pokemon[]]; wins: [number, number]; games: number;
  history: { game: number; winner: number; teams: [Pokemon[], Pokemon[]] }[];
  updatedAt: number;
};

const PORT = Number(process.env.PORT || 8787);
const ALLOWED = process.env.ALLOWED_ORIGIN || '';
const TTL_MS = Number(process.env.ROOM_TTL_MINUTES || 45) * 60_000;
const rooms = new Map<string, Room>();
const sockets = new Map<WebSocket, { room: string; seat: number }>();

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ ok: true, rooms: rooms.size })); return; }
  res.writeHead(404); res.end();
});
const wss = new WebSocketServer({ server, maxPayload: 64_000 });

function code() { return randomBytes(3).toString('hex').toUpperCase(); }
function secureSide(): 'heads' | 'tails' { return (randomBytes(1)[0] & 1) === 0 ? 'heads' : 'tails'; }
function send(ws: WebSocket, msg: object) { if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(msg)); }
function broadcast(room: Room) {
  const payload = JSON.stringify({ type: 'state', room: publicRoom(room) });
  for (const [ws, meta] of sockets) if (meta.room === room.code && ws.readyState === WebSocket.OPEN) ws.send(payload);
}
function publicRoom(room: Room) {
  const viewers = room.candidates ? room.candidates : null;
  return { ...room, candidates: viewers, updatedAt: undefined };
}
function seatOf(ws: WebSocket, room: Room): number {
  const meta = sockets.get(ws);
  return meta && meta.room === room.code ? meta.seat : -1;
}

wss.on('connection', (ws, req) => {
  const origin = String(req.headers.origin || '');
  if (ALLOWED && origin && origin !== ALLOWED) { ws.close(1008, 'origin'); return; }
  send(ws, { type: 'hello' });

  ws.on('message', raw => {
    let msg: any;
    try { msg = JSON.parse(String(raw)); } catch { return; }
    const meta = sockets.get(ws);
    const room = (msg.code ? rooms.get(String(msg.code).toUpperCase()) : undefined) || (meta ? rooms.get(meta.room) : undefined);

    if (msg.type === 'create') {
      const c = code();
      const r: Room = {
        code: c, players: [{ id: randomUUID(), name: String(msg.name || 'Player 1').slice(0, 24), token: randomUUID() }, null],
        bestOf: Number(msg.bestOf) === 5 ? 5 : 3, phase: 'calls', calls: [null, null], result: null,
        tossWinner: null, candidates: null, teams: [[], []], wins: [0, 0], games: 0, history: [], updatedAt: Date.now(),
      };
      rooms.set(c, r);
      sockets.set(ws, { room: c, seat: 0 });
      send(ws, { type: 'joined', code: c, token: r.players[0]!.token, seat: 0 });
      broadcast(r); return;
    }

    if (msg.type === 'join' && room) {
      if (room.players[1]) { send(ws, { type: 'error', message: 'Room is full' }); return; }
      room.players[1] = { id: randomUUID(), name: String(msg.name || 'Player 2').slice(0, 24), token: randomUUID() };
      room.updatedAt = Date.now();
      sockets.set(ws, { room: room.code, seat: 1 });
      send(ws, { type: 'joined', code: room.code, token: room.players[1].token, seat: 1 });
      broadcast(room); return;
    }

    if (msg.type === 'resume' && room) {
      const seat = room.players.findIndex(p => p && p.token === msg.token);
      if (seat < 0) { send(ws, { type: 'error', message: 'Invalid session' }); return; }
      sockets.set(ws, { room: room.code, seat });
      send(ws, { type: 'joined', code: room.code, token: room.players[seat]!.token, seat });
      broadcast(room); return;
    }

    if (!room) { send(ws, { type: 'error', message: 'Unknown room' }); return; }
    const seat = seatOf(ws, room);
    if (seat < 0) { send(ws, { type: 'error', message: 'Not seated' }); return; }
    room.updatedAt = Date.now();

    if (msg.type === 'call' && room.phase === 'calls') {
      const side = msg.side === 'heads' || msg.side === 'tails' ? msg.side : null;
      if (!side || room.calls[1 - seat] === side) { send(ws, { type: 'error', message: 'Calls must be opposite' }); return; }
      room.calls[seat] = side; broadcast(room); return;
    }
    if (msg.type === 'flip' && room.phase === 'calls' && room.calls.every(Boolean) && room.players[1]) {
      room.result = secureSide(); room.tossWinner = coinWinner(room.calls as [string, string], room.result);
      room.phase = 'spin'; broadcast(room); return;
    }
    if (msg.type === 'spin' && room.phase === 'spin') {
      // use crypto-backed randomness for team generation too
      const rnd = () => randomBytes(4).readUInt32BE(0) / 0x100000000;
      room.candidates = generateTeams(rnd);
      room.phase = 'pick'; broadcast(room); return;
    }
    if (msg.type === 'pick' && room.phase === 'pick' && seat === room.tossWinner && room.candidates) {
      const t = Number(msg.team) === 0 ? 0 : 1;
      room.teams[seat] = room.candidates[t].slice();
      room.teams[1 - seat] = room.candidates[1 - t].slice();
      room.phase = 'battle'; broadcast(room); return;
    }
    if (msg.type === 'result' && room.phase === 'battle' && room.teams[0].length === 6) {
      const winner = Number(msg.winner) === 0 ? 0 : 1;
      room.games++; room.wins[winner]++;
      room.history.push({ game: room.games, winner, teams: [room.teams[0].slice(), room.teams[1].slice()] });
      room.phase = room.wins[winner] >= winsNeeded(room.bestOf) ? 'complete' : 'between';
      broadcast(room); return;
    }
    if (msg.type === 'next' && room.phase === 'between') {
      room.phase = 'calls'; room.calls = [null, null]; room.result = null; room.tossWinner = null;
      room.candidates = null; room.teams = [[], []]; broadcast(room); return;
    }
    if (msg.type === 'reset') {
      room.phase = 'calls'; room.calls = [null, null]; room.result = null; room.tossWinner = null;
      room.candidates = null; room.teams = [[], []]; room.wins = [0, 0]; room.games = 0;
      room.history = []; room.bestOf = Number(msg.bestOf) === 5 ? 5 : 3; broadcast(room); return;
    }
  });

  ws.on('close', () => {
    for (const [sock, meta] of sockets) if (sock === ws) sockets.delete(sock);
  });
});

setInterval(() => {
  const now = Date.now();
  for (const [c, room] of rooms) if (now - room.updatedAt > TTL_MS) rooms.delete(c);
}, 60_000).unref();

server.listen(PORT, () => console.log(`pokemon-casino backend listening on ${PORT}`));
