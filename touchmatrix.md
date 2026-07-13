<!-- Regenerate on structural change (new route, new store, moved/deleted export, changed public signature). Do not hand-edit — regenerate. -->

# touchmatrix.md

## 1. Header

| | |
|---|---|
| Stack | Next.js 16.2.10 (App Router) · React 19.2.4 · TypeScript 5 · Tailwind CSS 4 · shadcn (style: `base-nova`, base color: `neutral`) · Radix via `@base-ui/react` |
| Package manager | npm |
| Entry point | `app/layout.tsx` (root layout, renders `SiteNav` + `SiteFooter`) → `app/page.tsx` (home) |
| Dev | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Start | `npm run start` |
| Lint | `npm run lint` |
| Fonts | `Archivo` (`--font-archivo`, sans) + `IBM_Plex_Mono` (`--font-plex-mono`, mono) via `next/font/google` in `app/layout.tsx` |
| State | Home + all four platform detail pages (Viso Yard, Viso Warehouse, Viso Factory, Viso Data) plus `/industries` and `/company/about` are fully built. Most `/resources/*` and several `/company/*` routes are still `ComingSoon` stubs or bare `<div>` shells (see §2). Client-side interactivity: Yard/Warehouse/Factory rails (scroll-spy), `DecryptedText` decode effect, `Reveal`/`CountUp` motion primitives, `DrawSchematic` SVG draw-on. |

## 2. Route/Page map

Root layout `app/layout.tsx` wraps every route with `SiteNav` (top) and `SiteFooter` (bottom). No nested layouts. Status legend: **full** = designed/ported content · **coming-soon** = `ComingSoon` component · **shell** = bare `<div></div>` placeholder (no `ComingSoon`) · **anchors** = empty anchor `<section>`s only.

| Route | File | Status | Renders / anchor ids | Client state? |
|---|---|---|---|---|
| `/` | `app/page.tsx` | full | Hero → Statement → HowItWorks → Metrics → ProofPartners → Testimonials → Convert. Uses `DecryptedText`/`Reveal`/`CountUp` | no |
| `/platform` | `app/platform/page.tsx` | anchors | `#viso-yard` `#viso-warehouse` `#viso-factory` `#viso-data` (empty stubs) | no |
| `/platform/viso-yard` | `app/platform/viso-yard/page.tsx` | full | hero manifest + sticky rail + 9 sections (2 reused from Warehouse); ids `#container-vision` `#tank-vision` `#gate-vision` `#yard-vision` `#crane-vision` `#cargo-vision` `#document-vision` `#work-vision` `#secure-vision` | rail only |
| `/platform/viso-warehouse` | `app/platform/viso-warehouse/page.tsx` | full | hero manifest + sticky rail + 6 sections (2 reused from Yard); ids `#cargo-vision` `#audit-vision` `#dimension-vision` `#document-vision` `#work-vision` `#secure-vision` | rail only |
| `/platform/viso-data` | `app/platform/viso-data/page.tsx` | full | 3 stacked sections, **no rail** (deep-link via scroll-margin), fully self-contained (own local tokens, no `_shared`/`_media` import); ids `#compression-ai` `#trace-ai` `#detect-ai` | no |
| `/platform/viso-factory` | `app/platform/viso-factory/page.tsx` | full | hero manifest + sticky rail + 5 sections (4 reused from Warehouse via a factory→warehouse→yard chain); ids `#production-vision` `#audit-vision` `#dimension-vision` `#work-vision` `#secure-vision` | rail only |
| `/industries` | `app/industries/page.tsx` | full | Intro + 4 `ChapterBlock`s (`CHAPTERS` array, one per vertical) + Closing; uses `.doc-grid` layout + `Schematic`→`DrawSchematic`; no section ids (nav links point to `/contact`/`/platform`) | draw-schematic only |
| `/resources/faqs` | `app/resources/faqs/page.tsx` | full | FAQ accordion | yes — `useState` accordion |
| `/resources/blog` | `app/resources/blog/page.tsx` | **shell** (bare `<div></div>`, no `ComingSoon`) | — | no |
| `/resources/case-studies` | `app/resources/case-studies/page.tsx` | **shell** (bare `<div></div>`, no `ComingSoon`) | — | no |
| `/resources/testimonials` | `app/resources/testimonials/page.tsx` | coming-soon | — | no |
| `/resources/roi-calculator` | `app/resources/roi-calculator/page.tsx` | coming-soon | — | no |
| `/resources/whitepapers` | `app/resources/whitepapers/page.tsx` | coming-soon | — | no |
| `/resources/webinars` | `app/resources/webinars/page.tsx` | coming-soon | — | no |
| `/resources/documentation` | `app/resources/documentation/page.tsx` | coming-soon | — | no |
| `/resources/glossary` | `app/resources/glossary/page.tsx` | coming-soon | — | no |
| `/resources/press-kit` | `app/resources/press-kit/page.tsx` | coming-soon | — | no |
| `/company/about` | `app/company/about/page.tsx` | full | About stats/timeline + Team grid (**3-column** `md:grid-cols-3`, 6 members) | no |
| `/company/offices` | `app/company/offices/page.tsx` | full | Offices list + `OfficesGlobe` SVG; dangling `#offices-list` link (no matching id) | no |
| `/company/careers` | `app/company/careers/page.tsx` | coming-soon | — | no |
| `/company/newsroom` | `app/company/newsroom/page.tsx` | coming-soon | — | no |
| `/company/investor-relations` | `app/company/investor-relations/page.tsx` | coming-soon | — | no |
| `/company/partners` | `app/company/partners/page.tsx` | coming-soon | — | no |
| `/company/sustainability` | `app/company/sustainability/page.tsx` | coming-soon | — | no |
| `/contact` | `app/contact/page.tsx` | full | Contact form → `mailto:contact@excl.ai` (no client submit handler) | no |
| `/client-portal` | `app/client-portal/page.tsx` | full | Login card via `./_shared`; dangling `#dashboard`/`#reset`/`#request-access` | intended per sitemap ⚠ no actual auth check |
| `/client-portal/register` | `app/client-portal/register/page.tsx` | full | Register card via `../_shared`; dangling `#dashboard` | no |

