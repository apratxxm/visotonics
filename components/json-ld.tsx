import { SITE_NAME, SITE_URL } from "@/lib/seo";

/* ---------------------------------------------------------------------------
   JSON-LD (schema.org) structured data. Server component — renders a plain
   <script type="application/ld+json"> with no client JS. This is the
   machine-readable "fact sheet" that Google's Knowledge Panel and LLMs read to
   ground what Visotonics is, what its products do, and its FAQ content.
--------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // Content is our own static data (not user input) — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* Organization — the brand entity. Rendered once (root layout). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/visotonics-high-resolution-logo-transparent.png`,
    description:
      "AI vision platform that turns existing CCTV into automated inspection and monitoring for container terminals, warehouses and factories.",
    foundingDate: "2024",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressCountry: "US",
      },
    ],
  };
}

/* WebSite — enables sitelinks/site identity. Rendered once (root layout). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/* Product / SoftwareApplication — one per Viso product page. */
export function productSchema({
  name,
  description,
  path,
  features,
}: {
  name: string;
  description: string;
  path: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    url: `${SITE_URL}${path}`,
    description,
    ...(features && features.length
      ? { featureList: features }
      : {}),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/* FAQPage — for the FAQs route. */
export function faqSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.question,
      acceptedAnswer: { "@type": "Answer", text: x.answer },
    })),
  };
}

/* Article / BlogPosting — for blog post pages. */
export function articleSchema({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/visotonics-high-resolution-logo-transparent.png`,
      },
    },
  };
}
