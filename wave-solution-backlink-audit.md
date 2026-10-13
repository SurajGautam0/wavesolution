# Off-Site Backlink & Citation Audit — Wave Solution Cleaning (wavesolution.com.au)

**Subject:** https://www.wavesolution.com.au/ — "Wave Solution Cleaning & Pest Control", Gold Coast QLD, phone +61 450 833 683
**Audit date:** ~13 October 2026 (evidence snapshot; ABN Lookup record extraction dated 13 Oct 2026)
**Method:** automated web search + direct HTTP fetch of public pages only. No paid SEO tool, no login, no Google Search Console access.

> **Headline finding:** the domain has an **extremely thin off-site footprint**. Only **three** external pages referencing the business could be confirmed to exist, and **none** of the major Australian business directories (Yellow Pages, TrueLocal, Hotfrog, StartLocal, Oneflare, ServiceSeeking, AussieWeb, LocalSearch, Yelp AU, Word of Mouth, ProductReview) could be confirmed to carry a Wave Solution listing. Two of the three confirmed citations place the business in **New South Wales**, not Queensland.

---

## 1. Method & tool access notes (what worked, what was blocked)

### Worked (usable evidence)
| Tool | URL | Outcome |
|---|---|---|
| Brave Search** | `search.brave.com` | **Independent index, rendered real SERPs.** `"wavesolution.com.au"` → only **2 results**. `site:wavesolution.com.au` → ~5 pages. |
| DuckDuckGo (HTML endpoint) | `html.duckduckgo.com/html/?q=…` | **Rendered real SERPs** and passed a control test. Later rate-limited with a CAPTCHA after ~8 queries. |
| Direct site fetches | `wavesolution.com.au/…` | Home, `/about`, `/contact`, `/testimonials`, `/blog`, `/sitemap.xml` all HTTP 200. |
| facilicom.au | directory listing | HTTP 200, full page read. |
| Birdeye profiles | `reviews.birdeye.com/…` | HTTP 200, full page read. |
| ABN Lookup | `abr.business.gov.au` | HTTP 200, search results read. |
| Wayback Machine CDX API | `web.archive.org/cdx/…` | HTTP 200, snapshot history read. |
| Word of Mouth / ProductReview search | — | HTTP 200, rendered real (empty) results. |
| ServiceSeeking / Hotfrog / StartLocal | directory pages | HTTP 200 but search forms are JS/POST — query could not be executed. |

