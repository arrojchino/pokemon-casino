import { describe, it, expect } from 'vitest';
import { POOL } from '../src/pokemon/pool.js';
import { generateTeams, teamImport, coinWinner, winsNeeded } from '../src/game/logic.js';

describe('casino logic', () => {
  it('keeps the curated pool intact', () => {
    expect(POOL).toHaveLength(38);
    expect(new Set(POOL.map(p => p.name)).size).toBe(38);
    POOL.forEach(p => {
      expect(p.id).toBeGreaterThan(0);
      expect(p.moves.length).toBe(p.name === 'Ditto' ? 1 : 4);
      expect(p.ability && p.item && p.tera && p.evs && p.nature).toBeTruthy();
    });
  });
  it('deals two unique six-Pokemon teams', () => {
    for (let i = 0; i < 30; i++) {
      const [a, b] = generateTeams();
      expect(a).toHaveLength(6); expect(b).toHaveLength(6);
      expect(new Set([...a, ...b].map(p => p.name)).size).toBe(12);
    }
  });
  it('exports valid Showdown import text', () => {
    const text = teamImport(POOL.slice(0, 1));
    expect(text).toContain('Gholdengo @ Air Balloon');
    expect(text).toContain('Ability: Good as Gold');
    expect(text).toContain('Tera Type: Fighting');
    expect(text).toContain(' - Nasty Plot');
  });
  it('resolves the toss from opposite calls only', () => {
    expect(coinWinner(['heads', 'tails'], 'heads')).toBe(0);
    expect(coinWinner(['heads', 'tails'], 'tails')).toBe(1);
    expect(coinWinner(['heads', 'heads'], 'heads')).toBeNull();
    expect(coinWinner([null, 'tails'], 'tails')).toBeNull();
  });
  it('computes series targets', () => { expect(winsNeeded(3)).toBe(2); expect(winsNeeded(5)).toBe(3); });
});
