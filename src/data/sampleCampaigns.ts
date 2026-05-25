export type TaxonomyChange = {
  changeId: string;
  channel: string;
  campaignName: string;
  issueType: string;
  owner: string;
  nextAction: string;
  risk: "red" | "yellow" | "green";
  excerpt: string;
};

export type AudienceRisk = {
  riskId: string;
  blocker: string;
  owner: string;
  source: string;
  readiness: "red" | "yellow" | "green";
  requiredEvidence: string;
  impactArea: string;
  note: string;
};

export type LaunchPacket = {
  packetId: string;
  audience: string;
  completenessScore: number;
  status: "red" | "yellow" | "green";
  blocker: string;
  launchWindowHours: number;
  decisionNote: string;
};

export const taxonomyChanges: TaxonomyChange[] = [
  {
    changeId: "TX-104",
    channel: "Paid social",
    campaignName: "Q3_SMB_demo_push_v2",
    issueType: "UTM hierarchy drift",
    owner: "Growth Ops",
    nextAction: "Normalize naming against CRM attribution map",
    risk: "red",
    excerpt: "The paid social relaunch uses a new UTM grouping that no longer matches the CRM campaign source schema."
  },
  {
    changeId: "TX-118",
    channel: "Lifecycle email",
    campaignName: "onboarding_segment_refresh",
    issueType: "Audience naming mismatch",
    owner: "Lifecycle Lead",
    nextAction: "Reconcile segment labels before send logic updates",
    risk: "yellow",
    excerpt: "The refreshed onboarding segment uses a new label that has not been mapped to warehouse and BI dashboards."
  },
  {
    changeId: "TX-132",
    channel: "Search",
    campaignName: "brand_core_geo_q4",
    issueType: "Geo taxonomy expansion",
    owner: "Paid Search Manager",
    nextAction: "Validate location rollups and dashboard joins",
    risk: "yellow",
    excerpt: "The geo expansion introduces a new region layer that still needs reporting and routing validation."
  },
  {
    changeId: "TX-149",
    channel: "ABM display",
    campaignName: "enterprise_exec_wave_03",
    issueType: "Audience-rule mismatch",
    owner: "RevOps",
    nextAction: "Reset account-list joins before launch approval",
    risk: "red",
    excerpt: "Account-list logic changed in CRM but campaign taxonomy still reflects the prior join model."
  }
];

export const audienceBlocks: AudienceRisk[] = [
  {
    riskId: "AR-21",
    blocker: "CRM source map not updated",
    owner: "RevOps",
    source: "CRM and routing",
    readiness: "red",
    requiredEvidence: "Source-map diff, routing proof, and accepted lead-path sample",
    impactArea: "Lead routing continuity",
    note: "Campaign names are live in-channel but the CRM mapping still points at the old source groups."
  },
  {
    riskId: "AR-28",
    blocker: "Warehouse attribution label lag",
    owner: "Analytics Engineering",
    source: "Warehouse and BI",
    readiness: "yellow",
    requiredEvidence: "Attribution model diff and dashboard sample validation",
    impactArea: "Executive reporting",
    note: "The new segment labels have not yet propagated through BI transformations."
  },
  {
    riskId: "AR-34",
    blocker: "Geo rollup QA not complete",
    owner: "Marketing Analytics",
    source: "Regional reporting",
    readiness: "yellow",
    requiredEvidence: "Geo sample set, rollup QA notes, and dashboard screenshots",
    impactArea: "Regional performance visibility",
    note: "The new region layer is modeled, but QA evidence is still incomplete."
  },
  {
    riskId: "AR-41",
    blocker: "ABM audience join drift",
    owner: "RevOps",
    source: "CRM and ad platform sync",
    readiness: "red",
    requiredEvidence: "Audience diff, synced account sample, and relaunch note",
    impactArea: "Enterprise pipeline targeting",
    note: "Campaign taxonomy still references the prior account-join logic."
  }
];

export const launchPackets: LaunchPacket[] = [
  {
    packetId: "LP-07",
    audience: "Paid relaunch",
    completenessScore: 57,
    status: "red",
    blocker: "CRM map drift and account-join mismatch",
    launchWindowHours: 12,
    decisionNote: "Do not launch until CRM and ABM dependencies are reconciled."
  },
  {
    packetId: "LP-14",
    audience: "Lifecycle send",
    completenessScore: 73,
    status: "yellow",
    blocker: "Warehouse attribution label lag",
    launchWindowHours: 20,
    decisionNote: "Send is possible if reporting parity clears in the next validation cycle."
  },
  {
    packetId: "LP-22",
    audience: "Regional expansion",
    completenessScore: 82,
    status: "yellow",
    blocker: "Geo rollup QA not yet signed",
    launchWindowHours: 30,
    decisionNote: "Hold until regional rollup proof is locked."
  },
  {
    packetId: "LP-31",
    audience: "Internal taxonomy sync",
    completenessScore: 95,
    status: "green",
    blocker: "No active blocker",
    launchWindowHours: 72,
    decisionNote: "Packet is safe for governed rollout."
  }
];
