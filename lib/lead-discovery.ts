/**
 * Server-side web lead discovery.
 *
 * Sources:
 *  - Overpass / OpenStreetMap: structured local business listings by area and category.
 *  - Nominatim / OpenStreetMap: free-text fallback for businesses the tag query misses.
 *  - Each business website: public contact page scanned for a listed email address.
 *
 * No paid search API is required. Coverage varies by area; results are suggestions
 * and should be verified before outreach.
 */

import type { LeadArea, LeadCategory } from "./lead-discovery-config"

export interface DiscoveredLead {
    id: string
    businessName: string
    category: string
    area: string
    suburb: string
    address: string
    website: string
    email: string
    emailSource: string
    phone: string
    source: "openstreetmap" | "nominatim"
    sourceUrl: string
    notes: string
}

interface OverpassElement {
    type: string
    id: number
    tags?: Record<string, string>
}

interface NominatimRow {
    osm_type?: string
    osm_id?: number
    name?: string
    display_name?: string
    type?: string
    class?: string
    extratags?: Record<string, string>
    address?: Record<string, string>
}

const USER_AGENT = "WaveSolutionLeadDiscovery/1.0 (info@wavesolution.com.au)"
const OVERPASS_ENDPOINTS = [
    "https://overpass.openstreetmap.fr/api/interpreter",
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]
const ENRICH_SKIP_HOSTS = [
    "facebook.com",
    "instagram.com",
    "linkedin.com",
    "realestate.com.au",
    "domain.com.au",
    "yellowpages.com.au",
    "google.com",
    "tripadvisor.com",
    "yelp.com",
    "airbnb.com",
    "booking.com",
    "wikipedia.org",
    "healthdirect.gov.au",
]
const NOMINATIM_TYPE_FILTERS: Record<string, string[]> = {
    "real-estate": ["estate_agent", "office"],
    "property-management": ["estate_agent", "property_management", "company", "office"],
    medical: ["clinic", "dentist", "doctors", "hospital", "healthcare", "doctor"],
    hotels: ["hotel", "guest_house", "motel", "hostel", "apartment", "chalet"],
    gyms: ["fitness_centre", "sports_centre", "gym"],
    restaurants: ["restaurant", "cafe", "fast_food"],
    builders: ["builder", "construction", "company"],
    education: ["school", "kindergarten", "childcare", "college", "university"],
}
const BAD_EMAIL_DOMAINS = ["sentry.io", "wixpress.com", "example.com", "domain.com", "email.com", "sentry-next.wixpress.com"]

function safeHost(website: string) {
    try {
        return new URL(website).hostname.replace(/^www\./i, "").toLowerCase()
    } catch {
        return ""
    }
}

