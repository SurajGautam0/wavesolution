import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Carpet Cleaning Guide Gold Coast | How Often, Costs & Methods",
  description:
    "Complete carpet cleaning guide for Gold Coast homes and rentals. Find out how often carpets should be cleaned, what methods work best, and when to book a professional service.",
  keywords: ["carpet cleaning guide Gold Coast", "carpet cleaning tips", "how often carpet cleaning", "carpet steam cleaning Gold Coast", "carpet stain removal Gold Coast"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/carpet-cleaning-guide" },
  openGraph: {
    title: "Carpet Cleaning Guide Gold Coast | How Often, Costs & Methods",
    description: "Everything Gold Coast homeowners and renters need to know about professional carpet cleaning.",
    url: "https://www.wavesolution.com.au/blog/carpet-cleaning-guide",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Carpet Cleaning Guide", item: "https://www.wavesolution.com.au/blog/carpet-cleaning-guide" },
    ]},
    { "@type": "Article", headline: "Carpet Cleaning Guide Gold Coast", author: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-03-01", url: "https://www.wavesolution.com.au/blog/carpet-cleaning-guide" },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "How often should carpets be professionally cleaned?", acceptedAnswer: { "@type": "Answer", text: "Most households should have carpets professionally cleaned once or twice a year. Homes with pets, children, or high foot traffic benefit from more frequent cleaning — every 6 months. Rental properties are often required to have carpets cleaned at the end of every tenancy." }},
      { "@type": "Question", name: "How long does carpet cleaning take to dry?", acceptedAnswer: { "@type": "Answer", text: "Carpet drying times typically range from 2 to 6 hours depending on the cleaning method, carpet thickness, airflow, and weather. Using fans and opening windows speeds drying significantly." }},
      { "@type": "Question", name: "How much does carpet cleaning cost in the Gold Coast?", acceptedAnswer: { "@type": "Answer", text: "Carpet cleaning in the Gold Coast starts from $150 depending on the number of rooms and carpet area. Contact Wave Solution for a tailored quote." }},
    ]},
  ],
}

export default function CarpetCleaningGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Carpet Cleaning Guide</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Carpet Care Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Carpet Cleaning Guide for Gold Coast Homes and Rentals</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">How often, which methods, how much, and when to call a professional — everything you need to know about carpet cleaning in the Gold Coast.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated March 2025</span><span>•</span><span>7 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How Often Should Carpets Be Cleaned?</h2>
                <div className="space-y-4">
                  {[
                    { scenario: "Standard household (1-2 adults, no pets)", freq: "Once per year" },
                    { scenario: "Family with children or light pet traffic", freq: "Every 6-12 months" },
                    { scenario: "Households with multiple pets", freq: "Every 3-6 months" },
                    { scenario: "Rental properties (tenancy turnover)", freq: "At end of every tenancy" },
                    { scenario: "Office carpets (heavy foot traffic)", freq: "Every 6-12 months" },
                  ].map(({ scenario, freq }) => (
                    <div key={scenario} className="flex items-center justify-between rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
                      <span className="text-sm text-slate-600">{scenario}</span>
                      <span className="text-sm font-bold text-primary">{freq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Carpet Cleaning Methods Explained</h2>
                <div className="space-y-4">
                  {[
                    { method: "Hot Water Extraction (Steam Cleaning)", desc: "The most thorough method for most residential carpets. Hot water under pressure is injected into the carpet fibres and extracted with dirt and debris. Effective for deep cleaning, allergen removal, and stain treatment. Takes 2–6 hours to dry." },
                    { method: "Dry Cleaning", desc: "Uses minimal moisture and a cleaning compound worked into the fibres. Carpets are ready to walk on almost immediately. Less effective for deep stains or heavily soiled carpets but good for maintenance cleaning or situations where fast drying is needed." },
                    { method: "Encapsulation", desc: "A newer commercial method where a polymer solution crystallises around dirt particles for easy vacuuming. Quick drying, good for commercial and office carpets between deep cleans." },
                    { method: "Carpet Shampooing", desc: "An older method using rotating brushes and shampoo solution. Effective at loosening dirt but requires thorough extraction to prevent residue buildup. Less commonly used today." },
                  ].map(({ method, desc }) => (
                    <div key={method} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-primary mb-2">{method}</p>
                      <p className="text-sm leading-7 text-slate-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Common Carpet Stains and How to Treat Them</h2>
                <div className="space-y-3">
                  {[
                    { stain: "Red wine", treatment: "Blot immediately, never rub. Apply cold water, then a mix of dish soap and hydrogen peroxide (test on a hidden area first). Blot dry." },
                    { stain: "Coffee", treatment: "Blot up excess liquid. Apply a solution of dish soap and warm water. Blot from the outside in. Rinse with cold water." },
                    { stain: "Pet urine", treatment: "Blot up immediately. Apply an enzymatic cleaner specifically designed for pet stains — these break down the odour-causing compounds that standard cleaners miss." },
                    { stain: "Mud", treatment: "Allow to dry completely before attempting to remove. Vacuum up the dried material, then treat any remaining stain with warm water and mild detergent." },
                    { stain: "Grease or oil", treatment: "Apply a dry absorbent (like baking soda) and leave for 15 minutes. Vacuum up, then treat with a small amount of dish soap and warm water." },
                  ].map(({ stain, treatment }) => (
                    <div key={stain} className="rounded-[1rem] border border-slate-100 bg-slate-50 p-4">
                      <p className="text-sm font-bold text-primary mb-1">{stain}</p>
                      <p className="text-sm leading-7 text-slate-600">{treatment}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500 italic">Note: Always act quickly, blot rather than rub, and test solutions on a hidden area first. Old or set stains are significantly harder to treat and may require professional equipment.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Carpet Cleaning for Rental Properties</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">Carpet condition is one of the most common points of dispute in Gold Coast rental bond claims. Most leases and standard Queensland tenancy practice requires that carpets be in a clean condition at vacate — equivalent to the condition they were in when you moved in, allowing for fair wear and tear.</p>
                <p className="text-base leading-8 text-slate-600">If the entry condition report indicates carpets were professionally cleaned at the start of the tenancy, you will generally be expected to have them professionally cleaned at vacate. Keep the receipt as evidence. For heavily stained carpets, a professional carpet clean should be booked well before the final inspection to allow time for re-cleaning if needed.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What to Expect from Professional Carpet Cleaning</h2>
                <ul className="space-y-3">
                  {[
                    "The cleaner will inspect the carpet type and condition before selecting the appropriate method",
                    "Pre-treatment is applied to heavily soiled areas and stains",
                    "Hot water extraction or the agreed method is performed",
                    "Drying time is typically 2-6 hours — you can walk on it in clean socks sooner",
                    "Some stains may not fully come out, especially older or set-in marks",
                    "Professional equipment achieves significantly better results than domestic machines",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Carpet Cleaning</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides carpet cleaning across the Gold Coast for homes, rentals, and offices.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/carpet-cleaning-gold-coast">Get a Quote</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist →</Link></li>
                  <li><Link href="/blog/end-of-lease-checklist" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Checklist →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Book Carpet Cleaning in the Gold Coast</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Tell us your suburb, property type, and the number of rooms and we'll provide a fast local quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/carpet-cleaning-gold-coast">Book Carpet Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
