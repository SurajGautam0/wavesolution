# Wave Solution — SEO Check #3

**Site:** https://www.wavesolution.com.au/
**Repo:** `fa79653 seo` (working tree clean)
**Method:** full crawl of all **129** sitemap URLs (status, title, description, canonical, robots, H1, JSON-LD validity, internal link graph, content depth) + source inspection
**Verdict:** 🟢 **Technically clean and stable. One significant on-page gap left.**

---

## 1. Scorecard — 129/129 pages checked

| Check | Result |
|---|---|
| HTTP status | ✅ **129/129 return 200** — 0 broken |
| Titles > 65 chars | ✅ **0** |
| Duplicate titles | ✅ **0** |
| Missing meta description | ✅ **0** |
| Descriptions > 165 chars | ✅ **0** |
| Duplicate descriptions | ✅ **0** |
| Canonical mismatches | ✅ **0** |
| Accidental `noindex` | ✅ **0** |
| H1 count ≠ 1 | ✅ **0** |
| Images missing `alt` | ✅ **0** |
| Pages with no structured data | ✅ **0** |
| **Invalid JSON-LD** | ✅ **0 of 302 blocks** |
| `aggregateRating` / self-serving `Review` | ✅ **0 pages** |
| Orphan pages (0 inbound internal links) | ✅ **0** |
| Redirects (bare→www, legacy slugs, `.html`, trailing slash) | ✅ All correct |
| 404 handling | ✅ Real 404, no soft-404s |

**Schema coverage (302 blocks, all valid):** `Organization`, `LocalBusiness`, `CleaningService` on 129/129 pages; `WebSite`+`SearchAction` 129; `BreadcrumbList` 270; `FAQPage` 112; `Service`+`Offer` throughout; `Article` 31; `Blog` 24.

The `/property-managers` orphan I reported last time is now fully integrated — **129 inbound links**.

> Note: I initially measured "invalid JSON-LD on 129 pages". That was **my** regex bug — it was matching Next.js RSC payload scripts that merely contain the string `ld+json`. The real JSON-LD is 100% valid.

---

## 2. 🔴 The one real on-page gap: all 55 suburb pages have titles without "Gold Coast"

This is now the biggest remaining issue, and it affects **every** service × suburb page — the pages built to win local search.

| Metric | Value |
|---|---|
| Combo pages | **55** |
| Titles **missing "Gold Coast"** | **55 / 55 (100%)** |
| Titles missing the brand name | **46 / 55** |
| Titles under 40 characters | **52 / 55** |

**Actual live titles:**

```
 22  /pest-control-gold-coast/nerang      Pest Control in Nerang
 23  /bond-cleaning-gold-coast/robina     Bond Cleaning in Robina
 23  /bond-cleaning-gold-coast/nerang     Bond Cleaning in Nerang
 24  /house-cleaning-gold-coast/robina    House Cleaning in Robina
 24  /bond-cleaning-gold-coast/coomera    Bond Cleaning in Coomera
 24  /house-cleaning-gold-coast/carrara   House Cleaning in Carrara
 26  /bond-cleaning-gold-coast/southport  Bond Cleaning in Southport
 39  /end-of-lease-cleaning-gold-coast/burleigh-heads   End of Lease Cleaning in Burleigh Heads
```

**Why this matters:**
- **"Gold Coast" is your primary geo modifier.** The URL contains it (`/bond-cleaning-gold-coast/robina`) but the `<title>` does not — so you're relying on URL/body signals alone for the phrase that most Gold Coast searches contain.
- **You're wasting ~20–35 characters of SERP real estate.** Google renders roughly 60 characters; a 23-character title leaves the space competitors use for area, USP and brand.
- **The pattern is also internally inconsistent.** Pest control uses `Robina Pest Control | Wave Solution` while the other four services use `Bond Cleaning in Robina`. Only 9 of 55 carry the brand.

**Suggested fix** — a single template change in [lib/service-location-pages.ts](C:\Users\Surajgautam\Desktop\Wavesolution\lib\service-location-pages.ts) (the 55 hard-coded `title:` values):

```
{Service} {Suburb} | Gold Coast          →  then append " | Wave Solution" if the result is ≤ 62 chars
```

Examples:
- `Bond Cleaning Robina | Gold Coast | Wave Solution` — 48 ✅
- `Office Cleaning Surfers Paradise | Gold Coast | Wave Solution` — 60 ✅
- `End of Lease Cleaning Burleigh Heads | Gold Coast | Wave Solution` — 65 (drop brand, or shorten to `…| Gold Coast`)
- `Pest Control Surfers Paradise | Gold Coast | Wave Solution` — 57 ✅

The page `<h1>` has the same pattern (`Bond Cleaning in Robina`) and would ideally match.

---

## 3. 🟠 New carpet suburb pages are half-connected

Four root-level pages were added since the last check:

```
/carpet-cleaning-helensvale
/carpet-cleaning-hope-island
/carpet-cleaning-varsity-lakes
/carpet-cleaning-coomera
```

Their content is genuinely good — titles branded, H1s present, 900–917 words, and only **12–14% overlap** with the matching `/locations/*` page (so no duplicate-content problem).

But they have two connectivity problems:

| Issue | Detail |
|---|---|
| **Parent doesn't link them** | `/carpet-cleaning-gold-coast` contains **no** link to any of its 4 suburb pages |
| **Only 1 inbound link each** | Each is reachable only from its `/locations/{suburb}` page |

