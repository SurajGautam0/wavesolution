import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Office Cleaning Schedule: How Often Should Your Workplace Be Cleaned? | Gold Coast",
  description: "Find out how often Gold Coast offices should be professionally cleaned based on staff numbers, industry, and usage. Includes daily, weekly, and monthly task breakdown.",
  keywords: ["office cleaning schedule Gold Coast", "how often office cleaning", "workplace cleaning frequency", "commercial cleaning schedule", "office hygiene Gold Coast"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/office-cleaning-schedule" },
  openGraph: { title: "Office Cleaning Schedule: How Often Should Your Workplace Be Cleaned?", description: "Gold Coast office cleaning frequency guide — from small studios to large commercial premises.", url: "https://www.wavesolution.com.au/blog/office-cleaning-schedule" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Office Cleaning Schedule", item: "https://www.wavesolution.com.au/blog/office-cleaning-schedule" },
    ]},
    { "@type": "Article", headline: "Office Cleaning Schedule: How Often Should Your Workplace Be Cleaned?", author: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-03-15", url: "https://www.wavesolution.com.au/blog/office-cleaning-schedule" },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "How often should an office be cleaned professionally?", acceptedAnswer: { "@type": "Answer", text: "Most Gold Coast offices with 5+ staff benefit from cleaning 2-3 times per week. Larger offices with 20+ staff or customer-facing premises often need daily cleaning. Small studios or low-traffic offices may be fine with once-weekly cleaning." }},
      { "@type": "Question", name: "What should be cleaned daily in an office?", acceptedAnswer: { "@type": "Answer", text: "Daily office cleaning should cover bins, kitchen surfaces and sink, bathroom wipe-down, high-touch surfaces (door handles, switches), and floors in reception and high-traffic areas." }},
    ]},
  ],
}

const schedule = [
  { freq: "Daily", tasks: ["Empty bins throughout the office", "Clean kitchen surfaces, sink, and appliance exteriors", "Wipe down bathroom surfaces and replenish consumables", "Clean high-touch surfaces — door handles, light switches, lift buttons", "Vacuum or mop reception and main thoroughfares", "Remove obvious mess from shared spaces"] },
  { freq: "Weekly", tasks: ["Vacuum all carpeted areas thoroughly", "Mop all hard floors", "Wipe down all desks and workstations (where agreed)", "Clean bathroom tiles, mirrors, and fixtures", "Clean inside of microwave", "Dust shelves, light fittings, and higher surfaces", "Wipe meeting room tables and chairs", "Clean fingermarks from glass partitions and doors"] },
  { freq: "Monthly", tasks: ["Deep clean the kitchen including inside oven and fridge", "Wash or vacuum fabric chairs", "Clean window sills and tracks", "Wipe skirting boards and door frames", "Clean ceiling fans and air conditioning vents", "Spot-clean walls around high-traffic areas"] },
  { freq: "Quarterly / As Needed", tasks: ["Professional carpet cleaning", "External window cleaning", "Upholstery cleaning", "Detailed storage area cleaning", "Pressure cleaning of outdoor areas if applicable"] },
]

export default function OfficeCleaningSchedulePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Office Cleaning Schedule</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Commercial Cleaning Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Office Cleaning Schedule: How Often Should Your Gold Coast Workplace Be Cleaned?</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">A practical frequency guide for Gold Coast offices based on business size, industry, and daily usage.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated March 2025</span><span>•</span><span>7 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How Often Does Your Office Need Cleaning?</h2>
                <div className="space-y-3">
                  {[
                    { size: "1–5 staff, low traffic", freq: "Once per week" },
                    { size: "5–15 staff, moderate usage", freq: "2–3 times per week" },
                    { size: "15–30 staff", freq: "3–5 times per week" },
                    { size: "30+ staff or customer-facing premises", freq: "Daily" },
                    { size: "Healthcare, food service, or childcare", freq: "Daily (minimum)" },
                  ].map(({ size, freq }) => (
                    <div key={size} className="flex items-center justify-between rounded-[1rem] border border-slate-200 bg-slate-50 p-4">
                      <span className="text-sm text-slate-600">{size}</span>
                      <span className="text-sm font-bold text-primary">{freq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Recommended Office Cleaning Schedule</h2>
                <div className="space-y-5">
                  {schedule.map(({ freq, tasks }) => (
                    <div key={freq} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                      <p className="font-black text-primary mb-4">{freq} Tasks</p>
                      <ul className="space-y-2">
                        {tasks.map(t => <li key={t} className="flex items-start gap-2 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{t}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Why Office Cleaning Frequency Matters</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p><strong className="text-slate-800">Staff productivity and wellbeing.</strong> Research consistently shows that cleaner workplaces are associated with higher staff satisfaction and lower sick days. Shared kitchens and bathrooms that aren't maintained properly become sources of friction and complaint.</p>
                  <p><strong className="text-slate-800">Client and visitor impressions.</strong> For client-facing offices in Southport, Broadbeach, or Robina business precincts, a visibly clean reception and meeting room directly affects how your business is perceived.</p>
                  <p><strong className="text-slate-800">Hygiene and compliance.</strong> Businesses in healthcare, food service, and childcare may have minimum cleaning requirements under health and safety regulations. Getting cleaning frequency right is part of compliance.</p>
                  <p><strong className="text-slate-800">Cost efficiency.</strong> Regular maintenance cleaning is more cost-effective than periodic intensive cleans to address neglected buildup. Consistent cleaning also extends the life of carpets, floors, and fittings.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Office Cleaning</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides reliable office cleaning across Gold Coast business precincts.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/office-cleaning-gold-coast">View Office Cleaning</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Articles</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/office-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">Office Cleaning Best Practices →</Link></li>
                  <li><Link href="/blog/commercial-cleaning-benefits" className="text-sm font-semibold text-primary hover:text-secondary">Commercial Cleaning Benefits →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Get an Office Cleaning Quote for Your Gold Coast Business</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Tell us your premises type, staff numbers, suburb, and preferred schedule and we'll send a tailored quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90"><Link href="/office-cleaning-gold-coast">Book Office Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
