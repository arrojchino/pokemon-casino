import WebSocket from 'ws';
import assert from 'node:assert/strict';

const URL = process.env.TEST_URL || 'ws://127.0.0.1:8787';
const connect = () => new Promise((res, rej) => { const ws = new WebSocket(URL); ws.once('open', () => res(ws)); ws.once('error', rej); });
const states = new Map();
function listen(ws, label) {
  ws.on('message', raw => { const m = JSON.parse(String(raw)); if (m.type === 'state') states.set(label, m.room); if (m.type === 'error') throw new Error(label + ': ' + m.message); });
}
const send = (ws, msg) => ws.send(JSON.stringify(msg));
const wait = ms => new Promise(r => setTimeout(r, ms));
const until = async (fn, ms = 3000) => { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return; await wait(20); } throw new Error('timeout'); };

const a = await connect(); const b = await connect();
listen(a, 'a'); listen(b, 'b');
send(a, { type: 'create', name: 'Ana', bestOf: 3 });
await until(() => states.has('a'));
const code = states.get('a').code;
send(b, { type: 'join', code, name: 'Beto' });
await until(() => states.get('b')?.players[1]);
assert.equal(states.get('a').players[1].name, 'Beto');

send(a, { type: 'call', side: 'heads' });
send(b, { type: 'call', side: 'tails' });
await until(() => states.get('a').calls.every(Boolean) && states.get('b').calls.every(Boolean));
send(a, { type: 'flip' });
await until(() => states.get('a').phase === 'spin');
const result = states.get('a').result;
const winner = states.get('a').tossWinner;
assert.equal(result === 'heads' ? 0 : 1, winner);
assert.equal(states.get('b').result, result);

send(b, { type: 'spin' });
await until(() => states.get('a').phase === 'pick');
const candidates = states.get('a').candidates;
assert.equal(candidates.length, 2);
assert.equal(new Set([...candidates[0], ...candidates[1]].map(p => p.name)).size, 12);
const picker = winner === 0 ? a : b;
send(picker, { type: 'pick', team: 0 });
await until(() => states.get('b').phase === 'battle');
assert.equal(states.get('b').teams[winner].length, 6);
assert.equal(states.get('b').teams[1 - winner].length, 6);
assert.deepEqual(states.get('a').teams, states.get('b').teams);

send(b, { type: 'result', winner: 1 - winner });
await until(() => states.get('a').phase === 'between');
assert.equal(states.get('a').wins[1 - winner], 1);
send(a, { type: 'next' });
await until(() => states.get('b').phase === 'calls');
assert.equal(states.get('b').games, 1);
console.log('FLOW_OK', { code, result, winner, games: states.get('b').games });
a.close(); b.close();
