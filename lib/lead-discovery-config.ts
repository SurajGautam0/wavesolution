/**
 * Shared configuration for web lead discovery. Kept free of server-only imports so
 * the admin client can render the area and category selectors.
 */

export type LeadAreaId = "gold-coast" | "sydney" | "darwin"

export type LeadCategoryId =
    | "real-estate"
    | "property-management"
    | "offices"
    | "medical"
    | "hotels"
    | "gyms"
    | "restaurants"
    | "builders"
    | "education"

export interface LeadArea {
    id: LeadAreaId
    label: string
    state: string
    /** south, west, north, east — the order Overpass expects. */
    bbox: [number, number, number, number]
    /** west, south, east, north — the order Nominatim expects. */
    viewbox: string
}

export interface LeadCategory {
    id: LeadCategoryId
    label: string
    /** Overpass tag filters; the bounding box is appended server-side. */
    overpass: string[]
    /** Free-text queries used for the Nominatim fallback. */
    nominatim: string[]
}

export const leadAreas: LeadArea[] = [
    {
        id: "gold-coast",
        label: "Gold Coast",
        state: "QLD",
        bbox: [-28.22, 153.24, -27.72, 153.6],
        viewbox: "153.24,-28.22,153.6,-27.72",
    },
    {
        id: "sydney",
        label: "Sydney",
        state: "NSW",
        bbox: [-34.05, 150.95, -33.65, 151.32],
        viewbox: "150.95,-34.05,151.32,-33.65",
    },
    {
        id: "darwin",
        label: "Darwin",
        state: "NT",
        bbox: [-12.55, 130.75, -12.28, 131.05],
        viewbox: "130.75,-12.55,131.05,-12.28",
    },
]

export const leadCategories: LeadCategory[] = [
    {
        id: "real-estate",
        label: "Real estate agencies",
        overpass: ['["office"="estate_agent"]', '["shop"="estate_agent"]'],
        nominatim: ["real estate"],
    },
    {
        id: "property-management",
        label: "Strata & property managers",
        overpass: ['["office"="estate_agent"]', '["office"="property_management"]'],
        nominatim: ["strata management"],
    },
    {
        id: "offices",
        label: "Commercial offices",
        overpass: ['["office"]'],
        nominatim: [],
    },
    {
        id: "medical",
        label: "Medical & dental",
        overpass: ['["amenity"~"^(clinic|doctors|dentist)$"]', '["healthcare"~"^(clinic|dentist|doctor)$"]'],
        nominatim: ["medical centre"],
    },
    {
        id: "hotels",
        label: "Hotels & short-stay",
        overpass: ['["tourism"~"^(hotel|guest_house|apartment|hostel)$"]'],
        nominatim: ["hotel"],
    },
    {
        id: "gyms",
        label: "Gyms & fitness studios",
        overpass: ['["leisure"="fitness_centre"]'],
        nominatim: ["gym"],
    },
    {
        id: "restaurants",
        label: "Restaurants & cafes",
        overpass: ['["amenity"~"^(restaurant|cafe)$"]'],
        nominatim: ["restaurant"],
    },
    {
        id: "builders",
        label: "Builders & trades",
        overpass: ['["craft"="builder"]', '["office"="construction_company"]'],
        nominatim: ["builder"],
    },
    {
        id: "education",
        label: "Schools & childcare",
        overpass: ['["amenity"~"^(school|kindergarten|childcare)$"]'],
        nominatim: ["child care centre"],
    },
]

export function findLeadArea(id: string) {
    return leadAreas.find((area) => area.id === id)
}

export function findLeadCategory(id: string) {
    return leadCategories.find((category) => category.id === id)
}
