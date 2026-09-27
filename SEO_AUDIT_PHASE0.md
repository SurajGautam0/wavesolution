# Wave Solution — Phase 0 Technical + Content Audit

Audit date: 27 September 2026
Site: https://www.wavesolution.com.au/
Method: repo inspection (framework + route detection) + live crawl of sitemap URLs, internal links, canonicals, titles, H1s and JSON-LD.

---

## 0. Stack detection

| Item | Finding |
|---|---|
| Framework | **Next.js 15 App Router** (`app/`), React 19, TypeScript |
| Styling | Tailwind CSS 3 + custom design system (`classic-container`, `page-hero`, `rounded-[2rem]` cards) |
| Data / CMS | **None.** All page copy lives in TS files: `lib/service-pages.ts` (15 services), `lib/location-pages.ts` (11 suburbs), `app/blog/*/page.tsx` (18 posts) |
| Hosting | Vercel (`.vercel/`), middleware for host + legacy redirects |
| Rendering | Static (SSG) marketing pages; client forms; API routes under `/api` |
| Analytics | GA4 tag `G-Q2D4JFK9R6` hard-coded in `app/layout.tsx` (`send_page_view: false`) |

Verdict: stack is clear → Phase 1 can proceed without stopping.

---

## 1. Route inventory (what exists today)

**Money / marketing pages (all in sitemap, all HTTP 200)**

- `/` homepage
- `/services` hub
- 15 service pages at root slugs: `cleaning-gold-coast`, `house-cleaning-gold-coast`, `bond-cleaning-gold-coast`, `end-of-lease-cleaning-gold-coast`, `office-cleaning-gold-coast`, `commercial-cleaning-gold-coast`, `deep-cleaning-gold-coast`, `move-in-cleaning-gold-coast`, `after-builders-cleaning-gold-coast`, `carpet-cleaning-gold-coast`, `pest-control-gold-coast`, `weekly-cleaning-gold-coast`, `apartment-cleaning-gold-coast`, `end-of-lease-pest-control-gold-coast`, `cleaning-carrara`
- `/locations` + 11 suburb pages: robina, southport, surfers-paradise, broadbeach, nerang, burleigh-heads, palm-beach, helensvale, coomera, varsity-lakes, carrara
- `/book`, `/about`, `/team`, `/contact`, `/testimonials`, `/gallery`
- `/blog` + 18 posts (bond-cleaning-checklist, end-of-lease-checklist, end-of-lease-cleaning-cost-gold-coast, end-of-lease-cleaning-requirements-qld, rental-inspection-tips, move-out-cleaning-mistakes, plus house/office/commercial/carpet/pest/deep/eco guides)

**Non-indexed utility**: `/login`, `/register`, `/logout`, `/dashboard`, `/admin`, `/api/*` (robots-disallowed, middleware-protected).

**Redirects already in place (working):**

- `wavesolution.com.au` → `www` (308, middleware)
- `/services/home-cleaning` → `/house-cleaning-gold-coast` (308)
- `/services/[slug]` legacy slugs → `permanentRedirect()` via `legacyServiceRedirects`
- `/locations/sydney` → `/locations` (308)
- `/bond-cleaning-checklist.html` → `/blog/bond-cleaning-checklist` (301)

---

## 2. What's already good (do not break)

1. **robots.txt** — allows `/`, disallows `/admin`, `/dashboard`, `/login`, `/register`, `/api/`, `/private/`, declares sitemap. No accidental `noindex` anywhere: every indexable page returns `index, follow`.
2. **sitemap.xml** — 54 URLs, valid XML, **every URL returns 200**. Priorities/changefreq set sensibly.
3. **Canonicals** — one self-canonical per indexable page, verified against URL for all 54 sitemap URLs. Zero mismatches. www/non-www handled by 308 middleware. No trailing-slash duplication (homepage canonical = bare domain, matches sitemap).
4. **Titles / metas** — unique title + meta description on every indexable page, **zero duplicate titles**. Service-page pattern already correct: `{Service} Gold Coast | {Angle} | Wave Solution Cleaning`.
5. **Headings** — exactly one `<h1>` on every crawled page; service pages run H1 → H2 sections → H3 FAQs with no skipped levels.
6. **Schema JSON-LD**
   - Sitewide: `Organization` + `LocalBusiness` + `CleaningService` (`@id /#business`), `WebSite` + `SearchAction`, `WebPage`, phone `+61450833683`, `areaServed` 16 Gold Coast suburbs, `sameAs` (Google/FB/IG), `openingHoursSpecification`.
   - Service pages: `BreadcrumbList` + `Service` (provider → `#business`) + `FAQPage`.
   - Blog posts: `Blog`, `Article`, `BlogPosting` variants + `FAQPage` where FAQs exist.
