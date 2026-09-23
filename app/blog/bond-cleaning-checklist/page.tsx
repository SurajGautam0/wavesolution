import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "Bond Cleaning Checklist Queensland | Complete Move-Out Guide",
  description:
    "Complete bond cleaning checklist for Queensland rental properties. Room-by-room guide covering everything inspectors check — kitchens, bathrooms, carpets, walls and more.",
  keywords: [
    "bond cleaning checklist Queensland",
    "move out cleaning checklist Gold Coast",
    "rental inspection checklist",
    "bond clean checklist",
    "end of lease cleaning checklist",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/bond-cleaning-checklist",
  },
  openGraph: {
    title: "Bond Cleaning Checklist Queensland | Complete Move-Out Guide",
    description:
      "Room-by-room bond cleaning checklist for Queensland rentals. Know exactly what inspectors look for before your final inspection.",
    url: "https://www.wavesolution.com.au/blog/bond-cleaning-checklist",
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
        { "@type": "ListItem", position: 3, name: "Bond Cleaning Checklist", item: "https://www.wavesolution.com.au/blog/bond-cleaning-checklist" },
      ],
    },
    {
      "@type": "Article",
      headline: "Bond Cleaning Checklist Queensland: Complete Move-Out Guide",
      description: "Complete bond cleaning checklist for Queensland rental properties covering every room inspectors check.",
      author: {
        "@type": "Person",
        name: "Suraj Gautam",
        jobTitle: "Operations Director & Quality Assurance Lead",
        worksFor: {
          "@type": "Organization",
          name: "Wave Solution Cleaning & Pest Control",
          url: "https://www.wavesolution.com.au",
        },
        url: "https://www.wavesolution.com.au/team",
      },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" },
      datePublished: "2025-01-15",
      dateModified: "2025-01-15",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/bond-cleaning-checklist",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in a bond clean in Queensland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bond clean in Queensland typically covers all rooms including kitchens (oven, stovetop, rangehood, cupboards), bathrooms (tiles, grout, fixtures), bedrooms, living areas, windows, floors, walls, and outdoor areas where applicable.",
          },
        },
        {
          "@type": "Question",
          name: "How long does bond cleaning take in the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bond cleaning for a typical 2-3 bedroom Gold Coast property takes 5–8 hours. Larger homes or properties in poor condition may take longer.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a professional bond cleaner or can I do it myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While you can clean yourself, professional bond cleaners know exactly what property managers look for during inspections and have the equipment and products to achieve a higher standard in less time.",
          },
        },
      ],
    },
  ],
}

const kitchenItems = [
  "Oven interior — racks, door glass, seals, and bottom tray",
  "Stovetop — burners, grates, and control knob surrounds",
  "Rangehood — filters, exterior, and underside",
  "Dishwasher — door seal, interior, and filter",
  "Microwave interior and exterior (if built-in)",
  "All cupboard interiors and drawer liners",
  "Benchtops and splashback tiles",
  "Sink and tapware — remove limescale and soap buildup",
  "Refrigerator space — clean behind and underneath if accessible",
  "Walls and light switches in kitchen area",
  "Floor — sweep, mop, and clean along skirting boards",
  "Exhaust fan if present",
]

const bathroomItems = [
  "Shower screen or curtain — remove soap scum and mould",
  "Tiles and grout — scrub entire shower recess",
  "Bath (if applicable) — remove stains and limescale",
  "Toilet — bowl, under rim, seat, lid, and cistern exterior",
  "Vanity and sink — tapware, basin, and underneath",
  "Mirror — streak-free clean",
  "Exhaust fan — dust blades and cover",
  "Cupboards and drawers — wipe inside and out",
  "Towel rails and hooks",
  "Floor — sweep, mop, and scrub around base of toilet",
  "Walls and light switches",
]

const bedroomItems = [
  "Built-in wardrobe interiors — shelves, rails, drawers",
  "Wardrobe door tracks — clean grooves",
  "Walls — spot clean marks and scuffs",
  "Ceiling — remove cobwebs and dust",
  "Light fittings and switches",
  "Window tracks and sills",
  "Skirting boards — dust and wipe",
  "Carpet — vacuum thoroughly or arrange steam clean",
  "Hard floors — sweep and mop",
]

const livingAreaItems = [
  "All walls — spot clean marks and scuffs throughout",
  "Ceilings — remove cobwebs in all rooms",
  "Light fittings, ceiling fans, and switches",
  "Window glass inside and out where accessible",
  "Window tracks, sills, and flyscreen frames",
  "Skirting boards — full property",
  "Door frames and doors — clean handles and finger marks",
  "Carpet — vacuum or steam clean if needed",
  "Hard floors — sweep and mop",
  "Air conditioning filters — remove, clean, and refit",
]

const outdoorItems = [
  "Balcony or patio — sweep, mop, and clear debris",
  "Balcony glass or railings — wipe clean",
  "Garage floor — sweep and remove oil stains if possible",
  "Bin area — clean and deodorise",
  "Garden beds — remove visible rubbish",
  "Laundry — tub, taps, lint filter on dryer",
]

