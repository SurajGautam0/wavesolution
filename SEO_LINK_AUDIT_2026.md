# Wave Solution — SEO, Internal Linking & Backlink Audit

**Site:** https://www.wavesolution.com.au/ (Next.js 15 App Router, Vercel)
**Audited:** live production crawl of all 118 sitemap URLs + repo inspection + off-site citation research
**Scope:** technical SEO, internal linking, on-page, structured data, backlinks/citations

---

## TL;DR — the five things that actually move your rankings

| # | Priority | Issue | Why it matters |
|---|---|---|---|
| **1** | 🔴 **Critical** | **Your best work is not deployed.** 34 files of fixes sit uncommitted locally; production is running old code | Live site still emits `AggregateRating 4.9/87` + `Review` schema while visible copy says **430+** — a self-serving-review policy violation and manual-action risk. The fix is already written, just not pushed. |
| **2** | 🔴 **Critical** | **Off-site footprint is nearly zero.** Only ~3 external pages reference the business; **no** major AU directory listing confirmed | Backlinks + citations are the single biggest ranking gap. Nothing on-page can compensate. |
| **3** | 🔴 **Critical** | **Wrong-state citation.** Birdeye + ZoomInfo place you in **NSW (Strathfield)**, not QLD | Corrupts every downstream aggregator and geographic relevance signal. |
| **4** | 🟠 **High** | **Unverifiable claims live.** `430+ reviews`, `1,500+ cleans`, `50+ suburbs`, conflicting `$10M`/`$20M` | Trust + manual-action risk. Third parties observe **4–5 reviews**, not 430+. |
| **5** | 🟠 **High** | **`/gallery` is orphaned** (0 internal links) + 14 combo pages have only 3 inbound links | Link equity can't reach pages you want to rank. |

---

## 1. Technical SEO — genuinely healthy

This part is in good shape. Full crawl of all **118** sitemap URLs:

| Check | Result |
|---|---|
| HTTP status of every sitemap URL | ✅ **118/118 return 200** — zero broken pages |
| Canonical tags | ✅ Correct, self-referencing, **0 mismatches** |
| `meta robots` / accidental noindex | ✅ None — everything `index, follow` |
| Duplicate `<title>` | ✅ **Zero** |
| Duplicate `<h1>` | ✅ **Zero** |
| `<h1>` count per page | ✅ Exactly 1 on every page |
| Structured data present | ✅ **Zero pages** without JSON-LD |
| Sitemap | ✅ Valid, 118 URLs, sensible priorities |
| robots.txt | ✅ Valid, blocks `/admin`, `/dashboard`, `/login`, `/api/`; declares sitemap |
| Images missing `alt` | ✅ None found |
| Redirects (bare→www, legacy `/services/*`, `/locations/sydney`, `.html`) | ✅ All working |

**Two small notes:**
- The bare-domain→www hop returns **307** (temporary) instead of 301/308. Low impact but should be permanent — your middleware already requests 308.
- `https://www.wavesolution.com.au/index.html` → 404 and `/House-Cleaning-Gold-Coast` → 404. Normal, but you could add lowercase-normalising redirects if you ever see those in Search Console.

---

## 2. ⚠️ Production is running stale code — the highest-impact finding

Your local working tree has **34 modified/untracked files** containing fixes that are **not live**.

**Proof — the live homepage currently emits:**
```json
"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"87", ...}
"review":[{"@type":"Review","author":{"@type":"Person","name":"Sarah Johnson"}, ...}]
```
And this appears on **all 118 pages** (119 `AggregateRating` + 236 `Review` instances).

**But the visible copy on that same page says:** `· 430+ Google Reviews`, `1,500+ local cleans`, `Coverage across 50+ Gold Coast suburbs`.

**Meanwhile your local code comments say the opposite:**
- `app/layout.tsx:145` — *"aggregateRating and Review markup were removed deliberately… both are Google review-snippet policy violations and a manual-action risk."*
- `lib/claims.ts` — an **untracked** file documenting the removal of 87/430/"120+" review counts, $10M/$20M conflict, and 50+/18+/15+/11 suburb counts.

