import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Benefits of Professional Commercial Cleaning for Gold Coast Businesses",
  description: "Why Gold Coast businesses invest in professional commercial cleaning — staff productivity, client impressions, hygiene compliance, and long-term cost savings explained.",
  keywords: ["commercial cleaning benefits Gold Coast", "professional office cleaning benefits", "why hire commercial cleaner", "business cleaning Gold Coast", "workplace hygiene benefits"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/commercial-cleaning-benefits" },
  openGraph: { title: "Benefits of Professional Commercial Cleaning for Gold Coast Businesses", description: "The real business case for professional commercial cleaning in the Gold Coast.", url: "https://www.wavesolution.com.au/blog/commercial-cleaning-benefits" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Commercial Cleaning Benefits", item: "https://www.wavesolution.com.au/blog/commercial-cleaning-benefits" },
    ]},
    { "@type": "Article", headline: "Benefits of Professional Commercial Cleaning for Gold Coast Businesses", author: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-04-10", url: "https://www.wavesolution.com.au/blog/commercial-cleaning-benefits" },
  ],
}

const benefits = [
  { title: "Stronger First Impressions with Clients and Visitors", body: "In client-facing environments — offices in Southport, retail in Broadbeach, clinics across the Gold Coast — the cleanliness of your premises is one of the first things clients notice. A visibly clean and well-maintained space communicates professionalism and attention to detail before a single word is spoken. A neglected environment communicates the opposite, regardless of the quality of your actual product or service." },
  { title: "Higher Staff Productivity and Satisfaction", body: "Research consistently shows that employees work more productively and report higher job satisfaction in clean, organised environments. Shared kitchens and bathrooms that aren't maintained properly become sources of friction and complaint. A reliable cleaning schedule removes that friction and helps the workplace feel more supportive of the people in it." },
  { title: "Reduced Sick Days and Improved Hygiene", body: "Offices are high-touch environments. Door handles, lift buttons, kitchen surfaces, shared equipment, and bathroom fittings are touched by multiple people throughout the day. Regular professional cleaning reduces the bacterial and viral load on these surfaces. In practical terms, this means fewer colds and illnesses circulating through staff, which reduces absenteeism during key periods." },
  { title: "Consistent Results That Staff Cleaning Doesn't Achieve", body: "Relying on staff to maintain the office — whether informally or through cleaning rosters — typically produces inconsistent results and creates dissatisfaction. Professional cleaners bring the right products, equipment, and systematic approach to achieve a consistent standard that casual or ad-hoc cleaning can't replicate. Staff clean to get through the task. Professional cleaners clean to a standard." },
  { title: "Longer Life for Floors, Carpets, and Fittings", body: "Regular professional cleaning extends the lifespan of commercial flooring, carpets, and fittings by removing the abrasive particles and compounds that cause gradual wear. A commercial carpet that's cleaned professionally once or twice a year lasts significantly longer than one that's only vacuumed. This is a direct cost saving that is often overlooked when businesses calculate the ROI of cleaning services." },
  { title: "After-Hours Flexibility Without Disruption", body: "Professional commercial cleaners work around your business hours. For most Gold Coast offices and retail premises, cleaning can be scheduled for after close of business, early morning before opening, or on weekends — ensuring the workspace is clean and ready without disrupting operations or creating noise and disruption during the working day." },
  { title: "Compliance and Industry Standards", body: "Businesses in healthcare, food service, childcare, and certain commercial sectors have minimum hygiene and cleaning standards required by regulation. Professional cleaning services provide documented, consistent cleaning that supports compliance. For businesses seeking or maintaining quality certifications, a professional cleaning record is part of the evidence trail." },
]

export default function CommercialCleaningBenefitsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Commercial Cleaning Benefits</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Business Cleaning Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">7 Benefits of Professional Commercial Cleaning for Gold Coast Businesses</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Why the Gold Coast's most professional businesses invest in commercial cleaning — and what they gain from it.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated April 2025</span><span>•</span><span>7 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-6">
              {benefits.map(({ title, body }, i) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-black">{i + 1}</span>
                    <div>
                      <h2 className="text-lg font-black tracking-tight text-primary mb-3">{title}</h2>
                      <p className="text-sm leading-7 text-slate-600">{body}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-black tracking-tight text-primary mb-4">What to Look for in a Gold Coast Commercial Cleaner</h2>
                <ul className="space-y-3">
                  {[
                    "Fully insured — public liability is essential for commercial premises",
                    "Police-checked staff for secure or sensitive environments",
                    "Flexible scheduling around your business hours",
                    "Clear communication about scope, access, and service changes",
                    "Experience with your type of premises",
                    "Eco-friendly product options where required",
                  ].map(item => <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{item}</li>)}
                </ul>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Commercial Cleaning</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides commercial and office cleaning across Gold Coast for businesses of all sizes.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/commercial-cleaning-gold-coast">Get a Quote</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Articles</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/office-cleaning-schedule" className="text-sm font-semibold text-primary hover:text-secondary">Office Cleaning Schedule →</Link></li>
                  <li><Link href="/blog/office-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">Office Cleaning Best Practices →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Get a Commercial Cleaning Quote for Your Gold Coast Business</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Tell us about your premises, staff numbers, suburb, and preferred schedule and we'll get back to you with a tailored quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/commercial-cleaning-gold-coast">Book Commercial Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
