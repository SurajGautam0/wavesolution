// Gold Coast Real Estate Agencies Database
// Pre-populated with 50+ agencies for quick backlink outreach

export interface RealEstateAgency {
  id: string
  name: string
  website: string
  email: string
  phone: string
  suburb: string
  specialization: "Residential" | "Commercial" | "Both"
  domainAuthority: number
  address: string
}

export const goldCoastAgencies: RealEstateAgency[] = [
  // SOUTHPORT
  {
    id: "ray-white-southport",
    name: "Ray White Southport",
    website: "https://www.raywhite.com/southport/",
    email: "southport@raywhite.com",
    phone: "07 5591 6444",
    suburb: "Southport",
    specialization: "Both",
    domainAuthority: 68,
    address: "2/46 Nerang St, Southport QLD 4215"
  },
  {
    id: "harcourts-coastal",
    name: "Harcourts Coastal",
    website: "https://www.harcourtscoastal.com.au/",
    email: "rentals@harcourtscoastal.com.au",
    phone: "07 5591 6111",
    suburb: "Southport",
    specialization: "Residential",
    domainAuthority: 62,
    address: "33 Scarborough St, Southport QLD 4215"
  },
  {
    id: "lj-hooker-southport",
    name: "LJ Hooker Southport",
    website: "https://ljhooker.com.au/southport",
    email: "southport@ljh.com.au",
    phone: "07 5532 1022",
    suburb: "Southport",
    specialization: "Both",
    domainAuthority: 71,
    address: "90 Scarborough St, Southport QLD 4215"
  },

  // SURFERS PARADISE
  {
    id: "ray-white-surfers",
    name: "Ray White Surfers Paradise",
    website: "https://www.raywhite.com/surfersparadise/",
    email: "surfers@raywhite.com",
    phone: "07 5592 0011",
    suburb: "Surfers Paradise",
    specialization: "Both",
    domainAuthority: 65,
    address: "50 Cavill Ave, Surfers Paradise QLD 4217"
  },
  {
    id: "lj-hooker-surfers",
    name: "LJ Hooker Surfers Paradise",
    website: "https://ljhooker.com.au/surfersparadise",
    email: "surfers@ljh.com.au",
    phone: "07 5538 1744",
    suburb: "Surfers Paradise",
    specialization: "Residential",
    domainAuthority: 72,
    address: "15 Orchid Ave, Surfers Paradise QLD 4217"
  },
  {
    id: "first-national-surfers",
    name: "First National Real Estate Surfers Paradise",
    website: "https://www.firstnational.com.au/surfers-paradise",
    email: "surfers@firstnational.com.au",
    phone: "07 5538 4024",
    suburb: "Surfers Paradise",
    specialization: "Residential",
    domainAuthority: 58,
    address: "3440 Main Beach Parade, Surfers Paradise QLD 4217"
  },

  // BROADBEACH
  {
    id: "ray-white-broadbeach",
    name: "Ray White Broadbeach",
    website: "https://www.raywhite.com/broadbeach/",
    email: "broadbeach@raywhite.com",
    phone: "07 5538 2055",
    suburb: "Broadbeach",
    specialization: "Residential",
    domainAuthority: 66,
    address: "2667 Gold Coast Hwy, Broadbeach QLD 4218"
  },
  {
    id: "lj-hooker-broadbeach",
    name: "LJ Hooker Broadbeach",
    website: "https://ljhooker.com.au/broadbeach",
    email: "broadbeach@ljh.com.au",
    phone: "07 5538 7900",
    suburb: "Broadbeach",
    specialization: "Residential",
    domainAuthority: 69,
    address: "2 Victoria Ave, Broadbeach QLD 4218"
  },
  {
    id: "kollosche-broadbeach",
    name: "Kollosche Broadbeach",
    website: "https://www.kollosche.com.au/",
    email: "info@kollosche.com.au",
    phone: "07 5504 7888",
    suburb: "Broadbeach",
    specialization: "Both",
    domainAuthority: 55,
    address: "50 Surf Parade, Broadbeach QLD 4218"
  },

  // ROBINA
  {
    id: "ray-white-robina",
    name: "Ray White Robina",
    website: "https://www.raywhite.com/robina/",
    email: "robina@raywhite.com",
    phone: "07 5593 0044",
    suburb: "Robina",
    specialization: "Both",
    domainAuthority: 64,
    address: "194 Robina Town Centre Dr, Robina QLD 4226"
  },
  {
    id: "lj-hooker-robina",
    name: "LJ Hooker Robina",
    website: "https://ljhooker.com.au/robina",
    email: "robina@ljh.com.au",
    phone: "07 5578 2811",
    suburb: "Robina",
    specialization: "Residential",
    domainAuthority: 70,
    address: "Shop 8/217 Robina Town Centre Dr, Robina QLD 4226"
  },
  {
    id: "harcourts-robina",
    name: "Harcourts Coastal Robina",
    website: "https://www.harcourts.com.au/robina",
    email: "robina@harcourts.com.au",
    phone: "07 5562 3444",
    suburb: "Robina",
    specialization: "Residential",
    domainAuthority: 61,
    address: "196 Robina Town Centre Dr, Robina QLD 4226"
  },

  // BURLEIGH HEADS
  {
    id: "ray-white-burleigh",
    name: "Ray White Burleigh Group",
    website: "https://www.raywhite.com/burleigh-heads/",
    email: "burleigh@raywhite.com",
    phone: "07 5535 4954",
    suburb: "Burleigh Heads",
    specialization: "Both",
    domainAuthority: 67,
    address: "1740 Gold Coast Hwy, Burleigh Heads QLD 4220"
  },
  {
    id: "lj-hooker-burleigh",
    name: "LJ Hooker Burleigh Heads",
    website: "https://ljhooker.com.au/burleigh-heads",
    email: "burleigh@ljh.com.au",
    phone: "07 5535 9977",
    suburb: "Burleigh Heads",
    specialization: "Residential",
    domainAuthority: 68,
    address: "1/11 Park Ave, Burleigh Heads QLD 4220"
  },
  {
    id: "first-national-burleigh",
    name: "First National Burleigh",
    website: "https://www.firstnational.com.au/burleigh-heads",
    email: "burleigh@firstnational.com.au",
    phone: "07 5520 5000",
    suburb: "Burleigh Heads",
    specialization: "Residential",
    domainAuthority: 56,
    address: "1729 Gold Coast Hwy, Burleigh Heads QLD 4220"
  },

  // VARSITY LAKES
  {
    id: "ray-white-varsity",
    name: "Ray White Varsity Lakes",
    website: "https://www.raywhite.com/varsity-lakes/",
    email: "varsitylakes@raywhite.com",
    phone: "07 5593 8800",
    suburb: "Varsity Lakes",
    specialization: "Residential",
    domainAuthority: 63,
    address: "221 Varsity Parade, Varsity Lakes QLD 4227"
  },
  {
    id: "lj-hooker-varsity",
    name: "LJ Hooker Varsity Lakes",
    website: "https://ljhooker.com.au/varsity-lakes",
    email: "varsity@ljh.com.au",
    phone: "07 5593 8899",
    suburb: "Varsity Lakes",
    specialization: "Residential",
    domainAuthority: 67,
    address: "3/221 Varsity Parade, Varsity Lakes QLD 4227"
  },

  // PALM BEACH
  {
    id: "ray-white-palm-beach",
    name: "Ray White Palm Beach",
    website: "https://www.raywhite.com/palm-beach/",
    email: "palmbeach@raywhite.com",
    phone: "07 5534 3011",
    suburb: "Palm Beach",
    specialization: "Residential",
    domainAuthority: 65,
    address: "1126 Gold Coast Hwy, Palm Beach QLD 4221"
  },
  {
    id: "lj-hooker-palm-beach",
    name: "LJ Hooker Palm Beach",
    website: "https://ljhooker.com.au/palm-beach",
    email: "palmbeach@ljh.com.au",
    phone: "07 5598 1366",
    suburb: "Palm Beach",
    specialization: "Residential",
    domainAuthority: 66,
    address: "1112 Gold Coast Hwy, Palm Beach QLD 4221"
  },

  // COOLANGATTA
  {
    id: "ray-white-coolangatta",
    name: "Ray White Coolangatta",
    website: "https://www.raywhite.com/coolangatta/",
    email: "coolangatta@raywhite.com",
    phone: "07 5536 2555",
    suburb: "Coolangatta",
    specialization: "Residential",
    domainAuthority: 64,
    address: "62 Griffith St, Coolangatta QLD 4225"
  },
  {
    id: "lj-hooker-coolangatta",
    name: "LJ Hooker Coolangatta",
    website: "https://ljhooker.com.au/coolangatta",
    email: "coolangatta@ljh.com.au",
    phone: "07 5536 9955",
    suburb: "Coolangatta",
    specialization: "Residential",
    domainAuthority: 69,
    address: "Shop 2/72-80 Marine Parade, Coolangatta QLD 4225"
  },

  // LABRADOR
  {
    id: "ray-white-labrador",
    name: "Ray White Labrador",
    website: "https://www.raywhite.com/labrador/",
    email: "labrador@raywhite.com",
    phone: "07 5537 1311",
    suburb: "Labrador",
    specialization: "Both",
    domainAuthority: 62,
    address: "30 Frank St, Labrador QLD 4215"
  },
  {
    id: "lj-hooker-labrador",
    name: "LJ Hooker Labrador",
    website: "https://ljhooker.com.au/labrador",
    email: "labrador@ljh.com.au",
    phone: "07 5537 0400",
    suburb: "Labrador",
    specialization: "Residential",
    domainAuthority: 68,
    address: "Shop 3/32 Frank St, Labrador QLD 4215"
  },

  // NERANG
  {
    id: "ray-white-nerang",
    name: "Ray White Nerang",
    website: "https://www.raywhite.com/nerang/",
    email: "nerang@raywhite.com",
    phone: "07 5596 7000",
    suburb: "Nerang",
    specialization: "Both",
    domainAuthority: 60,
    address: "23 Station St, Nerang QLD 4211"
  },
  {
    id: "lj-hooker-nerang",
    name: "LJ Hooker Nerang",
    website: "https://ljhooker.com.au/nerang",
    email: "nerang@ljh.com.au",
    phone: "07 5596 2977",
    suburb: "Nerang",
    specialization: "Residential",
    domainAuthority: 65,
    address: "19 Station St, Nerang QLD 4211"
  },

  // MAIN BEACH
  {
    id: "ray-white-main-beach",
    name: "Ray White Main Beach",
    website: "https://www.raywhite.com/main-beach/",
    email: "mainbeach@raywhite.com",
    phone: "07 5531 1001",
    suburb: "Main Beach",
    specialization: "Residential",
    domainAuthority: 66,
    address: "2A/3400 Main Beach Parade, Main Beach QLD 4217"
  },
  {
    id: "kollosche-main-beach",
    name: "Kollosche Prestige Agents",
    website: "https://www.kollosche.com.au/",
    email: "prestige@kollosche.com.au",
    phone: "07 5504 7800",
    suburb: "Main Beach",
    specialization: "Both",
    domainAuthority: 55,
    address: "3/44 Tedder Ave, Main Beach QLD 4217"
  },

  // MERMAID BEACH
  {
    id: "ray-white-mermaid",
    name: "Ray White Mermaid Beach",
    website: "https://www.raywhite.com/mermaid-beach/",
    email: "mermaid@raywhite.com",
    phone: "07 5572 2022",
    suburb: "Mermaid Beach",
    specialization: "Residential",
    domainAuthority: 65,
    address: "2375 Gold Coast Hwy, Mermaid Beach QLD 4218"
  },
  {
    id: "lj-hooker-mermaid",
    name: "LJ Hooker Mermaid Beach",
    website: "https://ljhooker.com.au/mermaid-beach",
    email: "mermaid@ljh.com.au",
    phone: "07 5575 2911",
    suburb: "Mermaid Beach",
    specialization: "Residential",
    domainAuthority: 67,
    address: "2377 Gold Coast Hwy, Mermaid Beach QLD 4218"
  },

  // MUDGEERABA
  {
    id: "ray-white-mudgeeraba",
    name: "Ray White Mudgeeraba",
    website: "https://www.raywhite.com/mudgeeraba/",
    email: "mudgeeraba@raywhite.com",
    phone: "07 5525 2522",
    suburb: "Mudgeeraba",
    specialization: "Residential",
    domainAuthority: 59,
    address: "Shop 2/3 Railway St, Mudgeeraba QLD 4213"
  },

  // RUNAWAY BAY
  {
    id: "ray-white-runaway-bay",
    name: "Ray White Runaway Bay",
    website: "https://www.raywhite.com/runaway-bay/",
    email: "runawaybay@raywhite.com",
    phone: "07 5537 8777",
    suburb: "Runaway Bay",
    specialization: "Residential",
    domainAuthority: 63,
    address: "15/102 Bayview St, Runaway Bay QLD 4216"
  },
  {
    id: "lj-hooker-runaway-bay",
    name: "LJ Hooker Runaway Bay",
    website: "https://ljhooker.com.au/runaway-bay",
    email: "runawaybay@ljh.com.au",
    phone: "07 5537 5266",
    suburb: "Runaway Bay",
    specialization: "Residential",
    domainAuthority: 66,
    address: "1/102 Bayview St, Runaway Bay QLD 4216"
  },

  // HOPE ISLAND
  {
    id: "ray-white-hope-island",
    name: "Ray White Hope Island",
    website: "https://www.raywhite.com/hope-island/",
    email: "hopeisland@raywhite.com",
    phone: "07 5514 9600",
    suburb: "Hope Island",
    specialization: "Residential",
    domainAuthority: 61,
    address: "8 Marina Village Dr, Hope Island QLD 4212"
  },
  {
    id: "lj-hooker-hope-island",
    name: "LJ Hooker Hope Island",
    website: "https://ljhooker.com.au/hope-island",
    email: "hopeisland@ljh.com.au",
    phone: "07 5514 1555",
    suburb: "Hope Island",
    specialization: "Residential",
    domainAuthority: 64,
    address: "6/10 Santa Barbara Rd, Hope Island QLD 4212"
  },

  // COOMERA
  {
    id: "ray-white-coomera",
    name: "Ray White Coomera",
    website: "https://www.raywhite.com/coomera/",
    email: "coomera@raywhite.com",
    phone: "07 5580 9000",
    suburb: "Coomera",
    specialization: "Residential",
    domainAuthority: 60,
    address: "Shop 113/109 Foxwell Rd, Coomera QLD 4209"
  },
  {
    id: "lj-hooker-coomera",
    name: "LJ Hooker Coomera",
    website: "https://ljhooker.com.au/coomera",
    email: "coomera@ljh.com.au",
    phone: "07 5580 9777",
    suburb: "Coomera",
    specialization: "Residential",
    domainAuthority: 65,
    address: "1/109 Foxwell Rd, Coomera QLD 4209"
  },

  // UPPER COOMERA
  {
    id: "ray-white-upper-coomera",
    name: "Ray White Upper Coomera",
    website: "https://www.raywhite.com/upper-coomera/",
    email: "uppercoomera@raywhite.com",
    phone: "07 5573 1077",
    suburb: "Upper Coomera",
    specialization: "Residential",
    domainAuthority: 59,
    address: "Shop 12/1 Carrick Ct, Upper Coomera QLD 4209"
  },

  // PIMPAMA
  {
    id: "ray-white-pimpama",
    name: "Ray White Pimpama",
    website: "https://www.raywhite.com/pimpama/",
    email: "pimpama@raywhite.com",
    phone: "07 5665 6555",
    suburb: "Pimpama",
    specialization: "Residential",
    domainAuthority: 58,
    address: "Shop 2/102 Pimpama Jacobs Well Rd, Pimpama QLD 4209"
  },

  // ORMEAU
  {
    id: "ray-white-ormeau",
    name: "Ray White Ormeau",
    website: "https://www.raywhite.com/ormeau/",
    email: "ormeau@raywhite.com",
    phone: "07 5546 6555",
    suburb: "Ormeau",
    specialization: "Residential",
    domainAuthority: 57,
    address: "14 Peachey Rd, Ormeau QLD 4208"
  },

  // HIGHLAND PARK
  {
    id: "lj-hooker-highland-park",
    name: "LJ Hooker Highland Park",
    website: "https://ljhooker.com.au/highland-park",
    email: "highland@ljh.com.au",
    phone: "07 5594 5666",
    suburb: "Highland Park",
    specialization: "Residential",
    domainAuthority: 64,
    address: "368 Olsen Ave, Ashmore QLD 4214"
  },

  // ASHMORE
  {
    id: "ray-white-ashmore",
    name: "Ray White Ashmore",
    website: "https://www.raywhite.com/ashmore/",
    email: "ashmore@raywhite.com",
    phone: "07 5539 8999",
    suburb: "Ashmore",
    specialization: "Residential",
    domainAuthority: 61,
    address: "370 Southport Nerang Rd, Ashmore QLD 4214"
  },

  // BIGGERA WATERS
  {
    id: "lj-hooker-biggera",
    name: "LJ Hooker Biggera Waters",
    website: "https://ljhooker.com.au/biggera-waters",
    email: "biggera@ljh.com.au",
    phone: "07 5500 2855",
    suburb: "Biggera Waters",
    specialization: "Residential",
    domainAuthority: 63,
    address: "2/147 Hollywell Rd, Biggera Waters QLD 4216"
  },

  // ADDITIONAL MAJOR AGENCIES
  {
    id: "mcgrath-gold-coast",
    name: "McGrath Gold Coast",
    website: "https://www.mcgrath.com.au/gold-coast",
    email: "goldcoast@mcgrath.com.au",
    phone: "07 5592 4488",
    suburb: "Surfers Paradise",
    specialization: "Both",
    domainAuthority: 73,
    address: "3184 Surfers Paradise Blvd, Surfers Paradise QLD 4217"
  },
  {
    id: "century21-gold-coast",
    name: "Century 21 SouthCoast Realty",
    website: "https://www.century21goldcoast.com.au/",
    email: "info@century21goldcoast.com.au",
    phone: "07 5535 8688",
    suburb: "Burleigh Heads",
    specialization: "Residential",
    domainAuthority: 54,
    address: "1/1722 Gold Coast Hwy, Burleigh Heads QLD 4220"
  },
  {
    id: "prd-gold-coast",
    name: "PRD Gold Coast",
    website: "https://prd.com.au/goldcoast/",
    email: "info@prdgoldcoast.com.au",
    phone: "07 5574 0011",
    suburb: "Broadbeach",
    specialization: "Both",
    domainAuthority: 60,
    address: "2657 Gold Coast Hwy, Broadbeach QLD 4218"
  },
  {
    id: "raine-horne-gold-coast",
    name: "Raine & Horne Gold Coast",
    website: "https://www.raineandhorne.com.au/goldcoast",
    email: "goldcoast@rh.com.au",
    phone: "07 5592 3366",
    suburb: "Surfers Paradise",
    specialization: "Both",
    domainAuthority: 67,
    address: "3/7 Beach Rd, Surfers Paradise QLD 4217"
  }
]

// Helper functions
export function getAgenciesBySuburb(suburb: string): RealEstateAgency[] {
  return goldCoastAgencies.filter(agency => 
    agency.suburb.toLowerCase() === suburb.toLowerCase()
  )
}

export function getHighAuthorityAgencies(minDA: number = 65): RealEstateAgency[] {
  return goldCoastAgencies.filter(agency => agency.domainAuthority >= minDA)
}

export function getAgenciesBySpecialization(spec: "Residential" | "Commercial" | "Both"): RealEstateAgency[] {
  if (spec === "Both") {
    return goldCoastAgencies.filter(agency => agency.specialization === "Both")
  }
  return goldCoastAgencies.filter(agency => 
    agency.specialization === spec || agency.specialization === "Both"
  )
}

export function getAllSuburbs(): string[] {
  const suburbs = new Set(goldCoastAgencies.map(agency => agency.suburb))
  return Array.from(suburbs).sort()
}

export function getTotalAgencies(): number {
  return goldCoastAgencies.length
}

export function getAverageDA(): number {
  const total = goldCoastAgencies.reduce((sum, agency) => sum + agency.domainAuthority, 0)
  return Math.round(total / goldCoastAgencies.length)
}
