import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CAMPAIGNS, MODULES, getCampaign } from "../data";
import { CampaignLanding } from "@/components/campaign/campaign-landing";
import { pageMeta } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   /campaigns/[slug] — ad-campaign landing pages ("Signal split" layout).
   Statically generated from the CAMPAIGNS registry; noindex (paid-ad
   destinations, not organic search pages) and excluded from the sitemap.
--------------------------------------------------------------------------- */

export function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) return {};
  const mod = MODULES[campaign.moduleId];
  return pageMeta({
    title: `${mod.name} — Book a walkthrough`,
    description: mod.brief,
    path: `/campaigns/${campaign.slug}`,
    noindex: true,
  });
}

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();
  const mod = MODULES[campaign.moduleId];

  return <CampaignLanding campaign={campaign} module={mod} />;
}
