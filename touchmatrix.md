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
| State | Partial build-out. Home + the three built platform detail pages (Viso Yard, Viso Warehouse, Viso Data) are fully designed; nav/footer are global chrome. Many routes are still `ComingSoon` stubs or bare shells (see §2). First client-side interactivity has landed: the Yard/Warehouse rails run a scroll-spy. |

## 2. Route/Page map

Root layout `app/layout.tsx` wraps every route with `SiteNav` (top) and `SiteFooter` (bottom). No nested layouts. Status legend: **full** = designed/ported content · **coming-soon** = anchor `<section>`s + `<ComingSoon />` · **shell** = bare placeholder markup · **anchors** = empty anchor sections only.

| Route | File | Status | Renders / anchor ids | Auth-gated? |
|---|---|---|---|---|
| `/` | `app/page.tsx` | full | Home: hero → statement → how-it-works → metrics → proof+partners → testimonials → convert | no |
| `/platform` | `app/platform/page.tsx` | anchors | `#viso-yard` `#viso-warehouse` `#viso-factory` `#viso-data` | no |
| `/platform/viso-yard` | `app/platform/viso-yard/page.tsx` | full | hero manifest + sticky rail + 9 sections; ids `#container-vision` `#tank-vision` `#gate-vision` `#yard-vision` `#crane-vision` `#cargo-vision` `#document-vision` `#work-vision` `#secure-vision` | no |
| `/platform/viso-warehouse` | `app/platform/viso-warehouse/page.tsx` | full | hero manifest + sticky rail + 6 sections; ids `#cargo-vision` `#audit-vision` `#dimension-vision` `#document-vision` `#work-vision` `#secure-vision` | no |
| `/platform/viso-data` | `app/platform/viso-data/page.tsx` | full | 3 stacked sections, **no rail** (deep-link lands via scroll-margin); ids `#compression-ai` `#trace-ai` `#detect-ai` | no |
| `/platform/viso-factory` | `app/platform/viso-factory/page.tsx` | coming-soon | `#production-vision` `#dimension-vision` `#audit-vision` `#secure-vision` `#work-vision` | no |
| `/industries` | `app/industries/page.tsx` | coming-soon | anchors per sitemap | no |
| `/resources/faqs` | `app/resources/faqs/page.tsx` | full | — | no |
| `/resources/blog` | `app/resources/blog/page.tsx` | shell | — | no |
| `/resources/case-studies` | `app/resources/case-studies/page.tsx` | shell | — | no |
| `/resources/testimonials` | `app/resources/testimonials/page.tsx` | coming-soon | — | no |
| `/resources/roi-calculator` | `app/resources/roi-calculator/page.tsx` | coming-soon | — | no |
| `/resources/whitepapers` | `app/resources/whitepapers/page.tsx` | coming-soon | — | no |
| `/resources/webinars` | `app/resources/webinars/page.tsx` | coming-soon | — | no |
| `/resources/documentation` | `app/resources/documentation/page.tsx` | coming-soon | — | no |
| `/resources/glossary` | `app/resources/glossary/page.tsx` | coming-soon | — | no |
| `/resources/press-kit` | `app/resources/press-kit/page.tsx` | coming-soon | — | no |
| `/company/about` | `app/company/about/page.tsx` | full | — | no |
| `/company/offices` | `app/company/offices/page.tsx` | full | — | no |
| `/company/careers` | `app/company/careers/page.tsx` | coming-soon | — | no |
| `/company/newsroom` | `app/company/newsroom/page.tsx` | coming-soon | — | no |
| `/company/investor-relations` | `app/company/investor-relations/page.tsx` | coming-soon | — | no |
| `/company/partners` | `app/company/partners/page.tsx` | coming-soon | — | no |
| `/company/sustainability` | `app/company/sustainability/page.tsx` | coming-soon | — | no |
| `/contact` | `app/contact/page.tsx` | full | — | no |
| `/client-portal` | `app/client-portal/page.tsx` | full | — | intended per sitemap ⚠ no actual auth check |
| `/client-portal/register` | `app/client-portal/register/page.tsx` | full | — | no |

**No route groups, no dynamic segments, no `not-found.tsx`/`error.tsx`/`loading.tsx` overrides.**

## 3. Component/Module index

### Global chrome & primitives
| Symbol | File | Type | Consumed by | Consumes |
|---|---|---|---|---|
| `RootLayout` | `app/layout.tsx` | layout (default) | Next.js router | `SiteNav`, `SiteFooter`, `Archivo`/`IBM_Plex_Mono`, `./globals.css` |
| `SiteNav` | `components/site-nav.tsx` | component (client — dropdown/language state) | `RootLayout` | platform/resources/company link data; `productHref()` builds `…/viso-*#<slug>` deep links |
| `SiteFooter` | `components/site-footer.tsx` | component | `RootLayout` | link data |
| `ComingSoon` | `components/coming-soon.tsx` | component | every coming-soon route (§2) | — |
| `Button`, `buttonVariants` | `components/ui/button.tsx` | component (shadcn) | ⚠ unused | `cn`, `ButtonPrimitive`, `cva` |
| `cn` | `lib/utils.ts` | util | `components/ui/button.tsx` | `clsx`, `tailwind-merge` |

