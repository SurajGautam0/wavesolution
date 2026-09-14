import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "After Builders Cleaning Guide: What to Expect After Renovation | Gold Coast",
  description: "Everything you need to know about after builders cleaning for Gold Coast renovations, fit-outs, and new builds. When to book, what's included, and how long it takes.",
  keywords: ["after builders cleaning Gold Coast", "post renovation cleaning", "builders clean Queensland", "construction cleaning Gold Coast", "renovation cleaning guide"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/after-builders-cleaning-guide" },
  openGraph: { title: "After Builders Cleaning Guide: What to Expect After Renovation", description: "Your complete guide to after builders cleaning for Gold Coast renovations and fit-outs.", url: "https://www.wavesolution.com.au/blog/after-builders-cleaning-guide" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "After Builders Cleaning Guide", item: "https://www.wavesolution.com.au/blog/after-builders-cleaning-guide" },
    ]},
    { "@type": "Article", headline: "After Builders Cleaning Guide: What to Expect After Renovation", author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-04-01", dateModified: "2025-04-01", image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg", url: "https://www.wavesolution.com.au/blog/after-builders-cleaning-guide" },
  ],
}

export default function AfterBuildersCleaningGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>After Builders Cleaning Guide</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Post-Renovation Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">After Builders Cleaning: What to Expect After Renovation in the Gold Coast</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Renovation dust gets everywhere. Here's what after builders cleaning covers, when to book it, and what makes it different from a standard clean.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated April 2025</span><span>•</span><span>7 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Why After Builders Cleaning Is Different</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">A renovation might look finished when the last tradie walks out, but the space is rarely ready to live or work in. Construction dust is extremely fine and settles on every horizontal surface — inside cupboards, on windowsills, inside air conditioning vents, along skirting boards, and in corners that look clean from a distance. It also carries concrete particles, silica, and other materials that need proper removal.</p>
                <p className="text-base leading-8 text-slate-600">After builders cleaning addresses this systematically. It goes room by room through every surface, removing dust, smears, adhesive residue, stickers from fittings, grout haze from tiles, and all the leftover evidence of construction work before the space can be genuinely occupied or presented.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">What's Included in After Builders Cleaning</h2>
                <ul className="space-y-3">
                  {[
                    "Remove all fine construction dust from all horizontal and vertical surfaces",
                    "Clean windows — remove stickers, paint splatter, and construction residue",
                    "Wipe down all new cabinetry, shelving, and fittings inside and out",
                    "Clean tiles — remove grout haze and adhesive residue",
                    "Deep clean bathrooms and kitchen areas",
                    "Vacuum and mop all floors — including under built-in furniture where accessible",
                    "Clean light fittings, switches, and power points",
                    "Remove stickers from glass, appliances, and fittings",
                    "Wipe down door frames, skirting boards, and trims",
                    "Clean air conditioning vents and filters",
                    "Remove any small debris left by trades",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">When to Book After Builders Cleaning</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">The right time to book is after all trades have finished and the property is ready for final inspection or occupation. Booking too early — while painting or tiling is still underway — wastes time and money as the space will need cleaning again. Booking too late, after clients or tenants have already been through, creates a poor first impression that is avoidable.</p>
                <p className="text-base leading-8 text-slate-600">For project managers and builders, coordinating the after builders clean as part of the handover process is standard practice. For homeowners, the clean is typically the final step before moving furniture back in or handing keys to tenants or buyers.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How Long Does After Builders Cleaning Take?</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">Timing depends on the scope of the renovation and the size of the property. A renovated kitchen or bathroom in an existing home might take 4–6 hours. A full home renovation or commercial fit-out can take a full day or more depending on scale.</p>
                <p className="text-base leading-8 text-slate-600">Construction dust is significantly more labour-intensive to remove than standard household dust. The quote should reflect the actual condition of the property — a heavily dusty site takes longer than a property that was well-protected during works.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">After Builders Cleaning for Commercial Fit-Outs</h2>
                <p className="text-base leading-8 text-slate-600">Commercial fit-outs, office renovations, and retail shop refits all require after builders cleaning before opening. For business owners, the post-renovation clean is part of getting the premises ready for staff and customers — it removes the construction residue that would otherwise affect the first impressions of the space and potentially create hygiene or safety concerns.</p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book After Builders Clean</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides after builders cleaning for renovations and fit-outs across the Gold Coast.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/after-builders-cleaning-gold-coast">Get a Quote</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/deep-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Deep Cleaning Guide →</Link></li>
                  <li><Link href="/blog/move-in-cleaning-tips" className="text-sm font-semibold text-primary hover:text-secondary">Move-In Cleaning Tips →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Book After Builders Cleaning in the Gold Coast</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Tell us about your renovation, property size, and preferred timing and we'll get back to you with a tailored quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/after-builders-cleaning-gold-coast">Book Now</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
