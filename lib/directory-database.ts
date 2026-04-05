// Directory Submission Database for Backlink Building
// Based on BACKLINK-ROADMAP-6-MONTHS.md Week 1-4 plan

export interface Directory {
  id: string
  name: string
  url: string
  category: string
  domainAuthority: number
  priority: "high" | "medium" | "low"
  weekNumber: number
  estimatedTime: string // Time to complete submission
  submissionNotes: string
  backlinkType: "dofollow" | "nofollow" | "mixed"
}

export const directoryDatabase: Directory[] = [
  // ===== WEEK 1: THE BIG 5 (Highest Priority) =====
  {
    id: "google-business-profile",
    name: "Google Business Profile",
    url: "https://business.google.com/create",
    category: "Search Engine",
    domainAuthority: 100,
    priority: "high",
    weekNumber: 1,
    estimatedTime: "2 hours",
    submissionNotes: "CRITICAL! Claim and verify. Add ALL services, 15+ photos, business hours, attributes (insured, eco-friendly, etc.). Complete profile 100%. This is your #1 local SEO asset!",
    backlinkType: "dofollow"
  },
  {
    id: "yelp-australia",
    name: "Yelp for Business Australia",
    url: "https://biz.yelp.com.au",
    category: "Review Site",
    domainAuthority: 93,
    priority: "high",
    weekNumber: 1,
    estimatedTime: "30 minutes",
    submissionNotes: "Create detailed business profile. Add 10+ photos. Request reviews from 5 happy customers. Respond to all reviews promptly.",
    backlinkType: "dofollow"
  },
  {
    id: "yellow-pages-australia",
    name: "Yellow Pages Australia",
    url: "https://www.yellowpages.com.au/claim",
    category: "Local Directory",
    domainAuthority: 87,
    priority: "high",
    weekNumber: 1,
    estimatedTime: "30 minutes",
    submissionNotes: "Claim existing listing or create new. Complete all fields. Add services, hours, photos. Very high DA value.",
    backlinkType: "dofollow"
  },
  {
    id: "true-local",
    name: "True Local",
    url: "https://www.truelocal.com.au/business-owners",
    category: "Local Directory",
    domainAuthority: 78,
    priority: "high",
    weekNumber: 1,
    estimatedTime: "30 minutes",
    submissionNotes: "Australia's top local directory. Add detailed description, all services, photos. Encourage customer reviews.",
    backlinkType: "dofollow"
  },
  {
    id: "facebook-business",
    name: "Facebook Business Page",
    url: "https://www.facebook.com/business/pages/create",
    category: "Social Media",
    domainAuthority: 96,
    priority: "high",
    weekNumber: 1,
    estimatedTime: "1 hour",
    submissionNotes: "If not already optimized. Add all services, photos, contact info, business hours. Post regularly. Join local Gold Coast groups.",
    backlinkType: "nofollow"
  },

  // ===== WEEK 2: POWER DIRECTORIES =====
  {
    id: "white-pages",
    name: "White Pages Australia",
    url: "https://www.whitepages.com.au/business-registration",
    category: "Local Directory",
    domainAuthority: 84,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "20 minutes",
    submissionNotes: "Major Australian directory. Add business details, contact info, opening hours.",
    backlinkType: "dofollow"
  },
  {
    id: "start-local",
    name: "Start Local",
    url: "https://www.startlocal.com.au/add-listing",
    category: "Local Directory",
    domainAuthority: 65,
    priority: "medium",
    weekNumber: 2,
    estimatedTime: "20 minutes",
    submissionNotes: "Australian local business directory. Complete profile with services and contact details.",
    backlinkType: "dofollow"
  },
  {
    id: "hotfrog",
    name: "Hotfrog Australia",
    url: "https://www.hotfrog.com.au/add-business",
    category: "Local Directory",
    domainAuthority: 61,
    priority: "medium",
    weekNumber: 2,
    estimatedTime: "15 minutes",
    submissionNotes: "Global directory with strong Australian presence. Good for local SEO.",
    backlinkType: "dofollow"
  },
  {
    id: "aussieweb",
    name: "Aussie Web",
    url: "https://www.aussieweb.com.au/submit.html",
    category: "Australian Directory",
    domainAuthority: 52,
    priority: "medium",
    weekNumber: 2,
    estimatedTime: "15 minutes",
    submissionNotes: "Australian-specific directory. Choose correct category: Home & Garden > Cleaning Services.",
    backlinkType: "dofollow"
  },
  {
    id: "localsearch",
    name: "Local Search (Sensis)",
    url: "https://www.localsearch.com.au/",
    category: "Local Directory",
    domainAuthority: 72,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "25 minutes",
    submissionNotes: "Owned by Sensis (Yellow Pages parent). Premium business directory. Complete detailed profile.",
    backlinkType: "dofollow"
  },
  {
    id: "whereis",
    name: "Whereis Business",
    url: "https://www.whereis.com/",
    category: "Maps Directory",
    domainAuthority: 68,
    priority: "medium",
    weekNumber: 2,
    estimatedTime: "20 minutes",
    submissionNotes: "Australian map and directory service. Ensure accurate location and contact details.",
    backlinkType: "dofollow"
  },
  {
    id: "bing-places",
    name: "Bing Places for Business",
    url: "https://www.bingplaces.com/",
    category: "Search Engine",
    domainAuthority: 95,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "30 minutes",
    submissionNotes: "Microsoft's business listing platform. Import from Google Business Profile to save time.",
    backlinkType: "dofollow"
  },
  {
    id: "apple-maps-connect",
    name: "Apple Maps Connect",
    url: "https://mapsconnect.apple.com/",
    category: "Maps",
    domainAuthority: 98,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "30 minutes",
    submissionNotes: "Apple Maps business listing. Important for iPhone users. Complete all fields.",
    backlinkType: "dofollow"
  },

  // ===== WEEK 3-4: LOCAL GOLD COAST DIRECTORIES =====
  {
    id: "gold-coast-directory",
    name: "Gold Coast Directory",
    url: "https://www.goldcoastdirectory.com.au/",
    category: "Regional Directory",
    domainAuthority: 38,
    priority: "medium",
    weekNumber: 3,
    estimatedTime: "15 minutes",
    submissionNotes: "Local Gold Coast specific directory. Great for local SEO and regional targeting.",
    backlinkType: "dofollow"
  },
  {
    id: "gold-coast-tourism",
    name: "Gold Coast Tourism Business",
    url: "https://www.destinationgoldcoast.com/",
    category: "Tourism Directory",
    domainAuthority: 56,
    priority: "medium",
    weekNumber: 3,
    estimatedTime: "25 minutes",
    submissionNotes: "Tourism and business directory. Position as service for holiday rentals and tourists.",
    backlinkType: "dofollow"
  },
  {
    id: "find-a-business-australia",
    name: "Find a Business Australia",
    url: "https://www.findabusinessaustralia.com.au/",
    category: "National Directory",
    domainAuthority: 42,
    priority: "low",
    weekNumber: 3,
    estimatedTime: "10 minutes",
    submissionNotes: "Australian business directory. Quick submission, basic listing.",
    backlinkType: "dofollow"
  },
  {
    id: "brownbook",
    name: "Brownbook Australia",
    url: "https://www.brownbook.net/",
    category: "International Directory",
    domainAuthority: 58,
    priority: "medium",
    weekNumber: 3,
    estimatedTime: "15 minutes",
    submissionNotes: "International directory with Australian section. Good additional backlink.",
    backlinkType: "dofollow"
  },
  {
    id: "tupalo",
    name: "Tupalo Australia",
    url: "https://tupalo.com/",
    category: "International Directory",
    domainAuthority: 54,
    priority: "low",
    weekNumber: 3,
    estimatedTime: "10 minutes",
    submissionNotes: "Global local search directory. Select Australia > Queensland > Gold Coast.",
    backlinkType: "dofollow"
  },
  {
    id: "yalwa-australia",
    name: "Yalwa Australia",
    url: "https://www.yalwa.com.au/",
    category: "Local Directory",
    domainAuthority: 49,
    priority: "low",
    weekNumber: 3,
    estimatedTime: "10 minutes",
    submissionNotes: "Australian local business directory. Quick basic listing.",
    backlinkType: "dofollow"
  },
  {
    id: "cylex-australia",
    name: "Cylex Australia",
    url: "https://www.cylex.com.au/",
    category: "Business Directory",
    domainAuthority: 56,
    priority: "medium",
    weekNumber: 4,
    estimatedTime: "15 minutes",
    submissionNotes: "Global business directory with Australian section. Add detailed description.",
    backlinkType: "dofollow"
  },
  {
    id: "opendi-australia",
    name: "Opendi Australia",
    url: "https://www.opendi.com.au/",
    category: "Business Directory",
    domainAuthority: 47,
    priority: "low",
    weekNumber: 4,
    estimatedTime: "10 minutes",
    submissionNotes: "International directory with Australian listings.",
    backlinkType: "dofollow"
  },

  // ===== SOCIAL MEDIA PLATFORMS (Week 2-3) =====
  {
    id: "instagram-business",
    name: "Instagram Business Profile",
    url: "https://business.instagram.com/",
    category: "Social Media",
    domainAuthority: 98,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "1 hour",
    submissionNotes: "Convert to business account. Add website link in bio. Post before/after cleaning photos 3x per week. Use hashtags: #goldcoastcleaning #bondcleaning #cleaningservices",
    backlinkType: "nofollow"
  },
  {
    id: "linkedin-company",
    name: "LinkedIn Company Page",
    url: "https://www.linkedin.com/company/setup/new/",
    category: "Professional Network",
    domainAuthority: 99,
    priority: "high",
    weekNumber: 2,
    estimatedTime: "45 minutes",
    submissionNotes: "Create company page. Add logo, banner, detailed description. Post weekly content. Connect with Gold Coast property managers and real estate agents.",
    backlinkType: "dofollow"
  },
  {
    id: "twitter-business",
    name: "X (Twitter) Business",
    url: "https://twitter.com/",
    category: "Social Media",
    domainAuthority: 95,
    priority: "medium",
    weekNumber: 3,
    estimatedTime: "30 minutes",
    submissionNotes: "Create business profile. Add website link. Post cleaning tips, customer testimonials. Engage with local Gold Coast accounts.",
    backlinkType: "nofollow"
  },

  // ===== INDUSTRY-SPECIFIC DIRECTORIES (Month 2) =====
  {
    id: "service-seeking",
    name: "Service Seeking",
    url: "https://www.serviceseeking.com.au/",
    category: "Service Marketplace",
    domainAuthority: 64,
    priority: "high",
    weekNumber: 5,
    estimatedTime: "1 hour",
    submissionNotes: "Major Australian service marketplace. Create detailed profile, respond to quote requests. Can generate leads + backlink.",
    backlinkType: "dofollow"
  },
  {
    id: "airtasker",
    name: "Airtasker Business",
    url: "https://www.airtasker.com/business/",
    category: "Service Marketplace",
    domainAuthority: 72,
    priority: "high",
    weekNumber: 5,
    estimatedTime: "45 minutes",
    submissionNotes: "Popular task marketplace. Profile with website link. Bid on cleaning tasks for exposure and backlink.",
    backlinkType: "dofollow"
  },
  {
    id: "hipages",
    name: "hipages",
    url: "https://hipages.com.au/",
    category: "Trade Directory",
    domainAuthority: 68,
    priority: "high",
    weekNumber: 5,
    estimatedTime: "1 hour",
    submissionNotes: "Leading Australian trade directory. Free profile with website link. Paid leads available. Strong backlink.",
    backlinkType: "dofollow"
  },
  {
    id: "oneflare",
    name: "Oneflare",
    url: "https://www.oneflare.com.au/",
    category: "Service Marketplace",
    domainAuthority: 61,
    priority: "medium",
    weekNumber: 5,
    estimatedTime: "30 minutes",
    submissionNotes: "Australian service marketplace. Create business profile, add services, respond to quote requests.",
    backlinkType: "dofollow"
  },
  {
    id: "bark",
    name: "Bark Australia",
    url: "https://www.bark.com/en/au/",
    category: "Service Marketplace",
    domainAuthority: 75,
    priority: "high",
    weekNumber: 6,
    estimatedTime: "30 minutes",
    submissionNotes: "Global service marketplace with Australian section. Good DA, generates leads.",
    backlinkType: "dofollow"
  },
  {
    id: "true-local-services",
    name: "True Local Services",
    url: "https://www.truelocal.com.au/business-services",
    category: "Service Directory",
    domainAuthority: 78,
    priority: "high",
    weekNumber: 6,
    estimatedTime: "20 minutes",
    submissionNotes: "Premium True Local business profile. Enhanced listing with services catalog.",
    backlinkType: "dofollow"
  },

  // ===== REVIEW PLATFORMS (Month 2-3) =====
  {
    id: "product-review",
    name: "Product Review Australia",
    url: "https://www.productreview.com.au/",
    category: "Review Platform",
    domainAuthority: 70,
    priority: "medium",
    weekNumber: 7,
    estimatedTime: "30 minutes",
    submissionNotes: "Australian review platform. Claim business listing. Encourage customer reviews. High trust signal.",
    backlinkType: "dofollow"
  },
  {
    id: "trustpilot-australia",
    name: "Trustpilot Australia",
    url: "https://au.trustpilot.com/",
    category: "Review Platform",
    domainAuthority: 92,
    priority: "high",
    weekNumber: 7,
    estimatedTime: "45 minutes",
    submissionNotes: "Global review platform. Create business profile. Actively collect reviews. Very high DA value.",
    backlinkType: "dofollow"
  },

  // ===== NICHE CLEANING DIRECTORIES (Month 3) =====
  {
    id: "best-cleaning-services",
    name: "Best Cleaning Services Australia",
    url: "https://www.bestcleaningservices.com.au/",
    category: "Cleaning Directory",
    domainAuthority: 35,
    priority: "low",
    weekNumber: 9,
    estimatedTime: "15 minutes",
    submissionNotes: "Cleaning industry specific directory. Niche relevance important for SEO.",
    backlinkType: "dofollow"
  },
  {
    id: "cleaners-near-me",
    name: "Cleaners Near Me",
    url: "https://www.cleanersnearme.com.au/",
    category: "Cleaning Directory",
    domainAuthority: 32,
    priority: "low",
    weekNumber: 9,
    estimatedTime: "10 minutes",
    submissionNotes: "Australian cleaning services directory. Geolocation-based.",
    backlinkType: "dofollow"
  },

  // ===== QUEENSLAND-SPECIFIC DIRECTORIES (Month 3) =====
  {
    id: "queensland-business-directory",
    name: "Queensland Business Directory",
    url: "https://www.queensland.com/au/en/businesses",
    category: "Regional Directory",
    domainAuthority: 68,
    priority: "medium",
    weekNumber: 10,
    estimatedTime: "20 minutes",
    submissionNotes: "State government tourism and business directory. Strong regional signal.",
    backlinkType: "dofollow"
  },

  // ===== BONUS DIRECTORIES (Ongoing) =====
  {
    id: "scoop-australia",
    name: "Scoop Australia",
    url: "https://www.scoop.com.au/",
    category: "Local Directory",
    domainAuthority: 51,
    priority: "low",
    weekNumber: 12,
    estimatedTime: "10 minutes",
    submissionNotes: "Australian local business directory. Quick submission.",
    backlinkType: "dofollow"
  },
  {
    id: "yelp-international",
    name: "Yelp International",
    url: "https://www.yelp.com/",
    category: "Review Site",
    domainAuthority: 94,
    priority: "medium",
    weekNumber: 12,
    estimatedTime: "20 minutes",
    submissionNotes: "Main Yelp.com (not .au). Additional international presence.",
    backlinkType: "dofollow"
  },
  {
    id: "foursquare-business",
    name: "Foursquare for Business",
    url: "https://business.foursquare.com/",
    category: "Location Platform",
    domainAuthority: 92,
    priority: "medium",
    weekNumber: 13,
    estimatedTime: "25 minutes",
    submissionNotes: "Location-based platform. Powers many other apps. Good for discoverability.",
    backlinkType: "dofollow"
  },
  {
    id: "manta",
    name: "Manta",
    url: "https://www.manta.com/",
    category: "Business Directory",
    domainAuthority: 82,
    priority: "medium",
    weekNumber: 13,
    estimatedTime: "15 minutes",
    submissionNotes: "Global business directory. High DA, worth the submission.",
    backlinkType: "dofollow"
  },
  {
    id: "citysearch",
    name: "CitySearch",
    url: "https://www.citysearch.com.au/",
    category: "Local Directory",
    domainAuthority: 57,
    priority: "low",
    weekNumber: 14,
    estimatedTime: "10 minutes",
    submissionNotes: "Australian city-based business directory.",
    backlinkType: "dofollow"
  },
  {
    id: "ezlocal",
    name: "EZlocal",
    url: "https://ezlocal.com/",
    category: "Local Directory",
    domainAuthority: 66,
    priority: "medium",
    weekNumber: 14,
    estimatedTime: "15 minutes",
    submissionNotes: "US-based but accepts international listings. Good DA.",
    backlinkType: "dofollow"
  },
  {
    id: "mapquest-business",
    name: "MapQuest Business",
    url: "https://www.mapquest.com/",
    category: "Maps Directory",
    domainAuthority: 88,
    priority: "medium",
    weekNumber: 15,
    estimatedTime: "20 minutes",
    submissionNotes: "Map and direction service. Business listing available.",
    backlinkType: "dofollow"
  },
  {
    id: "waze-business",
    name: "Waze for Business",
    url: "https://www.waze.com/live-map/",
    category: "Navigation App",
    domainAuthority: 79,
    priority: "low",
    weekNumber: 15,
    estimatedTime: "15 minutes",
    submissionNotes: "Navigation app business listing. Good for local visibility.",
    backlinkType: "dofollow"
  }
]

