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

const CANVAS = "#0A0B0E";
const SURFACE = "#101216";
const TXT_D1 = "#F4F5F7";
const TXT_D2 = "#A6ADB8";
const SIGNAL = "#ED510C";
const BORDER_D = "rgba(244,245,247,0.14)";
const mono = "var(--font-plex-mono)";
const sans = "var(--font-archivo)";

const btnBase: CSSProperties = {
  height: 40,
  padding: "0 18px",
  borderRadius: 6,
  fontFamily: sans,
  fontSize: 14,
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
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 200,
        maxWidth: 720,
        margin: "0 auto",
        background: SURFACE,
        border: `1px solid ${BORDER_D}`,
        borderRadius: 10,
        padding: "18px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 14,
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ flex: "1 1 320px", minWidth: 0 }}>
        <span style={{ display: "block", fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: SIGNAL }}>
          Cookies
        </span>
        <p style={{ margin: "6px 0 0", fontFamily: sans, fontSize: 14, lineHeight: 1.5, color: TXT_D2 }}>
          We use cookies to understand site traffic and improve your experience.
          You can accept analytics cookies or keep only what&apos;s necessary.
        </p>
      </div>
      <div style={{ display: "flex", gap: 10, flex: "0 0 auto" }}>
        <button
          type="button"
          onClick={() => writeConsent("denied")}
          style={{ ...btnBase, background: "transparent", color: TXT_D1, border: `1px solid ${BORDER_D}` }}
        >
          Necessary only
        </button>
        <button
          type="button"
          onClick={() => writeConsent("granted")}
          style={{ ...btnBase, background: SIGNAL, color: CANVAS, border: "none" }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