**So: the fix is written, it is just not committed or deployed.**

Three distinct problems this creates:
1. **Self-serving review markup.** You are marking up your own on-site testimonials as `Review` on your own `LocalBusiness`. Google disallows self-serving review snippets for the entity itself. Manual-action risk, and it can suppress your review rich results entirely.
2. **87 vs 430+ contradiction.** Schema says 87 reviews; the page says 430+. Only one can be true, and third parties observe neither.
3. **Name mismatch.** The homepage schema has no `localBusiness` reference type and the review authors are `Sarah Johnson / David Williams / Emma Roberts` — the same generic names your own audit flagged.

**Action:** commit and deploy the working tree, then re-verify that `/` no longer contains `aggregateRating`. Until then, every other on-page win is capped.

---

## 3. Off-site footprint / backlinks — the real ranking gap

This is the honest headline: **you have almost no off-site presence, and no free tool would give a DA/DR figure for you or your competitors** (Ahrefs, Semrush, Moz, Majestic, SimilarWeb, HypeStat all blocked or returned no data). So this is measured by *absence of evidence*, plus the citations that were directly verifiable.

### Confirmed external references — only 3

| Source | Status | Problem |
|---|---|---|
| [facilicom.au listing](https://www.facilicom.au/listing/wave-solution-cleaning-pest-control-gold-coast) | ✅ Verified, phone matches | **Address mismatch** (QLD 4208 vs your 4215); outbound link is a **redirect endpoint** (`/api/click.php?id=15067`) so it passes **no SEO equity** |
| [ZoomInfo](https://www.zoominfo.com/c/wave-solution/1327326158) | Exists | Describes you as located in **NEW SOUTH WALES**; generic auto-generated copy |
| [Birdeye](https://reviews.birdeye.com/wave-solution-170855075751507) | ✅ Verified, website field = `wavesolution.com.au` | **114 Wentworth Rd, Strathfield NSW 2135** — wrong state entirely |

### Confirmed absent (real negative findings)

- **Word of Mouth** — search renders *"No reviews yet"*: [wordofmouth.com.au](https://www.wordofmouth.com.au/search?q=wave+solution)
- **ProductReview.com.au** — no listing: [productreview.com.au](https://www.productreview.com.au/search?q=wave+solution)
- **ServiceSeeking** Gold Coast cleaners directory (54 businesses) — not present
- **Facebook / Instagram / LinkedIn** — no findable business page (despite your schema declaring Facebook + Instagram `sameAs` entries)
- Yellow Pages, TrueLocal, Yelp AU (403), Hotfrog, StartLocal, AussieWeb, Localsearch — none confirmable

### Indexation signal

- Brave exact-domain `wavesolution.com.au` → **2 results** (your own contact page + ZoomInfo)
- Brave `site:wavesolution.com.au` → **~5 pages indexed** vs **120+ URLs in your sitemap**
- DuckDuckGo exact domain → *no results*; exact phone `0450 833 683` → *no results* (control query passed, so this is meaningful)

> A large share of your 118 pages appear not to be indexed yet. That is expected for a young site with no external links, but it means the 90 service×suburb pages are currently doing very little.

### ⚠️ The one question that changes everything

The **Strathfield NSW entity** has a Birdeye profile pointing at *your* domain, with reviewers whose surnames match the founders named on your site. This is plausibly **a legacy NSW Google Business Profile**.

- If **yes** → you have a **duplicate GBP** poisoning geographic signals across every aggregator. Fix that *first*.
- If **no** → the aggregators have simply mis-merged your brand with an unrelated NSW business, and you must claim/correct them.

**Please confirm this** — it determines whether this is a "fix duplicates" job or a "build citations" job.

### Toxic-link risk

**Cannot be assessed.** No tool enumerated your inbound link list, so any "clean" claim would be unfounded. No PBN / paid-link / link-farm footprints surfaced in searches.

### Your own backlink assets in the repo (unused)

You already have good machinery that appears to be **built but not driven**:
- `lib/directory-database.ts` — **43 AU directories** with priority + week numbers
- `lib/real-estate-agencies.ts` — **46 Gold Coast agencies** for partnership outreach
- `lib/partnership-email-templates.ts` — outreach templates

It references `BACKLINK-ROADMAP-6-MONTHS.md`, which **does not exist** in the repo. These libraries are only imported by `components/admin-gmail-integration.tsx` — there is no submitted/status tracking, so you can't tell what's been done.

---

## 4. Internal linking & site architecture

I rebuilt the link graph from all 118 live pages.

### 🔴 `/gallery` is orphaned — 0 inbound internal links

`/gallery` is in your sitemap and returns 200 with a good title, but **nothing on the site links to it**. It's not in the main nav, not in the footer (`components/site-footer.tsx`), not in `services-page`, nowhere. Google can only find it via the sitemap, and it receives zero internal equity.

**Fix:** add Gallery to the footer's Company column and to the main nav. One-line change in [site-footer.tsx](C:\Users\Surajgautam\Desktop\Wavesolution\components\site-footer.tsx).

### 🟠 Link equity is badly skewed toward 55 combo pages

Your 90 service×suburb pages (`/bond-cleaning-gold-coast/robina` etc.) are the pages built to win local searches, but they are starved:

| Inbound internal links | Pages |
|---|---|
| 3 | **14 pages** |
| 4 | 7 |
| 5 | 11 |
| 6 | 5 |
| 7 | 1 |
| 8 | 7 |
| 10–12 | 10 |

The worst — all at just **3 inbound links** — are the Coomera, Helensvale and Palm Beach pages across bond/end-of-lease/house/office/pest:

```
/bond-cleaning-gold-coast/coomera        /office-cleaning-gold-coast/coomera
/bond-cleaning-gold-coast/helensvale     /office-cleaning-gold-coast/helensvale
/bond-cleaning-gold-coast/palm-beach     /office-cleaning-gold-coast/nerang
/end-of-lease-cleaning-gold-coast/...    /pest-control-gold-coast/coomera
/house-cleaning-gold-coast/...           /pest-control-gold-coast/palm-beach
```

They're only reachable from their parent service page and "nearby suburb" chips. **Fix:** add a "we also clean [Suburb]" grid on each parent service page linking to *all* its suburb pages — this is the standard hub-and-spoke pattern and would take the 3-link pages to 8–10.

### 🟠 Location pages are unevenly linked

The footer links 8 suburbs; **Palm Beach, Varsity Lakes and Nerang** are missing from it, so they rely entirely on combo-page links (Palm Beach gets 32 — from combo "related" blocks — while others get far less). `/cleaning-carrara` and two blog posts (`/blog/office-cleaning-schedule`, `/blog/rental-inspection-tips`) sit at just **2** inbound links.

### ✅ What's working
- Homepage links all 15 money pages plus suburb and resource hubs
- Keyword-rich anchor text in the homepage "Helpful Internal Links" block (e.g. *"cleaning Gold Coast providers"*, *"local house cleaners"*) — good practice
- Breadcrumbs + `BreadcrumbList` schema on service and combo pages
- Combo pages cross-link to parent service, price guide, location page, and an add-on service — a well-designed cluster

---

## 5. On-page issues

### 54 titles are too long (only 1 over 90, most 70–85)

Google truncates around 580px (~60 chars). Your pattern `{Service} Gold Coast | {Angle} | Wave Solution Cleaning` is keyword-sound but the brand suffix pushes most over the limit, so the *differentiating angle* gets cut off in results.

Worst offenders:

| Chars | Page | Title |
|---|---|---|
| 98 | `/blog` | Gold Coast Cleaning Blog \| Local Guides for Homes, Rentals and Businesses \| Wave Solution Cleaning |
| 89 | `/locations/surfers-paradise` | Cleaning Services Surfers Paradise \| Holiday Let & Home Cleaning \| Wave Solution Cleaning |
| 87 | `/locations/palm-beach` | Cleaning Services Palm Beach \| House, Office & Rental Cleaning \| Wave Solution Cleaning |
| 85 | `/locations` | Gold Coast Cleaning Service Areas \| Robina, Southport & More \| Wave Solution Cleaning |
| 85 | `/locations/broadbeach` | Cleaning Services Broadbeach \| Local House & Office Cleaners \| Wave Solution Cleaning |
| 82 | `/apartment-cleaning-gold-coast` | Apartment Cleaning Gold Coast \| High-Rise & Unit Cleaners \| Wave Solution Cleaning |
| 81 | `/office-cleaning-gold-coast` | Office Cleaning Gold Coast \| Workplace Cleaning Services \| Wave Solution Cleaning |
| 78 | `/bond-cleaning-gold-coast` | Bond Cleaning Gold Coast \| Detailed Move-Out Cleaning \| Wave Solution Cleaning |

**Fix:** drop the `| Wave Solution Cleaning` suffix on interior pages (your brand is already the domain) or shorten to `| Wave Solution`. Target ≤60 chars. The 11 `/locations/*` pages share an identical long template — fixing the template fixes 11 pages at once.

### 16 meta descriptions are too long (167–246 chars)

Google cuts around 155–160 chars. Fixing these:

```
246  /blog/office-cleaning
217  /blog/cleaning-tips
202  /book
194  /about
181  /blog/end-of-lease-cleaning-requirements-qld
175  /blog/carpet-cleaning-guide
174  /blog/mould-prevention-gold-coast
171  /blog/end-of-lease-checklist     171  /contact
170  /blog/bond-cleaning-checklist    170  /blog/after-builders-cleaning-guide
168  /blog/rental-inspection-tips     168  /blog/how-often-house-cleaning
168  /blog/commercial-cleaning-benefits
167  /blog/office-cleaning-schedule
```

### Stale 2025 blog posts

Six posts still carry 2025 `lastmod` dates, and their titles say 2025 — a freshness negative when you now publish 2026 guides:

```
/blog/end-of-lease-cleaning-cost-gold-coast   2025-09-22
/blog/bond-cleaning-checklist                 2025-01-15
/blog/end-of-lease-checklist                  2025-01-20
/blog/mould-prevention-gold-coast             2025-02-15
/blog/pest-control-guide                      2025-03-20
/blog/rental-inspection-tips                  2025-04-15
```

Note: `/blog/end-of-lease-cleaning-cost-gold-coast` (2025) overlaps with your newer `/bond-cleaning-cost-gold-coast` — in QLD these are the same service, so this is a cannibalisation risk worth resolving.

---

## 6. Contradictory / unverifiable claims still live

Measured on production:

| Claim | Where | Count on page |
|---|---|---|
| **430+ Google Reviews** | homepage hero badge, `/testimonials` ("based on 430+ reviews") | 4 + 5 |
| **87 reviews / 4.9** | `aggregateRating` schema (all 118 pages) | 2 |
| **1,500+ local cleans** | homepage hero chip + stat band | 5 |
| **50+ Gold Coast suburbs** | homepage hero card + stat band | 5 |
| **$10M public liability** | `/cleaning-gold-coast` (×4), `/cleaning-carrara` (×5) | present |
| **$20M public liability** | conflicting figure | *also referenced* |
| **2,000+ happy customers** | `/book` | 1 |

**The 430+ number is the problem.** Third-party-observed review counts are **4** (Gold Coast GBP, via facilicom) and **5** (NSW listing, via Birdeye). No third-party source corroborates 430+, and your 12 on-site testimonials all date from Feb–Mar 2024 with generic names and suburbs — they read as templated.

Your own `lib/claims.ts` already solves this by removing the numbers entirely. **Deploy it.** Then republish only figures you can verify from the Google Business Profile.

---

## 7. What's genuinely good (don't break this)

- **Technically clean** — 118/118 pages 200, zero canonical/robots/duplicate-title/H1 problems. This is better than most local sites.
- **Strong schema breadth** — `LocalBusiness`, `CleaningService`, `WebSite`+`SearchAction`, `BreadcrumbList`, `FAQPage` (102 pages), `Service`, `Offer`, `Article`/`BlogPosting`.
- **`/gallery` image optimization works** — the 4.4 MB `pexels-tima-miroshnichenko-6195274.jpg` is served at **28–180 KB** for real viewport widths via `/_next/image`. The multi-MB source files are a storage tidy-up, **not** a Core Web Vitals problem. Same for the 1.85 MB team photos.
- **AEO groundwork** — `public/llms.txt` exists and is well-formed; "Direct Answer" blocks on homepage and combo pages.
- **Clean redirect hygiene** — legacy `.html`, `/services/*` slugs, and removed suburbs all resolve.
- **`lib/business-info.ts` is a single source of truth** for NAP — good discipline, and it made this audit possible.

---

## 8. Prioritised action plan

### Do this week
1. **Commit and deploy the working tree** (34 files) — removes the invalid review schema and the 430+/87 contradiction. Verify `/` no longer contains `aggregateRating`.
2. **Answer the NSW question** — is the Strathfield Birdeye/ZoomInfo entity a legacy GBP of yours? ✅ *needs your input*
3. **Fix the `/gallery` orphan** — add it to footer + nav.
4. **Fix the facilicom address mismatch** (4208 vs 4215) and pick one insurance figure.

### Do this month
5. **Claim/optimise the Google Business Profile**, then **build the citation layer** in priority order — the exact signup URLs:
   - [Yellow Pages](https://www.yellowpages.com.au/) · [TrueLocal](https://www.truelocal.com.au/) · [Hotfrog](https://www.hotfrog.com.au/admin/add) · [StartLocal](https://www.startlocal.com.au/) · [AussieWeb](https://mylisting.aussieweb.com.au/add-listing.aspx) · [Localsearch](https://www.localsearch.com.au/)
   - [ServiceSeeking](https://www.serviceseeking.com.au/list-your-business) · [Word of Mouth](https://www.wordofmouth.com.au/users/new_with_business) · [ProductReview](https://www.productreview.com.au/write-review)
   - [Facebook](https://www.facebook.com/pages/create) · [Instagram](https://www.instagram.com/) · [LinkedIn](https://www.linkedin.com/company/setup/new)
   - [Bing Places](https://www.bingplaces.com/) · [Apple Business Connect](https://businessconnect.apple.com/) · [Trustpilot](https://business.trustpilot.com/)
6. **Fix internal linking:** add a full service×suburb link grid to each parent service page (lifts the 14 three-link pages to 8–10); add Palm Beach, Varsity Lakes, Nerang to the footer.
7. **Fix the 54 titles + 16 descriptions** — template-level change on the 11 location pages, then the rest.
8. **Build a real review base** — 5+/month, and stop publishing 430+ until it's defensible.

### Do this quarter
9. **Earn topically relevant links** — you currently have **zero** from AU property/real-estate, tenancy/RTA, strata, short-stay or Gold Coast media. `lib/real-estate-agencies.ts` (46 agencies) and `lib/partnership-email-templates.ts` already exist for exactly this — start sending.
10. **De-date the six 2025 posts** and resolve the bond/end-of-lease cost cannibalisation.
11. **Get the pages indexed** — with ~5 indexed of 118, submit the sitemap in Search Console and let the new citations drive discovery.

---

## Caveats on this audit

- **No DA/DR/domain-authority figure was obtainable** for your site or any competitor — every free tool (Ahrefs, Semrush, Moz, Majestic, SimilarWeb) blocked automated access or returned no data. Backlink conclusions rest on confirmed absences and directly verified listings, not on authority scores. Nothing has been estimated or invented.
- **Toxic-link risk could not be assessed** because no tool enumerated the inbound link list.
- **Bing was discarded as a source** — it returned "no results" for control queries including `bond cleaning gold coast`, so its zero-result readings are not evidence of anything.
- **The Google Business Profile could not be inspected directly** (Google bot-walls automated fetch). Its existence was confirmed only via the shortlink in `lib/business-info.ts` resolving to a live *"Wave Solution Cleaning Gold Coast"* place record (`0x3aec6183e8af83d:0x10133a0f57e462e4`), and its service category reads as `carpet_cleaning_service`.
- Figures quoted for live pages come from crawling production, not from the local working tree — which is exactly how the stale-deploy problem in §2 was found.
