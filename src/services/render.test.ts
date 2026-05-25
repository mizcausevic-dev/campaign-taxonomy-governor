import { describe, expect, test } from "vitest";

import {
  renderAudienceRisks,
  renderDocs,
  renderLaunchReadiness,
  renderOverview,
  renderTaxonomyLane,
  renderVerification
} from "./render";
import {
  audienceBlocks,
  launchPackets,
  taxonomyChanges
} from "../data/sampleCampaigns";

const renderers = [
  ["overview", renderOverview],
  ["taxonomy-lane", renderTaxonomyLane],
  ["audience-risks", renderAudienceRisks],
  ["launch-readiness", renderLaunchReadiness],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Campaign Taxonomy Governor");
    expect(html).toContain('href="/taxonomy-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("taxonomy lane lists every change with a risk tag", () => {
    const html = renderTaxonomyLane();
    for (const change of taxonomyChanges) {
      expect(html).toContain(change.changeId);
    }
    expect(html).toContain('class="tag red"');
  });

  test("audience risks list every block with readiness tags", () => {
    const html = renderAudienceRisks();
    for (const block of audienceBlocks) {
      expect(html).toContain(block.riskId);
    }
    expect(html).toContain('class="tag red"');
    expect(html).toContain('class="tag yellow"');
  });

  test("launch readiness shows packets and completeness scores", () => {
    const html = renderLaunchReadiness();
    for (const packet of launchPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/audience-risks");
    expect(html).toContain("/launch-readiness");
  });
});
