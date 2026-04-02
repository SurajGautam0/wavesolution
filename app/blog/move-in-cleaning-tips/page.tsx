import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Move-In Cleaning Tips: How to Prepare Your New Gold Coast Home",
  description: "Moving into a new Gold Coast property? Here's how to clean it properly before you unpack — what to prioritise, what to check, and when to call a professional.",
  keywords: ["move in cleaning tips Gold Coast", "new home cleaning Gold Coast", "pre move in cleaning checklist", "move in cleaning guide Queensland"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/move-in-cleaning-tips" },
  openGraph: { title: "Move-In Cleaning Tips: Prepare Your New Gold Coast Home", description: "Practical tips for cleaning your new Gold Coast property before moving in.", url: "https://www.wavesolution.com.au/blog/move-in-cleaning-tips" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Move-In Cleaning Tips", item: "https://www.wavesolution.com.au/blog/move-in-cleaning-tips" },
    ]},
    { "@type": "Article", headline: "Move-In Cleaning Tips: How to Prepare Your New Gold Coast Home", author: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-04-05", url: "https://www.wavesolution.com.au/blog/move-in-cleaning-tips" },
  ],
}

export default function MoveInCleaningTipsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Move-In Cleaning Tips</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Moving Home Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Move-In Cleaning Tips: How to Prepare Your New Gold Coast Home</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">A new property that looks clean isn't always genuinely ready. Here's what to check and clean before you unpack.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated April 2025</span><span>•</span><span>6 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Why Clean Before Moving In?</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">Even if a rental or purchased property was cleaned before handover, it's rarely cleaned to the standard you'd want for your own belongings. Previous occupants leave residue in cupboards, limescale on tapware, soap scum in showers, dust inside vents, and general wear that a surface wipe doesn't address.</p>
                <p className="text-base leading-8 text-slate-600">Cleaning before your furniture and belongings arrive is significantly easier and more thorough than trying to clean around boxes and furniture. If you can get access to the property even half a day before moving your belongings in, use it for cleaning first.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Priority Areas for Move-In Cleaning</h2>
                <div className="space-y-4">
                  {[
                    { area: "Kitchen", items: ["Inside all cupboards and drawers — wipe thoroughly", "Inside the oven — check for grease residue from previous occupants", "Rangehood filter — degrease or replace", "Fridge space — clean behind and underneath if accessible", "Sink and tapware — remove limescale", "Benchtops and splashback"] },
                    { area: "Bathrooms", items: ["Shower screen and tiles — remove soap scum", "Grout lines — check for mould and scrub", "Toilet — full clean inside and out", "Vanity and mirror", "Check exhaust fan is working and clean"] },
                    { area: "Bedrooms", items: ["Inside all wardrobes — shelves, drawers, rails", "Window tracks and sills", "Check ceiling for cobwebs"] },
                    { area: "Whole Property", items: ["All window tracks throughout", "Light switches and power points", "Air conditioning filters — wash and refit", "Skirting boards", "Floors — sweep, vacuum, and mop before furniture arrives"] },
                  ].map(({ area, items }) => (
                    <div key={area} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-primary mb-3">{area}</p>
                      <ul className="space-y-2">
                        {items.map(i => <li key={i} className="flex items-start gap-2 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What to Look For That Previous Occupants Leave Behind</h2>
                <ul className="space-y-3">
                  {[
                    "Grease in oven, rangehood filter, and above the stove",
                    "Mould in bathroom grout and shower seals",
                    "Limescale on shower screens, tapware, and toilet",
                    "Residue inside kitchen cupboards",
                    "Dust and debris inside window tracks",
                    "Marks, stickers, or adhesive residue on surfaces",
                    "Insects or debris in light fittings",
                    "Dust in air conditioning vents",
                  ].map(item => <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{item}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">When to Book a Professional Move-In Clean</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">If you're under time pressure, moving with young children, or the property is larger than a 2-bedroom unit, a professional move-in clean is almost always worth it. It's faster, more thorough, and frees you to focus on coordinating the move itself rather than scrubbing a new home.</p>
                <p className="text-base leading-8 text-slate-600">For properties that have been renovated or where previous occupants were not cleanly, a professional deep clean is particularly valuable. Contact Wave Solution with your property type, suburb, and access timing and we'll get back to you with a fast quote.</p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Move-In Cleaning</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides move-in cleaning for new homes and rentals across the Gold Coast.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/move-in-cleaning-gold-coast">Get a Quote</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/deep-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">Deep Cleaning Guide →</Link></li>
                  <li><Link href="/blog/after-builders-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">After Builders Cleaning →</Link></li>
                  <li><Link href="/blog/how-often-house-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">Cleaning Frequency Guide →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Book Move-In Cleaning in the Gold Coast</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Tell us your property type, suburb, and preferred date and we'll send a fast quote for your move-in clean.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/move-in-cleaning-gold-coast">Book Move-In Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
