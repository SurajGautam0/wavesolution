export type LocationPage = {
  slug: string
  name: string
  heroTitle: string
  metaTitle: string
  metaDescription: string
  intro: string
  nearbyReference: string
  paragraphs: string[]
  serviceBullets: string[]
  faq: Array<{
    question: string
    answer: string
  }>
}

export const locationPages: LocationPage[] = [
  {
    slug: "robina",
    name: "Robina",
    heroTitle: "Cleaning Services in Robina",
    metaTitle: "Cleaning Services Robina | House & Office Cleaning",
    metaDescription:
      "Need reliable cleaning services in Robina? Wave Solution Cleaning provides home cleaning, office cleaning, deep cleaning and end of lease cleaning near Robina Town Centre. Call 0450 833 683.",
    intro:
      "Professional cleaning services for Robina homes, offices, rentals, and commercial spaces.",
    nearbyReference: "Robina Town Centre, Cbus Super Stadium, Easy T Centre, and nearby Varsity Lakes",
    paragraphs: [
      "Wave Solution Cleaning helps busy households and businesses in Robina keep their spaces clean, healthy, and presentation-ready. Whether you need a regular house clean, a detailed deep clean before guests arrive, or consistent office cleaning, our team provides reliable service with flexible scheduling across Robina and surrounding suburbs.",
      "We regularly work in and around Robina Town Centre, Cbus Super Stadium, Easy T Centre, and nearby Varsity Lakes, so we understand the pace of the area and the importance of showing up on time. Our cleaners focus on practical results: cleaner kitchens, fresher bathrooms, dust-free surfaces, polished floors, and a home or workplace that feels ready to use straight away.",
      "If you are searching for cleaning services in Robina, you want a local team that communicates clearly and gets the details right. We offer one-off cleaning, regular weekly or fortnightly visits, end of lease support, and tailored cleaning plans for homes and businesses. Call us for a tailored quote and we will recommend the right service based on your property, timing, and budget.",
    ],
    serviceBullets: [
      "Home cleaning for apartments, townhouses, and family homes",
      "Office and commercial cleaning for Robina businesses",
      "Deep cleaning and move-in or move-out cleaning",
      "Detailed bond and move-out cleaning support when needed",
    ],
    faq: [
      {
        question: "Do you offer regular home cleaning in Robina?",
        answer:
          "Yes. We provide weekly, fortnightly, and one-off home cleaning services throughout Robina and nearby suburbs.",
      },
      {
        question: "Can I book an office clean near Robina Town Centre?",
        answer:
          "Yes. We clean offices, shared workspaces, retail sites, and other commercial spaces across Robina.",
      },
      {
        question: "How do I get a Robina cleaning quote?",
        answer:
          "Call 0450 833 683 or book online and we will provide a personalised quote based on your property and service needs.",
      },
    ],
  },
  {
    slug: "southport",
    name: "Southport",
    heroTitle: "Cleaning Services in Southport",
    metaTitle: "Cleaning Services Southport | Home, Office & Bond Cleaning",
    metaDescription:
      "Looking for cleaning services in Southport? Wave Solution Cleaning provides house cleaning, office cleaning, deep cleaning and end of lease cleaning near Southport CBD and Broadwater. Call 0450 833 683.",
    intro:
      "Trusted cleaning services for Southport homes, rental properties, offices, and commercial buildings.",
    nearbyReference: "Southport CBD, Australia Fair, the Broadwater, and nearby Main Beach",
    paragraphs: [
      "Wave Solution Cleaning provides reliable cleaning services in Southport for homeowners, tenants, landlords, offices, and commercial sites that need consistently high standards. From routine house cleaning to end of lease work and one-off deep cleans, we tailor every visit to the property and the level of detail required.",
      "Because we work near Southport CBD, Australia Fair, the Broadwater, and nearby Main Beach, we understand the mix of apartments, offices, and busy rental properties in the area. Our team is used to handling everything from compact units that need regular maintenance to larger homes and workplaces that require a more detailed cleaning plan.",
      "If you need cleaning services in Southport, we make the process straightforward. Tell us what you need cleaned, when you need it, and whether the job is a recurring service or a once-off booking. We will help you choose the right option and schedule a service that fits around your routine.",
    ],
    serviceBullets: [
      "Regular home cleaning and apartment cleaning",
      "Office cleaning for Southport businesses and clinics",
      "End of lease cleaning for tenants and property managers",
      "Deep cleaning and add-on services for kitchens, bathrooms, and high-touch areas",
    ],
    faq: [
      {
        question: "Do you clean apartments in Southport?",
        answer:
          "Yes. We regularly clean Southport apartments, units, and townhouses, including recurring and one-off visits.",
      },
      {
        question: "Can you help with end of lease cleaning in Southport?",
        answer:
          "Yes. We provide detailed end of lease cleaning for Southport tenants, landlords, and property managers.",
      },
      {
        question: "Do you service Southport offices?",
        answer:
          "Yes. We clean offices and commercial spaces across Southport with flexible scheduling options.",
      },
    ],
  },
  {
    slug: "surfers-paradise",
    name: "Surfers Paradise",
    heroTitle: "Cleaning Services in Surfers Paradise",
    metaTitle: "Cleaning Services Surfers Paradise | Holiday Let & Home Cleaning",
    metaDescription:
      "Need cleaning services in Surfers Paradise? Wave Solution Cleaning supports homes, apartments, holiday lets, offices and deep cleans near Cavill Avenue and the beachfront. Call 0450 833 683.",
    intro:
      "Flexible cleaning services for Surfers Paradise apartments, homes, offices, and short-stay properties.",
    nearbyReference: "Cavill Avenue, Surfers Paradise Boulevard, Chevron Island, and the beachfront precinct",
    paragraphs: [
      "Wave Solution Cleaning provides practical, high-quality cleaning services in Surfers Paradise for locals, property managers, and business owners who need reliable support in a fast-moving area. We clean apartments, homes, offices, holiday lets, and rental properties with a focus on consistency, presentation, and easy communication.",
      "Surfers Paradise properties often need quick turnarounds, careful attention to bathrooms and kitchens, and a strong eye for presentation. Our team works around Cavill Avenue, Surfers Paradise Boulevard, Chevron Island, and the beachfront precinct, so we understand the importance of delivering a clean that feels fresh, polished, and guest-ready.",
      "If you are looking for cleaning services in Surfers Paradise, we can help with regular housekeeping, deep cleaning, move-out cleaning, and tailored commercial support. Let us know your property type and preferred schedule, and we will put together a service plan that works for your building, guests, or day-to-day operations.",
    ],
    serviceBullets: [
      "Apartment and house cleaning in Surfers Paradise",
      "Holiday-let and short-stay turnaround cleaning",
      "Office, retail, and commercial cleaning",
      "Deep cleaning and move-out cleaning when extra detail is needed",
    ],
    faq: [
      {
        question: "Do you clean apartments and holiday lets in Surfers Paradise?",
        answer:
          "Yes. We clean owner-occupied apartments, rental units, and short-stay properties throughout Surfers Paradise.",
      },
      {
        question: "Can I book recurring cleaning in Surfers Paradise?",
        answer:
          "Yes. We offer recurring weekly and fortnightly cleaning as well as one-off services.",
      },
      {
        question: "How quickly can I get a Surfers Paradise quote?",
        answer:
          "Call us on 0450 833 683 or use the booking page and we will respond with a tailored quote as quickly as possible.",
      },
    ],
  },
  {
    slug: "broadbeach",
    name: "Broadbeach",
    heroTitle: "Cleaning Services in Broadbeach",
    metaTitle: "Cleaning Services Broadbeach | Local House & Office Cleaners",
    metaDescription:
      "Book trusted cleaning services in Broadbeach with Wave Solution Cleaning. We provide home cleaning, office cleaning, deep cleaning and rental cleaning near Pacific Fair and Broadbeach Waters. Call 0450 833 683.",
    intro:
      "Local cleaning services for Broadbeach homes, businesses, apartments, and rental properties.",
    nearbyReference: "Pacific Fair, Broadbeach Waters, The Star, and the wider coastal precinct",
    paragraphs: [
      "Wave Solution Cleaning delivers dependable cleaning services in Broadbeach for busy households, local businesses, and rental properties that need a professional finish. From routine residential visits to office cleaning and once-off deep cleaning, we tailor each job to the space and the result you need.",
      "We service homes and workplaces near Pacific Fair, Broadbeach Waters, The Star, and the surrounding coastal precinct, which means we are familiar with everything from compact apartments to family homes and commercial spaces with regular foot traffic. Our goal is simple: show up when we say we will and leave every space visibly cleaner, fresher, and easier to maintain.",
      "If you are comparing cleaning services in Broadbeach, choose a local team that understands quality, responsiveness, and property presentation. We can help with recurring cleaning, pre-inspection cleans, end of lease jobs, and tailored support for offices and rental properties throughout the area.",
    ],
    serviceBullets: [
      "Residential cleaning for Broadbeach apartments and homes",
      "Commercial and office cleaning for local businesses",
      "Deep cleaning for kitchens, bathrooms, and high-use spaces",
      "Rental, inspection, and move-out cleaning support",
    ],
    faq: [
      {
        question: "Do you clean apartments in Broadbeach?",
        answer:
          "Yes. We clean Broadbeach apartments, townhouses, and homes with one-off and recurring options available.",
      },
      {
        question: "Can you clean offices and commercial spaces in Broadbeach?",
        answer:
          "Yes. We provide office and commercial cleaning tailored to your schedule and property type.",
      },
      {
        question: "Do you service nearby Broadbeach Waters as well?",
        answer:
          "Yes. We cover Broadbeach, Broadbeach Waters, and surrounding Gold Coast suburbs.",
      },
    ],
  },
]

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug)
}
