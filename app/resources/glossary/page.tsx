import { ComingSoon } from "@/components/coming-soon";
import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Glossary",
  description: "Glossary at Visotonics — coming soon.",
  path: "/resources/glossary",
  noindex: true,
});

export default function GlossaryPage() {
  return <ComingSoon />;
}
