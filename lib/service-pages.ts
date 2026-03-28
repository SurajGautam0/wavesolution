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
    shortLabel: "Cleaning Gold Coast",
    navLabel: "Cleaning Gold Coast",
    metaTitle: "Cleaning Gold Coast | Local Home, Office & Rental Cleaners",
    metaDescription:
      "Looking for reliable cleaning in the Gold Coast? Wave Solution cleans homes, offices, rentals and commercial spaces across key Gold Coast suburbs. Get a fast local quote today.",
    heroEyebrow: "Gold Coast Local Cleaners",
    heroTitle: "Local Cleaning Services in Gold Coast",
    heroDescription:
      "Wave Solution provides professional cleaning services across the Gold Coast for homes, offices, rental properties, and local businesses that want dependable results and a simple booking process.",
    primaryKeyword: "cleaning Gold Coast",
    keywords: [
      "cleaning Gold Coast",
      "cleaning services Gold Coast",
      "professional cleaners Gold Coast",
      "local cleaners Gold Coast",
    ],
    overview: [
      "Finding the right cleaning service in the Gold Coast should feel straightforward. Most people are not looking for a flashy sales pitch. They want a local team that shows up when promised, communicates clearly, and leaves the property in a noticeably better condition than when they arrived. That is the position this page is designed to support. Wave Solution should feel like the practical local choice for households, offices, rental properties, and businesses that need dependable cleaning without the usual hassle.",
      "Cleaning needs vary widely across the Gold Coast. Some clients need weekly or fortnightly house cleaning to keep up with family life and work schedules. Some need a one-off deep clean before guests, inspections, or events. Tenants often need urgent bond cleaning or end of lease cleaning before handover. Business owners need office and commercial cleaning that supports presentation, staff comfort, and hygiene. A strong local cleaning page should acknowledge those different use cases and guide people to the most suitable service quickly.",
      "Wave Solution services key Gold Coast suburbs including Southport, Robina, Surfers Paradise, Broadbeach, Burleigh Heads, Palm Beach, Nerang, Helensvale, and Coomera. By grounding the page in genuine Gold Coast service coverage, local property types, and real-world cleaning needs, this landing page can rank for broad local searches while also acting as the main internal-linking hub for all the specialised service pages below it.",
    ],
    includedItems: [
      "House cleaning for apartments, townhouses, family homes, and holiday properties",
      "Office cleaning for admin suites, shared workplaces, and professional premises",
      "Bond cleaning and end of lease cleaning for tenants, landlords, and property managers",
      "Commercial cleaning for customer-facing businesses and operational workspaces",
      "Deep cleaning for properties that need a more detailed top-to-bottom reset",
      "Flexible one-off, weekly, fortnightly, and custom scheduling across the Gold Coast",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Cleaning Gold Coast homes, rentals, and workplaces with local detail",
        paragraphs: [
          "A broad local keyword such as cleaning Gold Coast works best when the page speaks naturally to the different property types that exist across the region. Gold Coast clients are not all searching for the same thing. Apartment residents in Surfers Paradise have different needs from family households in Robina, and office managers in Southport need a different outcome from landlords preparing a rental property for a new tenant. A useful local page reflects those differences instead of treating every job like the same standard clean.",
          "That is why Wave Solution should position this page as the local entry point to every core service. If someone needs local house cleaners, they should quickly see the path to the house cleaning page. If they need professional cleaners Gold Coast businesses can rely on, they should have a clear route to office cleaning or commercial cleaning. If they are under pressure before handover, they should be able to move directly into the bond cleaning or end of lease cleaning page without guessing where to click next.",
        ],
      },
      {
        title: "Professional cleaners Gold Coast clients can book with confidence",
        paragraphs: [
          "Trust is one of the biggest conversion drivers in the cleaning category. The visitor is inviting someone into their home, office, or rental property, so they want reassurance before they enquire. This page should therefore reinforce the basics clearly: fully insured cleaners, police-checked staff, fast quote responses, and a local team that understands Gold Coast scheduling and suburb coverage. These are not optional extras. They are key trust signals that influence whether someone keeps reading or clicks back to a competitor.",
          "The page should also make it easy to understand what happens next. Users should be able to request a quote, call the business directly, or move to a service page that matches their job. That clarity helps both search visitors and paid traffic convert more reliably. The broad local cleaning page is most effective when it acts like a helpful guide rather than a catch-all brochure.",
        ],
      },
      {
        title: "Local house cleaners, office cleaners, and rental cleaning support",
        paragraphs: [
          "Wave Solution can use this page to naturally mention the main service categories without forcing every keyword into the same sentence. House cleaning Gold Coast searches should be supported through links and supporting copy about recurring household cleaning. Office cleaning Gold Coast searches should be supported through copy about workplace presentation, flexible access, and recurring schedules. Bond cleaning Gold Coast and end of lease cleaning Gold Coast should be supported through references to rental handover, inspection readiness, and move-out detail.",
          "This content strategy helps Google understand topical breadth while still keeping each specialised page focused. It also helps users self-select faster. Someone who lands here with a broad search can see exactly where to go next, which lowers friction and improves conversion quality. In practical terms, the page works as a Gold Coast cleaning hub: broad enough to rank, specific enough to convert, and structured enough to strengthen the internal-link network across the site.",
        ],
      },
      {
        title: "Cleaning services Gold Coast businesses and households can book easily",
        paragraphs: [
          "The page should finish with a simple, local call to action. Ask the visitor what needs cleaning, where the property is located, and when the service is needed. Link directly to booking and contact, and support those links with anchor text like cleaning Gold Coast, professional cleaners Gold Coast, and local house cleaners. Those internal signals help SEO while keeping the user journey practical.",
          "When this page is supported by dedicated service pages, suburb pages, and stronger trust content, Wave Solution becomes more competitive against both large franchises and boutique local operators. The advantage is not just better keywords. It is a cleaner structure, stronger local focus, and a site that feels easier to trust and easier to use.",
        ],
      },
    ],
    faqs: [
      {
        question: "What cleaning services do you offer across the Gold Coast?",
        answer:
          "We offer house cleaning, office cleaning, bond cleaning, end of lease cleaning, commercial cleaning, and deep cleaning across key Gold Coast suburbs.",
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
    ],
    overview: [
      "House cleaning is one of the most valuable services for busy Gold Coast households because it takes pressure off the routine jobs that never really stop. Bathrooms need constant attention, kitchens gather mess quickly, and floors lose their fresh look fast when family life gets busy. A professional house cleaning service helps you stay on top of the home without having to use evenings or weekends catching up on chores that keep repeating.",
      "Wave Solution's house cleaning page should make it clear that this is a flexible local service, not a rigid package. Some clients want weekly or fortnightly visits to keep the home consistently under control. Others want a one-off reset before visitors arrive, after a busy month, or before putting the home on the market. Some properties need an initial deeper clean before moving into a regular schedule. Explaining those options clearly helps convert a much wider range of residential leads.",
      "This page is also a strong SEO asset because house cleaning Gold Coast is a highly relevant, high-intent search term. A page built around real household needs, practical inclusions, clear internal links, and local suburb references will perform much better than a short brochure page with generic pricing alone.",
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
        title: "House cleaning Gold Coast families can rely on every week",
        paragraphs: [
          "A recurring house cleaning service should make life easier, not create more admin. That means reliable timing, clear scope, and a cleaner who understands the difference between a quick surface tidy and a genuinely well-maintained home. Gold Coast households often need help keeping bathrooms, kitchens, floors, and high-traffic areas under control. When those rooms stay cleaner, the whole property feels calmer and easier to live in.",
          "Recurring house cleaning works especially well for busy families, working professionals, retirees who want to reduce physical strain, and property owners who simply prefer to outsource the time-consuming jobs. This page should show that Wave Solution supports all of those use cases with flexible scheduling and a quote process based on the actual home rather than a generic sales script.",
        ],
      },
      {
        title: "Local house cleaners for apartments, homes, and coastal properties",
        paragraphs: [
          "Gold Coast homes vary widely, and the copy should reflect that. Apartments in Surfers Paradise or Broadbeach often need efficient recurring maintenance and careful bathroom and kitchen attention. Family homes in Robina or Southport may need more floor area, more bathrooms, and more activity zones cleaned on a regular basis. Coastal homes can also deal with extra dust, sand, and salt-related wear, so the page should feel local rather than copied from a national template.",
          "A strong house cleaning page acknowledges those differences and explains that quotes depend on property size, condition, frequency, and any optional extras. That builds trust. Visitors are more likely to enquire when the page sounds practical and realistic instead of over-simplified.",
        ],
      },
      {
        title: "Home cleaning Gold Coast clients can tailor to their routine",
        paragraphs: [
          "One of the biggest conversion opportunities on this page is flexibility. Some clients want a one-off home cleaning visit. Others want a weekly or fortnightly cleaner. Some need a deeper first clean followed by ongoing maintenance. Wave Solution should explain that the service can be matched to the property and lifestyle. That matters because many leads are not sure whether they need regular cleaning or a one-off reset.",
          "The page should also highlight the easiest next step: tell us the suburb, the type of home, the number of bedrooms and bathrooms, and your preferred schedule. That kind of practical call to action consistently outperforms vague booking language because it feels specific to the visitor's situation.",
        ],
      },
      {
        title: "Why homeowners choose professional cleaners Gold Coast can trust",
        paragraphs: [
          "People do not only book residential cleaning for convenience. They book because they want the home to feel better. A professionally cleaned home is easier to maintain, easier to enjoy, and easier to present for visitors, family, or everyday life. When the bathrooms are fresh, the kitchen is tidy, the floors are cleaned properly, and dust is under control, the property feels lighter and more manageable.",
          "That outcome is what the page should sell. Not just tasks completed, but the practical benefit of a cleaner and less stressful home. Combined with visible trust signals, local suburb coverage, and strong internal links to cleaning Gold Coast, contact, and booking pages, this service page becomes a high-intent residential landing page instead of a basic services listing.",
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
    ],
    overview: [
      "Bond cleaning is one of the most important cleaning services for tenants because the property is usually being judged against a much higher standard than a regular maintenance clean. By the time someone searches bond cleaning Gold Coast, they are often moving furniture, finalising utilities, coordinating keys, and trying to stay on top of multiple deadlines. A strong bond-cleaning page needs to reflect that urgency and show that Wave Solution understands the pressure involved.",
      "This page should position the service as detailed, practical, and inspection-focused. The user does not just want a cleaner property. They want a property that looks ready for handover. That means kitchens, bathrooms, internal surfaces, floors, cupboards, drawers, skirting boards, fittings, and other detail areas all need to be clearly addressed in the copy. The page should explain that the final scope depends on the property size, condition, and any additional services required.",
      "From an SEO perspective, this is a high-intent local page. Bond cleaning, move-out cleaning, and rental handover searches are commercial terms with strong booking intent. A detailed local page gives Wave Solution a much better chance of competing against specialist move-out cleaners in the Gold Coast market.",
    ],
    includedItems: [
      "Detailed move-out cleaning for kitchens, bathrooms, bedrooms, and living areas",
      "Internal wipe-down of surfaces, fittings, cupboards, drawers, and high-touch areas",
      "Vacuuming, mopping, and presentation-focused floor cleaning throughout the property",
      "Apartment, townhouse, unit, and house bond cleaning across the Gold Coast",
      "Optional coordination for add-ons such as carpet cleaning or additional detail work",
      "Clear quoting based on property size, condition, timing, and access requirements",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "Bond cleaning Gold Coast tenants need before inspection day",
        paragraphs: [
          "The strongest bond-cleaning pages acknowledge the real-world context around the booking. Tenants are often working to a final-inspection date, a key-return time, or the end of a lease agreement. They want a cleaning service that understands the difference between a routine house clean and a proper move-out clean. That distinction matters because a bond clean is about presentation under inspection conditions, not just everyday tidiness.",
          "Wave Solution should explain that the service is built around the property handover process. If the property needs a higher level of detail, the quote should reflect that clearly. This transparency helps the customer understand the value of the service and reduces friction during the quote stage.",
        ],
      },
      {
        title: "Move-out cleaning for apartments, homes, and rental properties",
        paragraphs: [
          "Bond cleaning needs vary by property type. Apartments in Surfers Paradise or Broadbeach often need detailed kitchen, bathroom, and internal-surface work in a compact footprint. Larger homes in Robina or Southport may require more floor area, more bathrooms, and more cabinetry or storage spaces to be detailed properly. The page should talk naturally about those property types so the visitor can see that the quote process is grounded in practical experience.",
          "This is also a strong place to mention that property managers, landlords, and tenants can all enquire. That broadens the page's usefulness without diluting the keyword focus, and it helps Wave Solution win both direct tenant bookings and referral-style rental-property leads.",
        ],
      },
      {
        title: "Professional cleaners Gold Coast renters can organise with less stress",
        paragraphs: [
          "One of the best conversion improvements on a bond-cleaning page is clarity around next steps. Users want to know what to provide when they enquire. Ask for the suburb, property type, number of bedrooms and bathrooms, preferred date, and whether extras are needed. This makes the process feel manageable and also improves lead quality for the business.",
          "The page should also reinforce the local advantage. A team that already services the Gold Coast understands common apartment layouts, rental turnover, and suburb-specific access issues better than a generic interstate-style template. That local specificity helps both SEO and conversion performance.",
        ],
      },
      {
        title: "Linking bond cleaning with cleaning Gold Coast and end of lease support",
        paragraphs: [
          "This page should internally link to cleaning Gold Coast for broad local intent, end of lease cleaning Gold Coast for closely related rental intent, the contact page for quote requests, and the booking page for direct action. These internal links strengthen the topical cluster and make it easier for users to move where they need to go.",
          "When bond-cleaning content is detailed, locally relevant, and supported by clear trust signals, it gives Wave Solution a much better chance of outperforming weaker competitors that rely on thin copy or cluttered design. It becomes a focused rental-conversion page instead of just another services listing.",
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
          "Pricing depends on the size of the property, the condition, the number of rooms, access timing, and any optional extras requested.",
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
    ],
    overview: [
      "End of lease cleaning sits very close to bond cleaning, but the way users think about the service is often slightly different. Some people are focused on the bond outcome. Others are focused on the rental handover, inspection date, or simply getting the property cleaned properly before keys are returned. A dedicated end-of-lease page lets Wave Solution speak to that handover process directly instead of forcing every rental lead into the same terminology.",
      "This page should position the service around detail, inspection readiness, and a calmer move-out process. The customer is often juggling packing, removalists, paperwork, and date pressure. The copy should therefore sound organised and helpful rather than overly sales-heavy. Explain the type of property covered, the level of detail expected, and how the quoting process works based on size, condition, and timing.",
      "From a ranking perspective, end of lease cleaning Gold Coast is a valuable local keyword that deserves its own page. When supported by strong internal links and distinct messaging from the bond-cleaning page, it gives the site a better chance of ranking for both phrase variations without cannibalising itself.",
    ],
    includedItems: [
      "Detailed room-by-room rental exit cleaning based on property type and handover needs",
      "Bathrooms, kitchens, surfaces, floors, cupboards, drawers, and fittings within scope",
      "Apartment, unit, townhouse, and house end-of-lease cleaning across the Gold Coast",
      "Practical quoting for move-out timelines, property size, and additional requests",
      "Clear communication for tenants, landlords, and property managers",
      "Easy internal path to related services such as bond cleaning and deep cleaning",
    ],
    whyChooseUs: sharedWhyChooseUs,
    sections: [
      {
        title: "End of lease cleaning Gold Coast renters can organise before handover",
        paragraphs: [
          "The best end-of-lease pages reduce uncertainty. Many tenants are not completely sure what standard the property manager will expect, so the site should explain the service in plain language. This is a detailed rental-exit clean designed to help the property present properly at handover. It is more thorough than routine house cleaning and should be scoped according to the condition and layout of the property.",
          "That clarity improves conversion because the customer immediately understands why the service matters and why the quote may differ from a standard household clean. It also helps Wave Solution sound more experienced and trustworthy in a high-stress service category.",
        ],
      },
      {
        title: "Rental cleaning for Gold Coast apartments, units, and family homes",
        paragraphs: [
          "Gold Coast rental stock includes everything from beachfront apartments and compact units to family homes and townhouses. Each of those property types has a different move-out cleaning profile. Smaller apartments may need intense bathroom and kitchen work plus internal glass and cabinetry. Larger homes may need broader floor coverage, multiple bathrooms, and more room-by-room detail. The page should reflect those differences naturally so the visitor sees a realistic service, not a generic promise.",
          "This page should also mention that property managers and landlords can enquire directly. A well-structured rental-cleaning page can appeal to both direct consumer leads and recurring referral-style work, especially when combined with local suburb signals and clear quote handling.",
        ],
      },
      {
        title: "Professional cleaners Gold Coast property managers can contact easily",
        paragraphs: [
          "End-of-lease leads are often under time pressure, so the contact path needs to be simple. Ask the visitor for the suburb, property type, size, and preferred handover date. That gives the team what they need to quote quickly while also reassuring the customer that the enquiry is being handled properly.",
          "This is also a good place to highlight related services. Some customers may realise they actually need bond cleaning language, while others may need deep cleaning or a broader cleaning Gold Coast page first. Linking those pathways clearly improves both SEO and UX.",
        ],
      },
      {
        title: "A stronger local page for lease cleaning Gold Coast searches",
        paragraphs: [
          "Competitor pages in this space often rely on thin content or messy layouts. Wave Solution can outperform that by giving the visitor a clearer service explanation, stronger trust signals, local suburb references, and better internal links. That combination makes the page stronger for both rankings and conversion.",
          "When the page finishes with a confident local CTA and practical FAQ answers, it becomes a real booking asset. Instead of asking visitors to guess, it helps them move toward the right service and the right next step.",
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
          "It depends on the size and condition of the property. A deeper service usually takes longer than regular maintenance cleaning because of the extra detail involved.",
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
    ],
    relatedSlugs: [
      "cleaning-gold-coast",
      "commercial-cleaning-gold-coast",
      "end-of-lease-cleaning-gold-coast",
      "deep-cleaning-gold-coast",
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
