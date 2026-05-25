import { audienceBlocks, launchPackets, taxonomyChanges } from "../data/sampleCampaigns";

export function summary() {
  return {
    taxonomyChanges: taxonomyChanges.length,
    urgentChanges: taxonomyChanges.filter((item) => item.risk === "red").length,
    blockedAudiences: audienceBlocks.filter((item) => item.readiness !== "green").length,
    riskyPackets: launchPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Clear CRM and attribution blockers first so launch-safe campaign taxonomy changes do not break routing, reporting, or audience quality."
  };
}

export function taxonomyLane() {
  return taxonomyChanges;
}

export function audienceRisks() {
  return audienceBlocks;
}

export function launchReadiness() {
  return launchPackets;
}

export function verification() {
  return [
    "Campaign changes map to concrete downstream systems, not just names in a spreadsheet.",
    "Audience blockers surface the proof needed before a launch becomes buyer-visible.",
    "Launch posture ties taxonomy work to routing, dashboards, and attribution outcomes.",
    "The governor is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real customer, lead, or ad-platform records are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    changes: taxonomyLane(),
    rules: audienceRisks(),
    launchPackets: launchReadiness(),
    verification: verification()
  };
}