**No route groups, no dynamic segments, no `not-found.tsx`/`error.tsx`/`loading.tsx` overrides.** `app/layout.tsx` metadata is still create-next-app boilerplate (`title: "Create Next App"`) — not yet customized.

## 3. Component/Module index

### Global chrome & primitives
| Symbol | File | Type | Consumed by | Consumes |
|---|---|---|---|---|
| `RootLayout` | `app/layout.tsx` | layout (default) | Next.js router | `SiteNav`, `SiteFooter`, `Archivo`/`IBM_Plex_Mono`, `./globals.css`, noscript motion fallback |
| `SiteNav` | `components/site-nav.tsx` | **client** (7 `useState` for menu/mobile/accordion/language; 1 `useEffect` pointerdown-outside-close listener) | `RootLayout` | `Brand`; platform/resources/company link data; `productHref()` builds `…/viso-*#<slug>` deep links |
| `SiteFooter` | `components/site-footer.tsx` | component (server) | `RootLayout` | `Brand`; link data |
| `Brand` | `components/brand.tsx` | component (server, plain `<img>`) | `SiteNav`, `SiteFooter` | — |
| `DecryptedText` (default export) | `components/decrypted-text.tsx` | **client** (heavy `useState`/`useEffect`/`useCallback`/`useMemo`, 2 IntersectionObservers, rAF loop + `setInterval` scramble) | `app/page.tsx`, viso-yard/page.tsx, viso-warehouse/page.tsx, viso-factory/page.tsx (not viso-data or industries) | — |
| `Reveal`, `CountUp`, `DecodeHeadline` | `components/motion.tsx` | **client** (each own IntersectionObserver) | `Reveal`/`CountUp` used by `app/page.tsx`; `DecodeHeadline` exported, ⚠ zero current importers | — |
| `DrawSchematic` | `components/draw-schematic.tsx` | **client** (`useLayoutEffect`/`useEffect`, 1 IntersectionObserver, manual stroke-dashoffset animation, 3-act `setTimeout` sequence) | `app/platform/viso-yard/_media.tsx` (`Schematic` wrapper) | — |
| `ComingSoon` | `components/coming-soon.tsx` | component (server) | 12 coming-soon stub routes (§2) — highest fan-in in the tree | — |
| `Button`, `buttonVariants` | `components/ui/button.tsx` | component (shadcn, cva) | ⚠ unused — no importers found in `app/` | `cn`, `ButtonPrimitive`, `cva` |
| `cn` | `lib/utils.ts` | util | `components/ui/button.tsx` | `clsx`, `tailwind-merge` |

