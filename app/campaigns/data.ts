/* ---------------------------------------------------------------------------
   Campaign landing-page content.

   MODULES — reusable per-product copy (eyebrow, name, one-line brief, feature
   list), sourced from the platform pages so campaign pages don't drift from
   the live product copy:
     - app/platform/viso-yard/page.tsx      (tagline + MANIFEST)
     - app/platform/viso-warehouse/page.tsx (tagline + MANIFEST)
     - app/platform/viso-factory/page.tsx   (tagline + MANIFEST)
     - app/platform/viso-data/page.tsx      (3 sections: Compression/Trace/Detect)

   CAMPAIGNS — one entry per ad campaign. A single module can back many
   campaigns. Add a new campaign by adding an entry here — no new code.
   `gateBrochure` defaults to false: the brochure downloads directly and the
   lead form is an optional "get in touch" path. Set it true on a specific
   campaign to require form submission before the download unlocks.
--------------------------------------------------------------------------- */

export type ModuleId =
  | "viso-yard"
  | "viso-warehouse"
  | "viso-factory"
  | "viso-data";

export type Module = {
  id: ModuleId;
  eyebrow: string;
  name: string;
  brief: string;
  features: string[];
  /** Link back to the full product page. */
  productHref: string;
};

export const MODULES: Record<ModuleId, Module> = {
  "viso-yard": {
    id: "viso-yard",
    eyebrow: "VISO YARD — NINE SYSTEMS, YOUR CAMERAS",
    name: "Viso Yard",
    brief:
      "Every container, every checkpoint, on the record — from the CCTV you already own.",
    features: [
      "Container Vision",
      "Gate Vision",
      "Yard Vision",
      "Crane Vision",
      "Cargo Vision",
      "Document Vision",
    ],
    productHref: "/platform/viso-yard",
  },
  "viso-warehouse": {
    id: "viso-warehouse",
    eyebrow: "VISO WAREHOUSE — YOUR CAMERAS · INBOUND TO OUTBOUND",
    name: "Viso Warehouse",
    brief:
      "Every case counted, every pallet dimensioned, every order proven — on the cameras already covering your floor.",
    features: [
      "Cargo Vision — count with proof",
      "Dimension Vision — volumetric capture",
      "Document Vision — key-value extraction",
      "Work Vision — attendance from the cameras",
      "Secure Vision — alerts and logs",
    ],
    productHref: "/platform/viso-warehouse",
  },
  "viso-factory": {
    id: "viso-factory",
    eyebrow: "VISO FACTORY — YOUR CAMERAS · ON THE LINE",
    name: "Viso Factory",
    brief:
      "Production and process, watched continuously — from the cameras already on your line.",
    features: [
      "Production Vision — count, SKU and damage per shift",
      "Dimension Vision — volumetric capture",
      "Work Vision — attendance from the cameras",
      "Secure Vision — alerts and logs",
    ],
    productHref: "/platform/viso-factory",
  },
  "viso-data": {
    id: "viso-data",
    eyebrow: "VISO DATA — YOUR FOOTAGE, WORKING HARDER",
    name: "Viso Data",
    brief:
      "Same footage, fewer bytes, analytics unaffected — on-premise video intelligence in front of your existing storage.",
    features: [
      "Compression AI — smaller footage, analytics unaffected",
      "Trace AI — ask a question, get the timeline",
      "Detect AI — one model watching every feed",
    ],
    productHref: "/platform/viso-data",
  },
};

/* Shared credibility content — same across all campaigns. Sourced from the
   verified, live home-page + Viso Yard copy. */
export const CREDENTIALS = {
  headlineStat: { value: "400,000", label: "image reads a day · across live sites" },
  award: "CII Best Industry AI Application 2025 · Patented Technology",
  benchmark: "Beats Google Vision API accuracy, at a lower cost in our benchmarks.",
  metrics: [
    { n: "90%", label: "lower inspection cost" },
    { n: "99%", label: "reporting-time reduction" },
    { n: "70%", label: "faster gate turnaround" },
    { n: "60%", label: "less inventory shrinkage" },
  ],
  deployed: [
    { src: "adani", alt: "Adani", h: 34 },
    { src: "dp_world", alt: "DP World", h: 52 },
    { src: "hind_terminals", alt: "Hind Terminals", h: 20 },
    { src: "jnpa", alt: "JNPA", h: 54 },
    { src: "cochin_shipyard", alt: "Cochin Shipyard", h: 54 },
  ],
  recognised: [
    { src: "nasscom", alt: "NASSCOM", h: 18 },
    { src: "meity_startup_hub", alt: "MeitY Startup Hub", h: 36 },
    { src: "nvidia", alt: "NVIDIA", h: 34 },
    { src: "microsoft_for_startups", alt: "Microsoft for Startups", h: 16 },
    { src: "startupindia", alt: "Startup India", h: 22 },
  ],
} as const;

export type Campaign = {
  slug: string;
  moduleId: ModuleId;
  /** Optional headline override; defaults to the module's name. */
  headline?: string;
  /** Optional demo-video URL (mp4 or embeddable). Placeholder shown if unset. */
  videoUrl?: string;
  /** Optional brochure PDF path under /public. "Coming soon" state if unset. */
  brochureUrl?: string;
  /** Require lead-form submission before the brochure downloads. Default false. */
  gateBrochure?: boolean;
};

export const CAMPAIGNS: Campaign[] = [
  // Seed/example entry — safe to keep or replace. Demonstrates the template
  // with no real video/brochure yet (placeholder states render).
  {
    slug: "viso-yard-demo",
    moduleId: "viso-yard",
    headline: "Turn your terminal CCTV into a system of record.",
  },
];

export function getCampaign(slug: string): Campaign | undefined {
  return CAMPAIGNS.find((c) => c.slug === slug);
}