### Blocked, degraded or no-data (reported honestly)
| Tool | URL tried | Outcome |
|---|---|---|
| **Bing** (as an index probe) | `bing.com/search?q=…` | **UNUSABLE — discard all Bing "no results" readings.** Bing returned "There are no results" for control queries too (`bond cleaning gold coast`, `jimscleaning.com.au`, `goldcoastcleans.com.au`). Bot-degraded SERP. |
| Bing `link:` operator | `bing.com/search?q=link:wavesolution.com.au` | "No results" — but meaningless given the above. Also deprecated by Bing. |
| **Ahrefs** backlink checker | `ahrefs.com/backlink-checker/?input=…` and `/website-authority-checker/?input=…` | HTTP 200, **JS-only shell**; zero figures in the HTML. |
| **Semrush** | `semrush.com/website/wavesolution.com.au/overview/` | **HTTP 404** — that URL pattern is dead. |
| **SimilarWeb** | `similarweb.com/website/wavesolution.com.au/` | **HTTP 202, empty body** — blocked. |
| **Majestic** Site Explorer | `majestic.com/reports/site-explorer?q=…` | **HTTP 200 but human-verification (captcha) page.** No data. |
| **Moz** | `moz.com/domain-analysis?site=…` | **HTTP 403** (Cloudflare). |
| Mojeek | `mojeek.com/search?q=…` | **CAPTCHA / HTTP 403** ("your network appears to be sending automated queries"). |
| wmtips | `wmtips.com/tools/info/wavesolution.com.au` | **HTTP 403** Cloudflare. |
| SEOPtimizer | `seoptimer.com/wavesolution.com.au` | **HTTP 403** Cloudflare. |
| StatsCrop | `statscrop.com/www/wavesolution.com.au` | Page loads; **every metric is `-` or "Loading…"** → no data. |
| HypeStat | `hypestat.com/info/wavesolution.com.au` | **"This site is not found in the HypeStat database yet."** |
| siteprice.org | `siteprice.org/website-worth/…` | **"We could not find wavesolution.com.au in our database."** |
| OpenLinkProfiler | `openlinkprofiler.org/r/…` | **HTTP 404** (service gone). |
| websiteoutlook.com | — | **DNS `ENOTFOUND`** (domain does not resolve). |
| dachecker.io | `/check/…` → 404; `/domain-authority-checker` | Tool page loads but **results require an interactive POST**; no query-param endpoint. No figures. |
| SmallSEOTools DA checker | `smallseotools.com/domain-authority-checker/` | JS form only; **no figures via fetch**. |
| WooRank | `woorank.com/en/www/wavesolution.com.au` | Redirects to teaser-review → **HTTP 404**. |
| Neil Patel website audit | `neilpatel.com/website-audit/` | **HTTP 404**. |
| `search.marcia.com` (named in the brief) | `search.marcia.com` | **Not a real tool** — parked domain "may be for sale". |
| Yellow Pages AU | `yellowpages.com.au/search/…` | **HTTP 403 Cloudflare** ("Sorry, you have been blocked"). |
| TrueLocal | `truelocal.com.au` | **HTTP 403 Cloudflare.** |
| Yelp Australia | `yelp.com.au/search?…` | **HTTP 403** — "Please enable JS". |
| LocalSearch.com.au | `localsearch.com.au/search?…` | **HTTP 202, empty body.** |
| AussieWeb | search endpoint | **HTTP 500 error page.** |
| Google Search / Google Maps | `google.com/search`, `google.com/maps` | Empty shell / JS-only. **GBP could not be read directly.** |
| Jim's Cleaning site | `jimscleaning.com.au` | **HTTP 403** Cloudflare (competitor, not client). |

**Bottom line on tools:** **no free public backlink checker returned a single DA/DR/Trust-Flow, referring-domain or backlink count for this domain.** Every authority metric in this report is therefore marked "not obtainable" rather than estimated. The only usable third-party signals were search-engine result counts and directly-fetched directory pages.

### Control test (why some "no results" findings are trustworthy and others are not)
- **Trustworthy:** DuckDuckGo returned rich results for `bond cleaning gold coast` (10+ cleaning companies) → therefore DDG's **"No results found for `"wavesolution.com.au"`"** and **"No results found for `"0450 833 683"`"** are genuine signal.
- **Not trustworthy:** Bing returned zero results for the same control queries → all Bing "no results" readings were discarded.

---

## 2. Confirmed directory / citation listings

