import { POOL } from './pool.js';
const has = (s, words) => words.some(w => s.toLowerCase().includes(w));
const category = (p) => {
    const r = p.role.toLowerCase();
    if (has(r, ['hazard', 'spikes', 'rocks', 'defog', 'spinner', 'suicide']))
        return 'hazard';
    if (has(r, ['wall', 'tank', 'defensive', 'utility', 'support', 'screens', 'revival', 'disruption']))
        return 'support';
    if (has(r, ['setup', 'sweeper', 'cleaner', 'breaker', 'dance', 'drum']))
        return 'setup';
    if (has(r, ['pivot', 'attacker', 'revenge', 'priority']))
        return 'attacker';
    return 'other';
};
/** Deterministic given `rand`; usable on the server and in unit tests. */
export function generateTeams(rand = Math.random) {
    const pick = (n) => Math.floor(rand() * n);
    for (let attempt = 0; attempt < 200; attempt++) {
        const bag = [...POOL];
        for (let i = bag.length - 1; i > 0; i--) {
            const j = pick(i + 1);
            [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        const first = bag.slice(0, 12);
        const counts = {};
        first.forEach(p => { const c = category(p); counts[c] = (counts[c] || 0) + 1; });
        const ok = (counts.hazard || 0) >= 1 && (counts.hazard || 0) <= 3 &&
            (counts.support || 0) >= 1 && (counts.support || 0) <= 3 &&
            (counts.setup || 0) >= 1 && (counts.setup || 0) <= 4 &&
            (counts.attacker || 0) >= 2 && new Set(first.map(p => p.name)).size === 12;
        if (ok)
            return [first.slice(0, 6), first.slice(6, 12)];
    }
    const fallback = [...POOL].sort(() => rand() - .5).slice(0, 12);
    return [fallback.slice(0, 6), fallback.slice(6, 12)];
}
export function teamImport(team) {
    return team.map(p => `${p.name} @ ${p.item}\nAbility: ${p.ability}\nTera Type: ${p.tera}\nEVs: ${p.evs}\n${p.nature} Nature\n${p.moves.map(m => ' - ' + m).join('\n')}`).join('\n\n');
}
export function coinWinner(calls, result) {
    if (!calls[0] || !calls[1] || calls[0] === calls[1])
        return null;
    return calls[0] === result ? 0 : calls[1] === result ? 1 : null;
}
export const winsNeeded = (bestOf) => Math.floor(bestOf / 2) + 1;
