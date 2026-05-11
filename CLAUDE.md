# CLAUDE.md — Decor Adorne

## What This Is
Lead-generation website for a Lagos luxury event decoration and rentals business. Every page funnels to WhatsApp.

## Stack
Next.js 14 App Router · TypeScript strict · Tailwind CSS · Framer Motion · Lucide React · React Hook Form + Zod · Vercel

## Brand
All colors, typography, tokens, voice, logo specs, and asset manifests live in `/brand`. Read `brand/brand-guidelines.md` and `brand/brand-assets.md` before building or modifying any component. Never hardcode colors or font names — use the Tailwind tokens defined in `tailwind.config.ts` which mirror the brand file.

## Design Quality
Follow the frontend-design skill. This is a warm editorial luxury aesthetic — not generic AI output. Commit to asymmetric layouts, intentional whitespace, serif/sans pairings, and scroll-triggered motion. Every section should feel designed by a human, not assembled from a template.

## Code Rules
- Named exports. Default exports only for `page.tsx` / `layout.tsx`
- No `any`. No `as unknown`. Infer or define everything.
- Mobile-first (375px base). All images via `next/image` with descriptive alt text including "Lagos".
- Icons: Lucide React only. Animation: Framer Motion with `viewport={{ once: true }}`.
- WhatsApp number: import from `src/lib/constants.ts` — never hardcode.

## SEO
- Every `page.tsx` must call `generateMetadata()` from `src/lib/seo.ts`
- Every page must include JSON-LD via `src/components/seo/JsonLd.tsx`
- Service page title pattern: `[Service] in Lagos | Decor Adorne`
- Meta descriptions: 150–160 chars, always include "Lagos"
- FAQ sections with `FAQPage` schema on service pages
- `public/llms.txt` for LLM discoverability — structured facts, declarative sentences

## Lead Flow
```
LeadForm (RHF + Zod) → POST /api/lead → n8n webhook → Airtable  → redirect to wa.me/2348103349288 with pre-filled message
```

## Screenshots (Puppeteer)
Use Puppeteer to capture full-page screenshots for QA and client review. Script at `scripts/screenshot.ts`.

```bash
npm install -D puppeteer ts-node
npx ts-node scripts/screenshot.ts
```

Captures mobile (375px) and desktop (1440px) for every page. Output: `screenshots/`. Always run before submitting work for review.

## Env
```
NEXT_PUBLIC_WA_PHONE=2348103349288
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://n8n.geotech.agency
NEXT_PUBLIC_SITE_URL=https://decoradorne.com
```