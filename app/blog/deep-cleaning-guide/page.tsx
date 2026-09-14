import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Deep Cleaning vs Regular Cleaning: When to Book a Deep Clean | Gold Coast",
  description: "Understand the difference between standard cleaning and deep cleaning — and when your Gold Coast home or office needs a more thorough one-off reset.",
  keywords: ["deep cleaning vs regular cleaning", "when to book deep clean Gold Coast", "one-off deep clean Gold Coast", "spring cleaning Gold Coast", "deep cleaning benefits"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/deep-cleaning-guide" },
  openGraph: { title: "Deep Cleaning vs Regular Cleaning: When to Book a Deep Clean", description: "Find out when your Gold Coast home needs a deep clean rather than standard maintenance cleaning.", url: "https://www.wavesolution.com.au/blog/deep-cleaning-guide" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Deep Cleaning Guide", item: "https://www.wavesolution.com.au/blog/deep-cleaning-guide" },
    ]},
    { "@type": "Article", headline: "Deep Cleaning vs Regular Cleaning: When to Book a Deep Clean", author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-03-10", dateModified: "2025-03-10", image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg", url: "https://www.wavesolution.com.au/blog/deep-cleaning-guide" },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What is the difference between a regular clean and a deep clean?", acceptedAnswer: { "@type": "Answer", text: "A regular clean maintains a property's cleanliness with routine tasks like vacuuming, mopping, surface wiping, and bathroom cleaning. A deep clean goes further — cleaning inside ovens, cupboards, behind appliances, grout, window tracks, skirting boards, and other areas that accumulate buildup over time." }},
      { "@type": "Question", name: "How much does deep cleaning cost in the Gold Coast?", acceptedAnswer: { "@type": "Answer", text: "Deep cleaning in the Gold Coast typically starts from $250 and varies based on the size and condition of the property. Contact Wave Solution for a tailored local quote." }},
    ]},
  ],
}

export default function DeepCleaningGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Deep Cleaning Guide</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Deep Cleaning Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Deep Cleaning vs Regular Cleaning: When Your Gold Coast Home Needs More</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Standard cleaning keeps a home maintained. Deep cleaning resets it. Here's how to know which one your property needs.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated March 2025</span><span>•</span><span>6 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What's the Difference?</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="font-black text-primary mb-3">Regular Cleaning</p>
                    <ul className="space-y-2 text-sm leading-7 text-slate-600">
                      {["Vacuuming and mopping floors", "Wiping benchtops and surfaces", "Bathroom surface cleaning", "Kitchen wipe-down", "Bin emptying", "General tidying and dusting"].map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{i}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-primary/20 bg-primary/5 p-5">
                    <p className="font-black text-primary mb-3">Deep Cleaning (adds)</p>
                    <ul className="space-y-2 text-sm leading-7 text-slate-600">
                      {["Inside oven, rangehood and cupboards", "Grout scrubbing in bathrooms", "Behind and under appliances", "Window tracks and sills", "Skirting boards and door frames", "Air conditioning filters", "Inside wardrobes and drawers", "Light fittings and ceiling fans"].map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />{i}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">When to Book a Deep Clean</h2>
                <div className="space-y-3">
                  {[
                    { title: "Moving into a new property", desc: "Even if the property looks clean, a deep clean before moving in ensures surfaces, cupboards, and hidden areas are genuinely fresh. Previous occupants may have left residue in areas that aren't immediately visible." },
                    { title: "After a long period without professional cleaning", desc: "If a property hasn't been professionally cleaned in 12+ months, a deep clean is the right starting point. It addresses the buildup that accumulates in all the detail areas regular cleaning doesn't reach." },
                    { title: "Before selling or listing your property", desc: "A deep-cleaned property makes a noticeably better impression in photos and inspections. Ovens, bathrooms, floors, and kitchens that have been deep cleaned present far better than standard maintenance-cleaned equivalents." },
                    { title: "After renovation work", desc: "Construction dust settles everywhere — on surfaces, inside cupboards, in vents, on window tracks. A post-renovation deep clean (or after-builders clean) is needed to make the property genuinely liveable." },
                    { title: "Seasonal reset", desc: "Many Gold Coast households book a deep clean once or twice a year to reset the property beyond what regular maintenance achieves. This is the cleaning equivalent of a service — it addresses what builds up over time." },
                    { title: "Before or after extended guests or events", desc: "If your home has been used intensively for a period, a deep clean brings it back to a proper baseline quickly." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-primary mb-2">{title}</p>
                      <p className="text-sm leading-7 text-slate-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Deep Cleaning as a Starting Point</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">One of the most practical uses of a deep clean is as the first service before beginning a regular cleaning schedule. It brings the property up to a proper baseline, after which regular fortnightly or monthly visits keep it there efficiently. Starting a regular schedule on a property that hasn't been deep-cleaned first means your cleaner spends time on accumulated buildup that should have been addressed separately.</p>
                <p className="text-base leading-8 text-slate-600">After a deep clean, regular cleaning visits are faster, more effective, and more consistent in their results.</p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book a Deep Clean</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides one-off deep cleaning for homes and offices across the Gold Coast.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/deep-cleaning-gold-coast">View Deep Cleaning</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Articles</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/how-often-house-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">How Often to Clean →</Link></li>
                  <li><Link href="/blog/after-builders-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">After Builders Cleaning →</Link></li>
                  <li><Link href="/blog/move-in-cleaning-tips" className="text-sm font-semibold text-primary hover:text-secondary">Move-In Cleaning Tips →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Book a Deep Clean in the Gold Coast</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">One-off deep cleaning for Gold Coast homes, offices, and rental properties. Tell us your property and we'll send a fast quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/deep-cleaning-gold-coast">Book Deep Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
