# Pokémon Battle Draft Casino

Two-player, server-authoritative Pokémon draft casino. Create a room, share the link, call opposite sides of a coin, draft two cursed six-Pokémon teams, take them to real Pokémon Showdown and play a best-of-3 or best-of-5 series.

## Architecture
- `frontend/` — Vite + strict TypeScript + React + Three.js. GitHub Pages hosts this.
- `backend/` — Node + TypeScript + `ws`. Authoritative for rooms, coin flips (crypto), team generation, selection, score, reconnect and expiry.
- `artifacts/architecture-assessment.md` — inspection of the original single-file game and what was retained/refactored/rebuilt.

## Local development (Windows PowerShell)
```powershell
cd C:\Users\Garza\pokemon-casino
.\scripts\start-backend.ps1     # terminal 1 — ws://127.0.0.1:8787, health at /health
.\scripts\start-frontend.ps1    # terminal 2 — http://127.0.0.1:5173
```
Open two browser windows. In window 1 choose a name and **Create room**. Copy the room code or **Share link**. In window 2 open the link and **Join**. Both clients see identical state. Refreshing reconnects using the token in localStorage.

## Tests
```powershell
cd frontend; npm install; npm test; npm run build
```
Tests cover the exact 38-set pool, unique 12-Pokémon deals, Showdown import formatting, coin resolution and series math. Browser-level two-client synchronization is documented in `tests/` and should be run with Playwright where browsers are installed.

## Showdown integration — honest status
Official Showdown servers can be embedded in an iframe (`psim.us`), but the iframe is cross-origin: this page cannot inject teams, set a format or launch a challenge inside it. Implemented here is **Approach B**: valid Showdown import text, one-click copy per team, archive export, direct Showdown link and an optional `psim.us` embed for reference. True one-click battle launching requires a properly licensed custom client (AGPL-3.0). No claim of full iframe control is made.

The app is silent: no music, no sound effects. Reduced-motion is respected.

## Deployment
Frontend: push to `main`; `.github/workflows/deploy.yml` builds and deploys to GitHub Pages at `/pokemon-casino/`. Set `VITE_BACKEND_URL` in the workflow to your `wss://` backend before publishing.

Backend: deploy `backend/` to Render/Railway/Fly.io/VPS with `PORT`, `ALLOWED_ORIGIN` and `ROOM_TTL_MINUTES`. GitHub Pages cannot run it. Use WSS in production and restrict CORS to your Pages origin. Health endpoint: `GET /health`.

## Limits
- Backend deployment needs an account/credentials; this repo contains the code and configuration, not a live hosted server.
- Pokémon Showdown battle results are recorded manually after the external battle; the casino does not scrape or control Showdown.
- Pokémon artwork loads from PokeAPI's public sprite repository; a local cache is recommended for offline use.
