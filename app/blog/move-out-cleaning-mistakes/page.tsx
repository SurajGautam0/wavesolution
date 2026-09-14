import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Move-Out Cleaning Mistakes That Cost You Your Bond | Gold Coast Guide",
  description:
    "Discover the most common move-out cleaning mistakes Gold Coast tenants make that lead to bond disputes — and how to avoid every one of them.",
  keywords: [
    "move out cleaning mistakes Gold Coast",
    "bond cleaning mistakes Queensland",
    "bond dispute Gold Coast",
    "rental inspection fails",
    "how to get bond back Queensland",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/move-out-cleaning-mistakes",
  },
  openGraph: {
    title: "Move-Out Cleaning Mistakes That Cost You Your Bond",
    description: "The most common mistakes Gold Coast tenants make during move-out cleaning and how to avoid losing your bond.",
    url: "https://www.wavesolution.com.au/blog/move-out-cleaning-mistakes",
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
        { "@type": "ListItem", position: 3, name: "Move-Out Cleaning Mistakes", item: "https://www.wavesolution.com.au/blog/move-out-cleaning-mistakes" },
      ],
    },
    {
      "@type": "Article",
      headline: "Move-Out Cleaning Mistakes That Cost You Your Bond",
      author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" },
      datePublished: "2025-02-01",
      dateModified: "2025-02-01",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/move-out-cleaning-mistakes",
    },
  ],
}

const mistakes = [
  {
    title: "Cleaning Around Furniture Instead of Moving It",
    description:
      "One of the most common and costly mistakes is cleaning with furniture still in the property. Dust and debris accumulate under and behind sofas, beds, and appliances over a tenancy. Property managers will move items or check underneath. Always remove all furniture before your final clean, or at minimum move each piece to clean properly underneath it.",
  },
  {
    title: "Ignoring the Oven",
    description:
      "The oven is the single most contested item in Gold Coast bond disputes. Baked-on grease, carbon buildup on racks, and a dirty door glass are not considered fair wear and tear — they must be cleaned to a standard comparable to move-in condition. Give the oven at least 1–2 hours of your cleaning time, use proper oven degreaser, and let it soak before scrubbing.",
  },
  {
    title: "Not Cleaning the Rangehood Filter",
    description:
      "Rangehood filters are almost always missed because they're out of sight. After months or years of use, they accumulate a thick layer of grease that is obvious to any inspector. Remove the filters, soak them in hot water with dish soap or a degreaser, scrub thoroughly, and refit them clean and dry.",
  },
  {
    title: "Surface-Cleaning Bathrooms Without Addressing Grout",
    description:
      "Wiping down the tiles and calling the bathroom done is a very common mistake. Grout lines in shower recesses build up mould, soap residue, and staining that surface cleaning won't touch. Use a dedicated grout brush and an appropriate cleaning product, and work along every grout line. This is time-consuming but it is exactly what inspectors look for.",
  },
  {
    title: "Leaving Marks on Walls",
    description:
      "Scuff marks from furniture, blue-tack residue, crayon, and handprints around light switches are not fair wear and tear. They must be removed or repaired. A Magic Eraser or diluted sugar soap solution handles most surface marks. For significant scuffs, light touch-up painting matched to the existing wall colour may be needed.",
  },
  {
    title: "Forgetting Window Tracks",
    description:
      "Windows are always inspected, but most tenants only clean the glass. Window tracks and sills accumulate grit, dead insects, mould from condensation, and years of debris. Use a stiff brush or old toothbrush to clean into the grooves, then wipe with a damp cloth. This takes under 15 minutes per room but makes a significant difference to how the inspection goes.",
  },
  {
    title: "Not Cleaning the Air Conditioning Filters",
    description:
      "Air conditioning is common in Gold Coast properties, and the filters attract dust, pet hair, and mould in humid conditions. Dirty filters are noticeable and are regularly cited in inspection reports. Remove all filters, wash them gently, let them dry fully, and refit before the inspection.",
  },
  {
    title: "Scheduling the Clean Before Furniture Removal",
    description:
      "Cleaning before all your furniture, boxes, and personal items are removed means you'll have to do a second clean — or leave areas uncleaned. Always complete your move-out of belongings before starting the final clean. This single change saves significant time and ensures the property is cleaned properly.",
  },
  {
    title: "Skipping the Entry Condition Report Comparison",
    description:
      "Your entry condition report is your legal document protecting you from being charged for pre-existing damage or wear. Before cleaning, go through the original report and cross-reference against the current state of the property. If something was already in poor condition at move-in and was noted, you are not liable. Many tenants miss this step and pay for repairs they shouldn't.",
  },
  {
    title: "Not Photographing After Cleaning",
    description:
      "Even if you clean everything perfectly, not having photographic evidence creates problems if a dispute arises later. After cleaning each room, take timestamped photos showing the condition. If your property manager raises issues after the inspection, photos taken immediately after your clean are a powerful counter-argument.",
  },
  {
    title: "Underestimating the Time Required",
    description:
      "A thorough end-of-lease clean for a 2-bedroom Gold Coast unit takes 6–10 hours when done properly. Larger homes or properties in below-average condition can take considerably longer. Underestimating time leads to rushed work, missed items, and failed inspections. Start earlier than you think you need to.",
  },
  {
    title: "Using the Wrong Products",
    description:
      "Household multipurpose cleaners are not designed for oven grease, tile grout, limescale, or carpet stains. Using the wrong products means you spend more time scrubbing and get worse results. Use a dedicated oven degreaser for ovens, a grout cleaner for tiles, a limescale remover for tapware and shower screens, and the appropriate product for carpet stains.",
  },
]