| Directory | Listing found? | URL evidence | NAP consistency |
|---|---|---|---|
| **facilicom.au** (AU cleaning directory) | ✅ **CONFIRMED** (page fetched) | https://www.facilicom.au/listing/wave-solution-cleaning-pest-control-gold-coast | **Partial.** Name "Wave Solution - Cleaning & Pest Control Gold Coast" ✅; phone `+61 450 833 683` ✅ matches site. **Address MISMATCH:** lists "Southport - Burleigh Rd, QLD **4208**" vs site's "Gold Coast, QLD **4215**". Lists Google rating **5.0 from 4 reviews**; outbound website link goes through a redirect `/api/click.php?id=15067` (not a direct editorial link). Zero on-site reviews ("Be the first to review"). |
| **ZoomInfo** (B2B data aggregator) | ✅ **CONFIRMED to exist** (direct fetch **403** Cloudflare; existence + content seen via Brave SERP) | https://www.zoominfo.com/c/wave-solution/1327326158 | **MISMATCH.** Brave SERP snippet: "View Wave Solution (www.**wavesolution.com.au**) location in **New South Wales**, Australia." State is wrong (should be QLD). Description is generic/stale: "Australia's premier cleaning service provider… operations across major cities in Australia." |
| **Birdeye** (review aggregator) | ✅ **CONFIRMED** (page fetched) — **but for a NSW entity** | https://reviews.birdeye.com/wave-solution-170855075751507 | **MISMATCH.** "Wave Solution", Home Services, **114 Wentworth Rd, Strathfield NSW 2135**, **5.0 from 5 Google reviews**, unclaimed profile, website field = `https://wavesolution.com.au/`. Google place_id `ChIJmxBFxB1iJSUR_wrL55Wk7TM`. Reviews dated "3 years ago" and "7 months ago". |
| **Google Business Profile** — "Wave Solution - Cleaning & Pest Control Gold Coast" | ⚠️ **EXISTS PER THIRD PARTY — not directly verifiable** | Evidence: facilicom.au listing (same page as above) cites a Google Maps place (`g/11nbhl85gl`, coords −27.9718794, 153.4063059) with **5.0 / 4 reviews**. Google itself could not be fetched (JS/bot wall). | Cannot fully verify. Third-party-observed review count (**4**) is **not consistent** with the site's own claim of "430+ Google Reviews". |
| **Google Business Profile** — Strathfield NSW | ⚠️ **EXISTS PER THIRD PARTY** | Same Birdeye page: place_id `ChIJmxBFxB1iJSUR_wrL55Wk7TM`, 114 Wentworth Rd, Strathfield NSW 2135, 5 reviews. | **Likely duplicate / legacy listing** pointing at the client's domain from a NSW address. Needs client confirmation. |
| Yellow Pages (yellowpages.com.au) | ❌ **Not found** (site 403-blocked; no listing surfaced in any search) | — | — |
| TrueLocal | ❌ **Not found** (site 403; DDG `site:truelocal.com.au wave solution` returned only unrelated TrueLocal pages) | — | — |
| Hotfrog | ❌ **Not found** (search page ignored the query; no listing surfaced) | — | — |
| StartLocal | ❌ **Not found** (no listing surfaced) | — | — |
| Oneflare | ❌ **Nothing found** — note: `oneflare.com.au/search` now **redirects to airtasker.com** (Oneflare absorbed by Airtasker) | — | — |
| ServiceSeeking | ❌ **Not found** in the Gold Coast cleaners directory (54 businesses listed); no profile surfaced in searches | https://www.serviceseeking.com.au/cleaners/qld/gold-coast | — |
| AussieWeb | ❌ **Not found** (search errored HTTP 500; nothing surfaced elsewhere) | — | — |
| LocalSearch.com.au | ❌ **Not found** (blocked; nothing surfaced elsewhere) | — | — |
| Yelp Australia | ❌ **Not found** (403; nothing surfaced in searches) | — | — |
| Word of Mouth (wordofmouth.com.au) | ❌ **CONFIRMED ABSENT** — search renders **"No reviews yet" / 0 reviews** | https://www.wordofmouth.com.au/search?q=wave+solution | — |
| ProductReview.com.au | ❌ **CONFIRMED ABSENT** — search for "wave solution" returns **no Wave Solution listing** (only unrelated "\* Solutions" brands such as Fallon Solutions, MAX Solutions) | https://www.productreview.com.au/search?q=wave+solution | — |
| Facebook | ❌ **Not found.** Brave `site:facebook.com "Wave Solution" cleaning Gold Coast` returned only **CleanWave Solutions (Perth)** — a different business | — | — |
| Instagram | ❌ **Not found** — no profile surfaced in any search | — | — |
| LinkedIn | ❌ **Not found** — no company page surfaced in any search | — | — |

