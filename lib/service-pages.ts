export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceSection = {
  title: string
  paragraphs: string[]
}

export type ServicePage = {
  slug: string
  shortLabel: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroDescription: string
  primaryKeyword: string
  keywords: string[]
  overview: string[]
  includedItems: string[]
  whyChooseUs: string[]
  sections: ServiceSection[]
  faqs: ServiceFaq[]
  relatedSlugs: string[]
}

const sharedWhyChooseUs = [
  "Fully insured cleaners with clear communication from quote to completion.",
  "Police-checked, respectful team members for homes, offices, and rental properties.",
  "Eco-friendly product options for family homes, workplaces, and sensitive indoor spaces.",
  "Local Gold Coast scheduling with fast response times and flexible booking options.",
  "Detailed cleaning checklists tailored to the property type, timing, and service goals.",
  "Easy follow-up support if you need to adjust scope, timing, or access details.",
]

export const servicePages: ServicePage[] = [
  {
    slug: "cleaning-gold-coast",
    shortLabel: "Cleaning Services",
    navLabel: "Cleaning Services",
    metaTitle: "Cleaning Services Gold Coast | Home, Office & Bond Cleaners",
    metaDescription:
      "Professional cleaning services across the Gold Coast for homes, rental vacates, offices, and commercial spaces. Fully insured, police-checked local team. Get a quote today.",
    heroEyebrow: "Gold Coast Cleaning Services Hub",
    heroTitle: "Cleaning Services on the Gold Coast",
    heroDescription:
      "Whether you need recurring domestic cleaning, an inspection-ready bond clean, or dependable workplace maintenance, Wave Solution delivers consistent, high-standard property care across the Gold Coast.",
    primaryKeyword: "cleaning services Gold Coast",
    keywords: [
      "cleaning services Gold Coast",
      "cleaners Gold Coast",
      "house cleaning Gold Coast",
      "commercial cleaning Gold Coast",
      "bond cleaning Gold Coast",
    ],
    overview: [
      "Finding the right cleaning team should be simple. You want reliable cleaners who arrive on schedule, communicate clearly, and leave your property noticeably cleaner, fresher, and properly sanitized. At Wave Solution, we provide dependable domestic, commercial, and move-out cleaning across the Gold Coast without lock-in contracts or hidden fees.",
      "Different properties require different levels of care. A family home in Robina needs practical routine upkeep; a coastal apartment in Surfers Paradise requires attention to salt spray and sliding tracks; while a rental bond clean in Southport demands strict adherence to Queensland tenancy inspection checklists. This guide helps you identify the right service for your situation.",
      "Every clean is performed by our own trained, police-checked, and fully insured cleaners using professional equipment and eco-safe products. We service all major Gold Coast suburbs from Coolangatta to Coomera, ensuring dependable local support whenever you need it.",
    ],
    includedItems: [
      "Residential Cleaning: Flexible weekly, fortnightly, and one-off cleans for apartments, townhouses, and family homes",
      "Rental & Bond Cleaning: Comprehensive move-out cleans tailored to Queensland real estate exit requirements",
      "Office & Commercial Cleaning: Regular workplace hygiene, retail premises, medical suites, and strata common areas",
      "Deep & Spring Cleaning: Intensive top-to-bottom resets for kitchens, bathrooms, tiles, and high-touch areas",
      "Specialist Care: Carpet steam extraction, post-construction dust removal, and certified pest control",
      "Transparent Service: Tailored checklists, $10M public liability insurance, and satisfaction follow-up on every job",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Find the right service for your property",
        paragraphs: [
          "To make booking straightforward, our services are organized into four core categories: Residential, Rental Handover, Commercial, and Specialist care. If you need regular maintenance to keep up with daily life, our recurring house cleaning keeps kitchens, bathrooms, and floors continuously clean. If your home hasn't had deep attention in months, our one-off deep clean provides an intensive reset.",
          "For tenants moving out, our bond and end-of-lease cleaning focuses strictly on the items property managers scrutinize during final inspections. We methodically clean oven interiors, rangehood filters, window tracks, skirting boards, and bathroom tile grout to give you the best possible protection for your bond refund.",
        ],
      },
      {
        title: "Commercial and workplace cleaning solutions",
        paragraphs: [
          "For Gold Coast business owners and office managers, we provide flexible, after-hours cleaning programs designed around your operational schedule. Clean workplaces improve staff morale, reduce sick days, and create an impressive environment for clients.",
          "We service corporate offices, medical and dental clinics, retail shops, and communal strata facilities in commercial hubs including Southport, Robina, Broadbeach, and surrounding areas. Scope and frequency are customized to your foot traffic and hygiene requirements.",
        ],
      },
      {
        title: "What our 4-step cleaning process looks like",
        paragraphs: [
          "Step 1: Transparent Quote. Tell us your property size, location, and cleaning priorities. We provide an upfront estimate without hidden callout charges. Step 2: Custom Checklist. We assign a detailed task list matching your property type and specific focus areas.",
          "Step 3: Professional Execution. Our police-checked team arrives equipped with commercial HEPA vacuums, microfiber cleaning systems, and safe cleaning solutions. Step 4: Final Walkthrough. We review completed rooms to ensure every item meets our standard. If you are on site, we invite you to inspect before we finish.",
        ],
      },
      {
        title: "Who we help across the Gold Coast",
        paragraphs: [
          "We regularly work with busy families, working professionals, tenants preparing to vacate, property managers needing reliable turnarounds, and local businesses that value dependable presentation. Having an accountable, insured cleaning team means you can focus on work and family while knowing your property is in capable hands.",
          "We operate throughout the Gold Coast region, including Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Nerang, Helensvale, Coomera, and Varsity Lakes. Contact our local team today to discuss your cleaning requirements.",
        ],
      },
    ],
    faqs: [
      {
        question: "What cleaning services do you offer across the Gold Coast?",
        answer:
          "We offer house cleaning, office cleaning, bond cleaning, end of lease cleaning, commercial cleaning, deep cleaning, carpet cleaning, after builders cleaning, move-in cleaning, and pest control across key Gold Coast suburbs.",
      },
      {
        question: "Do you clean homes, offices, and rental properties?",
        answer:
          "Yes. Wave Solution supports domestic, workplace, rental, and commercial cleaning jobs depending on the service required and your location.",
      },
      {
        question: "Which Gold Coast suburbs do you service?",
        answer:
          "We regularly service Southport, Robina, Surfers Paradise, Broadbeach, Nerang, Burleigh Heads, Palm Beach, Helensvale, Coomera, and nearby areas.",
      },
      {
        question: "How do I get a cleaning quote?",
        answer:
          "Use the booking page or contact form, or call 0450 833 683. We can quote based on service type, suburb, property size, and preferred timing.",
      },
      {
        question: "Are your cleaners insured and police checked?",
        answer:
          "Yes. All Wave Solution cleaners are fully insured and police checked for your peace of mind when inviting our team into your home, office, or rental property.",
      },
      {
        question: "Do you offer eco-friendly cleaning options?",
        answer:
          "Yes. We offer eco-friendly product options for households with children, pets, or sensitivity concerns. Just mention this preference when booking.",
      },
      {
        question: "Can I book a one-off clean or do I need a regular schedule?",
        answer:
          "Both options are available. We support one-off cleans, weekly, fortnightly, and monthly recurring schedules depending on the property type and your needs.",
      },
      {
        question: "How much does cleaning cost in the Gold Coast?",
        answer:
          "Pricing depends on the service type, property size, condition, and frequency. House cleaning starts from $120, bond cleaning from $250, and office cleaning from $200. Contact us for a tailored local quote.",
      },
      {
        question: "Do I need to be home during the clean?",
        answer:
          "Not necessarily. Many clients arrange access and aren't present during the clean. We discuss access details during the booking process to make sure the job runs smoothly.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking as early as possible, especially for bond and end of lease cleaning where you may have a fixed inspection date. For regular house cleaning, a few days' notice is usually sufficient.",
      },
    ],
    relatedSlugs: [
      "house-cleaning-gold-coast",
      "office-cleaning-gold-coast",
      "bond-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "house-cleaning-gold-coast",
    shortLabel: "House Cleaning Gold Coast",
    navLabel: "House Cleaning",
    metaTitle: "House Cleaning Gold Coast | Weekly, Fortnightly & One-Off Cleans",
    metaDescription:
      "Professional house cleaning in the Gold Coast for apartments, family homes and holiday properties. Weekly, fortnightly and one-off cleans available.",
    heroEyebrow: "Local House Cleaners",
    heroTitle: "House Cleaning Gold Coast",
    heroDescription:
      "Book reliable house cleaning in the Gold Coast for apartments, townhouses, family homes, and holiday properties. Flexible weekly, fortnightly, and one-off cleans available.",
    primaryKeyword: "house cleaning Gold Coast",
    keywords: [
      "house cleaning Gold Coast",
      "home cleaning Gold Coast",
      "local house cleaners",
      "regular cleaning Gold Coast",
      "weekly cleaning Gold Coast",
      "fortnightly cleaning Gold Coast",
      "one off cleaning Gold Coast",
      "spring cleaning Gold Coast",
      "domestic cleaning Gold Coast",
      "housekeeper Gold Coast",
      "maid service Gold Coast",
    ],
    overview: [
      "Keeping a Gold Coast home clean shouldn't take over your weekends. Routine chores like scrubbing showers, wiping down kitchen benches, dusting sills, and vacuuming floors repeat endlessly. Our professional house cleaning service takes care of those ongoing tasks so you can enjoy a fresh, hygienic home without the stress.",
      "We offer completely flexible service options tailored to your lifestyle. Many of our clients choose weekly or fortnightly visits to keep their home consistently spotless and orderly. Others prefer a thorough one-off reset before hosting guests, after a busy month, or during seasonal transitions. We adapt our checklists to your property size, family priorities, and preferred schedule.",
      "Every clean is carried out by vetted, police-checked, and insured cleaners who treat your home with care and respect. We bring all required commercial supplies and eco-safe products, providing consistent results across apartments, townhouses, and freestanding family residences throughout the Gold Coast.",
    ],
    includedItems: [
      "Dusting, vacuuming, mopping, and general room presentation",
      "Bathroom cleaning, sanitising, and moisture-prone surface care",
      "Kitchen surface cleaning, sink detailing, and wipe-down of high-touch areas",
      "Weekly, fortnightly, monthly, and one-off house cleaning options",
      "Apartment, townhouse, and family-home cleaning across the Gold Coast",
      "Optional extras such as internal windows, ovens, fridges, and first-visit detail work",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Reliable weekly and fortnightly home cleaning",
        paragraphs: [
          "A regular house cleaning service should give you time back, not create more administration. We emphasize punctuality, clear communication, and consistent quality. By assigning the same trusted cleaner whenever possible, you benefit from someone who understands your household preferences and takes care of high-traffic zones naturally.",
          "Our regular service is ideal for busy parents, working professionals, retirees looking to reduce physical strain, and anyone wanting to reclaim their free time. We create a customized cleaning plan covering your bathrooms, kitchen, living spaces, and bedrooms on an agreed schedule.",
        ],
      },
      {
        title: "Tailored care for apartments, townhouses, and coastal residences",
        paragraphs: [
          "Gold Coast properties experience unique conditions. Beachside apartments in Surfers Paradise and Broadbeach deal with salt mist and sand accumulation in sliding tracks, while expansive family homes in Robina, Burleigh, and Southport require comprehensive floor care and multi-bathroom sanitisation.",
          "We tailor our techniques and equipment to your property's specific materials. From delicate stone countertops and timber floors to glass balustrades and stainless steel appliances, our team uses non-abrasive, pH-balanced products that protect your home's finishes while achieving a spotless result.",
        ],
      },
      {
        title: "Flexible scheduling and one-off intensive cleans",
        paragraphs: [
          "Not every home requires an ongoing weekly service. If you need a comprehensive reset before family arrives, after a period of illness, or simply to get on top of accumulated housework, our one-off cleaning service provides an intensive, room-by-room refresh.",
          "You can easily add specialty tasks such as interior oven degreasing, refrigerator sanitisation, interior window washing, or bed linen changes. Simply let us know your priorities when requesting an estimate.",
        ],
      },
      {
        title: "What to expect when booking with Wave Solution",
        paragraphs: [
          "Getting started is simple. Provide your suburb, home size (bedrooms and bathrooms), and preferred frequency, and we will supply an upfront, transparent estimate. You can choose to be home during the clean or arrange secure lockbox access while you are at work.",
          "Our cleaners follow a systematic checklist on every visit, ensuring nothing is overlooked. We back all work with our local satisfaction commitment: if any area doesn't meet your expectations, let us know within 24 hours and we will return to make it right.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often can I book house cleaning in the Gold Coast?",
        answer:
          "We offer weekly, fortnightly, monthly, and one-off house cleaning depending on your home and preferred routine.",
      },
      {
        question: "Do you clean apartments and townhouses as well as larger homes?",
        answer:
          "Yes. We clean apartments, units, townhouses, and family homes across the Gold Coast and tailor the quote to the property size and condition.",
      },
      {
        question: "Do I need to supply products or equipment?",
        answer:
          "No. We can bring the products and equipment needed for the agreed scope of work unless a site-specific arrangement is made in advance.",
      },
      {
        question: "Can I add extras like oven or fridge cleaning?",
        answer:
          "Yes. Extras such as internal windows, oven cleaning, fridge cleaning, and deeper first-visit detailing can be quoted separately.",
      },
      {
        question: "How much does house cleaning cost in the Gold Coast?",
        answer:
          "House cleaning starts from $120 per session. The final price depends on the size of your home, number of rooms, frequency, and any add-ons. Contact us for a fast tailored quote.",
      },
      {
        question: "Do your house cleaners work on weekends?",
        answer:
          "Yes. We offer flexible scheduling including weekends to fit around your routine. Mention your preferred day when booking and we'll confirm availability.",
      },
      {
        question: "What areas of the home are included in a standard house clean?",
        answer:
          "A standard house clean covers kitchens, bathrooms, bedrooms, living areas, vacuuming, mopping, and general surface dusting. Scope is confirmed at quoting based on your home.",
      },
      {
        question: "Is your cleaning service suitable for homes with pets or children?",
        answer:
          "Yes. We offer eco-friendly and non-toxic product options for families with children or pets. Let us know when booking and we'll use the right products for your household.",
      },
      {
        question: "Can I get the same cleaner each visit?",
        answer:
          "We aim for consistency where possible, especially for recurring cleans. This helps our team understand your home and deliver a better result each visit.",
      },
      {
        question: "What if I'm not happy with the clean?",
        answer:
          "We offer a satisfaction guarantee. If something has been missed or falls short of expectations, contact us promptly and we'll make it right.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "deep-cleaning-gold-coast",
      "bond-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
    ],
  },
  {
    slug: "bond-cleaning-gold-coast",
    shortLabel: "Bond Cleaning Gold Coast",
    navLabel: "Bond Cleaning",
    metaTitle: "Bond Cleaning Gold Coast | Detailed Move-Out Cleaning",
    metaDescription:
      "Thorough bond cleaning in the Gold Coast with agent-ready checklists for tenants, landlords and property managers. Request a quote for your move-out clean.",
    heroEyebrow: "Move-Out Cleaning",
    heroTitle: "Bond Cleaning Gold Coast",
    heroDescription:
      "Book detailed bond cleaning in the Gold Coast for apartments, units, townhouses, and family homes that need to present well for final inspection and handover.",
    primaryKeyword: "bond cleaning Gold Coast",
    keywords: [
      "bond cleaning Gold Coast",
      "bond cleaners Gold Coast",
      "move out cleaning Gold Coast",
      "rental cleaning Gold Coast",
      "vacate cleaning Gold Coast",
      "exit cleaning Gold Coast",
      "end of lease bond clean Gold Coast",
      "bond back cleaning Gold Coast",
      "REIQ bond cleaning Gold Coast",
      "rental inspection cleaning Gold Coast",
    ],
    overview: [
      "Moving out of a rental property is stressful enough without worrying about whether you will get your full bond back. Property managers and real estate agents conduct rigorous exit inspections, comparing every room against your entry condition report. Standard household cleaning is rarely enough to meet their exacting standards.",
      "Wave Solution specializes in inspection-ready bond cleaning designed to satisfy real estate property managers across the Gold Coast. We systematically tackle the toughest areas—baked-on oven grease, exhaust fan filters, bathroom soap scum, window tracks, and skirting boards—ensuring your rental is handed over in pristine condition.",
      "We stand firmly behind our workmanship. If your property manager identifies any cleaning issue on their exit inspection report, we return within 48 hours to rectify the item at zero additional cost to you.",
    ],
    includedItems: [
      "Kitchen: Deep oven clean (racks, glass, trays), stovetop, rangehood filters, cupboards inside/out, splashbacks, and tapware",
      "Bathrooms: Full scrub and sanitisation of shower screens, tile grout, bath tubs, basins, mirrors, and toilets",
      "Living & Bedrooms: Wardrobe interiors, shelving, doors, handles, light switches, and skirting boards wiped clean",
      "Windows & Tracks: Interior window glass, sills, and deep vacuuming/scrubbing of sliding door tracks",
      "Floors: High-suction HEPA vacuuming of carpets and damp mopping of hard tiled and vinyl surfaces",
      "Bond Warranty: Free re-clean support if your real estate agent notes any cleaning defect on inspection",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Built specifically for Queensland rental exit inspections",
        paragraphs: [
          "In Queensland, tenancy legislation requires properties to be returned in the same condition as noted on the initial Entry Condition Report (fair wear and tear excepted). Real estate agents inspect rental properties methodically, checking high and low for dust, grease, and grime that daily living leaves behind.",
          "Our bond cleaning checklist is modeled directly on standard REIQ (Real Estate Institute of Queensland) handover requirements. We clean systematically from ceilings and light fittings down to skirting boards and floor edges, ensuring every room is presented to inspection-ready standards.",
        ],
      },
      {
        title: "Move-out cleaning for coastal apartments, townhouses, and houses",
        paragraphs: [
          "Rental properties across the Gold Coast have distinct challenges. Oceanfront units in Surfers Paradise and Broadbeach often have stubborn salt spray on glass and sand packed into sliding balcony tracks. Suburban family rentals in Robina, Nerang, or Coomera often require extensive kitchen degreasing, large multi-bathroom scrubbing, and comprehensive floor care.",
          "We bring commercial-grade degreasers, limescale removers, and heavy-duty extraction equipment suited to every property type. Our technicians understand how to work efficiently within high-rise building regulations, lift bookings, and secure parking constraints.",
        ],
      },
      {
        title: "How to book your Gold Coast bond clean for handover day",
        paragraphs: [
          "Timing your clean properly is essential for a stress-free move. We strongly recommend scheduling your bond clean for the day after all furniture, boxes, and personal belongings have been removed by removalists. This ensures our cleaners can access all corners, cupboards, and wall surfaces without obstruction.",
          "To request a quote, simply provide your property address, bedroom and bathroom count, preferred cleaning date, and any extras needed (such as carpet steam cleaning or end-of-lease flea treatment). We provide an all-inclusive, fixed-price quote with no surprise fees on arrival.",
        ],
      },
      {
        title: "Our 100% bond-back guarantee commitment",
        paragraphs: [
          "Your rental bond is a significant financial deposit, and we believe you should get every dollar back without disputes. That is why every bond clean we complete is backed by our full re-clean warranty.",
          "Following your property manager's final inspection, if any cleaning item is flagged on their report, notify us within 72 hours. We will promptly return to the property and re-clean the disputed area free of charge, giving you and your property manager complete confidence.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in bond cleaning?",
        answer:
          "Bond cleaning generally covers kitchens, bathrooms, floors, internal surfaces, cupboards, fittings, and room-by-room detailing based on the agreed scope and property condition.",
      },
      {
        question: "How is bond cleaning priced?",
        answer:
          "Pricing depends on the size of the property, the condition, the number of rooms, access timing, and any optional extras requested. Bond cleaning starts from $250.",
      },
      {
        question: "Can I add carpet cleaning or extra detailing to my bond clean?",
        answer:
          "Yes. Additional items such as carpet cleaning, oven cleaning, and other detail work can be quoted alongside the main bond-cleaning service.",
      },
      {
        question: "How early should I book before my final inspection?",
        answer:
          "As early as possible. Bond-cleaning demand can rise around move dates, so booking early gives you a better chance of securing the timing you need.",
      },
      {
        question: "Do you guarantee bond back with your cleaning?",
        answer:
          "We deliver a thorough, inspection-ready clean. While bond return decisions are made by the property manager or landlord, our detailed approach is designed to meet standard rental inspection requirements.",
      },
      {
        question: "How long does bond cleaning take?",
        answer:
          "A typical bond clean takes 4–8 hours depending on property size and condition. Larger homes or properties with heavier buildup may require more time.",
      },
      {
        question: "Do I need to be present during the bond clean?",
        answer:
          "No. Most tenants arrange key access and are not present during the clean. We discuss access arrangements during the booking process.",
      },
      {
        question: "Is bond cleaning the same as end of lease cleaning?",
        answer:
          "They refer to the same type of service. Bond cleaning focuses on the bond return outcome, while end of lease cleaning focuses on the rental handover. We provide both under one service.",
      },
      {
        question: "Do you clean all types of rental properties?",
        answer:
          "Yes. We cover apartments, units, townhouses, and houses across the Gold Coast for bond and move-out cleaning.",
      },
      {
        question: "What if the property manager finds something after the clean?",
        answer:
          "Contact us promptly with the details. We will review the scope and arrange a follow-up visit if a missed item falls within the original agreed service.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "end-of-lease-cleaning-gold-coast",
    shortLabel: "End of Lease Cleaning Gold Coast",
    navLabel: "End of Lease",
    metaTitle: "End of Lease Cleaning Gold Coast | Detailed Rental Exit Cleaning",
    metaDescription:
      "End of lease cleaning across the Gold Coast for apartments, houses and rental properties. Detailed cleaning designed to help present the property at handover.",
    heroEyebrow: "Rental Exit Cleaning",
    heroTitle: "End of Lease Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides end of lease cleaning across the Gold Coast for tenants, landlords, and property managers who need a detailed handover-ready clean.",
    primaryKeyword: "end of lease cleaning Gold Coast",
    keywords: [
      "end of lease cleaning Gold Coast",
      "lease cleaning Gold Coast",
      "rental cleaning Gold Coast",
      "move out cleaning Gold Coast",
      "vacate cleaning Gold Coast",
      "exit cleaning Gold Coast",
      "bond cleaning Gold Coast",
      "final inspection cleaning Gold Coast",
      "move out clean Gold Coast",
      "end of tenancy cleaning Gold Coast",
    ],
    overview: [
      "Vacating a rental property involves an overwhelming list of tasks—packing boxes, booking removalists, redirecting mail, and finalizing utility accounts. The last thing you need during this transition is the exhausting burden of spending entire days on hands-and-knees scrubbing before returning your keys.",
      "Wave Solution's end-of-lease cleaning service is designed to take complete ownership of your final property handover. We understand what real estate agents look for during vacating inspections and methodically clean your rental from top to bottom so you can complete your handover with confidence.",
      "Whether you are moving out of a modern waterfront apartment in Broadbeach, a suburban family rental in Robina, or a townhouse in Varsity Lakes, our experienced local cleaners arrive equipped to get your property immaculate and ready for its new occupants.",
    ],
    includedItems: [
      "Detailed room-by-room rental exit cleaning based on property type and handover needs",
      "Bathrooms, kitchens, surfaces, floors, cupboards, drawers, and fittings within scope",
      "Apartment, unit, townhouse, and house end-of-lease cleaning across the Gold Coast",
      "Practical quoting for move-out timelines, property size, and additional requests",
      "Clear communication for tenants, landlords, and property managers",
      "Option to bundle with carpet steam cleaning and certified move-out pest control",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Comprehensive rental exit cleaning before key handover",
        paragraphs: [
          "Moving out requires a far more intensive clean than routine household maintenance. Real estate property managers expect light fixtures dusted, exhaust fans cleared of lint, oven racks and glass degreased, internal cabinetry washed, and tile grout scrubbed clean.",
          "Our end-of-lease cleaning checklist covers every room systematically. By handing this demanding job to an experienced, insured team, you eliminate the risk of delayed handovers, re-inspection fees, and last-minute disputes with your leasing agent.",
        ],
      },
      {
        title: "Specialist vacate cleaning for apartments, units, and freestanding houses",
        paragraphs: [
          "Gold Coast properties encompass a wide variety of architectural styles and rental conditions. Coastal high-rise units require careful attention to balcony glass, sliding door tracks, and compact European laundries, alongside coordination with building lifts and loading zones.",
          "Freestanding rental homes in suburban Gold Coast areas often feature larger footprints, multiple bathrooms, tiled living areas, and garage spaces. We adapt our crew size and equipment to ensure thorough, efficient completion regardless of property size.",
        ],
      },
      {
        title: "Fast communication and flexible move-out scheduling",
        paragraphs: [
          "Tenancy move-outs operate on strict deadlines. Whether your lease ends on a specific weekday or you have a tight 24-hour window between removalists departing and key handover at the agency, we work closely with your timeline to deliver reliable results.",
          "Getting an upfront quote is simple: tell us your property suburb, number of bedrooms and bathrooms, and target handover date. We provide fixed-price quotes so you know exactly what your clean will cost before booking.",
        ],
      },
      {
        title: "A seamless all-in-one move-out solution",
        paragraphs: [
          "Many rental agreements require specialized add-on services such as hot-water extraction carpet steam cleaning or certified pest treatments (especially if pets lived on the premises). Instead of hiring multiple contractors, Wave Solution provides all three services under a single coordinated booking.",
          "We sequence the clean correctly—bond clean first, carpet steam second, and pest spray last—saving you money, reducing contractor coordination headaches, and ensuring complete compliance for your agency.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is end of lease cleaning the same as bond cleaning?",
        answer:
          "They are closely related. End of lease cleaning focuses on preparing the property for handover, while bond cleaning language often focuses on the standard expected before the bond is returned.",
      },
      {
        question: "What parts of the property are usually included?",
        answer:
          "Typical scope includes bathrooms, kitchens, surfaces, floors, cupboards, and room-by-room detailing, depending on the agreed quote and property condition.",
      },
      {
        question: "Do you clean apartments as well as houses?",
        answer:
          "Yes. We clean apartments, units, townhouses, and houses across the Gold Coast for rental exits and handovers.",
      },
      {
        question: "Can I add extras like oven cleaning or other detail work?",
        answer:
          "Yes. Extra detailing can be added to the quote depending on the property and what is needed before handover.",
      },
      {
        question: "How much does end of lease cleaning cost in the Gold Coast?",
        answer:
          "End of lease cleaning starts from $250 depending on the property size, condition, and any add-ons such as carpet cleaning or oven cleaning.",
      },
      {
        question: "How far in advance should I book end of lease cleaning?",
        answer:
          "We recommend booking as soon as you know your vacate date. Popular times around end of month can fill quickly, especially for apartments and family homes.",
      },
      {
        question: "Do I need to supply any cleaning products?",
        answer:
          "No. We bring all required products and equipment. If you have a preference for eco-friendly or specific products, let us know when booking.",
      },
      {
        question: "Can the clean be scheduled the day before my final inspection?",
        answer:
          "Yes, subject to availability. Cleaning the day before your inspection is ideal as it ensures the property is presented in the best condition.",
      },
      {
        question: "What happens if I need to reschedule?",
        answer:
          "Contact us as early as possible if your move date or inspection time changes. We will do our best to accommodate your new schedule.",
      },
      {
        question: "Do you service all Gold Coast suburbs for end of lease cleaning?",
        answer:
          "Yes. We cover Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Helensvale, Coomera, Nerang, and surrounding suburbs.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "bond-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "office-cleaning-gold-coast",
    shortLabel: "Office Cleaning Gold Coast",
    navLabel: "Office Cleaning",
    metaTitle: "Office Cleaning Gold Coast | Reliable Workplace Cleaning Services",
    metaDescription:
      "Office cleaning in the Gold Coast for professional suites, shared offices and business spaces. Flexible schedules, detailed checklists and local support.",
    heroEyebrow: "Workplace Cleaning",
    heroTitle: "Office Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides office cleaning in the Gold Coast for professional suites, reception areas, shared workplaces, and business spaces that need dependable presentation and hygiene.",
    primaryKeyword: "office cleaning Gold Coast",
    keywords: [
      "office cleaning Gold Coast",
      "workplace cleaning Gold Coast",
      "professional cleaners Gold Coast",
      "commercial office cleaning Gold Coast",
      "office cleaners Gold Coast",
      "corporate cleaning Gold Coast",
      "business cleaning Gold Coast",
      "strata cleaning Gold Coast",
      "medical centre cleaning Gold Coast",
      "dental clinic cleaning Gold Coast",
    ],
    overview: [
      "A clean office supports more than appearance. It affects how staff feel at work, how clients experience the business, and how well the workplace operates each day. Dusty desks, untidy kitchens, and neglected bathrooms make a business feel less organised very quickly. That is why office cleaning remains one of the most commercially valuable local cleaning services on the Gold Coast.",
      "This page should position Wave Solution as a dependable local office-cleaning provider rather than another generic cleaning listing. The strongest office-cleaning leads are looking for reliability, clear communication, and a schedule that works around the business. They want a cleaner who understands access, presentation, touchpoint hygiene, shared staff areas, and the need to show up consistently over time.",
      "From an SEO perspective, office cleaning Gold Coast deserves its own focused page because office leads behave differently from household or move-out leads. They need different information, different reassurances, and different calls to action. A dedicated workplace-cleaning page makes the site much more competitive for business search terms.",
    ],
    includedItems: [
      "Desk-area surface care where appropriate and agreed in scope",
      "Vacuuming, mopping, bin changes, and general workplace presentation",
      "Cleaning of office bathrooms, kitchens, and shared staff areas",
      "Touchpoint-focused cleaning for high-use surfaces and client-facing spaces",
      "Flexible recurring scheduling for daily, weekly, or custom service plans",
      "After-hours or low-disruption timing where site access allows it",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Office cleaning Gold Coast businesses can schedule around operations",
        paragraphs: [
          "Timing matters in office cleaning. Some businesses want after-hours access so the clean happens outside staff hours. Others prefer early morning or low-traffic times. This page should show that Wave Solution understands those needs and can work with business schedules where possible. The more clearly the site addresses timing, access, and low-disruption service, the easier it becomes for managers to see Wave Solution as a workable provider.",
          "This is especially important for professional suites, reception areas, small admin offices, allied-health offices, and shared workplaces where presentation matters every day. Businesses want their workspace to look ready for staff and visitors without having to manage the cleaner closely. That expectation should be reflected in the page copy and call to action.",
        ],
      },
      {
        title: "Professional cleaners Gold Coast workplaces can trust",
        paragraphs: [
          "Trust works differently for commercial leads than for household leads. Business owners want to know who is entering the premises, whether access will be handled properly, and whether the service will stay consistent over time. That means this page should reinforce insurance, police-checked staff, clear communication, and tailored checklists for the workplace. Those are stronger commercial trust signals than generic promises about sparkling results.",
          "It is also important to describe office cleaning scope clearly. Typical inclusions may cover floors, bins, bathrooms, kitchenettes, wipe-down of agreed surfaces, and general room presentation. That clarity helps qualify the lead and reduces back-and-forth later in the quote process.",
        ],
      },
      {
        title: "Office cleaning for Southport, Robina, Broadbeach, and surrounding business areas",
        paragraphs: [
          "Local relevance is a real competitive advantage here. A Gold Coast office-cleaning page should mention the suburbs where professional premises are concentrated, such as Southport, Robina, Broadbeach, and Surfers Paradise. This helps the page rank better for local workplace queries while also reassuring business owners that the team is not operating from a vague national footprint.",
          "Businesses often prefer local providers because communication is easier and service feels more accountable. That local position is something Wave Solution can use well, especially against larger franchise-style competitors whose pages often feel broader and less specific.",
        ],
      },
      {
        title: "Request a cleaning plan that fits your workplace",
        paragraphs: [
          "The CTA on this page should be simple and business-friendly. Ask the visitor to tell you what type of workspace they operate, how often they need service, and what suburb the office is in. That gives the business a clear path to a tailored quote. It also feels more appropriate than a generic household-style booking message.",
          "When supported by internal links to cleaning Gold Coast, commercial cleaning Gold Coast, the contact page, and the booking page, this office-cleaning landing page becomes a strong local page for leads who are already close to taking action.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer after-hours office cleaning in the Gold Coast?",
        answer:
          "Yes, where site access and scheduling allow it. Many office clients prefer after-hours or low-disruption service windows.",
      },
      {
        question: "How often should an office be professionally cleaned?",
        answer:
          "It depends on staff numbers, site usage, and the type of workplace. We can recommend daily, weekly, or tailored schedules based on your needs.",
      },
      {
        question: "Can you quote based on the size of our office?",
        answer:
          "Yes. We quote based on the type of workplace, floor area, layout, cleaning frequency, and any site-specific requirements.",
      },
      {
        question: "Do you clean shared kitchens and office bathrooms?",
        answer:
          "Yes. Shared staff areas, bathrooms, and common use spaces are included within the agreed service scope.",
      },
      {
        question: "How much does office cleaning cost in the Gold Coast?",
        answer:
          "Office cleaning is quoted based on workplace size, frequency, and scope. Pricing starts from $200 per session. Contact us for a tailored business quote.",
      },
      {
        question: "Do you sign confidentiality or access agreements for office cleaning?",
        answer:
          "Yes. We can work within your business's access and confidentiality requirements. Discuss your needs when getting a quote.",
      },
      {
        question: "Are your office cleaners police checked?",
        answer:
          "Yes. All our cleaners are police checked, which is especially important for businesses requiring secure or after-hours access.",
      },
      {
        question: "Can I set up a regular recurring office clean?",
        answer:
          "Yes. We recommend setting up a recurring schedule to keep your workplace consistently clean. We can accommodate daily, weekly, or custom frequency arrangements.",
      },
      {
        question: "Do you clean reception areas and client-facing spaces?",
        answer:
          "Yes. Reception areas, meeting rooms, and customer-facing spaces are included in office cleaning scopes where agreed.",
      },
      {
        question: "What Gold Coast business areas do you service?",
        answer:
          "We service offices in Southport, Robina, Broadbeach, Surfers Paradise, Burleigh Heads, Nerang, and surrounding Gold Coast business precincts.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "commercial-cleaning-gold-coast",
    shortLabel: "Commercial Cleaning Gold Coast",
    navLabel: "Commercial Cleaning",
    metaTitle: "Commercial Cleaning Gold Coast | Professional Business Cleaning",
    metaDescription:
      "Commercial cleaning in the Gold Coast for offices, retail, clinics, body corporate sites and more. Tailored schedules and dependable local cleaners.",
    heroEyebrow: "Business Cleaning",
    heroTitle: "Commercial Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides commercial cleaning in the Gold Coast for offices, retail spaces, clinics, body corporate areas, and businesses that need a reliable cleaning plan.",
    primaryKeyword: "commercial cleaning Gold Coast",
    keywords: [
      "commercial cleaning Gold Coast",
      "business cleaning Gold Coast",
      "professional cleaners Gold Coast",
      "local commercial cleaners Gold Coast",
      "retail cleaning Gold Coast",
      "gym cleaning Gold Coast",
      "restaurant cleaning Gold Coast",
      "school cleaning Gold Coast",
      "childcare cleaning Gold Coast",
      "warehouse cleaning Gold Coast",
      "body corporate cleaning Gold Coast",
    ],
    overview: [
      "Commercial cleaning is broader than office cleaning and should be treated that way in both content and page structure. Businesses across the Gold Coast operate in very different environments, from professional suites and retail shops to clinics, gyms, and customer-facing premises. A commercial page needs to show that Wave Solution can tailor the cleaning plan to the site rather than applying the same residential logic everywhere.",
      "Gold Coast business owners are usually looking for reliability, flexibility, and clear communication. They need a cleaning provider who can work around access restrictions, customer hours, or recurring operational schedules. They also need the premises to remain presentable and hygienic over time, not just on the first visit. This page should therefore emphasise consistency and tailored service instead of generic surface-level promises.",
      "From an SEO perspective, commercial cleaning Gold Coast deserves its own landing page because commercial search intent is different from household and office intent. The people landing on this page want to know what types of premises are supported, how quotes are handled, and whether the service can scale to their business needs.",
    ],
    includedItems: [
      "Commercial cleaning plans tailored to the size, layout, and usage of the premises",
      "Support for offices, retail spaces, clinics, shared buildings, and other business environments",
      "Cleaning of floors, bathrooms, staff areas, kitchens, and customer-facing zones",
      "Flexible recurring schedules for daily, weekly, or customised business cleaning",
      "Clear communication around site access, timing, and agreed cleaning scope",
      "Local service coverage across major Gold Coast business suburbs and precincts",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Commercial cleaning Gold Coast businesses can tailor to site needs",
        paragraphs: [
          "The biggest difference between a strong commercial page and a weak one is specificity. Business owners want to know whether the cleaner can handle their kind of site. That means the copy should naturally mention the business environments Wave Solution genuinely wants to service, such as offices, retail spaces, clinics, body corporate common areas, and customer-facing premises. When the page reads like it understands the operational side of those sites, conversion improves.",
          "It is also important to explain that quotes are tailored. Commercial leads do not expect a fixed residential-style price point because the size, traffic, and use of each premises is different. The more clearly the site explains that the plan is shaped around the business, the stronger the page becomes.",
        ],
      },
      {
        title: "Professional cleaners Gold Coast businesses can rely on long term",
        paragraphs: [
          "Commercial clients care deeply about consistency. A cleaner that misses bathrooms, skips touchpoints, or leaves customer-facing areas looking neglected quickly becomes a business problem. This page should therefore reinforce dependable scheduling, clear scope, and a service approach built to maintain presentation over time.",
          "Trust content should speak directly to business concerns. Highlight insurance, police-checked staff, flexible timing, and responsive communication. Those details matter more to a commercial buyer than broad lifestyle language about spotless spaces.",
        ],
      },
      {
        title: "Local commercial cleaners for Southport, Robina, Broadbeach, and beyond",
        paragraphs: [
          "Local relevance helps this page in two ways. First, it supports SEO by connecting the service to business-heavy Gold Coast suburbs and precincts. Second, it helps conversion because businesses prefer local providers who understand the area, can service the suburb reliably, and are easier to contact if requirements change. Southport, Robina, Broadbeach, Surfers Paradise, and surrounding business areas are useful local references where they match actual operations.",
          "That local positioning is especially useful when competing with larger or more generic franchise sites. Wave Solution can win by sounding more practical, more accountable, and more connected to the Gold Coast market itself.",
        ],
      },
      {
        title: "Request a commercial cleaning plan that fits your premises",
        paragraphs: [
          "The CTA on this page should ask the business to share the type of premises, suburb, preferred schedule, and any site-specific requirements. That makes the next step feel sensible and tailored rather than generic. It also helps qualify leads properly and improves response speed.",
          "When linked cleanly with the cleaning Gold Coast page, office cleaning page, booking page, and contact page, this commercial page becomes a stronger ranking and conversion asset. It gives Gold Coast businesses a clear destination instead of forcing them through a residential-first journey.",
        ],
      },
    ],
    faqs: [
      {
        question: "What kinds of commercial properties do you clean?",
        answer:
          "We can support offices, retail spaces, clinics, body corporate common areas, and other business premises depending on the agreed service scope.",
      },
      {
        question: "Do you provide after-hours commercial cleaning?",
        answer:
          "Yes, where site access allows it. Many commercial clients prefer after-hours or low-traffic service windows.",
      },
      {
        question: "How do you quote for commercial cleaning?",
        answer:
          "Quotes are based on the type of premises, size, layout, cleaning frequency, and any access or site-specific requirements.",
      },
      {
        question: "Can you set up a recurring cleaning schedule for our site?",
        answer:
          "Yes. We can recommend a recurring plan based on site usage, foot traffic, hygiene needs, and your preferred service days.",
      },
      {
        question: "Do you clean strata and body corporate common areas?",
        answer:
          "Yes. We can provide commercial cleaning for body corporate lobbies, stairwells, car parks, and shared common areas across Gold Coast buildings.",
      },
      {
        question: "Are your commercial cleaners insured?",
        answer:
          "Yes. All our commercial cleaning staff are fully insured, giving businesses peace of mind when we're on-site.",
      },
      {
        question: "Can you service retail shops and customer-facing premises?",
        answer:
          "Yes. We work with retail businesses to keep shopfronts, floors, and customer-facing spaces clean and presentable.",
      },
      {
        question: "How do I get a commercial cleaning quote in the Gold Coast?",
        answer:
          "Call us on 0450 833 683 or use our contact page. Share your premises type, suburb, size, and preferred schedule for a fast tailored quote.",
      },
      {
        question: "Can commercial cleaning be scaled as our business grows?",
        answer:
          "Yes. We can adjust your cleaning plan as your business expands or if your premises or usage patterns change over time.",
      },
      {
        question: "Do you offer one-off commercial cleaning as well as ongoing contracts?",
        answer:
          "Yes. We support both one-off commercial cleans and recurring arrangements depending on what best suits your business.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "office-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "deep-cleaning-gold-coast",
    shortLabel: "Deep Cleaning Gold Coast",
    navLabel: "Deep Cleaning",
    metaTitle: "Deep Cleaning Gold Coast | One-Off Intensive Cleaning Service",
    metaDescription:
      "Deep cleaning across the Gold Coast for homes, offices and rentals that need a detailed top-to-bottom reset. Book a thorough local clean today.",
    heroEyebrow: "Detailed Cleaning Reset",
    heroTitle: "Deep Cleaning Gold Coast",
    heroDescription:
      "Book a one-off deep cleaning service in the Gold Coast for homes, offices, and rental properties that need more than a standard maintenance clean.",
    primaryKeyword: "deep cleaning Gold Coast",
    keywords: [
      "deep cleaning Gold Coast",
      "one-off cleaning Gold Coast",
      "spring cleaning Gold Coast",
      "detailed cleaning Gold Coast",
      "top to bottom clean Gold Coast",
      "move in deep clean Gold Coast",
      "post renovation cleaning Gold Coast",
      "oven cleaning Gold Coast",
      "kitchen deep clean Gold Coast",
      "bathroom deep clean Gold Coast",
    ],
    overview: [
      "Deep cleaning is the right service when a property needs more than routine maintenance. Standard cleaning keeps a home or workplace ticking over, but over time the detail areas still build up grime, dust, and visual fatigue. Kitchens lose their fresh look, bathrooms collect scale and residue, and the corners or touchpoints that are easy to miss start to affect the whole feel of the space. A dedicated deep-cleaning page should speak directly to that need for a reset.",
      "This service is useful for homes, apartments, offices, and rental properties across the Gold Coast. People often book deep cleaning before guests arrive, before inspections, after a long period without professional cleaning, or when they simply want the property brought back to a much better baseline. The page should position it as a one-off intensive service that creates a clear visual and practical improvement.",
      "From an SEO perspective, deep cleaning Gold Coast is a valuable service keyword because it attracts clients with a specific problem and strong purchase intent. A thin paragraph is not enough here. The page should explain what deep cleaning means, what kinds of properties it suits, and how it differs from regular maintenance cleaning.",
    ],
    includedItems: [
      "One-off detailed cleaning for homes, offices, rentals, and move-in-ready spaces",
      "Extra attention to kitchens, bathrooms, edges, touchpoints, and buildup-prone areas",
      "Detailed wipe-down of surfaces, fittings, and harder-to-reach zones within scope",
      "Practical reset service before guests, inspections, events, or seasonal changes",
      "Quotes based on property condition, size, urgency, and optional add-on requests",
      "Internal links to house cleaning, office cleaning, and rental cleaning pathways",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Deep cleaning Gold Coast homes and offices that need a proper reset",
        paragraphs: [
          "The page should explain early that deep cleaning is not just another name for a standard clean. It is a more intensive service focused on the places that often get missed or deprioritised during regular maintenance. That might mean heavier kitchen detail, more bathroom attention, better treatment of edges and high-touch surfaces, or extra focus on areas that affect the feel of the room most strongly.",
          "This matters because customers are often not sure whether they need a deep clean or a regular clean. Clear explanation improves lead quality. It also positions Wave Solution as a more thoughtful provider instead of a company simply renaming the same service at a higher price point.",
        ],
      },
      {
        title: "One-off cleaning Gold Coast clients book before inspections, guests, or big resets",
        paragraphs: [
          "Deep cleaning is especially useful at transition points. A household may want a full refresh before family stays over. An owner may want a property reset before listing it. A tenant may want a better baseline before settling into a rental. A business may want a more detailed clean than its normal schedule allows. Mentioning those use cases helps the visitor recognise themselves in the service and move toward a quote more confidently.",
          "It is also a strong upsell path into regular cleaning. Many clients benefit from an initial deep clean followed by weekly or fortnightly maintenance. Including that pathway naturally on the page improves both conversion and customer lifetime value.",
        ],
      },
      {
        title: "Detailed cleaning Gold Coast properties with the right scope and expectations",
        paragraphs: [
          "Because deep cleaning can vary so much by property, the page should set expectations clearly. Quotes should depend on size, condition, the rooms involved, and any extras such as oven or fridge cleaning. This transparency builds trust and helps prevent misunderstandings. It also signals that Wave Solution is paying attention to the actual job rather than pushing a one-size-fits-all offer.",
          "Local references also help here. Gold Coast apartments, homes, and commercial spaces all have different cleaning profiles, and a local provider can speak to those differences much more credibly than a generic national template.",
        ],
      },
      {
        title: "A strong local page for deep cleaning and spring cleaning Gold Coast searches",
        paragraphs: [
          "SEO on this page should support deep cleaning Gold Coast first, but it should also naturally reinforce related ideas like one-off cleaning and spring cleaning. The internal-link structure matters as well. This page should link cleanly to cleaning Gold Coast, house cleaning Gold Coast, office cleaning Gold Coast, the contact page, and the booking page.",
          "That linking approach gives the page a strong role in the overall service cluster. It can capture one-off detail-clean leads directly while also helping users move to recurring household or commercial services if that ends up being the better fit.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between standard cleaning and deep cleaning?",
        answer:
          "Standard cleaning helps maintain a property, while deep cleaning adds more detailed attention to buildup, touchpoints, edges, kitchens, bathrooms, and other areas that need a stronger reset.",
      },
      {
        question: "How long does a deep clean usually take?",
        answer:
          "It depends on the size and condition of the property. A deep clean typically takes 4–8 hours for an average home. Larger or more neglected properties may require more time.",
      },
      {
        question: "Can I book a deep clean before guests or an inspection?",
        answer:
          "Yes. Deep cleaning is a popular option before inspections, events, guest stays, move-ins, and other times when presentation matters.",
      },
      {
        question: "Do you bring your own products and equipment for deep cleaning?",
        answer:
          "Yes. We can bring the products and equipment needed for the agreed scope unless a site-specific arrangement is discussed in advance.",
      },
      {
        question: "How much does deep cleaning cost in the Gold Coast?",
        answer:
          "Deep cleaning starts from $250 depending on the property size, condition, and scope. Contact us for a tailored quote based on your specific requirements.",
      },
      {
        question: "Is deep cleaning suitable for homes that haven't been professionally cleaned before?",
        answer:
          "Yes. Deep cleaning is ideal for properties that have not had professional cleaning in a while, new properties, or homes that need a thorough reset before regular maintenance begins.",
      },
      {
        question: "What areas are covered in a deep clean?",
        answer:
          "A deep clean covers all standard areas plus extra detail work in kitchens (including inside oven, range hood, cupboards), bathrooms (grout, tiles, fixtures), skirting boards, window sills, and hard-to-reach zones.",
      },
      {
        question: "Can I book deep cleaning for my office or commercial space?",
        answer:
          "Yes. Deep cleaning is available for offices, commercial spaces, and rental properties across the Gold Coast, not just residential homes.",
      },
      {
        question: "Should I deep clean before starting a regular cleaning schedule?",
        answer:
          "Yes, a deep clean is often the best starting point. It brings the property to a high baseline, making it easier and more cost-effective to maintain with regular cleaning visits.",
      },
      {
        question: "Do you offer deep cleaning for short-term rental properties?",
        answer:
          "Yes. We provide deep cleaning for Airbnb and holiday rental properties across the Gold Coast, including between-guest resets and seasonal thorough cleans.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "house-cleaning-gold-coast",
      "office-cleaning-gold-coast",
      "bond-cleaning-gold-coast",
    ],
  },
  {
    slug: "move-in-cleaning-gold-coast",
    shortLabel: "Move-In Cleaning Gold Coast",
    navLabel: "Move-In Cleaning",
    metaTitle: "Move-In Cleaning Gold Coast | Fresh Start Cleaning Before You Settle In",
    metaDescription:
      "Move-in cleaning across the Gold Coast for homes, apartments, rentals, and newly purchased properties. Start in a cleaner space with a fast local quote.",
    heroEyebrow: "Fresh Start Cleaning",
    heroTitle: "Move-In Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides move-in cleaning across the Gold Coast for households and property owners who want kitchens, bathrooms, floors, and touchpoints cleaned before settling into the space.",
    primaryKeyword: "move-in cleaning Gold Coast",
    keywords: [
      "move-in cleaning Gold Coast",
      "pre move in cleaning Gold Coast",
      "new home cleaning Gold Coast",
      "apartment move in cleaning Gold Coast",
      "move in clean Gold Coast",
      "new house clean Gold Coast",
      "settle in cleaning Gold Coast",
      "incoming tenant cleaning Gold Coast",
      "pre occupancy cleaning Gold Coast",
    ],
    overview: [
      "Move-in cleaning is a highly practical service because even a property that looks tidy at handover does not always feel genuinely ready to live in. Dust inside cupboards, residues in kitchens and bathrooms, marks on touchpoints, and the general feeling of someone else's occupancy can all affect how comfortable a new home feels. A strong move-in page should address that emotional and practical concern clearly: people want to unpack into a space that feels fresh, hygienic, and ready from day one.",
      "On the Gold Coast, move-in cleaning can apply to newly leased apartments, recently purchased homes, renovated properties, downsizing moves, and family relocations. The service is especially helpful for people moving under time pressure who do not want to spend the first day in the property scrubbing bathrooms, wiping shelves, or dealing with leftover grime in the kitchen. By positioning the page around that real-life scenario, Wave Solution can attract high-intent users without sounding generic.",
      "From an SEO perspective, move-in cleaning Gold Coast is a valuable support page because it captures a different part of the moving journey from bond cleaning or end of lease cleaning. One page speaks to leaving well. This page speaks to arriving well. That distinction helps topical coverage and keeps the site useful instead of repetitive.",
    ],
    includedItems: [
      "Move-in cleaning for houses, apartments, townhouses, and newly purchased properties",
      "Detailed attention to kitchens, bathrooms, shelving, cupboards, floors, and high-touch points",
      "Helpful service before furniture delivery, family move-in, or tenant occupancy",
      "Quotes based on property size, condition, access timing, and any extra detail required",
      "Practical internal links to deep cleaning, house cleaning, and end-of-lease support",
      "Local service coverage across major Gold Coast suburbs and surrounding areas",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Move-in cleaning Gold Coast households book for peace of mind",
        paragraphs: [
          "The value of move-in cleaning is not just visual. It is about confidence. People want to feel comfortable opening cupboards, using bathrooms, unpacking kitchenware, and letting children settle into the property without wondering what has been missed. That makes this page a strong trust and conversion asset when it explains the practical benefit of arriving to a cleaner, fresher space.",
          "This is particularly helpful in apartment-heavy suburbs such as Southport, Broadbeach, and Surfers Paradise, where previous occupancy, tight handover timing, and limited storage spaces can make detail cleaning more noticeable. The more local and realistic the page feels, the better it will perform.",
        ],
      },
      {
        title: "Pre move-in cleaning for rentals, purchases, and newly renovated spaces",
        paragraphs: [
          "Move-in cleaning is useful across multiple property situations. Renters may want a reset before unpacking. New homeowners may want the property cleaned before family members arrive. Renovated spaces may need detail cleaning after trades. By speaking to these scenarios clearly, the page becomes more useful than a generic paragraph about fresh homes.",
          "This also creates helpful internal-link opportunities. Someone needing move-in cleaning may also need after-builders cleaning, deep cleaning, or recurring house cleaning after the first reset. The site should make those next steps easy to discover.",
        ],
      },
      {
        title: "What affects the quote for move-in cleaning?",
        paragraphs: [
          "A pricing explanation should focus on what actually changes the scope: property size, the amount of detail needed in kitchens and bathrooms, whether the property is empty or partially occupied, and whether the booking is tied to renovation dust, move timing, or a broader reset. That kind of explanation improves trust because it helps the visitor understand why quotes vary from property to property.",
          "Clear pricing guidance also reduces low-quality enquiries. Customers who understand what affects the quote are more likely to provide useful details up front, which means faster responses and better-fit bookings.",
        ],
      },
      {
        title: "A useful local landing page for Gold Coast move-in searches",
        paragraphs: [
          "This page should support move-in cleaning Gold Coast searches, but it should also help people who are searching in plain language for help before moving into a new home. Natural wording such as new home cleaning, pre move-in cleaning, and apartment move-in cleaning can be used without forcing keywords into every sentence.",
          "Combined with strong trust signals, FAQs, nearby suburb links, and simple calls to action, this page can become a reliable support asset within the wider moving and home-cleaning silo.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in move-in cleaning?",
        answer:
          "Move-in cleaning usually focuses on kitchens, bathrooms, floors, touchpoints, cupboards, shelves, and other areas that need to feel clean before you unpack and settle into the property.",
      },
      {
        question: "Do you clean apartments and townhouses before move-in?",
        answer:
          "Yes. We provide move-in cleaning for apartments, units, townhouses, and houses across the Gold Coast.",
      },
      {
        question: "Can move-in cleaning be booked after renovations?",
        answer:
          "Yes. If the property has renovation dust or builder residue, we may recommend after-builders cleaning or a more detailed reset depending on the condition of the space.",
      },
      {
        question: "How do you quote for move-in cleaning?",
        answer:
          "Quotes are based on property size, condition, access timing, and whether the property needs standard move-in preparation or a more detailed post-renovation or deep-cleaning scope.",
      },
      {
        question: "How much does move-in cleaning cost in the Gold Coast?",
        answer:
          "Move-in cleaning starts from $220 depending on the property size, condition, and any extras. Contact us for a fast local quote.",
      },
      {
        question: "Does the property need to be empty before move-in cleaning?",
        answer:
          "For the best results, move-in cleaning is easiest to complete before furniture arrives. However, we can work around existing items where needed.",
      },
      {
        question: "Can move-in cleaning include inside ovens and cupboards?",
        answer:
          "Yes. Interior oven cleaning, cupboard wipe-outs, and similar detail work can be added to the quote depending on what the property needs.",
      },
      {
        question: "How soon can you book move-in cleaning?",
        answer:
          "We aim to accommodate your move-in timeline. Contact us as soon as you have a confirmed move date for the best chance of securing your preferred time.",
      },
      {
        question: "Is move-in cleaning different from a standard house clean?",
        answer:
          "Yes. Move-in cleaning goes deeper than a standard maintenance clean. It covers areas that may have been overlooked by previous occupants and ensures the space is genuinely fresh.",
      },
      {
        question: "Do you offer move-in cleaning for newly built homes?",
        answer:
          "Yes. For brand new properties, we can provide a move-in clean or an after-builders clean depending on how much construction dust and residue is present.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "house-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
    ],
  },
  {
    slug: "after-builders-cleaning-gold-coast",
    shortLabel: "After Builders Cleaning Gold Coast",
    navLabel: "After Builders Cleaning",
    metaTitle: "After Builders Cleaning Gold Coast | Post-Renovation Dust and Detail Cleaning",
    metaDescription:
      "After builders cleaning across the Gold Coast for homes, renovations, fit-outs, and commercial spaces that need dust, residue, and detail cleaning before handover.",
    heroEyebrow: "Post-Renovation Cleaning",
    heroTitle: "After Builders Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides after builders cleaning across the Gold Coast for renovated homes, fit-outs, newly completed rooms, and commercial spaces needing a careful post-build reset.",
    primaryKeyword: "after builders cleaning Gold Coast",
    keywords: [
      "after builders cleaning Gold Coast",
      "post renovation cleaning Gold Coast",
      "builders clean Gold Coast",
      "construction cleaning Gold Coast",
      "post construction cleaning Gold Coast",
      "builders cleans Gold Coast",
      "renovation clean Gold Coast",
      "fit out cleaning Gold Coast",
      "new build cleaning Gold Coast",
      "construction dust removal Gold Coast",
    ],
    overview: [
      "After-builders cleaning is one of the most detail-heavy services on the site because post-renovation spaces often look close to complete while still holding fine dust, residue, labels, smears, and debris that make the property feel unfinished. A page targeting after builders cleaning Gold Coast needs to show that Wave Solution understands this difference. It is not just a general clean. It is a post-work reset focused on making the space ready to live in, present, or hand over.",
      "This service applies to renovated kitchens and bathrooms, home extensions, newly completed rooms, shop fit-outs, office refurbishments, and commercial upgrades. In Gold Coast properties, fine dust and residue can spread well beyond the work zone, which means the service needs to address surrounding surfaces, floors, fittings, and touchpoints with care. A practical local page should explain that clearly and avoid vague promises.",
      "From an SEO standpoint, this page helps Wave Solution capture high-value intent from owners, tenants, project managers, and businesses searching for post-renovation or construction cleaning support. It also gives the site a more complete property-care footprint, especially when linked with move-in cleaning, deep cleaning, and commercial cleaning.",
    ],
    includedItems: [
      "Post-renovation and after-builders cleaning for homes, fit-outs, and commercial spaces",
      "Attention to dust, residue, surfaces, floors, fittings, and handover presentation",
      "Useful for kitchens, bathrooms, new rooms, shop fit-outs, and office upgrades",
      "Quotes based on property size, renovation stage, amount of residue, and access timing",
      "Internal links to move-in cleaning, deep cleaning, and commercial cleaning pathways",
      "Local service coverage across key Gold Coast suburbs and surrounding business areas",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "After builders cleaning Gold Coast properties need before handover",
        paragraphs: [
          "Renovation work can leave behind a surprising amount of fine dust and detail residue. Even when the trades are finished, the property often still needs a careful cleaning pass before it feels complete. That is why this page should speak directly to handover readiness, final presentation, and the gap between a finished build and a finished living or working environment.",
          "This is especially important when a homeowner wants to move in quickly, a tenant needs the property ready to occupy, or a commercial fit-out needs to look presentable for staff or customers. The service should therefore be framed as the final step that helps the project feel truly complete.",
        ],
      },
      {
        title: "Post renovation cleaning for homes, apartments, and commercial spaces",
        paragraphs: [
          "Gold Coast renovation projects vary widely. Some involve one room. Others involve full kitchen or bathroom upgrades, extensions, office refurbishments, or customer-facing fit-outs. A strong page should acknowledge those different scales and make it clear that scope depends on the amount of dust, residue, access, and detail work required.",
          "That flexibility is important for conversion because visitors want a provider who understands the difference between a light post-trade tidy-up and a more involved after-builders clean. Specificity here improves trust and lead quality.",
        ],
      },
      {
        title: "What affects pricing for after-builders cleaning?",
        paragraphs: [
          "A clear pricing explanation should mention the real factors behind the quote: the size of the property, the number of rooms affected, the level of fine dust or builder residue, the amount of detailing needed, and whether the clean is part of a move-in or commercial handover process. This helps the user understand the service and removes some of the uncertainty that can stop enquiries.",
          "It also aligns with a white-hat conversion approach. Clear scope explanations are better than vague pricing promises because they help match the right service to the right property.",
        ],
      },
      {
        title: "A strong support page for builders clean and renovation cleaning searches",
        paragraphs: [
          "This page should naturally support related search language such as post renovation cleaning, builders clean, and construction cleaning, while still staying easy to read for people who are not using industry terms. The main goal is to explain the problem clearly and give the visitor a practical next step.",
          "With strong internal links, local relevance, and trust signals, after-builders cleaning can become a useful higher-intent page that complements the broader cleaning and move-in service cluster.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is after builders cleaning?",
        answer:
          "After builders cleaning is a post-renovation or post-construction clean that focuses on dust, residue, detail surfaces, floors, fittings, and the final presentation of the space.",
      },
      {
        question: "Do you clean homes after renovation work?",
        answer:
          "Yes. We provide after-builders cleaning for renovated homes, apartments, fit-outs, and commercial spaces across the Gold Coast.",
      },
      {
        question: "Can after-builders cleaning be combined with move-in cleaning?",
        answer:
          "Yes. If the property is about to be occupied after renovation work, after-builders cleaning and move-in cleaning can be planned together based on the condition of the space.",
      },
      {
        question: "How do you quote for post-renovation cleaning?",
        answer:
          "Quotes depend on the size of the property, the renovation stage, the amount of dust and residue, access conditions, and the level of detail needed before handover or occupancy.",
      },
      {
        question: "How much does after builders cleaning cost in the Gold Coast?",
        answer:
          "After builders cleaning starts from $300 depending on property size, scope, and the level of construction dust and residue present. Contact us for a tailored quote.",
      },
      {
        question: "How long does a post-renovation clean take?",
        answer:
          "It depends on the scale of the renovation and the size of the property. A typical after-builders clean takes longer than standard maintenance cleaning due to the level of dust and detail work involved.",
      },
      {
        question: "Do you clean commercial fit-outs after construction?",
        answer:
          "Yes. We provide after-builders cleaning for commercial fit-outs, office renovations, and retail spaces across the Gold Coast.",
      },
      {
        question: "What does after builders cleaning include?",
        answer:
          "It includes removal of construction dust from all surfaces, cleaning of floors, windows, fittings, cupboards, and any remaining residue or labels left by trades.",
      },
      {
        question: "When should after builders cleaning be done?",
        answer:
          "After builders cleaning should be done once all trades have finished and the property is ready for final inspection, handover, or occupation.",
      },
      {
        question: "Can you clean around furniture or fittings that have already been installed?",
        answer:
          "Yes. We can work carefully around installed fittings, cabinetry, and any furniture already in place, ensuring a thorough clean without causing damage.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "move-in-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
    ],
  },
  {
    slug: "carpet-cleaning-gold-coast",
    shortLabel: "Carpet Cleaning Gold Coast",
    navLabel: "Carpet Cleaning",
    metaTitle: "Carpet Cleaning Gold Coast | Fresh Carpets and Faster Drying",
    metaDescription:
      "Professional carpet cleaning across the Gold Coast for homes, rentals, offices, and commercial spaces. Refresh tired carpets and request a fast local quote.",
    heroEyebrow: "Carpet Refresh Service",
    heroTitle: "Carpet Cleaning Gold Coast",
    heroDescription:
      "Wave Solution provides carpet cleaning across the Gold Coast for family homes, rental properties, offices, and business spaces that need fresher, cleaner carpets.",
    primaryKeyword: "carpet cleaning Gold Coast",
    keywords: [
      "carpet cleaning Gold Coast",
      "carpet cleaners Gold Coast",
      "carpet steam cleaning Gold Coast",
      "carpet stain cleaning Gold Coast",
      "carpet shampooing Gold Coast",
      "carpet deodorising Gold Coast",
      "rug cleaning Gold Coast",
      "upholstery cleaning Gold Coast",
      "couch cleaning Gold Coast",
      "mattress cleaning Gold Coast",
      "tile and grout cleaning Gold Coast",
      "floor cleaning Gold Coast",
    ],
    overview: [
      "Carpet cleaning is an important service for Gold Coast homes and businesses because carpets absorb daily wear in a way hard floors do not. Sand, dust, moisture, food spills, pet hair, and foot traffic can all leave carpets looking tired long before a room actually needs a full renovation. A dedicated carpet-cleaning page should speak directly to that problem and explain how professional treatment helps refresh the look, feel, and hygiene of the space.",
      "In the Gold Coast market, carpet cleaning demand comes from several groups. Homeowners want a cleaner and fresher living environment. Tenants need carpets looking presentable before inspections or move-out. Office managers want entry areas, meeting rooms, and shared floors to look more professional. Property managers need reliable support between tenancies. This page should therefore frame carpet cleaning as both a hygiene service and a presentation service.",
      "From an SEO perspective, carpet cleaning Gold Coast deserves its own page because search intent is highly specific. People looking for carpet cleaning are usually not looking for a generic house clean. They want to know whether stains, traffic marks, odours, and tired fibres can be improved, how the process works, and how quickly the carpet can be ready to use again.",
    ],
    includedItems: [
      "Carpet cleaning support for homes, rentals, offices, and commercial interiors",
      "Treatment focus on traffic lanes, general buildup, odour-prone areas, and everyday marks",
      "Quotes based on carpet area, condition, site access, and urgency of the booking",
      "Helpful guidance for move-out preparation, inspection presentation, and regular maintenance",
      "Local service coverage across key Gold Coast suburbs and business areas",
      "Clear next-step contact options for booking, quoting, and property access questions",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Carpet cleaning Gold Coast homes use to lift presentation fast",
        paragraphs: [
          "Carpets have a big effect on how clean a room feels. Even when benches are wiped and bathrooms are tidy, worn or stained carpet can make the whole property feel older and less hygienic. That is why carpet cleaning is such a strong conversion service. The improvement is easy for customers to understand. Fresher carpets improve presentation, reduce stale odours, and make living spaces feel better immediately.",
          "This is especially useful in family homes, apartments, and rental properties where living areas and bedrooms absorb repeated daily traffic. A good carpet-cleaning page should help the visitor quickly understand that the service is practical, local, and suitable for real Gold Coast property types instead of reading like a generic national template.",
        ],
      },
      {
        title: "Rental and bond support for carpets that need better inspection presentation",
        paragraphs: [
          "Carpet condition can become a major issue during move-out and handover. Tenants are often concerned about marks, general wear, and how carpet presentation will affect the final inspection. By linking carpet cleaning naturally with bond cleaning and end of lease cleaning, Wave Solution can support a much more complete rental-preparation journey without keyword stuffing or duplicating pages.",
          "This is also a strong cross-sell opportunity. Someone booking end-of-lease cleaning may also need carpet treatment. Someone booking carpet cleaning for a rental may need a broader move-out clean. The page should make those pathways obvious through internal links and clear service language.",
        ],
      },
      {
        title: "Office and commercial carpet cleaning for cleaner-looking workspaces",
        paragraphs: [
          "Carpet cleaning is not only a residential service. Offices, reception areas, meeting rooms, and customer-facing spaces all benefit from carpets that look maintained and fresh. In business settings, tired carpet can quietly undermine presentation even when the rest of the workplace is clean. A dedicated Gold Coast carpet page should therefore mention office and commercial use cases naturally and link to commercial cleaning and office cleaning pages where relevant.",
          "For business buyers, the value proposition is simple: a cleaner-looking workspace, better presentation for staff and clients, and a maintenance approach that supports the overall image of the premises. That is especially relevant in Southport, Robina, Broadbeach, and other active commercial areas.",
        ],
      },
      {
        title: "A useful local page for carpet cleaners Gold Coast searches",
        paragraphs: [
          "This page should be structured around the real questions customers ask: what kinds of carpets can be treated, whether homes and offices are supported, how quotes are worked out, and what the next step is. That helps the page rank because it solves the problem clearly, and it helps conversion because it reduces uncertainty.",
          "Combined with strong trust signals, links to bond cleaning, deep cleaning, and commercial cleaning, and a simple quote CTA, this page can become a durable local asset for carpet-cleaning searches across the Gold Coast.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer carpet cleaning across the Gold Coast?",
        answer:
          "Yes. We provide carpet cleaning support across key Gold Coast suburbs for homes, rentals, offices, and commercial spaces.",
      },
      {
        question: "Can carpet cleaning be added to an end of lease or bond clean?",
        answer:
          "Yes. Carpet cleaning can be quoted alongside bond cleaning or end of lease cleaning where the property needs a more complete move-out service.",
      },
      {
        question: "Do you clean office carpets as well as residential carpets?",
        answer:
          "Yes. We can help with office and commercial carpet cleaning depending on the site, access requirements, and carpet condition.",
      },
      {
        question: "How do you quote for carpet cleaning?",
        answer:
          "Quotes depend on the area to be cleaned, carpet condition, property type, site access, and whether the booking is part of a broader cleaning service.",
      },
      {
        question: "How much does carpet cleaning cost in the Gold Coast?",
        answer:
          "Carpet cleaning starts from $150 depending on the size of the area, the number of rooms, and the condition of the carpets. Contact us for a fast local quote.",
      },
      {
        question: "How long does it take for carpets to dry after cleaning?",
        answer:
          "Drying times typically range from 2–6 hours depending on the cleaning method used, carpet thickness, airflow, and weather conditions.",
      },
      {
        question: "Can carpet cleaning remove pet stains and odours?",
        answer:
          "Yes. We can treat pet stains and odours as part of the carpet cleaning service. Heavily affected areas may require a more intensive treatment.",
      },
      {
        question: "Do you use steam cleaning for carpets?",
        answer:
          "We use appropriate methods depending on the carpet type and condition. Steam cleaning is available for suitable carpet types. We confirm the best approach when quoting.",
      },
      {
        question: "How often should carpets be professionally cleaned?",
        answer:
          "For most households, once or twice a year is recommended. High-traffic areas, pet owners, or rental properties may benefit from more frequent cleaning.",
      },
      {
        question: "Do you clean carpets in rental properties before the final inspection?",
        answer:
          "Yes. Carpet cleaning for rental inspections and move-outs is one of our most common requests. We can combine it with bond or end of lease cleaning for a complete service.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "bond-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
    ],
  },
  {
    slug: "pest-control-gold-coast",
    shortLabel: "Pest Control Gold Coast",
    navLabel: "Pest Control",
    metaTitle: "Pest Control Gold Coast | Local Treatments for Homes and Businesses",
    metaDescription:
      "Pest control across the Gold Coast for homes, rentals, and business premises dealing with common coastal pest issues. Request a fast local quote today.",
    heroEyebrow: "Gold Coast Pest Support",
    heroTitle: "Pest Control Gold Coast",
    heroDescription:
      "Wave Solution provides pest control across the Gold Coast for homes, rental properties, and workplaces needing practical treatment for common local pests.",
    primaryKeyword: "pest control Gold Coast",
    keywords: [
      "pest control Gold Coast",
      "pest treatment Gold Coast",
      "home pest control Gold Coast",
      "commercial pest control Gold Coast",
      "insect treatment Gold Coast",
      "cockroach treatment Gold Coast",
      "spider treatment Gold Coast",
      "ant treatment Gold Coast",
      "flea treatment Gold Coast",
      "termite inspection Gold Coast",
      "rodent control Gold Coast",
      "rental pest control Gold Coast",
    ],
    overview: [
      "Pest control is a natural complement to cleaning services in the Gold Coast because the local climate creates conditions that many pests thrive in. Warm temperatures, humidity, coastal weather patterns, and a mix of apartments, family homes, and commercial sites all contribute to ongoing pest pressure. A dedicated pest-control page should explain that local reality clearly rather than relying on generic Australia-wide statements.",
      "For customers, the problem is rarely abstract. They are usually dealing with visible activity, recurring concerns, or a property they want to protect before the issue gets worse. Homeowners want a safer and more comfortable environment. Tenants want to resolve problems quickly and present the property well. Businesses want treatment that supports hygiene and customer confidence. This page should acknowledge those needs directly.",
      "From an SEO perspective, pest control Gold Coast has strong local intent and deserves a page that stands on its own. It should connect naturally with end-of-lease, commercial, and deep-cleaning journeys where relevant, but the content still needs to be clearly about pest treatment rather than trying to force everything into a general cleaning page.",
    ],
    includedItems: [
      "Pest control support for homes, apartments, rentals, offices, and business premises",
      "Practical treatment planning for common Gold Coast pest issues and recurring concerns",
      "Clear quoting based on property type, site conditions, access, and treatment scope",
      "Helpful advice on preparation, property use, and follow-up support where needed",
      "Local service coverage across major Gold Coast suburbs and surrounding areas",
      "Easy handover between pest-control enquiries, rental cleaning, and general property support",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Pest control Gold Coast homes need in a humid coastal climate",
        paragraphs: [
          "Gold Coast properties deal with environmental conditions that can make pest issues more persistent. Humidity, warmth, and frequent indoor-outdoor movement all create opportunities for activity around kitchens, bathrooms, entry points, garages, storage areas, and outdoor living zones. A strong local pest-control page should reflect those practical conditions and help the customer feel understood quickly.",
          "That local awareness matters because customers want providers who understand the property types and climate conditions they actually live with. Homes near the coast, rental units, suburban family properties, and mixed-use business sites all have different patterns of risk and access.",
        ],
      },
      {
        title: "Pest treatment for rentals, homes, and commercial premises",
        paragraphs: [
          "Pest-control enquiries often overlap with broader property care. Tenants may need support before handover. Property managers may need treatment between occupancies. Businesses may need a clean, professional response that supports hygiene standards and customer confidence. By linking pest control thoughtfully with commercial cleaning, deep cleaning, and end-of-lease services, Wave Solution can create a much stronger property-services ecosystem.",
          "This page should still stay focused on pest treatment, but the internal links should help users move toward the right complementary service when their situation involves more than one issue. That improves both usability and topical depth across the site.",
        ],
      },
      {
        title: "Why local trust matters for pest control enquiries",
        paragraphs: [
          "Trust is especially important when someone is booking a provider into their home or workplace to deal with an issue that feels urgent or unpleasant. Customers want clear communication, practical next steps, and confidence that the provider understands the Gold Coast environment. A strong page therefore emphasises local service coverage, fast response, straightforward quoting, and clear follow-up support.",
          "It should also avoid overclaiming. White-hat SEO and good conversion copy both work better when the page is honest about process, scope, and next steps rather than promising unrealistic outcomes simply to chase clicks.",
        ],
      },
      {
        title: "A long-term local asset for pest control Gold Coast searches",
        paragraphs: [
          "This page should become the main local entry point for pest-control searches and then feed users to the right supporting content over time. That includes future blogs on common Gold Coast pests, prevention tips for humid homes, treatment frequency, and pre-settlement inspections, plus relevant service links for rental and commercial properties.",
          "When supported by real FAQs, suburb relevance, and genuine trust content, this page helps Wave Solution expand topical authority without undermining the cleaning-first structure of the rest of the site.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide pest control across the Gold Coast?",
        answer:
          "Yes. We provide pest control support across key Gold Coast suburbs for homes, rentals, and business premises.",
      },
      {
        question: "Can pest control be booked for rental properties?",
        answer:
          "Yes. Pest treatment can be arranged for rental properties, including situations where the property also needs end of lease or move-out cleaning support.",
      },
      {
        question: "Do you offer pest control for commercial premises?",
        answer:
          "Yes. We can support commercial pest-control enquiries depending on the premises, access needs, and treatment scope.",
      },
      {
        question: "How do I request a pest control quote?",
        answer:
          "Call us or use the booking and contact pages with your property type, suburb, issue details, and preferred timing so we can recommend the right next step.",
      },
      {
        question: "What pests do you treat in the Gold Coast?",
        answer:
          "We support treatment for common Gold Coast pests including cockroaches, ants, spiders, rodents, and other household pests. Contact us with details of your specific issue.",
      },
      {
        question: "Is pest control treatment safe for children and pets?",
        answer:
          "We use treatments appropriate for the property and situation. Let us know during booking if you have children, pets, or specific health considerations so we can plan accordingly.",
      },
      {
        question: "How long does pest control treatment take?",
        answer:
          "Treatment time depends on the property size and the type of pest issue. Most residential treatments can be completed within 1–2 hours.",
      },
      {
        question: "How soon after pest treatment can I return to my home?",
        answer:
          "This depends on the treatment type used. We advise on the recommended re-entry time based on the specific treatment applied at your property.",
      },
      {
        question: "Can pest control be combined with a bond or end of lease clean?",
        answer:
          "Yes. Pest treatment for rental properties can be planned alongside bond or end of lease cleaning for a more complete move-out service.",
      },
      {
        question: "How often should pest control be done?",
        answer:
          "For most Gold Coast properties, an annual or bi-annual treatment is recommended. Properties in humid or bush-adjacent areas may benefit from more frequent treatment.",
      },
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
    ],
  },
  {
    slug: "weekly-cleaning-gold-coast",
    shortLabel: "Weekly Cleaning Gold Coast",
    navLabel: "Weekly Cleaning",
    metaTitle: "Weekly Cleaning Gold Coast | Reliable Regular Home Cleaners",
    metaDescription:
      "Keep your Gold Coast home effortlessly spotless with Wave Solution's weekly house cleaning. Consistent, police-checked cleaners, tailored checklists & fast quotes.",
    heroEyebrow: "Recurring Domestic Cleaning",
    heroTitle: "Weekly House Cleaning Services in Gold Coast",
    heroDescription:
      "Wave Solution provides dependable weekly cleaning for busy households, active families, and professionals across the Gold Coast. Enjoy a pristine, sanitized living space every single week without the weekend chores.",
    primaryKeyword: "weekly cleaning Gold Coast",
    keywords: [
      "weekly cleaning Gold Coast",
      "regular house cleaning Gold Coast",
      "weekly cleaners Gold Coast",
      "recurring home cleaning Gold Coast",
      "domestic cleaning Gold Coast",
      "scheduled cleaners Gold Coast",
    ],
    overview: [
      "Balancing work commitments, family life, and active Gold Coast weekends leaves little time for demanding household chores. Weekly house cleaning is the most effective way to keep your home continuously fresh, hygienic, and organized without letting grime, dust, and soap scum accumulate to overwhelming levels.",
      "With a dedicated weekly cleaning schedule, our team takes ownership of the recurring heavy lifting. We focus on high-traffic areas, kitchen sanitization, bathroom hygiene, and thorough floor care so you always return to an immaculate environment. Having the same reliable, police-checked cleaners assigned to your home ensures familiarity with your property layout and personal preferences.",
      "Wave Solution delivers weekly cleaning services across key Gold Coast suburbs including Robina, Southport, Burleigh Heads, Broadbeach, Surfers Paradise, Nerang, and Coomera. We supply our own commercial-grade equipment and eco-friendly cleaning solutions, offering total peace of mind for families with children and pets.",
    ],
    includedItems: [
      "Complete kitchen degreasing, benchtop sanitisation, stovetop scrub, and exterior appliance wipe-down",
      "Full bathroom and ensuite disinfection, including showers, screens, bath tubs, basins, and mirrors",
      "Thorough dusting across furniture, skirting boards, accessible window sills, and decorative surfaces",
      "High-efficiency HEPA vacuuming of all carpets, rugs, stairs, and upholstered lounge suites",
      "Hard surface floor washing and damp mopping tailored to tiles, hardwood, and vinyl planking",
      "Rubbish bins emptied, relined, and sanitized with spot cleaning of high-touch door handles and switches",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Why regular weekly cleaning delivers superior home hygiene",
        paragraphs: [
          "In the Gold Coast's warm coastal climate, indoor humidity and airborne sea salt accelerate the buildup of dust, mould spores, and bathroom mildew. When cleaning is delayed to fortnightly or monthly intervals, dirt binds with humidity, requiring aggressive scrubbing that wears down finishes. A weekly maintenance cadence eliminates residues before they establish.",
          "Weekly cleaning also provides continuous relief for allergy and asthma sufferers. Regular HEPA vacuuming extracts microscopic coastal pollen, pet dander, and fine dust from soft furnishings before they circulate through air conditioning systems. Your indoor air remains noticeably fresher and healthier throughout the year.",
        ],
      },
      {
        title: "Same trusted local cleaner for complete consistency",
        paragraphs: [
          "We understand that welcoming someone into your private residence requires total confidence and trust. That is why Wave Solution prioritizes assigned cleaner consistency for weekly clients. Having the same vetted cleaner each week means you never have to repeat your instructions or point out sensitive areas.",
          "Our cleaners are police-vetted, insured, and thoroughly trained in residential etiquette. Whether you prefer to be home during your clean or leave a key in a secure lockbox while at work, our team works discreetly and reliably, treating your property with utmost respect.",
        ],
      },
      {
        title: "Flexible scheduling and tailored priority checklists",
        paragraphs: [
          "Every household functions differently. A family with young toddlers in Robina may require heavy emphasis on floor sanitisation and toy room organisation, while a professional couple in Southport may focus on kitchen presentation and crisp bathroom detailing. We build a personalized cleaning plan around your exact lifestyle.",
          "If your needs change from one week to the next—such as extra bed linen changes before visiting guests or interior fridge cleaning after a weekend barbecue—you can easily update your priorities with a quick message to our coordination team.",
        ],
      },
      {
        title: "Affordable and transparent recurring rates",
        paragraphs: [
          "Investing in weekly cleaning delivers exceptional value compared to ad-hoc deep cleans. Because your home is maintained at a consistently high standard, each visit is streamlined and cost-effective. We provide transparent fixed-rate or hourly billing with no hidden booking fees or locked-in long-term contracts.",
          "Request a straightforward, obligation-free weekly cleaning estimate today. Tell us about your property size, preferred service day, and specific focus areas, and we will tailor a reliable schedule that fits your routine seamlessly.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does weekly house cleaning cost in the Gold Coast?",
        answer:
          "Weekly cleaning costs depend on the number of bedrooms, bathrooms, and overall property size. Typical 2-bedroom units start from $90-$120 per visit, while 3-4 bedroom family homes usually range from $130-$190. Recurring weekly clients benefit from our most competitive hourly rates.",
      },
      {
        question: "Will I have the same cleaner every week?",
        answer:
          "Yes. We prioritize assigning the same dedicated, police-checked cleaner to your home each week to ensure consistent quality and complete familiarity with your household preferences.",
      },
      {
        question: "Do I need to be home during the weekly clean?",
        answer:
          "No, you do not need to be home. Many of our Gold Coast clients provide secure access via a key lockbox, garage code, or building intercom, returning home to a freshly cleaned property after work.",
      },
      {
        question: "Do you bring your own cleaning supplies and equipment?",
        answer:
          "Yes. Wave Solution supplies all professional cleaning chemicals, microfiber cloths, and commercial HEPA vacuum equipment. If you prefer us to use specific products of your own, we are happy to accommodate.",
      },
      {
        question: "What happens if I need to skip or reschedule a week?",
        answer:
          "We offer flexible scheduling. If you are going on holiday or need to adjust your cleaning day, simply notify us with 24 hours' notice and we will pause or reschedule without penalty fees.",
      },
      {
        question: "Are your weekly cleaners insured and background-checked?",
        answer:
          "Yes. Every member of our team is fully covered by comprehensive public liability insurance and has undergone verified national police background checks.",
      },
      {
        question: "Can I customize the cleaning checklist each week?",
        answer:
          "Absolutely. You can request rotational tasks such as interior oven cleaning, bed linen changes, or balcony wipe-downs simply by letting your cleaner or our support team know in advance.",
      },
      {
        question: "Which Gold Coast suburbs do you service for weekly cleaning?",
        answer:
          "We provide weekly cleaning across the entire Gold Coast corridor, including Southport, Surfers Paradise, Broadbeach, Robina, Burleigh Heads, Palm Beach, Nerang, Coomera, Helensvale, and Varsity Lakes.",
      },
    ],
    relatedSlugs: [
      "house-cleaning-gold-coast",
      "apartment-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
      "cleaning-gold-coast",
    ],
  },
  {
    slug: "apartment-cleaning-gold-coast",
    shortLabel: "Apartment Cleaning Gold Coast",
    navLabel: "Apartment Cleaning",
    metaTitle: "Apartment Cleaning Gold Coast | High-Rise & Unit Cleaners",
    metaDescription:
      "Expert apartment and high-rise unit cleaning across Surfers Paradise, Broadbeach, and Southport. Balcony salt-spray removal, glass cleaning, and lift-access coordination.",
    heroEyebrow: "Coastal High-Rise & Unit Specialists",
    heroTitle: "Apartment Cleaning Services in Gold Coast",
    heroDescription:
      "Wave Solution delivers specialised apartment and high-rise unit cleaning across the Gold Coast. From coastal balcony salt removal and glass detailing to compact kitchen care and secure security-fob coordination, we keep your unit pristine.",
    primaryKeyword: "apartment cleaning Gold Coast",
    keywords: [
      "apartment cleaning Gold Coast",
      "high rise cleaning Gold Coast",
      "unit cleaning Gold Coast",
      "flat cleaners Gold Coast",
      "coastal apartment cleaning",
      "apartment cleaners Surfers Paradise",
      "Broadbeach apartment cleaning",
    ],
    overview: [
      "Gold Coast apartment living offers breathtaking coastal views and a vibrant lifestyle, but coastal high-rises and residential complexes present distinct cleaning challenges. Sea air carries fine salt spray that quickly coats balcony glass and sliding door tracks, while wind-borne dust and high humidity create rapid grime accumulation.",
      "Wave Solution understands the logistical and practical requirements of modern unit and apartment cleaning. We handle building access protocols, underground visitor parking guidelines, and lift bookings with complete professionalism, ensuring a frictionless service for owners, tenants, and body corporate managers.",
      "Whether you reside in a luxury beachfront tower in Surfers Paradise or Broadbeach, a modern waterside complex in Southport, or a tranquil townhouse in Varsity Lakes, our apartment cleaning service delivers meticulous attention to detail tailored to compact layouts and architectural finishes.",
    ],
    includedItems: [
      "Balcony glass panel, balustrade, and outdoor tiled flooring wipe-down and salt residue removal",
      "Deep vacuuming and track scrubbing for heavy sliding patio doors and flyscreens",
      "Compact kitchen and European laundry sanitisation, degreasing, and splashback polishing",
      "Shower recess, glass screen, and bathroom ventilation detailing to eliminate humidity buildup",
      "Streak-free interior window cleaning with salt-film and coastal mist breakdown",
      "High-suction vacuuming of carpets and damp mopping of tiled or engineered timber living areas",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Tackling coastal salt spray, windblown dust, and balcony glass",
        paragraphs: [
          "Apartments positioned along the Gold Coast coastline face constant exposure to salt-laden marine air. Over time, salt deposits etch into glass balustrades and corrode aluminium sliding door mechanisms if not regularly treated. Our apartment cleaning protocol specifically targets salt breakdown using non-abrasive, marine-safe solutions.",
          "We carefully clean sliding glass tracks that trap sand and debris, restoring smooth door glide and preventing air leaks. Balcony tiles and outdoor furnishings are washed down to remove coastal grime, allowing you to enjoy your outdoor living spaces without carrying grit into your living room.",
        ],
      },
      {
        title: "Seamless building access, concierge coordination, and parking protocols",
        paragraphs: [
          "Cleaning an apartment is very different from cleaning a detached suburban house. It requires navigating security gates, key fobs, service lifts, and tight visitor parking allocations. Wave Solution has extensive experience working across Gold Coast residential towers and strata complexes.",
          "We coordinate seamlessly with on-site building managers and concierges. If you work during the day, we can collect keys from your building reception or lockbox and return them securely once the clean is finished, ensuring zero disruption to your daily schedule.",
        ],
      },
      {
        title: "Efficient, space-smart cleaning for compact and luxury floor plans",
        paragraphs: [
          "Modern Gold Coast units often feature integrated cabinetry, European concealed laundries, stone benchtops, and floor-to-ceiling glazing. Our team uses specialized microfibre techniques and pH-neutral surface protectors that safeguard premium architectural finishes.",
          "We optimize our workflow for apartment layouts, ensuring that every square metre—from concealed storage nooks and wardrobe runners to high bathroom exhaust vents—receives comprehensive attention without cluttering your living areas.",
        ],
      },
      {
        title: "Routine maintenance or pre-guest presentation cleans",
        paragraphs: [
          "We cater to both long-term apartment residents seeking weekly or fortnightly upkeep and property owners preparing their units for visiting family or corporate letting. Our flexible booking options make it effortless to maintain five-star presentation year-round.",
          "Get in touch with Wave Solution today for an upfront, transparent apartment cleaning quote. Let our experienced local team restore clarity to your views and sparkle to your coastal residence.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you handle security fob and lift access for apartments?",
        answer:
          "We coordinate with building management or follow your exact instructions for key fobs, intercoms, or concierge key pickup. Our team is fully accustomed to high-rise security protocols across the Gold Coast.",
      },
      {
        question: "Do you clean apartment balconies and exterior balcony glass?",
        answer:
          "Yes. Balcony floor sweeping/mopping and interior balcony glass cleaning are standard inclusions. Accessible exterior balcony glass is also carefully cleaned within safe reaching limits.",
      },
      {
        question: "How often should a Gold Coast apartment be cleaned?",
        answer:
          "Due to coastal humidity and salt spray, most apartment residents choose a fortnightly or weekly cleaning schedule. This prevents salt etching on glass and stops bathroom mould from developing.",
      },
      {
        question: "What if there is no visitor parking in my building?",
        answer:
          "Please inform us when booking. Our team brings compact, portable equipment and can utilize designated loading zones or nearby street parking to ensure punctual arrival.",
      },
      {
        question: "Can I book apartment cleaning for a holiday home or rental unit?",
        answer:
          "Yes. We support holiday home owners, executive rentals, and private unit owners who need regular turnover cleans or pre-arrival detailing.",
      },
      {
        question: "Do you clean sliding door tracks?",
        answer:
          "Yes. Heavy sliding glass door tracks collect significant sand and salt buildup in coastal units. We thoroughly vacuum and brush out these tracks during every apartment clean.",
      },
      {
        question: "Are your cleaning products safe for stone benchtops and delicate surfaces?",
        answer:
          "Yes. We strictly use pH-neutral, non-abrasive professional cleaners that protect engineered stone, marble, chrome tapware, and tempered glass surfaces.",
      },
      {
        question: "Which high-rise suburbs do you service most frequently?",
        answer:
          "We clean apartments daily throughout Surfers Paradise, Broadbeach, Main Beach, Southport, Robina, Burleigh Heads, and Palm Beach.",
      },
    ],
    relatedSlugs: [
      "house-cleaning-gold-coast",
      "weekly-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
      "bond-cleaning-gold-coast",
    ],
  },
  {
    slug: "end-of-lease-pest-control-gold-coast",
    shortLabel: "End of Lease Pest Control Gold Coast",
    navLabel: "End of Lease Pest Control",
    metaTitle: "End of Lease Pest Control Gold Coast | Bond Handover Receipt",
    metaDescription:
      "Guaranteed end of lease pest control in Gold Coast for rental tenants and pet handovers. Licensed treatment, approved chemicals & immediate real estate compliance receipt.",
    heroEyebrow: "QLD Rental Tenancy Compliance",
    heroTitle: "End of Lease Pest Control in Gold Coast",
    heroDescription:
      "Wave Solution delivers certified end of lease pest control for tenants moving out of Gold Coast rental properties. Flea treatments for pet clauses, cockroach eradication, and immediate compliance certificates for your property manager to ensure full bond return.",
    primaryKeyword: "end of lease pest control Gold Coast",
    keywords: [
      "end of lease pest control Gold Coast",
      "bond pest control Gold Coast",
      "flea treatment end of lease Gold Coast",
      "move out pest control Gold Coast",
      "rental pest spray Gold Coast",
      "pet lease pest control Gold Coast",
      "bond return pest certificate",
    ],
    overview: [
      "Moving out of a rental property in Queensland is demanding, and lease agreements frequently require professional pest control before your rental bond can be legally released. Under Queensland Residential Tenancies Authority (RTA) regulations, tenants who have kept domestic pets are almost universally obligated to provide a certified end of lease flea treatment receipt.",
      "Even properties without pets frequently specify an end of lease pest spray for common pests like cockroaches, silverfish, and spiders as part of the vacate condition standards. Failing to provide an authorized pest control receipt from an insured, licensed technician can cause bond disputes, delayed refunds, or costly agent re-cleans.",
      "Wave Solution provides hassle-free, fully compliant end of lease pest management across the Gold Coast. We coordinate seamlessly with your bond cleaning and carpet steam cleaning schedule, issuing an immediate digital receipt and treatment certificate that property managers accept without question.",
    ],
    includedItems: [
      "Licensed internal pest spray covering skirting boards, cornices, cupboards, and entryways",
      "Specialized flea eradication treatment for rental properties with domestic pet clauses",
      "Targeted cockroach, spider, and silverfish preventative treatment in kitchens and wet areas",
      "Immediate digital Pest Treatment Certificate and tax invoice issued for your real estate agent",
      "Australian-standard approved, low-odour formulations safe for families and future occupants once dry",
      "Full warranty and free re-spray guarantee if your property manager flags any pest issue on inspection",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Meeting Queensland RTA tenancy obligations and pet clauses",
        paragraphs: [
          "Standard Queensland General Tenancy Agreements (Form 18a) include specific special terms regarding domestic pets. If a dog, cat, or other animal resided on the property, tenants are contractually bound to have the premises fumigated or treated for fleas and parasites upon vacating.",
          "Property managers conduct thorough exit condition inspections and mandate a legitimate receipt from a registered pest management company. Wave Solution provides the exact documentation required, ensuring your file is stamped compliant without back-and-forth communication.",
        ],
      },
      {
        title: "Coordinating pest control with your bond cleaning and carpet clean",
        paragraphs: [
          "Timing is critical during a vacate clean. Performing pest control before carpets are steam cleaned or before bond cleaners mop the floors can wash away the active residual barrier. The correct, industry-standard sequence is: bond cleaning first, carpet steam cleaning second, and end of lease pest treatment last as the technician locks up.",
          "Because Wave Solution offers comprehensive bond cleaning, carpet cleaning, and pest control under one roof, we eliminate coordination headaches. Our integrated vacate packages save you money, prevent contractor scheduling conflicts, and guarantee that each step is performed in the ideal sequence.",
        ],
      },
      {
        title: "Safe, approved treatments that dry quickly and protect properties",
        paragraphs: [
          "We utilize premium, low-toxicity synthetic pyrethroid treatments approved under Australian health standards. These formulations target pests aggressively while remaining odourless and completely safe for human and animal contact once dry (typically 1–2 hours).",
          "Our technicians apply residual barrier treatments along interior skirting boards, window tracks, dark cabinet recesses, and exterior perimeters. This creates an invisible protective barrier that prevents pest migration and satisfies even the strictest real estate checklist.",
        ],
      },
      {
        title: "Instant digital receipt and full bond back guarantee",
        paragraphs: [
          "As soon as our technician completes the vacate treatment, a formal Pest Treatment Certificate specifying the chemical active ingredients, target pests, licence number, and property address is emailed directly to you and your property manager.",
          "We stand firmly behind our service with a 100% agent satisfaction guarantee. In the rare event that your property manager raises any concern during their exit inspection, we will return to re-inspect and re-treat the area promptly at no additional cost to you.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is end of lease pest control mandatory for all QLD rental properties?",
        answer:
          "If you have kept pets at the property, end of lease flea treatment is almost always mandatory under your tenancy agreement. For properties without pets, many leases still require general pest control (cockroaches and spiders) upon moving out. Check your lease agreement special terms.",
      },
      {
        question: "Do you provide a formal receipt for my real estate agent?",
        answer:
          "Yes. Immediately upon completion, we issue an official digital Pest Treatment Certificate and tax invoice detailing the licence number, chemicals applied, and property details for your property manager.",
      },
      {
        question: "Should pest control be done before or after the bond clean?",
        answer:
          "Pest control should always be done LAST, after bond cleaning and carpet steam cleaning are completed. This prevents cleaning products or steam from washing away the protective pest barrier.",
      },
      {
        question: "Can I bundle end of lease pest control with bond and carpet cleaning?",
        answer:
          "Yes! Bundling bond cleaning, carpet steam cleaning, and pest control with Wave Solution is our most popular package. It saves you money and ensures seamless coordination on handover day.",
      },
      {
        question: "How long does the pest spray take to dry?",
        answer:
          "Interior treatments typically take 1 to 2 hours to dry completely depending on airflow and humidity. Once dry, it is completely odourless and safe.",
      },
      {
        question: "What pests are covered in the end of lease treatment?",
        answer:
          "Our standard move-out service covers fleas (essential for pet clauses), German and American cockroaches, spiders, and silverfish across all interior zones.",
      },
      {
        question: "What happens if my property manager fails the pest inspection?",
        answer:
          "We offer a 100% bond-back guarantee on our treatments. If your property manager reports any pest issues within the warranty period, we return and re-treat the property free of charge.",
      },
      {
        question: "Which Gold Coast suburbs do you cover for bond pest control?",
        answer:
          "We cover all Gold Coast suburbs from Coolangatta to Coomera, including Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Nerang, and Helensvale.",
      },
    ],
    relatedSlugs: [
      "pest-control-gold-coast",
      "bond-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "carpet-cleaning-gold-coast",
    ],
  },
]

export const servicePageMap = new Map(servicePages.map((page) => [page.slug, page]))

export const servicePageSlugs = servicePages.map((page) => page.slug)

export function getServicePage(slug: string) {
  return servicePageMap.get(slug)
}

export const legacyServiceRedirects: Record<string, string> = {
  "home-cleaning": "/house-cleaning-gold-coast",
  "office-cleaning": "/office-cleaning-gold-coast",
  "deep-cleaning": "/deep-cleaning-gold-coast",
  "bond-cleaning": "/bond-cleaning-gold-coast",
  "end-of-lease-cleaning": "/end-of-lease-cleaning-gold-coast",
  "move-in-cleaning": "/move-in-cleaning-gold-coast",
  "after-builders-cleaning": "/after-builders-cleaning-gold-coast",
  "commercial-cleaning": "/commercial-cleaning-gold-coast",
  "carpet-cleaning": "/carpet-cleaning-gold-coast",
  "pest-control": "/pest-control-gold-coast",
}