7. **Breadcrumbs** — visual breadcrumb trail in hero on all 15 service pages (`Home / Services / {service}`) + `BreadcrumbList` JSON-LD.
8. **Internal linking** — homepage links all 15 money pages (11 service cards + 4 in "Helpful Internal Links"); `/services` hub maps all 15; footer links services + locations + guides; service pages cross-link via `relatedSlugs` and a "Helpful Internal Links" block.
9. **Conversion basics** — sticky mobile CTA bar (Get Free Quote + Call Now) sitewide, `tel:` links in header/nav/footer/hero/service CTAs, quote form on `/book` with 3-step flow, success dialog, and the on-site promise *"contact you within 15 minutes"*.
10. **Legacy cleanup already done** — old `/services/*` slugs redirect instead of 404ing; soft-404 `/locations/sydney` fixed (the March 2026 audit flagged it).

---

## 3. What's broken (Phase 1 targets)

| # | Issue | Severity | Evidence |
|---|---|---|---|
| B1 | **Homepage hero image 404** — `components/hero-section.tsx:20` points at `/hero-cleaning.jpg`, deleted in commit `462b64f`. The LCP element of the highest-traffic page is a broken image. | Critical | `GET /hero-cleaning.jpg → 404`; file absent from `public/` |
| B2 | **Broken internal links** — `/contact` "Popular suburbs" links to `/locations/merrimac` and `/locations/benowa`, both 404 (no such pages; not in `lib/location-pages.ts`). | High | Crawl: only 2 broken internal URLs sitewide |
| B3 | **Over-length titles** (>60–70 chars visible): `/services` (106), `/after-builders-cleaning-gold-coast` (102), `/team` (99), `/cleaning-carrara` (97), `/blog/office-cleaning-schedule` (82). | Medium | Live `<title>` sweep |
| B4 | **Over-length meta descriptions** (truncated by Google): `/cleaning-carrara` (221), location pages 190–261 chars. | Medium | Live meta sweep |
| B5 | **Dated titles** — blog titles still say **2025**: `/blog/end-of-lease-cleaning-cost-gold-coast`, `/blog/end-of-lease-checklist`, `/blog/pest-control-guide`. Today is Sep 2026 → stale-signal + clashes with the 2026 guides we are about to publish. | Medium | Live titles |
| B6 | **Visual breadcrumbs missing** on the 11 `/locations/*` pages (JSON-LD present, UI absent). Blog posts have them; locations don't. | Low | Code check `app/locations/[slug]/page.tsx` |
| B7 | **Orphan heavy assets** — `public/suburb-travel.jpg` (2.7 MB), `public/service-icons.jpg` (1.9 MB), `public/1.jpg` (905 KB) are unreferenced; `/locations` hero source is 4.4 MB (`pexels-tima…jpg`). | Low | `public/` size sweep + grep |
| B8 | **Empty `public/robots.txt`** (0 bytes) sitting next to `app/robots.ts`. The dynamic route currently wins, but the static file is a foot-gun. | Low | `public/robots.txt` = 0 KB |
| B9 | Booking form service list only offers **Home / Office / Deep** while the site sells 15 services; no explicit **suburb** field (free-text address only); no bathrooms selector. | High (conversion) | `app/book/BookingPageClient.tsx:52-57` |
| B10 | No GA4 event hooks: quote submits are not measurable (`send_page_view: false` and no `gtag('event', …)` anywhere). | Medium | `app/layout.tsx:355` |

---

## 4. Content / duplication risks (Phase 2–3 guard rails)

