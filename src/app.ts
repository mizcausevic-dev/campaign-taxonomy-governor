// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  audienceRisks,
  launchReadiness,
  payload,
  summary,
  taxonomyLane,
  verification
} from "./services/campaignTaxonomyGovernorService";
import {
  renderAudienceRisks,
  renderDocs,
  renderLaunchReadiness,
  renderOverview,
  renderTaxonomyLane,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5516);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/taxonomy-lane", (_req, res) => res.type("html").send(renderTaxonomyLane()));
app.get("/audience-risks", (_req, res) => res.type("html").send(renderAudienceRisks()));
app.get("/launch-readiness", (_req, res) => res.type("html").send(renderLaunchReadiness()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/taxonomy-lane", (_req, res) => res.json(taxonomyLane()));
app.get("/api/audience-risks", (_req, res) => res.json(audienceRisks()));
app.get("/api/launch-readiness", (_req, res) => res.json(launchReadiness()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Campaign Taxonomy Governor listening on http://${host}:${port}`);
  });
}

export default app;
