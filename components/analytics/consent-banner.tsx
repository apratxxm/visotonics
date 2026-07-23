"use client";

/* ---------------------------------------------------------------------------
   Cookie-consent banner + shared consent state.

   TECHNICAL MECHANISM ONLY. The disclosure copy below is a short placeholder —
   the finalised legal wording (and a link to the privacy policy) belongs to
   the separate legal follow-up, not this file.

   The visitor's choice is stored in localStorage and broadcast via a custom
   event so TrackingScripts can react without a page reload. Analytics scripts
   never load until consent is "granted".
--------------------------------------------------------------------------- */

import { useEffect, useState, type CSSProperties } from "react";

const STORAGE_KEY = "viso-cookie-consent";
const EVENT = "viso-consent-change";

export type Consent = "granted" | "denied" | "unset";

export function readConsent(): Consent {
  if (typeof window === "undefined") return "unset";
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "granted" || v === "denied" ? v : "unset";
}

function writeConsent(value: Exclude<Consent, "unset">) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

/** Reactive consent subscription used by both the banner and the scripts. */
export function useConsent(): Consent {
  const [consent, setConsent] = useState<Consent>("unset");

  useEffect(() => {
    setConsent(readConsent());
    const onChange = () => setConsent(readConsent());
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return consent;
}

// Same typography tokens the nav's mega-menu panels use (components/site-nav.tsx),
// so the banner reads as the same system rather than a bespoke popup. No accent
// color here — this is a neutral, functional banner, not a promotional one.
const monoLabel: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-mono-label)",
  lineHeight: "var(--text-mono-label--line-height)",
  fontWeight: "var(--font-weight-mono-label)",
  letterSpacing: "var(--tracking-mono-label)",
  textTransform: "uppercase",
  color: "var(--text-dark-secondary)",
};

const menuTitle: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-title)",
  lineHeight: "var(--text-title--line-height)",
  fontWeight: "var(--font-weight-title)",
  letterSpacing: "var(--tracking-title)",
  color: "var(--text-dark-primary)",
};

const caption: CSSProperties = {
  fontSize: "var(--text-body-lg)",
  lineHeight: "var(--text-body-lg--line-height)",
  color: "var(--text-dark-secondary)",
};

const btnBase: CSSProperties = {
  height: 56,
  padding: "0 32px",
  borderRadius: 0,
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-body-lg)",
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export function ConsentBanner() {
  const consent = useConsent();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Only show once the client has resolved the stored choice, and only if unset.
  if (!mounted || consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="border-t"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        borderColor: "var(--border-dark)",
        background: "var(--canvas-dark)",
      }}
    >
      <div
        className="mx-auto flex max-w-[1360px] flex-col px-16"
        style={{ padding: "var(--spacing-s16) var(--spacing-s16) var(--spacing-s12)" }}
      >
        <span style={monoLabel}>Cookies</span>
        <p style={{ ...menuTitle, margin: "var(--spacing-s4) 0 0", maxWidth: "18ch", textWrap: "balance" }}>
          We use cookies to understand site traffic.
        </p>
        <p style={{ ...caption, margin: "var(--spacing-s3) 0 0", maxWidth: "48ch" }}>
          You can accept analytics cookies to help us improve the site, or keep
          only what&apos;s strictly necessary for it to function.
        </p>
        <div className="flex flex-wrap justify-end" style={{ gap: "var(--spacing-s4)", marginTop: "var(--spacing-s12)" }}>
          <button
            type="button"
            onClick={() => writeConsent("granted")}
            className="dt-fill cursor-pointer"
            style={{ ...btnBase, background: "var(--text-dark-primary)", color: "var(--canvas-dark)", border: "none" }}
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => writeConsent("denied")}
            className="dt-outline cursor-pointer"
            style={{ ...btnBase, background: "transparent", color: "var(--text-dark-primary)", border: "1px solid var(--border-dark-strong)" }}
          >
            Necessary only
          </button>
        </div>
      </div>
    </div>
  );
}
