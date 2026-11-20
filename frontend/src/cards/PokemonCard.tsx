import { useState } from 'react';
import type { Pokemon } from '../pokemon/pool.js';

export function PokemonCard({ p, spinning = false, winner = false }: { p: Pokemon | null; spinning?: boolean; winner?: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  if (!p) return <div className="card card-empty"><div className="card-back">?</div><span className="card-name">AWAITING DEAL</span></div>;
  return (
    <div
      className={`card ${spinning ? 'spinning' : ''} ${winner ? 'winner' : ''}`}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: ((e.clientY - r.top) / r.height - .5) * -12, y: ((e.clientX - r.left) / r.width - .5) * 12 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      title={p.quirk}
    >
      <div className="card-inner">
        <div className="card-art"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`} alt={p.name} loading="lazy" /></div>
        <div className="card-name">{p.name}</div>
        <div className="card-role">{p.role}</div>
        <div className="card-ability">ABILITY · {p.ability}</div>
        <div className="card-meta">{p.item} · {p.tera} TERA</div>
      </div>
    </div>
  );
}
