import { pageMeta } from "@/lib/seo";

// Unbuilt — keep out of search results until content ships.
export const metadata = pageMeta({
  title: "Case Studies",
  description: "Case studies at Visotonics — coming soon.",
  path: "/resources/case-studies",
  noindex: true,
});

export default function CaseStudiesPage() {
  return <div></div>;
}