### Viso Yard route modules (`app/platform/viso-yard/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoYardPage` | `page.tsx` (default) | hero manifest + rail + 9 sections + `Convert`. Imports `SectionSecure, SectionWork` **from `../viso-warehouse/sections`** (own eyebrow numbers overridden via `n="08"`/`n="09"` prop) |
| `YardRailDesktop`, `YardRulerMobile`, `RAIL_SECTIONS` | `rail.tsx` | **client**; scroll-spy via `useState` + scroll/resize/hashchange listeners (rAF-throttled, no IntersectionObserver — deliberate, keeps working when tab backgrounded) |
| `SectionContainer`, `SectionTank`, `SectionGate`, `SectionYard`, `SectionCrane`, `SectionCargo`, `SectionDocument`, `PlatformBand` | `sections.tsx` | ⚠ `SectionCargo` + `SectionDocument` re-exported by Viso Warehouse |
| `Convert` | `convert.tsx` | home-convert clone |
| tokens + `Cross`, `Dot`, `Verticals`, `eyebrow`, `SHEET`, `ANCHOR_OFFSET`, colour consts | `_shared.tsx` | ⚠ high fan-in — imported by Yard + Warehouse + Factory page/sections (6 files) |
| `Schematic` | `_media.tsx` | server-only; reads SVG from `public/assets` via `node:fs`, module-level cache; delegates draw animation to `DrawSchematic`. ⚠ imported by Warehouse, Factory, and `app/industries/page.tsx` |

### Viso Warehouse route modules (`app/platform/viso-warehouse/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoWarehousePage` | `page.tsx` (default) | hero manifest + rail + 6 sections + `Convert` |
| `WarehouseRailDesktop`, `WarehouseRulerMobile`, `RAIL_SECTIONS` | `rail.tsx` | **client**; same scroll-spy pattern as Yard rail |
| `SectionAudit`, `SectionDimension`, `SectionWork({n="05"})`, `SectionSecure({n="06"})` | `sections.tsx` | `SectionWork`/`SectionSecure` take an optional `n` eyebrow-number prop (default "05"/"06") so Yard can override to "08"/"09". Also re-exports `SectionCargo`, `SectionDocument` from `../viso-yard/sections` |
| `Convert` | `convert.tsx` | clone; CTA → `/platform/viso-warehouse` |
| (imports `_shared` + `_media` from `../viso-yard`) | — | no local `_shared`/`_media` |

### Viso Factory route modules (`app/platform/viso-factory/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoFactoryPage` | `page.tsx` (default) | hero manifest + rail + 5 sections + `Convert` |
| `FactoryRailDesktop`, `FactoryRulerMobile` | `rail.tsx` | **client**; same scroll-spy pattern |
| `SectionProduction` (factory-authored "the feed") + re-exports `SectionAudit`, `SectionDimension`, `SectionWork`, `SectionSecure` | `sections.tsx` | re-exports pulled **from `../viso-warehouse/sections`** — factory → warehouse → yard is a two-hop dependency chain |
| `Convert` | `convert.tsx` | clone; CTA → this route |
| (imports `_shared` + `_media` from `../viso-yard`) | — | no local `_shared`/`_media` |

### Viso Data route module (`app/platform/viso-data/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoDataPage` | `page.tsx` (default) | self-contained; `CompressionAI` (light), `TraceAI` (light), `DetectAI` (dark). Own local tokens/`Cross`/`LightCorners`/`SHEET` — no rail, no `_shared`/`_media` import (deliberate isolation) |

### Industries route module (`app/industries/`)
| Symbol | File | Notes |
|---|---|---|
| `IndustriesPage` | `page.tsx` (default) | data-driven long-form document: `Intro` + `CHAPTERS.map(ChapterBlock)` + `Closing`; uses `.doc-grid` CSS layout and `Schematic` (from `../platform/viso-yard/_media`) for figures |

## 4. State & data flow

No global store, context provider, API client, fetch, or server action anywhere in the app. Client-side state is scattered across 7 `"use client"` files:

- `components/site-nav.tsx` — 7 `useState` (menu/mobile/accordion/language UI) + 1 `useEffect` (pointerdown-outside-close).
- `components/decrypted-text.tsx` — 6 `useState`, 2 IntersectionObservers, rAF loop + `setInterval` scramble.
- `components/motion.tsx` — `Reveal` (IntersectionObserver, threshold 0.2, one-shot via `data-revealed`), `CountUp` (IntersectionObserver threshold 0.6 + `setTimeout` tick loop, mutates DOM text directly, no React state), `DecodeHeadline` (1 `useState` + `setTimeout`, currently unused).
- `components/draw-schematic.tsx` — no `useState`; `useLayoutEffect`/`useEffect`, 1 IntersectionObserver (threshold 0.25), manual SVG stroke-dashoffset mutation + nested `setTimeout`s (3-act sequence).
- `app/platform/viso-yard/rail.tsx`, `viso-warehouse/rail.tsx`, `viso-factory/rail.tsx` — each: 1 `useState` (`active`) + `useRef` + `useEffect` registering scroll/resize/hashchange window listeners (rAF-throttled rect reads, no IntersectionObserver by design).
- `app/resources/faqs/page.tsx` — `useState` accordion open/close.

Everything else is a static server component.

## 5. Shared config & constants