### Index-visibility evidence (proxy for link/citation volume)
| Query | Engine | Result |
|---|---|---|
| `"wavesolution.com.au"` (exact domain) | **Brave** | **Only 2 results:** the site's own `/contact` page + the ZoomInfo profile. |
| `site:wavesolution.com.au` | **Brave** | ~**5 pages** indexed (home, `/services`, `/about`, `/contact`, `/bond-cleaning-gold-coast`) — versus **120+ URLs** declared in `sitemap.xml`. |
| `"wavesolution.com.au"` | **DuckDuckGo** | **"No results found"** (valid — control query returned rich results). |
| `"0450 833 683"` (exact phone) | **DuckDuckGo** | **"No results found"** → the business phone number appears on **no indexed third-party page**. |
| `site:wavesolution.com.au` | **DuckDuckGo** | Many own pages indexed (so the domain *is* crawlable/indexed for site: queries). |
| `"Wave Solution" cleaning Gold Coast` | **Brave** | Own pages only + unrelated "CleanWave"/"GreenWave" businesses. No directories, no social, no press. |

### Domain-age / history evidence
- **Wayback Machine CDX** (`web.archive.org/cdx/search/cdx?url=wavesolution.com.au`): earliest capture **2023-12-16** (a 301 redirect); **latest capture 2025-03-20**. So the domain has ~2.5 years of archive history but the **current Next.js site has no Wayback snapshots after March 2025**.
- The **April 2024 archived version** (`web.archive.org/web/20240422214820/https://wavesolution.com.au/`) was a **WordPress site** with a different service mix (carpet, couch, rug, curtain, stain removal, mould, sanitisation, deodorisation) and **two phone numbers: `(+61) 046 7576 729 | 045 0833 683`**. The `045 0833 683` number matches the current business.
- That old site contained **scraped/placeholder filler text**, e.g. on the Couch Cleaning service: *"As a app web crawler expert, I help organizations adjust to the expanding significance of internet"* — a low-quality-content signal from the site's previous incarnation.
- WordPress media paths (`/wp-content/uploads/2020/10/…`) indicate the WordPress site dates from at least **October 2020**.
- **ABN Lookup** (`abr.business.gov.au/Search/ResultsActive?SearchText=wave+solution`): search for "wave solution" returned **64 active matches, none of which is a Gold Coast QLD cleaning business named "Wave Solution"**. The trading entity could **not** be confirmed. (Site names founder "Sushant Timalcena" and Operations Manager "Veshraj Gautam".)

---

## 3. Backlink data from tools (exact figures + source URLs)

> **Every free backlink/authority tool was blocked or returned no data. There are therefore NO legitimate DA, DR, Trust Flow, referring-domain, or backlink-count figures to report for wavesolution.com.au.** Nothing below is estimated or invented.

| Metric | Value | Source |
|---|---|---|
| Moz Domain Authority (DA) | **Not obtainable** | moz.com → 403; dachecker.io & smallseotools → JS-only; no server-rendered figure anywhere |
| Moz Spam Score | **Not obtainable** | as above |
| Ahrefs Domain Rating (DR) | **Not obtainable** | ahrefs.com free tools returned JS-only shells |
| Ahrefs backlink / referring-domain count | **Not obtainable** | as above |
| Majestic Trust Flow / Citation Flow | **Not obtainable** | majestic.com → captcha |
| Semrush Authority Score / backlinks | **Not obtainable** | semrush.com `/website/` URL → 404 |
| SimilarWeb traffic/authority | **Not obtainable** | HTTP 202 empty body |
| Site traffic/rank estimates | **No data at all** | StatsCrop all `-`; HypeStat "not in database"; siteprice.org "not in database" |
| Off-site citation pages found | **3** (facilicom.au, ZoomInfo, Birdeye) | Brave/DDG SERPs + direct fetches |
| Brave results for exact domain string | **2** | https://search.brave.com/search?q=%22wavesolution.com.au%22 |
| DDG results for exact domain string | **0** | https://html.duckduckgo.com/html/?q=%22wavesolution.com.au%22 |
| DDG results for exact phone number | **0** | https://html.duckduckgo.com/html/?q=%220450+833+683%22 |

**Interpretation (stated as inference, not measurement):** a domain whose exact string returns 2 results in Brave and 0 in DuckDuckGo almost certainly has a **single-digit referring-domain count**, and quite possibly only the three aggregator pages above. This is an inference from search-result scarcity, **not** a measured backlink count.

---

## 4. Competitor comparison

