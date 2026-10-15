import type { Metadata } from "next"
import Link from "next/link"
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Home,
  Sun,
  Wind,
  Droplets,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "Spring Cleaning Guide for Gold Coast Homes | Wave Solution",
  description:
    "Gold Coast spring cleaning guide. Room-by-room checklist covering mould, salt air, AC filters & gutters — everything to tackle after the Queensland wet season.",
  keywords: [
    "spring cleaning Gold Coast",
    "spring cleaning guide Queensland",
    "Gold Coast home cleaning checklist",
    "house spring clean checklist",
    "deep cleaning Gold Coast",
    "spring clean tips Australia",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/spring-cleaning-guide-gold-coast",
  },
  openGraph: {
    title: "Spring Cleaning Guide for Gold Coast Homes 2025 | Wave Solution",
    description:
      "Room-by-room spring cleaning checklist written specifically for Gold Coast homes. Tackle mould, salt air, dust, and seasonal grime the right way.",
    url: "https://www.wavesolution.com.au/blog/spring-cleaning-guide-gold-coast",
    type: "article",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Spring Cleaning Guide Gold Coast",
          item: "https://www.wavesolution.com.au/blog/spring-cleaning-guide-gold-coast",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Spring Cleaning Guide for Gold Coast Homes 2025",
      description:
        "A complete room-by-room spring cleaning guide for Gold Coast homeowners and renters, including humidity, mould, and salt-air tips.",
      author: {
        "@type": "Organization",
        name: "Wave Solution Cleaning & Pest Control",
        url: "https://www.wavesolution.com.au",
      },
      publisher: {
        "@type": "Organization",
        name: "Wave Solution Cleaning Gold Coast",
        url: "https://www.wavesolution.com.au",
        logo: {
          "@type": "ImageObject",
          url: "https://www.wavesolution.com.au/logo.png",
        },
      },
      datePublished: "2025-09-01",
      dateModified: "2025-09-01",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/spring-cleaning-guide-gold-coast",
      mainEntityOfPage: "https://www.wavesolution.com.au/blog/spring-cleaning-guide-gold-coast",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is the best time to do a spring clean in Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "September to October is ideal for Gold Coast spring cleaning. The wet season is ending, temperatures are warming, and it is the perfect window before summer heat and humidity peak. Cleaning windows, AC filters, and outdoor areas in spring sets your home up for a comfortable summer.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a full spring clean take for a Gold Coast home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A thorough spring clean for a 3-bedroom Gold Coast home typically takes 8–12 hours if done properly. This includes deep cleaning appliances, washing windows inside and out, steam cleaning carpets, clearing gutters, and addressing mould in bathrooms and wardrobes.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a professional cleaner for a spring clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily — but professional cleaners bring HEPA-filtered vacuums, commercial steamers, and mould-specific treatments that are difficult to replicate at home. For coastal Gold Coast properties dealing with salt air, humidity, and mould, a professional deep clean every 6–12 months is worth considering.",
          },
        },
        {
          "@type": "Question",
          name: "What areas get the dirtiest over a Gold Coast winter and wet season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Window tracks, AC filters, bathroom grout, ceiling fans, under-furniture dust bunnies, and outdoor furniture are the areas that accumulate the most grime over winter and the wet season on the Gold Coast. Salt air deposits and mould spores are particular problems in coastal suburbs.",
          },
        },
      ],
    },
  ],
}

const kitchenSpringItems = [
  "Deep clean oven interior — racks, door glass, bottom tray, and door seals",
  "Degrease rangehood filters — soak in hot water and degreaser",
  "Wipe all cupboard interiors, drawer liners, and door faces",
  "Pull refrigerator out and vacuum coils and floor beneath",
  "Descale kettle, coffee machine, and dishwasher",
  "Sanitise sink drain and garbage disposal if fitted",
  "Clean benchtop grouting and tile splashback",
  "Wipe down all small appliances — toaster, microwave, air fryer",
  "Empty and clean pantry shelves — dispose of expired items",
  "Polish tapware and remove limescale from faucet aerators",
]

const bathroomSpringItems = [
  "Scrub all grout lines in shower recess with grout cleaner or bleach paste",
  "Remove and treat mould behind shower screen track and door seals",
  "Descale shower head — soak in white vinegar overnight",
  "Clean exhaust fan blades and cover — critical in humid Gold Coast",
  "Scrub toilet bowl, under rim, cistern, and base",
  "Re-caulk or clean silicone sealant around bath and vanity if discoloured",
  "Polish mirror streak-free and clean cabinet shelves",
  "Wash bath mat and replace if mouldy",
  "Wipe down all walls above and behind the toilet",
]

