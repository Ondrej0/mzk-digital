# MZK Digital

Personal freelance portfolio for Ondrej. This implementation covers the homepage
and shared site shell only, based on the supplied *Freelance Portfolio — Master
Scaffold & Build Roadmap*.

## Development

- `npm run dev` — local preview
- `npm run lint` — ESLint
- `npx tsc --noEmit` — TypeScript check (run after Next has generated route types)
- `npm run build` — production build

The existing `next/font/google` setup downloads Geist fonts during the build and
serves them locally to visitors. Building needs access to Google Fonts.

If the Windows npm wrapper reports a missing roaming npm-cli.js, the equivalent
local commands are `node node_modules/next/dist/bin/next dev`,
`node node_modules/eslint/bin/eslint.js .`,
`node node_modules/typescript/bin/tsc --noEmit` and
`node node_modules/next/dist/bin/next build`.

## Content and configuration

Copy .env.example to .env.local and fill in the confirmed public details:

- CONTACT_EMAIL enables the direct email CTA and footer email. With no address,
  the contact section clearly says enquiries are not open yet. No address is invented.
- SITE_URL is the canonical production origin, including https://. Until it is
  configured, metadata and robots.txt prevent indexing; local social-image URLs
  resolve against localhost. Only set the production domain when ready to index.
  Keep it unset in preview deployments. Rebuild after changing either variable.

These values are read on the server but intentionally appear in public page output.
They must never contain secrets.

- src/data/site.ts — identity, navigation and public configuration
- src/data/services.ts — typed service content
- src/data/projects.ts — typed featured projects, optional screenshots and links
- src/components/sections/ — independently editable homepage sections
- src/components/layout/ — shared header, footer and mobile disclosure
- src/components/ui/ — small reusable links, arrows and the headline animation
- src/app/globals.css — Tailwind entry, design tokens and responsive styling

The project uses the existing profile photo without changing its source. Project
covers are typographic placeholders, not screenshots of the actual applications.
Project descriptions are limited to facts in the roadmap. Add verified images
using each project's image field and a href when its case study is published.
CleanOps is intentionally deferred until presentation-ready.

## Server and client boundaries

The root layout, page, content sections, desktop navigation and footer remain
Server Components. There are only two custom Client Components:

- RotatingWords: a short decode transition between three words. Timers stop
  while paused, while the document is hidden, or when reduced motion is requested.
  A stable complete H1 is available to screen readers; animated text is hidden
  from them. Reserved line height prevents layout shifts.
- MobileMenu: enhances native details with Escape, outside-click, focus-leave
  and desktop-breakpoint dismissal. Link content is passed from the server.
  Native navigation remains usable without JavaScript.

## Reserved routes

/services, /work, /about and /contact temporarily redirect to the relevant
homepage section. Replace their tiny redirect components as each page is built.
Unpublished /work/[slug] routes correctly return not-found. The root layout owns
the main landmark, header and footer; future pages should not nest another main.

## SEO and later phases

Implemented: descriptive metadata, title template, canonical URL when configured,
Open Graph/Twitter metadata, a generated 1200 × 630 share image, robots configuration,
custom icon, one meaningful H1, semantic sections, optimised portrait and a shared
404. The homepage is statically rendered.

Deferred: full service/about/work/contact pages, case-study content and screenshots,
contact form/email backend, sitemap and structured data, analytics, Search Console
and deployment. No database, authentication, backend or new dependencies were added.

## Verification

ESLint, standalone TypeScript and a production build are the release checks.
Browser review includes desktop and mobile layouts, 320/390/600/768/1024/1440 px
viewports, horizontal overflow, one H1, mobile keyboard navigation, Escape, section
redirects and the headline pause control. Reduced-motion handling is also checked
in the component and stylesheet. This is not a claim of a full accessibility or
Core Web Vitals audit.
