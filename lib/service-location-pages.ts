export type ServiceLocationFaq = {
  question: string
  answer: string
}

export type ServiceLocationKey =
  | "bond-cleaning-gold-coast"
  | "house-cleaning-gold-coast"
  | "end-of-lease-cleaning-gold-coast"
  | "pest-control-gold-coast"
  | "office-cleaning-gold-coast"

export type ServiceProfile = {
  key: ServiceLocationKey
  label: string
  parentHref: string
  priceGuideHref?: string
  scopeHeading: string
  scopeIntro: string
  scope: string[]
  extraLink?: { href: string; label: string }
}

export const serviceProfiles: Record<ServiceLocationKey, ServiceProfile> = {
  "bond-cleaning-gold-coast": {
    key: "bond-cleaning-gold-coast",
    label: "Bond Cleaning",
    parentHref: "/bond-cleaning-gold-coast",
    priceGuideHref: "/bond-cleaning-cost-gold-coast",
    scopeHeading: "What a bond clean covers",
    scopeIntro:
      "The clean is worked room by room against the same list property managers expect at a final inspection, and the scope is confirmed with you before the booking is locked in.",
    scope: [
      "Kitchen: oven interior, stovetop, rangehood filters, cupboards inside and out, splashbacks and tapware",
      "Bathrooms: shower screens, tile grout, basins, mirrors, toilets and full sanitising",
      "Living and bedrooms: wardrobe interiors, shelving, doors, handles, light switches and skirting boards",
      "Windows and tracks: internal glass, sills and sliding door tracks",
      "Floors: carpet vacuuming and damp mopping of hard surfaces",
    ],
    extraLink: { href: "/bond-pest-carpet-end-of-lease", label: "Bond, pest and carpet bundle" },
  },
  "house-cleaning-gold-coast": {
    key: "house-cleaning-gold-coast",
    label: "House Cleaning",
    parentHref: "/house-cleaning-gold-coast",
    priceGuideHref: "/house-cleaning-cost-gold-coast",
    scopeHeading: "What a house clean covers",
    scopeIntro:
      "Visits are tailored to the property, then repeated on the rhythm you choose so the home stays at the same standard between visits.",
    scope: [
      "Kitchen: benches, sink, stovetop, splashbacks, cupboard fronts and external appliance faces",
      "Bathrooms: basins, baths, showers, tile surfaces, mirrors and full sanitising",
      "Living and bedrooms: reachable surfaces dusted, light switches, skirting and handles",
      "Floors: vacuuming throughout and mopping of hard surfaces",
      "Bins emptied, surfaces tidied and the general presentation reset",
    ],
    extraLink: { href: "/deep-cleaning-gold-coast", label: "Deep cleaning" },
  },
  "end-of-lease-cleaning-gold-coast": {
    key: "end-of-lease-cleaning-gold-coast",
    label: "End of Lease Cleaning",
    parentHref: "/end-of-lease-cleaning-gold-coast",
    priceGuideHref: "/bond-cleaning-cost-gold-coast",
    scopeHeading: "What the exit clean covers",
    scopeIntro:
      "The clean is scheduled backwards from your inspection date and run against a room-by-room checklist so nothing is missed on the day.",
    scope: [
      "Kitchen: oven interior, stovetop, rangehood filters, cupboards inside and out, splashbacks and tapware",
      "Bathrooms: shower screens, grout, basins, mirrors, toilets and full sanitising",
      "Living and bedrooms: wardrobe interiors, shelving, doors, handles, light switches and skirting boards",
      "Windows, sills and sliding door tracks, plus full vacuuming and mopping",
      "Balcony, courtyard or garage swept and cleared where they are part of the tenancy",
    ],
    extraLink: { href: "/end-of-lease-cleaning-checklist", label: "End of lease cleaning checklist" },
  },
  "pest-control-gold-coast": {
    key: "pest-control-gold-coast",
    label: "Pest Control",
    parentHref: "/pest-control-gold-coast",
    priceGuideHref: "/pest-control-cost-gold-coast",
    scopeHeading: "What a treatment covers",
    scopeIntro:
      "Identification comes first, then the treatment is matched to what is actually present, with preparation and re-entry guidance explained before the work starts.",
    scope: [
      "Assessment of the property and the activity before a treatment approach is recommended",
      "Internal treatment for common pests such as cockroaches, spiders, ants and silverfish",
      "External treatment and barrier work where the job calls for it",
      "Rodent baiting and monitoring where required",
      "Flea treatment for homes vacated by pets or with active infestations",
    ],
    extraLink: { href: "/bond-pest-carpet-end-of-lease", label: "Bond, pest and carpet bundle" },
  },
  "office-cleaning-gold-coast": {
    key: "office-cleaning-gold-coast",
    label: "Office Cleaning",
    parentHref: "/office-cleaning-gold-coast",
    priceGuideHref: "/cleaning-prices-gold-coast",
    scopeHeading: "What an office clean covers",
    scopeIntro:
      "The checklist is built around your premises and hours, then repeated on the schedule that suits your team and your clients.",
    scope: [
      "Kitchen and break areas: benches, sink, appliances, cupboard fronts and bins",
      "Bathrooms: basins, mirrors, toilets, partitions and full restocking of consumables where supplied",
      "Workstations: desks, meeting rooms, shared surfaces and high-touch points",
      "Floors: vacuuming of carpets and mopping of hard surfaces",
      "Entry, reception and common areas presentable before the day starts",
    ],
    extraLink: { href: "/commercial-cleaning-gold-coast", label: "Commercial cleaning" },
  },
}

export type ServiceLocationPage = {
  serviceSlug: ServiceLocationKey
  suburbSlug: string
  suburbName: string
  title: string
  metaDescription: string
  intro: string[]
  directAnswer: string
  localNotes: { title: string; body: string }[]
  faqs: ServiceLocationFaq[]
  nearby: { slug: string; label: string }[]
}