This breaks the pattern used by the other five services, which each render a full "…by suburb" grid on their parent page. Adding the same grid to `/carpet-cleaning-gold-coast` would take these from 1 → 2+ inbound links and make them consistent.

**Also a structural inconsistency:** these live at the root (`/carpet-cleaning-helensvale`) while every other service nests them (`/bond-cleaning-gold-coast/helensvale`). Two URL patterns for the same concept. Not harmful in itself, but worth aligning before you add more.

---

## 4. 🟡 Four new blog posts are only reachable from the blog hub

Each relies on a single inbound link from `/blog`:

| Post | Inbound |
|---|---|
| `/blog/end-of-lease-pest-control-gold-coast` | 1 (`/blog`) |
| `/blog/dashain-house-cleaning-gold-coast` | 1 (`/blog`) |
| `/blog/professional-vs-diy-bond-cleaning-costs-benefits-wavesolution` | 1 (`/blog`) |
| `/blog/spring-cleaning-guide-gold-coast` | 1 (`/blog`) |

The matching service pages exist and don't link out to them — e.g. `/end-of-lease-pest-control-gold-coast` should link the end-of-lease pest guide; `/bond-cleaning-gold-coast` should link the DIY-vs-professional piece; `/deep-cleaning-gold-coast` should link the spring cleaning guide. Blog posts linked only from the hub get very little internal equity.

---

## 5. 🟡 Freshness: 14 URLs dated before 2026

`lastmod` distribution in the sitemap:

```
2025-01: 2   2025-02: 3   2025-03: 4   2025-04: 4
2025-09: 1   2026-01: 1   2026-02: 2   2026-08: 1
2026-09: 67  2026-10: 44
```

**14 URLs carry a pre-2026 `lastmod`**, including 12 blog posts (`bond-cleaning-checklist`, `end-of-lease-checklist`, `mould-prevention-gold-coast`, `pest-control-guide`, `rental-inspection-tips`, `carpet-cleaning-guide`, `office-cleaning-schedule`, `deep-cleaning-guide`, `how-often-house-cleaning`, `move-out-cleaning-mistakes`, `commercial-cleaning-benefits`, `end-of-lease-cleaning-cost-gold-coast`). Several still reference 2025 in the body.

Recommendation: refresh the highest-value ones rather than touching dates blindly — content review, updated figures, then a genuine `lastmod`. Priority: `bond-cleaning-checklist` (2025-01-15, most stale) and `end-of-lease-cleaning-cost-gold-coast` (2025-09-22, which also overlaps `/bond-cleaning-cost-gold-coast` — same service in QLD, so resolve the cannibalisation).

---

## 6. 🟡 `/cleaning-carrara` still thinly linked

Only **2** inbound links (`/` and `/services`). It also overlaps `/locations/carrara`. Either link it from the Carrara suburb page and the service hub, or treat it as the canonical Carrara page and cross-link clearly.

---

## 7. ⚪ Minor: HTML weight

Largest server HTML payloads:

```
281 KB  /
229 KB  /blog/end-of-lease-cleaning-requirements-qld
195 KB  /blog/spring-cleaning-guide-gold-coast
183 KB  /services
```

Largely inline RSC payload rather than content. Not a ranking blocker — image optimisation is working correctly (verified previously: the 4.4 MB location hero is served at 28–180 KB). Worth watching if Core Web Vitals flags LCP.

---

## 8. What is genuinely strong now

- **Content depth is good**, not thin: the 55 combo pages run **877–1,116 words** (avg 1,033).
- **No near-duplication**: the highest pairwise 8-word-shingle overlap between any two bond-cleaning suburb pages is **39.4%** — well under the ~70% that signals templated doorway pages.
- **Carpet suburb pages are differentiated** from their location pages (12–14% overlap).
- **Schema is complete and valid** across all 129 pages, with `BreadcrumbList` (270), `FAQPage` (112) and per-service `Service`/`Offer`.
- **Zero technical debt**: no broken links, no canonical/robots/H1/alt/duplicate errors anywhere.

---

## 9. Priority order

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Add "Gold Coast" (+ brand where it fits) to all 55 combo titles — one template change in `lib/service-location-pages.ts` | Low | **High** |
| 2 | Add the "…by suburb" grid to `/carpet-cleaning-gold-coast` linking its 4 suburb pages | Low | Medium |
| 3 | Cross-link the 4 new blog posts from their matching service pages | Low | Medium |
| 4 | Refresh the 12 stale 2025 blog posts (real content updates, then `lastmod`) | Medium | Medium |
| 5 | Resolve `end-of-lease-cleaning-cost-gold-coast` vs `bond-cleaning-cost-gold-coast` cannibalisation | Medium | Medium |
| 6 | Link `/cleaning-carrara` properly, or consolidate with `/locations/carrara` | Low | Low |
| — | **Backlinks remain the #1 ranking constraint** (unchanged) | High | Highest |

**Unchanged from the previous audit:** the off-site footprint is still the limiting factor. ~5 pages appear indexed of 129, and only 3 external references exist. Citations and the legacy NSW Google Business Profile cleanup remain the highest-leverage work — no amount of title tuning substitutes for that.

---

## Caveats

- All figures come from crawling **production**, not the local tree.
- The `next build` still cannot run in this environment (Next.js bundled-webpack WASM hash crash) — a toolchain fault, unrelated to site code. Deploy via Vercel.
- No DA/DR/authority metric is obtainable for this site or competitors (Ahrefs, Semrush, Moz, Majestic, SimilarWeb all block automated access), so backlink conclusions rest on confirmed absences, not scores.
