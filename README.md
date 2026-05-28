# Campaign Taxonomy Governor

[![CI](https://github.com/mizcausevic-dev/campaign-taxonomy-governor/actions/workflows/ci.yml/badge.svg)](https://github.com/mizcausevic-dev/campaign-taxonomy-governor/actions/workflows/ci.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](./LICENSE)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](./.github/dependabot.yml)
[![Deploy](https://github.com/mizcausevic-dev/campaign-taxonomy-governor/actions/workflows/pages.yml/badge.svg)](https://github.com/mizcausevic-dev/campaign-taxonomy-governor/actions/workflows/pages.yml)


TypeScript governor for campaign taxonomy, naming discipline, audience mappings, launch-safe conventions, and buyer-facing growth operations.

## Why this exists

- Growth teams lose control when campaign naming, UTM structures, and audience logic drift across paid, CRM, and reporting systems.
- Marketing and RevOps teams need to know which campaign changes affect attribution, dashboards, routing, and launch readiness.
- MarTech and AdTech leaders care whether a new campaign can ship safely without fragmenting reporting, audience quality, or funnel clarity.
- Growth buyers want operator tooling that turns taxonomy chaos into governed launches, ownership, and measurable campaign readiness.

## Why this matters (KG Embedded tie-back)

This repo demonstrates the campaign-taxonomy governance primitive for MarTech / AdTech buyers: naming changes, audience blockers, and launch posture tied into one operator surface. A B2B SaaS buyer would care because campaign, CRM, and attribution data often need to surface inside customer-facing products without exposing unsafe write paths or fragmented launch evidence. Kinetic Gain Embedded extends this into security-first in-product analytics for growth, attribution, and revenue operations workflows, see [kineticgain.com/embedded](https://kineticgain.com/embedded).

## Routes

- `/`
- `/taxonomy-lane`
- `/audience-risks`
- `/launch-readiness`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/taxonomy-lane`
- `/api/audience-risks`
- `/api/launch-readiness`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Detail view 1](./screenshots/02-taxonomy-lane-proof.png)
![Detail view 2](./screenshots/03-audience-risks-proof.png)
![Detail view 3](./screenshots/04-launch-readiness-proof.png)

## Local Development

```powershell
cd campaign-taxonomy-governor
npm install
npm run dev
```

Open:
- [http://127.0.0.1:5516/](http://127.0.0.1:5516/)
- [http://127.0.0.1:5516/taxonomy-lane](http://127.0.0.1:5516/taxonomy-lane)
- [http://127.0.0.1:5516/audience-risks](http://127.0.0.1:5516/audience-risks)
- [http://127.0.0.1:5516/launch-readiness](http://127.0.0.1:5516/launch-readiness)
- [http://127.0.0.1:5516/verification](http://127.0.0.1:5516/verification)

## Validation

- `npm run build`
- `npm run test`
- `npm run coverage`
- `npm run demo`
- `npm run smoke`
- `npm run prerender`
- `npm run render:assets`

## Production status

<!-- Maintained by Claude Code (Platform/SRE lane) after v1.0-prod hardening. -->

| Aspect | Status |
|--------|--------|
| CI | Node 20 + 22 matrix — lint · typecheck · coverage · build · demo · smoke · `npm audit` ([workflow](./.github/workflows/ci.yml)) |
| Test coverage | 100% statements on `src/services/` (gate: ≥ 60%) |
| License | [AGPL-3.0-or-later](./LICENSE) |
| Dependencies | Dependabot weekly (npm + GitHub Actions); `npm audit --audit-level=high` in CI |
| Security | [SECURITY.md](./SECURITY.md) — 0 known high/critical advisories at v1.0-prod |
| Deploy | Static prerender → **https://campaigns.kineticgain.com/** (GitHub Pages, [pages workflow](./.github/workflows/pages.yml)) |

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)

## Part of the Kinetic Gain Suite

Operator surface in the [Kinetic Gain Suite](https://suite.kineticgain.com/) — a portfolio of buyer-readable control planes spanning security posture, compliance evidence, data-platform governance, FinOps, and operator workflows. See the suite index for related surfaces. Apex: [kineticgain.com](https://kineticgain.com/).