- **R1 — P0 cost guide collides with an existing post.** `/bond-cleaning-cost-gold-coast` (planned) vs live `/blog/end-of-lease-cleaning-cost-gold-coast` ("End of Lease Cleaning Cost Gold Coast 2025"). In QLD, "bond clean" = "end of lease clean", so two price guides = duplicate. **Plan:** make the new URL the definitive, current (2026) price guide; re-point the old post with a 301 *or* keep it as a deliberately narrower "what's included / add-ons" companion. Owner decides (see checklist).
- **R2 — Three checklists already exist**: `/blog/bond-cleaning-checklist`, `/blog/end-of-lease-checklist`, `/blog/end-of-lease-cleaning-requirements-qld`. The planned `/end-of-lease-cleaning-checklist` must be positioned as the **QLD RTA / inspection-ready hub** (cites `rta.qld.gov.au`, links out to the three posts) rather than a fourth room-by-room list.
- **R3 — Carrara duplication**: `/cleaning-carrara` (service intent) and `/locations/carrara` (local intent) both live. Keep both, differentiate anchors, cross-link.
- **R4 — Homepage hub overlap**: `/`, `/services`, `/cleaning-gold-coast` all target "cleaning services Gold Coast". Acceptable if each keeps a distinct angle (brand vs directory vs service hub); no change needed beyond titles.
- **R5 — Thin pages**: `/services` (~310 words historically) and `/book` are utility pages — fine, but `/services` needs at least a paragraph per service cluster if it is to hold hub equity.

---

## 5. Claims already on the live site that conflict (owner decision, not for us to invent)

These numbers **already exist on production** and disagree with each other. We are not changing or adding any of them until the owner confirms which is true:

| Claim | Where it appears |
|---|---|
| `4.9` rating / **87** reviews | `LocalBusiness.aggregateRating` JSON-LD (`app/layout.tsx:144-150`) |
| **430+ Google Reviews** | Homepage hero badge (`components/hero-section.tsx:42`) |
| **1,500+** jobs completed / "1,500+ local cleans" | Homepage stat band, hero trust chip |
| **2,000+** happy customers | `/book` stats (`BookingPageClient.tsx:712`) |
| **50+** suburbs covered | Homepage stat + hero card (only 16 listed in `businessInfo.serviceAreas`) |
| **$10M** public liability | `lib/service-pages.ts` copy |
| **100% bond-back guarantee** | Homepage meta description |
| **$120–$600** price range, "From $120" card, add-on prices $45/$55/$65/$85 | LocalBusiness `priceRange`, homepage card, `interactive-pricing-calculator.tsx:19-22` |
| Named reviews (Sarah Johnson, David Williams, Emma Roberts) | Homepage + `Review` JSON-LD |

Also note: `Review` + `aggregateRating` JSON-LD is emitted while the visible review cards use generic names — mismatched structured data is a manual-action risk. **Recommendation:** keep only what the owner can verify against the live Google Business Profile.

---

## 6. Phase plan after this audit

**Phase 1 — Technical + on-page foundation (next)**

1. Repair B1 hero image (restore/compress a valid hero asset — no design change).
2. Fix B2 broken suburb links (point Merrimac/Benowa at `/locations`).
3. Rewrite over-length titles/metas (B3, B4) and de-date 2025 blog titles (B5) — pattern `{Service} Gold Coast | {Angle} | Wave Solution`, ≤ ~60 / ≤ ~155 chars.
4. Add visual breadcrumbs to `/locations/*` (reuse existing hero breadcrumb component pattern) — B6.
5. Prune dead assets + empty `public/robots.txt` (B7, B8).
6. Sitemap/robots re-verify: every new Phase 3 URL added on creation; canonicals re-checked after edits.
7. Keep existing schema; add `FAQPage` only where real FAQs render; ensure `BreadcrumbList` matches the visible trail.

**Phase 2 — Strengthen existing pages** (no new URLs): unique intros, AEO direct answers, 3-step process, in/out of scope, quote-led pricing honesty, FAQ 5–8, soft + hard CTAs, related-service cross-links on the 13 major landings.

**Phase 3 — New content (P0 only, then pause)**: `/bond-cleaning-cost-gold-coast`, `/end-of-lease-cleaning-checklist` — differentiated from R1/R2 as described, bidirectionally linked from the bond + end-of-lease service pages.

**Phase 4–6**: AEO answer blocks, conversion form gaps (B9), GA4 events + `SETUP.md` (B10).

**Explicitly not doing:** no standalone mould-remediation page; no invented prices/review counts/rankings/awards; no new UI kit; no bulk thin suburb stubs.
