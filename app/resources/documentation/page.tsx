import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Documentation",
  description: "Documentation at Visotonics — coming soon.",
  path: "/resources/documentation",
  noindex: true,
});

export default function DocumentationPage() {
  return <ComingSoon />;
}
