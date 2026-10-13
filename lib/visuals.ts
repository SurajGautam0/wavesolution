/**
 * Shared visual language for Wave Solution.
 *
 * Emoji are used purely as decorative accents on top of the existing lucide icon
 * system — never as a replacement for a label, and never in metadata, JSON-LD or
 * any text a crawler indexes. Every emoji below is paired with real copy so the
 * pages stay readable, accessible and safe for the business's professional tone.
 *
 * Keep this file dependency-free and importable from both server and client
 * components.
 */

/** Service-type quick picks on the booking funnel. */
export type QuickPickId = "home" | "office" | "deep"

export const serviceTypeEmoji: Record<QuickPickId, string> = {
  home: "🏡",
  office: "🏢",
  deep: "✨",
}

/**
 * Per-service emoji for the full 15-service list (lib/service-pages.ts slugs)
 * and the suburb landing pages. Keys are service slugs.
 */
export const serviceSlugEmoji: Record<string, string> = {
  "cleaning-gold-coast": "🌊",
  "house-cleaning-gold-coast": "🏡",
  "bond-cleaning-gold-coast": "🔑",
  "end-of-lease-cleaning-gold-coast": "📦",
  "office-cleaning-gold-coast": "🏢",
  "commercial-cleaning-gold-coast": "🏬",
  "deep-cleaning-gold-coast": "✨",
  "move-in-cleaning-gold-coast": "🚚",
  "after-builders-cleaning-gold-coast": "🔨",
  "carpet-cleaning-gold-coast": "🧶",
  "pest-control-gold-coast": "🐜",
  "weekly-cleaning-gold-coast": "📅",
  "apartment-cleaning-gold-coast": "🏙️",
  "end-of-lease-pest-control-gold-coast": "🐜",
  "cleaning-carrara": "📍",
}

/** Fallback so an unmapped/new service slug still renders something sensible. */
export const defaultServiceEmoji = "🧽"

export function getServiceEmoji(slug?: string | null): string {
  if (!slug) return defaultServiceEmoji
  return serviceSlugEmoji[slug] ?? defaultServiceEmoji
}

/**
 * Resolve an emoji for a booking selection, checking the quick-pick ids first
 * and then the service slug list.
 */
export function getBookingServiceEmoji(id: string): string {
  if (id in serviceTypeEmoji) return serviceTypeEmoji[id as QuickPickId]
  return getServiceEmoji(id)
}

/** Property-size cards on booking step 2. */
export const propertySizeEmoji: Record<string, string> = {
  "1-2bed": "🏢",
  "3bed": "🏡",
  "4+bed": "🏘️",
  commercial: "🏬",
}

/** Cleaning-frequency selector on booking step 2. */
export const frequencyEmoji: Record<string, string> = {
  weekly: "📅",
  fortnightly: "🗓️",
  monthly: "📆",
  "one-off": "⚡",
}

/** Number of bathrooms — mirrors the selector options. */
export const bathroomEmoji: Record<string, string> = {
  "1": "🚿",
  "2": "🛁",
  "3": "🛁",
  "4+": "🛁",
  "not-sure": "🤔",
}

/** Trust points reused across the booking funnel and the About page. */
export const trustPoints = [
  { emoji: "🛡️", label: "Fully Insured" },
  { emoji: "👮", label: "Police Checked" },
  { emoji: "⭐", label: "Free Re-Clean Guarantee" },
  { emoji: "⚡", label: "Same-day Available" },
] as const

/**
 * Screen-reader-safe decorative emoji. The emoji is hidden from assistive tech
 * and announced copy comes from the adjacent real label, so emoji never change
 * what a screen reader reads out.
 */
export function decorativeEmojiProps(emoji: string) {
  return {
    "aria-hidden": true as const,
    role: "img" as const,
    "data-emoji": emoji,
  }
}