### Viso Yard route modules (`app/platform/viso-yard/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoYardPage` | `page.tsx` (default) | hero manifest + rail + 9 sections + `Convert` |
| `YardRailDesktop`, `YardRulerMobile`, `RAIL_SECTIONS` | `rail.tsx` | **client**; scroll-spy via `useActiveSection` |
| `SectionContainer`, `SectionTank`, `SectionGate`, `SectionYard`, `SectionCrane`, `SectionCargo`, `SectionDocument`, `PlatformBand`, `RegisterClose` | `sections.tsx` | ⚠ `SectionCargo` + `SectionDocument` are re-used by Viso Warehouse |
| `Convert` | `convert.tsx` | home-convert clone |
| tokens + `Cross`, `Dot`, `Verticals`, `eyebrow`, `SHEET`, `ANCHOR_OFFSET`, colour consts | `_shared.tsx` | ⚠ imported by Viso Warehouse too |
| `Schematic` | `_media.tsx` | server-only; inlines an SVG from `public/assets` (`fit` = `"width"`\|`"contain"`); ⚠ imported by Viso Warehouse too |

### Viso Warehouse route modules (`app/platform/viso-warehouse/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoWarehousePage` | `page.tsx` (default) | hero manifest + rail + 6 sections + `Convert` |
| `WarehouseRailDesktop`, `WarehouseRulerMobile`, `RAIL_SECTIONS` | `rail.tsx` | **client**; 6-tick scroll-spy |
| `SectionAudit`, `SectionDimension`, `SectionWork`, `SectionSecure` | `sections.tsx` | new; also re-exports `SectionCargo`, `SectionDocument` from `../viso-yard/sections` |
| `Convert` | `convert.tsx` | clone; secondary CTA → `/platform/viso-warehouse` |
| (imports `_shared` + `_media` from `../viso-yard`) | — | no local `_shared`/`_media` |

### Viso Data route module (`app/platform/viso-data/`)
| Symbol | File | Notes |
|---|---|---|
| `VisoDataPage` | `page.tsx` (default) | self-contained; `CompressionAI` (light), `TraceAI` (light), `DetectAI` (dark). No rail, no schematics, no shared imports. |

## 4. State & data flow

Still no global store, context provider, API client, fetch, or server action. The only client state is **scroll-spy**, implemented twice (Yard + Warehouse rails) via `useActiveSection` — a `useState<string|null>` updated from `scroll`/`resize`/`hashchange` listeners against a 40%-of-viewport trigger line. `SiteNav` holds local UI state (menu/language). Everything else is static server components.

## 5. Shared config & constants

| Name | File | Used where |
|---|---|---|
| shadcn config | `components.json` | `npx shadcn add` only |
| Tailwind v4 tokens/theme | `app/globals.css` | global (CSS-first, no `tailwind.config.ts`); `.on-light` band helper + `.dt-*` button classes |
| Path alias `@/*` | `tsconfig.json` | all imports |
| Dev server launch config | `.claude/launch.json` | Claude Code preview tooling, port 3000 |
| Font vars `--font-archivo`, `--font-plex-mono` | `app/layout.tsx` | `<html>` className → consumed as `sans`/`mono` throughout |
| Drafting-sheet tokens + primitives | `app/platform/viso-yard/_shared.tsx` | Yard + Warehouse sections/pages |
| Schematic SVG assets | `public/assets/*.svg` | inlined by `Schematic`; warehouse adds `audit-*`, `visotonics-dimension-*`, `warehouse-work-*`, `warehouse-secure-*` |

No env vars, no feature flags.

## 6. Blast radius / dependency edges

- `app/platform/viso-yard/_shared.tsx` → Yard page + Yard sections **and** Warehouse page + Warehouse sections. High fan-in; treat tokens/primitives as a stable API.
- `app/platform/viso-yard/_media.tsx` (`Schematic`) → Yard + Warehouse sections.
- `app/platform/viso-yard/sections.tsx` (`SectionCargo`, `SectionDocument`) → re-exported by `viso-warehouse/sections.tsx`. Editing either yard component changes both routes.
- `app/layout.tsx` → every route (nav/footer chrome).
- `components/site-nav.tsx` `productHref()` → the `#`-anchor ids in each platform detail page; renaming a section id breaks a nav deep link.
- `cn` (`lib/utils.ts`) → only `components/ui/button.tsx` (still low fan-in).

## 7. Cross-cutting concerns

- **Auth**: none. `/client-portal` is intended-gated per sitemap but has no middleware/session check.
- **Nav/header/footer**: `SiteNav` + `SiteFooter` in `app/layout.tsx`. Desktop nav is 72px, mobile nav 64px; the Yard/Warehouse mobile rulers add 44px (anchor `scroll-margin` = 108px mobile / 72px desktop via `ANCHOR_OFFSET`). Viso Data has no ruler (offset 64px mobile / 72px desktop).
- **Error/loading handling**: Next.js App Router defaults only.
- **i18n**: none (nav has a language switcher UI, but no locale routing).
- **Reduced motion**: rails honour `prefers-reduced-motion` (instant scroll); global duration overrides live in `globals.css`.
- **Logging**: none.

## Staleness contract

Regenerate this file when any of the following change:

- `app/**/page.tsx` (route additions/removals, status changes, anchor `id` changes)
- `app/layout.tsx` or any new nested `layout.tsx`
- `components/**`, `lib/**`, or any route-local module (`_shared`, `_media`, `rail`, `sections`, `convert`) — new/removed/renamed exports
- `components.json`, `tsconfig.json`, `package.json` (deps/scripts/aliases)
- Introduction of any state store, context provider, API client, or middleware (first one added → rewrite §4)