// Helper functions
export function getDirectoriesByWeek(week: number): Directory[] {
  return directoryDatabase.filter(dir => dir.weekNumber === week)
}

export function getDirectoriesByPriority(priority: "high" | "medium" | "low"): Directory[] {
  return directoryDatabase.filter(dir => dir.priority === priority)
}

export function getHighAuthorityDirectories(minDA: number = 70): Directory[] {
  return directoryDatabase.filter(dir => dir.domainAuthority >= minDA)
}

export function getDirectoriesByCategory(category: string): Directory[] {
  return directoryDatabase.filter(dir => 
    dir.category.toLowerCase().includes(category.toLowerCase())
  )
}

export function getTotalDirectories(): number {
  return directoryDatabase.length
}

export function getAverageDA(): number {
  const total = directoryDatabase.reduce((sum, dir) => sum + dir.domainAuthority, 0)
  return Math.round(total / directoryDatabase.length)
}

export function getEstimatedTotalTime(): string {
  // Calculate total hours
  const totalMinutes = directoryDatabase.reduce((sum, dir) => {
    const timeString = dir.estimatedTime
    const hours = timeString.includes('hour') ? parseInt(timeString) || 0 : 0
    const minutes = timeString.includes('minute') ? parseInt(timeString.match(/(\d+)\s*minute/)?.[1] || '0') : 0
    return sum + (hours * 60) + minutes
  }, 0)
  
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  
  return `${hours} hours ${minutes} minutes`
}

export function getWeek1Summary() {
  const week1 = getDirectoriesByWeek(1)
  return {
    count: week1.length,
    avgDA: Math.round(week1.reduce((sum, d) => sum + d.domainAuthority, 0) / week1.length),
    directories: week1.map(d => d.name)
  }
}
