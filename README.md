# HEXDRAFT

A two-player Pokémon Showdown draft ritual. The repo directory and Pages path are still `pokemon-casino/` for historical reasons; the product has no casino or Vegas theme.

Two players join a room, call heads or tails, watch a cursed coin decide who picks first, draft two six-Pokémon teams, then fight them out on Pokémon Showdown. One browser tab can host both players, or each player can open the shared room link.

## Stack
- `frontend/` — Vite + strict TypeScript + React + Three.js. GitHub Pages hosts this.
- `backend/` — Node + TypeScript + `ws`. Authoritative for rooms, coin flips (crypto), team generation, selection, score, reconnect and expiry.
- `artifacts/` — architecture notes and browser evidence.

## Local development (Windows PowerShell)
```powershell
cd C:\Users\Garza\pokemon-casino
.\scripts\start-backend.ps1     # terminal 1 — ws://127.0.0.1:8787, health at /health
.\scripts\start-frontend.ps1    # terminal 2 — http://127.0.0.1:5173
```
Open two browser windows. Player 1 creates a room and copies the room link. Player 2 opens it and joins. Refreshing reconnects using the token in localStorage. Without `VITE_BACKEND_URL`, the frontend uses a public PeerJS relay where the room creator is the authoritative host; no account is needed.

## Tests
```powershell
cd frontend; npm install; npm test; npm run build
```

## Showdown handoff — why there is no iframe
Showdown is open source, but its client actively refuses to run inside a frame. The live page at `https://play.pokemonshowdown.com/` contains this check:

```js
if (self === top) {
  app = new App();
} else {
  LM.innerHTML += ' IN FRAME<br />Please visit Showdown directly.';
  top.location = self.location;
}
```

So an iframe stops after `Loading client... IN FRAME`, regardless of the origin or URL used. There are no `X-Frame-Options` or `frame-ancestors` headers involved — it is a deliberate JavaScript framebust. Opening `https://psim.us/` directly redirects to `https://play.pokemonshowdown.com/` and the client initialises normally.

This app therefore does not embed Showdown. It copies a valid Showdown import team to the clipboard and opens Team Builder in a real new tab, with the three import steps shown in the room. Embedding is only possible by self-hosting a forked Showdown client (AGPL-3.0, with its own login and security obligations), which is deliberately out of scope here.

## Limitations
- Showdown battle results are entered manually after the external battle; this app neither scrapes nor controls Showdown.
- Pokémon artwork loads from PokeAPI's public sprite repository; a local cache is recommended for offline use.
- The backend needs a separate host with `PORT`, `ALLOWED_ORIGIN` and `ROOM_TTL_MINUTES`. GitHub Pages cannot run it, and a Pages site needs `wss://`.
- The app is silent: no music or sound effects. Reduced-motion preferences are respected.
