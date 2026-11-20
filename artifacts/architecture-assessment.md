# Architecture assessment — Pokémon Battle Draft Casino

Source inspected: `pokemon_roulette_battle_draft_deluxe_1.html` (1,066,985 bytes, 1401 lines, 2 `<script>` blocks).

## What exists (verified in source)
- `POOL`: 38 curated Pokémon with species, dex id, role, ability, item, nature, EVs, Tera type, four moves and a `quirk` line. This is the exact data to preserve.
- Full local game flow: two opposite coin calls -> `secureCoinSide()` (crypto.getRandomValues, Math.random fallback) -> staggered slot-card spin of 12 unique Pokémon -> toss winner picks Team A/B -> Showdown import text -> record winner -> best-of-3 / best-of-5 scoreboard -> next round / reset series / round history.
- Export: `teamImport()` produces Showdown-style importable text; copy-one, copy-all and archive textarea already work.
- Visuals: layered CSS casino themes, an 8-frame dealer atlas, a Three.js r0.187 module that paints atlas frames onto a subdivided plane with spring sway, mouse parallax, neon lights, 8 floating chips and 90 star points, plus a CSS fallback. `prefers-reduced-motion` is honoured. No audio elements anywhere.
- No multiplayer, no WebSocket, no iframe, no backend, no tests, no build system.

## Retain
Exact `POOL` sets; coin/series rules; Showdown import format; dealer artwork and atlas; reduced-motion and no-audio constraints; CSS fallback when WebGL fails.

## Refactor
Split the monolith into `src/pokemon/pool.ts`, `src/game/*` state machine, `src/cards/*`, `src/scenes/*`, `src/showdown/*`, `src/ui/*`; consolidate the five stacked CSS themes into one design-token system.

## Rebuild
- Frontend: Vite + strict TypeScript + React (or vanilla TS if React adds no value), vendored Three.js, responsive.
- Backend: Node/TS WebSocket server, authoritative for rooms, coin flips (crypto), team generation, selection, score and reconnect. GitHub Pages hosts only the frontend.
- Three.js: split casino/coin/dealer scenes; keep dealer unobstructed; deterministic coin result drives final rotation.
- Tests: Vitest for generator/state machine, Playwright for two-browser room sync.

## Pokémon Showdown reality check
Official client is AGPL-3.0. `psim.us` may be embeddable, but a cross-origin iframe cannot be controlled from the parent page: team loading and challenge launching cannot be assumed. Approach B (valid import text + open Showdown + concise handoff) is the robust default; Approach C (licensed custom client) is the only route to one-click integrated battles.

## Hosting limits
No backend can run on GitHub Pages. Backend must be deployed separately (Render/Railway/Fly.io/VPS) with WSS and CORS configured. This environment can implement and locally test the server, but cannot create accounts or deploy it without user credentials.
