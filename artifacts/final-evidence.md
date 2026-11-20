# Final evidence — Pokémon Battle Draft Casino

## What actually ran
- `npm install` in frontend (115 packages) and backend (5 packages); `npm install-scripts approve esbuild` to unblock Vite's binary.
- `npm run build` frontend: tsc --noEmit passed, Vite built `dist/` (696 kB JS / 7.1 kB CSS, gzip 186 kB / 2.3 kB). Chunk-size warning only.
- `npm run build` backend: tsc passed, `dist/index.js` produced.
- `npm test`: 5/5 Vitest tests passed (pool size 38, 12 unique dealt Pokémon across 30 runs, Showdown import text, coin resolution, series math).
- Backend started with `ALLOWED_ORIGIN=http://127.0.0.1:5173`; `GET /health` returned `{"ok":true,"rooms":0}`.
- `node backend/tests/flow.mjs` with two real WebSocket clients: `FLOW_OK { code: '4BCDDB', result: 'heads', winner: 0, games: 1 }`. Verified identical state on both clients through create → join → opposite calls → flip → spin → pick → result → next.
- Two browser sessions (casinoA, casinoB) on `http://127.0.0.1:5173/pokemon-casino/`: room `052678`, A called heads, B called tails, server result TAILS, B won toss, B dealt teams, B picked Team A, both displayed 12 cards, A recorded Player 1 win (score 1:0), A clicked next, both showed `GAME 2 / 3 · CALL HEADS OR TAILS`.
- Dealer: `dealer three-ready` class observed, `dealer-atlas.webp` requested and 200, image naturalWidth 1776. Coin/casino WebGL canvases created without console error (`window.__BOOT_ERROR__` empty in earlier builds; no boot-error trap in this app).

## Fixes made during verification
- Backend initially required `code` on every message; derived room from the socket when absent so the UI and tests work.
- Dealer/coin Three.js effects were initialised while the lobby was rendered (canvas refs null); effects now depend on `!!room`.
- Share link now prefills the room code from `?room=`.

## Repository
`https://github.com/arrojchino/pokemon-casino` — 51 tree entries verified, commit `91f9c1b`. Pages URL `https://arrojchino.github.io/pokemon-casino/` returns 404 until Pages is enabled manually in repo Settings → Pages (GitHub's Pages API is unavailable on this account, so no attempt was made).

## Honest gaps
- Backend is implemented and locally tested but not deployed to Render/Railway/Fly.io: no hosting credentials here. Until deployed, the Pages frontend needs a local backend or `VITE_BACKEND_URL` pointing at a hosted server.
- Showdown is Approach B (import text + open/handoff + psim.us embed). No claim of controlling the cross-origin iframe.
- No Playwright browser suite file was executed; the two-client verification used real WebSocket clients and two browser sessions with the harness.
