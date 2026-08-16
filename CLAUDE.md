# CLAUDE.md

## What this is

The BIMS Technologies, Inc. marketing site. It started as Contentful's
`template-blog-webapp-nextjs` starter (package name and README are still the starter's) and is
being rebuilt page-by-page against a Figma design. The starter's blog machinery — Contentful
GraphQL, i18n routing, draft mode, live preview — is still wired up and working; the marketing
pages layered on top of it (home, header, footer, blog index) are hand-written from the design.

Stack: Next.js 14 App Router, React 18, TypeScript, Tailwind 3, Contentful GraphQL, `next-i18n-router`.

## Commands

Package manager is Yarn 3.2.1 (`packageManager` field, `nodeLinker: node-modules`).

```bash
yarn dev                      # next dev
yarn build                    # next build
yarn lint                     # next lint
yarn type-check               # tsc --noEmit
yarn graphql-codegen:generate # regenerate src/lib/__generated/* from the live Contentful schema
```

`graphql-codegen` hits the Contentful API using `.env`, so it needs `CONTENTFUL_SPACE_ID` and
`CONTENTFUL_ACCESS_TOKEN` set. Run it after editing anything in `src/lib/graphql/`.

⚠️ Both `yarn.lock` and `package-lock.json` are committed, and `node_modules/` has install markers
from both npm and Yarn. Prefer `yarn` (that's what `engines` and `packageManager` ask for), and
don't let a stray `npm install` rewrite `package-lock.json` — the two lockfiles will drift.

## Routing — read this before adding a page

`src/middleware.ts` runs `i18nRouter` on every non-asset path with `prefixDefault: false`
(the default). Every request is rewritten under a locale segment: `/blog` → `/en-US/blog`,
`/anything` → `/en-US/anything`.

**Consequence: only routes under `src/app/[locale]/` are reachable.** New pages go there.

The flat directories that sit beside it are dead code and can never render:

- [src/app/page.tsx](src/app/page.tsx) — blank div
- [src/app/blog/page.tsx](src/app/blog/page.tsx) — a static, pre-Contentful draft of the blog index
- [src/app/about-us/](src/app/about-us/), [src/app/contact/](src/app/contact/), [src/app/services/](src/app/services/) — placeholder stubs
- [src/app/home/page.tsx](src/app/home/page.tsx) — see "Anima exports" below

[src/app/layout.tsx](src/app/layout.tsx) is the exception: Next requires a root layout, so it exists
only to pass `children` through. The real document shell (`<html>`, `<body>`, fonts, Header, Footer,
i18n provider, Contentful preview provider) is [src/app/[locale]/layout.tsx](src/app/[locale]/layout.tsx).

Live routes today:

| Path | File |
| --- | --- |
| `/` | [src/app/[locale]/page.tsx](src/app/[locale]/page.tsx) — the designed BIMS homepage |
| `/blog` | [src/app/[locale]/blog/page.tsx](src/app/[locale]/blog/page.tsx) — Contentful-backed index |
| `/<slug>` | [src/app/[locale]/[slug]/page.tsx](src/app/[locale]/[slug]/page.tsx) — blog post detail |
| anything else | 404 via [src/app/[locale]/[...notFound]/page.tsx](src/app/[locale]/[...notFound]/page.tsx) |

The Header and Footer already link to `/services`, `/about-us`, `/contact`, `/careers`, `/giyapay`,
`/wrike`, `/zenpos`, `/maretinda`, `/privacy-policy`, `/terms-of-service`. **None of these exist yet**
— they all 404. Building them out from the Figma screens is the work in progress.

## Contentful

- [src/lib/client.ts](src/lib/client.ts) exports `client` (published) and `previewClient` (drafts).
  It imports the endpoint from the root `codegen.ts` — an unusual import path, but intentional.
- Query documents live in [src/lib/graphql/](src/lib/graphql/) as `.graphql` files; the typed SDK is
  generated into [src/lib/__generated/sdk.ts](src/lib/__generated/sdk.ts). Never hand-edit `__generated/`.
- Pages pick the client with `const gqlClient = draftMode().isEnabled ? previewClient : client`.
- `/api/enable-draft` ([route.ts](src/app/api/enable-draft/route.ts)) is Contentful's Vercel preview
  handshake. It's starter code — leave it alone unless preview breaks.
- Content types in play: `PageLanding` (holds `featuredBlogPost`), `PageBlogPost`, `Author`, `SeoFields`.

## Design system

Figma file `YhDoKvzYJLAM3ivEIRKKyr`, page 178:26 "Final Design" — 10 screens at 1440px wide,
1240px content column.

**Tokens** (currently written as arbitrary Tailwind values, e.g. `text-[#055094]`, not theme entries):

| Role | Value |
| --- | --- |
| primary | `#055094` |
| text | `#051625` |
| bg light blue | `#EEF7FC` |
| background | `#F5F7FA` |

Fonts are loaded with `next/font/google` in `[locale]/layout.tsx` and exposed as CSS variables →
Tailwind families: `font-montserrat` for headings, `font-inter` for body, `font-sans`
(Urbanist) as the inherited default from the starter.

Reading designs out of Figma, two things need translating rather than copying:

- Figma reports `lineHeight: 100` as an **absolute** value. Applied literally it destroys smaller
  headings. Use a sensible relative line-height instead.
- The Figma variable list contains stray shadcn leakage — `foregrounds/*`, `backgrounds/*`, and
  `spacing-*` are **not** this project's tokens. Ignore them.

### Tailwind config

[tailwind.config.js](tailwind.config.js) programmatically pulls every hex color out of
`@contentful/f36-tokens` into the palette. That's why [globals.css](src/app/globals.css) references
names like `gray800`, `gray100`, `gray600` — those are Contentful's tokens, not BIMS's, and they set
the site's default body color and background. Newer components override them locally with arbitrary
values. If you touch `globals.css`, know you're changing the baseline for the starter-era components
(article tiles, rich text) as well as the new ones.

### Styling conventions in the newer code

The hand-built pages mix Tailwind utilities with inline `style={{}}` for gradients, shadows, and
one-off colors. Full-bleed sections escape the container with
`style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}`. Match the surrounding file rather than
imposing a single approach.

## Components

- [components/templates/header/Header.tsx](src/components/templates/header/Header.tsx) — client
  component. Fixed, transparent until 40px of scroll, then white/blurred. Pill-shaped nav with a
  hover-triggered Services mega-dropdown (six groups: Plan / Build / Integrate / Analyze / Manage /
  Train). The dropdown uses a transparent "bridge" div plus a 200ms close timer so the pointer can
  cross the gap without it snapping shut — don't remove either.
- [components/templates/footer/Footer.tsx](src/components/templates/footer/Footer.tsx) — renders
  `CtaSection` above itself, so the CTA band comes along with the footer on every page.
- [components/templates/footer/CtaSection.tsx](src/components/templates/footer/CtaSection.tsx) and
  [components/shared/lottie/LottieHero.tsx](src/components/shared/lottie/LottieHero.tsx) — DotLottie
  animations. See "Lottie" below before touching either; the sizing code in them is **not** working
  as intended.
- [components/features/article/](src/components/features/article/) and
  [components/features/contentful/](src/components/features/contentful/) — starter components, still
  used by the blog detail page. They use Contentful's `useContentfulLiveUpdates` /
  `useContentfulInspectorMode` hooks and the f36 color names.
- [components/features/language-selector/](src/components/features/language-selector/) — starter
  component, currently not mounted anywhere in the new layout.

## Services

[src/lib/services.ts](src/lib/services.ts) is the single source of truth for the 12 services —
name, description, icon and group (Plan / Build / Integrate / Analyze / Manage / Train). It feeds
three consumers, so edit it rather than any of them:

- [src/app/[locale]/services/](src/app/[locale]/services/) — the grid and its filter pills
- the Header mega-dropdown (via the derived `serviceGroups`)
- the Contact form's "Service interest" select (via the derived `allServices`)

Array order matches the Figma grid (`588:4843`). Several card descriptions are repeated
placeholders in the design — they are copied verbatim and need real copy.

## Contact page

[src/app/[locale]/contact/](src/app/[locale]/contact/) — built from Figma `588:4912`. Copy lives in
a single `content` object at the top of `page.tsx` so it can move to Contentful later; there is no
Contentful content type for it today.

**The form has no submission target.** `handleSubmit` in
[ContactForm.tsx](src/app/[locale]/contact/ContactForm.tsx) only calls `preventDefault()` — that
function is the single integration point. Wire it to an API route or form service when a
destination exists.

Service options come from [src/lib/services.ts](src/lib/services.ts), shared with the Header
mega-dropdown so the two lists cannot drift.

Known content discrepancies carried over from the design, both need a real answer from the
business: the address reads "123 Innovation Drive, San Francisco" while the map image shows
**Cebu**, and the office hours say EST.

## Lottie

Player is `@lottiefiles/dotlottie-react` (ThorVG/WASM, **canvas only — there is no SVG renderer
option**). `@lottiefiles/react-lottie-player` is also in `package.json` but unused; switching to SVG
rendering would mean swapping libraries, not passing a prop.

`dotlottie-web` runs its **own** `ResizeObserver` on the canvas, debounced 100ms, which then calls
`resize()` → reads `getBoundingClientRect()` and rewrites the canvas backing store. Any code that
also sizes the canvas is competing with that, not helping it.

Two bugs were fixed on 2026-08-14; both are recorded here because the failure modes are easy to
recreate.

- **The CTA Lottie never rendered at all** (site-wide — `Footer` mounts it on every route).
  `.cta-lottie-wrap` in [globals.css](src/app/globals.css) set `position: relative !important`,
  overriding the element's own Tailwind `absolute inset-0`; `height: 100% !important` then resolved
  against an auto-height parent and computed to **0px**, so the canvas never left its default
  300×150 backing store. A `MutationObserver` + timed retries in `CtaSection` were meant to force
  the size but silently early-returned on the zero height. Fixed by deleting both the CSS overrides
  and the observer, and giving the animation a definite, ratio-correct box.
- **The hero Lottie flickered during window resize.** Not an observer problem — `LottieHero` never
  had one. `dotlottie-web`'s internal resize is debounced 100ms, so during a drag the backing store
  lagged the CSS box and the browser stretched a stale bitmap (measured up to 1.47×). Fixed by
  holding the instance via `dotLottieRefCallback` and calling `resize()` from an rAF-throttled
  handler, bypassing the debounce.

- **The hero Lottie showed a white block on phones.** `waves blue.lottie` is 1080×500 **with an
  opaque background baked in**, so two things must hold at once: the box must keep the 1080:500
  ratio (a portrait box gets letterboxed, showing the animation's background as a band), and it
  must *cover* the hero (any uncovered area is a hard edge against the section gradient). Sizing it
  as a % of hero height satisfied neither on a 390px screen. `LottieHero` now computes cover
  dimensions in JS — `max(heroWidth * 1.6, heroHeight * 1080/500)` — which preserves the desktop
  look and covers phones.

**Do not "fix" Lottie sizing with `MutationObserver`, `!important` overrides, or a second debounce.**
Size the container, and drive the player through its own API.

## Header

Desktop keeps the pill nav + Services mega-dropdown. Below `lg` both are hidden and a hamburger
toggles `#mobile-nav`, a max-height/opacity drawer holding the five top-level links. "Services" is a
`Link` to `/services` (it was a `button` that only opened the dropdown and navigated nowhere); the
dropdown still opens on hover and on focus.

### ⚠️ Never implement Figma's Lottie export

Figma node `588:4663` (and any node named with an `app.lottiefiles.com/animation/...` URL) exports
as ~30 masked SVG groups with `hypot()` and `skew()` transforms. **That is a flattened still frame
of the animation, not the animation.** Never implement it as markup. Get the real `.lottie` file and
render it with the player, or leave a placeholder and ask.

### `public/footer-cta.lottie` is a placeholder

It is a 1-layer, 2KB, 4000×1000 animation named `inp_bg_02_green` whose only layer is called
`purple_hill` — stock filler, not the designed asset. The real animation is Figma node `588:4663`,
sourced from **LottieFiles `13aa18b2-2b92-4454-a9f5-9826525d844d`**; that export has ~30 distinct
path groups, which a 1-layer file cannot produce. **Pending: replace this file with the real
export.** Its aspect ratio is likely to differ, so update `LOTTIE_ASPECT_RATIO` in
[CtaSection.tsx](src/components/templates/footer/CtaSection.tsx) to match when you swap it.

## i18n

Locales are `en-US` (default) and `de-DE`, with strings in [public/locales/](public/locales/).
Only the three starter components still call `useTranslation`; **every new BIMS page hardcodes
English**. If localization becomes a requirement, that's a deliberate migration, not a bug to fix
in passing.

## Anima exports

`.anima/` is config for the Anima Figma→React plugin (app-router, TypeScript, Tailwind).

[src/test.tsx](src/test.tsx) and [src/app/home/page.tsx](src/app/home/page.tsx) are byte-identical
3,239-line Anima dumps of the homepage — absolutely positioned, pixel-coordinate markup exported
straight from Figma. They are **reference material only**. Neither renders. Read them to recover an
exact spacing or SVG path, then write idiomatic responsive code in `[locale]/`. Don't edit them,
don't import from them, and don't treat them as the implementation.

## Conventions & gotchas

- Path aliases: `@src/*`, `@public/*`, `@icons/*` (see [tsconfig.json](tsconfig.json)).
- Prettier: 100 cols, single quotes, trailing commas, avoid arrow parens, `prettier-plugin-tailwindcss`.
  `prettier/prettier` is off as an ESLint rule; formatting runs via lint-staged on commit (Husky).
- `strict: true` but `noImplicitAny: false`.
- **`react/no-unescaped-entities` has broken the build twice** (see commits `f45da9f`, `b79641b`).
  Apostrophes and quotes inside JSX text need `&apos;` / `&quot;` or a `{'...'}` string literal.
  `yarn lint` before assuming a change is done.
- SVGs import as React components via `@svgr/webpack`. Remote images are restricted to
  `images.ctfassets.net` / `images.eu.ctfassets.net` in [next.config.js](next.config.js) — a new
  external image host needs a `remotePatterns` entry.
- Security headers (CSP `frame-ancestors` allowing the Contentful app, HSTS, etc.) live in
  [config/headers.js](config/headers.js).
- `.env` is gitignored and holds the Contentful space/tokens plus `NEXT_PUBLIC_BASE_URL`, which
  `sitemap.ts` and `generateMetadata` both dereference with `!` — the build fails without it.

Footer Lottie (Figma 588:4663) exports as ~30 masked SVG groups —
that's a flattened still frame, NOT the animation. Never implement it.
The real animation is public/footer-cta.lottie via CtaSection.tsx.