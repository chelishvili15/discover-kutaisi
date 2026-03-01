# Discover Kutaisi Monorepo

This repository is structured as a monorepo.

Today, it contains one production app:
- `frontend/` - public-facing Astro website (`discoverkutaisi.com`)

Additional directories (for example `admin/`, `api/`, `mobile/`, `packages/`) can be introduced later without changing the root workflow model.

## Repository Layout

```text
.
|-- frontend/        # Public website (Astro + TypeScript + Tailwind)
|-- AGENTS.md        # Repository operating instructions for coding agents
|-- FRONTEND.md      # Frontend behavior/specification
|-- TECH_STACK.md    # Stack notes
`-- README.md        # This file
```

## Current App: `frontend`

`frontend` is a static Astro site with JSON-driven content and synced media assets.

Main areas:
- `frontend/src/pages` - routes
- `frontend/src/components` - reusable UI
- `frontend/src/data` - normalized data loaders
- `frontend/src/content` - source content (JSON + media)
- `frontend/public/content` - runtime-served synced assets
- `frontend/scripts/sync-content-images.mjs` - content asset sync script

## Getting Started

Prerequisites:
- Node.js 18+ (recommended: current LTS)
- npm

Install dependencies:

```bash
cd frontend
npm install
```

Run local development server:

```bash
npm run dev
```

Other useful commands:

```bash
npm run check    # Astro diagnostics + type checks
npm run build    # Production build
npm run preview  # Preview built output
```

Note: content image/font syncing runs automatically via `predev`, `precheck`, and `prebuild`.

## Content and Source of Truth

- Update implementation code under `frontend/src/*`.
- Update content under `frontend/src/content/*`.
- Do not edit `frontend/public/content/*` directly (generated/synced output).

## Monorepo Growth Convention (Future)

When adding new top-level projects:
- Keep each app/service self-contained with its own `README.md`.
- Prefer clear directory names (`frontend`, `api`, `admin`, `mobile`, `packages/*`).
- Document local run/build/test commands in that directory and link them from this root README.

## Documentation

- [FRONTEND.md](./FRONTEND.md): frontend build/spec details
- [AGENTS.md](./AGENTS.md): repository guidelines used by coding agents
- [TECH_STACK.md](./TECH_STACK.md): stack summary
