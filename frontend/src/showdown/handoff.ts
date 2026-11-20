import type { Pokemon } from '../pokemon/pool.js';
import { teamImport } from '../game/logic.js';

export function showdownUrl() { return 'https://play.pokemonshowdown.com/'; }

export async function copy(value: string) {
  try { await navigator.clipboard.writeText(value); return true; }
  catch { return false; }
}

/** Approach B: hand off valid import text; a cross-origin iframe cannot be driven from here. */
export function handoff(team: Pokemon[], format = 'gen9ou') {
  return {
    text: teamImport(team),
    open: () => window.open(`${showdownUrl()}?format=${encodeURIComponent(format)}`, '_blank', 'noopener'),
    instructions: [
      'Open Pokémon Showdown → Team Builder.',
      'Choose Import/Export, paste the copied team, then click Import.',
      'Challenge your opponent in the agreed format.',
    ],
  };
}
