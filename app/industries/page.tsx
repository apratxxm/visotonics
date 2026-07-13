import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Schematic } from "../platform/viso-yard/_media";

/* Reveal wraps only the inner content (never the <section> background) so a
   light/dark band paints immediately and only the text/media fades+rises —
   otherwise a dark→light band transition shows a raw-background flash. */

/* ---------------------------------------------------------------------------
   /industries — long-form document. Ported from VisoIndustries-Document.dc.html
   (desktop 1440 + mobile 390): a prose-heavy editorial dossier — intro thesis +
   four chapters (one per vertical) + closing. Copy verbatim from
   basic_content-industries.docx; figures reuse existing schematics.

   Layout: a 3-column reading grid on desktop (margin tag · 680px prose · spacer)
   that stacks to a single column on mobile. Copy is held in JS strings and
   rendered via expressions so apostrophes/quotes need no HTML escaping.
   Note: mobile carries the full desktop prose (not the design's condensed cut).
--------------------------------------------------------------------------- */

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";
const SIGNAL = "#ED510C";

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

function Band({ theme, children, style, reveal = false }: { theme: Theme; children: ReactNode; style?: CSSProperties; reveal?: boolean }) {
  return (
    <section style={{ background: theme.bg }}>
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

/* ---- data ---------------------------------------------------------------- */

type Cap = { tag: string; orange?: boolean; lead: string; body?: string };
type Chapter = {
  theme: Theme;
  num: string;
  poweredBy: string;
  h2: string;
  sub: string;
  problem: string;
  caps: Cap[];
  fig: { file: string; caption: string; figNo: string };
  registerLabel?: string;
  register?: [string, string][];
  registerFootnote?: string;
  whyLabel: string;
  why: string[];
  whyFootnote?: string;
  quote?: { text: string; cite: string };
  sidebar?: { label: string; text: string; stats: string[] };
};

const CHAPTERS: Chapter[] = [
  {
    theme: LIGHT,
    num: "01",
    poweredBy: "POWERED BY VISO YARD",
    h2: "Every container, every checkpoint, on the record — from the CCTV you already own.",
    sub: "Gate, crane, yard and cargo, watched by one vision layer. No new hardware, no stopped operations, no disputed damage.",
    problem:
      "Container damage surveys, gate ID checks and yard tracking are still largely manual — a surveyor with a clipboard, a guard squinting at a plate in the rain, a spreadsheet nobody trusts when a shipping line disputes a dent. Every stopped truck and re-inspection is time the terminal doesn't get back.",
    caps: [
      { tag: "", orange: true, lead: "Container Vision — patented damage detection.", body: "Every dent, rust patch and crack detected, segmented and measured to the mm², automatically, from camera footage. Diff any two checkpoints — gate in, crane on, crane off, gate out — for an auditable record of exactly where and when damage occurred. Reports generate in under a minute; damage above your threshold auto-emails the responsible party. Deployed by industrial leaders like Adani, DP World, Hind Terminals." },
      { tag: "", lead: "Gate Vision — identity at the gate.", body: "Reads container, ISO, trailer and wagon IDs off moving trucks — no stop-and-shoot — in night, rain, fog and dust, at close to 100% accuracy across 400,000 reads a day. Seal status is checked and logged with every read, pushed to your system as structured JSON in real time." },
      { tag: "", lead: "Yard Vision — live location, not a search party.", body: "A one-time survey builds a live digital twin of the yard. From there, every inbound gets a recommended slot and every move is tracked automatically — ask for a container, get its precise location, no radio calls to the yard." },
      { tag: "", lead: "Crane Vision — chain of custody at the lift.", body: "Multi-camera capture of every face on every lift, with vibration compensation and motion-blur correction so crane movement never becomes an inspection error. High-severity damage triggers an immediate surveyor alert. Combined with gate and container checkpoints, this closes the chain of custody from vessel to yard to gate." },
      { tag: "", lead: "Document Vision — paperwork, structured.", body: "Bills of Lading and terminal paperwork go in; structured, system-ready data comes out — shipper, consignee, port of loading, cargo description, line items — pushed directly to your TOS." },
    ],
    fig: { figNo: "FIG. 01", file: "visotonics-container-schematic.svg", caption: "Checkpoint diff — gate in to gate out, damage attributed to the interval it occurred in." },
    registerLabel: "REGISTER",
    register: [
      ["Inspection cost", "90% lower"],
      ["Reporting time", "99% reduction"],
      ["Gate turnaround", "70% faster"],
      ["ID read accuracy", "~100% · moving trucks, night/rain/fog/dust"],
      ["Image reads", "400,000/day · leading sites"],
    ],
    registerFootnote: "Aggregate figures measured across container, gate, yard and cargo deployments.",
    whyLabel: "WHY TERMINALS CHOOSE",
    why: [
      "Runs on your existing CCTV — no new cameras, no change to crane or gate workflow.",
      "Tamper-evident logbook — a time-stamped record per container movement that both terminal and shipping line can trust.",
      "Built for the hardest conditions — reads moving containers through night, rain, fog and dust where generic OCR and off-the-shelf vision models fail in Visotonics' benchmarks.",
      "Proven at scale — running live at Adani, DP World, Hind Terminals, JNPA and Cochin Shipyard.",
    ],
    quote: { text: "“Rollout was faster than we expected — no changes to our existing crane workflow. The dashboard gives our team visibility we never had before.”", cite: "— Yard Supervisor, Port Logistics" },
  },
  {
    theme: DARK,
    num: "02",
    poweredBy: "POWERED BY VISO WAREHOUSE",
    h2: "Every case counted, every pallet dimensioned — with video proof attached.",
    sub: "Inbound to outbound, on the same cameras already covering your floor. No new hardware, no manual tally sheets.",
    problem:
      "Shrinkage that no one can pin down. Manual counts during stuffing and destuffing that don't match the manifest. Dimensioning done by hand, or not at all. In a warehouse running on paper tallies and spot-checks, disputes with carriers and customers become a matter of “he said, she said” — with no video to settle it.",
    caps: [
      { tag: "", lead: "Cargo Vision — counting, with proof.", body: "Every carton, gunny bag, jumbo bag, pallet, drum and barrel detected on video during loading and unloading — counted automatically, with a damage check run in the same pass. The command center gets a real-time alert on exceptions. Because detection runs on-device, it keeps working even when connectivity doesn't — full detection and alerting, offline." },
      { tag: "", lead: "Audit & dimensioning.", body: "Camera-based dimensioning replaces manual measurement for inbound and outbound cargo, giving you defensible volumetric data for billing, slotting and space planning — captured automatically, not estimated." },
      { tag: "", orange: true, lead: "Container Vision — damage, documented on arrival.", body: "Inbound goods are surveyed for damage — dents, tears, wet damage, crushed cartons — the moment they hit the dock, with the same mm²-level detection used at the port. That means disputes with carriers get settled with a report, not a guess." },
      { tag: "", lead: "Document Vision — manifests, structured automatically.", body: "Delivery notes, packing lists and manifests are read and converted into structured, system-ready data — pushed straight into your WMS instead of re-keyed by hand." },
    ],
    fig: { figNo: "FIG. 02", file: "audit-schematic.svg", caption: "Camera-based audit and dimensioning — inbound cargo measured automatically, not estimated." },
    registerLabel: "REGISTER",
    register: [
      ["Inventory shrinkage", "60% reduction"],
      ["Inspection cost", "90% lower"],
      ["Reporting time", "99% reduction"],
    ],
    registerFootnote: "Aggregate figures measured across cargo and container deployments on the Visotonics platform.",
    whyLabel: "WHY WAREHOUSES CHOOSE",
    why: [
      "Runs on your existing CCTV — no new cameras to install or maintain.",
      "Video proof, not a tally sheet — every count and every dimension is backed by footage.",
      "Works offline — detection and alerting keep running even when connectivity doesn't.",
      "One platform, whole network — the same record follows cargo to its next node.",
    ],
  },
  {
    theme: LIGHT,
    num: "03",
    poweredBy: "POWERED BY VISO FACTORY",
    h2: "Production and process, watched continuously — from the cameras already on your line.",
    sub: "Catch a defect, a stoppage or a process deviation as it happens, not on the next audit.",
    problem:
      "Quality checks that only sample a fraction of output. Line stoppages that get logged after the fact, if at all. Process deviations that surface as a customer complaint weeks later instead of an alert in the moment. Manual floor walks can't watch every station, every shift — cameras already can.",
    caps: [
      { tag: "", lead: "Production monitoring.", body: "Continuous, camera-based visibility into line status, throughput and stoppages — surfaced in real time instead of reconstructed from shift-end reports." },
      { tag: "", lead: "Process monitoring.", body: "The same detection engine that segments container damage to the mm² is built to spot deviations in a repeatable process — flagging what's out of spec as it happens, so the correction happens on the same shift, not the next audit." },
      { tag: "", orange: true, lead: "Container & Cargo Vision.", body: "Finished-goods packaging and inbound raw materials get the same automated damage detection and counting used at the port and the warehouse dock — one consistent standard from supplier to shipment." },
      { tag: "", lead: "Document Vision.", body: "Inspection sheets, quality certificates and material dockets are read and converted to structured data automatically." },
    ],
    fig: { figNo: "FIG. 03", file: "factory-production-schematic-desktop.svg", caption: "Line camera — continuous production and process monitoring, no separate inspection station." },
    whyLabel: "PLATFORM ADVANTAGE",
    why: [
      "No new hardware — runs on the cameras already on the line.",
      "One vision layer, whole operation — production, cargo and documents on a single record.",
      "Real-time, not retrospective — deviations flagged as they happen.",
      "Built on patented detection — the same engine proven at leading industrial sites.",
    ],
    whyFootnote: "Manufacturing-specific benchmark figures are being finalized as Viso Factory deployments scale — reach out for current pilot results.",
  },
  {
    theme: DARK,
    num: "04",
    poweredBy: "POWERED BY THE FULL VISOTONICS PLATFORM",
    h2: "One vision layer, vessel to gate to dock to line.",
    sub: "Visotonics doesn't stop at one facility. The same checkpoint record follows cargo across every node it moves through — port, warehouse, factory — on the cameras already in place at each one.",
    problem: "",
    caps: [
      { tag: "", lead: "Checkpoint diff — one record, every handoff.", body: "Gate in, crane on, crane off, gate out, dock in, dock out — any two checkpoints, anywhere on the chain, can be diffed for auditable attribution of exactly where damage or shortage occurred. No more disputes settled by who shouts loudest." },
      { tag: "", lead: "Tamper-evident logbook.", body: "A time-stamped record per container or shipment movement, from vessel to gate to warehouse to line — one continuous chain of custody instead of separate logs at every stakeholder." },
      { tag: "", lead: "Gate & Cargo Vision — identity and count, verified in motion.", body: "IDs read off moving trucks, containers and trailers at close to 100% accuracy, and every carton, pallet and drum counted with video proof — at every gate along the route, not just the port." },
      { tag: "", lead: "Document Vision — every document, one format." },
      { tag: "", lead: "Viso Data — the engine underneath.", body: "Compression, trace and detection AI built to decode images where generic OCR and off-the-shelf vision models fail — low light, motion blur, partial occlusion, night, rain, fog, dust — the conditions supply chains actually operate in." },
    ],
    fig: { figNo: "FIG. 04", file: "visotonics-crane-schematic.svg", caption: "Chain of custody — vessel to yard to gate, one continuous record." },
    registerLabel: "REGISTER — AGGREGATE",
    register: [
      ["Inspection cost", "90% lower"],
      ["Reporting time", "99% reduction"],
      ["Gate turnaround", "70% faster"],
      ["Inventory shrinkage", "60% less"],
      ["Image reads", "400,000/day · leading sites"],
    ],
    whyLabel: "WHY SUPPLY-CHAIN TEAMS CHOOSE",
    why: [
      "No new hardware at any node — the platform runs on the CCTV each facility already has.",
      "One record, not five — a single, tamper-evident log follows cargo across every party in the chain.",
      "API-first — structured data pushed to your system in real time, not a dashboard you have to check.",
      "Proven where it's hardest — reading moving containers in night, rain, fog and dust across leading industrial sites today.",
    ],
    sidebar: {
      label: "DISPATCH / INVENTORY INTELLIGENCE — SEPARATE CONTEXT, PORTABLE CAMERAS",
      text: "Total Coverage. Zero Blind Spots. Chaos In. Precision Out. Portable trolley-mounted cameras that follow vehicles into any blind spot, for vehicles that park outside fixed CCTV coverage.",
      stats: ["100% Item Visibility", "<2 min Session Set-up", "24×7 AI Monitoring"],
    },
  },
];

/* ---- render helpers ------------------------------------------------------ */

function MarginTag({ text, color }: { text: string; color: string }) {
  return (
    <span className="block mt-6 md:mt-0" style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color }}>
      {text}
    </span>
  );
}

