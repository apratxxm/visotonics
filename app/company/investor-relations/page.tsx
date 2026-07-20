import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Investor Relations",
  description: "Investor Relations at Visotonics — coming soon.",
  path: "/company/investor-relations",
  noindex: true,
});

export default function InvestorRelationsPage() {
  return <ComingSoon />;
}