Authority metrics (DA/DR/TF) were **not obtainable for any competitor either** — the same tool blocks applied. Comparison below rests on **verifiable third-party citation/review presence**.

| Competitor | Domain | Third-party citations **confirmed** | Review signal | Authority metric | Source URLs |
|---|---|---|---|---|---|
| **Gold Coast Cleans** | goldcoastcleans.com.au | **Birdeye profile** + **poyst.com** business page | **4.9 / 73 Google reviews** (Mermaid Waters QLD 4218; place_id `ChIJObIR0k_41msReX3UNWSFI7E`) | Not obtainable | https://reviews.birdeye.com/gold-coast-cleans-170854245677672 · https://www.poyst.com/business/gold-coast-cleans |
| **Brightside (Gold Coast Cleaning Services)** | (Birdeye-listed) | **Birdeye profile** | **21 reviews** (Hope Island QLD) | Not obtainable | https://reviews.birdeye.com/brightside-gold-coast-cleaning-services-171710789424875 |
| **Best Bond Clean Gold Coast** | (Birdeye-listed) | **Birdeye profile** | **32 reviews** (Broadbeach QLD) | Not obtainable | https://reviews.birdeye.com/best-bond-clean-gold-coast-170854326106316 |
| **Bond Clean Expert** | bondcleanexpert.com.au | **Trustpilot profile exists** | Trustpilot **3.2 / 5** (CA) and **2.9 / 5** (DK) | Not obtainable | https://ca.trustpilot.com/review/bondcleanexpert.com.au · https://dk.trustpilot.com/review/bondcleanexpert.com.au |
| **Gold Coast Clean & Sheen** | goldcoastcleanandsheen.com.au | **ScamAdviser profile**, **gatesofeden.com.au** page, own testimonials page | Own-site testimonials only | Not obtainable | https://www.scamadviser.com/check-website/goldcoastcleanandsheen.com.au · https://gatesofeden.com.au/5422975789007689773/ |
| **John Paul's Cleaning** | johnpaulscleaning.com.au | **Zest app listing** | Zest listing | Not obtainable | https://www.zestapp.com.au/cleaning-services/john-paul's-cleaning/5c051bdb-4dfd-455d-8654-8a22a2ead9ce |
| **Jim's Cleaning** (national franchise) | jimscleaning.com.au | **Houzz profile**, **infoisinfo AU listing**, **NDIS Commission provider registration** | National brand scale | Not obtainable | https://www.houzz.com.au/professionals/house-cleaning-services/jims-builders-cleans-pfvwau-pf~1546807725 · https://gold-coast.infoisinfo-au.com/card/jims-cleaning-ernest-molendinar/1459491 · https://www.ndiscommission.gov.au/provider-registration/jims-cleaning-national |
| **Wave Solution (client)** | wavesolution.com.au | **3** — facilicom.au, ZoomInfo, Birdeye — **two of which misplace it in NSW** | **4 Google reviews** (third-party observed) vs site's self-claim of **430+** | **Not obtainable** | https://www.facilicom.au/listing/wave-solution-cleaning-pest-control-gold-coast · https://www.zoominfo.com/c/wave-solution/1327326158 · https://reviews.birdeye.com/wave-solution-170855075751507 |

**Qualitative gap assessment.** Every competitor checked shows at least one **established, correctly-geolocated** third-party citation — and most show review volumes in the **tens** (21, 32, 73) that are corroborated by a third party. Wave Solution has **three** confirmable citations, of which **two (ZoomInfo, Birdeye) place it in New South Wales**, i.e. they are arguably doing *negative* work for local relevance, and the third (facilicom.au) is a low-authority directory whose outbound link is a **redirect** rather than an editorial link. Competitors such as Gold Coast Cleans (73 Google reviews in Mermaid Waters) have both a larger, verifiable review base and a directory presence that reinforces Gold Coast relevance. On the evidence available, **Wave Solution is the weakest citation footprint of any business compared here**, including the smallest competitor sampled. The gap is not marginal — it is roughly an order of magnitude in review corroboration and a **citation-accuracy** problem on top of a **citation-volume** problem.

