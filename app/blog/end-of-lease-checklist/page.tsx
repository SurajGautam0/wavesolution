import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "End of Lease Cleaning Checklist Gold Coast | Move-Out Guide 2025",
  description:
    "End of lease cleaning checklist for Gold Coast renters. A complete room-by-room guide to help you prepare your rental property for final inspection and get your bond back.",
  keywords: [
    "end of lease cleaning checklist Gold Coast",
    "move out checklist Queensland",
    "rental exit cleaning checklist",
    "vacate cleaning checklist",
    "bond back cleaning guide",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/end-of-lease-checklist",
  },
  openGraph: {
    title: "End of Lease Cleaning Checklist Gold Coast | Move-Out Guide 2025",
    description: "Complete move-out cleaning checklist for Gold Coast rentals. Know exactly what to clean before handing back the keys.",
    url: "https://www.wavesolution.com.au/blog/end-of-lease-checklist",
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
        { "@type": "ListItem", position: 3, name: "End of Lease Checklist", item: "https://www.wavesolution.com.au/blog/end-of-lease-checklist" },
      ],
    },
    {
      "@type": "Article",
      headline: "End of Lease Cleaning Checklist Gold Coast",
      author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" },
      datePublished: "2025-01-20",
      dateModified: "2025-01-20",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/end-of-lease-checklist",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What must I clean when moving out of a rental in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You must return the property in the same condition as when you moved in, allowing for fair wear and tear. This includes thorough cleaning of all kitchens, bathrooms, bedrooms, living areas, floors, windows, and any outdoor spaces included in your tenancy.",
          },
        },
        {
          "@type": "Question",
          name: "How much does end of lease cleaning cost in the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "End of lease cleaning in the Gold Coast typically starts from $250 for a small apartment and ranges up to $600+ for larger homes, depending on the property size and condition.",
          },
        },
        {
          "@type": "Question",
          name: "When should I book my end of lease clean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Book your end of lease clean as soon as you know your vacate date. Ideally, schedule it the day before or day of your final inspection, after all furniture has been removed.",
          },
        },
      ],
    },
  ],
}

const checklistSections = [
  {
    title: "Kitchen",
    items: [
      "Oven — clean interior, racks, door glass, and seals thoroughly",
      "Stovetop — remove all grates, clean burners and surface",
      "Rangehood — degrease filters and wipe exterior",
      "All cupboards and drawers — wipe inside and out including handles",
      "Benchtops — clean and remove all stains",
      "Splashback tiles — degrease and wipe",
      "Sink and tapware — remove limescale and polish",
      "Dishwasher — clean filter, interior, and door seal",
      "Walls and light switches in kitchen",
      "Floor — swept, mopped, and skirting boards wiped",
    ],
  },
  {
    title: "Bathrooms and Laundry",
    items: [
      "Shower — remove soap scum from screen, tiles, and floor",
      "Grout lines — scrub throughout shower recess",
      "Bath — clean and remove all stains and limescale",
      "Toilet — bowl, under rim, cistern, and base",
      "Vanity and mirror — clean and streak-free",
      "Tapware — remove limescale and polish",
      "Exhaust fan — clean blades and cover",
      "Cupboards and shelves — inside and out",
      "Laundry tub — clean and remove stains",
      "Washing machine area — wipe down accessible surfaces",
      "Dryer lint filter — clean",
      "Floor and skirting boards",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Built-in wardrobes — all shelves, rails, and drawer interiors",
      "Wardrobe tracks — clean grooves",
      "Walls — remove all marks and scuffs",
      "Ceiling — cobwebs removed",
      "Light fittings and switches",
      "Windows — clean glass inside and tracks",
      "Skirting boards",
      "Carpet — vacuum or arrange steam clean as required",
      "Hard floors — swept and mopped",
    ],
  },
  {
    title: "Living Areas and Hallways",
    items: [
      "All walls — remove marks and scuffs throughout",
      "Ceiling fans — wipe blades",
      "Light fittings — remove insects and dust",
      "Light switches and power points — wipe",
      "Windows — glass, tracks, sills, and flyscreens",
      "Skirting boards — all rooms",
      "Door frames and doors — clean marks and handles",
      "Air conditioning filters — remove, wash, and refit",
      "Carpet — vacuum thoroughly",
      "Hard floors — swept and mopped",
    ],
  },
  {
    title: "Outdoor and Garage",
    items: [
      "Balcony or patio — sweep and mop",
      "Balcony glass and railings — wipe clean",
      "Garage floor — sweep and spot clean oil stains",
      "Outdoor bins — clean and deodorise",
      "Garden — remove rubbish and tidy up obvious debris",
      "Driveway — sweep",
    ],
  },
]

export default function EndOfLeaseChecklistPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>End of Lease Checklist</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Move-Out Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              End of Lease Cleaning Checklist for Gold Coast Rentals
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              A practical room-by-room checklist for Gold Coast tenants preparing their rental property for final inspection and handover.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span>Updated January 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How to Use This Checklist</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Print or save this checklist and work through it systematically after all your furniture is removed. Cleaning a furnished or part-furnished property is much harder and produces worse results. The order matters too — always clean top to bottom (ceilings, walls, then floors) and room by room so you don't re-contaminate areas you've already cleaned.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Compare each item against your original entry condition report. If something was already in poor condition when you moved in and you noted it at the time, you are not responsible for repairing or replacing it now. Photograph everything after cleaning with a timestamp before handing back the keys.
                </p>
              </div>

              {checklistSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-black tracking-tight text-primary mb-5">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Common Mistakes That Cost Gold Coast Tenants Their Bond</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p><strong className="text-slate-800">Skipping the oven.</strong> The oven is the single most disputed item during bond inspections. A build-up of baked-on grease is not considered fair wear and tear. It must be cleaned to the standard it was in when you moved in.</p>
                  <p><strong className="text-slate-800">Forgetting the rangehood filter.</strong> Grease-clogged rangehood filters are frequently missed. Remove them, soak in hot soapy water, and scrub before refitting.</p>
                  <p><strong className="text-slate-800">Not cleaning window tracks.</strong> Window tracks accumulate grit and debris over a tenancy. Use a toothbrush or narrow brush to clean into the grooves before wiping.</p>
                  <p><strong className="text-slate-800">Leaving marks on walls.</strong> Blue-tack marks, scuffs from furniture, and small handprints are not fair wear and tear. Spot-clean or touch up as needed.</p>
                  <p><strong className="text-slate-800">Not arranging carpet cleaning.</strong> If carpets were steam-cleaned before you moved in, check your lease about requirements at the end. Many leases require you to have carpets professionally cleaned at vacate.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">DIY vs Professional End of Lease Cleaning</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  If your rental is small and in good condition, cleaning yourself is feasible — but be realistic about time. A thorough end-of-lease clean for a 2-bedroom Gold Coast unit typically takes 6–10 hours when done properly.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Professional end of lease cleaners know exactly what property managers look for and have the commercial-grade products and equipment to achieve results that are genuinely hard to replicate with supermarket products. For most tenants, the combination of time saved and reduced risk of disputes makes the investment worthwhile — especially for larger properties, ovens in poor condition, or heavily used bathrooms.
                </p>
              </div>

            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Your End of Lease Clean</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Wave Solution handles end of lease cleaning across the Gold Coast. Tell us your property, suburb, and inspection date.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/end-of-lease-cleaning-gold-coast">Get a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist →</Link></li>
                  <li><Link href="/blog/move-out-cleaning-mistakes" className="text-sm font-semibold text-primary hover:text-secondary">Move-Out Mistakes That Cost You →</Link></li>
                  <li><Link href="/blog/carpet-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Guide →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Need Help With Your End of Lease Clean?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Wave Solution provides detailed end of lease cleaning across the Gold Coast. Tell us your property type, suburb, and vacate date.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/end-of-lease-cleaning-gold-coast">Book End of Lease Clean</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
