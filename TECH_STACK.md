# TECH STACK

## Selected Stack
1. Frontend: `Astro` (static generation) + `TypeScript` + `Tailwind CSS`
2. CMS/API: `Payload CMS` (headless) with Google OAuth login and approved-user allowlist
3. Database: `SQLite` (for Payload data)
4. Reverse Proxy: `Caddy` (HTTPS, host redirects, reverse proxy routing)
5. Runtime/Packaging: `Docker` + `Docker Compose` on custom VPS
6. CI/CD: `GitHub Actions` (build, test, containerize, deploy)

## Architecture Overview
1. `caddy` service:
- Terminates TLS automatically.
- Enforces canonical host redirect.
- Routes:
  - Website traffic -> Astro static service
  - CMS traffic (`/admin`, API endpoints) -> Payload service

2. `astro` service:
- Generated static site build artifact.
- Serves prebuilt HTML/CSS/JS assets.
- Content is fetched from Payload API during build.

3. `payload` service:
- Provides CMS admin panel and delivery API.
- Uses Google login with allowlist-based access control.
- Stores content in SQLite database file mounted on persistent volume.

4. Persistence:
- SQLite file stored on VPS volume (example: `/data/payload/payload.db`).
- Media uploads stored on persistent volume.

## CMS + Static Frontend Publishing Flow
1. Editors create/update content in Payload.
2. Content status changes to `published`.
3. Publish webhook triggers CI pipeline.
4. CI rebuilds Astro static site using Payload published API content.
5. New static build is deployed to VPS.
6. Caddy serves updated files immediately after deployment.

## CI/CD Requirements
1. Pull Request pipeline:
- Install dependencies.
- Lint/typecheck.
- Build Astro and Payload.
- Run tests.

2. Main branch deployment pipeline:
- Build Docker images with version tag.
- Push images to container registry.
- Deploy to VPS via SSH:
  - `docker compose pull`
  - `docker compose up -d`
- Run health checks (`/health` endpoints).
- Roll back to previous image tag if checks fail.

3. CMS publish-trigger pipeline:
- Trigger Astro rebuild/deploy whenever published blog content changes.
- Deploy only if build and SEO checks pass.

4. Service-specific workflows:
- `deploy-astro`: builds/deploys only Astro service.
- `deploy-payload`: builds/deploys only Payload service.
- `deploy-full`: deploys all services together.

## SEO-Focused Build/Release Gates
1. Build fails if critical SEO metadata is missing on publishable pages.
2. Validate canonical URLs and sitemap generation.
3. Validate structured data on priority templates.
4. Block deploy if broken internal links are detected.

## Environment Variables (Minimum)
1. Payload:
- `PAYLOAD_SECRET`
- `DATABASE_URI` (SQLite path, e.g. `file:/data/payload/payload.db`)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `ALLOWED_ADMIN_EMAILS` (comma-separated allowlist)

2. Astro:
- `PAYLOAD_API_URL`
- `PAYLOAD_READ_TOKEN` (read-only token for CI builds)
- `SITE_URL`

3. Deployment:
- `REGISTRY_TOKEN`
- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`

## Docker Usage
Docker is fully supported and recommended for this stack.

Recommended Compose services:
1. `caddy`
2. `astro`
3. `payload`

Recommended volumes:
1. `payload_db` (SQLite file storage)
2. `payload_uploads`
3. `caddy_data`

## SQLite Notes
1. Suitable for small-to-medium traffic and low write concurrency.
2. Ensure backups of SQLite DB file and uploads are automated.
3. Use WAL mode and periodic vacuum/checkpoint operations for stability.
4. Keep migration path to Postgres documented if write/load grows.

## GitHub Actions CMS Access
1. GitHub Actions fetches content from Payload API during `astro build`.
2. Use repository secrets for:
- `PAYLOAD_API_URL`
- `PAYLOAD_READ_TOKEN` (read-only token)
3. Build queries must request only `published` content.
4. If CMS API should stay private, use a self-hosted GitHub runner on the VPS/private network.

## Security Notes
1. Use least-privilege tokens for CI content reads.
2. Rotate CI tokens periodically.
3. Never expose CMS admin credentials to frontend or build logs.
## Deployment Strategy
1. Every service must support independent deployment:
- `astro` can be deployed alone.
- `payload` can be deployed alone.
- `caddy` can be deployed alone.

2. Full-stack deployment must also be supported:
- Deploy all services together in one release when needed.

3. Deployment modes:
- Service-only deploy (single service image update + targeted restart).
- Group deploy (for example `astro + caddy`).
- Full deploy (`astro + payload + caddy`).

4. Docker Compose implementation:
- Keep services in one `docker-compose.yml`.
- Use per-service commands for targeted deploys (`docker compose up -d <service>`).
- Use full command for all services (`docker compose up -d`).