const bedroomSpringItems = [
  "Wash all bedding — mattress protector, pillows, and duvet",
  "Vacuum and flip or rotate mattress",
  "Clean built-in wardrobe shelves, rails, and drawer interiors",
  "Remove items from under bed and vacuum thoroughly",
  "Dust ceiling fan blades — they accumulate significant dust over winter",
  "Wipe window tracks and wash flyscreen frames",
  "Clean light fittings and switch plates",
  "Spot clean any scuffs or marks on walls",
  "Vacuum skirting boards and behind furniture",
]

const livingAreaSpringItems = [
  "Move and vacuum under all sofas and furniture",
  "Clean inside and under entertainment unit and TV stand",
  "Wash curtains or blinds — salt air causes significant build-up",
  "Clean inside window tracks thoroughly — this is often skipped",
  "Polish all glass windows inside and out where accessible",
  "Steam clean or deep vacuum carpets and rugs",
  "Vacuum and wipe down ceiling and wall corners for cobwebs",
  "Wipe down all skirting boards across the entire living area",
  "Clean AC filter and indoor unit vents — critical before summer",
  "Dust and wipe all light fittings and ceiling fans",
]

const outdoorSpringItems = [
  "High-pressure wash driveway, pathways, and outdoor entertaining areas",
  "Clean outdoor furniture — scrub mould or algae from legs and surfaces",
  "Clear gutters of debris before summer storm season",
  "Wash outdoor windows and sliding door tracks",
  "Scrub bins and bin area — deodorise with baking soda and vinegar rinse",
  "Sweep and hose garage floor — clear oil stains if possible",
  "Trim back any garden growth against exterior walls to prevent moisture",
  "Check and clean laundry tub, tap, and lint filter",
]

export default function SpringCleaningGuideGoldCoastPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="classic-container relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Spring Cleaning Guide</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">
              Deep Cleaning Guide — Gold Coast
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Spring Cleaning Guide for Gold Coast Homes
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              A room-by-room spring cleaning checklist written specifically for Queensland coastal homes — covering mould, salt air, humidity, and every area that gets neglected over winter.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated September 2025</span>
              <span>•</span>
              <span>11 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">By the Wave Solution team</span>
              <span>•</span>
              <span className="text-secondary font-bold">Gold Coast Local Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-10">

              {/* Why Spring Cleaning is Different on the Gold Coast */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Why Spring Cleaning on the Gold Coast Requires a Different Approach
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Gold Coast homes face a combination of environmental stressors that most cleaning guides simply do not account for. Salt air from the ocean deposits a fine film on windows, blinds, and outdoor furniture. The subtropical humidity between December and March creates ideal conditions for mould in bathrooms, wardrobes, and ceiling corners. And the rapid temperature swings in spring — cool mornings, warm afternoons — mean AC systems that have been dormant are suddenly working overtime.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  A proper Gold Coast spring clean addresses these specific problems, not just the standard dust-and-vacuum routine. This guide works through each area of the home with that coastal subtropical context in mind.
                </p>
              </div>

              {/* Timing Callout */}
              <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-6">
                <div className="flex items-start gap-3">
                  <Sun className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-sky-800">Best Time to Spring Clean on the Gold Coast</p>
                    <p className="mt-2 text-sm leading-7 text-sky-700">
                      September and October are ideal. The wet season has largely cleared, temperatures are warming but not yet intense, and you have a clear window before summer heat makes outdoor cleaning uncomfortable. Completing your spring clean in this window also means your AC filters and ceiling fans are fresh before they face peak summer demand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Wind, label: "Salt Air Deposits", value: "8–12 weeks", note: "average window coating time near coast" },
                  { icon: Droplets, label: "Mould Risk Season", value: "Nov – Mar", note: "peak humidity months in SE Queensland" },
                  { icon: Calendar, label: "Deep Clean Frequency", value: "Twice yearly", note: "spring + autumn recommended for Gold Coast" },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-center">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xl font-black text-primary">{stat.value}</p>
                      <p className="text-xs font-bold text-slate-700 mt-1">{stat.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{stat.note}</p>
                    </div>
                  )
                })}
              </div>

              {/* Where to Start */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Where to Start: The Right Order for a Gold Coast Spring Clean
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Cleaning in the wrong order wastes effort. Dust falls downward, so always start high and work down. Clean rooms before floors. Tackle wet areas before dry ones. For a Gold Coast home, this is the recommended sequence:
                </p>
                <ol className="space-y-3">
                  {[
                    { step: "1", title: "Declutter first", detail: "Before any cleaning begins, remove items from surfaces and donate, discard, or relocate anything that does not belong in that space. Cleaning around clutter is inefficient." },
                    { step: "2", title: "Ceilings, fans, and cobwebs", detail: "Start at the top of every room. Dust falls — do this before floors and furniture are clean." },
                    { step: "3", title: "Windows and tracks", detail: "Clean windows inside and out. Clear salt and dust from window tracks. Wash or beat flyscreen frames." },
                    { step: "4", title: "Bathrooms and wet areas", detail: "Treat grout, mould, and fixtures with appropriate products. Allow dwell time for descalers and mould treatments." },
                    { step: "5", title: "Kitchen deep clean", detail: "Oven, rangehood, refrigerator exterior and coils, and cupboard interiors." },
                    { step: "6", title: "Bedrooms and wardrobes", detail: "Wash bedding, vacuum mattresses, and clear wardrobe shelves." },
                    { step: "7", title: "Living areas and walls", detail: "Spot clean walls and skirtings, vacuum furniture, steam clean carpets." },
                    { step: "8", title: "Outdoor areas last", detail: "High-pressure wash, outdoor furniture, and gutters. Do this last so indoor work is not dirtied by outdoor dust." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-4 rounded-[1rem] border border-slate-100 bg-slate-50 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-xs font-black">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                        <p className="text-sm text-slate-500 leading-6 mt-0.5">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Kitchen Checklist */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-primary">Kitchen Spring Clean Checklist</h2>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  The kitchen accumulates grease, limescale, and food residue faster than any other room. The oven and rangehood are where most effort is required — do not skip them.
                </p>
                <ul className="space-y-3">
                  {kitchenSpringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bathroom Checklist */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-primary">Bathroom Spring Clean Checklist</h2>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Gold Coast bathrooms are mould battlegrounds. High humidity, limited ventilation in many older apartments, and warm temperatures create ideal mould conditions. Spring is the time to reset completely — treat grout thoroughly and replace any silicone that has gone black.
                </p>
                <ul className="space-y-3">
                  {bathroomSpringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mould Tip Box */}
              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-amber-800">Handling Mould Safely in Gold Coast Homes</p>
                    <p className="mt-2 text-sm leading-7 text-amber-700">
                      Black mould (Stachybotrys) and common bathroom mould respond differently to treatment. For surface mould on tiles and grout, a bleach-based spray with 10 minutes of dwell time is effective. For mould behind silicone sealant or inside wall cavities, professional remediation is the safer option. Always ventilate the room and wear gloves and a mask when treating mould.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">
                      Need professional mould treatment?{" "}
                      <Link href="/blog/mould-prevention-gold-coast" className="text-secondary underline underline-offset-4 hover:text-primary font-bold">
                        Read our mould prevention guide →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bedroom Checklist */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Home className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-primary">Bedroom Spring Clean Checklist</h2>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Bedrooms are where dust mites thrive, particularly in mattresses and pillows. Washing all bedding at 60°C kills dust mites effectively. Ceiling fans in Gold Coast bedrooms are run constantly and collect significant dust on the trailing edge of each blade — clean these before the blades start redistributing dust into your newly cleaned room.
                </p>
                <ul className="space-y-3">
                  {bedroomSpringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Living Areas Checklist */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">
                  Living Areas, Windows, and AC Checklist
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Salt air is the defining challenge for Gold Coast living areas. Windows, blinds, and outdoor-facing surfaces collect a salt film that attracts more dust and creates a hazy appearance. Window tracks are among the most neglected areas in any home — they collect dead insects, dirt, and salt deposit that block smooth sliding operation.
                </p>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  The AC filter is critical for Gold Coast spring cleaning. A clogged filter forces the unit to work harder, increases energy bills, and recirculates dust and mould spores through the property. Clean or replace filters before summer begins.
                </p>
                <ul className="space-y-3">
                  {livingAreaSpringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outdoor Checklist */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">
                  Outdoor, Balcony, Garage, and Gutter Checklist
                </h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Gutters are often the most overlooked item in a Gold Coast spring clean, but they are critical. Blocked gutters in the lead-up to summer storm season can cause water to back up under roof tiles or overflow into the home. Clean gutters before November.
                </p>
                <ul className="space-y-3">
                  {outdoorSpringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Essential Products Section */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  Essential Products for a Gold Coast Spring Clean
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    <strong className="text-slate-800">Oven cleaner.</strong> A dedicated alkaline oven cleaner (like Easy-Off or similar) makes the oven significantly easier to clean than attempting it with all-purpose spray. Apply, leave to dwell for 30+ minutes, then wipe.
                  </p>
                  <p>
                    <strong className="text-slate-800">White vinegar.</strong> A Gold Coast essential. Descales shower heads, removes limescale from taps, neutralises odours in bins, and is safe for most surfaces. Always rinse after use.
                  </p>
                  <p>
                    <strong className="text-slate-800">Grout cleaner or bleach paste.</strong> For bathroom and kitchen tile grout. Apply with an old toothbrush and allow dwell time before scrubbing. In humid Gold Coast bathrooms, a quarterly grout clean prevents mould from becoming structural.
                  </p>
                  <p>
                    <strong className="text-slate-800">Microfibre cloths.</strong> More effective than sponges for most surfaces, and washable. Use different colours per area to avoid cross-contamination between bathroom and kitchen.
                  </p>
                  <p>
                    <strong className="text-slate-800">Commercial degreaser.</strong> For rangehood filters and kitchen surfaces with built-up cooking grease. Standard all-purpose spray is not strong enough for annual build-up.
                  </p>
                </div>
              </div>

              {/* DIY vs Professional */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">
                  DIY Spring Cleaning vs. Booking a Professional Deep Clean
                </h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  A thorough DIY spring clean for a Gold Coast home takes most households a full weekend. The effort is worth it, but there are specific areas where professional equipment makes a real difference: steam carpet cleaning, high-pressure outdoor washing, AC servicing, and mould remediation in enclosed spaces.
                </p>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Professional deep cleaners bring commercial-grade steamers, HEPA-filtered extraction equipment, and specific chemical treatments for grout, grease, and mould. They also work faster — a job that takes a homeowner two days can typically be completed by a professional team in half the time.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  For rental properties on the Gold Coast, a professional deep clean also provides a paper trail of condition — useful if you need to demonstrate the property is being maintained to your property manager&apos;s standard during a periodic inspection.
                </p>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: "When is the best time to do a spring clean on the Gold Coast?",
                      a: "September and October are ideal — the wet season has ended, temperatures are warming, and it is a natural reset point before summer heat begins. Completing your spring clean in this window ensures your AC filters, carpets, and outdoor areas are fresh before peak summer demand.",
                    },
                    {
                      q: "How long does a full spring clean take?",
                      a: "A comprehensive spring clean for a 3-bedroom Gold Coast home takes most people 8–12 hours spread over a weekend. If you are tackling steam cleaning, oven deep cleaning, and outdoor pressure washing, allow the full two days. A professional cleaning team can typically complete the same scope in 4–6 hours.",
                    },
                    {
                      q: "What areas get dirtiest over winter on the Gold Coast?",
                      a: "Window tracks, ceiling fans, AC filters, bathroom grout and exhaust fans, outdoor furniture, and gutters are the areas that accumulate the most build-up over winter and the wet season. Salt deposits on windows and outdoor surfaces are particularly pronounced in coastal suburbs like Surfers Paradise, Broadbeach, and Palm Beach.",
                    },
                    {
                      q: "Do I need a professional cleaner for a spring clean?",
                      a: "Not necessarily — but professional cleaners bring tools and products that are difficult to replicate at home, particularly for carpet steam cleaning, high-pressure outdoor washing, and mould remediation. For a rental property, a professional clean before your routine inspection reduces dispute risk.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-bold text-slate-800 mb-2 text-sm">{faq.q}</p>
                      <p className="text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <AuthorBio />

            </div>

            {/* Sticky Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Need a Deep Clean?</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Wave Solution provides professional spring and deep cleaning across the Gold Coast — including carpet steam cleaning, mould treatment, and full interior resets.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/deep-cleaning-gold-coast">Get a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Guides</p>
                <ul className="space-y-3">
                  <li><Link href="/blog/mould-prevention-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Mould Prevention in Coastal Homes →</Link></li>
                  <li><Link href="/blog/deep-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">When and How to Do a Full Deep Clean →</Link></li>
                  <li><Link href="/blog/how-often-house-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">How Often to Clean Your Home →</Link></li>
                  <li><Link href="/blog/cleaning-tips" className="text-sm font-semibold text-primary hover:text-secondary">Cleaning Tips for Humid Gold Coast Homes →</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Services</p>
                <ul className="space-y-3">
                  <li><Link href="/deep-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Deep Cleaning Gold Coast →</Link></li>
                  <li><Link href="/house-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">House Cleaning Gold Coast →</Link></li>
                  <li><Link href="/carpet-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Gold Coast →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Ready to Book Your Spring Deep Clean?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Wave Solution handles full spring and deep cleaning across the Gold Coast. Tell us your suburb, property size, and preferred date and we'll get back to you quickly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/deep-cleaning-gold-coast">Book Deep Cleaning</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
