import { useEffect, useRef, useState } from 'react';
import { useCasinoSocket, backendUrl } from './net/client.js';
import { usePeerSocket } from './net/peerClient.js';
import { DealerScene } from './scenes/DealerScene.js';
import { CoinScene } from './scenes/CoinScene.js';
import { NightScene } from './scenes/NightScene.js';
import { PokemonCard } from './cards/PokemonCard.js';
import { teamImport } from './game/logic.js';
import { copy, showdownUrl } from './showdown/handoff.js';
import type { Pokemon } from './pokemon/pool.js';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const coven = [
  { img: 'goth-a.webp', name: 'MORTA', role: 'coin keeper' },
  { img: 'goth-b.webp', name: 'VESPER', role: 'team reader' },
  { img: 'goth-c.webp', name: 'NOX', role: 'last word' },
];

function Teams({ teams, titles }: { teams: [Pokemon[], Pokemon[]]; titles: string[] }) {
  return <div className="teams">
    {teams.map((team, i) => <section className="team" key={i}>
      <header><h3>{titles[i]}</h3><span>{team.length}/6</span></header>
      <div className="reels">{Array.from({ length: 6 }, (_, s) => <PokemonCard key={s} p={team[s] || null} winner={team.length === 6} />)}</div>
    </section>)}
  </div>;
}

