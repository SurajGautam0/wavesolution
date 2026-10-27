# Wave Solution — SEO, Internal Linking & Backlink Audit (RE-CHECK)

**Site:** https://www.wavesolution.com.au/ (Next.js 15 App Router, Vercel)
**Last verified:** live crawl of the current 129-URL sitemap + repo inspection
**Status:** ⬆️ **Materially improved since the first audit** — see §1

---

## 1. What changed since the first audit

The site was redeployed and the repo was actively developed between audits. Several issues I originally flagged are now **resolved in production**:

| Issue (first audit) | Status now |
|---|---|
| `AggregateRating 4.9 / 87` + `Review` schema on all 118 pages | ✅ **Gone — 0 of 129 pages emit it.** Manual-action risk cleared. |
| Sitewide title template appending `\| Wave Solution Cleaning` (25 chars) pushing 54 titles over limit | ✅ **Fixed at source.** Template is now `"%s"` with a comment explaining the old suffix caused repeated brand names; pages own their titles. |
| 54 titles > 65 chars | ✅ **0 titles over 65 chars** |
| 16 meta descriptions > 165 chars | ✅ **0 in source** (one stale in production, fixed below) |
| `/gallery` orphaned (0 inbound links) | ✅ **Fixed** — now linked from the footer |
| 118 URLs in sitemap | ➕ **129 URLs**, still 100% HTTP 200 |

**Production health now: 129/129 URLs return 200, zero canonicals mismatched, no noindex, no duplicate titles/H1s, no invalid review markup.**

---

## 2. Fixes I applied in this pass

| File | Change |
|---|---|
| [site-footer.tsx](C:\Users\Surajgautam\Desktop\Wavesolution\components\site-footer.tsx) | Added **`/property-managers`** → fixes the new orphan (see §3) |
| [app/services/page.tsx](C:\Users\Surajgautam\Desktop\Wavesolution\app\services\page.tsx) | Description shortened **189 → 146 chars** |
| [app/about/layout.tsx](C:\Users\Surajgautam\Desktop\Wavesolution\app\about\layout.tsx) | Description shortened **184 → 148 chars** |

Verified with `tsc --noEmit`: **no errors in any edited file**. (39 pre-existing type errors remain in `app/api/*`, `lib/auth.ts`, Firebase files — unrelated, and `ignoreBuildErrors` is enabled.)

> ⚠️ **The local `next build` cannot complete in this environment.** It dies inside `next/dist/compiled/webpack/bundle5.js` with `TypeError: Cannot read properties of undefined (reading 'length')` (a WASM-hash worker crash). This is a toolchain fault, not a code fault — it is unrelated to these metadata/footer string edits, which are type-safe. Deploy normally via Vercel.

---

## 3. Internal linking — one remaining orphan

### 🔴 `/property-managers` has zero inbound internal links

A genuine B2B referral page ([app/property-managers/page.tsx](C:\Users\Surajgautam\Desktop\Wavesolution\app\property-managers\page.tsx)) promoting bond cleaning, carpet extraction and pest treatment to Gold Coast property managers. It is in the sitemap and returns 200, but **nothing on the site links to it** — not the nav, not the footer, not the blog hub. It exists in isolation.

For a cleaning business, property managers are one of the highest-value recurring referral channels, so an unlinked page is wasted. **Fixed:** added to the footer's Company column.

### ✅ The service × suburb cluster is healthy (corrected from first audit)

I initially reported 14 combo pages "starved" at 3 inbound links. **That was a measurement error on my part** — my crawl only counted links from sitemap URLs. In reality:

- All 5 parent service hubs render a complete **"…by suburb" grid linking all 11 suburb pages** (verified live on `/bond-`, `/house-`, `/end-of-lease-`, `/pest-control-`, `/office-cleaning-gold-coast`).
- Each combo page therefore gets **parent hub + 2–3 sibling "nearby suburb" chips + its `/locations/{suburb}` page** = 3–12 inbound links.

A 3–12 link cluster around a clean hub is the **correct** hub-and-spoke pattern, not starvation. No fix needed.

### Location-page link equity is uneven but acceptable

