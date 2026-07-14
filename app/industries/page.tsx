import type { CSSProperties, ReactNode } from "react";
import { Reveal, UnderlineDraw } from "@/components/motion";
import { Schematic } from "../platform/viso-yard/_media";

/* Reveal wraps only the inner content (never the <section> background) so a
   light/dark band paints immediately and only the text/media fades+rises —
   otherwise a dark→light band transition shows a raw-background flash. */

/* ---------------------------------------------------------------------------
   /industries — long-form document, one section per vertical: Ports & Terminals,
   Warehousing & Distribution, Manufacturing, Logistics & Supply Chain.

   Copy restructured from the "AI-Powered Production Intelligence" template
   (Manufacturing was authored directly; Ports/Warehousing/Logistics were
   written to the same structure, drawing on facts from
   basic_content-industries.docx but in generic capability language — no
   branded product names ("Viso Yard" etc.) inside the vertical copy itself.

   Layout unchanged from the previous version: 3-column reading grid on
   desktop (margin tag · 680px prose · spacer), single column on mobile,
   drafting-sheet chrome (Cross registration marks, Rule dividers, mono
   MarginTag labels), Schematic figures reused from the platform pages.
--------------------------------------------------------------------------- */

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

type Theme = {
  bg: string;
  ink: string;
  sub: string;
  rule: string;
  ruleStrong: string;
  cross: string;
  num: string;
};
const LIGHT: Theme = {
  bg: "#ECEDEF",
  ink: "#13151A",
  sub: "#5A5F6A",
  rule: "#D4D6DB",
  ruleStrong: "#13151A",
  cross: "rgba(90,95,106,0.6)",
  num: "rgba(19,21,26,0.16)",
};
const DARK: Theme = {
  bg: "#0A0B0E",
  ink: "#F4F5F7",
  sub: "#A6ADB8",
  rule: "rgba(244,245,247,0.2)",
  ruleStrong: "#F4F5F7",
  cross: "rgba(244,245,247,0.4)",
  num: "rgba(244,245,247,0.14)",
};

const GRID = "doc-grid";

function Cross({ color, side }: { color: string; side: "left" | "right" }) {
  return (
    <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", top: 96, [side]: 96, width: 9, height: 9 } as CSSProperties}>
      <div style={{ position: "absolute", left: 0, width: 8, top: 4, height: 1, background: color }} />
      <div style={{ position: "absolute", top: 0, height: 8, left: 4, width: 1, background: color }} />
    </div>
  );
}

function Band({ theme, id, children, style, reveal = false }: { theme: Theme; id?: string; children: ReactNode; style?: CSSProperties; reveal?: boolean }) {
  return (
    <section id={id} style={{ background: theme.bg }}>
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box", ...style }}>
        <Cross color={theme.cross} side="left" />
        <Cross color={theme.cross} side="right" />
        {reveal ? <Reveal as="div">{children}</Reveal> : children}
      </div>
    </section>
  );
}

function Rule({ color, mt = 0, mb = 0 }: { color: string; mt?: number; mb?: number }) {
  return <div aria-hidden="true" style={{ height: 1, background: color, marginTop: mt, marginBottom: mb }} />;
}

function MarginTag({ text, color }: { text: string; color: string }) {
  return (
    <span className="block mt-6 md:mt-0" style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color }}>
      {text}
    </span>
  );
}

/* ---- data ---------------------------------------------------------------- */

type Signal = { label: string; body: string };
type Column = { label: string; items: string[] };

type Chapter = {
  theme: Theme;
  num: string;
  id: string;
  kicker: string;
  heroHeadline: string;
  heroSub: string;
  heroBody: string;
  tags: string[];
  problemTitle: string;
  problemIntro: string;
  challenges: string[];
  problemResult: string;
  solveTitle: string;
  solveBody: string;
  solveTagline: string;
  signalsTitle: string;
  signals: Signal[];
  fig: { file: string; caption: string; figNo: string };
  worksEyebrow: string;
  worksHeadline: string;
  worksItems: string[];
  worksNote: string;
  capColumns: Column[];
  closingHeadline: string;
  closingBody: string;
};

