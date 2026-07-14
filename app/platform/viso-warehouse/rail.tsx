"use client";

/* ---------------------------------------------------------------------------
   Viso Warehouse — the RAIL. Ported from the VisoWarehouse-Overview canvas
   (frames 2a desktop / 2b mobile ruler). Same behaviour as the Viso Yard rail:
   a sticky full-height legend on desktop, a sticky horizontal ruler on mobile,
   scroll-spy driven by a rAF-throttled scroll listener (trigger line at 40% of
   the viewport). Six sections instead of nine.
--------------------------------------------------------------------------- */

import { useEffect, useRef, useState } from "react";

const CANVAS = "#0A0B0E";
const TXT_PRIMARY = "#F4F5F7";
const TXT_SECONDARY = "#A6ADB8";
const DATUM = "rgba(244,245,247,0.18)";
const MARK = "rgba(244,245,247,0.32)";
const HAIRLINE = "rgba(244,245,247,0.10)";
const SIGNAL = "#ED510C";
const mono = "var(--font-plex-mono)";

// Rail ticks in scroll order — matches the warehouse hero manifest + DOM order.
export const RAIL_SECTIONS = [
  { n: "01", label: "CARGO", id: "cargo-vision" },
  { n: "02", label: "AUDIT", id: "audit-vision" },
  { n: "03", label: "DIMENSION", id: "dimension-vision" },
  { n: "04", label: "DOCUMENT", id: "document-vision" },
  { n: "05", label: "WORK", id: "work-vision" },
  { n: "06", label: "SECURE", id: "secure-vision" },
] as const;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function jumpTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  history.replaceState(null, "", `#${id}`);
}

const SECTION_IDS = RAIL_SECTIONS.map((s) => s.id);

function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const compute = () => {
      const line = window.innerHeight * 0.4;
      let next: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) next = id;
      }
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    window.addEventListener("hashchange", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      window.removeEventListener("hashchange", compute);
    };
  }, []);

  return active;
}

/* ---- desktop: sticky full-height legend ---------------------------------- */
export function WarehouseRailDesktop() {
  const active = useActiveSection();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [dotTop, setDotTop] = useState<number | null>(null);

  useEffect(() => {
    if (!active) {
      setDotTop(null);
      return;
    }
    const update = () => {
      const container = containerRef.current;
      const item = itemRefs.current[active];
      if (!container || !item) return;
      const cRect = container.getBoundingClientRect();
      const iRect = item.getBoundingClientRect();
      setDotTop(iRect.top - cRect.top + iRect.height / 2 - 1.5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block"
      style={{ flex: "0 0 180px", width: 180, alignSelf: "stretch" }}
    >
      <nav
        aria-label="Section navigation"
        style={{ position: "sticky", top: 72, height: "calc(100vh - 72px)", boxSizing: "border-box" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", left: 56, top: 90, bottom: 90, width: 1, background: DATUM }} />
        <div ref={containerRef} style={{ position: "absolute", left: 40, top: 0, bottom: 0, right: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "84px 0" }}>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: dotTop ?? 0,
              width: 3,
              height: 3,
              background: SIGNAL,
              opacity: dotTop === null ? 0 : 1,
              transition: "top var(--duration-dur-2) var(--ease-standard), opacity var(--duration-dur-1) linear",
              pointerEvents: "none",
            }}
          />
          {RAIL_SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                ref={(el) => {
                  itemRefs.current[s.id] = el;
                }}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo(s.id);
                }}
                style={{ display: "flex", alignItems: "center", gap: 14, height: 14, textDecoration: "none" }}
              >
                <span style={{ width: 3, height: 3, flex: "0 0 3px" }} />
                <span style={{ width: 6, height: 1, background: MARK }} />
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: isActive ? TXT_PRIMARY : TXT_SECONDARY,
                    transition: "color var(--duration-dur-1) var(--ease-standard)",
                  }}
                >
                  {s.n} {s.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

/* ---- mobile: sticky horizontal ruler under the nav ----------------------- */
export function WarehouseRulerMobile() {
  const active = useActiveSection();

  return (
    <div
      className="md:hidden"
      style={{ position: "sticky", top: 64, zIndex: 30, height: 44, background: CANVAS, borderBottom: `1px solid ${HAIRLINE}` }}
    >
      <div aria-hidden="true" style={{ position: "absolute", left: 24, right: 24, top: 22, height: 1, background: DATUM }} />
      <div style={{ position: "absolute", left: 24, right: 24, top: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {RAIL_SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`${s.n} ${s.label}`}
              onClick={(e) => {
                e.preventDefault();
                jumpTo(s.id);
              }}
              style={{ fontFamily: mono, fontSize: 13, letterSpacing: "0.04em", color: isActive ? TXT_PRIMARY : TXT_SECONDARY, background: CANVAS, padding: "0 3px", textDecoration: "none" }}
            >
              {isActive ? `[${s.n}]` : s.n}
            </a>
          );
        })}
      </div>
    </div>
  );
}
