# Wave Solution — SEO / CRO Setup Notes

Measurement, verification and owner inputs for the Phase 0–6 work in this repo.

## 1. GA4 measurement (B10)

- GA4 ID `G-Q2D4JFK9R6` is loaded from `app/layout.tsx` (inline snippet, `send_page_view: false`).
- `components/analytics.tsx` sends:
  - `page_view` — every route change (SPA safe), with `page_path`, `page_location`, `page_title`.
  - `click_to_call` / `click_to_email` / `click_to_whatsapp` — delegated listener on any `tel:`, `mailto:` or `wa.me` link.
- `lib/analytics.ts` exposes `trackEvent(name, params)` for anything else.
- Custom events already wired:
  - `booking_step_view` — `/book` step 1 view and each Continue (`app/book/BookingPageClient.tsx`).
  - `quote_submit` — booking form success (`service`, `suburb`, `frequency`, `flow: booking_form`).
  - `contact_form_submit` — `/contact` form success (`service`).

### To verify

1. Open the site with `?debug_mode=1` or use the GA4 **DebugView** with the Google Tag Debugger / `dataLayer` in DevTools.
2. Console check: `window.dataLayer` should show `["event","page_view",…]` on every navigation.
3. In GA4 → **Admin → Custom events**, register `quote_submit` and `contact_form_submit` as key events if you want them counted as conversions.

### Suggested conversions to mark as key events

| Event | Meaning |
| --- | --- |
| `quote_submit` | Booking request sent |
| `contact_form_submit` | Contact enquiry sent |
| `click_to_call` | Phone lead |

## 2. Booking form (B9)

`app/book/BookingPageClient.tsx` now has:

- Quick picks (Home / Office / Deep) **plus** a "choose a specific service" select listing all 15 services from `lib/service-pages.ts`.
- **Suburb** field (suggestions from `businessInfo.serviceAreas`) with validation.
- **Bathrooms** selector (1 / 2 / 3 / 4+ / Not sure) in step 2.
- Summary + success dialog show suburb and bathrooms.

`app/api/send-booking/route.ts` accepts and emails `suburb` and `bathrooms`, and no longer appends "Cleaning" to the service label.

> If you add a new service to `lib/service-pages.ts`, it appears in the booking dropdown automatically.

## 3. New / changed URLs

| URL | Notes |
| --- | --- |
| `/bond-cleaning-cost-gold-coast` | New guide page (Phase 3 P0) |
| `/end-of-lease-cleaning-checklist` | New guide page (Phase 3 P0) |

Both are in `app/sitemap.ts` and cross-linked from the bond / end of lease service pages.

## 4. Owner inputs still needed — `[OWNER: …]`

1. **`/bond-cleaning-cost-gold-coast` Direct Answer** — current price range by property size, AUD.
2. **Claim reconciliation** (listed in `SEO_AUDIT_PHASE0.md`):
   - JSON-LD `aggregateRating` 4.9 / 87 reviews vs hero "430+ Google Reviews".
   - "1,500+ jobs" (home) vs "2,000+ happy customers" (`/book`).
   - "$10M liability", "100% bond-back guarantee", "100% satisfaction guarantee".
   - Calculator prices $45 / $55 / $65 / $85, `priceRange` "$120 - $600", "From $120", bond FAQ "starts from $250".
   - Home stats: "10+ years", "50+ suburbs", "4.9 / 5".
   Decide which are true, then align every occurrence.
3. **R1 duplication decision** — keep both `/bond-cleaning-cost-gold-coast` and `/blog/end-of-lease-cleaning-cost-gold-coast`, or 301 one to the other.

## 5. Preview / deploy

```powershell
Remove-Item .next -Recurse -Force   # only if the WasmHash build error appears
npm run build
npm run dev                          # http://localhost:3000
```

No environment changes were required for Phases 1–4; existing `.env.local` (SMTP, Firebase) is unchanged.
