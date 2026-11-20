import { useEffect, useRef, useState } from 'react';
import { useCasinoSocket } from './net/client.js';
import { DealerScene } from './scenes/DealerScene.js';
import { CoinScene } from './scenes/CoinScene.js';
import { CasinoScene } from './scenes/CasinoScene.js';
import { PokemonCard } from './cards/PokemonCard.js';
import { teamImport } from './game/logic.js';
import { copy, psimEmbedUrl, showdownUrl } from './showdown/handoff.js';
import type { Pokemon } from './pokemon/pool.js';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

function Teams({ teams, titles }: { teams: [Pokemon[], Pokemon[]]; titles: string[] }) {
  return <div className="teams">
    {teams.map((team, i) => <section className="team" key={i}>
      <header><h3>{titles[i]}</h3><span>{team.length}/6</span></header>
      <div className="reels">{Array.from({ length: 6 }, (_, s) => <PokemonCard key={s} p={team[s] || null} winner={team.length === 6} />)}</div>
    </section>)}
  </div>;
}

export function App() {
  const { room, seat, connected, error, create, join, send, setError } = useCasinoSocket();
  const [name, setName] = useState('Player 1');
  const [joinCode, setJoinCode] = useState(() => new URLSearchParams(location.search).get('room') || '');
  const [bestOf, setBestOf] = useState(3);
  const [showIframe, setShowIframe] = useState(false);
  const [copied, setCopied] = useState('');
  const dealerCanvas = useRef<HTMLCanvasElement>(null);
  const coinCanvas = useRef<HTMLCanvasElement>(null);
  const bgCanvas = useRef<HTMLCanvasElement>(null);
  const dealerScene = useRef<DealerScene | null>(null);
  const coinScene = useRef<CoinScene | null>(null);
  const bgScene = useRef<CasinoScene | null>(null);
  const flipped = useRef('');

  useEffect(() => {
    if (!dealerCanvas.current) return;
    const img = new Image();
    img.onload = () => {
      if (!dealerCanvas.current) return;
      try { dealerScene.current = new DealerScene(dealerCanvas.current.parentElement!, dealerCanvas.current, img); }
      catch (e) { (window as unknown as { __DEALER_ERROR__?: string }).__DEALER_ERROR__ = String(e); }
    };
    img.src = asset('dealer-atlas.webp');
    return () => { dealerScene.current?.dispose(); dealerScene.current = null; };
  }, [!!room]);
  useEffect(() => {
    if (coinCanvas.current) coinScene.current = new CoinScene(coinCanvas.current);
    if (bgCanvas.current) bgScene.current = new CasinoScene(bgCanvas.current);
    return () => { coinScene.current?.dispose(); bgScene.current?.dispose(); coinScene.current = null; };
  }, [!!room]);

  const roundKey = room ? `${room.code}-${room.games}` : '';
  useEffect(() => {
    if (room?.result && room.phase !== 'calls' && flipped.current !== roundKey) {
      flipped.current = roundKey;
      void coinScene.current?.flip(room.result);
    }
  }, [room?.result, room?.phase, roundKey]);

  const myCall = seat !== null ? room?.calls[seat] : null;
  const call = (side: string) => send({ type: 'call', side });
  const archive = room ? room.history.map(h =>
    `========== GAME ${h.game} · PLAYER ${h.winner + 1} WON ==========\n\n=== PLAYER 1 ===\n\n${teamImport(h.teams[0])}\n\n=== PLAYER 2 ===\n\n${teamImport(h.teams[1])}`
  ).join('\n\n\n') : '';
  const currentArchive = room && room.teams[0].length === 6
    ? `${archive}\n\n=== CURRENT GAME ===\n\n=== PLAYER 1 ===\n\n${teamImport(room.teams[0])}\n\n=== PLAYER 2 ===\n\n${teamImport(room.teams[1])}` : archive;

  if (!room) return <div className="lobby">
    <canvas ref={bgCanvas} className="bg" />
    <div className="lobby-card">
      <div className="eyebrow">Las Vegas meets Kanto</div>
      <h1>Pokémon <span>Battle Draft</span> Casino</h1>
      <p>Two players. One golden coin. Two cursed teams. Real Pokémon Showdown battles.</p>
      <label>Your name<input value={name} onChange={e => setName(e.target.value)} maxLength={24} /></label>
      <label>Format<select value={bestOf} onChange={e => setBestOf(Number(e.target.value))}><option value={3}>Best of 3</option><option value={5}>Best of 5</option></select></label>
      <div className="row"><button className="primary" onClick={() => create(name, bestOf)} disabled={!connected}>Create room</button></div>
      <div className="divider">or join a friend</div>
      <div className="row"><input placeholder="ROOM CODE" value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} /><button onClick={() => join(joinCode, name)} disabled={!connected || !joinCode}>Join</button></div>
      {error && <p className="error">{error}</p>}
      <small>Backend {connected ? 'connected' : 'offline'} · silent by design · no music or sound effects</small>
    </div>
  </div>;

  const phase = room.phase;
  const canPick = phase === 'pick' && seat === room.tossWinner;
  return <div className="app">
    <canvas ref={bgCanvas} className="bg" />
    <header className="topbar">
      <div><span className="eyebrow">Room {room.code}</span><h1>POKÉMON <em>BATTLE DRAFT</em> CASINO</h1></div>
      <div className="topright">
        <span className={connected ? 'dot on' : 'dot'} /> {connected ? 'LIVE' : 'OFFLINE'}
        <button onClick={() => { void navigator.clipboard.writeText(`${location.origin}${location.pathname}?room=${room.code}`); setCopied('Link copied'); }}>Share link</button>
        <button onClick={() => send({ type: 'reset', bestOf })}>New series</button>
      </div>
    </header>

    <div className="stage">
      <div className="dealer"><canvas ref={dealerCanvas} /><img src={asset('dealer-portrait.webp')} alt="Casino dealer" /><span className="dealer-tag">MIRAGE · HOUSE DEALER</span></div>
      <div className="table">
        <div className="scorebar"><span>PLAYER 1 · {room.players[0]?.name || 'Waiting'}</span><strong>{room.wins[0]}</strong><i>:</i><strong>{room.wins[1]}</strong><span>{room.players[1]?.name || 'Waiting'} · PLAYER 2</span></div>
        <p className="status">{phase === 'calls' ? `GAME ${room.games + 1} / ${room.bestOf} · CALL HEADS OR TAILS` : phase.toUpperCase()}</p>
        <div className="coinrow">
          <div className="coinstage"><canvas ref={coinCanvas} /></div>
          <div className="calls">
            {[0, 1].map(p => <div key={p} className="callgroup">
              <strong>PLAYER {p + 1}</strong>
              {['heads', 'tails'].map(s => <button key={s} disabled={phase !== 'calls' || myCall === s || room.calls[1 - p] === s || seat !== p} className={myCall === s ? 'sel' : ''} onClick={() => call(s)}>{s.toUpperCase()}</button>)}
              <small>{room.calls[p] ? `LOCKED: ${room.calls[p]}` : 'no call'}</small>
            </div>)}
            <button className="primary" disabled={phase !== 'calls' || !room.calls.every(Boolean) || !room.players[1]} onClick={() => send({ type: 'flip' })}>FLIP THE GOLDEN COIN</button>
            {room.result && <p className="result">{room.result.toUpperCase()} · PLAYER {(room.tossWinner ?? 0) + 1} WINS THE TOSS</p>}
          </div>
        </div>
        <div className="phase-actions">
          {phase === 'spin' && <button className="primary" onClick={() => send({ type: 'spin' })}>DEAL TWO TEAMS</button>}
          {phase === 'battle' && <><button onClick={() => send({ type: 'result', winner: 0 })}>PLAYER 1 WON</button><button onClick={() => send({ type: 'result', winner: 1 })}>PLAYER 2 WON</button></>}
          {phase === 'between' && <button className="primary" onClick={() => send({ type: 'next' })}>NEXT GAME</button>}
          {phase === 'complete' && <p className="jackpot">JACKPOT · PLAYER {(room.wins[0] > room.wins[1] ? 0 : 1) + 1} TAKES THE SERIES {room.wins[0]}–{room.wins[1]}</p>}
        </div>
      </div>
    </div>

    {phase === 'pick' && canPick && <section className="draft">
      <h2>THE TOSS WINNER PICKS FIRST · CHOOSE YOUR SIX</h2>
      <div className="draft-grid">{room.candidates?.map((team, i) => <div key={i}>
        <Teams teams={[team, []]} titles={[`TEAM ${i ? 'B' : 'A'}`, '']} />
        <button className="primary" onClick={() => send({ type: 'pick', team: i })}>PICK TEAM {i ? 'B' : 'A'}</button>
      </div>)}</div>
    </section>}

    {room.teams[0].length === 6 && <Teams teams={room.teams} titles={[`PLAYER 1 · ${room.players[0]?.name}`, `PLAYER 2 · ${room.players[1]?.name}`]} />}

    <section className="showdown">
      <h2>Showdown handoff</h2>
      <p>Generate valid import text, copy a team, open Showdown and import it. A cross-origin iframe cannot be controlled from this page, so battles launch there — not here.</p>
      <div className="row">
        {[0, 1].map(i => room.teams[i].length === 6 && <button key={i} disabled={!room.teams[i].length} onClick={async () => setCopied(await copy(teamImport(room.teams[i])) ? `Team ${i + 1} copied` : 'Copy blocked — select manually')}>COPY P{ i + 1 } TEAM</button>)}
        <button onClick={() => setShowIframe(true)}>OPEN psim.us EMBED</button>
        <a className="button" href={showdownUrl()} target="_blank" rel="noreferrer">OPEN SHOWDOWN ↗</a>
      </div>
      <textarea readOnly value={currentArchive} placeholder="Team archive appears here" />
      {copied && <small>{copied}</small>}
    </section>

    {showIframe && <div className="modal" onClick={() => setShowIframe(false)}>
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
        <header><strong>psim.us embedded client</strong><button onClick={() => setShowIframe(false)}>CLOSE</button></header>
        <p>Embedding is officially supported by Showdown servers, but this parent page cannot inject teams or start a battle inside the iframe.</p>
        <iframe title="Showdown" src={psimEmbedUrl()} />
      </div>
    </div>}
    {error && <p className="error" onClick={() => setError('')}>{error}</p>}
  </div>;
}
