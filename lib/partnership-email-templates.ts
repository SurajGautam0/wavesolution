// Partnership Email Templates for Backlink Acquisition
// Optimized for getting website listings + backlinks from Gold Coast businesses

export interface EmailTemplate {
  id: string
  name: string
  subject: string
  body: string
  targetType: string
  expectedDA: string
  purpose: string
}

export const partnershipEmailTemplates: EmailTemplate[] = [
  // Template 1: Real Estate Agency Partnership
  {
    id: "real-estate-partnership",
    name: "Real Estate Agency Partnership",
    subject: "Cleaning Partnership - {{AGENCY_NAME}}",
    body: `Hi {{CONTACT_NAME}},

I noticed {{AGENCY_NAME}} manages many rental properties in {{SUBURB}}. We're Wave Solution, a Gold Coast cleaning company specializing in bond cleaning with a 100% bond-back guarantee.

We'd love to become your preferred cleaning partner. Here's what we offer:
• 15% discount for all your clients and tenants
• 24/7 availability for urgent move-outs
• Free quotes within 2 hours
• Priority booking for your properties
• Bond-back guarantee (we re-clean free if bond is withheld)

Could we add Wave Solution to your "Recommended Services" or "Preferred Partners" page on {{WEBSITE}}? We're happy to feature {{AGENCY_NAME}} on our partners page as well.

Would you be available for a quick 10-minute call this week to discuss?

Best regards,
Suraj Gautam
Director, Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Real Estate Agency",
    expectedDA: "60-75",
    purpose: "Get listed on agency website (high-value backlink) + ongoing client referrals"
  },

  // Template 2: Property Manager B2B
  {
    id: "property-manager-b2b",
    name: "Property Manager Partnership",
    subject: "Exclusive Cleaning Partnership for {{COMPANY_NAME}}",
    body: `Hi {{CONTACT_NAME}},

My name is Suraj from Wave Solution. We specialize in end-of-lease and bond cleaning for property management companies across Gold Coast.

I noticed {{COMPANY_NAME}} manages a large portfolio in {{SUBURB}}. We'd love to become your go-to cleaning partner for:
• Bond cleaning (guaranteed bond back)
• Routine property maintenance cleaning
• Between-tenant turnovers
• Carpet steam cleaning
• Pest control coordination

**Special offer for {{COMPANY_NAME}}:**
• 20% discount on all services
• Same-day quotes
• 48-hour turnaround guarantee
• Direct billing (no tenant involvement needed)
• Free property condition reports

Could we list each other as preferred partners on our websites? This would make it easy for your clients to find us, and we'll promote {{COMPANY_NAME}} to our customer base.

Are you free for a brief call this week?

Regards,
Suraj Gautam
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Property Management Company",
    expectedDA: "55-70",
    purpose: "High-volume commercial partnership + website backlink exchange"
  },

  // Template 3: Airbnb Host Partnership
  {
    id: "airbnb-host-partnership",
    name: "Airbnb Property Manager Offer",
    subject: "Professional Cleaning for Your Airbnb Properties - {{LOCATION}}",
    body: `Hi {{CONTACT_NAME}},

I came across your Airbnb listings in {{LOCATION}} and wanted to reach out. We're Wave Solution, specializing in Airbnb turnover cleaning for hosts with multiple properties on the Gold Coast.

We understand the pressure of tight turnarounds between guests. Our service:
• Same-day cleaning (even 2-hour turnarounds!)
• Professional linen service available
• Before/after photos for every clean
• Dedicated cleaner assigned to your properties
• 15% discount for weekly recurring bookings

**What makes us different:**
We're fully insured, police-checked, and have cleaned 500+ Airbnb properties in Gold Coast. Many of our clients list us as a "recommended service" on their Airbnb profiles and websites.

Would you be interested in a trial clean? First clean is 10% off to prove our quality.

Also, if you have a website or blog about property investment, we'd love to be featured as your preferred cleaning partner (and we'll do the same for you!).

Quick call this week?

Cheers,
Suraj
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Airbnb Host / Property Manager",
    expectedDA: "40-60",
    purpose: "Recurring business + potential blog/website backlink from property investors"
  },

  // Template 4: Commercial Office Partnership
  {
    id: "commercial-office-cleaning",
    name: "Commercial Office Cleaning Partnership",
    subject: "Professional Office Cleaning - {{COMPANY_NAME}}, {{LOCATION}}",
    body: `Hi {{CONTACT_NAME}},

I'm Suraj from Wave Solution. We provide commercial cleaning services for offices, coworking spaces, and business centers across Gold Coast.

I noticed {{COMPANY_NAME}} has a professional workspace in {{LOCATION}}. We specialize in:
• Daily/weekly office cleaning
• Carpet steam cleaning
• Window cleaning
• Deep cleans (quarterly/annual)
• COVID-19 sanitization
• Pest control services

**Corporate rates:**
• Flexible scheduling (after-hours available)
• Month-to-month contracts (no lock-in)
• Fully insured and ABN registered
• Eco-friendly products available
• Free trial clean to demonstrate quality

Many of our corporate clients feature us on their "Building Services" or "Facilities" pages. Would {{COMPANY_NAME}} be interested in a partnership page exchange?

I'd love to provide a free quote for your space. Are you available for a site visit this week?

Best,
Suraj Gautam
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Office / Coworking Space",
    expectedDA: "45-65",
    purpose: "Monthly recurring revenue + corporate website backlink"
  },

  // Template 5: Follow-Up Email (No Response)
  {
    id: "follow-up-no-response",
    name: "Follow-Up After No Response",
    subject: "Re: Cleaning Partnership - {{BUSINESS_NAME}}",
    body: `Hi {{CONTACT_NAME}},

Just following up on my email from last week about a cleaning partnership between Wave Solution and {{BUSINESS_NAME}}.

I know you're busy, so I'll keep this brief: **We'd like to offer {{BUSINESS_NAME}} an exclusive 20% discount** on all cleaning services for your clients/tenants.

In return, we're looking to be featured as a recommended partner on your website (we'll do the same for you on wavesolution.com.au).

**Quick stats:**
✓ 500+ properties cleaned in Gold Coast
✓ 4.9/5 star rating (120+ reviews)
✓ Fully insured, police-checked team
✓ Same-day quotes, 48-hour service guarantee

Would you be open to a 5-minute call? I can share how we've helped similar {{BUSINESS_TYPE}} save time and keep clients happy.

Reply with "YES" and I'll send my calendar link!

Regards,
Suraj
Wave Solution
0450 833 683
wavesolution.com.au

P.S. - We're currently offering a FREE trial clean for new partners. Limited spots available!`,
    targetType: "Any business (follow-up)",
    expectedDA: "N/A",
    purpose: "Re-engage cold leads with urgency and social proof"
  },

  // Template 6: Restaurant/Cafe Partnership
  {
    id: "restaurant-cafe-cleaning",
    name: "Restaurant & Cafe Commercial Cleaning",
    subject: "Professional Kitchen & Restaurant Cleaning - {{RESTAURANT_NAME}}",
    body: `Hi {{CONTACT_NAME}},

I'm Suraj from Wave Solution. We specialize in commercial cleaning for restaurants, cafes, and food businesses on the Gold Coast.

I love what you're doing at {{RESTAURANT_NAME}} in {{LOCATION}}! We'd be interested in providing:
• Nightly kitchen deep cleans
• Front-of-house cleaning
• Grease trap cleaning
• Exhaust hood cleaning
• Floor sealing and polishing
• Pest control services

**Food industry specialists:**
• Understand health and safety requirements
• Eco-friendly, food-safe products
• Flexible hours (after closing)
• Emergency cleaning available 24/7

Many of our hospitality clients list us on their website's "Partners" or "Services" pages. We'd love to do a backlink exchange with {{RESTAURANT_NAME}}.

Could I provide a free quote for your space?

Best,
Suraj Gautam
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Restaurant / Cafe",
    expectedDA: "35-55",
    purpose: "High-frequency cleaning contracts + local business backlink"
  },

  // Template 7: Gym/Fitness Center Partnership
  {
    id: "gym-fitness-cleaning",
    name: "Gym & Fitness Center Cleaning",
    subject: "Professional Gym Cleaning Services - {{GYM_NAME}}",
    body: `Hi {{CONTACT_NAME}},

My name is Suraj from Wave Solution. We provide specialized cleaning services for gyms and fitness centers on the Gold Coast.

I've seen great reviews for {{GYM_NAME}}, and I wanted to reach out about our cleaning services:
• Daily gym floor cleaning
• Equipment sanitization (post-COVID protocols)
• Locker room deep cleans
• Shower and bathroom cleaning
• Window and mirror cleaning
• Carpet and upholstery cleaning

**Gym-specific experience:**
• Understand high-traffic cleaning needs
• Hospital-grade disinfectants
• Flexible scheduling (early morning or late night)
• Membership discount program setup

We'd love to partner with {{GYM_NAME}} and be listed on your "Facilities" or "Partners" page. In return, we'll promote your gym to our 2,000+ Gold Coast customers.

Free trial clean available! Are you interested?

Regards,
Suraj
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Gym / Fitness Center",
    expectedDA: "40-60",
    purpose: "Recurring business + health/fitness website backlink"
  },

  // Template 8: Hotel/Accommodation Partnership
  {
    id: "hotel-accommodation-cleaning",
    name: "Hotel & Accommodation Partnership",
    subject: "Professional Accommodation Cleaning - {{HOTEL_NAME}}, Gold Coast",
    body: `Hi {{CONTACT_NAME}},

I'm Suraj from Wave Solution. We specialize in cleaning services for hotels, motels, and accommodation providers on the Gold Coast.

{{HOTEL_NAME}} has excellent reviews, and we'd love to support your operations with:
• Daily room servicing
• Deep cleaning between guests
• Linen service coordination
• Common area maintenance
• Emergency cleaning (spillages, damages)
• Carpet steam cleaning

**Accommodation industry experts:**
• Fast turnaround times (2-4 hours per room)
• Quality control checklists
• Trained in hospitality standards
• Fully insured team with police checks

Many accommodation providers we work with list us as a recommended partner on their websites. Would {{HOTEL_NAME}} be interested in a mutual promotion?

We're offering a discounted trial for new hotel partners. Can I send you a custom quote?

Best regards,
Suraj Gautam
Wave Solution
0450 833 683
wavesolution.com.au`,
    targetType: "Hotel / Accommodation",
    expectedDA: "50-70",
    purpose: "High-volume contract + tourism website backlink"
  }
]

