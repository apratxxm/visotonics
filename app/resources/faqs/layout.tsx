import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/json-ld";
import { FAQS } from "./faqs-data";

/* The FAQ page itself is a client component (accordion state), so its metadata
   and FAQPage structured data live here in the route layout (a server
   component). FAQ content is shared from faqs-data.ts. */

export const metadata = pageMeta({
  title: "FAQs",
  description:
    "Answers to common questions about Visotonics — what it is, how it reads container damage automatically, which sites it fits, and how deployment is scoped against existing CCTV.",
  path: "/resources/faqs",
});

export default function FaqsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })))}
      />
      {children}
    </>
  );
}