export const serviceLocationPages: ServiceLocationPage[] = [
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "southport",
    suburbName: "Southport",
    title: "Bond Cleaning in Southport",
    metaDescription:
      "Bond cleaning in Southport for units, townhouses and family homes near the CBD. Inspection-ready scope, price confirmed first. Call 0450 833 683.",
    intro: [
      "Southport has one of the widest rental mixes on the Gold Coast: older low-rise units around the town centre, newer apartments near the hospital and university precinct, and plain family homes on the streets behind the retail strip. Each of those hands back differently. A unit with shared stairwells and a body corporate access rule needs the booking arranged around lift and entry times, while a freestanding house usually means bins, a garage floor and an outdoor area as well as the interior.",
      "We clean against the list property managers work from, and we ask for the suburb, property type and inspection date up front so the scope matches what your agent will actually check.",
    ],
    directAnswer:
      "Bond cleaning in Southport covers units, townhouses and houses across the suburb. The job is quoted for the property, run room by room against an inspection checklist, and confirmed with you before the booking is locked in.",
    localNotes: [
      {
        title: "Units and apartments",
        body: "Shared stairwells, lift bookings and body corporate access rules are arranged when the booking is made so the team is not waiting at a locked entry.",
      },
      {
        title: "Older low-rise stock",
        body: "Longer-established units around the centre often need more time in the kitchen and bathroom, where grease and soap scum have had years to build up.",
      },
      {
        title: "Family homes",
        body: "Houses behind the retail strip usually add garage floors, outdoor areas and bin cleaning to the standard interior scope.",
      },
      {
        title: "Tight handover windows",
        body: "Southport leases turn over through the year rather than in one season, so inspection dates are usually workable with a short notice period.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Southport?",
        answer:
          "Yes. Wave Solution cleans rentals across Southport, from one-bedroom units near the town centre to family homes on the surrounding streets. Send the suburb, property type and inspection date and we will confirm the scope and price.",
      },
      {
        question: "What is included in a Southport bond clean?",
        answer:
          "A room-by-room interior clean: kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches and full vacuuming and mopping. Carpet steam cleaning and pest treatment are quoted as extras.",
      },
      {
        question: "How far ahead should I book in Southport?",
        answer:
          "As soon as you have the inspection date, because that date is what everything else is scheduled around. We leave a buffer between the clean and the inspection so anything your agent flags can still be corrected before the keys go back.",
      },
      {
        question: "Do I need to be home for the clean?",
        answer:
          "No. Most tenants arrange key access and are not on site. If you would like a walk-through at the end, mention it when booking and we will time the visit so you can be there.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "Bond cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "robina",
    suburbName: "Robina",
    title: "Bond Cleaning in Robina",
    metaDescription:
      "Bond cleaning in Robina for townhouses, villas and homes near Robina Town Centre. Inspection-ready clean with the price confirmed first. Call 0450 833 683.",
    intro: [
      "Robina's rental stock is mostly modern: townhouses and villas in managed estates, apartments above the retail precinct, and family homes laid out around the town centre, the hospital and the stadium. Newer properties hold their condition well, which usually means the bond clean is about detail rather than restoration. Skirting, wardrobe interiors, window tracks and the inside of cupboards are the areas that separate a quick tidy from a clean that passes an inspection.",
      "Access is the other thing worth sorting early. Several estates are body corporate managed, so entry arrangements and parking need to be agreed before the day rather than on it. Tell us the estate or street, the property type and your inspection date and we will build the booking around them.",
    ],
    directAnswer:
      "Bond cleaning in Robina covers townhouses, villas, apartments and houses around the town centre and surrounding estates. Scope is confirmed room by room against your inspection requirements, and the price is agreed before the booking.",
    localNotes: [
      {
        title: "Managed estates",
        body: "Body corporate rules around entry, parking and lift use are confirmed when the booking is made so nothing is left to chance on the day.",
      },
      {
        title: "Modern finishes",
        body: "Newer kitchens and bathrooms need less restoration, so time goes into the details inspectors pull out: tracks, skirting, switches and cupboard interiors.",
      },
      {
        title: "Shared walls and townhouses",
        body: "Townhouses and villas add entry areas and internal stairs to the scope, which are easy to overlook in a rushed handover.",
      },
      {
        title: "Nearby amenities",
        body: "With the town centre, hospital and stadium close by, inspection dates in Robina are often scheduled around event and shift patterns.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Robina?",
        answer:
          "Yes. We clean rentals across Robina, including townhouses and villas in the managed estates, apartments near the town centre and family homes in the surrounding streets.",
      },
      {
        question: "What is included in a Robina bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping. Carpet and pest treatment can be added.",
      },
      {
        question: "Can you work around body corporate access rules?",
        answer:
          "Yes. Tell us the estate and any entry, lift or parking requirements when you enquire and we will arrange access as part of the booking rather than turning up and finding a locked door.",
      },
      {
        question: "How do I get a Robina bond cleaning quote?",
        answer:
          "Send the property type, bedroom and bathroom count, your inspection date and any extras your agent asked for. We confirm scope and price in writing before the booking is locked in.",
      },
    ],
    nearby: [
      { slug: "southport", label: "Bond cleaning in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "surfers-paradise",
    suburbName: "Surfers Paradise",
    title: "Bond Cleaning in Surfers Paradise",
    metaDescription:
      "Bond cleaning in Surfers Paradise for high-rise apartments and units. Lift bookings, tight handover dates and inspection-ready scope. Call 0450 833 683.",
    intro: [
      "Surfers Paradise is dominated by apartment living. Tower after tower of one, two and three-bedroom units sits behind the beach, and a large share of them are handed back between fixed-term tenancies rather than sold. That creates a specific kind of bond clean: vertical, scheduled and access-dependent. Lift bookings, after-hours entry, fob access and building management approval all matter as much as the cleaning itself.",
      "The interiors are typically compact, which shortens the physical work but raises the standard expected. Glass that faces the ocean picks up salt, balconies collect grit, and kitchenettes in smaller units are used hard by short stays. We book the access first, then scope the clean around the building's rules and your inspection date.",
    ],
    directAnswer:
      "Bond cleaning in Surfers Paradise is built around high-rise apartment access: lift bookings, fob entry and building approval are arranged with the clean. The interior is worked room by room against the inspection checklist, with the price confirmed before booking.",
    localNotes: [
      {
        title: "Lift and access bookings",
        body: "Building approval, fob returns and lift reservations are confirmed before the day, because in a tower those are the things that delay a handover.",
      },
      {
        title: "Salt and glass",
        body: "Ocean-facing glass and balcony screens pick up salt residue fast, so they get extra attention rather than a quick wipe.",
      },
      {
        title: "Compact layouts",
        body: "One and two-bedroom units are quicker to clean but show every missed detail, which is where the checklist makes the difference.",
      },
      {
        title: "Turnover timing",
        body: "Beachside leases often end on fixed dates with the next tenant moving in behind, so the buffer before inspection matters.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Surfers Paradise?",
        answer:
          "Yes. We clean apartments and units across Surfers Paradise, including tower buildings where access needs to be booked with building management ahead of the day.",
      },
      {
        question: "What is included in a Surfers Paradise bond clean?",
        answer:
          "Kitchen including oven and stovetop, bathrooms, internal windows and sills, skirting, cupboard and wardrobe interiors, light switches, and full vacuuming and mopping. Balcony detailing and carpet steam cleaning are quoted separately where needed.",
      },
      {
        question: "Do you need building approval?",
        answer:
          "Usually, yes, for lift use and after-hours entry. Send us the building name and any access requirements when you enquire and we will factor them into the booking.",
      },
      {
        question: "Can you clean between tenants with a tight turnaround?",
        answer:
          "Often. Tell us the handover date and the next move-in date when you enquire. If the window is tight we will tell you straight away whether it can be done properly rather than rushed.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "southport", label: "Bond cleaning in Southport" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "broadbeach",
    suburbName: "Broadbeach",
    title: "Bond Cleaning in Broadbeach",
    metaDescription:
      "Bond cleaning in Broadbeach for apartments, low-rise units and holiday rentals. Inspection-ready scope, access arranged up front. Call 0450 833 683.",
    intro: [
      "Broadbeach mixes apartment towers close to the beach with older low-rise blocks and a scattering of houses on the streets inland from the promenade. A good share of the stock is let on fixed-term leases, and a meaningful share turns over as holiday accommodation, so cleaners here see both a standard tenancy handover and the faster, heavier turnaround that follows a holiday stay.",
      "Whichever applies, the work starts with the same question: what will the agent check? Kitchen and bathroom detail, internal glass, skirting and floors carry most of the weight. If the property has been used for short stays, we allow extra time for the kitchen and any carpet traffic. Access, parking and entry arrangements are settled when the booking is made.",
    ],
    directAnswer:
      "Bond cleaning in Broadbeach covers apartments, low-rise units and houses. The clean runs room by room against the inspection checklist, access is arranged beforehand, and the price is confirmed before the booking is locked in.",
    localNotes: [
      {
        title: "Apartment living",
        body: "Tower units need entry arrangements and, where relevant, lift bookings confirmed in advance so the team can start on time.",
      },
      {
        title: "Older low-rise blocks",
        body: "Established units often have years of build-up in showers and ovens, which is priced into the scope rather than discovered on the day.",
      },
      {
        title: "Short-stay turnover",
        body: "Properties let for holidays pick up heavier kitchen use and carpet traffic, so those jobs are scoped with extra detail in mind.",
      },
      {
        title: "Beachside exposure",
        body: "Salt air affects glass, screens and balcony surfaces, and those areas are treated as part of the clean rather than left out.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Broadbeach?",
        answer:
          "Yes. We clean rentals across Broadbeach, from beachside apartments to low-rise units and houses on the inland streets, and we confirm access arrangements before the day.",
      },
      {
        question: "What is included in a Broadbeach bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and sills, skirting, cupboard interiors, light switches and full vacuuming and mopping, plus balcony surfaces where they form part of the tenancy.",
      },
      {
        question: "Do you handle holiday rental turnarounds?",
        answer:
          "Yes. Tell us the handover time and the next arrival. If the property has been used for short stays we allow for the heavier kitchen and carpet condition rather than quoting a standard clean.",
      },
      {
        question: "How do I get a Broadbeach quote?",
        answer:
          "Send the building or street, property type, bedroom and bathroom count and your inspection date. We confirm the scope and price in writing before anything is booked.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "Bond cleaning in Surfers Paradise" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
      { slug: "southport", label: "Bond cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "burleigh-heads",
    suburbName: "Burleigh Heads",
    title: "Bond Cleaning in Burleigh Heads",
    metaDescription:
      "Bond cleaning in Burleigh Heads for character homes, units and townhouses. Inspection-ready clean scheduled around your final inspection. Call 0450 833 683.",
    intro: [
      "Burleigh Heads has a rental mix that leans towards older character homes, duplexes and low-rise units, with newer townhouses filling in behind them. The houses in particular come with the things a bond clean has to cover: outdoor entertaining areas, garden paths, garage floors, and interiors that may not have had a detailed clean for several years.",
      "Because a house takes longer than an apartment of the same bedroom count, the scope is written around the property rather than a standard package. We ask about the last time the oven, carpets and windows were done, because that history changes the hours involved. Once the inspection date is set, the clean is scheduled backwards from it with a buffer left for anything your agent wants corrected.",
    ],
    directAnswer:
      "Bond cleaning in Burleigh Heads covers houses, duplexes, units and townhouses. The scope is built around the individual property, worked room by room against the inspection checklist, and priced before the booking is confirmed.",
    localNotes: [
      {
        title: "Older homes",
        body: "Longer-established houses often carry years of build-up in kitchens and bathrooms, so the job is scoped for restoration time rather than a maintenance visit.",
      },
      {
        title: "Outdoor areas",
        body: "Patios, paths and garage floors are part of many Burleigh handovers and are added to the scope where the tenancy includes them.",
      },
      {
        title: "Units and townhouses",
        body: "Low-rise units and newer townhouses are straightforward to access, with entry arrangements agreed when the booking is made.",
      },
      {
        title: "Inspection timing",
        body: "Leaves a buffer before the inspection so any item your agent flags can be corrected without a rushed second visit.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Burleigh Heads?",
        answer:
          "Yes. We clean houses, duplexes, units and townhouses across Burleigh Heads, and the scope is written around the property rather than a fixed package.",
      },
      {
        question: "What is included in a Burleigh Heads bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping. Outdoor areas are added where the tenancy includes them.",
      },
      {
        question: "How long does a bond clean take at Burleigh?",
        answer:
          "It depends on the size and condition. A well-kept unit is a shorter job than a family home with a year of build-up in the oven and carpets. We confirm the expected time with the quote.",
      },
      {
        question: "Can you add carpet cleaning or pest treatment?",
        answer:
          "Yes. Both are commonly requested at the end of a lease in Burleigh and can be booked together with the clean in one visit.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
    ],
  },

  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "southport",
    suburbName: "Southport",
    title: "House Cleaning in Southport",
    metaDescription:
      "Regular and one-off house cleaning in Southport for units, townhouses and homes. Flexible weekly or fortnightly visits. Call 0450 833 683.",
    intro: [
      "Southport households are a mix of students and professionals close to the university and hospital, families in the streets behind the town centre, and downsizers in the low-rise units along the tram corridor. That mix produces different cleaning needs: a shared two-bedroom unit used hard between shifts wants a reliable maintenance visit, while a family home with a garage and a dog needs floors and bathrooms put back in order properly.",
      "Visits can run weekly, fortnightly or monthly, or be booked as a one-off when something specific needs doing before guests arrive. The team builds the checklist around the property on the first visit, then keeps it consistent so you are not re-explaining the same priorities every time.",
    ],
    directAnswer:
      "House cleaning in Southport is available for units, townhouses and family homes on a weekly, fortnightly, monthly or one-off basis. The visit is quoted for your property, with scope confirmed before the first clean.",
    localNotes: [
      {
        title: "Units near the centre",
        body: "Compact units are quick to maintain, which makes a regular fortnightly visit practical even for busy shift patterns.",
      },
      {
        title: "Family homes",
        body: "Houses behind the retail strip bring floors, bathrooms and high-traffic areas into focus, plus garage and outdoor spaces where they are used.",
      },
      {
        title: "Shared living",
        body: "Shared houses and student rentals benefit from a fixed schedule so cleaning does not become a negotiation between housemates.",
      },
      {
        title: "Coastal dust and humidity",
        body: "Proximity to the water means glass and wet-area seals pick up residue quickly, which a regular rhythm handles better than an occasional blitz.",
      },
    ],
    faqs: [
      {
        question: "Do you offer regular house cleaning in Southport?",
        answer:
          "Yes. Weekly, fortnightly and monthly visits are available across Southport, along with one-off cleans for when a property needs a reset before guests or a special occasion.",
      },
      {
        question: "What is included in a standard visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping. Inside the oven, windows and cupboards are added when you want them.",
      },
      {
        question: "Do I need to be home for the clean?",
        answer:
          "No. Many clients arrange key or access-code entry and are at work or on a shift. If you want a walk-through at the end, tell us when booking and we will time the visit around you.",
      },
      {
        question: "How do I get a Southport house cleaning quote?",
        answer:
          "Send the suburb, bedrooms and bathrooms, whether the home is occupied, and how often you would like a visit. We confirm the scope and price before the first booking.",
      },
    ],
    nearby: [
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "surfers-paradise", label: "House cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
      { slug: "nerang", label: "House cleaning in Nerang" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "robina",
    suburbName: "Robina",
    title: "House Cleaning in Robina",
    metaDescription:
      "House cleaning in Robina for townhouses, villas and family homes near Robina Town Centre. Weekly, fortnightly or one-off visits. Call 0450 833 683.",
    intro: [
      "Robina is a planned suburb, and the housing reflects it: townhouses and villas in managed estates, modern family homes with double garages, and apartments above the retail precinct. The properties are generally newer and well finished, so the cleaning challenge is maintenance rather than restoration. Keep the kitchens, bathrooms and floors at standard and the home stays presentable without a big catch-up every time.",
      "Because estates are managed, access rules sometimes apply to parking and common areas, which we sort out when the booking is made. Most households here choose a fortnightly or weekly rhythm; others prefer a monthly visit plus a deep clean a couple of times a year. We will suggest a schedule based on how the home is actually used rather than a default.",
    ],
    directAnswer:
      "House cleaning in Robina covers townhouses, villas, apartments and family homes. Visits run weekly, fortnightly, monthly or one-off, quoted for the property with the checklist agreed on the first visit.",
    localNotes: [
      {
        title: "Managed estates",
        body: "Parking and access arrangements for the cleaners are confirmed up front so visits start on time every time.",
      },
      {
        title: "Modern homes",
        body: "Newer kitchens and bathrooms hold their condition well when maintained, which is where a regular rhythm earns its keep.",
      },
      {
        title: "Family traffic",
        body: "Homes near the school run and the town centre see heavy floor and bathroom use, so those areas get priority in the checklist.",
      },
      {
        title: "Combined schedules",
        body: "Many households pair a fortnightly maintenance visit with a deeper clean a few times a year, which we can plan together.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Robina?",
        answer:
          "Yes. We clean houses, townhouses, villas and apartments across Robina on a weekly, fortnightly, monthly or one-off basis.",
      },
      {
        question: "What is included in a standard Robina visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping. Extras such as inside the oven or internal windows can be added.",
      },
      {
        question: "Can you clean around body corporate rules?",
        answer:
          "Yes. Tell us the estate and any parking or access requirements when you book and we will arrange them as part of the schedule.",
      },
      {
        question: "How often should a Robina home be cleaned?",
        answer:
          "Most families choose fortnightly; households with pets, children or shared living often prefer weekly, while quieter homes do well monthly. We will recommend a rhythm after seeing the property.",
      },
    ],
    nearby: [
      { slug: "southport", label: "House cleaning in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "surfers-paradise", label: "House cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "surfers-paradise",
    suburbName: "Surfers Paradise",
    title: "House Cleaning in Surfers Paradise",
    metaDescription:
      "House cleaning in Surfers Paradise for apartments and units in the towers behind the beach. Regular or one-off visits. Call 0450 833 683.",
    intro: [
      "House cleaning in Surfers Paradise mostly means apartment cleaning. The suburb is built vertically: one, two and three-bedroom units in towers that run from the beachfront back towards the canal, many of them occupied by professionals, sharers and long-stay tenants rather than families with yards. The work is compact but detailed, and access is the part that has to be sorted before anything else.",
      "Building rules around entry, fobs and lifts shape the schedule as much as the cleaning itself. Inside, the priorities are the kitchen and bathroom, internal glass that faces salt air, and floors that see constant traffic. Visits can be weekly, fortnightly or monthly, and one-off cleans are common before a move or when the property has been used for short stays.",
    ],
    directAnswer:
      "House cleaning in Surfers Paradise covers apartments and units in the beachside towers, with building access arranged as part of the booking. Weekly, fortnightly, monthly and one-off visits are available, quoted for the property.",
    localNotes: [
      {
        title: "Building access",
        body: "Fob returns, lift use and entry codes are confirmed when the booking is made so visits do not stall at a locked lobby.",
      },
      {
        title: "Compact apartments",
        body: "Smaller units are efficient to maintain, which makes regular visits realistic even with long work hours.",
      },
      {
        title: "Salt air",
        body: "Ocean-facing glass and balcony screens need attention more often inland suburbs would, and are included in the routine.",
      },
      {
        title: "Short-stay resets",
        body: "Units used for holiday letting are also cleaned as one-off resets between stays, with the kitchen and carpets scoped accordingly.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Surfers Paradise?",
        answer:
          "Yes. We clean apartments and units across Surfers Paradise on a weekly, fortnightly, monthly or one-off basis, with building access arranged ahead of the visit.",
      },
      {
        question: "What is included in an apartment clean?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, plus full vacuuming and mopping. Inside the oven and internal windows can be added.",
      },
      {
        question: "Do you need building approval?",
        answer:
          "For many towers, yes, for lift use and after-hours entry. Send us the building name when you enquire and we will confirm what is required before the first visit.",
      },
      {
        question: "Can you clean between short-stay guests?",
        answer:
          "Yes. One-off resets between stays are common in Surfers Paradise. Tell us the arrival and departure times and we will confirm whether the window works.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
      { slug: "southport", label: "House cleaning in Southport" },
      { slug: "nerang", label: "House cleaning in Nerang" },
      { slug: "robina", label: "House cleaning in Robina" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "broadbeach",
    suburbName: "Broadbeach",
    title: "House Cleaning in Broadbeach",
    metaDescription:
      "House cleaning in Broadbeach for apartments, low-rise units and homes. Weekly, fortnightly or one-off visits with access sorted first. Call 0450 833 683.",
    intro: [
      "Broadbeach gives cleaners two very different settings within a few streets of each other: apartment towers close to the beach and convention precinct, and older low-rise units or houses on the quieter blocks behind them. Tower living is compact and detail-focused, while the houses bring back the standard suburban workload of floors, bathrooms and outdoor entry areas.",
      "Whichever applies, the checklist is agreed on the first visit and kept consistent. Many Broadbeach households choose fortnightly cleaning because salt air, traffic and humidity all work against a property that is left too long between visits. One-off cleans are also common before guests arrive or after a holiday letting period.",
    ],
    directAnswer:
      "House cleaning in Broadbeach covers apartments, low-rise units and houses, available weekly, fortnightly, monthly or one-off. The scope is agreed on your first visit and the price is confirmed before booking.",
    localNotes: [
      {
        title: "Beachside towers",
        body: "Apartment visits are efficient but detail-heavy, with glass, kitchen and bathroom surfaces prioritised.",
      },
      {
        title: "Low-rise blocks",
        body: "Older units benefit from a consistent rhythm that stops soap scum and grease from becoming restoration work.",
      },
      {
        title: "Houses and entries",
        body: "Detached homes add entry areas, garages and outdoor spaces to the routine where they are part of the property.",
      },
      {
        title: "Holiday periods",
        body: "Properties that host visitors or run as short stays are cleaned as one-off resets between stays as well as on a schedule.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Broadbeach?",
        answer:
          "Yes. Apartments, low-rise units and houses across Broadbeach are cleaned weekly, fortnightly, monthly or as a one-off, with access arrangements confirmed up front.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting, light switches and skirting, and full vacuuming and mopping. Detail items such as the oven or internal windows are added on request.",
      },
      {
        question: "How often should a beachside property be cleaned?",
        answer:
          "Fortnightly is the most common rhythm here because salt air, humidity and foot traffic all work against a property left too long between visits, but weekly and monthly options are available.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, bedrooms and bathrooms and how often you would like a visit. We confirm the scope and price before the first clean is booked.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "House cleaning in Surfers Paradise" },
      { slug: "nerang", label: "House cleaning in Nerang" },
      { slug: "burleigh-heads", label: "House cleaning in Burleigh Heads" },
      { slug: "southport", label: "House cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "nerang",
    suburbName: "Nerang",
    title: "House Cleaning in Nerang",
    metaDescription:
      "House cleaning in Nerang for family homes, older houses and larger blocks. Weekly, fortnightly or one-off visits. Call 0450 833 683.",
    intro: [
      "Nerang sits inland from the beach and the housing shows it: older brick family homes on larger blocks, a mix of post-war and newer builds, and quiet streets where gardens and garages are part of everyday life. The cleaning workload here is heavier than in a beachside apartment. There are more floors, more bathrooms, and often a garage, a covered outdoor area and a laundry that all need doing properly.",
      "Garden traffic also matters. Soil and grass get tracked through in a way that never happens in a tower, so floors and entry points take priority. Homes near the bushland edges see more spider and insect activity indoors as well, which is worth mentioning when the house clean is booked so we can advise on the right add-on if needed.",
    ],
    directAnswer:
      "House cleaning in Nerang covers older family homes, newer houses and larger blocks, with weekly, fortnightly, monthly or one-off visits. Scope is agreed for the property and the price confirmed before the first clean.",
    localNotes: [
      {
        title: "Larger homes",
        body: "More rooms, bathrooms and living areas mean a longer visit, which is scoped up front rather than discovered halfway through.",
      },
      {
        title: "Garden traffic",
        body: "Soil and grass tracked in from bigger yards put floors and entry points at the top of the checklist.",
      },
      {
        title: "Garages and outdoor areas",
        body: "Covered patios, laundries and garages are common here and can be included where they form part of the routine.",
      },
      {
        title: "Bushland edges",
        body: "Homes near the vegetated edges see more insect activity indoors, which is a good reason to pair a house clean with a treatment.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Nerang?",
        answer:
          "Yes. Family homes, older houses and newer builds across Nerang are cleaned weekly, fortnightly, monthly or as a one-off, with the scope agreed on the first visit.",
      },
      {
        question: "What is included in a Nerang house clean?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping. Garages and outdoor areas can be added.",
      },
      {
        question: "Can you handle a home that has not been cleaned in a while?",
        answer:
          "Yes. A restoration clean is booked as a separate job rather than squeezed into a maintenance visit, so the price reflects the work involved and the home gets back to standard.",
      },
      {
        question: "Do you also do pest treatment in Nerang?",
        answer:
          "Yes. Homes near bushland edges often combine a house clean with a pest treatment. We can quote both together and schedule them in the right order.",
      },
    ],
    nearby: [
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "burleigh-heads", label: "House cleaning in Burleigh Heads" },
      { slug: "southport", label: "House cleaning in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
    ],
  },

  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "southport",
    suburbName: "Southport",
    title: "End of Lease Cleaning in Southport",
    metaDescription:
      "End of lease cleaning in Southport for units and homes. Scheduled backwards from your inspection date with the scope confirmed first. Call 0450 833 683.",
    intro: [
      "Southport has a steady flow of lease endings through the year: students finishing study, professionals moving closer to work, and families shifting between the town centre apartments and the houses behind them. Whatever the reason, the exit clean has one target, which is the final inspection and the bond attached to it.",
      "The work is scheduled backwards from your inspection date rather than from today's convenience, so there is a buffer if the agent wants anything corrected. Units need access sorted with the building, houses need the outdoor areas included where the tenancy covers them, and everything is run against the same room-by-room list Queensland inspectors use.",
    ],
    directAnswer:
      "End of lease cleaning in Southport is scheduled around your final inspection, run room by room against the checklist agents work from, and confirmed with you before the booking. Carpet and pest treatment can be added to the same visit.",
    localNotes: [
      {
        title: "Inspection-first scheduling",
        body: "The date is set by your inspection, and the clean is booked backwards from it with a correction buffer left in place.",
      },
      {
        title: "Units and buildings",
        body: "Access, lift use and entry codes for Southport apartment buildings are arranged as part of the booking.",
      },
      {
        title: "Houses with outdoor areas",
        body: "Garages, patios and bin areas are included where the tenancy covers them, not left for the agent to notice.",
      },
      {
        title: "RTA guidance",
        body: "Queensland law does not require a professional clean, but the property must be left reasonably clean, taking fair wear and tear into account. See rta.qld.gov.au.",
      },
    ],
    faqs: [
      {
        question: "Is end of lease cleaning required by law in Queensland?",
        answer:
          "No. Queensland law does not require tenants to hire a professional cleaner. The property must be left reasonably clean, taking fair wear and tear and the length of the tenancy into account, as the Residential Tenancies Authority explains at rta.qld.gov.au.",
      },
      {
        question: "What is included in an end of lease clean in Southport?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus any outdoor areas covered by the tenancy.",
      },
      {
        question: "Can you clean around my inspection date?",
        answer:
          "Yes. Tell us the date when you enquire and we will schedule the clean backwards from it, leaving time for anything your agent flags to be corrected before the keys go back.",
      },
      {
        question: "Can carpet cleaning and pest treatment be added?",
        answer:
          "Yes. Both are commonly required at the end of a Southport lease and can be booked together with the clean so everything is done in one visit, in the right order.",
      },
    ],
    nearby: [
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "surfers-paradise", label: "End of lease cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "robina",
    suburbName: "Robina",
    title: "End of Lease Cleaning in Robina",
    metaDescription:
      "End of lease cleaning in Robina for townhouses, apartments and homes. Booked backwards from your inspection date. Call 0450 833 683.",
    intro: [
      "Robina's managed estates mean lease endings here are usually well organised: the agent gives a date, the body corporate sets the access rules, and everything has to fit around both. The end of lease clean is built to that timetable. Modern properties hold their condition, so the work concentrates on the details inspectors pull out rather than heavy restoration.",
      "Cupboard interiors, wardrobe shelving, window tracks, light switches and skirting are the areas that decide most inspections in newer homes. If carpets have seen a few years of family traffic, steam cleaning is usually worth adding, and if the lease carried a pet clause, the treatment receipt needs to be ready before the inspection rather than after it.",
    ],
    directAnswer:
      "End of lease cleaning in Robina covers townhouses, villas, apartments and houses. The clean is scheduled backwards from your inspection date, access rules are arranged with the estate, and the scope is confirmed before booking.",
    localNotes: [
      {
        title: "Estate access",
        body: "Body corporate entry, lift and parking rules are confirmed up front so the team starts on time on the day.",
      },
      {
        title: "Detail over restoration",
        body: "Newer properties need time in the details: tracks, switches, skirting, cupboard and wardrobe interiors.",
      },
      {
        title: "Carpets and pet clauses",
        body: "Steam cleaning and pest treatment are the two add-ons agents most often ask for in Robina, and both can be booked with the clean.",
      },
      {
        title: "Buffer before inspection",
        body: "A gap is left between the clean and the inspection so anything flagged can be corrected without a rushed second visit.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Robina?",
        answer:
          "Yes. We clean rentals across Robina, including managed estates, townhouses, villas, apartments and family homes, with access arrangements confirmed before the day.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard and wardrobe interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Is a professional clean legally required?",
        answer:
          "No. Queensland law requires the property to be left reasonably clean, with fair wear and tear taken into account. The Residential Tenancies Authority explains this at rta.qld.gov.au.",
      },
      {
        question: "How do I get a Robina exit cleaning quote?",
        answer:
          "Send the property type, bedroom and bathroom count, inspection date and anything your agent has asked for. We confirm scope and price in writing before the booking.",
      },
    ],
    nearby: [
      { slug: "southport", label: "End of lease cleaning in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "surfers-paradise", label: "End of lease cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "surfers-paradise",
    suburbName: "Surfers Paradise",
    title: "End of Lease Cleaning in Surfers Paradise",
    metaDescription:
      "End of lease cleaning in Surfers Paradise for high-rise apartments. Lift bookings, tight turnarounds, inspection-ready scope. Call 0450 833 683.",
    intro: [
      "Handing back an apartment in Surfers Paradise is a logistics job as much as a cleaning one. Building approval, lift bookings, fob returns and after-hours entry all have to line up with an inspection date that is usually fixed by the next tenancy. The clean itself is compact, but the expectations are not, because a small unit shows every missed detail.",
      "The team books access first, then scopes the work around the building rules and your date. Ocean-facing glass and balconies collect salt residue quickly, kitchenettes in one-bedroom units are used hard, and floors take constant traffic. Everything is run against the checklist your agent will use, with a buffer left before the inspection for corrections.",
    ],
    directAnswer:
      "End of lease cleaning in Surfers Paradise is arranged around building access and your inspection date. The apartment is cleaned room by room against the inspection checklist, with the price confirmed before booking and a buffer left for corrections.",
    localNotes: [
      {
        title: "Building logistics",
        body: "Lift reservations, fob returns and after-hours entry are confirmed with building management before the day, not on it.",
      },
      {
        title: "Compact units",
        body: "Smaller apartments take less time but show more detail, so tracks, sills, switches and skirting get proper attention.",
      },
      {
        title: "Salt and glass",
        body: "Ocean-facing glass and balcony screens are cleaned thoroughly because salt residue is one of the first things an agent notices.",
      },
      {
        title: "Next tenant behind you",
        body: "Fixed-term leases often end with a new tenant moving in, which is why a correction buffer is built into the schedule.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Surfers Paradise?",
        answer:
          "Yes. We clean apartments across Surfers Paradise, including towers where access has to be booked with building management ahead of the inspection.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and stovetop, bathrooms, internal windows and sills, skirting, cupboard and wardrobe interiors, light switches, and full vacuuming and mopping, plus balcony surfaces where they form part of the tenancy.",
      },
      {
        question: "What if the inspection date is very soon?",
        answer:
          "Tell us the date straight away. We will say honestly whether it can be done properly with the time available rather than booking a rushed job that fails the inspection.",
      },
      {
        question: "Can carpet cleaning and pest treatment be added?",
        answer:
          "Yes. Both are commonly requested for Surfers Paradise apartments and can be booked together with the clean so the work runs in the correct order.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "broadbeach",
    suburbName: "Broadbeach",
    title: "End of Lease Cleaning in Broadbeach",
    metaDescription:
      "End of lease cleaning in Broadbeach for apartments, units and houses. Scheduled around your final inspection with carpet and pest add-ons. Call 0450 833 683.",
    intro: [
      "Broadbeach lease endings fall into two groups: standard fixed-term handovers in apartments and low-rise units, and the faster turnarounds that follow holiday stays in properties let for short-term accommodation. Both end at the same place, which is a final inspection where the kitchen, bathrooms, glass and floors are checked against the entry condition report.",
      "The clean is scheduled backwards from your inspection date, with access arranged for apartment buildings beforehand. If the property has been used for short stays, the kitchen and carpets are scoped with that heavier condition in mind. Carpet steam cleaning and pest treatment are commonly requested here and can be booked in the same visit so the receipt and the dried carpet are both ready on time.",
    ],
    directAnswer:
      "End of lease cleaning in Broadbeach covers apartments, low-rise units and houses, scheduled backwards from your inspection date with building access confirmed first. Carpet cleaning and pest treatment can be added to the same booking.",
    localNotes: [
      {
        title: "Fixed-term handovers",
        body: "Standard lease endings are scoped against the entry condition report so the checklist matches what the agent will check.",
      },
      {
        title: "Short-stay properties",
        body: "Holiday letting adds kitchen and carpet wear, and the scope reflects that rather than assuming a lightly used home.",
      },
      {
        title: "Apartment access",
        body: "Entry, lift use and parking are confirmed with the building before the day so the clean starts on time.",
      },
      {
        title: "Salt and glass",
        body: "Beachside exposure leaves residue on glass and screens, which is handled as part of the clean rather than left out.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Broadbeach?",
        answer:
          "Yes. Apartments, low-rise units and houses across Broadbeach are cleaned for lease handover, with access arrangements confirmed before the day and the inspection date driving the schedule.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and sills, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus balcony areas where the tenancy includes them.",
      },
      {
        question: "Do you clean properties used for holiday letting?",
        answer:
          "Yes. Those properties often need more time in the kitchen and on carpets, and the scope is written around that condition rather than a standard clean.",
      },
      {
        question: "Can I bundle carpet and pest treatment?",
        answer:
          "Yes. Booking them together keeps the sequencing correct: clean first, carpets second so they can dry, pest treatment last so the receipt is current for your inspection.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "End of lease cleaning in Surfers Paradise" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
    ],
  },

  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "southport",
    suburbName: "Southport",
    title: "Pest Control in Southport",
    metaDescription:
      "Pest control in Southport for homes, units and businesses. Registered treatment for cockroaches, spiders, ants and fleas. Call 0450 833 683.",
    intro: [
      "Southport's mix of older low-rise units, family homes and a busy commercial precinct produces a wide range of pest work. Older building stock around the centre often has gaps and services that insects use to move between dwellings, while houses on the surrounding streets deal with garden activity that works its way indoors. Cafes, food premises and offices add a compliance side to the work as well.",
      "Treatment starts with identification rather than a product. We work out what is present, where it is coming from, and how much of the property needs covering, then quote the scope. Registered products are used, and preparation, re-entry times and pet safety guidance are explained before the job starts.",
    ],
    directAnswer:
      "Pest control in Southport covers homes, units and commercial premises, treating common local pests such as cockroaches, spiders, ants and fleas. The approach is matched to what is found on site, with the scope and price confirmed before booking.",
    localNotes: [
      {
        title: "Older units",
        body: "Shared wall cavities and service penetrations let insects move between dwellings, so treatment coverage has to account for the building rather than one apartment.",
      },
      {
        title: "Family homes",
        body: "Gardens and older drainage near the centre bring regular spider and ant activity that works its way indoors.",
      },
      {
        title: "Commercial premises",
        body: "Food premises and offices in the precinct need treatment scheduled around trading hours, with documentation where audits require it.",
      },
      {
        title: "Humidity",
        body: "Warm, humid conditions keep activity going year-round, which is why many properties treat periodically rather than waiting for a problem.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Southport?",
        answer:
          "Yes. We treat homes, units, rentals and business premises across Southport, and we start by identifying what is present rather than quoting a generic spray.",
      },
      {
        question: "What pests do you treat in Southport?",
        answer:
          "Common local issues include cockroaches, spiders, ants, silverfish and fleas, with rodent baiting and monitoring where required.",
      },
      {
        question: "Are the products safe around pets?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and any precautions are explained before the job. Tell us about pets when booking so the treatment can be planned around them.",
      },
      {
        question: "Can you treat a rental between tenants?",
        answer:
          "Yes. Landlords and property managers can book directly, and tenants whose lease asks for treatment can have it coordinated with the end of lease clean.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "surfers-paradise", label: "Pest control in Surfers Paradise" },
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
      { slug: "helensvale", label: "Pest control in Helensvale" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "robina",
    suburbName: "Robina",
    title: "Pest Control in Robina",
    metaDescription:
      "Pest control in Robina for homes, townhouses and offices. Registered treatment for common coastal pests with safety guidance. Call 0450 833 683.",
    intro: [
      "Robina's newer housing stock does not mean fewer pests. Master-planned estates sit close to creek lines, parkland and retained vegetation, which keeps ant, spider and cockroach activity steady through the warm months. Townhouses and villas add another factor: shared walls and roof spaces mean activity in one dwelling is often connected to the next.",
      "Treatment is scoped around the building rather than a single room. For homes, that usually means internal treatment plus an external barrier; for townhouses, coverage that accounts for shared surfaces; for the offices near the town centre, scheduling outside trading hours. The team explains preparation, re-entry times and pet safety before the work begins.",
    ],
    directAnswer:
      "Pest control in Robina covers houses, townhouses, villas and offices, with the treatment matched to the property and the pest identified. Preparation and re-entry guidance is given before the job, and the price is confirmed before booking.",
    localNotes: [
      {
        title: "Estate surroundings",
        body: "Creek lines, parkland and retained gardens keep ant and spider activity steady through the warmer months.",
      },
      {
        title: "Townhouses and villas",
        body: "Shared walls and roof spaces mean coverage has to consider adjoining surfaces, not just the inside of one dwelling.",
      },
      {
        title: "Offices and retail",
        body: "Workplaces near the town centre are treated outside trading hours where possible, with documentation available when it is required.",
      },
      {
        title: "Pet households",
        body: "Preparation and re-entry guidance is given before treatment so pets and children can be managed safely around the visit.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Robina?",
        answer:
          "Yes. We treat houses, townhouses, villas, apartments and offices across Robina, including managed estates where access needs to be arranged first.",
      },
      {
        question: "What pests are common in Robina?",
        answer:
          "Cockroaches, spiders, ants and silverfish are the regular issues, with fleas where pets have been present and rodents around garages and sheds.",
      },
      {
        question: "How long does a treatment take?",
        answer:
          "Most residential treatments are completed in a single visit. We confirm the expected time with the quote, along with preparation and re-entry guidance.",
      },
      {
        question: "How often should a Robina property be treated?",
        answer:
          "It depends on the property and its surroundings. Homes backing onto parkland often benefit from periodic treatment rather than waiting until activity is obvious.",
      },
    ],
    nearby: [
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "surfers-paradise", label: "Pest control in Surfers Paradise" },
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "surfers-paradise",
    suburbName: "Surfers Paradise",
    title: "Pest Control in Surfers Paradise",
    metaDescription:
      "Pest control in Surfers Paradise for apartments, units and holiday rentals. Registered treatment with access arranged up front. Call 0450 833 683.",
    intro: [
      "Pest work in Surfers Paradise is mostly apartment work. Cockroaches in particular thrive in multi-unit buildings, moving through service ducts, wall cavities and shared roof spaces, which means treating one apartment in isolation often treats only the symptom. Older towers and buildings with food premises at ground level need that building-level thinking as well.",
      "Access is arranged with building management before the visit, including lift use and entry times. Holiday-let apartments are treated on tighter schedules between stays, so timing is confirmed when the booking is made. The team explains preparation and re-entry before treatment, and can coordinate with an end of lease clean when both are needed.",
    ],
    directAnswer:
      "Pest control in Surfers Paradise covers apartments, units and holiday rentals, with building access arranged beforehand. Treatment is matched to the pest found, and in multi-unit buildings coverage is planned with shared spaces in mind.",
    localNotes: [
      {
        title: "Multi-unit buildings",
        body: "Insects move through service ducts and shared roof spaces, so the treatment plan accounts for the building rather than a single apartment.",
      },
      {
        title: "Building access",
        body: "Lift use, fob entry and suitable treatment times are confirmed with building management before the visit.",
      },
      {
        title: "Holiday-let apartments",
        body: "Short-stay properties are treated on tighter turnaround schedules, with timing agreed around arrivals and departures.",
      },
      {
        title: "Food premises below",
        body: "Buildings with cafes or restaurants at ground level often need a program rather than a single visit, with documentation where required.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Surfers Paradise?",
        answer:
          "Yes. We treat apartments, units and holiday rentals across Surfers Paradise, including buildings where access needs to be arranged with management first.",
      },
      {
        question: "Why do cockroaches keep coming back in apartment buildings?",
        answer:
          "Because they travel through shared ducts, wall cavities and roof spaces. Treating a single apartment without considering the building usually only deals with part of the problem, so coverage is planned accordingly.",
      },
      {
        question: "Can you treat between holiday stays?",
        answer:
          "Yes. Send us the departure and arrival times when you enquire and we will confirm whether the treatment and re-entry window fit the booking.",
      },
      {
        question: "Are the products safe for families?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the job starts.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "helensvale", label: "Pest control in Helensvale" },
      { slug: "robina", label: "Pest control in Robina" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "broadbeach",
    suburbName: "Broadbeach",
    title: "Pest Control in Broadbeach",
    metaDescription:
      "Pest control in Broadbeach for apartments, units and homes. Registered treatment for common coastal pests, scoped to the property. Call 0450 833 683.",
    intro: [
      "Broadbeach properties face two pest profiles at once. Beachside apartments deal with insects arriving through shared spaces and service penetrations, while houses and older low-rise blocks on the quieter streets deal with garden activity, moisture and the humidity that comes with being close to the water. Short-stay letting adds another layer, because properties are occupied intermittently and issues are often found between guests.",
      "The treatment is scoped to the property: internal coverage, external barrier work, and where required monitoring or baiting rather than a single spray. Preparation, re-entry times and pet safety guidance are given before the visit, and treatment can be scheduled alongside an end of lease clean when a lease requires it.",
    ],
    directAnswer:
      "Pest control in Broadbeach covers apartments, low-rise units and houses, with internal and external treatment scoped to the property. Preparation and re-entry guidance is given beforehand, and the price is confirmed before booking.",
    localNotes: [
      {
        title: "Beachside apartments",
        body: "Shared spaces and service penetrations are considered when coverage is planned, not just the inside of one unit.",
      },
      {
        title: "Older low-rise blocks",
        body: "Established buildings often have gaps and weepholes that insects use, which is factored into the external treatment.",
      },
      {
        title: "Houses and gardens",
        body: "Garden beds, moisture and vegetation close to the house keep ant and spider activity steady through the warm months.",
      },
      {
        title: "Short-stay properties",
        body: "Intermittently occupied homes are treated on schedules that fit between guests, with re-entry times agreed in advance.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Broadbeach?",
        answer:
          "Yes. Apartments, low-rise units and houses across Broadbeach are treated, with the scope matched to the property and the pest identified on site.",
      },
      {
        question: "What is included in a treatment?",
        answer:
          "Assessment of the activity, internal treatment for common pests, external treatment and barrier work where required, plus preparation and re-entry guidance before the work starts.",
      },
      {
        question: "Do you treat holiday rentals?",
        answer:
          "Yes. Tell us the departure and arrival times when you enquire so the treatment and re-entry window can be built around the booking.",
      },
      {
        question: "Can pest treatment be booked with a bond clean?",
        answer:
          "Yes. If your lease requires treatment at the end of the tenancy we can arrange it with the clean so the receipt is ready before your inspection.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "Pest control in Surfers Paradise" },
      { slug: "helensvale", label: "Pest control in Helensvale" },
      { slug: "burleigh-heads", label: "Pest control in Burleigh Heads" },
      { slug: "southport", label: "Pest control in Southport" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "helensvale",
    suburbName: "Helensvale",
    title: "Pest Control in Helensvale",
    metaDescription:
      "Pest control in Helensvale for family homes, townhouses and offices. Registered treatment for coastal pests with safety guidance. Call 0450 833 683.",
    intro: [
      "Helensvale is a newer suburb with a lot of family housing, and it sits close enough to waterways, bushland corridors and undeveloped pockets that pest activity is a regular feature rather than an occasional surprise. Ants and spiders are the most common complaints in warm weather, cockroaches turn up in older parts of the housing mix, and garages and roof spaces are where rodents are usually noticed first.",
      "Because the estates are modern, most treatments are straightforward: internal coverage plus an external barrier around the perimeter, with baiting or monitoring where a single treatment will not hold. Townhouses need shared surfaces considered, and offices near the retail and transport areas are scheduled outside trading hours. Preparation and re-entry guidance are given before the visit.",
    ],
    directAnswer:
      "Pest control in Helensvale covers family homes, townhouses, villas and offices, with internal and external treatment matched to the pest identified. Preparation and re-entry guidance is provided before the job, and the price is confirmed upfront.",
    localNotes: [
      {
        title: "Bushland and waterways",
        body: "Proximity to creek lines and retained vegetation keeps ant and spider activity steady through the warmer months.",
      },
      {
        title: "Modern estates",
        body: "Newer homes are usually treated with an internal application plus an external perimeter barrier rather than heavy restoration work.",
      },
      {
        title: "Garages and roof spaces",
        body: "Rodents are most often noticed in garages, sheds and roof cavities, which are included in the assessment rather than treated in isolation.",
      },
      {
        title: "Families and pets",
        body: "Preparation and re-entry times are explained before treatment so households with children and pets can plan the day around it.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Helensvale?",
        answer:
          "Yes. We treat family homes, townhouses, villas and offices across Helensvale, including estates where access or parking needs to be arranged first.",
      },
      {
        question: "What pests are common in Helensvale?",
        answer:
          "Ants and spiders are the regular warm-weather issues, with cockroaches in parts of the housing mix and rodents around garages, sheds and roof spaces.",
      },
      {
        question: "How do you keep spiders out of a family home?",
        answer:
          "Treatment covers internal living areas plus the external perimeter where spiders enter, with guidance on reducing harbourage around doors, windows and eaves.",
      },
      {
        question: "Is the treatment safe for children and pets?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the work starts.",
      },
    ],
    nearby: [
      { slug: "coomera", label: "Cleaning services in Coomera" },
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },

  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "southport",
    suburbName: "Southport",
    title: "Office Cleaning in Southport",
    metaDescription:
      "Office cleaning in Southport for businesses, clinics and shared workspaces. Scheduled before or after hours. Call 0450 833 683.",
    intro: [
      "Southport is the administrative centre of the Gold Coast, so the office work here is varied: professional suites near the town centre, medical and allied health rooms near the hospital precinct, shared workspaces, and reception areas that see public traffic all day. Each has a different definition of clean, and a different time at which the work can happen.",
      "Most of the work is scheduled before opening or after close so staff and clients are not working around it. The checklist is built around your premises on the first visit, then repeated consistently: kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, and floors. Consumables are restocked where you supply them, and the same team is kept on the site wherever possible.",
    ],
    directAnswer:
      "Office cleaning in Southport covers professional suites, clinics, shared workspaces and reception areas, scheduled before or after hours. The checklist is built for your premises and repeated consistently on the frequency you choose.",
    localNotes: [
      {
        title: "Professional suites",
        body: "Front-of-house presentation matters when clients visit daily, so reception and meeting rooms are prioritised.",
      },
      {
        title: "Medical and allied health",
        body: "Rooms near the hospital precinct need surfaces handled carefully and consistently, with cleaning scheduled outside appointment hours.",
      },
      {
        title: "Shared workspaces",
        body: "Hot desks, kitchens and shared facilities need a rhythm that keeps pace with daily use rather than a weekly wipe-down.",
      },
      {
        title: "After-hours access",
        body: "Entry arrangements, alarm codes and keys are set up when the contract starts so cleans happen without anyone needing to stay back.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Southport?",
        answer:
          "Yes. We clean professional suites, clinics, shared workspaces and reception areas across Southport, before opening or after close.",
      },
      {
        question: "What is included in an office clean?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming of carpets and mopping of hard floors.",
      },
      {
        question: "Can you clean outside business hours?",
        answer:
          "Yes. Most Southport clients schedule the work before opening or after closing, and entry arrangements such as keys or alarm codes are arranged when the contract starts.",
      },
      {
        question: "How do I get an office cleaning quote?",
        answer:
          "Send the address, approximate floor area or number of workrooms, preferred frequency and preferred times. We confirm the scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
      { slug: "surfers-paradise", label: "Office cleaning in Surfers Paradise" },
      { slug: "broadbeach", label: "Office cleaning in Broadbeach" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "robina",
    suburbName: "Robina",
    title: "Office Cleaning in Robina",
    metaDescription:
      "Office cleaning in Robina for business parks, suites and clinics near Robina Town Centre. After-hours scheduling available. Call 0450 833 683.",
    intro: [
      "Robina's commercial side is concentrated around the town centre, the business park and the professional suites that sit alongside the hospital. Offices here are typically modern, well finished and busy, with kitchens and breakout areas that carry a lot of daily use. The cleaning expectation matches the buildings: presentation is part of how the businesses present themselves to clients.",
      "Work is scheduled before opening or after close, with entry and alarm arrangements set up when the contract begins. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points and floors, then stays consistent week to week. One-off tasks such as a deeper kitchen or a post-event reset can be added to the schedule rather than treated as a separate job.",
    ],
    directAnswer:
      "Office cleaning in Robina covers business parks, professional suites, clinics and reception areas, scheduled outside trading hours. The checklist is built for your premises and repeated on the frequency that suits your team.",
    localNotes: [
      {
        title: "Business park suites",
        body: "Kitchens and shared facilities in busy suites need a consistent schedule rather than an occasional deep clean.",
      },
      {
        title: "Client-facing rooms",
        body: "Meeting rooms and reception areas are prioritised because they are where clients form their first impression.",
      },
      {
        title: "After-hours entry",
        body: "Keys, fobs and alarm codes are arranged at the start of the contract so cleans happen without staff needing to stay back.",
      },
      {
        title: "Flexible frequency",
        body: "Daily, several times a week or a weekly visit can be matched to how heavily the space is used.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Robina?",
        answer:
          "Yes. Business parks, professional suites, clinics and reception areas across Robina are cleaned before opening or after closing, with access arranged at the start of the contract.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you clean after hours?",
        answer:
          "Yes. Most Robina offices are scheduled outside trading hours, and entry arrangements such as keys or alarm codes are set up when the contract begins.",
      },
      {
        question: "Do you offer one-off office cleans?",
        answer:
          "Yes. Post-event resets, pre-inspection cleans and end-of-year deep cleans can be booked alongside the regular schedule.",
      },
    ],
    nearby: [
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "surfers-paradise", label: "Office cleaning in Surfers Paradise" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "varsity-lakes",
    suburbName: "Varsity Lakes",
    title: "Office Cleaning in Varsity Lakes",
    metaDescription:
      "Office cleaning in Varsity Lakes for professional suites, studios and small business offices. Flexible scheduling. Call 0450 833 683.",
    intro: [
      "Varsity Lakes is a newer district where the commercial side is made up of smaller offices: professional suites, creative studios, service businesses and the offices attached to local retail. Spaces like these are rarely open-plan warehouses; they are a handful of rooms, a kitchen and a reception area, and they get used hard between meetings.",
      "The cleaning pattern that suits them is a consistent visit rather than an occasional blitz. Workstations and meeting rooms are wiped, kitchens and break areas are put back, high-touch points are handled, and floors are done. Visits are scheduled before opening or after close, with access arranged up front, and the frequency is set around how many people move through the space each day.",
    ],
    directAnswer:
      "Office cleaning in Varsity Lakes covers professional suites, studios and small business offices, scheduled before or after hours. The checklist is built for your space and repeated on the frequency that matches how busy it is.",
    localNotes: [
      {
        title: "Smaller offices",
        body: "Suites and studios are quick to service, which makes several visits a week practical where daily presentation matters.",
      },
      {
        title: "Meeting-heavy spaces",
        body: "Rooms used constantly for client meetings are prioritised so they are reset before the next appointment.",
      },
      {
        title: "Kitchens and break areas",
        body: "Shared kitchens are the busiest part of most small offices and get a consistent place in the checklist.",
      },
      {
        title: "Flexible timing",
        body: "Entry arrangements are set up when the contract starts, so cleans happen outside trading hours without anyone staying back.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Varsity Lakes?",
        answer:
          "Yes. Professional suites, studios and small business offices across Varsity Lakes are cleaned before opening or after closing, with access arranged at the start of the contract.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation, plus vacuuming of carpets and mopping of hard floors.",
      },
      {
        question: "How often should a small office be cleaned?",
        answer:
          "Several visits a week suits busy client-facing suites, while quieter offices often do well weekly. We will recommend a rhythm after seeing how the space is used.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, the number of rooms or workstations, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
    ],
  },
]

export function getServiceLocationPage(serviceSlug: string, suburbSlug: string) {
  return serviceLocationPages.find(
    (page) => page.serviceSlug === serviceSlug && page.suburbSlug === suburbSlug
  )
}

export function getServiceLocationParams() {
  return serviceLocationPages.map((page) => ({
    serviceSlug: page.serviceSlug,
    suburbSlug: page.suburbSlug,
  }))
}
