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
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "nerang",
    suburbName: "Nerang",
    title: "Bond Cleaning in Nerang",
    metaDescription:
      "Bond cleaning in Nerang for brick homes, townhouses and rentals on larger blocks. Inspection-ready scope with the price confirmed first. Call 0450 833 683.",
    intro: [
      "Nerang is an inland suburb where most rentals are freestanding houses: older brick homes on larger blocks, a spread of post-war and newer builds, and the occasional duplex or townhouse on the quieter streets. Handing one back is a heavier job than a beachside apartment. There are more floors, more bathrooms, and usually a garage, a covered outdoor area and a laundry that the entry condition report will cover.",
      "Garden traffic is the other factor. Soil and grass get tracked through in a way that never happens in a tower, so floors and entry points take priority, and the oven and cooktop in an older kitchen often need proper restoration time rather than a wipe. We ask about the last detailed clean, the inspection date and what the agent has flagged, then write the scope around the property instead of a fixed package.",
    ],
    directAnswer:
      "Bond cleaning in Nerang covers houses, duplexes and townhouses. The job is scoped to the individual property, worked room by room against the inspection checklist, and priced before the booking is confirmed.",
    localNotes: [
      {
        title: "Larger homes",
        body: "More rooms, bathrooms and living areas mean a longer visit, which is priced up front rather than discovered partway through the day.",
      },
      {
        title: "Older kitchens",
        body: "Longer-established brick homes often carry years of grease and oven build-up, so restoration time is built into the scope.",
      },
      {
        title: "Outdoor areas",
        body: "Garages, covered patios, paths and bin areas are part of most Nerang handovers and are added where the tenancy includes them.",
      },
      {
        title: "Garden traffic",
        body: "Soil and grass tracked in from bigger yards put floors and entry points at the top of the checklist.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Nerang?",
        answer:
          "Yes. We clean houses, duplexes and townhouses across Nerang, and the scope is written around the property rather than a standard package.",
      },
      {
        question: "What is included in a Nerang bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping. Garages and outdoor areas are added where the tenancy covers them.",
      },
      {
        question: "Do you also do carpet and pest treatment?",
        answer:
          "Yes. Both are commonly booked at the end of a lease in Nerang and can be completed in the same visit so the carpet dries and the pest receipt is ready before your inspection.",
      },
      {
        question: "How far ahead should I book in Nerang?",
        answer:
          "As soon as the inspection date is known. Larger houses take longer, and we leave a buffer between the clean and the inspection so anything your agent flags can still be corrected.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "southport", label: "Bond cleaning in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "palm-beach",
    suburbName: "Palm Beach",
    title: "Bond Cleaning in Palm Beach",
    metaDescription:
      "Bond cleaning in Palm Beach for beachside houses, units and townhouses. Inspection-ready clean with access and extras confirmed first. Call 0450 833 683.",
    intro: [
      "Palm Beach sits at the southern end of the Gold Coast and mixes beachside houses, low-rise units and a growing number of townhouses a few streets back from the water. Properties close to the beach hand back with the same pattern every time: salt residue on glass and screens, sand tracked across hard floors, and heavier traffic through the main living areas.",
      "Houses in particular bring the outdoor side of the job into scope — paths, patios, garage floors and the entry area the agent walks first. Short stays are common here as well, so kitchens and carpets are often heavier than a standard tenancy would suggest. We book the inspection date first, confirm what the entry condition report expects, and put the extras in writing before anything is locked in.",
    ],
    directAnswer:
      "Bond cleaning in Palm Beach covers houses, units and townhouses, including properties close to the beach where salt and sand add to the job. Scope is confirmed against your inspection requirements and priced before booking.",
    localNotes: [
      {
        title: "Beachside exposure",
        body: "Salt air leaves residue on glass, screens and balcony surfaces, and those areas are cleaned as part of the job rather than wiped over.",
      },
      {
        title: "Houses with outdoor areas",
        body: "Paths, patios, garage floors and entry areas are included where the tenancy covers them, because agents check them first.",
      },
      {
        title: "Townhouses",
        body: "Internal stairs, entry areas and shared walls are easy to overlook in a rushed handover, so they are on the checklist.",
      },
      {
        title: "Short stays",
        body: "Properties let for holidays pick up heavier kitchen and carpet wear, and the scope is written for that condition.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Palm Beach?",
        answer:
          "Yes. We clean houses, units and townhouses across Palm Beach, from the beachside streets to the newer townhouse pockets inland.",
      },
      {
        question: "What is included in a Palm Beach bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and sills, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas where the tenancy includes them.",
      },
      {
        question: "Do you handle short-stay handovers?",
        answer:
          "Yes. Tell us the departure and arrival dates when you enquire. Kitchens and carpets are scoped with the heavier condition in mind rather than quoted as a light clean.",
      },
      {
        question: "Can carpet cleaning and pest treatment be added?",
        answer:
          "Yes. Both are commonly requested at the end of a Palm Beach lease and can be booked in the one visit, sequenced correctly for your inspection.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "Bond cleaning in Burleigh Heads" },
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "helensvale",
    suburbName: "Helensvale",
    title: "Bond Cleaning in Helensvale",
    metaDescription:
      "Bond cleaning in Helensvale for family homes, townhouses and villas in the newer estates. Inspection-ready scope, price confirmed first. Call 0450 833 683.",
    intro: [
      "Helensvale's rentals are mostly newer: family homes with double garages, townhouses and villas in managed estates, and a smaller number of apartments near the transport and retail areas. Modern properties hold their condition, which means the bond clean here is about detail rather than heavy restoration. Inspectors pull out the same things every time — wardrobe interiors, window tracks, light switches, skirting and the inside of cupboards.",
      "The other thing worth sorting early is access. Several estates are body corporate managed, so entry, lift and parking arrangements are agreed when the booking is made rather than on the day. Families also hand back around school terms, which concentrates inspection dates at the ends of terms. Send us the estate or street, the property type and the date your agent has given you, and we will schedule backwards from it with a correction buffer in place.",
    ],
    directAnswer:
      "Bond cleaning in Helensvale covers newer family homes, townhouses, villas and apartments across the estates. The clean runs room by room against the inspection checklist, with access arrangements confirmed first and the price agreed before booking.",
    localNotes: [
      {
        title: "Managed estates",
        body: "Body corporate rules around entry, parking and lift use are confirmed with the booking so the team is not waiting at a locked gate.",
      },
      {
        title: "Modern finishes",
        body: "Newer kitchens and bathrooms need less restoration, so time goes into the details inspectors check: tracks, switches, skirting and cupboard interiors.",
      },
      {
        title: "Family homes",
        body: "Double garages, wet areas and high-traffic floors carry most of the workload in houses with children and pets.",
      },
      {
        title: "Term-time handovers",
        body: "School term ends cluster inspection dates, so booking early keeps the buffer between the clean and the inspection intact.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Helensvale?",
        answer:
          "Yes. We clean homes, townhouses, villas and apartments across the Helensvale estates, with entry and parking arrangements confirmed when the booking is made.",
      },
      {
        question: "What is included in a Helensvale bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Can you work around body corporate access rules?",
        answer:
          "Yes. Tell us the estate and any entry, lift or parking requirements when you enquire and we will arrange access as part of the booking.",
      },
      {
        question: "Should I book carpet cleaning as well?",
        answer:
          "If the carpets have seen a few years of family traffic, usually yes. It can be booked with the clean in the same visit so everything is ready before your inspection.",
      },
    ],
    nearby: [
      { slug: "coomera", label: "Bond cleaning in Coomera" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "southport", label: "Bond cleaning in Southport" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "coomera",
    suburbName: "Coomera",
    title: "Bond Cleaning in Coomera",
    metaDescription:
      "Bond cleaning in Coomera for new estates, townhouses and family homes in the fast-growing north. Inspection-ready scope, price confirmed. Call 0450 833 683.",
    intro: [
      "Coomera has grown faster than any other part of the Gold Coast in recent years, and the rental stock shows it: new estates of family homes, rows of townhouses and villas in planned communities, and apartments around the town centre and station. A large share of leases here are first tenancies on new or near-new property, so the inspection tends to be about precision rather than restoration.",
      "That works in your favour, but only if the details are handled. New homes still fail on the same points: window tracks, wardrobe shelving, skirting, the inside of cupboards and the state of the garage floor. Access in managed estates needs arranging in advance, and handovers cluster around the same weeks as the rest of the northern suburbs. We confirm the estate, property type, inspection date and any extras your agent wants, then lock the booking in.",
    ],
    directAnswer:
      "Bond cleaning in Coomera covers new family homes, townhouses, villas and apartments across the estates. The job is scoped for the property, run against the inspection checklist and priced before the booking is confirmed.",
    localNotes: [
      {
        title: "New estates",
        body: "Planned communities come with entry, gate and parking rules that are confirmed when the booking is made rather than on the day.",
      },
      {
        title: "New builds",
        body: "Near-new homes need detail work rather than restoration, and those details are what most inspections turn on.",
      },
      {
        title: "Family homes",
        body: "Garages, wet areas and high-traffic floors carry the workload, especially in homes occupied from handover to handover.",
      },
      {
        title: "Northern scheduling",
        body: "Coomera handovers sit alongside Helensvale and Pimpama on the same run, which keeps availability steady through the week.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Coomera?",
        answer:
          "Yes. We clean rentals across Coomera, including the newer estates, townhouse communities and apartments near the town centre.",
      },
      {
        question: "What is included in a Coomera bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Do you do end of lease cleans on brand new homes?",
        answer:
          "Yes. New builds still need a proper detail clean before the first inspection, and the scope is written for that rather than for a restoration job.",
      },
      {
        question: "How do I get a Coomera bond cleaning quote?",
        answer:
          "Send the estate or street, property type, bedroom and bathroom count, inspection date and any extras your agent asked for. We confirm scope and price in writing before booking.",
      },
    ],
    nearby: [
      { slug: "helensvale", label: "Bond cleaning in Helensvale" },
      { slug: "southport", label: "Bond cleaning in Southport" },
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "varsity-lakes",
    suburbName: "Varsity Lakes",
    title: "Bond Cleaning in Varsity Lakes",
    metaDescription:
      "Bond cleaning in Varsity Lakes for townhouses, villas, apartments and homes around the lakes. Inspection-ready scope. Call 0450 833 683.",
    intro: [
      "Varsity Lakes is a newer district built around the waterways, with a rental mix of townhouses and villas in strata-managed groups, apartments above the retail strip, and detached family homes on the quieter blocks. The housing is generally well kept, so the bond clean turns on detail: track work on sliding doors, wardrobe interiors, skirting, switches and the state of wet areas.",
      "Waterfront and canal-side properties add their own points. Balconies and external screens collect salt and insects, entry areas see constant traffic, and strata rules can govern when the team can access the building or park near it. We settle those arrangements with the booking, scope the clean against the entry condition report, and leave a buffer before your inspection so anything your agent wants corrected can be done without a rushed second visit.",
    ],
    directAnswer:
      "Bond cleaning in Varsity Lakes covers townhouses, villas, apartments and houses around the lakes. The scope is confirmed against your inspection requirements and the price agreed before the booking is locked in.",
    localNotes: [
      {
        title: "Strata-managed groups",
        body: "Entry, parking and lift arrangements are confirmed up front so the clean starts on time instead of waiting on a code or a gate.",
      },
      {
        title: "Waterfront positions",
        body: "Balconies, screens and external glass pick up salt and insects and are treated as part of the clean.",
      },
      {
        title: "Detail over restoration",
        body: "Well-kept properties still fail inspections on tracks, switches, skirting and cupboard interiors, which is where the time goes.",
      },
      {
        title: "Mixed housing",
        body: "From one-bedroom apartments to family homes, the scope is written for the property rather than assumed from the bedroom count.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Varsity Lakes?",
        answer:
          "Yes. We clean townhouses, villas, apartments and houses across Varsity Lakes, with access and parking arrangements confirmed when the booking is made.",
      },
      {
        question: "What is included in a Varsity Lakes bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Do you clean balconies and external screens?",
        answer:
          "Where they form part of the tenancy, yes. Waterfront positions collect salt and insects quickly, so those surfaces are included rather than left for the agent to flag.",
      },
      {
        question: "Can carpet and pest treatment be booked together?",
        answer:
          "Yes. Booking them with the clean keeps the sequencing correct and means everything is finished before your final inspection.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "southport", label: "Bond cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "bond-cleaning-gold-coast",
    suburbSlug: "carrara",
    suburbName: "Carrara",
    title: "Bond Cleaning in Carrara",
    metaDescription:
      "Bond cleaning in Carrara for older homes, townhouses and rentals near the stadium precinct. Inspection-ready scope, price confirmed. Call 0450 833 683.",
    intro: [
      "Carrara is an established suburb with a genuinely mixed rental stock: older brick and timber homes on generous blocks, newer townhouses filling in beside them, and units close to the shopping and stadium precinct. That mix means two very different cleans. Older properties usually need restoration time in kitchens, bathrooms and on floors, while newer townhouses are quicker but show every missed detail.",
      "Location matters too. Event traffic around the stadium precinct affects parking and access on certain days, and homes near Mermaid Creek see more insect activity than a sealed unit would. We confirm the property type, the last time the oven and carpets were done, and your inspection date before quoting, then schedule the clean backwards from the inspection with a buffer left for corrections.",
    ],
    directAnswer:
      "Bond cleaning in Carrara covers older houses, townhouses, units and homes near the stadium precinct. The scope is built around the individual property and confirmed room by room against the inspection checklist before booking.",
    localNotes: [
      {
        title: "Older housing stock",
        body: "Established homes often carry years of build-up in kitchens and bathrooms, so restoration time is priced into the scope from the start.",
      },
      {
        title: "New townhouses",
        body: "Quicker jobs overall, but tracks, switches, skirting and cupboard interiors decide whether they pass.",
      },
      {
        title: "Event-day access",
        body: "Parking and street access near the stadium precinct can be restricted on event days, so bookings are scheduled around them.",
      },
      {
        title: "Creek-side position",
        body: "Homes near the waterway see more insect activity, which is worth flagging when the clean is booked.",
      },
    ],
    faqs: [
      {
        question: "Do you do bond cleaning in Carrara?",
        answer:
          "Yes. We clean older houses, townhouses and units across Carrara, and the scope is written for the property rather than a fixed package.",
      },
      {
        question: "What is included in a Carrara bond clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas where the tenancy covers them.",
      },
      {
        question: "Do you also do pest treatment in Carrara?",
        answer:
          "Yes. Homes near the creek line and garden areas often combine a bond clean with a treatment, and both can be booked in the one visit.",
      },
      {
        question: "How long does a bond clean take?",
        answer:
          "It depends on size and condition. An older family home with build-up takes longer than a new townhouse, and the expected time is confirmed with the quote.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Bond cleaning in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "broadbeach", label: "Bond cleaning in Broadbeach" },
      { slug: "southport", label: "Bond cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "burleigh-heads",
    suburbName: "Burleigh Heads",
    title: "House Cleaning in Burleigh Heads",
    metaDescription:
      "Regular and one-off house cleaning in Burleigh Heads for character homes, units and townhouses. Weekly, fortnightly or monthly. Call 0450 833 683.",
    intro: [
      "Burleigh Heads households run the mix you would expect from an established beachside suburb: older character homes with separate living and outdoor areas, low-rise units close to the headland, and newer townhouses on the streets behind the village. Each needs a different rhythm. A house with gardens, a garage and a dog needs floors and wet areas put back properly, while a one-bedroom unit works best on a steady fortnightly visit.",
      "The other local factor is how close the property sits to the water. Salt residue on glass and screens, sand through entry points, and humidity that keeps bathrooms working harder are all easier to manage on a regular schedule than in an occasional catch-up. We build the checklist on the first visit, keep it consistent afterwards, and can pair a maintenance rhythm with a deeper clean a few times a year.",
    ],
    directAnswer:
      "House cleaning in Burleigh Heads covers character homes, units and townhouses on a weekly, fortnightly, monthly or one-off basis. The visit is quoted for your property with the checklist agreed on the first clean.",
    localNotes: [
      {
        title: "Character homes",
        body: "Older homes have more surfaces, separate living areas and outdoor entries, so visits are scoped for the property rather than an average house.",
      },
      {
        title: "Units near the headland",
        body: "Compact units are efficient to maintain, and a fortnightly rhythm keeps salt residue on glass and screens under control.",
      },
      {
        title: "Houses with yards",
        body: "Entry points, laundries and garage floors are where garden traffic lands, and they are prioritised in the checklist.",
      },
      {
        title: "Combined schedules",
        body: "Many households pair a fortnightly maintenance visit with a deeper clean a couple of times a year, which we plan together.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Burleigh Heads?",
        answer:
          "Yes. Character homes, units and townhouses across Burleigh Heads are cleaned weekly, fortnightly, monthly or as a one-off, with the checklist agreed on the first visit.",
      },
      {
        question: "What is included in a standard Burleigh visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping. Detail items such as the oven or internal windows can be added.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "No. Many clients arrange key or access-code entry. If you would like a walk-through at the end, tell us when booking and we will time the visit around you.",
      },
      {
        question: "How often should a Burleigh home be cleaned?",
        answer:
          "Fortnightly suits most households here, particularly properties close to the water. Busier homes with pets or children often choose weekly, while quieter homes do well monthly.",
      },
    ],
    nearby: [
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
      { slug: "nerang", label: "House cleaning in Nerang" },
      { slug: "robina", label: "House cleaning in Robina" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "palm-beach",
    suburbName: "Palm Beach",
    title: "House Cleaning in Palm Beach",
    metaDescription:
      "House cleaning in Palm Beach for beachside homes, units and townhouses. Weekly, fortnightly, monthly or one-off visits. Call 0450 833 683.",
    intro: [
      "Palm Beach gives cleaners a beachside workload with a suburban shape. Houses a few streets from the surf carry sand through entry points, salt on glass and screens, and gardens that keep the laundry busy, while the units and townhouses closer to the village are compact but see constant traffic through the living areas.",
      "Because of that, the properties that stay in the best condition are the ones on a steady rhythm rather than an occasional blitz. Fortnightly is the most common choice here, with weekly for shared or busy households and monthly for quieter ones. We agree the priorities on the first visit — kitchens, bathrooms, floors, glass where it matters — then keep the same checklist so you are not re-explaining it every time.",
    ],
    directAnswer:
      "House cleaning in Palm Beach covers houses, units and townhouses on a weekly, fortnightly, monthly or one-off basis. Scope is agreed for the property and the price confirmed before the first visit.",
    localNotes: [
      {
        title: "Beachside houses",
        body: "Sand through entry points, salt on glass and busier laundries are the standard workload in homes close to the water.",
      },
      {
        title: "Units and townhouses",
        body: "Compact properties are quick to maintain, which makes a regular fortnightly visit realistic even with long work hours.",
      },
      {
        title: "Glass and screens",
        body: "Coastal exposure means exterior-facing glass and screens pick up residue faster than inland suburbs, so they get a regular place in the visit.",
      },
      {
        title: "Holiday periods",
        body: "Homes hosting visitors through the break are also cleaned as one-off resets around those dates as well as on schedule.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Palm Beach?",
        answer:
          "Yes. Houses, units and townhouses across Palm Beach are cleaned weekly, fortnightly, monthly or as a one-off, with access arranged up front.",
      },
      {
        question: "What is included in a standard visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting, light switches and skirting, and full vacuuming and mopping. Inside the oven and internal windows are added on request.",
      },
      {
        question: "How often should a beachside home be cleaned?",
        answer:
          "Fortnightly is the most common rhythm in Palm Beach because salt, sand and humidity all work against a property left too long between visits.",
      },
      {
        question: "How do I get a Palm Beach quote?",
        answer:
          "Send the address, bedrooms and bathrooms, whether the home is occupied, and how often you would like a visit. We confirm the scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "House cleaning in Burleigh Heads" },
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
      { slug: "nerang", label: "House cleaning in Nerang" },
      { slug: "robina", label: "House cleaning in Robina" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "helensvale",
    suburbName: "Helensvale",
    title: "House Cleaning in Helensvale",
    metaDescription:
      "House cleaning in Helensvale for family homes, townhouses and villas. Weekly, fortnightly, monthly or one-off visits. Call 0450 833 683.",
    intro: [
      "Helensvale is a family suburb, and the cleaning pattern reflects it. Modern homes with double garages, wet areas that carry the school week, and townhouses or villas in managed estates all produce the same core workload: floors, bathrooms and kitchens that need putting back rather than a light refresh. The properties are generally well finished, so maintenance is what keeps them that way.",
      "Estate rules can affect the visit as much as the cleaning. Parking, gate access and common areas need to be sorted when the schedule starts so the team arrives and gets to work rather than waiting. Most households here choose fortnightly or weekly, with a deeper clean a couple of times a year for the oven, internal windows and cupboard interiors. We will suggest a rhythm based on how the home is actually used instead of a default.",
    ],
    directAnswer:
      "House cleaning in Helensvale covers family homes, townhouses and villas, available weekly, fortnightly, monthly or one-off. The checklist is built for your property and kept consistent visit to visit.",
    localNotes: [
      {
        title: "Estate access",
        body: "Parking, gate codes and access arrangements are confirmed when the schedule starts so visits begin on time.",
      },
      {
        title: "Family traffic",
        body: "Floors, bathrooms and kitchens carry the school week and are the priority areas on every visit.",
      },
      {
        title: "Modern homes",
        body: "Newer finishes hold their condition when maintained, which is exactly what a regular rhythm is for.",
      },
      {
        title: "Seasonal deep cleans",
        body: "Oven, internal windows and cupboard interiors are easiest to add a few times a year alongside the maintenance visits.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Helensvale?",
        answer:
          "Yes. Family homes, townhouses and villas across Helensvale are cleaned weekly, fortnightly, monthly or as a one-off, with access arranged when the schedule begins.",
      },
      {
        question: "What is included in a standard Helensvale visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting of reachable surfaces, light switches and skirting, and full vacuuming and mopping.",
      },
      {
        question: "Can you clean around body corporate rules?",
        answer:
          "Yes. Tell us the estate and any parking or access requirements when you book and we will arrange them as part of the schedule.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. The team arrives with the equipment and products the job needs. Tell us about any surfaces or sensitivities when you book.",
      },
    ],
    nearby: [
      { slug: "coomera", label: "Cleaning services in Coomera" },
      { slug: "southport", label: "House cleaning in Southport" },
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "coomera",
    suburbName: "Coomera",
    title: "House Cleaning in Coomera",
    metaDescription:
      "House cleaning in Coomera for new family homes, townhouses and apartments. Weekly, fortnightly, monthly or one-off visits. Call 0450 833 683.",
    intro: [
      "Coomera's housing is mostly new, and the cleaning needs that come with it are consistent: large open living areas that collect dust, kitchens used hard by families, wet areas that never really get a day off, and garages that double as storage. The homes are modern, so the goal is maintenance rather than restoration — keeping the standard so a big catch-up is never needed.",
      "The suburb is also spread across several estates, each with its own gate, parking and access rules. We settle those when the schedule is set up, then keep the same team on the property wherever possible so nobody has to re-explain where things live. Fortnightly is the common choice for families here, weekly for busier households, and one-off cleans remain popular before guests or after a long rental period.",
    ],
    directAnswer:
      "House cleaning in Coomera covers new family homes, townhouses and apartments across the estates, on a weekly, fortnightly, monthly or one-off basis with the checklist agreed on the first visit.",
    localNotes: [
      {
        title: "Estate gates and parking",
        body: "Gate codes, visitor parking and access rules are arranged when the schedule starts so visits are never held up at the entry.",
      },
      {
        title: "Open-plan living",
        body: "Large living areas and high-traffic kitchens are the parts of a new home that need consistent attention rather than occasional work.",
      },
      {
        title: "Garages and storage",
        body: "Garages used for storage are included in the routine where they form part of the property.",
      },
      {
        title: "New estates",
        body: "As the suburbs fill in, keeping a steady booking slot is easier than trying to start a service mid-term or before a public holiday.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Coomera?",
        answer:
          "Yes. Family homes, townhouses and apartments across the Coomera estates are cleaned weekly, fortnightly, monthly or as a one-off.",
      },
      {
        question: "What is included in a standard Coomera visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting, light switches and skirting, and full vacuuming and mopping. Detail items are added when you want them.",
      },
      {
        question: "How often should a new home be cleaned?",
        answer:
          "Fortnightly keeps modern open-plan homes in good shape with minimal effort. Households with children or pets often prefer weekly.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the estate or street, bedrooms and bathrooms, whether the home is occupied and your preferred frequency. We confirm scope and price before the first visit.",
      },
    ],
    nearby: [
      { slug: "helensvale", label: "Cleaning services in Helensvale" },
      { slug: "southport", label: "House cleaning in Southport" },
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "varsity-lakes",
    suburbName: "Varsity Lakes",
    title: "House Cleaning in Varsity Lakes",
    metaDescription:
      "House cleaning in Varsity Lakes for townhouses, villas, apartments and homes around the lakes. Regular or one-off visits. Call 0450 833 683.",
    intro: [
      "Varsity Lakes mixes townhouses and villas in strata-managed groups, apartments above the retail strip, and detached homes on the quieter blocks around the waterways. Most of it is newer, well finished and close to work and study, which means residents are usually short on time rather than short on space. A consistent visit does more for a property like that than an occasional intensive clean.",
      "Waterfront and canal-side positions bring their own maintenance: salt on external glass and screens, insects on balconies, and entry areas that see constant traffic. Strata rules can also shape when the team can access the building or park nearby, so those are arranged when the schedule starts. We build the checklist on the first visit, then keep it the same so the home stays at the standard between visits.",
    ],
    directAnswer:
      "House cleaning in Varsity Lakes covers townhouses, villas, apartments and homes around the lakes, on a weekly, fortnightly, monthly or one-off basis with access arranged up front.",
    localNotes: [
      {
        title: "Strata access",
        body: "Building entry, lift use and parking rules are confirmed when the schedule starts so visits are never delayed at the lobby.",
      },
      {
        title: "Waterfront positions",
        body: "Salt on glass and screens and insects on balconies are handled as part of the routine rather than left to build up.",
      },
      {
        title: "Compact living",
        body: "Apartments and townhouses are efficient to service, which makes several visits a week practical where presentation matters.",
      },
      {
        title: "Study and work schedules",
        body: "Visits can be timed around class and office hours so the home is done before the evening.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Varsity Lakes?",
        answer:
          "Yes. Townhouses, villas, apartments and homes across Varsity Lakes are cleaned weekly, fortnightly, monthly or as a one-off.",
      },
      {
        question: "What is included in a standard visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting, light switches and skirting, and full vacuuming and mopping.",
      },
      {
        question: "Do you clean balconies and external glass?",
        answer:
          "Where they form part of the property, yes. Coastal positions collect salt and insects quickly, so those areas can be included in the routine.",
      },
      {
        question: "How do I start a regular schedule?",
        answer:
          "Send the address, bedrooms and bathrooms and your preferred frequency. We confirm the scope and price, then set up the same team on the same day each cycle.",
      },
    ],
    nearby: [
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "broadbeach", label: "House cleaning in Broadbeach" },
      { slug: "southport", label: "House cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "house-cleaning-gold-coast",
    suburbSlug: "carrara",
    suburbName: "Carrara",
    title: "House Cleaning in Carrara",
    metaDescription:
      "House cleaning in Carrara for established homes, townhouses and units. Weekly, fortnightly, monthly or one-off visits. Call 0450 833 683.",
    intro: [
      "Carrara's housing runs from older brick and timber homes on generous blocks to newer townhouses and a spread of units near the shopping and stadium precinct. That range changes the workload more than the suburb name suggests. An older family home brings separate living areas, gardens, a garage and often carpet that has been down for years, while a townhouse is quicker but expects the same finish.",
      "The local quirks are practical ones. Event traffic around the stadium affects when the team can park, homes near the creek line see more insect activity indoors, and garden soil moves through the house in a way that rewards a regular rhythm. We scope the first visit around the property, keep the checklist consistent afterwards, and can arrange a deeper clean between maintenance visits when the home needs it.",
    ],
    directAnswer:
      "House cleaning in Carrara covers established homes, townhouses and units on a weekly, fortnightly, monthly or one-off basis. The checklist is agreed for your property and the price confirmed before the first visit.",
    localNotes: [
      {
        title: "Older family homes",
        body: "Separate living areas, gardens and older carpet mean longer visits, which are scoped up front rather than discovered mid-clean.",
      },
      {
        title: "Townhouses and units",
        body: "Quicker to service, which makes a fortnightly rhythm practical for busy households near the precinct.",
      },
      {
        title: "Event-day parking",
        body: "Street access near the stadium can be restricted on event days, so visits are scheduled around the calendar.",
      },
      {
        title: "Creek-side position",
        body: "More insect activity indoors is common near the waterway, and it is worth mentioning when the visit is booked.",
      },
    ],
    faqs: [
      {
        question: "Do you offer house cleaning in Carrara?",
        answer:
          "Yes. Older homes, townhouses and units across Carrara are cleaned weekly, fortnightly, monthly or as a one-off, with the checklist agreed on the first visit.",
      },
      {
        question: "What is included in a standard Carrara visit?",
        answer:
          "Kitchen benches, sink, stovetop and cupboard fronts, bathroom sanitising, dusting, light switches and skirting, and full vacuuming and mopping. Garages and outdoor areas can be added.",
      },
      {
        question: "Can you handle a home that needs a reset?",
        answer:
          "Yes. A restoration clean is booked as its own job rather than squeezed into a maintenance visit, so the price reflects the work and the home gets back to standard.",
      },
      {
        question: "How often should an older home be cleaned?",
        answer:
          "Fortnightly keeps older homes comfortable with little effort, while weekly suits households with children, pets or shared living.",
      },
    ],
    nearby: [
      { slug: "robina", label: "House cleaning in Robina" },
      { slug: "nerang", label: "House cleaning in Nerang" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "southport", label: "House cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "nerang",
    suburbName: "Nerang",
    title: "End of Lease Cleaning in Nerang",
    metaDescription:
      "End of lease cleaning in Nerang for houses and townhouses. Scheduled backwards from your inspection date with the scope confirmed first. Call 0450 833 683.",
    intro: [
      "Lease endings in Nerang are usually houses, and houses take longer to hand back than a unit. Outdoor areas, garages, laundries and the garden entry all appear on the entry condition report, and older kitchens and bathrooms often need restoration work rather than a maintenance clean. The scope has to be written for that reality, not for an average property.",
      "We schedule the clean backwards from your inspection date instead of from today's convenience, so a buffer exists if your agent wants anything corrected. Because the property is larger, the earlier the date is known the better — a family home with a year of build-up is not a job to compress. Carpet steam cleaning and pest treatment are the two add-ons most often requested here, and both can be booked in the same visit so the receipt and the dried carpet are ready before the keys go back.",
    ],
    directAnswer:
      "End of lease cleaning in Nerang covers houses, duplexes and townhouses, scheduled backwards from your inspection date and run against the room-by-room checklist agents work from.",
    localNotes: [
      {
        title: "Larger properties",
        body: "More rooms, bathrooms and outdoor areas mean the job needs a realistic slot in the calendar rather than a squeezed-in visit.",
      },
      {
        title: "Older kitchens",
        body: "Grease and oven build-up in established homes is scoped as restoration work, so the price reflects the hours involved.",
      },
      {
        title: "Outdoor and garage areas",
        body: "Patios, paths, garage floors and bin areas are included where the tenancy covers them, not left for the agent to find.",
      },
      {
        title: "Carpet and pest",
        body: "Both are commonly required at the end of a Nerang lease and can be sequenced with the clean in one booking.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Nerang?",
        answer:
          "Yes. Houses, duplexes and townhouses across Nerang are cleaned for lease handover, with the inspection date driving the schedule.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas covered by the tenancy.",
      },
      {
        question: "Is a professional clean legally required?",
        answer:
          "No. Queensland law requires the property to be left reasonably clean with fair wear and tear taken into account, as the Residential Tenancies Authority explains at rta.qld.gov.au.",
      },
      {
        question: "Can carpet cleaning and pest treatment be added?",
        answer:
          "Yes. Both are commonly requested in Nerang and can be booked with the clean so everything is done in the right order before your inspection.",
      },
    ],
    nearby: [
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "burleigh-heads",
    suburbName: "Burleigh Heads",
    title: "End of Lease Cleaning in Burleigh Heads",
    metaDescription:
      "End of lease cleaning in Burleigh Heads for character homes, units and townhouses. Booked backwards from your inspection date. Call 0450 833 683.",
    intro: [
      "Burleigh Heads handovers tend to be houses and older low-rise units rather than apartments, and that shapes the job. Character homes come with outdoor entertaining areas, garden paths, garages and interiors that may not have had a detailed clean for several years, while the units close to the headland deal with salt on glass and heavier traffic through compact spaces.",
      "The clean is scheduled backwards from your inspection date with a buffer left for corrections, and the scope is written around the property rather than a fixed package. We ask when the oven, carpets and windows were last done, because that history sets the hours. Carpet steam cleaning and pest treatment are commonly requested here and can be completed in the same visit so the receipt and dried carpet are both ready when your agent walks through.",
    ],
    directAnswer:
      "End of lease cleaning in Burleigh Heads covers houses, units and townhouses, built around your inspection date and run room by room against the checklist agents use.",
    localNotes: [
      {
        title: "Character homes",
        body: "Older interiors often need restoration time in kitchens and bathrooms, which is scoped before the booking rather than discovered on the day.",
      },
      {
        title: "Outdoor areas",
        body: "Patios, paths and garage floors appear on most Burleigh entry reports and are added where the tenancy includes them.",
      },
      {
        title: "Beachside exposure",
        body: "Salt residue on glass and screens is treated properly rather than wiped, because it is one of the first things an agent notices.",
      },
      {
        title: "Correction buffer",
        body: "A gap is left between the clean and the inspection so anything flagged can be fixed without a rushed second visit.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Burleigh Heads?",
        answer:
          "Yes. Houses, units and townhouses across Burleigh Heads are cleaned for lease handover, with the scope written around the property.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas covered by the tenancy.",
      },
      {
        question: "How long does it take?",
        answer:
          "It depends on size and condition. A well-kept unit is a shorter job than a character home with years of build-up, and the expected time is confirmed with the quote.",
      },
      {
        question: "Can I bundle carpet and pest treatment?",
        answer:
          "Yes. Booking them together keeps the sequencing correct — clean first, carpets so they can dry, pest treatment last so the receipt is current for your inspection.",
      },
    ],
    nearby: [
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "palm-beach",
    suburbName: "Palm Beach",
    title: "End of Lease Cleaning in Palm Beach",
    metaDescription:
      "End of lease cleaning in Palm Beach for beachside homes, units and townhouses. Scheduled around your final inspection. Call 0450 833 683.",
    intro: [
      "Palm Beach lease endings cover two quite different properties. Beachside houses bring outdoor areas, paths, garages and garden entry points into the handover, while compact units and townhouses closer to the village are quicker but show every missed detail. Salt and sand add a third factor that inland suburbs do not have to deal with.",
      "We schedule the clean backwards from the inspection date and confirm the entry condition report expectations before quoting. Glass, screens and balcony surfaces get proper attention because of the coastal position, and if the property has been used for short stays the kitchen and carpets are scoped for heavier wear rather than a light clean. Carpet steam cleaning and pest treatment can be booked in the one visit so both are ready before your agent walks the property.",
    ],
    directAnswer:
      "End of lease cleaning in Palm Beach covers houses, units and townhouses, scheduled backwards from your inspection date with access and extras confirmed before booking.",
    localNotes: [
      {
        title: "Coastal condition",
        body: "Salt residue on glass and screens and sand through entry points are cleaned thoroughly rather than wiped over.",
      },
      {
        title: "Houses with outdoor areas",
        body: "Paths, patios, garages and bin areas are included where the tenancy covers them and checked before the inspection.",
      },
      {
        title: "Short-stay turnarounds",
        body: "Properties used for holidays are scoped with heavier kitchen and carpet wear in mind rather than as a standard clean.",
      },
      {
        title: "Tight windows",
        body: "If the handover date is close, tell us straight away — we will say honestly whether it can be done properly rather than rushed.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Palm Beach?",
        answer:
          "Yes. Houses, units and townhouses across Palm Beach are cleaned for lease handover, with the inspection date driving the schedule.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and sills, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas covered by the tenancy.",
      },
      {
        question: "Do you clean properties used for holiday letting?",
        answer:
          "Yes. Those properties usually need more time in the kitchen and on carpets, and the scope is written around that condition.",
      },
      {
        question: "Is a professional clean required by law?",
        answer:
          "No. Queensland law requires the property to be left reasonably clean with fair wear and tear taken into account. The Residential Tenancies Authority explains this at rta.qld.gov.au.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "helensvale",
    suburbName: "Helensvale",
    title: "End of Lease Cleaning in Helensvale",
    metaDescription:
      "End of lease cleaning in Helensvale for family homes, townhouses and villas. Booked backwards from your inspection date. Call 0450 833 683.",
    intro: [
      "Helensvale handovers are usually family homes and townhouses in managed estates, and two things drive the job: the estate's access rules and the inspection date. Entry, parking and lift arrangements have to line up with the booking, and the clean itself is scheduled backwards from the date your agent gives you so corrections still fit before the keys go back.",
      "Because the housing is newer, the work concentrates on the details inspectors pull out — wardrobe interiors, window tracks, skirting, light switches, cupboard interiors and the state of the garage floor. Family traffic through wet areas and floors carries the rest of the hours. Carpet steam cleaning and pest treatment are the usual add-ons, and both can be sequenced in one visit so the receipt and the dried carpet are ready for the inspection rather than chased afterwards.",
    ],
    directAnswer:
      "End of lease cleaning in Helensvale covers family homes, townhouses, villas and apartments, arranged around estate access and scheduled backwards from your inspection date.",
    localNotes: [
      {
        title: "Estate access",
        body: "Body corporate entry, gate and parking rules are confirmed up front so the team starts on time on the day.",
      },
      {
        title: "Detail over restoration",
        body: "Newer properties need time in the details: tracks, switches, skirting, wardrobe and cupboard interiors.",
      },
      {
        title: "Family wear",
        body: "Wet areas and high-traffic floors in family homes carry most of the workload and are prioritised accordingly.",
      },
      {
        title: "Carpet and pest",
        body: "The two add-ons agents most often ask for in Helensvale, both bookable with the clean in the correct order.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Helensvale?",
        answer:
          "Yes. Family homes, townhouses, villas and apartments across Helensvale are cleaned for lease handover, with access arrangements confirmed before the day.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Do you need building or estate access details?",
        answer:
          "Yes. Send the estate name and any entry, gate or parking requirements when you enquire and we will arrange them as part of the booking.",
      },
      {
        question: "How do I get a Helensvale quote?",
        answer:
          "Send the property type, bedroom and bathroom count, inspection date and anything your agent has asked for. We confirm scope and price in writing before booking.",
      },
    ],
    nearby: [
      { slug: "coomera", label: "Cleaning services in Coomera" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "coomera",
    suburbName: "Coomera",
    title: "End of Lease Cleaning in Coomera",
    metaDescription:
      "End of lease cleaning in Coomera for new homes, townhouses and apartments in the northern estates. Scheduled around your inspection. Call 0450 833 683.",
    intro: [
      "Coomera has a high volume of lease endings because so much of the suburb is new and the tenant population turns over with work and study patterns. The estates are modern, access is usually gated, and the inspection tends to be precise rather than forgiving — new homes still fail on window tracks, skirting, switches and the inside of cupboards.",
      "We book access first, then schedule the clean backwards from your inspection date. Townhouses add internal stairs and entry areas to the scope, family homes add garages and floors, and apartments near the town centre need building arrangements settled ahead of time. Tell us the estate, property type, date and any extras your agent has flagged, and we will confirm scope and price in writing before the booking is locked in.",
    ],
    directAnswer:
      "End of lease cleaning in Coomera covers new homes, townhouses, villas and apartments, with estate or building access arranged first and the clean scheduled backwards from your inspection date.",
    localNotes: [
      {
        title: "Gated estates",
        body: "Gate codes, visitor parking and entry arrangements are confirmed with the booking so nothing delays the start of the job.",
      },
      {
        title: "New properties",
        body: "Near-new homes still fail inspections on the same small details, which is where the time goes rather than heavy restoration.",
      },
      {
        title: "Apartments near the centre",
        body: "Building access for units around the town centre and station is arranged with management ahead of the day.",
      },
      {
        title: "Northern scheduling",
        body: "Coomera and Helensvale sit on the same run, which makes buffer time before an inspection easier to find.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Coomera?",
        answer:
          "Yes. New homes, townhouses, villas and apartments across the Coomera estates are cleaned for lease handover, with access confirmed before the day.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Do new builds really need a full exit clean?",
        answer:
          "They do, because inspections on new property are typically about detail rather than restoration — tracks, switches, skirting, glass and the state of the garage.",
      },
      {
        question: "Can carpet and pest treatment be booked together?",
        answer:
          "Yes. Both can be scheduled with the clean so everything runs in the correct order and is finished before your inspection.",
      },
    ],
    nearby: [
      { slug: "helensvale", label: "Cleaning services in Helensvale" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "varsity-lakes",
    suburbName: "Varsity Lakes",
    title: "End of Lease Cleaning in Varsity Lakes",
    metaDescription:
      "End of lease cleaning in Varsity Lakes for townhouses, villas, apartments and homes. Scheduled backwards from your inspection date. Call 0450 833 683.",
    intro: [
      "Varsity Lakes handovers run through strata-managed townhouses and villas, apartments above the retail strip and detached homes around the waterways. Strata rules shape the booking: entry codes, lift use, parking and sometimes the hours the team can work. Those are confirmed before the day so the clean starts on time.",
      "The interiors are generally modern, so inspection outcomes turn on detail — track work, wardrobe shelving, switches, skirting and wet areas. Waterfront and canal-side properties add balconies, external screens and salt residue on glass, which are included where the tenancy covers them. We schedule backwards from your inspection date with a correction buffer built in, and carpet steam cleaning and pest treatment can be booked in the same visit so everything is ready when your agent walks the property.",
    ],
    directAnswer:
      "End of lease cleaning in Varsity Lakes covers townhouses, villas, apartments and homes, with strata access arranged first and the clean scheduled backwards from your inspection date.",
    localNotes: [
      {
        title: "Strata arrangements",
        body: "Entry, lift, parking and working-hour rules are confirmed with the booking rather than negotiated on the day.",
      },
      {
        title: "Waterfront properties",
        body: "Balconies, screens and external glass are cleaned properly because salt residue shows immediately on inspection.",
      },
      {
        title: "Detail-focused inspections",
        body: "Modern properties are judged on tracks, switches, skirting and interiors, which is where the time is spent.",
      },
      {
        title: "Mixed property types",
        body: "From one-bedroom apartments to family homes, the scope is written for the property rather than a standard package.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Varsity Lakes?",
        answer:
          "Yes. Townhouses, villas, apartments and homes across Varsity Lakes are cleaned for lease handover, with strata access confirmed ahead of the day.",
      },
      {
        question: "What is included in the exit clean?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, wardrobe and cupboard interiors, light switches, and full vacuuming and mopping.",
      },
      {
        question: "Can you clean balconies and screens?",
        answer:
          "Where they form part of the tenancy, yes. Coastal and canal-side positions collect salt quickly and those surfaces are treated as part of the clean.",
      },
      {
        question: "How far ahead should I book?",
        answer:
          "As soon as the inspection date is known, because the date drives everything else. We leave a buffer so anything flagged can still be corrected.",
      },
    ],
    nearby: [
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "broadbeach", label: "End of lease cleaning in Broadbeach" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "end-of-lease-cleaning-gold-coast",
    suburbSlug: "carrara",
    suburbName: "Carrara",
    title: "End of Lease Cleaning in Carrara",
    metaDescription:
      "End of lease cleaning in Carrara for older homes, townhouses and units. Scheduled backwards from your final inspection date. Call 0450 833 683.",
    intro: [
      "Carrara's mix of older homes and newer townhouses produces two very different exit cleans. An established house usually carries years of build-up in the kitchen and bathrooms, garden traffic through the floors and outdoor areas on the entry report. A newer townhouse is a shorter job, but the inspection will still be decided by tracks, switches, skirting and cupboard interiors.",
      "We scope the clean around the individual property after asking when the oven, carpets and windows were last done, then schedule backwards from your inspection date with a buffer left for corrections. Event traffic near the stadium precinct is factored into arrival times, and homes near the creek line often pair the clean with a pest treatment. Carpet steam cleaning and pest treatment can both be booked in the one visit so the receipt and dried carpet are ready for the inspection.",
    ],
    directAnswer:
      "End of lease cleaning in Carrara covers older houses, townhouses and units, scoped for the individual property and scheduled backwards from your inspection date.",
    localNotes: [
      {
        title: "Older homes",
        body: "Established properties need restoration time in kitchens and bathrooms, which is priced into the scope before the booking.",
      },
      {
        title: "New townhouses",
        body: "Shorter jobs where the outcome turns on the details: tracks, switches, skirting, wet areas and cupboard interiors.",
      },
      {
        title: "Event-day timing",
        body: "Arrival times around the stadium precinct are scheduled around the event calendar so parking does not hold up the job.",
      },
      {
        title: "Creek-side position",
        body: "More insect activity near the waterway makes a pest treatment a common and sensible add-on at handover.",
      },
    ],
    faqs: [
      {
        question: "Do you do end of lease cleaning in Carrara?",
        answer:
          "Yes. Older houses, townhouses and units across Carrara are cleaned for lease handover, with the scope written around the property.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen including oven and rangehood filters, bathrooms and grout, internal windows and tracks, skirting, cupboard interiors, light switches, and full vacuuming and mopping, plus outdoor areas covered by the tenancy.",
      },
      {
        question: "Can you combine the clean with pest treatment?",
        answer:
          "Yes. In Carrara that is a common request, and booking both together means the receipt is current for your inspection date.",
      },
      {
        question: "What if the inspection date is close?",
        answer:
          "Tell us straight away. We will say honestly whether the job can be done properly in the time available rather than booking a rushed clean that fails the inspection.",
      },
    ],
    nearby: [
      { slug: "robina", label: "End of lease cleaning in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "southport", label: "End of lease cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "nerang",
    suburbName: "Nerang",
    title: "Pest Control in Nerang",
    metaDescription:
      "Pest control in Nerang for homes near bushland, gardens and the creek line. Registered treatment with safety guidance. Call 0450 833 683.",
    intro: [
      "Nerang sits inland with established gardens, larger blocks and vegetated edges, which shapes the pest work more than the housing does. Spider activity is the most common complaint in the warm months, ants move in from garden beds, and cockroaches appear in older housing stock where subfloor gaps and service penetrations give them a route indoors. Rodents are usually noticed first in garages, sheds and roof spaces.",
      "Because the blocks are bigger, treatment generally needs both an internal application and an external barrier rather than a single spray inside. We identify what is present before recommending an approach, explain preparation and re-entry times before the job starts, and give guidance on reducing harbourage around eaves, doorways and garden edges so the treatment holds. Registered products are used for the treatment type, with pet safety covered in the briefing.",
    ],
    directAnswer:
      "Pest control in Nerang covers family homes, older houses and rentals near the vegetated edges, with internal treatment and an external barrier scoped to the property and the pest identified on site.",
    localNotes: [
      {
        title: "Garden and bushland edges",
        body: "Vegetated boundaries keep spider and ant activity steady through the warm months, so exterior barrier work matters as much as the inside.",
      },
      {
        title: "Older housing stock",
        body: "Subfloor gaps and service penetrations in established homes give insects a route indoors, which is considered in the coverage.",
      },
      {
        title: "Garages and sheds",
        body: "Outbuildings and roof spaces are where rodents are usually noticed first, and they are included in the assessment.",
      },
      {
        title: "Larger blocks",
        body: "Bigger perimeters mean the external treatment takes longer, which is reflected in the quote rather than abbreviated.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Nerang?",
        answer:
          "Yes. We treat homes and rentals across Nerang, and we start by identifying what is present rather than quoting a generic spray.",
      },
      {
        question: "What pests are common in Nerang?",
        answer:
          "Spiders and ants are the regular warm-weather issues, with cockroaches in older housing and rodents around garages, sheds and roof spaces.",
      },
      {
        question: "Are the products safe around pets?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the job. Tell us about pets when booking.",
      },
      {
        question: "How often should a property be treated?",
        answer:
          "It depends on the property and its surroundings. Homes backing onto vegetation often benefit from periodic treatment rather than waiting until activity is obvious.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "burleigh-heads",
    suburbName: "Burleigh Heads",
    title: "Pest Control in Burleigh Heads",
    metaDescription:
      "Pest control in Burleigh Heads for beachside homes, units and townhouses. Registered treatment for coastal pests with safety guidance. Call 0450 833 683.",
    intro: [
      "Burleigh Heads combines beachside exposure with established gardens, and both show up in the pest work. Salt air and humidity keep cockroach and ant activity going through the year, garden beds close to older homes bring spiders to doors and windows, and low-rise unit blocks often have shared wall cavities and roof spaces where activity moves between dwellings.",
      "Treatment starts with identification, then coverage is planned for the property rather than one room. Houses usually need internal treatment plus an external barrier around the perimeter; units need the shared spaces considered; and short-stay or holiday-let properties are treated to a schedule that fits between occupants. Preparation, re-entry times and pet safety are explained before the visit, and treatment can be arranged alongside an end of lease clean when the lease requires it.",
    ],
    directAnswer:
      "Pest control in Burleigh Heads covers houses, units and townhouses, with treatment matched to the pest found and coverage planned around shared structures and coastal conditions.",
    localNotes: [
      {
        title: "Beachside humidity",
        body: "Warm, humid conditions keep cockroach and ant activity steady through the year rather than only in summer.",
      },
      {
        title: "Established gardens",
        body: "Garden beds against older homes bring spiders to doors, windows and eaves, which the external barrier addresses.",
      },
      {
        title: "Low-rise unit blocks",
        body: "Shared wall cavities and roof spaces mean coverage has to consider the building, not only one dwelling.",
      },
      {
        title: "Short-stay properties",
        body: "Intermittently occupied homes are treated on schedules that fit between guests, with re-entry times agreed in advance.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Burleigh Heads?",
        answer:
          "Yes. We treat houses, units and townhouses across Burleigh Heads, with the scope matched to the property and the pest identified on site.",
      },
      {
        question: "What pests are common in Burleigh?",
        answer:
          "Cockroaches, ants and spiders are the regular issues, with silverfish indoors and rodents around older subfloor and roof spaces.",
      },
      {
        question: "Do you treat holiday rentals?",
        answer:
          "Yes. Tell us the departure and arrival times so the treatment and re-entry window can be built around the booking.",
      },
      {
        question: "Is the treatment safe for families?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the work starts.",
      },
    ],
    nearby: [
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "robina", label: "Pest control in Robina" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "palm-beach",
    suburbName: "Palm Beach",
    title: "Pest Control in Palm Beach",
    metaDescription:
      "Pest control in Palm Beach for beachside houses, units and rentals. Registered treatment for coastal pests with re-entry guidance. Call 0450 833 683.",
    intro: [
      "Being close to the surf, Palm Beach properties deal with the same pests year-round rather than in a single season. Cockroaches thrive in warm, humid conditions and travel through shared ducts in unit blocks, ants come in from garden beds and paved edges, and spiders find their way to doorways, windows and eaves in the older streets. Sand and organic material around entry points also keep activity close to the house.",
      "Coverage is planned for the property: internal treatment for what is present, an external barrier where the layout supports it, and monitoring or baiting where a single treatment will not hold. Unit buildings need the shared spaces considered rather than one apartment treated in isolation. Preparation, re-entry times and pet safety are explained before the visit, and treatment can be scheduled with an end of lease clean when a lease requires a receipt.",
    ],
    directAnswer:
      "Pest control in Palm Beach covers houses, units and rentals with internal and external treatment scoped to the property, the pest identified first and re-entry guidance given before the job.",
    localNotes: [
      {
        title: "Year-round activity",
        body: "Coastal warmth and humidity keep cockroach and ant pressure steady, which is why many properties treat periodically.",
      },
      {
        title: "Unit blocks",
        body: "Shared ducts and wall cavities are considered when coverage is planned, not just the interior of one apartment.",
      },
      {
        title: "Garden edges",
        body: "Beds, paving and sand around entry points keep ants and spiders close to the house, so external work matters.",
      },
      {
        title: "Pet and family households",
        body: "Preparation and re-entry times are explained before treatment so the day can be planned around it safely.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Palm Beach?",
        answer:
          "Yes. We treat houses, units and rentals across Palm Beach, starting with identification of what is actually present.",
      },
      {
        question: "What pests do you treat?",
        answer:
          "Common local issues include cockroaches, ants, spiders and silverfish, with rodent baiting and monitoring where required and fleas where pets have been present.",
      },
      {
        question: "Are the products safe around children?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the job starts.",
      },
      {
        question: "Can treatment be booked with a bond clean?",
        answer:
          "Yes. If your lease requires treatment at the end of the tenancy we can arrange it with the clean so the receipt is ready before your inspection.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "southport", label: "Pest control in Southport" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "coomera",
    suburbName: "Coomera",
    title: "Pest Control in Coomera",
    metaDescription:
      "Pest control in Coomera for new family homes, townhouses and offices. Registered treatment for coastal and garden pests. Call 0450 833 683.",
    intro: [
      "New estates in Coomera sit alongside creek lines, retained vegetation and open ground, so pest activity is a normal feature of the suburb rather than an occasional surprise. Ants and spiders are the most common warm-weather complaints, cockroaches appear across the housing mix, and garages and roof spaces are where rodents tend to be noticed first. Construction gaps and fresh landscaping give insects easy routes into new homes.",
      "Most treatments here are straightforward: internal coverage plus an external perimeter barrier, with baiting or monitoring where one application will not hold. Townhouses need shared surfaces accounted for, and offices near the town centre are scheduled outside trading hours. Preparation, re-entry times and pet safety are explained before the visit, and we can coordinate treatment with an end of lease clean when both are needed.",
    ],
    directAnswer:
      "Pest control in Coomera covers new family homes, townhouses, villas and offices, with treatment matched to the pest identified and preparation and re-entry guidance given before the job.",
    localNotes: [
      {
        title: "New construction",
        body: "Fresh builds and landscaping leave gaps and exposed edges that insects use, so external sealing advice is part of the visit.",
      },
      {
        title: "Creek and open ground",
        body: "Proximity to waterways and undeveloped pockets keeps ant and spider activity steady through the warmer months.",
      },
      {
        title: "Townhouses",
        body: "Shared walls and roof spaces are considered when coverage is planned so the treatment is not limited to one dwelling.",
      },
      {
        title: "Offices and retail",
        body: "Workplaces near the centre are treated outside trading hours where possible, with documentation where it is required.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Coomera?",
        answer:
          "Yes. We treat family homes, townhouses, villas and offices across Coomera, including new estates where access or parking needs arranging first.",
      },
      {
        question: "What pests are common in Coomera?",
        answer:
          "Ants and spiders are the regular warm-weather issues, with cockroaches across the housing mix and rodents around garages and roof spaces.",
      },
      {
        question: "How long does a treatment take?",
        answer:
          "Most residential treatments are completed in a single visit. The expected time, along with preparation and re-entry guidance, is confirmed with the quote.",
      },
      {
        question: "Is the treatment safe for children and pets?",
        answer:
          "Registered products are used for the treatment type, and preparation, re-entry times and precautions are explained before the work starts.",
      },
    ],
    nearby: [
      { slug: "helensvale", label: "Pest control in Helensvale" },
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "varsity-lakes",
    suburbName: "Varsity Lakes",
    title: "Pest Control in Varsity Lakes",
    metaDescription:
      "Pest control in Varsity Lakes for homes, townhouses, villas and offices around the lakes. Registered treatment with safety guidance. Call 0450 833 683.",
    intro: [
      "Varsity Lakes is built around waterways and maintained landscaping, and that combination keeps pest activity present through most of the year. Ants and spiders work through garden beds towards the house, cockroaches travel through shared ducts and wall cavities in townhouse and villa groups, and the canal-side position adds humidity that suits the same pests. Balconies and external entries pick up activity first.",
      "Coverage is planned for the property rather than a single room: internal treatment for what is present, external barrier work around the perimeter, and shared surfaces accounted for in strata-managed groups. Offices near the retail strip are scheduled outside trading hours. Preparation, re-entry times and pet safety are explained before the visit, and treatment can be booked alongside an end of lease clean when a lease calls for a current receipt.",
    ],
    directAnswer:
      "Pest control in Varsity Lakes covers houses, townhouses, villas, apartments and offices, with coverage planned around shared structures, waterways and the pest identified on site.",
    localNotes: [
      {
        title: "Waterway position",
        body: "Humidity around the canals suits cockroaches and ants, so treatment timing is planned with that in mind.",
      },
      {
        title: "Strata groups",
        body: "Shared walls, ducts and roof spaces mean coverage considers the building rather than one dwelling in isolation.",
      },
      {
        title: "Gardens and landscaping",
        body: "Maintained beds against homes are the route ants and spiders take, which external barrier work addresses.",
      },
      {
        title: "Offices and studios",
        body: "Small commercial spaces are treated outside trading hours where possible, with entry arranged at the start.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Varsity Lakes?",
        answer:
          "Yes. We treat houses, townhouses, villas, apartments and offices across Varsity Lakes, including strata-managed groups.",
      },
      {
        question: "What pests are most common here?",
        answer:
          "Ants and spiders from the garden beds, cockroaches in shared buildings, and rodents around garages and roof spaces.",
      },
      {
        question: "Do you treat shared buildings?",
        answer:
          "Yes. Where insects move through shared ducts or wall cavities, coverage is planned around the building rather than one apartment.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, property type and what you are seeing. We confirm the approach, expected time and price before the booking.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "southport", label: "Pest control in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "broadbeach", label: "Pest control in Broadbeach" },
    ],
  },
  {
    serviceSlug: "pest-control-gold-coast",
    suburbSlug: "carrara",
    suburbName: "Carrara",
    title: "Pest Control in Carrara",
    metaDescription:
      "Pest control in Carrara for older homes, townhouses and rentals near the creek line. Registered treatment with safety guidance. Call 0450 833 683.",
    intro: [
      "Carrara's established gardens and creek-side position produce steady pest pressure rather than seasonal spikes. Older homes have subfloor gaps, weepholes and service penetrations that insects use to move indoors, garden beds sit close to the building line, and roof spaces and garages are where rodents are usually found first. Humidity through the warmer months keeps activity going year-round.",
      "We identify what is present, then scope coverage accordingly — internal treatment for the pests found, external barrier work around the perimeter, and monitoring or baiting where a single treatment will not hold. Homes near the waterway often need a program rather than a one-off visit, and treatment can be combined with an end of lease clean when the lease asks for a current receipt. Preparation, re-entry times and pet safety are explained before the work begins.",
    ],
    directAnswer:
      "Pest control in Carrara covers older homes, townhouses and rentals with internal and external treatment scoped to the property and the pest identified before any product is used.",
    localNotes: [
      {
        title: "Older housing",
        body: "Subfloor gaps, weepholes and service penetrations give insects a route indoors, so external sealing and barrier work matter.",
      },
      {
        title: "Creek-side position",
        body: "Homes near the waterway see more consistent activity, which often means a program rather than a single visit.",
      },
      {
        title: "Gardens and fences",
        body: "Beds and timber against the building line are the route ants and spiders take, addressed by external treatment.",
      },
      {
        title: "Event precinct",
        body: "Timing around the stadium precinct is scheduled around the event calendar so access and parking are not an issue.",
      },
    ],
    faqs: [
      {
        question: "Do you do pest control in Carrara?",
        answer:
          "Yes. We treat older homes, townhouses and rentals across Carrara, starting with identification of what is present on the property.",
      },
      {
        question: "What pests are common in Carrara?",
        answer:
          "Ants, spiders and cockroaches are the regular issues, with rodents around garages, sheds and roof spaces near the creek line.",
      },
      {
        question: "Can you treat a rental between tenants?",
        answer:
          "Yes. Landlords and property managers can book directly, and tenants whose lease asks for treatment can have it coordinated with the end of lease clean.",
      },
      {
        question: "How often should an older home be treated?",
        answer:
          "Established homes near gardens often benefit from periodic treatment rather than waiting until activity is obvious, and we will suggest a rhythm after the first visit.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Pest control in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "varsity-lakes", label: "Cleaning services in Varsity Lakes" },
      { slug: "southport", label: "Pest control in Southport" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "nerang",
    suburbName: "Nerang",
    title: "Office Cleaning in Nerang",
    metaDescription:
      "Office cleaning in Nerang for small business suites, clinics and workshops. Scheduled before or after hours. Call 0450 833 683.",
    intro: [
      "The commercial side of Nerang is small-business scale: professional suites and consultation rooms, service premises with a front counter, and workshops or light industrial units where the office is one part of a working floor. Each has its own definition of clean, and the timing of the work matters more than in a suburban home because trading hours and deliveries set the day.",
      "Most visits run before opening or after close, with keys or alarm codes arranged when the contract starts so nobody has to stay back. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation and floors, then stays consistent week to week. Workshops and counters get tailored items added rather than forced into an office template, and the same team is kept on the site wherever possible.",
    ],
    directAnswer:
      "Office cleaning in Nerang covers professional suites, clinics, service premises and workshops, scheduled outside trading hours with the checklist built around your premises.",
    localNotes: [
      {
        title: "Small business premises",
        body: "Suites and consultation rooms are quick to service, which makes several visits a week practical where presentation matters.",
      },
      {
        title: "Workshops and counters",
        body: "Premises with a working floor get tailored tasks added to the checklist rather than a generic office routine.",
      },
      {
        title: "After-hours entry",
        body: "Keys, fobs and alarm codes are arranged at the start of the contract so cleans happen without staff staying back.",
      },
      {
        title: "Flexible frequency",
        body: "Daily, several times a week or a weekly visit can be matched to how heavily the premises are used.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Nerang?",
        answer:
          "Yes. Professional suites, clinics, service premises and workshops across Nerang are cleaned before opening or after closing, with access arranged at the start.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation, plus vacuuming of carpets and mopping of hard floors.",
      },
      {
        question: "Can you work around trading hours?",
        answer:
          "Yes. Most Nerang clients schedule the work outside trading hours, and entry arrangements such as keys or alarm codes are set up when the contract begins.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, approximate size or number of rooms, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "carrara", label: "Cleaning services in Carrara" },
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "burleigh-heads",
    suburbName: "Burleigh Heads",
    title: "Office Cleaning in Burleigh Heads",
    metaDescription:
      "Office cleaning in Burleigh Heads for suites, studios and clinics near the village. Scheduled before or after hours. Call 0450 833 683.",
    intro: [
      "Burleigh Heads' commercial spaces are mostly small and client-facing: professional suites near the village, creative studios, consultation rooms and a handful of retail premises with a back-of-house area that also needs doing. Presentation carries real weight here because clients walk through the front door, and the spaces are compact enough that every surface is visible.",
      "Visits are scheduled before opening or after close, with entry arrangements set up when the contract starts. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception and floors, then stays consistent. Coastal properties add exterior-facing glass and entry areas that pick up salt, which is added to the routine rather than left until it shows. One-off tasks such as a deeper kitchen or a pre-event reset can be scheduled alongside the regular visit.",
    ],
    directAnswer:
      "Office cleaning in Burleigh Heads covers professional suites, studios, clinics and reception areas, scheduled outside trading hours with the checklist built for your premises.",
    localNotes: [
      {
        title: "Client-facing spaces",
        body: "Reception and meeting rooms are prioritised because clients form their first impression in the first few metres.",
      },
      {
        title: "Studios and suites",
        body: "Compact spaces are efficient to service, which makes several visits a week realistic where presentation matters.",
      },
      {
        title: "Coastal glass",
        body: "Entry areas and exterior-facing glass pick up salt residue and are included in the routine rather than left to show.",
      },
      {
        title: "Flexible timing",
        body: "Entry arrangements are set up when the contract starts, so cleans happen outside trading hours without anyone staying back.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Burleigh Heads?",
        answer:
          "Yes. Professional suites, studios, clinics and reception areas across Burleigh Heads are cleaned before opening or after closing.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you clean after hours?",
        answer:
          "Yes. Most Burleigh offices are scheduled outside trading hours, and keys or alarm codes are arranged when the contract begins.",
      },
      {
        question: "Do you offer one-off cleans?",
        answer:
          "Yes. Deeper kitchen cleans, pre-event resets and end-of-year deep cleans can be booked alongside the regular schedule.",
      },
    ],
    nearby: [
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
      { slug: "broadbeach", label: "Cleaning services in Broadbeach" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "southport", label: "Office cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "palm-beach",
    suburbName: "Palm Beach",
    title: "Office Cleaning in Palm Beach",
    metaDescription:
      "Office cleaning in Palm Beach for suites, studios and small business offices. Flexible before and after hours scheduling. Call 0450 833 683.",
    intro: [
      "The commercial footprint in Palm Beach is small-business scale — professional suites, studios, consultation rooms and offices attached to local retail — but the cleaning expectations match the suburb's presentation standards. Clients and customers notice glass, entry areas and front-of-house surfaces immediately, and coastal conditions mean those areas need attention more often than inland offices would.",
      "Work runs before opening or after close, with access arranged when the contract starts. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception and floors, and stays consistent visit to visit. Because most spaces here are a handful of rooms rather than open-plan floors, several visits a week are practical for busy client-facing suites, while quieter offices do well weekly.",
    ],
    directAnswer:
      "Office cleaning in Palm Beach covers professional suites, studios and small offices, scheduled before or after hours with the checklist built around how your space is used.",
    localNotes: [
      {
        title: "Front-of-house presentation",
        body: "Glass, entry areas and reception are prioritised because customers and clients judge the business on them first.",
      },
      {
        title: "Coastal conditions",
        body: "Salt residue on glass and entry surfaces is handled in the routine rather than left to become noticeable.",
      },
      {
        title: "Small offices",
        body: "Suites and studios are quick to service, which makes several visits a week practical where daily presentation matters.",
      },
      {
        title: "Retail-adjacent offices",
        body: "Offices attached to shops get scheduled around trading hours so neither side of the business is disrupted.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Palm Beach?",
        answer:
          "Yes. Professional suites, studios and small offices across Palm Beach are cleaned before opening or after closing, with access arranged at the start.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "How often should a small office be cleaned?",
        answer:
          "Several visits a week suits busy client-facing suites, while quieter offices often do well weekly. We will recommend a rhythm after seeing the space.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, number of rooms or workstations, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "burleigh-heads", label: "Cleaning services in Burleigh Heads" },
      { slug: "broadbeach", label: "Cleaning services in Broadbeach" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "southport", label: "Office cleaning in Southport" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "helensvale",
    suburbName: "Helensvale",
    title: "Office Cleaning in Helensvale",
    metaDescription:
      "Office cleaning in Helensvale for business suites, clinics and shared workspaces. Before or after hours scheduling. Call 0450 833 683.",
    intro: [
      "Helensvale's workplaces sit around the retail, transport and business precincts: professional suites, medical and allied health rooms, shared workspaces and offices attached to local services. They are modern, busy and often client-facing, and the cleaning standard is expected to match the buildings they sit in. Break areas and kitchens carry the most daily use and set the tone for the rest of the space.",
      "Most of the work is scheduled before opening or after close so staff and clients never work around it, with keys or alarm codes arranged when the contract starts. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation and floors, then stays consistent. Health-related rooms are handled carefully with cleaning outside appointment hours, and consumables are restocked where you supply them.",
    ],
    directAnswer:
      "Office cleaning in Helensvale covers business suites, clinics, shared workspaces and reception areas, scheduled outside business hours with the checklist built for your premises.",
    localNotes: [
      {
        title: "Medical and allied health",
        body: "Rooms near the retail and transport precincts are cleaned outside appointment hours with surfaces handled consistently.",
      },
      {
        title: "Shared workspaces",
        body: "Hot desks, kitchens and shared facilities need a rhythm that keeps pace with daily use rather than a weekly wipe-down.",
      },
      {
        title: "Modern fit-outs",
        body: "Newer offices expect a consistent finish across glass, meeting rooms and breakout areas, which is where a fixed checklist helps.",
      },
      {
        title: "After-hours access",
        body: "Entry arrangements, alarm codes and keys are set up when the contract starts so cleans happen without anyone staying back.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Helensvale?",
        answer:
          "Yes. Business suites, clinics, shared workspaces and reception areas across Helensvale are cleaned before opening or after closing.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you clean outside appointment hours?",
        answer:
          "Yes. Health and consulting rooms are scheduled around appointment hours, and access is arranged when the contract begins.",
      },
      {
        question: "How do I get an office cleaning quote?",
        answer:
          "Send the address, approximate floor area or number of workrooms, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "coomera", label: "Cleaning services in Coomera" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "coomera",
    suburbName: "Coomera",
    title: "Office Cleaning in Coomera",
    metaDescription:
      "Office cleaning in Coomera for new business suites, clinics and offices in the northern estates. Flexible scheduling. Call 0450 833 683.",
    intro: [
      "Coomera's offices are new and growing with the suburb: professional suites around the town centre, clinics and consulting rooms, shared workspaces and the offices attached to retail and service businesses in the estates. Fit-outs are modern and client-facing, and the cleaning expectation matches — presentation is part of how the businesses present themselves to customers.",
      "Work is scheduled before opening or after close, with entry and alarm arrangements set up when the contract begins. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation and floors, then stays consistent week to week. As new businesses open through the year, starting a contract is straightforward: send the address, size and preferred times, and we confirm scope and price before the first clean.",
    ],
    directAnswer:
      "Office cleaning in Coomera covers new business suites, clinics, shared workspaces and offices near the town centre, scheduled outside trading hours on the frequency you choose.",
    localNotes: [
      {
        title: "New fit-outs",
        body: "Modern offices are kept to a consistent standard with glass, meeting rooms and breakout areas on a fixed checklist.",
      },
      {
        title: "Clinics and consulting rooms",
        body: "Health-related premises are cleaned around appointment hours with surfaces handled carefully and consistently.",
      },
      {
        title: "Retail-adjacent offices",
        body: "Offices connected to shops are scheduled around trading so neither side of the business is disrupted.",
      },
      {
        title: "Growing precinct",
        body: "New businesses open through the year, and booking a start date is straightforward with address, size and preferred times.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Coomera?",
        answer:
          "Yes. Business suites, clinics, shared workspaces and offices across Coomera are cleaned before opening or after closing.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you start at short notice?",
        answer:
          "Often, yes. Send the address, size and preferred start date and we will tell you straight away what is possible.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, number of rooms or workstations, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "helensvale", label: "Cleaning services in Helensvale" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "carrara",
    suburbName: "Carrara",
    title: "Office Cleaning in Carrara",
    metaDescription:
      "Office cleaning in Carrara for business suites, showrooms and service premises. Before or after hours scheduling. Call 0450 833 683.",
    intro: [
      "Carrara's commercial spaces range from professional suites and consultation rooms to showrooms, service premises and offices attached to workshops. That mix changes the checklist: front-of-house areas need presentation-grade work, while rear-of-house floors, counters and utility areas need a practical clean that keeps up with daily use. Both are scheduled outside trading hours.",
      "Entry arrangements — keys, fobs and alarm codes — are set up when the contract starts so visits happen without staff staying behind. The standard checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception and floors, with tailored items added for showrooms or workshop offices. Frequency is matched to how heavily the space is used, from daily down to weekly.",
    ],
    directAnswer:
      "Office cleaning in Carrara covers professional suites, showrooms, service premises and workshop offices, scheduled outside trading hours with a checklist built for the space.",
    localNotes: [
      {
        title: "Showrooms and front-of-house",
        body: "Customer-facing areas are cleaned to presentation standard because they are where the business is judged first.",
      },
      {
        title: "Workshop offices",
        body: "Premises with a working floor get practical tasks added — utility areas, counters and high-use surfaces.",
      },
      {
        title: "Event-day access",
        body: "Street access near the stadium precinct can be restricted on event days, so visits are scheduled around the calendar.",
      },
      {
        title: "Flexible frequency",
        body: "Daily, several times a week or a weekly visit can be matched to how heavily the premises are used.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Carrara?",
        answer:
          "Yes. Professional suites, showrooms, service premises and workshop offices across Carrara are cleaned outside trading hours.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you handle showroom floors?",
        answer:
          "Yes. Customer-facing floors and display areas are part of the routine, with heavier work scheduled separately when it is needed.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, number of rooms or workstations, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "nerang", label: "Cleaning services in Nerang" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "surfers-paradise",
    suburbName: "Surfers Paradise",
    title: "Office Cleaning in Surfers Paradise",
    metaDescription:
      "Office cleaning in Surfers Paradise for tower offices, suites and shared workspaces. After-hours scheduling with building access arranged. Call 0450 833 683.",
    intro: [
      "Office cleaning in Surfers Paradise is building work as much as cleaning work. Suites sit inside towers where after-hours entry, lift use, fob access and building management approval have to be arranged before anyone can start. Inside, the spaces are compact and client-facing: professional suites, consulting rooms, shared workspaces and reception areas that see traffic all day.",
      "The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation and floors, repeated on the frequency the space needs. Because the offices are small, several visits a week are practical where daily presentation matters. Building rules are confirmed when the contract starts, and the same team is kept on the site wherever possible so access stays straightforward for everyone involved.",
    ],
    directAnswer:
      "Office cleaning in Surfers Paradise covers tower offices, professional suites, shared workspaces and reception areas, with building access arranged first and cleans scheduled outside business hours.",
    localNotes: [
      {
        title: "Building access",
        body: "Fob returns, lift use and after-hours entry are confirmed with building management before the contract starts.",
      },
      {
        title: "Compact suites",
        body: "Smaller offices are efficient to service, which makes several visits a week practical where presentation matters.",
      },
      {
        title: "Client-facing rooms",
        body: "Reception and meeting rooms are prioritised because they are where clients form their first impression.",
      },
      {
        title: "Shared workspaces",
        body: "Hot desks, kitchens and shared facilities need a rhythm that keeps pace with daily use rather than a weekly wipe-down.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Surfers Paradise?",
        answer:
          "Yes. Tower offices, professional suites, shared workspaces and reception areas across Surfers Paradise are cleaned outside business hours, with building access arranged first.",
      },
      {
        question: "What is included in the visit?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Do you need building approval?",
        answer:
          "Usually, for lift use and after-hours entry. Send us the building name and any access requirements when you enquire and we will factor them into the contract.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the building, floor area or number of workrooms, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "broadbeach", label: "Cleaning services in Broadbeach" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "varsity-lakes", label: "Office cleaning in Varsity Lakes" },
    ],
  },
  {
    serviceSlug: "office-cleaning-gold-coast",
    suburbSlug: "broadbeach",
    suburbName: "Broadbeach",
    title: "Office Cleaning in Broadbeach",
    metaDescription:
      "Office cleaning in Broadbeach for suites, clinics and workspaces near the convention precinct. Scheduled before or after hours. Call 0450 833 683.",
    intro: [
      "Broadbeach sits next to the convention and casino precinct, so the office work here ranges from small professional suites to larger shared floors and consulting rooms that handle visitors all day. Presentation is part of the job: reception, meeting rooms and kitchen facilities are visible to clients and colleagues, and the standard is expected to hold between visits rather than only on cleaning day.",
      "Work is scheduled before opening or after close with access arranged when the contract starts. The checklist covers kitchens and break areas, bathrooms, workstations and meeting rooms, high-touch points, reception presentation and floors, then stays consistent. Coastal positions add entry glass and front-of-house surfaces that pick up salt, and short-stay or event-driven peaks around the precinct are absorbed by adjusting frequency rather than missing visits.",
    ],
    directAnswer:
      "Office cleaning in Broadbeach covers professional suites, clinics, shared workspaces and reception areas near the convention precinct, scheduled outside business hours with the checklist built for your floor.",
    localNotes: [
      {
        title: "Convention precinct",
        body: "Premises handling visitors daily are cleaned on a rhythm that keeps reception and meeting rooms presentable between visits.",
      },
      {
        title: "Shared floors",
        body: "Larger open areas are scheduled with clear zoning so workstations, kitchens and amenities are all covered each visit.",
      },
      {
        title: "Coastal entry glass",
        body: "Entry and front-of-house glass picks up salt residue and is included in the routine rather than left to show.",
      },
      {
        title: "Event peaks",
        body: "Busy periods around the precinct are handled by adjusting frequency rather than skipping visits.",
      },
    ],
    faqs: [
      {
        question: "Do you clean offices in Broadbeach?",
        answer:
          "Yes. Professional suites, clinics, shared workspaces and reception areas across Broadbeach are cleaned before opening or after closing.",
      },
      {
        question: "What is included?",
        answer:
          "Kitchen and break areas, bathrooms, workstations and meeting rooms, high-touch points, entry and reception presentation, plus vacuuming and mopping of floors.",
      },
      {
        question: "Can you increase frequency during busy periods?",
        answer:
          "Yes. Event and conference peaks are common here, and frequency can be adjusted for the period rather than committed to permanently.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send the address, floor area or number of workrooms, preferred frequency and preferred times. We confirm scope and price before the first clean.",
      },
    ],
    nearby: [
      { slug: "surfers-paradise", label: "Cleaning services in Surfers Paradise" },
      { slug: "southport", label: "Office cleaning in Southport" },
      { slug: "robina", label: "Office cleaning in Robina" },
      { slug: "palm-beach", label: "Cleaning services in Palm Beach" },
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