function normalizeWebsite(value?: string) {
    if (!value) return ""
    let raw = value.trim()
    if (!raw || raw === "yes") return ""
    if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`
    try {
        const url = new URL(raw)
        if (url.protocol !== "http:" && url.protocol !== "https:") return ""
        url.hash = ""
        return url.href.replace(/\/$/, "")
    } catch {
        return ""
    }
}

function normalizeEmail(value?: string) {
    if (!value) return ""
    const match = String(value).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
    return match ? match[0].toLowerCase() : ""
}

function isUsableEmail(email: string) {
    if (!email || email.length > 90) return false
    if (/\.(png|jpe?g|gif|webp|svg|css|js|ico)$/i.test(email)) return false
    if (/@2x\./i.test(email)) return false
    const [local, domain] = email.split("@")
    if (!local || !domain) return false
    if (["u", "user", "your", "name", "email", "username", "sentry", "noreply", "no-reply"].includes(local)) return false
    if (BAD_EMAIL_DOMAINS.some((blocked) => domain === blocked || domain.endsWith(`.${blocked}`))) return false
    return true
}

function bestEmailFromHtml(html: string, host: string) {
    const mailtos = [...html.matchAll(/mailto:([^"'>?\s]+)/gi)].map((match) => {
        try {
            return decodeURIComponent(match[1])
        } catch {
            return match[1]
        }
    })
    const plain = [...html.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((match) => match[0])
    const candidates = [...new Set([...mailtos, ...plain].map((value) => normalizeEmail(value)).filter(isUsableEmail))]

    const score = (email: string) => {
        let points = 0
        const [local, domain] = email.split("@")
        if (host && (domain === host || domain.endsWith(`.${host}`))) points += 4
        if (/^(info|hello|contact|office|enquiries|enquiry|sales|reception|admin|accounts)$/i.test(local)) points += 3
        if (local.includes("noreply") || local.includes("no-reply")) points -= 5
        return points
    }

    return candidates.sort((a, b) => score(b) - score(a))[0] || ""
}

async function fetchHtml(url: string) {
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": USER_AGENT,
                Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "en-AU,en;q=0.9",
            },
            redirect: "follow",
            cache: "no-store",
            signal: AbortSignal.timeout(7000),
        })
        if (!response.ok) return ""
        const contentType = response.headers.get("content-type") || ""
        if (contentType && !contentType.includes("text/html")) return ""
        const text = await response.text()
        return text.length > 700_000 ? text.slice(0, 700_000) : text
    } catch {
        return ""
    }
}

async function fetchOverpass(query: string): Promise<OverpassElement[]> {
    for (const endpoint of OVERPASS_ENDPOINTS) {
        try {
            const response = await fetch(`${endpoint}?data=${encodeURIComponent(query)}`, {
                headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
                cache: "no-store",
                signal: AbortSignal.timeout(12_000),
            })
            if (!response.ok) continue
            const data = (await response.json()) as { elements?: OverpassElement[] }
            if (Array.isArray(data.elements)) return data.elements
        } catch {
            // Try the next mirror.
        }
    }
    return []
}

async function fetchNominatim(area: LeadArea, category: LeadCategory): Promise<NominatimRow[]> {
    if (category.nominatim.length === 0) return []

    const rows: NominatimRow[] = []
    for (const [index, query] of category.nominatim.entries()) {
        if (index > 0) await new Promise((resolve) => setTimeout(resolve, 1100))
        const params = new URLSearchParams({
            q: query,
            format: "jsonv2",
            addressdetails: "1",
            extratags: "1",
            limit: "30",
            viewbox: area.viewbox,
            bounded: "1",
        })
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
                headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
                cache: "no-store",
                signal: AbortSignal.timeout(20_000),
            })
            if (!response.ok) continue
            const data = await response.json()
            if (Array.isArray(data)) {
                const allowedTypes = NOMINATIM_TYPE_FILTERS[category.id]
                const rowsForQuery = allowedTypes
                    ? (data as NominatimRow[]).filter((row) => allowedTypes.includes(row.type || "") || allowedTypes.includes(row.class || ""))
                    : (data as NominatimRow[])
                rows.push(...rowsForQuery)
            }
        } catch {
            // Keep results from the other queries.
        }
    }
    return rows
}

function addressFromTags(tags: Record<string, string>) {
    const street = [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" ")
    const suburb = tags["addr:suburb"] || tags["addr:city"] || tags["addr:town"] || ""
    return {
        street,
        suburb,
        address: [street, suburb, tags["addr:postcode"]].filter(Boolean).join(", "),
    }
}

function normalizeOverpassLead(element: OverpassElement, area: LeadArea, category: LeadCategory): DiscoveredLead | null {
    const tags = element.tags || {}
    const businessName = (tags.name || tags["name:en"] || "").trim()
    if (!businessName) return null
    if (/pest control|cleaning service/i.test(businessName)) return null

    const details = addressFromTags(tags)
    const website = normalizeWebsite(tags.website || tags["contact:website"] || tags.url)
    const email = normalizeEmail(tags.email || tags["contact:email"])
    const phone = (tags.phone || tags["contact:phone"] || tags.mobile || "").trim()
    const suburb = details.suburb || area.label

    return {
        id: `osm-${element.type}-${element.id}`,
        businessName,
        category: category.label,
        area: area.label,
        suburb,
        address: details.address,
        website,
        email,
        emailSource: email ? "OpenStreetMap listing" : "",
        phone,
        source: "openstreetmap",
        sourceUrl: `https://www.openstreetmap.org/${element.type}/${element.id}`,
        notes: `Listed as ${category.label.toLowerCase()} in ${suburb}. Publicly listed business details; verify before outreach.`,
    }
}

