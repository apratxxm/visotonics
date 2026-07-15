# Visotonics

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Routes

```
/                                     Home
/platform
  /viso-yard                         Ports & Terminals
  /viso-warehouse                    Warehousing & Distribution
  /viso-factory                      Manufacturing
  /viso-data                         Compression AI / Trace AI / Detect AI
/industries                          Ports & Terminals · Warehousing & Distribution · Manufacturing · Logistics & Supply Chain
/company
  /about
  /offices
  /careers
  /newsroom
  /investor-relations
  /partners
  /sustainability
/resources
  /faqs
  /blog
  /case-studies
  /testimonials
  /roi-calculator
  /whitepapers
  /webinars
  /documentation
  /glossary
  /press-kit
/contact
/client-portal
  /register
/legal
  /privacy-policy
  /terms-and-conditions
```

## Structure

```
app/                        routes (App Router — one page.tsx per route above)
components/                 shared UI (nav, footer, motion primitives, testimonial pager, etc.)
app/platform/viso-yard/
  _shared.tsx                drafting-sheet tokens/primitives shared by all platform pages
  _media.tsx                 inlines SVGs from public/assets for the schematic-draw animation
  sections.tsx                section components (some re-exported by viso-warehouse/viso-factory)
public/assets/               SVG schematics, images
```
