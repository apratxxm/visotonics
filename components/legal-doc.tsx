import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion";

/* ---------------------------------------------------------------------------
   Shared renderer for /legal/* pages (Privacy Policy, Terms & Conditions).
   Same drafting-sheet chrome as /industries (Cross marks, Rule dividers, mono
   MarginTag labels) but as a single flat document, not chapters — copy is
   extracted verbatim from visotonics.com/privacy_policy and
   visotonics.com/terms_and_conditions.
--------------------------------------------------------------------------- */

const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const BG = "#ECEDEF";
const INK = "#13151A";
const SUB = "#5A5F6A";
const RULE = "#D4D6DB";
const RULE_STRONG = "#13151A";
const CROSS = "rgba(90,95,106,0.6)";
const NUM = "rgba(19,21,26,0.16)";

function Cross({ side }: { side: "left" | "right" }) {
  return (
    <div aria-hidden="true" className="hidden md:block" style={{ position: "absolute", top: 96, [side]: 96, width: 9, height: 9 } as CSSProperties}>
      <div style={{ position: "absolute", left: 0, width: 8, top: 4, height: 1, background: CROSS }} />
      <div style={{ position: "absolute", top: 0, height: 8, left: 4, width: 1, background: CROSS }} />
    </div>
  );
}

function Rule({ mt = 0, mb = 0, strong = false }: { mt?: number; mb?: number; strong?: boolean }) {
  return <div aria-hidden="true" style={{ height: 1, background: strong ? RULE_STRONG : RULE, marginTop: mt, marginBottom: mb }} />;
}

export type LegalSection = { heading: string; body: string[]; items?: string[] };

export function LegalDoc({
  kicker,
  title,
  intro,
  effective,
  sections,
  contact,
}: {
  kicker: string;
  title: string;
  intro: string;
  effective: string;
  sections: LegalSection[];
  contact: string;
}) {
  return (
    <section style={{ background: BG }}>
      <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", boxSizing: "border-box" }}>
        <Cross side="left" />
        <Cross side="right" />
        <Reveal as="div">
          <div className="mx-auto" style={{ maxWidth: 780, padding: "96px 24px 120px" }}>
            <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: SUB }}>{kicker}</span>
            <h1 style={{ margin: "16px 0 0", fontFamily: sans, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.01em", color: INK }}>
              {title}
            </h1>
            <span style={{ display: "block", marginTop: 16, fontFamily: mono, fontSize: 12, letterSpacing: "0.06em", color: SUB }}>{effective}</span>

            <Rule mt={32} mb={32} strong />

            <p style={{ margin: 0, fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: SUB }}>{intro}</p>

            {sections.map((s, i) => (
              <div key={s.heading} style={{ marginTop: 48 }}>
                <div className="flex items-baseline" style={{ gap: 12 }}>
                  <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: NUM }}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 style={{ margin: 0, fontFamily: sans, fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", color: INK }}>{s.heading}</h2>
                </div>
                {s.body.map((p, j) => (
                  <p key={j} style={{ margin: "12px 0 0", fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: SUB }}>
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul style={{ margin: "12px 0 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.items.map((it) => (
                      <li key={it} style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: SUB }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
                <Rule mt={32} />
              </div>
            ))}

            <p style={{ marginTop: 32, fontFamily: sans, fontSize: 16, lineHeight: 1.7, color: SUB }}>{contact}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