---

## 5. Unlinked mentions (brand mentioned, little or no link value)

| Where | What was found | Link status |
|---|---|---|
| **facilicom.au** | Listing names the business and shows "Website: wavesolution.com.au" | ⚠️ **Effectively unlinked / no equity** — the outbound link is `https://www.facilicom.au/api/click.php?id=15067`, a **redirect endpoint**, not a direct editorial hyperlink. |
| **ZoomInfo** | Company profile text contains "www.wavesolution.com.au" | ⚠️ Likely **unlinked or gated** (profile itself sits behind a Cloudflare wall; ZoomInfo typically gates contact/site data behind login). Not a meaningful link. |
| **Birdeye** | Profile has a website field pointing to `https://wavesolution.com.au/` | ✅ A hyperlink appears to exist — **but it is attached to the Strathfield NSW listing**, so it reinforces the wrong location. |
| **Archive.org** | Old WordPress version of the site | Self-referential only; no brand mentions elsewhere. |
| News / press / media | **None found** — no news, PR, sponsored-post or editorial mention of the brand anywhere in Brave or DDG. | — |
| Forum / community / Reddit / local groups | **None found.** | — |

**No mention of the brand was found outside its own website and the three aggregator pages above.**

---

## 6. Toxic / spam link risk

**Honest limitation first:** because **no backlink-enumeration tool worked**, I **could not inspect the actual inbound link list**. It is therefore **not possible to give a real toxic-link assessment** — any "no toxic links" claim would be unfounded. What follows is what *can* be said from observable evidence.

- **No evidence of previous spammy link building was found.** No PBN footprints, paid-link networks, foreign-language link farms, or comment-spam artifacts surfaced in any search for the brand or domain.
- **No suspicious or off-topic domains were found linking to the business** — because almost no domains were found linking to it at all.
- **Aggregator-only profile is itself the risk.** The confirmable citations are exactly the class of page that is auto-generated from data brokers: **ZoomInfo** (B2B scraper) and **facilicom.au** (directory with a redirect-based outbound link). These are low-value, not "toxic", but they also provide **no defensible authority**.
- **More material trust risk — unverifiable review claims (on-page, not backlink):** the site's homepage states **"4.9 / 5 · 430+ Google Reviews"**, and `/testimonials` states **"4.9/5.0 Based on 430+ Google & Local Reviews"** with a breakdown of 5★ 412 / 4★ 18. The only **third-party-observed** Google data found is **5.0 from 4 reviews** (facilicom.au, on the Gold Coast GBP) and **5.0 from 5 reviews** on a separate **Strathfield NSW** listing (Birdeye). **No third-party source corroborates 430+ reviews.** Additionally, the 12 testimonials on `/testimonials` are all dated **Feb–Mar 2024** with generic names and suburb tags (Sarah Johnson/Southport, Michael Thompson/Broadbeach, Robert & Kelly Brown/Palm Beach, David Williams/Robina, Amanda Wilson/Helensvale, Emma Roberts/Surfers Paradise, Jennifer Lee/Surfers Paradise, Chris Martin…), which reads as templated placeholder content rather than organic reviews. *Observation, flagged for the client to confirm against their real Google profile.*
- **On-page NAP/consistency inconsistencies found** (relevant to citation trust): address "Gold Coast, QLD **4215**" on site vs "QLD **4208**" on facilicom; public liability stated as **"$20 Million"** on `/contact` but **"$10M Insured"** in the site footer; tenure stated as **"10+ Years Experience"** on the homepage but the Brave-indexed meta description for `/about` says **"Gold Coast Cleaning Experts Since 2010"**. The site also has **no published street address** — only "Gold Coast, QLD 4215".

---

## 7. Topical relevance of links found