const CONTACT = "Pranav Asthana · +91 9651891556 · pranav@excl.ai";
const CLOSING_STATS: [string, string][] = [["100%", "Item Visibility"], ["<2 min", "Session Set-up Time"], ["24×7", "AI Monitoring"]];

const CHAPTERS: Chapter[] = [
  {
    theme: LIGHT,
    num: "01",
    id: "ports-terminals",
    kicker: "PORTS & TERMINALS",
    heroHeadline: "AI-Powered Terminal Intelligence",
    heroSub: "Every container, every checkpoint, verified — the moment it crosses the gate.",
    heroBody: "Visotonics turns your terminal into a fully visible, fully verified operation. Deploy AI cameras across gates, yards and cranes to automatically track container identity, condition and location — in real time, with zero manual inspection.",
    tags: ["Gate & Yard", "Crane & Lift", "Damage Survey"],
    problemTitle: "Terminal Operations Are Running on Paper and Guesswork",
    problemIntro: "Container damage surveys, gate ID checks and yard tracking are still manual, slow and inconsistent across shifts.",
    challenges: [
      "Manual damage surveys rely on a surveyor with a clipboard and a camera phone",
      "Gate ID checks slow trucks to a stop-and-shoot crawl in every condition",
      "Yard location is tracked by radio call, not by record",
      "Crane lifts have no visual chain of custody when a dispute arises",
    ],
    problemResult: "Disputed damage claims, stopped trucks, and hours lost every time a container can't be found or a dent can't be proven.",
    solveTitle: "Every Container Checked. Every Checkpoint Recorded.",
    solveBody: "Cameras deployed at the gate, over the yard, and on the crane capture every container as it moves — no stop, no scan, no surveyor required.",
    solveTagline: "Every Gate. Every Lift. Every Container.",
    signalsTitle: "Four Signals, Captured on Every Single Container",
    signals: [
      { label: "Damage Detection", body: "Every dent, rust patch and crack detected and measured to the mm², automatically, from camera footage." },
      { label: "Identity & Seal Verification", body: "Container, ISO, trailer and wagon IDs read off moving trucks, with seal status checked on every pass." },
      { label: "Live Location", body: "A digital twin of the yard tracks every container's position automatically — no radio calls required." },
      { label: "Chain of Custody", body: "Every lift captured from multiple angles, building an auditable record from vessel to gate." },
    ],
    fig: { figNo: "FIG. 01", file: "visotonics-container-schematic.svg", caption: "Checkpoint diff — gate in to gate out, damage attributed to the interval it occurred in." },
    worksEyebrow: "WORKS FOR EVERYTHING YOU MOVE",
    worksHeadline: "Any Cargo. Any Terminal. Any Shift.",
    worksItems: ["Container Freight", "Bulk & Break-bulk", "Tank Containers", "Reefer Cargo", "Ro-Ro", "Project Cargo"],
    worksNote: "Configurable per checkpoint, per terminal — works across gates, yards, cranes and CFS docks alike.",
    capColumns: [
      { label: "Terminal Insights", items: ["Real-time container count vs. manifest", "Checkpoint-wise damage attribution", "Shift-wise and gate-wise turnaround trends", "Delay and re-inspection flagging"] },
      { label: "Quality & Loss Prevention", items: ["Damage detection with mm²-level measurement", "Seal-mismatch and identity alerts", "Visual proof for damage disputes", "Survey and claims tracking"] },
      { label: "Deep Analysis", items: ["Turnaround benchmarking across shifts", "Root-cause view for gate bottlenecks", "Historical trend and anomaly reports", "Exportable, audit-ready logs"] },
    ],
    closingHeadline: "Real terminal data — captured automatically, every container, every shift.",
    closingBody: "We extract precise, verifiable identity, condition and location data from your terminal — so every container is accounted for, every time.",
  },
  {
    theme: DARK,
    num: "02",
    id: "warehousing-distribution",
    kicker: "WAREHOUSING & DISTRIBUTION",
    heroHeadline: "AI-Powered Warehouse Intelligence",
    heroSub: "Every case counted, every pallet measured — from inbound to outbound.",
    heroBody: "Visotonics turns your warehouse floor into a fully visible, fully verified operation. Deploy AI cameras across docks and aisles to automatically track case count, dimensions, and damage — in real time, with zero manual tally sheets.",
    tags: ["Inbound & Outbound", "Dimensioning", "Damage & Audit"],
    problemTitle: "Warehouse Floors Are Operating on Tally Sheets",
    problemIntro: "Case counts, dimensioning and damage checks are still manual, slow and inconsistent across shifts.",
    challenges: [
      "Manual counts during stuffing and destuffing don't match the manifest",
      "Dimensioning is done by hand, or not at all",
      "Damage on arrival is often caught only after it becomes a customer dispute",
      "No video record exists when a carrier or customer disputes a shortage",
    ],
    problemResult: "Inventory shrinkage nobody can pin down, and disputes settled by whoever tells the better story — not the better record.",
    solveTitle: "Every Case Counted. Every Dimension Captured.",
    solveBody: "Cameras deployed at the dock and along the aisle capture every carton, pallet and drum as it moves — no manual tally required.",
    solveTagline: "Every Dock. Every Aisle. Every Case.",
    signalsTitle: "Four Signals, Captured on Every Single Movement",
    signals: [
      { label: "Case Count", body: "Every carton, bag, pallet and drum tallied automatically during loading and unloading." },
      { label: "Volumetric Dimensioning", body: "Length, width and height captured from camera view — defensible data for billing and slotting." },
      { label: "Damage on Arrival", body: "Dents, tears and wet damage flagged the moment goods hit the dock." },
      { label: "Manifest Matching", body: "Delivery notes and packing lists converted to structured data and checked against what the cameras see." },
    ],
    fig: { figNo: "FIG. 02", file: "audit-schematic.svg", caption: "Camera-based audit and dimensioning — inbound cargo measured automatically, not estimated." },
    worksEyebrow: "WORKS FOR EVERYTHING YOU STORE",
    worksHeadline: "Any Cargo. Any Warehouse. Any Shift.",
    worksItems: ["FMCG & Packaged Goods", "3PL & Distribution", "Cold Storage", "E-commerce Fulfilment", "Retail & Wholesale", "Bulk Storage"],
    worksNote: "Configurable per dock, per aisle — works on forklifts, conveyors and manual staging areas alike.",
    capColumns: [
      { label: "Warehouse Insights", items: ["Real-time case count vs. manifest", "Dock-wise and aisle-wise throughput trends", "Inbound vs. outbound reconciliation", "Delay and bottleneck flagging"] },
      { label: "Quality & Loss Prevention", items: ["Damage detection on arrival and dispatch", "Shortage and miscount alerts", "Visual proof for carrier disputes", "Claims and rework tracking"] },
      { label: "Deep Analysis", items: ["Productivity benchmarking across shifts", "Root-cause view for shrinkage", "Historical trend and anomaly reports", "Exportable, audit-ready logs"] },
    ],
    closingHeadline: "Real warehouse data — captured automatically, every case, every shift.",
    closingBody: "We extract precise, verifiable count, dimension and condition data from your floor — so every case is accounted for, every time.",
  },
  {
    theme: LIGHT,
    num: "03",
    id: "manufacturing",
    kicker: "MANUFACTURING",
    heroHeadline: "AI-Powered Production Intelligence",
    heroSub: "Every item counted, classified and inspected — the moment it leaves the line.",
    heroBody: "Visotonics turns your production floor into a fully visible, fully verified operation. Deploy AI cameras across your line to automatically track production count, throughput, SKU-wise output, and external damage — in real time, with zero manual tally.",
    tags: ["Production Line", "Quality Control", "Packaging & Dispatch"],
    problemTitle: "Production Floors Are Operating Blind",
    problemIntro: "Output counting, SKU checks and quality inspection are still manual, slow and inconsistent across shifts.",
    challenges: [
      "Manual production counts rely on end-of-line tally sheets and register entries",
      "No real-time visibility into throughput or line performance",
      "SKU mix-ups and mislabeled units go undetected",
      "External damage and packaging defects are often caught only at dispatch — or by the customer",
    ],
    problemResult: "Inaccurate production counts, hidden productivity loss, and quality issues that surface only after the product has left the line.",
    solveTitle: "Every Unit Counted. Every Defect Caught.",
    solveBody: "Cameras deployed above the line, at the packing station, and at the exit conveyor capture every unit as it's produced — no manual tally required.",
    solveTagline: "Every Line. Every Shift. Every Unit.",
    signalsTitle: "Four Signals, Captured on Every Single Unit",
    signals: [
      { label: "Production Count", body: "Every unit tallied automatically as it passes the camera, per line and per shift." },
      { label: "SKU-wise Identification", body: "Each item classified by SKU/variant to keep production mix accurate in real time." },
      { label: "External Damage Detection", body: "Dents, tears, cracks and packaging defects flagged the instant they occur." },
      { label: "Throughput & Productivity", body: "Units-per-minute and line efficiency computed continuously, not at shift-end." },
    ],
    fig: { figNo: "FIG. 03", file: "factory-production-schematic-desktop.svg", caption: "Line camera — continuous production and process monitoring, no separate inspection station." },
    worksEyebrow: "WORKS FOR EVERYTHING YOU PRODUCE",
    worksHeadline: "Any Product. Any Line. Any Shift.",
    worksItems: ["FMCG & Packaged Goods", "Electronics & Components", "Pharma & Healthcare", "Textiles & Apparel", "Automotive Parts", "Food & Beverage"],
    worksNote: "Configurable per SKU, per line — works on conveyors, tables, and manual packing stations alike.",
    capColumns: [
      { label: "Production Insights", items: ["Real-time production count vs. target", "SKU-wise output breakdown", "Shift-wise and line-wise throughput trends", "Downtime and slow-cycle flagging"] },
      { label: "Quality & Loss Prevention", items: ["External damage / defect detection", "Mis-packed or wrong-SKU alerts", "Visual proof for quality disputes", "Rework and rejection tracking"] },
      { label: "Deep Analysis", items: ["Productivity benchmarking across shifts", "Root-cause view for bottlenecks", "Historical trend and anomaly reports", "Exportable, audit-ready logs"] },
    ],
    closingHeadline: "Real production data — captured automatically, every unit, every shift.",
    closingBody: "We extract precise, verifiable count, SKU and quality data from the line — so every unit produced is accounted for, every time.",
  },
  {
    theme: DARK,
    num: "04",
    id: "logistics-supply-chain",
    kicker: "LOGISTICS & SUPPLY CHAIN",
    heroHeadline: "AI-Powered Supply Chain Intelligence",
    heroSub: "One record, every handoff — from vessel to gate to dock to line.",
    heroBody: "Visotonics doesn't stop at one facility. Deploy AI cameras across every node your cargo passes through to automatically track identity, condition and custody — in real time, with zero disputed handoffs.",
    tags: ["Multi-node Visibility", "Chain of Custody", "Document Intelligence"],
    problemTitle: "Supply Chains Lose the Story at Every Handoff",
    problemIntro: "Damage attribution, shortage claims and document handling are still fragmented across every party in the chain.",
    challenges: [
      "Every handoff is a place where accountability gets fuzzy — was it damaged at gate-in, or on the crane?",
      "Each party runs its own systems, paperwork and version of events",
      "No single record follows cargo from vessel to final delivery",
      "Disputes get resolved by whoever has the better story, not the better record",
    ],
    problemResult: "Disputed claims, duplicated paperwork, and no way to prove exactly where or when something went wrong.",
    solveTitle: "Every Handoff Recorded. One Record, Start to Finish.",
    solveBody: "Cameras already in place at every node — port, warehouse, factory — capture identity, condition and custody automatically, no new hardware required.",
    solveTagline: "Every Node. Every Handoff. One Record.",
    signalsTitle: "Four Signals, Captured at Every Node",
    signals: [
      { label: "Checkpoint Diff", body: "Any two checkpoints, anywhere on the chain, compared for auditable attribution of exactly where damage or shortage occurred." },
      { label: "Tamper-Evident Logbook", body: "A time-stamped record per movement, from vessel to gate to warehouse to line." },
      { label: "Identity & Count in Motion", body: "IDs and item counts verified at every gate along the route, not just the first one." },
      { label: "Document Normalization", body: "Bills of lading, manifests and certificates from every party read and converted into one structured format." },
    ],
    fig: { figNo: "FIG. 04", file: "visotonics-crane-schematic.svg", caption: "Chain of custody — vessel to yard to gate, one continuous record." },
    worksEyebrow: "WORKS ACROSS EVERY NODE",
    worksHeadline: "Any Node. Any Party. Any Handoff.",
    worksItems: ["Ports & Terminals", "Warehousing & Distribution", "Manufacturing", "3PL & Freight Forwarding", "Cold Chain", "Last-Mile Delivery"],
    worksNote: "Configurable across every node in the chain — works wherever a camera already watches the handoff.",
    capColumns: [
      { label: "Network Insights", items: ["Real-time visibility across every node", "Checkpoint-wise attribution of damage or shortage", "Node-wise and party-wise turnaround trends", "Delay and dispute flagging"] },
      { label: "Quality & Loss Prevention", items: ["Cross-node damage and shortage attribution", "Identity and seal-mismatch alerts", "Visual proof for multi-party disputes", "Claims tracking across the full chain"] },
      { label: "Deep Analysis", items: ["Network-wide performance benchmarking", "Root-cause view for recurring bottlenecks", "Historical trend and anomaly reports", "Exportable, audit-ready logs, API-first"] },
    ],
    closingHeadline: "Real supply-chain data — captured automatically, every handoff, every node.",
    closingBody: "We extract precise, verifiable identity, custody and condition data across your entire network — so every handoff is accounted for, every time.",
  },
];