export default function MoveOutMistakesPage() {
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
            <span>Move-Out Mistakes</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Bond Protection Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              12 Move-Out Cleaning Mistakes That Cost Gold Coast Tenants Their Bond
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              Most bond disputes are preventable. Here are the cleaning mistakes property managers see most often in Gold Coast rental properties — and exactly how to avoid them.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span>Updated February 2025</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-base leading-8 text-slate-600">
                Every year, Gold Coast tenants lose part or all of their bond due to cleaning disputes that were entirely avoidable. Property managers conduct final inspections carefully, comparing the property against the original entry condition report. The following mistakes are the ones that come up most consistently — and the ones most tenants discover only after the inspection has already failed.
              </p>

              {mistakes.map((mistake, index) => (
                <article key={mistake.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-lg font-black tracking-tight text-primary">{mistake.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{mistake.description}</p>
                    </div>
                  </div>
                </article>
              ))}

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">The Safest Option: Professional Bond Cleaning</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  If reading through these mistakes makes your upcoming move-out feel overwhelming, professional bond cleaning is worth considering. A qualified bond cleaner will work through a property-specific checklist, use commercial-grade products for every surface type, and deliver a result that is built around passing inspection — not just looking generally clean.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  For most Gold Coast tenants, the cost of a professional bond clean ($250–$450 depending on property size) is significantly less than losing even a portion of a bond. It also removes the stress of managing the clean yourself during what is already a high-pressure period.
                </p>
                <div className="mt-6">
                  <Button asChild className="h-11 rounded-full bg-primary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-primary/90">
                    <Link href="/bond-cleaning-gold-coast">View Bond Cleaning Service →</Link>
                  </Button>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Get a Bond Clean Quote</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Let Wave Solution handle the hard work. We provide detailed bond and end of lease cleaning across the Gold Coast.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/bond-cleaning-gold-coast">Get a Quote</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist →</Link></li>
                  <li><Link href="/blog/end-of-lease-checklist" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Checklist →</Link></li>
                  <li><Link href="/blog/carpet-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Guide →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Avoid the Stress — Book a Professional Bond Clean</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Wave Solution covers the Gold Coast for bond and end of lease cleaning. Tell us your property details and we'll get back to you quickly with a quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/bond-cleaning-gold-coast">Book Bond Cleaning</Link>
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
