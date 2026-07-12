<!-- Regenerate on structural change (new route, new store, moved/deleted export, changed public signature). Do not hand-edit — regenerate. -->

# touchmatrix.md

## 1. Header

| | |
|---|---|
| Stack | Next.js 16.2.10 (App Router) · React 19.2.4 · TypeScript 5 · Tailwind CSS 4 · shadcn (style: `base-nova`, base color: `neutral`) · Radix via `@base-ui/react` |
| Package manager | npm |
| Entry point | `app/layout.tsx` (root layout) → `app/page.tsx` (home) |
| Dev | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Start | `npm run start` |
| Lint | `npm run lint` |
| Last commit (base) | `59c64a0b620de19300b5b7ad2f751700751ae737` 2026-07-09 ⚠ route scaffold below is uncommitted (`git status` shows all `app/*` route dirs except home/layout as untracked) |
| State | Pre-content scaffold. All pages are empty shells (`<div></div>` or bare `<section id="...">` placeholders). No components, no data fetching, no global state yet. |

## 2. Route/Page map

Root layout `app/layout.tsx` wraps every route. No nested layouts exist — all pages share the one root layout. No route currently renders any component beyond its own placeholder markup. No data source or auth gating implemented anywhere yet (`/client-portal` is nav-gated by design per sitemap but has no actual auth check).

| Route | File | Renders | Data source | Auth-gated? |
|---|---|---|---|---|
| `/` | `app/page.tsx` | empty shell | — | no |
| `/platform` | `app/platform/page.tsx` | anchors: `#viso-yard` `#viso-warehouse` `#viso-factory` `#viso-data` | — | no |
| `/platform/viso-yard` | `app/platform/viso-yard/page.tsx` | anchors: `#container-vision` `#tank-vision` `#gate-vision` `#yard-vision` `#crane-vision` `#work-vision` `#cargo-vision` `#secure-vision` `#document-vision` | — | no |
| `/platform/viso-warehouse` | `app/platform/viso-warehouse/page.tsx` | anchors: `#cargo-vision` `#audit-vision` `#dimension-vision` `#work-vision` `#secure-vision` `#document-vision` | — | no |
| `/platform/viso-factory` | `app/platform/viso-factory/page.tsx` | anchors: `#production-vision` `#dimension-vision` `#audit-vision` `#secure-vision` `#work-vision` | — | no |
| `/platform/viso-data` | `app/platform/viso-data/page.tsx` | anchors: `#compression-ai` `#trace-ai` `#detect-ai` | — | no |
| `/industries` | `app/industries/page.tsx` | anchors: `#ports-icds-cfs` `#block-stacking-warehousing` `#manufacturing` `#shipyards-automotive-yards` `#retail-distribution` `#oil-gas-tank-storage` | — | no |
| `/resources/case-studies` | `app/resources/case-studies/page.tsx` | empty shell | — | no |
| `/resources/testimonials` | `app/resources/testimonials/page.tsx` | empty shell | — | no |
| `/resources/roi-calculator` | `app/resources/roi-calculator/page.tsx` | empty shell | — | no |
| `/resources/blog` | `app/resources/blog/page.tsx` | empty shell | — | no |
| `/resources/whitepapers` | `app/resources/whitepapers/page.tsx` | empty shell | — | no |
| `/resources/webinars` | `app/resources/webinars/page.tsx` | empty shell | — | no |
| `/resources/documentation` | `app/resources/documentation/page.tsx` | empty shell | — | no |
| `/resources/glossary` | `app/resources/glossary/page.tsx` | empty shell | — | no |
| `/resources/faqs` | `app/resources/faqs/page.tsx` | empty shell | — | no |
| `/resources/press-kit` | `app/resources/press-kit/page.tsx` | empty shell | — | no |
| `/company/about` | `app/company/about/page.tsx` | empty shell | — | no |
| `/company/careers` | `app/company/careers/page.tsx` | empty shell | — | no |
| `/company/newsroom` | `app/company/newsroom/page.tsx` | empty shell | — | no |
| `/company/investor-relations` | `app/company/investor-relations/page.tsx` | empty shell | — | no |
| `/company/partners` | `app/company/partners/page.tsx` | empty shell | — | no |
| `/company/sustainability` | `app/company/sustainability/page.tsx` | empty shell | — | no |
| `/company/offices` | `app/company/offices/page.tsx` | empty shell | — | no |
| `/contact` | `app/contact/page.tsx` | empty shell | — | no |
| `/client-portal` | `app/client-portal/page.tsx` | empty shell | — | intended per sitemap ⚠ not implemented |

