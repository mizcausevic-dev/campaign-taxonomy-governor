import { describe, expect, test } from "vitest";

import {
  audienceRisks,
  launchReadiness,
  summary,
  taxonomyLane,
  verification
} from "./services/campaignTaxonomyGovernorService";

describe("campaign-taxonomy-governor", () => {
  test("returns a launch recommendation", () => {
    expect(summary().recommendation).toMatch(/launch/i);
  });

  test("maps taxonomy changes and blockers", () => {
    expect(taxonomyLane().length).toBeGreaterThan(2);
    expect(audienceRisks().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("verification posture stays buyer-readable", () => {
    expect(launchReadiness().every((packet) => packet.audience.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("campaign"))).toBe(true);
  });
});