| Source | Relevance | Assessment |
|---|---|---|
| **facilicom.au** | ✅ **Australian cleaning-industry directory**, categorised under "Commercial Cleaning → Gold Coast → Queensland" | **Most relevant link found** — but low authority and a redirect-based (equity-less) outbound link. |
| **ZoomInfo** | ⚠️ Generic B2B data aggregator; **mis-geolocated to New South Wales** | Not local, not cleaning-specific, wrong state. |
| **Birdeye** | ⚠️ Generic review aggregator; **Strathfield, NSW** entity | Not local, wrong state, wrong entity. |
| Property / real-estate / RTA / strata / Queensland-local sources | ❌ **None found** | Major untapped relevance category. |
| News / trade / supplier / manufacturer links | ❌ **None found** | Untapped. |

**Summary:** of the (very few) links found, **one is topically relevant and local (facilicom.au)**, and **two are generic aggregators that actively harm local relevance by placing the business in NSW**. There is **no** evidence of links from Australian property, real-estate, tenancy/RTA, strata, hospitality or local-news sources.

---

## 8. Concrete gap list — ranked by impact, with listing/signup URLs

Ranking logic: **fix accuracy before volume.** Items 1–3 are correctness/trust fixes that unlock everything else; items 4+ are citation build-out.

| # | Action | Why it matters (impact) | Exact URL | URL verified? |
|---|---|---|---|---|
| 1 | **Claim/verify the Google Business Profile and reconcile the address.** Confirm which GBP is live ("Wave Solution - Cleaning & Pest Control Gold Coast" at coords −27.9719, 153.4063 vs the Strathfield NSW one) and whether both exist. | Highest possible impact: local pack rankings and review accumulation depend entirely on this. The NSW duplicate also corrupts every aggregator that scrapes Google (ZoomInfo, Birdeye, facilicom). | https://business.google.com/ (claim) · https://business.google.com/create (new) | Not verified (Google bot-walled) — standard entry point |
| 2 | **Resolve the duplicate/mismatched NSW listing** surfaced at 114 Wentworth Rd, Strathfield NSW 2135 with 5 reviews, which lists this domain. Either it is a legacy listing to be corrected/removed, or a separate business wrongly using the domain. | Directly poisons local relevance and citations. Everything downstream inherits the error. | https://business.google.com/ (find & correct/close the duplicate) · also ask Birdeye to correct the profile: https://reviews.birdeye.com/wave-solution-170855075751507 (profile has a "Suggest edits" / "Claim this profile" control) | Listing page ✅ verified |
| 3 | **Publish one canonical NAP** (name, street address or service-area definition, phone `+61 450 833 683`, website, "Gold Coast QLD") and use it verbatim everywhere. Reconcile the 4215 vs 4208 postcode, and the $10M vs $20M insurance figure. | Prerequisite for every citation below. Inconsistent NAP is why the existing citations disagree. | (internal) | — |
| 4 | **Register with the major AU directories** — none currently confirmed: Yellow Pages, TrueLocal, Hotfrog, StartLocal, AussieWeb, LocalSearch. | Largest single volume gain for AU local SEO; competitors all have these. | Yellow Pages: https://www.yellowpages.com.au/ · TrueLocal: https://www.truelocal.com.au/ · **Hotfrog add business: https://www.hotfrog.com.au/admin/add** · StartLocal: https://www.startlocal.com.au/ · **AussieWeb add listing: https://mylisting.aussieweb.com.au/add-listing.aspx** · Localsearch: https://www.localsearch.com.au/ | Hotfrog ✅ and AussieWeb ✅ **confirmed on-page**; Yellow Pages & TrueLocal returned 403 (standard entry points) |
| 5 | **Create a ServiceSeeking profile** — the platform is actively serving Gold Coast cleaning demand (54 cleaners listed on the Gold Coast page) and Wave Solution is absent. | Direct lead generation plus a citation. | **https://www.serviceseeking.com.au/list-your-business** | ✅ verified on-page |
| 6 | **Create a Word of Mouth profile** — confirmed the brand currently returns **0 reviews / no listing**. | AU's main service-review platform; competitors' absence/presence there is a visible differentiator. | **https://www.wordofmouth.com.au/users/new_with_business** | ✅ verified on-page |
| 7 | **Create a ProductReview.com.au listing** — confirmed absent from search. | High-authority AU domain; strong ranking benefit. | **https://www.productreview.com.au/write-review** | ✅ verified on-page |
| 8 | **Build a real review base.** Third-party-observed Google reviews = **4**; the site claims **430+**. Pursue genuine reviews via the GBP, and align on-site claims with reality. | Trust/EEAT and conversion. Also required before any "4.9 from 430 reviews" claim is defensible. | https://business.google.com/ · productreview.com.au · wordofmouth.com.au | — |
| 9 | **Fix/claim the aggregator profiles** so they stop asserting "New South Wales": ZoomInfo and facilicom.au. | Stops active relevance damage; converts two wrong citations into two correct ones. | https://www.zoominfo.com/c/wave-solution/1327326158 · https://www.facilicom.au/listing/wave-solution-cleaning-pest-control-gold-coast | ZoomInfo page ✅ exists (403 to fetch) · facilicom ✅ verified |
| 10 | **Set up the missing social profiles** — no Facebook, Instagram or LinkedIn page was found for this business. | Social profiles are standard NAP-consistent citations and a trust signal. | Facebook: https://www.facebook.com/pages/create · Instagram: https://www.instagram.com/ · LinkedIn: https://www.linkedin.com/company/setup/new | Standard entry points (not verified this session) |
| 11 | **Add Bing Places + Apple Business Connect.** | Bing's index is a major citation source; Apple Maps matters for iPhone users. | https://www.bingplaces.com/ · https://businessconnect.apple.com/ | Standard entry points (not verified) |
| 12 | **Get a Trustpilot business profile.** Competitor bondcleanexpert.com.au already has one (3.2/5 CA, 2.9/5 DK); Wave Solution has none. | Third-party review authority + rich-result eligibility. | https://business.trustpilot.com/ | Standard entry point (not verified) |
| 13 | **Pursue topically relevant local links** — the current profile has **zero** links from Australian property/real-estate, tenancy/RTA, strata, short-stay/hospitality or Gold Coast local media. | The only route to genuine authority; also where competitors are structurally stronger (e.g. Jim's has NDIS provider registration and Houzz). | Targets to pursue: local REI/tenancy resources, Gold Coast Business Excellence / Chamber of Commerce, strata & body-corporate associations, short-stay operator directories, RTA/bond-guide citations, supplier/manufacturer "find a cleaner" pages | — |
| 14 | **Note for follow-up:** confirm the legal entity/ABN. ABN Lookup returned **no Gold Coast QLD business named "Wave Solution"** among 64 "wave solution" matches — many directories require and display an ABN. | Without a verifiable ABN, several citations (and all legal/insurance trust signals) cannot be completed. | https://abr.business.gov.au/ | ✅ searched |

---

## 9. What I could NOT verify (explicit)

1. **Any DA / DR / Trust Flow / Spam Score / referring-domain / backlink count** for Wave Solution or for any competitor — every free tool was blocked, JS-only, or had no data. **No such figure appears anywhere in this report.**
2. **The actual inbound backlink list** — so **no genuine toxic-link assessment is possible**. Section 6 states only what is observable.
3. **The Google Business Profile directly** — Google Search and Maps could not be fetched. GBP review counts come from third parties (facilicom.au: 4 reviews) and are **not** independently confirmed against Google.
4. **Whether the Strathfield NSW listing is the same legal business, a legacy listing, or a different company** reusing the domain. Evidence pointing toward *related*: same domain listed, same trade, and reviewer surnames (Subedi, Chaudhary, Sharma, Pandey) share a Nepali origin with the founders named on the site (Sushant Timalcena, Veshraj Gautam). This is **circumstantial**, not confirmed.
5. **Any Hotfrog, StartLocal, ServiceSeeking, AussieWeb or LocalSearch listing** — their search forms are JS/POST and their site-wide blocks prevented a definitive negative. For these, the finding is **"not found / could not be verified"**, which is weaker than the confirmed absences at Word of Mouth and ProductReview.
6. **The Facebook/Instagram/LinkedIn absence** rests on search-index coverage (Brave, DDG) rather than on platform APIs; a private or unindexed page would not have been detected.