/* ---- render helpers ------------------------------------------------------ */

function TagRow({ items, theme }: { items: string[]; theme: Theme }) {
  return (
    <div className="flex flex-wrap" style={{ gap: 12, marginTop: 20 }}>
      {items.map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: mono,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: theme.sub,
            border: `1px solid ${theme.rule}`,
            borderRadius: 999,
            padding: "6px 14px",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ColumnGroup({ columns, theme }: { columns: Column[]; theme: Theme }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
      {columns.map((col) => (
        <div key={col.label}>
          <span style={{ display: "block", fontFamily: sans, fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", color: theme.ink }}>{col.label}</span>
          <Rule color={theme.ruleStrong} mt={12} mb={12} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {col.items.map((item) => (
              <p key={item} style={{ margin: 0, fontFamily: sans, fontSize: 14, lineHeight: 1.55, color: theme.sub }}>
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChapterBlock({ c }: { c: Chapter }) {
  const t = c.theme;
  return (
    <Band theme={t} id={c.id} style={{ padding: "56px 24px" }} reveal>
      <div className="md:px-[72px] md:py-[64px]">
        {/* header / hero */}
        <div className={GRID}>
          <div>
            <span style={{ fontFamily: mono, fontSize: 48, fontWeight: 600, lineHeight: 1, color: t.num }}>{c.num}</span>
            <span className="block mt-1" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", color: t.sub }}>{c.kicker}</span>
          </div>
          <div>
            <h2 style={{ margin: 0, fontFamily: sans, fontSize: 34, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.015em", color: t.ink }}>{c.heroHeadline}</h2>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 20, lineHeight: 1.5, fontWeight: 500, color: t.ink }}>{c.heroSub}</p>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.sub }}>{c.heroBody}</p>
            <TagRow items={c.tags} theme={t} />
            <Rule color={t.ruleStrong} mt={40} />
          </div>
        </div>

        {/* the problem */}
        <div className={GRID} style={{ marginTop: 40 }}>
          <MarginTag text="THE PROBLEM" color={t.sub} />
          <div>
            <h3 style={{ margin: 0, fontFamily: sans, fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.problemTitle}</h3>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.sub }}>{c.problemIntro}</p>
            <div style={{ marginTop: 24, borderTop: `1px solid ${t.rule}` }}>
              {c.challenges.map((ch, i) => (
                <div key={ch} style={{ padding: "16px 0", borderBottom: i === c.challenges.length - 1 ? `1px solid ${t.ruleStrong}` : `1px solid ${t.rule}` }}>
                  <p style={{ margin: 0, fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: t.ink }}>{ch}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: "20px 0 0", fontFamily: sans, fontSize: 16, lineHeight: 1.6, fontWeight: 500, color: t.ink }}>
              <b style={{ fontWeight: 600 }}>Result: </b>{c.problemResult}
            </p>
          </div>
        </div>

        {/* how we solve it */}
        <div className={GRID} style={{ marginTop: 48 }}>
          <MarginTag text="HOW WE SOLVE THIS" color={t.sub} />
          <div>
            <h3 style={{ margin: 0, fontFamily: sans, fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.solveTitle}</h3>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.sub }}>{c.solveBody}</p>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.solveTagline}</p>
            <Rule color={t.ruleStrong} mt={28} />
          </div>
        </div>

        {/* four signals */}
        <div className={GRID} style={{ marginTop: 40 }}>
          <MarginTag text="WHAT THE SYSTEM SEES" color={t.sub} />
          <div>
            <h3 style={{ margin: 0, fontFamily: sans, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.signalsTitle}</h3>
            <div style={{ marginTop: 20 }}>
              {c.signals.map((s, i) => (
                <div key={s.label} style={{ padding: "18px 0", borderTop: i === 0 ? `1px solid ${t.ruleStrong}` : `1px solid ${t.rule}`, borderBottom: i === c.signals.length - 1 ? `1px solid ${t.ruleStrong}` : undefined }}>
                  <p style={{ margin: 0, fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.ink }}>
                    <b style={{ fontWeight: 600 }}>{s.label}.</b> {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* figure */}
        <div className={GRID} style={{ marginTop: 40 }}>
          <MarginTag text={c.fig.figNo} color={t.sub} />
          <div>
            <div style={{ border: `1px solid ${t.rule}`, boxSizing: "border-box", overflow: "hidden" }}>
              <Schematic file={c.fig.file} label={c.fig.caption} fit="width" style={{ display: "block", width: "100%" }} />
            </div>
            <span className="block mt-2.5" style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", color: t.sub }}>{c.fig.caption}</span>
          </div>
        </div>

        {/* works for everything */}
        <div className={GRID} style={{ marginTop: 48 }}>
          <MarginTag text={c.worksEyebrow} color={t.sub} />
          <div>
            <h3 style={{ margin: 0, fontFamily: sans, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.worksHeadline}</h3>
            <TagRow items={c.worksItems} theme={t} />
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: t.sub }}>{c.worksNote}</p>
            <Rule color={t.ruleStrong} mt={28} />
          </div>
        </div>

        {/* operational intelligence — 3 columns */}
        <div className={GRID} style={{ marginTop: 48 }}>
          <MarginTag text="OPERATIONAL INTELLIGENCE" color={t.sub} />
          <ColumnGroup columns={c.capColumns} theme={t} />
        </div>

        {/* closing / bottom-of-section CTA — kept short since the stats +
            contact line are identical for every vertical; those live once in
            the page-level Closing instead of repeating per chapter. */}
        <div className={GRID} style={{ marginTop: 56 }}>
          <span aria-hidden="true" className="hidden md:block" />
          <div style={{ border: `1px solid ${t.rule}`, padding: 32, boxSizing: "border-box" }}>
            <p style={{ margin: 0, fontFamily: sans, fontSize: 22, lineHeight: 1.4, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{c.closingHeadline}</p>
            <p style={{ margin: "16px 0 0", fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: t.sub }}>{c.closingBody}</p>
            <div style={{ marginTop: 24 }}>
              <UnderlineDraw href="/contact" style={{ fontFamily: mono, fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: t.ink, paddingBottom: 4 }}>
                Book a Live Demo →
              </UnderlineDraw>
            </div>
          </div>
        </div>
      </div>
    </Band>
  );
}

/* ---- page-level intro / closing -------------------------------------------- */

const VERTICALS = CHAPTERS.map((c) => ({ id: c.id, label: c.kicker }));

function Intro() {
  const t = DARK;
  return (
    <Band theme={t} style={{ padding: "56px 24px 64px" }}>
      <div className="md:px-[72px] md:py-[96px]">
        <span className="block" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: t.sub }}>INDUSTRIES</span>
        <h1 style={{ margin: "18px 0 0", maxWidth: 900, fontFamily: sans, fontSize: 44, lineHeight: 1.16, fontWeight: 600, letterSpacing: "-0.02em", color: t.ink }} className="md:text-[56px]">
          Built for how your operation actually runs.
        </h1>
        <p style={{ margin: "24px 0 0", maxWidth: 680, fontFamily: sans, fontSize: 19, lineHeight: 1.6, fontWeight: 500, color: t.ink }}>
          From the gate to the line to the last mile — AI vision tuned to four industries, not a generic camera add-on.
        </p>

        {/* quick nav — deep-links to each vertical below */}
        <div aria-hidden="true" style={{ marginTop: 56, height: 1, background: "rgba(244,245,247,0.28)", maxWidth: 1248 }} />
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 md:mt-2 md:flex-nowrap md:justify-between" style={{ maxWidth: 1248 }}>
          {VERTICALS.map((v) => (
            <UnderlineDraw
              key={v.id}
              href={`#${v.id}`}
              style={{ fontFamily: mono, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", color: t.ink }}
            >
              {v.label}
            </UnderlineDraw>
          ))}
        </div>
      </div>
    </Band>
  );
}

function Closing() {
  const t = DARK;
  return (
    <Band theme={t} style={{ padding: "96px 24px 120px" }} reveal>
      <div className="text-center md:px-[72px] md:py-[64px]">
        <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", left: 96, bottom: 96, width: 9, height: 9 }}>
          <div style={{ position: "absolute", left: 0, width: 8, top: 4, height: 1, background: t.cross }} />
          <div style={{ position: "absolute", top: 0, height: 8, left: 4, width: 1, background: t.cross }} />
        </div>
        <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", right: 96, bottom: 96, width: 9, height: 9 }}>
          <div style={{ position: "absolute", left: 0, width: 8, top: 4, height: 1, background: t.cross }} />
          <div style={{ position: "absolute", top: 0, height: 8, left: 4, width: 1, background: t.cross }} />
        </div>
        <p style={{ margin: "0 auto", maxWidth: 700, fontFamily: sans, fontSize: 26, lineHeight: 1.5, fontWeight: 600, color: t.ink }} className="md:text-[28px]">
          Join industry leaders running 400,000 reads a day. Bring a CCTV feed from any node in your chain. We&apos;ll read it live.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center" style={{ gap: 32 }}>
          {CLOSING_STATS.map(([n, label]) => (
            <div key={label}>
              <span style={{ display: "block", fontFamily: sans, fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em", color: t.ink }}>{n}</span>
              <span style={{ display: "block", marginTop: 2, fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: t.sub }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-10">
          <UnderlineDraw href="/contact" style={{ fontFamily: mono, fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: t.ink, paddingBottom: 4 }}>Talk to us →</UnderlineDraw>
          <UnderlineDraw href="/platform" style={{ fontFamily: mono, fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: t.sub, paddingBottom: 4 }}>Explore the platform →</UnderlineDraw>
        </div>
        <p style={{ margin: "24px 0 0", fontFamily: mono, fontSize: 12, letterSpacing: "0.04em", color: t.sub }}>{CONTACT}</p>
      </div>
    </Band>
  );
}

/* ========================================================================= */

export default function IndustriesPage() {
  return (
    <>
      <Intro />
      {CHAPTERS.map((c) => <ChapterBlock key={c.num} c={c} />)}
      <Closing />
    </>
  );
}
