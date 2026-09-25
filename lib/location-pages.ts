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
  {
    slug: "nerang",
    name: "Nerang",
    heroTitle: "Cleaning Services in Nerang",
    metaTitle: "Cleaning Services Nerang | House, Office & Bond Cleaning",
    metaDescription:
      "Professional cleaning services in Nerang for homes, offices and rental properties. Wave Solution Cleaning provides house cleaning, deep cleaning, end of lease cleaning and office cleaning near Nerang and surrounding areas. Call 0450 833 683.",
    intro:
      "Reliable cleaning services for Nerang homes, offices, rental properties and local businesses.",
    nearbyReference: "Nerang Town Centre, Nerang State High School, the M1 interchange, and nearby Highland Park",
    paragraphs: [
      "Wave Solution Cleaning provides dependable cleaning services in Nerang for homeowners, tenants, offices, and commercial properties that need consistent results. Whether you need a regular house clean, a detailed deep clean before inspection, or professional office cleaning, our team delivers reliable service with clear communication from quote to completion.",
      "We regularly service homes and businesses near Nerang Town Centre, Nerang State High School, the M1 interchange, and nearby Highland Park. Our cleaners understand the area well and are familiar with the mix of family homes, townhouses, units, and commercial spaces throughout Nerang. That local knowledge helps us provide a more practical and responsive service.",
      "If you need cleaning services in Nerang, we make the process simple. Tell us your property type, how many rooms, and when you need the clean. We will provide a tailored quote and recommend the right service based on your timing and budget. Call 0450 833 683 or book online for a fast response.",
    ],
    serviceBullets: [
      "Regular house cleaning for Nerang homes and townhouses",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning and one-off detailed cleans",
      "End of lease and bond cleaning for tenants and property managers",
    ],
    faq: [
      {
        question: "Do you offer regular house cleaning in Nerang?",
        answer:
          "Yes. We provide weekly, fortnightly, and one-off house cleaning throughout Nerang and nearby suburbs.",
      },
      {
        question: "Can you help with end of lease cleaning in Nerang?",
        answer:
          "Yes. We provide detailed end of lease and bond cleaning for Nerang tenants, landlords, and property managers.",
      },
      {
        question: "Do you service offices in Nerang?",
        answer:
          "Yes. We clean offices and commercial spaces across Nerang with flexible scheduling to suit your business.",
      },
      {
        question: "How do I get a quote for cleaning in Nerang?",
        answer:
          "Call 0450 833 683 or use our online booking page. We will provide a personalised quote based on your property and service needs.",
      },
    ],
  },
  {
    slug: "burleigh-heads",
    name: "Burleigh Heads",
    heroTitle: "Cleaning Services in Burleigh Heads",
    metaTitle: "Cleaning Services Burleigh Heads | Home & Office Cleaning",
    metaDescription:
      "Trusted cleaning services in Burleigh Heads for homes, apartments and businesses. Wave Solution Cleaning provides house cleaning, deep cleaning, end of lease cleaning and commercial cleaning near James Street and the beach. Call 0450 833 683.",
    intro:
      "Professional cleaning services for Burleigh Heads homes, apartments, offices and local businesses.",
    nearbyReference: "James Street, Burleigh Heads Beach, Justin Lane, and the coastal precinct",
    paragraphs: [
      "Wave Solution Cleaning provides high-quality cleaning services in Burleigh Heads for households, property managers, and local businesses that need dependable support. From regular house cleaning and apartment maintenance to deep cleans and end of lease work, we tailor every service to the property type and the standard required.",
      "We work near James Street, Burleigh Heads Beach, Justin Lane, and the wider coastal precinct, so we understand the mix of beachfront apartments, family homes, retail spaces, and hospitality venues in the area. Our team focuses on practical results: fresh bathrooms, clean kitchens, well-maintained floors, and spaces that feel ready to enjoy or present to guests.",
      "If you are looking for cleaning services in Burleigh Heads, we offer flexible scheduling, fast quotes, and a straightforward booking process. Let us know what you need cleaned and when, and we will recommend the best service for your property and routine.",
    ],
    serviceBullets: [
      "House and apartment cleaning in Burleigh Heads",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning for kitchens, bathrooms, and high-touch areas",
      "End of lease and move-out cleaning for tenants and landlords",
    ],
    faq: [
      {
        question: "Do you clean beachfront apartments in Burleigh Heads?",
        answer:
          "Yes. We clean apartments, units, and townhouses throughout Burleigh Heads, including properties near the beach.",
      },
      {
        question: "Can you clean offices near James Street?",
        answer:
          "Yes. We provide office and commercial cleaning for businesses near James Street, the Burleigh Heads dining precinct, and surrounding areas.",
      },
      {
        question: "Do you offer one-off deep cleans in Burleigh Heads?",
        answer:
          "Yes. We offer one-off deep cleaning as well as regular weekly and fortnightly cleaning services.",
      },
      {
        question: "How do I book cleaning in Burleigh Heads?",
        answer:
          "Call 0450 833 683 or book online. We will provide a tailored quote based on your property, service type, and preferred schedule.",
      },
    ],
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    heroTitle: "Cleaning Services in Palm Beach",
    metaTitle: "Cleaning Services Palm Beach | House, Office & Rental Cleaning",
    metaDescription:
      "Reliable cleaning services in Palm Beach for homes, rentals and businesses. Wave Solution Cleaning provides house cleaning, deep cleaning, bond cleaning and commercial cleaning near the Gold Coast Highway and the beach. Call 0450 833 683.",
    intro:
      "Local cleaning services for Palm Beach homes, apartments, offices and rental properties.",
    nearbyReference: "Palm Beach, Currumbin Alley, the Gold Coast Highway corridor, and nearby Elanora",
    paragraphs: [
      "Wave Solution Cleaning delivers dependable cleaning services in Palm Beach for homeowners, tenants, and local businesses that need consistent, high-quality results. Our team handles regular house cleaning, one-off deep cleans, end of lease work, and commercial cleaning with a focus on reliability, clear communication, and attention to detail.",
      "We service properties near Palm Beach, Currumbin Alley, the Gold Coast Highway corridor, and nearby Elanora. The area features a mix of beachside apartments, family homes, and local businesses, and we tailor our cleaning approach to suit the specific needs of each property type. That local experience helps us deliver a more practical and responsive service.",
      "If you need cleaning services in Palm Beach, we offer fast quotes, flexible scheduling, and a straightforward booking process. Tell us what you need, where the property is, and when you want the clean. We will recommend the best option and provide a clear, tailored quote.",
    ],
    serviceBullets: [
      "House and apartment cleaning for Palm Beach residents",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning and detailed property resets",
      "Bond and end of lease cleaning for rental handovers",
    ],
    faq: [
      {
        question: "Do you clean apartments near the beach in Palm Beach?",
        answer:
          "Yes. We clean beachside apartments, units, townhouses, and family homes throughout Palm Beach.",
      },
      {
        question: "Can you help with end of lease cleaning in Palm Beach?",
        answer:
          "Yes. We provide detailed end of lease and bond cleaning for Palm Beach tenants, landlords, and property managers.",
      },
      {
        question: "Do you clean offices and commercial spaces in Palm Beach?",
        answer:
          "Yes. We offer office and commercial cleaning with flexible scheduling for businesses throughout the area.",
      },
      {
        question: "How do I get a cleaning quote for Palm Beach?",
        answer:
          "Call 0450 833 683 or use the booking page. We will respond with a tailored quote based on your property and service needs.",
      },
    ],
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    heroTitle: "Cleaning Services in Helensvale",
    metaTitle: "Cleaning Services Helensvale | Home, Office & Bond Cleaning",
    metaDescription:
      "Trusted cleaning services in Helensvale for homes, offices and rental properties. Wave Solution Cleaning provides house cleaning, deep cleaning, end of lease cleaning and commercial cleaning near Westfield Helensvale. Call 0450 833 683.",
    intro:
      "Professional cleaning services for Helensvale homes, offices, and local businesses.",
    nearbyReference: "Westfield Helensvale, Helensvale Plaza, the M1 corridor, and nearby Coomera",
    paragraphs: [
      "Wave Solution Cleaning provides reliable cleaning services in Helensvale for homeowners, tenants, offices, and businesses that need dependable support. Whether you require a regular house clean, a one-off deep clean, or consistent office cleaning, our team delivers quality results with flexible scheduling and clear communication.",
      "We regularly service homes and businesses near Westfield Helensvale, Helensvale Plaza, the M1 corridor, and nearby Coomera. The area includes a wide range of family homes, townhouses, commercial offices, and retail spaces, and we tailor our cleaning plans to suit each property type and client requirement.",
      "If you are looking for cleaning services in Helensvale, we make the process simple. Tell us your suburb, property type, and preferred schedule. We will provide a clear quote and help you choose the right service. Call 0450 833 683 or book online for a fast, local response.",
    ],
    serviceBullets: [
      "House cleaning for Helensvale homes and townhouses",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning for detailed property maintenance",
      "End of lease and bond cleaning for rental handovers",
    ],
    faq: [
      {
        question: "Do you clean homes in Helensvale?",
        answer:
          "Yes. We clean houses, townhouses, apartments, and units throughout Helensvale with one-off and recurring options.",
      },
      {
        question: "Can you clean offices near Westfield Helensvale?",
        answer:
          "Yes. We provide office and commercial cleaning for businesses near Westfield Helensvale, Helensvale Plaza, and surrounding areas.",
      },
      {
        question: "Do you offer end of lease cleaning in Helensvale?",
        answer:
          "Yes. We provide detailed end of lease and bond cleaning for Helensvale tenants, landlords, and property managers.",
      },
      {
        question: "How do I get a quote for cleaning in Helensvale?",
        answer:
          "Call 0450 833 683 or use the booking page. We will provide a personalised quote based on your property and service requirements.",
      },
    ],
  },
  {
    slug: "coomera",
    name: "Coomera",
    heroTitle: "Cleaning Services in Coomera",
    metaTitle: "Cleaning Services Coomera | House, Office & Rental Cleaning",
    metaDescription:
      "Professional cleaning services in Coomera for homes, offices and commercial spaces. Wave Solution Cleaning provides house cleaning, deep cleaning, end of lease cleaning and office cleaning near Coomera Town Centre. Call 0450 833 683.",
    intro:
      "Local cleaning services for Coomera homes, businesses, offices and new-build properties.",
    nearbyReference: "Coomera Town Centre, Westfield Coomera, the northern Gold Coast growth corridor, and nearby Pimpama",
    paragraphs: [
      "Wave Solution Cleaning delivers reliable cleaning services in Coomera for homeowners, tenants, businesses, and new-build properties that need a thorough clean. The northern Gold Coast is growing fast, and our team provides practical support for families, property managers, and businesses that want dependable cleaning without the hassle of managing multiple providers.",
      "We service homes and businesses near Coomera Town Centre, Westfield Coomera, and the northern Gold Coast growth corridor, including nearby Pimpama. Whether you are moving into a new-build home, preparing a rental for handover, or need regular house or office cleaning, we tailor our service to the property type, condition, and timing.",
      "If you need cleaning services in Coomera, we offer fast quotes, flexible scheduling, and a straightforward booking process. Tell us what you need cleaned, where the property is, and when you would like the service. We will recommend the best option and provide a clear, tailored quote.",
    ],
    serviceBullets: [
      "House cleaning for Coomera homes, new builds and townhouses",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning for properties that need extra detail",
      "End of lease and move-out cleaning for rental handovers",
    ],
    faq: [
      {
        question: "Do you clean new-build homes in Coomera?",
        answer:
          "Yes. We provide post-construction and builders cleaning as well as move-in cleaning for new-build homes throughout Coomera.",
      },
      {
        question: "Can you clean offices near Westfield Coomera?",
        answer:
          "Yes. We clean offices, commercial spaces, and retail sites near Westfield Coomera and the surrounding business areas.",
      },
      {
        question: "Do you offer end of lease cleaning in Coomera?",
        answer:
          "Yes. We provide detailed end of lease and bond cleaning for Coomera tenants, landlords, and property managers.",
      },
      {
        question: "How do I get a cleaning quote for Coomera?",
        answer:
          "Call 0450 833 683 or use the online booking page. We will provide a tailored quote based on your property, service type, and preferred schedule.",
      },
    ],
  },
  {
    slug: "varsity-lakes",
    name: "Varsity Lakes",
    heroTitle: "Cleaning Services in Varsity Lakes",
    metaTitle: "Cleaning Services Varsity Lakes | House & Office Cleaning",
    metaDescription:
      "Reliable cleaning services in Varsity Lakes for homes, apartments and businesses. Wave Solution Cleaning provides house cleaning, deep cleaning, end of lease cleaning and commercial cleaning near Varsity Lakes and Robina. Call 0450 833 683.",
    intro:
      "Trusted cleaning services for Varsity Lakes homes, apartments, offices and local businesses.",
    nearbyReference: "Varsity Lakes Town Centre, Lake Varsity, the M1 connection, and nearby Robina",
    paragraphs: [
      "Wave Solution Cleaning provides dependable cleaning services in Varsity Lakes for homeowners, tenants, and local businesses that need consistent, quality results. From regular house cleaning and apartment maintenance to deep cleans and end of lease work, we tailor every service to the property type and the standard required.",
      "We work near Varsity Lakes Town Centre, Lake Varsity, the M1 connection, and nearby Robina, so we are familiar with the mix of family homes, townhouses, apartments, and local businesses throughout the area. Our team focuses on practical, reliable cleaning that keeps your home or workplace fresh, presentable, and easy to maintain.",
      "If you need cleaning services in Varsity Lakes, we offer fast quotes and flexible scheduling. Tell us your property type, how many rooms, and when you need the service. We will recommend the right cleaning plan and provide a clear, tailored quote. Call 0450 833 683 or book online for a quick response.",
    ],
    serviceBullets: [
      "House and apartment cleaning for Varsity Lakes residents",
      "Office and commercial cleaning for local businesses",
      "Deep cleaning and detailed property maintenance",
      "End of lease and bond cleaning for rental handovers",
    ],
    faq: [
      {
        question: "Do you clean homes and apartments in Varsity Lakes?",
        answer:
          "Yes. We clean houses, townhouses, and apartments throughout Varsity Lakes with one-off and recurring options available.",
      },
      {
        question: "Can you clean offices in Varsity Lakes?",
        answer:
          "Yes. We provide office and commercial cleaning for businesses in Varsity Lakes and the surrounding area.",
      },
      {
        question: "Do you offer end of lease cleaning in Varsity Lakes?",
        answer:
          "Yes. We provide detailed end of lease and bond cleaning for tenants, landlords, and property managers in Varsity Lakes.",
      },
      {
        question: "How do I get a cleaning quote for Varsity Lakes?",
        answer:
          "Call 0450 833 683 or use the booking page. We will respond with a tailored quote based on your property and service needs.",
      },
    ],
  },
  {
    slug: "carrara",
    name: "Carrara",
    heroTitle: "Cleaning Services in Carrara",
    metaTitle: "Cleaning Services Carrara | House, Office & Bond Cleaning",
    metaDescription:
      "Professional cleaning services in Carrara for homes, rental properties, offices and businesses. Wave Solution Cleaning provides house cleaning, bond cleaning, deep cleaning and end of lease cleaning near Carrara Markets and surrounding areas. Call 0450 833 683.",
    intro:
      "Trusted cleaning services for Carrara homes, rental properties, offices, and local businesses.",
    nearbyReference: "Carrara Markets, Carrara Indoor Sports Centre, the Nerang River corridor, and nearby Merrimac",
    paragraphs: [
      "Wave Solution Cleaning provides reliable, professional cleaning services in Carrara for homeowners, tenants, property managers, and local businesses. Whether you need a regular house clean, an inspection-ready bond clean, or a once-off deep clean, our team delivers consistent results tailored to the property type and your preferred schedule.",
      "Carrara is a mixed-use suburb with a blend of residential homes, newer townhouses, sporting facilities, and light commercial properties. We service homes and businesses near Carrara Markets, Carrara Indoor Sports Centre, the Nerang River corridor, and nearby Merrimac. Our cleaners understand the practical demands of maintaining properties in this part of the Gold Coast, from family homes on quiet streets to rental units needing prompt turnarounds.",
      "If you are searching for cleaning services in Carrara, we make it easy. Tell us your property type, the number of rooms, and your preferred date. We will provide a tailored quote and recommend the right service — whether that is a one-off deep clean, a recurring home maintenance visit, or a comprehensive bond clean ahead of your final inspection. Call 0450 833 683 or book online for a fast, friendly response.",
    ],
    serviceBullets: [
      "House and apartment cleaning for Carrara residents",
      "Bond cleaning and end of lease cleaning for tenants and landlords",
      "Office and commercial cleaning for Carrara businesses",
      "Deep cleaning, move-in cleaning, and carpet cleaning add-ons",
    ],
    faq: [
      {
        question: "Do you offer bond cleaning in Carrara?",
        answer:
          "Yes. We provide thorough bond and end of lease cleaning for Carrara tenants, landlords, and property managers, designed to meet Queensland rental inspection standards.",
      },
      {
        question: "Can you clean homes and apartments in Carrara?",
        answer:
          "Yes. We clean houses, townhouses, and apartments throughout Carrara with weekly, fortnightly, and one-off cleaning options available.",
      },
      {
        question: "Do you provide office cleaning in Carrara?",
        answer:
          "Yes. We offer flexible office and commercial cleaning for Carrara businesses with scheduling designed around your operational hours.",
      },
      {
        question: "How do I get a cleaning quote for Carrara?",
        answer:
          "Call 0450 833 683 or use the online booking form. We will provide a tailored, no-obligation quote based on your property size, service type, and preferred timing.",
      },
    ],
  },
]

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug)
}