function normalizeNominatimLead(row: NominatimRow, area: LeadArea, category: LeadCategory): DiscoveredLead | null {
    const businessName = (row.name || row.display_name?.split(",")[0] || "").trim()
    if (!businessName) return null

    const extratags = row.extratags || {}
    const addressParts = row.address || {}
    const suburb = addressParts.suburb || addressParts.city || addressParts.town || area.label
    const street = [addressParts.house_number, addressParts.road].filter(Boolean).join(" ")
    const website = normalizeWebsite(extratags.website || extratags["contact:website"])
    const email = normalizeEmail(extratags.email || extratags["contact:email"])
    const phone = (extratags.phone || extratags["contact:phone"] || "").trim()

    return {
        id: `nom-${row.osm_type || "place"}-${row.osm_id || businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        businessName,
        category: category.label,
        area: area.label,
        suburb,
        address: [street, suburb, addressParts.postcode].filter(Boolean).join(", "),
        website,
        email,
        emailSource: email ? "OpenStreetMap listing" : "",
        phone,
        source: "nominatim",
        sourceUrl: row.osm_type && row.osm_id ? `https://www.openstreetmap.org/${row.osm_type}/${row.osm_id}` : "",
        notes: `Found in ${suburb}. Publicly listed business details; verify before outreach.`,
    }
}

async function enrichLead(lead: DiscoveredLead): Promise<DiscoveredLead> {
    if (lead.email || !lead.website) return lead
    const host = safeHost(lead.website)
    if (!host) return lead
    if (ENRICH_SKIP_HOSTS.some((blocked) => host === blocked || host.endsWith(`.${blocked}`))) return lead

    const pages = [lead.website]
    try {
        const base = new URL(lead.website)
        pages.push(new URL("/contact", base).href)
    } catch {
        return lead
    }

    for (const page of pages) {
        const html = await fetchHtml(page)
        if (!html) continue
        const email = bestEmailFromHtml(html, host)
        if (email) {
            return { ...lead, email, emailSource: page }
        }
    }
    return lead
}

function dedupe(leads: DiscoveredLead[]) {
    const seenNames = new Set<string>()
    const seenContacts = new Set<string>()
    const unique: DiscoveredLead[] = []

    for (const lead of leads) {
        const nameKey = `${lead.businessName.toLowerCase().replace(/[^a-z0-9]/g, "")}|${lead.suburb.toLowerCase()}`
        if (seenNames.has(nameKey)) continue
        const contactKey = lead.email
        if (contactKey && seenContacts.has(contactKey)) continue
        seenNames.add(nameKey)
        if (contactKey) seenContacts.add(contactKey)
        unique.push(lead)
    }
    return unique
}

function rank(lead: DiscoveredLead) {
    return (lead.email ? 6 : 0) + (lead.website ? 3 : 0) + (lead.phone ? 2 : 0)
}

export interface LeadDiscoveryResult {
    leads: DiscoveredLead[]
    sources: string[]
    message?: string
}

const CACHE_TTL_MS = 5 * 60 * 1000
const discoveryCache = new Map<string, { at: number; result: LeadDiscoveryResult }>()

export async function discoverLeads(area: LeadArea, category: LeadCategory): Promise<LeadDiscoveryResult> {
    const cacheKey = `${area.id}:${category.id}`
    const cached = discoveryCache.get(cacheKey)
    if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
        return cached.result
    }

    const bbox = area.bbox.join(",")
    const filters = category.overpass.map((filter) => `nwr${filter}(${bbox});`).join("\n  ")
    const query = `[out:json][timeout:30];\n(\n  ${filters}\n);\nout center tags 80;`

    const [overpassElements, nominatimRows] = await Promise.all([
        fetchOverpass(query),
        fetchNominatim(area, category),
    ])

    const leads = dedupe([
        ...overpassElements.map((element) => normalizeOverpassLead(element, area, category)).filter((lead): lead is DiscoveredLead => Boolean(lead)),
        ...nominatimRows.map((row) => normalizeNominatimLead(row, area, category)).filter((lead): lead is DiscoveredLead => Boolean(lead)),
    ])

    if (leads.length === 0) {
        const result: LeadDiscoveryResult = {
            leads: [],
            sources: [],
            message: `No businesses were found for ${category.label.toLowerCase()} in ${area.label}. Try a different category or area.`,
        }
        discoveryCache.set(cacheKey, { at: Date.now(), result })
        return result
    }

    const candidates = leads.sort((a, b) => rank(b) - rank(a)).slice(0, 10)
    const enriched = await Promise.all(candidates.map((lead) => enrichLead(lead)))
    const finalLeads = enriched.sort((a, b) => rank(b) - rank(a)).slice(0, 12)

    const result: LeadDiscoveryResult = {
        leads: finalLeads,
        sources: ["OpenStreetMap (Overpass + Nominatim)", "Business websites"],
    }
    discoveryCache.set(cacheKey, { at: Date.now(), result })
    return result
}