export default function BondCleaningChecklistPage() {
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
            <span>Bond Cleaning Checklist</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Bond Cleaning Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              Bond Cleaning Checklist for Queensland Rental Properties
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              A complete room-by-room guide covering everything property managers and agents inspect before releasing your bond in Queensland.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated January 2025</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">Written by Suraj Gautam</span>
              <span>•</span>
              <span className="text-secondary font-bold">QLD Tenancy Reviewed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-amber-800">Important for Queensland Renters</p>
                    <p className="mt-2 text-sm leading-7 text-amber-700">
                      Under Queensland tenancy law, landlords cannot legally require you to use a professional cleaner — but the property must be returned in the same condition as when you moved in (fair wear and tear excepted). This checklist helps you meet that standard whether you clean yourself or use a professional service.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">
                      Need a professional bond clean?{" "}
                      <Link href="/bond-cleaning-gold-coast" className="text-secondary underline underline-offset-4 hover:text-primary font-bold">
                        Book your Gold Coast bond clean here →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What Inspectors Actually Check</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Property managers conducting final inspections compare the property against the entry condition report completed at the start of your tenancy. They are looking for any deterioration beyond normal wear and tear, and they go through every room systematically.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  The most common reasons bonds are disputed in Queensland are oven and kitchen cleaning, carpet condition, bathroom grout and tiles, and marks on walls. Addressing these thoroughly is the single biggest thing you can do to protect your bond.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Kitchen Checklist</h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">The kitchen is the most inspected room in any rental. Pay extra attention to the oven — it is the single most common cause of bond disputes.</p>
                <ul className="space-y-3">
                  {kitchenItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Bathroom and Ensuite Checklist</h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">Grout, soap scum, and mould are the most flagged bathroom issues. Scrubbing grout lines properly takes time — allow for it.</p>
                <ul className="space-y-3">
                  {bathroomItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Bedroom Checklist</h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">Wardrobes and carpet condition are the main focus in bedrooms. Check every shelf and drawer inside built-ins.</p>
                <ul className="space-y-3">
                  {bedroomItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Living Areas, Hallways and Whole-Property Items</h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">These items apply across the whole property and are often missed because they cross multiple rooms.</p>
                <ul className="space-y-3">
                  {livingAreaItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Outdoor, Balcony and Garage</h2>
                <ul className="space-y-3">
                  {outdoorItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Tips to Maximise Your Bond Return</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p><strong className="text-slate-800">Start early.</strong> Bond cleaning takes much longer than a regular clean. Most tenants underestimate the time involved by 2–3 hours, especially for ovens, grout, and wardrobes.</p>
                  <p><strong className="text-slate-800">Document everything.</strong> Take photos after cleaning each room with a timestamp. If there is a dispute, photo evidence of a clean property is powerful.</p>
                  <p><strong className="text-slate-800">Use the entry condition report.</strong> Go through your original entry condition report room by room and cross-check against your cleaning. If something was already damaged when you moved in and you noted it, you are not liable for it.</p>
                  <p><strong className="text-slate-800">Don't forget carpets.</strong> If carpets were professionally cleaned at the start of your tenancy, you may be required to have them professionally cleaned again at the end. Check your lease agreement.</p>
                  <p><strong className="text-slate-800">Schedule the clean close to handover.</strong> Cleaning and then having removalists through the property afterwards defeats the purpose. Time your clean for after all furniture has been removed.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Should You Hire a Professional Bond Cleaner?</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Whether to clean yourself or hire a professional comes down to three factors: time, confidence in the result, and the condition of the property. For most tenants, the time saved and the reduced risk of disputes makes professional bond cleaning a practical investment.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Professional bond cleaners know exactly what property managers look for. They bring the right products for oven grease, tile grout, carpet stains, and limescale — items that are genuinely difficult to handle with standard household products. For a Gold Coast property, expect to pay $250–$450 depending on size and condition.
                </p>
              </div>

              <AuthorBio />

            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Need a Bond Clean?</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Wave Solution provides detailed bond cleaning across the Gold Coast for tenants, landlords, and property managers.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/bond-cleaning-gold-coast">Get a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/end-of-lease-checklist" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning Checklist →</Link></li>
                  <li><Link href="/blog/move-out-cleaning-mistakes" className="text-sm font-semibold text-primary hover:text-secondary">Move-Out Mistakes That Cost You →</Link></li>
                  <li><Link href="/blog/carpet-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Guide →</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Services</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/bond-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Gold Coast →</Link></li>
                  <li><Link href="/end-of-lease-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning →</Link></li>
                  <li><Link href="/carpet-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Gold Coast →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Ready to Book Your Bond Clean?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Wave Solution provides detailed bond cleaning across the Gold Coast. Tell us your suburb, property size, and inspection date and we'll get back to you quickly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/bond-cleaning-gold-coast">Book Bond Cleaning</Link>
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