**No route groups, no dynamic segments, no `not-found.tsx`/`error.tsx`/`loading.tsx` overrides exist yet.**

## 3. Component/Module index

| Symbol | File:line | Type | Consumed by | Consumes |
|---|---|---|---|---|
| `Button`, `buttonVariants` | `components/ui/button.tsx:58` | component (shadcn, wraps `@base-ui/react/button`) | nothing yet ⚠ unused | `cn` (lib/utils), `ButtonPrimitive` (`@base-ui/react/button`), `cva` |
| `cn` | `lib/utils.ts:4` | util | `components/ui/button.tsx` | `clsx`, `tailwind-merge` |
| `RootLayout` | `app/layout.tsx:20` | layout (default export) | Next.js router (implicit root) | `Geist`/`Geist_Mono` fonts, `./globals.css` |
| `*Page` (26 default exports, one per route above) | see route table | page (default export) | Next.js router | nothing — pure JSX shells |

## 4. State & data flow

None. No context providers, no stores (Zustand/Redux/etc.), no API clients, no fetch calls, no server actions. `RootLayout` is the only shared wrapper and holds no state.

## 5. Shared config & constants

| Name | File | Used where |
|---|---|---|
| shadcn config (`style`, `baseColor`, aliases) | `components.json` | `npx shadcn add` component generation only |
| Tailwind v4 tokens/theme | `app/globals.css` | global (Tailwind CSS-first config, no `tailwind.config.ts`) |
| Path alias `@/*` | `tsconfig.json` | all imports (maps to repo root) |
| Dev server launch config | `.claude/launch.json` | Claude Code preview tooling only, port 3000 |
| Font vars `--font-geist-sans`, `--font-geist-mono` | `app/layout.tsx` | `<html>` className, consumed by `globals.css` |

No env vars, no feature flags defined yet.

## 6. Blast radius / dependency edges

Nothing has fan-in ≥3 yet — the codebase is still pre-integration. Two edges worth noting for future changes:

- `cn` (`lib/utils.ts`) → currently only `components/ui/button.tsx`. Will become high-fan-in once more shadcn components are added; treat as stable API.
- `app/layout.tsx` → every page in section 2 (26 routes). Any change to root layout (e.g. adding a nav/header) touches all routes simultaneously — this is the intended integration point for the mega-menu nav described in project discussion but not yet built.

## 7. Cross-cutting concerns

- **Auth**: none implemented. `/client-portal` is the only route intended to be gated (per sitemap) but currently has no middleware, session check, or redirect.
- **Nav/header/footer**: intentionally absent — routes were scaffolded without shared chrome per explicit instruction. When added, it will live in `app/layout.tsx` and link into the anchor `id`s listed in section 2 (e.g. `/platform/viso-yard#container-vision`).
- **Error/loading handling**: none — relying entirely on Next.js App Router defaults (no custom `error.tsx`/`loading.tsx`/`not-found.tsx`).
- **i18n**: none. Sitemap source doc calls for `/en-us/`, `/en-gb/`, `/hi-in/`-style locale routing but it is not implemented.
- **Logging**: none.

## Staleness contract

Regenerate this file when any of the following change:

- `app/**/page.tsx` (route additions/removals, anchor `id` changes)
- `app/layout.tsx` or any new nested `layout.tsx`
- `components/**` (new/removed/renamed exports)
- `lib/**` (new/removed/renamed exports)
- `components.json`, `tsconfig.json`, `package.json` (dependencies/scripts/aliases)
- Introduction of any state store, context provider, API client, or middleware (currently none — first one added should trigger a full section 4 rewrite)
