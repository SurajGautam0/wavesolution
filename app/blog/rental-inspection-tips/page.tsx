import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rental Inspection Tips for Gold Coast Tenants | How to Pass Every Time",
  description: "Practical tips for Gold Coast tenants preparing for routine and final rental inspections. Know what landlords check and how to ensure your property is inspection-ready.",
  keywords: ["rental inspection tips Gold Coast", "how to pass rental inspection Queensland", "routine inspection checklist", "rental property inspection Gold Coast"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/rental-inspection-tips" },
  openGraph: { title: "Rental Inspection Tips for Gold Coast Tenants", description: "How to prepare your Gold Coast rental for routine and final inspections — what landlords check and what to prioritise.", url: "https://www.wavesolution.com.au/blog/rental-inspection-tips" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Rental Inspection Tips", item: "https://www.wavesolution.com.au/blog/rental-inspection-tips" },
    ]},
    { "@type": "Article", headline: "Rental Inspection Tips for Gold Coast Tenants", author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-04-15", dateModified: "2025-04-15", image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg", url: "https://www.wavesolution.com.au/blog/rental-inspection-tips" },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "How often can a landlord inspect a rental property in Queensland?", acceptedAnswer: { "@type": "Answer", text: "Under Queensland tenancy law, a landlord can conduct routine inspections once every 3 months after the first inspection, which cannot occur within the first 3 weeks of a tenancy. Entry inspections require at least 7 days notice." }},
      { "@type": "Question", name: "What do property managers look for at a routine inspection?", acceptedAnswer: { "@type": "Answer", text: "Property managers typically check for overall cleanliness, damage beyond fair wear and tear, maintenance issues, appropriate use of the property, and compliance with tenancy conditions like no unauthorised pets or subletting." }},
    ]},
  ],
}

export default function RentalInspectionTipsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Rental Inspection Tips</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Tenant Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Rental Inspection Tips for Gold Coast Tenants: How to Pass Every Time</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Know what property managers look for, what to clean before they arrive, and how to make routine and final inspections straightforward.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated April 2025</span><span>•</span><span>7 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Routine vs Final Inspections: What's Different?</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="font-black text-primary mb-3">Routine Inspection</p>
                    <p className="text-sm leading-7 text-slate-600 mb-3">Conducted periodically during your tenancy (up to every 3 months in Queensland). The property manager checks:</p>
                    <ul className="space-y-1 text-sm leading-7 text-slate-600">
                      {["Overall cleanliness and maintenance", "Damage beyond fair wear and tear", "Maintenance issues to report", "Compliance with lease conditions"].map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-secondary mt-1 shrink-0" />{i}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-primary/20 bg-primary/5 p-5">
                    <p className="font-black text-primary mb-3">Final Inspection</p>
                    <p className="text-sm leading-7 text-slate-600 mb-3">Conducted at the end of your tenancy to assess bond return. More thorough — the manager compares against the original entry condition report:</p>
                    <ul className="space-y-1 text-sm leading-7 text-slate-600">
                      {["All rooms checked in detail", "Kitchen appliances inspected", "Carpet and floor condition", "Walls, marks, and damage", "Gardens and outdoor areas"].map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary mt-1 shrink-0" />{i}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What to Clean Before a Routine Inspection</h2>
                <p className="text-sm leading-7 text-slate-600 mb-4">You don't need to do a bond-clean standard for a routine inspection, but the property should be clean and in good repair. Focus on:</p>
                <ul className="space-y-3">
                  {[
                    "Kitchen — benchtops, sink, stovetop, and inside microwave",
                    "Bathrooms — remove visible soap scum, clean toilet, wipe mirror",
                    "Floors — vacuum and mop throughout",
                    "Remove any visible mould (and check exhaust fans are working)",
                    "Tidy all rooms so the inspector can access and see clearly",
                    "Report any maintenance issues proactively — this reflects positively",
                    "Check outside — keep balcony, patio, and garden tidy",
                  ].map(item => <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{item}</li>)}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What Inspectors Commonly Flag</h2>
                <div className="space-y-3">
                  {[
                    { issue: "Bathroom mould", detail: "Grout mould and shower screen soap scum are among the most commonly noted issues at routine inspections. Regular cleaning prevents build-up." },
                    { issue: "Stovetop and kitchen buildup", detail: "Grease on the stovetop and splashback that has been allowed to build up." },
                    { issue: "Marks on walls", detail: "Scuffs, blue-tack marks, and crayon that have accumulated over time." },
                    { issue: "Dirty windows and window tracks", detail: "Windows that haven't been cleaned in the tenancy period, or tracks full of grit." },
                    { issue: "Carpet stains not reported", detail: "If a carpet stain occurred and wasn't reported promptly, it can become a problem at final inspection." },
                  ].map(({ issue, detail }) => (
                    <div key={issue} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-bold text-primary mb-1">{issue}</p>
                      <p className="text-sm leading-7 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Professional Cleaning Before Inspections</h2>
                <p className="text-base leading-8 text-slate-600">For final inspections especially, professional cleaning is the most reliable way to ensure the property meets the standard required. Wave Solution provides bond cleaning and end of lease cleaning across the Gold Coast designed specifically around passing rental inspections — including attention to all the areas property managers check most carefully.</p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Bond Cleaning Gold Coast</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Prepare your Gold Coast rental for final inspection with Wave Solution's detailed bond cleaning service.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/bond-cleaning-gold-coast">Get a Quote</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Guides</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist →</Link></li>
                  <li><Link href="/blog/end-of-lease-checklist" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Checklist →</Link></li>
                  <li><Link href="/blog/move-out-cleaning-mistakes" className="text-sm font-semibold text-primary hover:text-secondary">Move-Out Mistakes →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Need Help Preparing for a Rental Inspection?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Wave Solution provides bond cleaning and house cleaning across the Gold Coast. Tell us your property and timing.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/bond-cleaning-gold-coast">Book Bond Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
