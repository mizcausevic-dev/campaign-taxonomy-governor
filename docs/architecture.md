# Architecture

## Overview

`campaign-taxonomy-governor` is a lightweight TypeScript + Express governor for modeling the operating layer between campaign naming changes, audience mappings, attribution dependencies, and launch-safe shipping posture.

## Surfaces

- `overview`
  - active taxonomy changes
  - blocked audience dependencies
  - launch-ready changes
  - governance recommendation
- `taxonomy-lane`
  - campaign-by-campaign naming queue
  - owner routing
  - downstream impact
- `audience-risks`
  - CRM, ads, attribution, and dashboard blockers
  - required evidence
  - readiness posture
- `launch-readiness`
  - change packets
  - completeness score
  - go/no-go timing
- `verification`
  - what the repo proves about campaign-governance systems

## Data Model

- `TaxonomyChange`
  - channel, campaign name, owner, risk, downstream impact, next action
- `AudienceRisk`
  - blocker, source, required evidence, owner, readiness, impact area
- `LaunchPacket`
  - audience, completeness score, launch window, blocker, decision note

## Design Principle

Campaign state should be inspectable by growth, RevOps, analytics, and platform stakeholders. The system should explain:
- which taxonomy change is under pressure right now
- which downstream dependency is still missing
- who owns the next move
- where launch or attribution risk is building