// Helper functions
export function getTemplateById(id: string): EmailTemplate | undefined {
  return partnershipEmailTemplates.find(template => template.id === id)
}

export function getTemplatesByTargetType(targetType: string): EmailTemplate[] {
  return partnershipEmailTemplates.filter(template => 
    template.targetType.toLowerCase().includes(targetType.toLowerCase())
  )
}

export function fillTemplate(
  template: EmailTemplate,
  replacements: Record<string, string>
): { subject: string; body: string } {
  let subject = template.subject
  let body = template.body

  // Replace all placeholders
  Object.entries(replacements).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`
    subject = subject.replace(new RegExp(placeholder, 'g'), value)
    body = body.replace(new RegExp(placeholder, 'g'), value)
  })

  return { subject, body }
}

// Suggested replacements for each template
export const templatePlaceholders: Record<string, string[]> = {
  "real-estate-partnership": ["AGENCY_NAME", "CONTACT_NAME", "SUBURB", "WEBSITE"],
  "property-manager-b2b": ["COMPANY_NAME", "CONTACT_NAME", "SUBURB"],
  "airbnb-host-partnership": ["CONTACT_NAME", "LOCATION"],
  "commercial-office-cleaning": ["COMPANY_NAME", "CONTACT_NAME", "LOCATION"],
  "follow-up-no-response": ["CONTACT_NAME", "BUSINESS_NAME", "BUSINESS_TYPE"],
  "restaurant-cafe-cleaning": ["RESTAURANT_NAME", "CONTACT_NAME", "LOCATION"],
  "gym-fitness-cleaning": ["GYM_NAME", "CONTACT_NAME"],
  "hotel-accommodation-cleaning": ["HOTEL_NAME", "CONTACT_NAME"]
}
