import fs from "node:fs";
import path from "node:path";

import {
  audienceRisks,
  launchReadiness,
  payload,
  summary,
  taxonomyLane,
  verification
} from "../src/services/campaignTaxonomyGovernorService";
import {
  renderAudienceRisks,
  renderDocs,
  renderLaunchReadiness,
  renderOverview,
  renderTaxonomyLane,
  renderVerification
} from "../src/services/render";

const outputDir = path.resolve(__dirname, "..", "site");
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, "api"), { recursive: true });
fs.copyFileSync(path.resolve(__dirname, "..", "CNAME"), path.join(outputDir, "CNAME"));

const pages: Record<string, string> = {
  "index.html": renderOverview(),
  "taxonomy-lane.html": renderTaxonomyLane(),
  "audience-risks.html": renderAudienceRisks(),
  "launch-readiness.html": renderLaunchReadiness(),
  "verification.html": renderVerification(),
  "docs.html": renderDocs()
};

const rewrites: Array<[string, string]> = [
  ['href="/taxonomy-lane"', 'href="taxonomy-lane.html"'],
  ['href="/audience-risks"', 'href="audience-risks.html"'],
  ['href="/launch-readiness"', 'href="launch-readiness.html"'],
  ['href="/verification"', 'href="verification.html"'],
  ['href="/docs"', 'href="docs.html"']
];

for (const [filename, html] of Object.entries(pages)) {
  let content = html;
  for (const [from, to] of rewrites) {
    content = content.replaceAll(from, to);
  }
  fs.writeFileSync(path.join(outputDir, filename), content, "utf8");
}

const apiPayloads: Record<string, unknown> = {
  "api/dashboard/summary.json": summary(),
  "api/taxonomy-lane.json": taxonomyLane(),
  "api/audience-risks.json": audienceRisks(),
  "api/launch-readiness.json": launchReadiness(),
  "api/verification.json": verification(),
  "api/sample.json": payload()
};

for (const [filename, data] of Object.entries(apiPayloads)) {
  fs.mkdirSync(path.dirname(path.join(outputDir, filename)), { recursive: true });
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2), "utf8");
}
