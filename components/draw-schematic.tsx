"use client";

/* ---------------------------------------------------------------------------
   DrawSchematic — the schematic 3-act draw (Motion Spec §4.3), applied to any
   inlined SVG plate. On first entry into view (once):

     1. OUTLINE  — white line-work draws via stroke-dashoffset (--dur-4).
     2. LABELS   — mono <text> snaps in, linear, staggered 40ms (--dur-1).
     3. DETECTION— orange (#ED510C) shapes ignite last, fill blooms (--dur-2).

   Reduced motion / no-JS / any error → the schematic is left fully visible in
   its final state. SSR renders the full SVG; the initial hidden state is applied
   client-side before paint (useLayoutEffect), so no-JS is safe.
--------------------------------------------------------------------------- */

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from "react";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function isOrange(el: Element, root: Element): boolean {
  let e: Element | null = el;
  while (e && e !== root) {
    const s = `${e.getAttribute?.("stroke") ?? ""} ${e.getAttribute?.("fill") ?? ""}`;
    if (/ed510c/i.test(s)) return true;
    e = e.parentElement;
  }
  return false;
}

export function DrawSchematic({
  html,
  label,
  className,
  style,
}: {
  html: string;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIso(() => {
    const root = ref.current;
    if (!root || root.dataset.drawn) return;
    try {
      const svg = root.querySelector("svg");
      if (!svg) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        root.dataset.drawn = "true";
        return; // leave fully visible
      }

      const shapes = Array.from(
        svg.querySelectorAll<SVGElement>("path, line, polyline, polygon, rect, circle, ellipse"),
      );
      const texts = Array.from(svg.querySelectorAll<SVGTextElement>("text"));

      const draw: SVGElement[] = [];
      const orange: SVGElement[] = [];

      shapes.forEach((el) => {
        if (isOrange(el, svg)) {
          orange.push(el);
          el.style.opacity = "0";
          return;
        }
        // effective stroke — resolve inheritance from a parent <g stroke="…">
        let strokeVal: string | null = null;
        let a: Element | null = el;
        while (a && a !== svg.parentElement) {
          const s = a.getAttribute?.("stroke");
          if (s) {
            strokeVal = s;
            break;
          }
          a = a.parentElement;
        }
        if (!strokeVal || strokeVal === "none") return; // fills / bg stay visible
        el.setAttribute("pathLength", "1");
        el.style.strokeDasharray = "1";
        el.style.strokeDashoffset = "1";
        draw.push(el);
      });

      texts.forEach((t) => {
        if (isOrange(t, svg)) orange.push(t);
        t.style.opacity = "0";
      });

      const start = () => {
        root.dataset.drawn = "true";
        // ACT 1 — outline draws
        draw.forEach((el) => {
          el.style.transition = "stroke-dashoffset var(--duration-dur-4) var(--ease-standard)";
          el.style.strokeDashoffset = "0";
        });
        const OUT = 800;
        // ACT 2 — labels snap, staggered
        window.setTimeout(() => {
          let i = 0;
          texts.forEach((t) => {
            if (orange.includes(t)) return;
            window.setTimeout(() => {
              t.style.transition = "opacity var(--duration-dur-1) linear";
              t.style.opacity = "";
            }, i * 40);
            i += 1;
          });
        }, OUT);
        // ACT 3 — detection ignites last
        window.setTimeout(() => {
          orange.forEach((o) => {
            o.style.transition = "opacity var(--duration-dur-2) linear";
            o.style.opacity = "";
          });
        }, OUT + 200);
      };

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              io.disconnect();
              start();
              break;
            }
          }
        },
        { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
      );
      io.observe(root);
      return () => io.disconnect();
    } catch {
      // any failure → leave the schematic fully visible
      root.dataset.drawn = "true";
    }
  }, [html]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
