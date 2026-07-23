"use client";

/* ---------------------------------------------------------------------------
   Campaign routes are paid-ad landing pages — the full-height site footer
   (with its giant wordmark) reads as a large empty exit-zone below the short
   form. On /campaigns/* we swap it for a slim legal footer; every other route
   keeps the full SiteFooter. Server-rendered footers are passed in as props
   so this thin client wrapper only chooses between them.
--------------------------------------------------------------------------- */

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function ConditionalFooter({ full, minimal }: { full: ReactNode; minimal: ReactNode }) {
  const pathname = usePathname();
  const isCampaign = pathname?.startsWith("/campaigns");
  return <>{isCampaign ? minimal : full}</>;
}
