import { payload, summary } from "../src/services/campaignTaxonomyGovernorService";

console.log("campaign-taxonomy-governor demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().rules, null, 2));
