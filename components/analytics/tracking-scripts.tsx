"use client";

/* ---------------------------------------------------------------------------
   GA4 + LinkedIn Insight Tag loader.

   Renders nothing unless BOTH: (1) the relevant env var is set, and (2) the
   visitor granted cookie consent. This keeps the site tracking-free by default
   and until the visitor opts in — the scripts are injected client-side the
   moment consent flips to "granted" (no reload needed).

   Env vars (public, build-time):
     NEXT_PUBLIC_GA_ID                — GA4 Measurement ID (G-XXXXXXXXXX)
     NEXT_PUBLIC_LINKEDIN_PARTNER_ID  — LinkedIn Insight Tag Partner ID
--------------------------------------------------------------------------- */

import Script from "next/script";
import { useConsent } from "./consent-banner";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const LI_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

/** Fire a LinkedIn conversion (call on lead-form success). No-op if unset/denied. */
export function trackLinkedInConversion(conversionId?: string) {
  if (typeof window === "undefined") return;
  // window.lintrk exists only after the Insight Tag has loaded.
  const w = window as unknown as { lintrk?: (a: string, b?: unknown) => void };
  if (typeof w.lintrk === "function") {
    w.lintrk("track", conversionId ? { conversion_id: conversionId } : undefined);
  }
}

/** Fire a GA4 event (call on lead-form success). No-op if unset/denied. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", name, params || {});
}

export function TrackingScripts() {
  const consent = useConsent();
  if (consent !== "granted") return null;

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}

      {LI_PARTNER_ID ? (
        <>
          <Script id="linkedin-init" strategy="afterInteractive">
            {`window._linkedin_partner_id="${LI_PARTNER_ID}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push("${LI_PARTNER_ID}");`}
          </Script>
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
          </Script>
        </>
      ) : null}
    </>
  );
}
