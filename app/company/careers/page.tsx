import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Careers",
  description: "Careers at Visotonics — coming soon.",
  path: "/company/careers",
  noindex: true,
});

export default function CareersPage() {
  return <ComingSoon />;
}