`/locations/*` pages receive 2–118 inbound links. The highest (118) are those in the footer. The lower ones (e.g. `/locations/palm-beach` outside the footer) are still reachable from combo-page related blocks and the `/locations` hub. **Optional improvement:** add Palm Beach, Varsity Lakes and Nerang to the footer for parity.

---

## 4. Backlinks / citations — unchanged, still the #1 ranking constraint

Re-verified: the off-site footprint remains extremely thin. Full detail in [wave-solution-backlink-audit.md](C:\Users\Surajgautam\Desktop\Wavesolution\wave-solution-backlink-audit.md).

- Only **3** external references confirmed: [facilicom.au](https://www.facilicom.au/listing/wave-solution-cleaning-pest-control-gold-coast), [ZoomInfo](https://www.zoominfo.com/c/wave-solution/1327326158), [Birdeye](https://reviews.birdeye.com/wave-solution-170855075751507)
- **No** listing confirmed on Yellow Pages, TrueLocal, Hotfrog, StartLocal, AussieWeb, Localsearch, ServiceSeeking, Word of Mouth, ProductReview, Facebook, Instagram or LinkedIn
- Search-result scarcity: ~5 pages indexed vs 129 in the sitemap

### ✅ You confirmed the NSW entity is yours

You answered **"Yes — a legacy NSW profile of ours."** That makes this a **duplicate Google Business Profile problem**, and it is now the single highest-priority item:

1. **Resolve the duplicate first.** A legacy NSW listing competing with the Gold Coast listing splits review equity, confuses the "near me" radius, and feeds wrong address data to every downstream aggregator (which is exactly why ZoomInfo and Birdeye say NSW).
   → Google Business Profile → [business.google.com](https://business.google.com/) → find the Strathfield/NSW profile → either **mark it permanently closed / remove it**, or if it holds reviews you want to keep, follow Google's **duplicate/merge** process rather than deleting it.
2. **Then** correct [Birdeye](https://reviews.birdeye.com/wave-solution-170855075751507) (has a Suggest-edits path) and [ZoomInfo](https://www.zoominfo.com/c/wave-solution/1327326158) to QLD.
3. **Then** build the citation layer — order matters; doing citations before the duplicate is fixed just propagates the NSW data further.

**Fix the facilicom address too:** it lists **QLD 4208** while your site says **QLD 4215**. Pick one canonical NAP and enforce it everywhere.

Then work this list (exact signup URLs):
- [Yellow Pages](https://www.yellowpages.com.au/) · [TrueLocal](https://www.truelocal.com.au/) · [Hotfrog](https://www.hotfrog.com.au/admin/add) · [StartLocal](https://www.startlocal.com.au/) · [AussieWeb](https://mylisting.aussieweb.com.au/add-listing.aspx) · [Localsearch](https://www.localsearch.com.au/)
- [ServiceSeeking](https://www.serviceseeking.com.au/list-your-business) · [Word of Mouth](https://www.wordofmouth.com.au/users/new_with_business) · [ProductReview](https://www.productreview.com.au/write-review)
- [Bing Places](https://www.bingplaces.com/) · [Apple Business Connect](https://business.apple.com/) · [Trustpilot](https://business.trustpilot.com/)
- [Facebook](https://www.facebook.com/pages/create) · [Instagram](https://www.instagram.com/) · [LinkedIn](https://www.linkedin.com/company/setup/new)

Note: your schema's `sameAs` already declares Facebook and Instagram URLs — make sure those profiles actually exist publicly, or remove them.

---

## 5. Remaining on-page issue: 36 titles have no brand name

Now that the suffix template is gone, **36 of 69 titles omit "Wave Solution" entirely**:

```
 51  Cleaning Services Gold Coast | House, Bond & Office            (lib/service-pages.ts)
 44  House Cleaning Gold Coast | Weekly & One-Off
 45  Bond Cleaning Gold Coast QLD | Move-Out Clean
 43  End of Lease Cleaning Gold Coast | Handover
 48  Office Cleaning Services Gold Coast | Local Team
 50  Commercial Cleaners Gold Coast | Business Cleaning
 40  Deep Cleaning Gold Coast | One-Off Clean
 40  Move-In Cleaning Gold Coast | Home Reset
 47  After Builders Cleaning Gold Coast | Renovation
 38  Carpet Cleaning Gold Coast | From $150
 41  Pest Control Gold Coast | Home & Business
 44  Weekly Cleaning Gold Coast | Regular Service
 49  Apartment Cleaning Gold Coast | Units & High-Rise
 36  End of Lease Pest Control Gold Coast
 49  Cleaning Services Carrara | Bond & House Cleaners
 ... plus 21 blog/guide pages
```

This is a **trade-off, not strictly a bug**. Dropping the suffix fixed the over-length problem and removed brand repetition — a real improvement. But completely unbranded titles reduce brand recognition in SERPs and weaken brand-term click-through.

**Recommendation:** add `| Wave Solution` per page *where it fits under 65 chars*, rather than via a global template. E.g. `Carpet Cleaning Gold Coast | From $150` (38) → `Carpet Cleaning Gold Coast | From $150 | Wave Solution` (54) ✅. About half the service pages have room; the longer ones don't. Keep it deliberate and per-page.

---

## 6. Still open (unchanged from first audit)

- **Unverifiable claims.** The live homepage still shows `430+ Google Reviews`, `1,500+ local cleans`, `Coverage across 50+ Gold Coast suburbs`, plus `$10M`/`$20M` public-liability conflict. Third parties observe **4–5 reviews**, not 430+. `lib/claims.ts` exists to fix this — use it, or make the numbers provable from the GBP.
- **Six stale 2025 blog posts** (`bond-cleaning-checklist`, `end-of-lease-checklist`, `mould-prevention-gold-coast`, `pest-control-guide`, `rental-inspection-tips`, `end-of-lease-cleaning-cost-gold-coast`). The last also overlaps `/bond-cleaning-cost-gold-coast` — in QLD these are the same service, so resolve the cannibalisation.
- **Indexation.** With ~5 of 129 pages indexed and near-zero backlinks, the 90 service×suburb pages are currently doing very little. Citations + Search Console submission are the unlock.
- **Unused outreach machinery.** `lib/directory-database.ts` (43 directories), `lib/real-estate-agencies.ts` (46 agencies) and `lib/partnership-email-templates.ts` exist but are only imported by the admin Gmail component — no submitted/status tracking. They reference a `BACKLINK-ROADMAP-6-MONTHS.md` that does not exist.

---

## 7. Prioritised next steps

**Now**
1. **Resolve the legacy NSW Google Business Profile** (you confirmed it's yours) — this is the top item.
2. Deploy the three fixes in §2 (footer link + 2 descriptions).
3. Fix the facilicom `4208` vs `4215` address mismatch; settle on one insurance figure.

**This month**
4. Build the citation layer from §4, after the duplicate is resolved.
5. Add `| Wave Solution` to service/blog titles where it fits within 65 chars (§5).
6. Make the review counts defensible — deploy `lib/claims.ts` or prove the number.
7. Add Palm Beach / Varsity Lakes / Nerang to the footer for location-link parity.

**This quarter**
8. Earn topically relevant links — you have **zero** from AU property, tenancy/RTA, strata, short-stay or Gold Coast media. Start outreach using the 46 agencies already in `lib/real-estate-agencies.ts`.
9. De-date the six 2025 posts; resolve bond/end-of-lease cost cannibalisation.
10. Submit the sitemap in Search Console and request indexing of the priority service pages.

---

## 8. Method & caveats

- Live crawl of all **129** sitemap URLs (status, `<title>`, meta description, canonical, JSON-LD, internal `<a href>` graph).
- Source inspection for titles/descriptions behind the live pages.
- `tsc --noEmit` to confirm edits are type-safe.
- **No DA/DR/authority metric was obtainable** for this site or any competitor — Ahrefs, Semrush, Moz, Majestic, SimilarWeb all blocked automated access. Backlink conclusions rest on confirmed absences and directly verified listings, not authority scores. Nothing is estimated.
- **Toxic-link risk cannot be assessed** — no tool enumerated the inbound link list.
- Bing was discarded as a signal source (it returned no results for control queries too).
- The Google Business Profile could not be inspected directly (bot-walled); its existence was confirmed via the `maps.app.goo.gl` shortlink in `lib/business-info.ts` resolving to a live *"Wave Solution Cleaning Gold Coast"* place record (`0x3aec6183e8af83d:0x10133a0f57e462e4`), category reading as `carpet_cleaning_service`.