export function App() {
  const wsNet = useCasinoSocket();
  const peerNet = usePeerSocket();
  const useBackend = Boolean(backendUrl());
  const { room, seat, connected, error, create, join, send, setError } = useBackend ? wsNet : peerNet;
  const [name, setName] = useState('Nightwalker');
  const [joinName, setJoinName] = useState('Nightwalker II');
  const [joinCode, setJoinCode] = useState(() => new URLSearchParams(location.search).get('room') || '');
  const [bestOf, setBestOf] = useState(3);
  const [copied, setCopied] = useState('');
  const dealerCanvas = useRef<HTMLCanvasElement>(null);
  const coinCanvas = useRef<HTMLCanvasElement>(null);
  const bgCanvas = useRef<HTMLCanvasElement>(null);
  const dealerScene = useRef<DealerScene | null>(null);
  const coinScene = useRef<CoinScene | null>(null);
  const bgScene = useRef<NightScene | null>(null);
  const lastFlip = useRef('');

  useEffect(() => {
    if (!dealerCanvas.current || !room) return;
    let alive = true;
    const img = new Image();
    img.onload = () => {
      if (!alive || !dealerCanvas.current || dealerScene.current) return;
      try { dealerScene.current = new DealerScene(dealerCanvas.current.parentElement!, dealerCanvas.current, img); }
      catch (e) { (window as unknown as { __DEALER_ERROR__?: string }).__DEALER_ERROR__ = String(e); }
    };
    img.src = asset('goth-atlas.webp');
    return () => { alive = false; dealerScene.current?.dispose(); dealerScene.current = null; };
  }, [!!room]);

  useEffect(() => {
    if (bgCanvas.current) bgScene.current = new NightScene(bgCanvas.current);
    if (coinCanvas.current) coinScene.current = new CoinScene(coinCanvas.current);
    return () => {
      coinScene.current?.dispose(); bgScene.current?.dispose();
      coinScene.current = null; bgScene.current = null;
    };
  }, [!!room]);

  useEffect(() => {
    if (!room?.result || room.phase === 'calls') return;
    const key = `${room.code}:${room.games}:${room.result}`;
    if (lastFlip.current === key) return;
    lastFlip.current = key;
    void coinScene.current?.flip(room.result);
  }, [room?.result, room?.phase, room?.code, room?.games]);

  const myCall = seat !== null ? room?.calls[seat] : null;
  const call = (side: string) => send({ type: 'call', side });
  const share = () => {
    const link = `${location.origin}${location.pathname}?room=${room?.code || ''}`;
    void navigator.clipboard.writeText(link).then(
      () => setCopied('Ritual link copied'),
      () => setCopied('Copy blocked — select the link manually'),
    );
  };
  const archive = room ? room.history.map(h =>
    `========== GAME ${h.game} · PLAYER ${h.winner + 1} WON ==========\n\n=== PLAYER 1 ===\n\n${teamImport(h.teams[0])}\n\n=== PLAYER 2 ===\n\n${teamImport(h.teams[1])}`
  ).join('\n\n\n') : '';
  const currentArchive = room && room.teams[0].length === 6
    ? `${archive}\n\n=== CURRENT GAME ===\n\n=== PLAYER 1 ===\n\n${teamImport(room.teams[0])}\n\n=== PLAYER 2 ===\n\n${teamImport(room.teams[1])}` : archive;

  if (!room) return <div className="lobby">
    <canvas ref={bgCanvas} className="bg" />
    <div className="lobby-shell">
      <section className="hero-copy">
        <div className="eyebrow">No fate. No favors. No mercy.</div>
        <h1>HEX<span>DRAFT</span></h1>
        <p className="hero-lede">Two players. One cursed coin. Two damned teams. Real Pokémon Showdown battles, decided by a toss and settled in the arena.</p>
        <div className="hero-rule"><span>01 / CALL</span><span>02 / CAST</span><span>03 / BATTLE</span></div>
        <div className="coven">
          {coven.map(c => <figure key={c.name}>
            <img src={asset(c.img)} alt={`${c.name}, ${c.role}`} />
            <figcaption><b>{c.name}</b><small>{c.role}</small></figcaption>
          </figure>)}
        </div>
      </section>
      <section className="lobby-card">
        <div className="card-eyebrow">Enter the circle</div>
        <h2>Open a ritual</h2>
        <p>Share a link with one friend. The coin decides who picks first; the rest is on you.</p>
        <label>Your name<input value={name} onChange={e => setName(e.target.value)} maxLength={24} /></label>
        <label>Format<select value={bestOf} onChange={e => setBestOf(Number(e.target.value))}><option value={3}>Best of 3</option><option value={5}>Best of 5</option></select></label>
        <div className="row"><button className="primary" onClick={() => create(name, bestOf)} disabled={!connected}>Create room</button></div>
        <div className="divider">or join a friend</div>
        <div className="row"><input placeholder="YOUR NAME" value={joinName} onChange={e => setJoinName(e.target.value)} maxLength={24} /><input placeholder="ROOM CODE" value={joinCode} onChange={e => setJoinCode(e.target.value)} /><button onClick={() => join(joinCode, joinName)} disabled={!connected || !joinCode}>Join</button></div>
        {error && <p className="error">{error}</p>}
        <small>{useBackend ? 'Backend' : 'Peer relay'} {connected ? 'connected' : 'offline'} · no account · no music · add ?ws=wss://… for your own backend</small>
      </section>
    </div>
  </div>;

  const phase = room.phase;
  const canPick = phase === 'pick' && seat === room.tossWinner;
  return <div className="app">
    <canvas ref={bgCanvas} className="bg" />
    <header className="topbar">
      <div><span className="eyebrow">Ritual {room.code}</span><h1>HEX<em>DRAFT</em></h1></div>
      <div className="topright">
        <span className={connected ? 'dot on' : 'dot'} /> {connected ? 'LIVE' : 'OFFLINE'}
        <button onClick={share}>Share link</button>
        <button onClick={() => send({ type: 'reset', bestOf })}>New ritual</button>
        {copied && <small className="toast">{copied}</small>}
      </div>
    </header>

    <div className="stage">
      <div className="oracle">
        <canvas ref={dealerCanvas} />
        <img src={asset('goth-dealer.webp')} alt="The oracle" />
        <span className="oracle-tag">THE ORACLE · COIN KEEPER</span>
      </div>
      <div className="table">
        <div className="scorebar"><span>PLAYER 1 · {room.players[0]?.name || 'Waiting'}</span><strong>{room.wins[0]}</strong><i>:</i><strong>{room.wins[1]}</strong><span>{room.players[1]?.name || 'Waiting'} · PLAYER 2</span></div>
        <p className="status">{phase === 'calls' ? `GAME ${room.games + 1} / ${room.bestOf} · CHOOSE YOUR SIDE` : phase.toUpperCase()}</p>
        <div className="coinrow">
          <div className="coinstage"><canvas ref={coinCanvas} /></div>
          <div className="calls">
            {[0, 1].map(p => <div key={p} className="callgroup">
              <strong>PLAYER {p + 1}</strong>
              {['heads', 'tails'].map(s => <button key={s} disabled={phase !== 'calls' || myCall === s || room.calls[1 - p] === s || seat !== p} className={myCall === s ? 'sel' : ''} onClick={() => call(s)}>{s.toUpperCase()}</button>)}
              <small>{room.calls[p] ? `BOUND: ${room.calls[p]}` : 'unclaimed'}</small>
            </div>)}
            <button className="primary" disabled={phase !== 'calls' || !room.calls.every(Boolean) || !room.players[1]} onClick={() => send({ type: 'flip' })}>Cast the coin</button>
            {room.result && <p className="result">{room.result.toUpperCase()} · PLAYER {(room.tossWinner ?? 0) + 1} claims the first pick</p>}
          </div>
        </div>
        <div className="phase-actions">
          {phase === 'spin' && <button className="primary" onClick={() => send({ type: 'spin' })}>Draw two teams</button>}
          {phase === 'battle' && <><button onClick={() => send({ type: 'result', winner: 0 })}>PLAYER 1 WON</button><button onClick={() => send({ type: 'result', winner: 1 })}>PLAYER 2 WON</button></>}
          {phase === 'between' && <button className="primary" onClick={() => send({ type: 'next' })}>Next game</button>}
          {phase === 'complete' && <p className="ritual-win">RITUAL COMPLETE · PLAYER {(room.wins[0] > room.wins[1] ? 0 : 1) + 1} WINS {room.wins[0]}–{room.wins[1]}</p>}
        </div>
      </div>
    </div>

    {phase === 'pick' && canPick && <section className="draft">
      <h2>THE FIRST PICK IS YOURS · CHOOSE SIX</h2>
      <div className="draft-grid">{room.candidates?.map((team, i) => <div key={i}>
        <Teams teams={[team, []]} titles={[`TEAM ${i ? 'B' : 'A'}`, '']} />
        <button className="primary" onClick={() => send({ type: 'pick', team: i })}>PICK TEAM {i ? 'B' : 'A'}</button>
      </div>)}</div>
    </section>}

    {room.teams[0].length === 6 && <Teams teams={room.teams} titles={[`PLAYER 1 · ${room.players[0]?.name}`, `PLAYER 2 · ${room.players[1]?.name}`]} />}

    <section className="showdown">
      <div className="handoff-head">
        <div className="eyebrow">04 / The handoff</div>
        <h2>Take the fight to Showdown</h2>
        <p>Showdown deliberately refuses to run inside an iframe — it prints IN FRAME and sends you to the real site. Nothing we can do from here changes that, so we hand you the team and open a proper tab.</p>
      </div>
      <ol className="steps">
        <li><b>01</b><span>Copy your team below.</span></li>
        <li><b>02</b><span>Open Team Builder → Import/Export → paste → Import.</span></li>
        <li><b>03</b><span>Challenge the other player in gen9ou. Report the winner here.</span></li>
      </ol>
      <div className="row">
        {[0, 1].map(i => room.teams[i].length === 6 && <button key={i} disabled={!room.teams[i].length} onClick={async () => setCopied(await copy(teamImport(room.teams[i])) ? `Team ${i + 1} copied` : 'Copy blocked — select manually')}>COPY P{i + 1} TEAM</button>)}
        <button className="primary" onClick={() => window.open(`${showdownUrl()}teambuilder`, '_blank', 'noopener')}>OPEN SHOWDOWN ↗</button>
        <button onClick={share}>COPY RITUAL LINK</button>
      </div>
      <textarea readOnly value={currentArchive} placeholder="Team archive appears here" />
      {copied && <small>{copied}</small>}
    </section>

    {error && <p className="error" onClick={() => setError('')}>{error}</p>}
  </div>;
}
