# Campaign Taxonomy Governor

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

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)
