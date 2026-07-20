import type { Section } from "./posts";

/* Shared server-rendered renderer for a post body (Section/Block model).
   Used by the crawlable post page so the full article text is in the SSR
   HTML. Presentational only — no client JS. */

const sans = "var(--font-archivo)";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";

export function PostBody({ sections }: { sections: readonly Section[] }) {
  return (
    <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
      {sections.map((s, i) => (
        <div key={i}>
          {s.heading ? (
            <h2 style={{ margin: "0 0 12px", fontFamily: sans, fontSize: 22, fontWeight: 600, letterSpacing: "-0.005em", color: TXT_D1 }}>{s.heading}</h2>
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {s.blocks.map((b, j) =>
              b.type === "p" ? (
                <p key={j} style={{ margin: 0, fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: TXT_D2 }}>{b.text}</p>
              ) : (
                <ul key={j} style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                  {b.items.map((it, k) => (
                    <li key={k} style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.6, color: TXT_D2 }}>{it}</li>
                  ))}
                </ul>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
