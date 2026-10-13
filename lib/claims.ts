/**
 * Verified, defensible public claims for Wave Solution.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The site previously carried several unverifiable or contradictory claims that
 * are actively harmful to local ranking and carry manual-action risk:
 *
 *   - three different Google review counts (87 / 430 / "120+")
 *   - a star-rating distribution totalling exactly 430 with zero negatives
 *   - invented "helpful" engagement counts on individual testimonials
 *   - two different public-liability figures ($10M / $20M)
 *   - four different suburb counts (50+ / 18+ / 15+ / 11)
 *
 * Anything that asserts a review count, an aggregate star rating, or a specific
 * insurance dollar figure has been removed sitewide. Do not reintroduce those
 * numbers unless they can be verified from the Google Business Profile or an
 * insurance certificate of currency — unverifiable review markup is a manual
 * action trigger, not a ranking shortcut.
 *
 * The counts below are DERIVED from real data so they can never drift again.
 */

import { businessInfo } from "./business-info"

/** Number of named suburbs listed, excluding the broad Gold Coast region. */
export const serviceAreaCount = businessInfo.serviceAreas.filter(
  (area) => area.toLowerCase() !== businessInfo.address.locality.toLowerCase(),
).length

/** e.g. "15 Gold Coast suburbs" — used wherever coverage is mentioned. */
export const serviceAreaLabel = `${serviceAreaCount} Gold Coast suburbs`

/**
 * Insurance wording with NO dollar figure, because the two figures previously
 * published on the site conflicted. Publish an amount only once the certificate
 * of currency confirms it.
 */
export const insuranceLabel = "Fully insured"
export const insuranceLongLabel = "Fully insured with public liability cover"

/** The one guarantee term used sitewide (previously 72h / 100% / inspection-ready). */
export const guaranteeLabel = "Free re-clean guarantee"
export const guaranteeDetail = "If anything is missed, we return and fix it at no charge."

/**
 * Objective trust points that are verifiable from the business's own policy
 * statements. Deliberately contains no rating, review count or dollar figure.
 */
export const trustBadges = [
  "Fully insured",
  "Police-checked team",
  "Locally owned",
  "Free re-clean guarantee",
] as const

/** Short badge text for tight spaces (cards, inline strips). */
export const trustBadgesShort = [
  "Fully insured",
  "Police-checked",
  "Locally owned",
] as const