function ChapterBlock({ c }: { c: Chapter }) {
  const t = c.theme;
  return (
    <Band theme={t} style={{ padding: "56px 24px" }} reveal>
      <div className="md:px-[72px] md:py-[64px]">
        {/* header */}
        <div className={GRID}>
          <div>
            <span style={{ fontFamily: mono, fontSize: 48, fontWeight: 600, lineHeight: 1, color: t.num }}>{c.num}</span>
            <span className="block mt-1" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", color: t.sub }}>{c.poweredBy}</span>
          </div>
          <div>
            <h2 style={{ margin: 0, fontFamily: sans, fontSize: 34, lineHeight: 1.2, fontWeight: 600, letterSpacing: "-0.015em", color: t.ink }}>{c.h2}</h2>
            <p style={{ margin: "20px 0 0", fontFamily: sans, fontSize: 18, lineHeight: 1.6, fontWeight: 500, color: t.ink }}>{c.sub}</p>
            {c.problem ? <p style={{ margin: "28px 0 0", fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.sub }}>{c.problem}</p> : null}
            <Rule color={t.ruleStrong} mt={40} />
          </div>
        </div>

        {/* capabilities */}
        {c.caps.map((cap, i) => (
          <div key={cap.lead} className={GRID} style={{ marginTop: i === 0 ? 32 : 0 }}>
            {cap.tag.trim() ? <MarginTag text={cap.tag} color={cap.orange ? SIGNAL : t.sub} /> : <span aria-hidden="true" className="hidden md:block" />}
            <div>
              <p style={{ margin: 0, fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.ink }}>
                <b style={{ fontWeight: 600 }}>{cap.lead}</b>{cap.body ? " " + cap.body : ""}
              </p>
              <Rule color={i === c.caps.length - 1 ? t.ruleStrong : t.rule} mt={20} />
            </div>
          </div>
        ))}

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

        {/* register */}
        {c.register ? (
          <div className={GRID} style={{ marginTop: 48 }}>
            <MarginTag text={c.registerLabel ?? "REGISTER"} color={t.sub} />
            <div>
              <Rule color={t.ruleStrong} />
              {c.register.map(([k, v], i) => (
                <div key={k}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", fontFamily: mono, fontSize: 14, color: t.ink }}>
                    <span>{k}</span>
                    <span style={{ textAlign: "right" }}>{v}</span>
                  </div>
                  <Rule color={i === c.register!.length - 1 ? t.ruleStrong : t.rule} />
                </div>
              ))}
              {c.registerFootnote ? <p style={{ margin: "12px 0 0", fontFamily: mono, fontSize: 12, fontStyle: "italic", color: t.sub }}>{c.registerFootnote}</p> : null}
            </div>
          </div>
        ) : null}

        {/* why / platform advantage */}
        <div className={GRID} style={{ marginTop: 48 }}>
          <MarginTag text={c.whyLabel} color={t.sub} />
          <div>
            <Rule color={t.ruleStrong} />
            {c.why.map((w, i) => (
              <div key={w}>
                <p style={{ margin: "14px 0", fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: t.ink }}>{w}</p>
                <Rule color={i === c.why.length - 1 ? t.ruleStrong : t.rule} />
              </div>
            ))}
            {c.whyFootnote ? <p style={{ margin: "16px 0 0", fontFamily: mono, fontSize: 13, fontStyle: "italic", color: t.sub }}>{c.whyFootnote}</p> : null}
          </div>
        </div>

        {/* quote */}
        {c.quote ? (
          <div className={GRID} style={{ marginTop: 48 }}>
            <span aria-hidden="true" className="hidden md:block" />
            <blockquote style={{ margin: 0, paddingLeft: 24, borderLeft: `2px solid ${t.ink}`, fontFamily: sans, fontSize: 20, lineHeight: 1.5, fontStyle: "italic", fontWeight: 500, color: t.ink }}>
              {c.quote.text}
              <footer style={{ marginTop: 12, fontFamily: mono, fontSize: 13, fontStyle: "normal", fontWeight: 400, color: t.sub }}>{c.quote.cite}</footer>
            </blockquote>
          </div>
        ) : null}

        {/* sidebar */}
        {c.sidebar ? (
          <div className={GRID} style={{ marginTop: 48 }}>
            <MarginTag text="SIDEBAR" color={t.sub} />
            <div style={{ border: `1px solid rgba(244,245,247,0.24)`, padding: 24, boxSizing: "border-box" }}>
              <span className="block" style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", color: t.sub }}>{c.sidebar.label}</span>
              <p style={{ margin: "12px 0 0", fontFamily: sans, fontSize: 15, lineHeight: 1.6, color: t.ink }}>{c.sidebar.text}</p>
              <div className="mt-4 flex flex-col gap-2 md:flex-row md:gap-8" style={{ fontFamily: mono, fontSize: 13, color: t.sub }}>
                {c.sidebar.stats.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Band>
  );
}

const NODES = ["VESSEL", "GATE", "YARD", "DOCK", "LINE"];
const INTRO_PARA =
  "Every handoff in a supply chain is a place where accountability gets fuzzy: was the damage there at gate-in, or did it happen on the crane? Was the shortage at stuffing, or at the warehouse dock? Each party runs its own systems, its own paperwork, its own version of events — and disputes get resolved by whoever has the better story, not the better record.";

function Intro() {
  const t = DARK;
  return (
    <Band theme={t} style={{ padding: "56px 24px 64px" }}>
      <div className="md:px-[72px] md:py-[96px]">
        <span className="block" style={{ fontFamily: mono, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: t.sub }}>INDUSTRIES</span>
        <h1 style={{ margin: "18px 0 0", maxWidth: 900, fontFamily: sans, fontSize: 44, lineHeight: 1.16, fontWeight: 600, letterSpacing: "-0.02em", color: t.ink }} className="md:text-[56px]">
          One vision layer, vessel to gate to dock to line.
        </h1>
        <p style={{ margin: "24px 0 0", maxWidth: 680, fontFamily: sans, fontSize: 19, lineHeight: 1.6, fontWeight: 500, color: t.ink }}>
          The same checkpoint record follows cargo across every node it moves through — port, warehouse, factory — on the cameras already in place at each one.
        </p>

        {/* node-chain spine */}
        <div aria-hidden="true" style={{ marginTop: 56, height: 1, background: "rgba(244,245,247,0.28)", maxWidth: 1248 }} />
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-4 md:mt-2 md:flex-nowrap md:justify-between" style={{ maxWidth: 1248 }}>
          {NODES.map((n, i) => (
            <span key={n} className="flex items-center gap-2 md:flex-col md:items-start md:gap-2">
              <span aria-hidden="true" className="hidden md:block" style={{ width: 8, height: 8, borderRadius: 999, background: t.sub }} />
              <span style={{ fontFamily: mono, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em", color: t.ink }}>{i === 0 ? n : `→ ${n}`}</span>
            </span>
          ))}
        </div>

        <p style={{ margin: "48px 0 0", maxWidth: 935, fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: t.sub }}>{INTRO_PARA}</p>
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
        <div className="mt-10 flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-10">
          <a href="/contact" style={{ fontFamily: mono, fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: t.ink, borderBottom: `1px solid ${t.ink}`, paddingBottom: 4, textDecoration: "none" }}>Talk to us →</a>
          <a href="/platform" style={{ fontFamily: mono, fontSize: 14, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: t.sub, borderBottom: `1px solid rgba(244,245,247,0.3)`, paddingBottom: 4, textDecoration: "none" }}>Explore the platform →</a>
        </div>
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
