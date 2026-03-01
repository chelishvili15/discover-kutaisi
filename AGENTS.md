# Repository Guidelines

## Project Structure & Module Organization
This repo is an Astro site with all app and content assets under `frontend/`:
- `frontend/src/pages`: route files and route directories (`/`, `/about`, `/contact`, `/reviews`, `/transfers`, `/404`, `/tours`, `/tours/[slug]`, `/places-to-visit`, `/places-to-visit/[slug]`, `/blog`, `/blog/[slug]`, `/blog/page/[page]`).
- `frontend/src/components`: reusable UI blocks (cards, filters, header/footer, booking forms, SEO helpers).
- `frontend/src/data`: data loaders/aggregators for site content.
- `frontend/src/content`: source JSON and media content (`blog`, `pages`, `places`, `tours`, `transfers`, `img`, `fonts`).
- `frontend/src/lib`: helpers (blog parsing, currency, filters, SEO, link builders).
- `frontend/src/layouts`, `frontend/src/styles`, `frontend/src/types`: shared layout, global styles, and types.
- `frontend/src/components/RichDetailsRenderer.astro`: renderer for structured itinerary/activity details and inline styled spans/links.
- `frontend/src/data/tours.ts`: normalizes tour JSON (supports `itinerary` and legacy `iterinaries`) into typed `Tour` data.
- `frontend/public/content`: synced static assets served at runtime.
- `frontend/scripts/sync-content-images.mjs`: copies content images/fonts into `public/content` (runs automatically via `predev`, `precheck`, `prebuild`).
- `FRONTEND.md`: current frontend behavior/spec.

Keep implementation changes in `frontend/src/*`; update content in `frontend/src/content/*` (not `frontend/public/content/*` directly).

## Build, Test, and Development Commands
Run from `frontend/`:
- `npm run dev`: run content sync and start local Astro dev server (`--host --force`).
- `npm run check`: Astro diagnostics/type checks.
- `npm run build`: production static build.
- `npm run preview`: preview built output.

## Coding Style & Naming Conventions
- Language: Astro components (`.astro`) with TypeScript support; Tailwind for styling.
- Indentation: 2 spaces.
- Naming: `PascalCase` for components, `camelCase` for vars/functions, kebab-case for route slugs.
- Keep components focused and reusable; avoid oversized page files.

## Tours Content Conventions (Current)
- Tour JSON lives in `frontend/src/content/tours/*.json`.
- Use `itinerary` (not `iterinaries`) for new content.
- `itinerary[].details` and `activities[].details` should use structured blocks:
  - `{ "type": "heading", "level": 2 | 3, "text": "..." }`
  - `{ "type": "paragraph", "spans": [...] }`
  - `{ "type": "list", "ordered": true|false, "items": [[...spans]] }`
- Span schema supports `text`, optional `href`, `bold`, `italic`, `size` (`xs|sm|base|lg`), and `color` (`default|muted|dark|brand|white`).
- Place links must be embedded directly in `details` spans via `href`; tour page no longer injects separate top link paragraphs from `placeSlug`.
- `activities: null` means no activity section should render for that stop.
- Current itinerary icon convention in tour files:
  - first/last stop: `flag-icon.svg`
  - transfer stops: `car-icon.svg`
  - place stops: `diamond-icon.svg`
  - activity items: `pushpin-icon.svg`

## Testing Guidelines
No formal test suite is committed yet. At minimum:
- run `npm run check` and `npm run build` before PRs,
- verify key pages manually (`/`, `/tours`, `/transfers`, `/places-to-visit`, `/blog`) on desktop/mobile.

If introducing tests, prefer `*.test.ts` / `*.spec.ts` near source or under `frontend/tests/`.

## Commit & Pull Request Guidelines
Follow Conventional Commits:
- `feat: add places card grid`
- `fix: handle missing place info.txt`

PRs should include:
- clear summary and scope,
- linked issue/task,
- screenshots for UI changes (desktop + mobile),
- notes on content/schema/env changes.

## Security & Configuration Tips
Do not commit secrets or private keys. Use environment variables (`.env`) for sensitive values and keep real secrets out of version control. Commit only safe examples (for example `.env.example`).