| Name | File | Used where |
|---|---|---|
| shadcn config | `components.json` | `npx shadcn add` only |
| Tailwind v4 tokens/theme | `app/globals.css` | global (CSS-first, no `tailwind.config.ts`); `.on-light` band helper, `.dt-*` button classes, `.doc-grid` (industries reading grid), Motion Spec v1 tokens (`.v-reveal`, `.v-reveal-mono`, `.v-dec`, `.v-enc`) |
| Path alias `@/*` | `tsconfig.json` | all imports |
| Dev server launch config | `.claude/launch.json` | Claude Code preview tooling, port 3000 |
| Font vars `--font-archivo`, `--font-plex-mono` | `app/layout.tsx` | `<html>` className → consumed as `sans`/`mono` throughout |
| Drafting-sheet tokens + primitives | `app/platform/viso-yard/_shared.tsx` | Yard + Warehouse + Factory sections/pages |
| Schematic SVG assets | `public/assets/*.svg` | inlined by `Schematic`; includes `audit-*`, `visotonics-dimension-*`, `warehouse-work-*`, `warehouse-secure-*`, `factory-production-*`, plus industries-page figures |
| Motion Spec v1 (reduced-motion + noscript fallback) | `app/globals.css` + `app/layout.tsx` | site-wide `.v-reveal`/`.v-reveal-mono`/`.v-dec` gated by `prefers-reduced-motion: no-preference`; `<noscript>` forces final visible state |

No env vars, no feature flags.

## 6. Blast radius / dependency edges

- `app/platform/viso-yard/_shared.tsx` → Yard page+sections, Warehouse page+sections, Factory page+sections (6 files). High fan-in; treat tokens/primitives as a stable API.
- `app/platform/viso-yard/_media.tsx` (`Schematic`) → Yard, Warehouse, Factory sections, and `app/industries/page.tsx` (4 consumers).
- `app/platform/viso-yard/sections.tsx` (`SectionCargo`, `SectionDocument`) → re-exported by `viso-warehouse/sections.tsx`. Editing either yard component changes both routes.
- `app/platform/viso-warehouse/sections.tsx` (`SectionWork`, `SectionSecure`) → imported directly by `viso-yard/page.tsx` (with `n` prop override) **and** re-exported through `viso-factory/sections.tsx` — a factory→warehouse→yard two-hop chain. Editing either component changes Warehouse, Yard, and Factory simultaneously.
- `components/decrypted-text.tsx` → home + Yard + Warehouse + Factory hero titles (4 consumers).
- `components/coming-soon.tsx` → 12 stub routes — highest fan-in in the tree.
- `components/brand.tsx` → `SiteNav` + `SiteFooter`.
- `app/layout.tsx` → every route (nav/footer chrome, fonts, noscript motion fallback).
- `components/site-nav.tsx` `productHref()` → the `#`-anchor ids in each platform detail page; renaming a section id breaks a nav deep link.
- `cn` (`lib/utils.ts`) → only `components/ui/button.tsx` (still low fan-in; `Button` itself is currently unused).

## 7. Cross-cutting concerns

- **Auth**: none. `/client-portal` is intended-gated per sitemap but has no middleware/session check.
- **Nav/header/footer**: `SiteNav` + `SiteFooter` in `app/layout.tsx`. Desktop nav is 72px, mobile nav 64px; the Yard/Warehouse/Factory mobile rulers add 44px (anchor `scroll-margin` = 108px mobile / 72px desktop via `ANCHOR_OFFSET`). Viso Data has no ruler (offset 64px mobile / 72px desktop).
- **Error/loading handling**: Next.js App Router defaults only.
- **i18n**: none (nav has a language switcher UI, but no locale routing).
- **Reduced motion**: rails honour `prefers-reduced-motion` (instant scroll); Motion Spec v1 (`.v-reveal`/`.v-reveal-mono`/`.v-dec`) gated by `@media (prefers-reduced-motion: no-preference)`; `<noscript>` fallback in `app/layout.tsx` forces final visible state with no JS.
- **Logging**: none.
- **Known dangling anchors**: `/company/offices` (`#offices-list`), `/client-portal` (`#dashboard`/`#reset`/`#request-access`), `/client-portal/register` (`#dashboard`) — linked but no matching `id` exists.
- **Known dead exports**: `components/ui/button.tsx` (`Button`/`buttonVariants`), `components/motion.tsx`'s `DecodeHeadline` — no current importers.

## Staleness contract

Regenerate this file when any of the following change:

- `app/**/page.tsx` (route additions/removals, status changes, anchor `id` changes)
- `app/layout.tsx` or any new nested `layout.tsx`
- `components/**`, `lib/**`, or any route-local module (`_shared`, `_media`, `rail`, `sections`, `convert`) — new/removed/renamed exports
- `components.json`, `tsconfig.json`, `package.json` (deps/scripts/aliases)
- Introduction of any state store, context provider, API client, or middleware (first one added → rewrite §4)
