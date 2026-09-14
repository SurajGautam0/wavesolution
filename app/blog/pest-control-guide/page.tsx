import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Common Pests in Gold Coast Homes and How to Deal With Them | Guide 2025",
  description: "Gold Coast's warm climate attracts many common household pests. Learn to identify cockroaches, ants, spiders, rodents and termites — and when to call a professional.",
  keywords: ["pests Gold Coast homes", "pest control guide Gold Coast", "cockroach prevention Gold Coast", "termite inspection Gold Coast", "common pests Queensland"],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/pest-control-guide" },
  openGraph: { title: "Common Pests in Gold Coast Homes and How to Deal With Them", description: "Identify and manage common Gold Coast household pests. Know when DIY is enough and when to call a professional.", url: "https://www.wavesolution.com.au/blog/pest-control-guide" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
      { "@type": "ListItem", position: 3, name: "Pest Control Guide", item: "https://www.wavesolution.com.au/blog/pest-control-guide" },
    ]},
    { "@type": "Article", headline: "Common Pests in Gold Coast Homes and How to Deal With Them", author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" }, publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" }, datePublished: "2025-03-20", dateModified: "2025-03-20", image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg", url: "https://www.wavesolution.com.au/blog/pest-control-guide" },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What pests are most common in Gold Coast homes?", acceptedAnswer: { "@type": "Answer", text: "The most common pests in Gold Coast homes include cockroaches (German and American), ants (including fire ants), spiders, rodents (mice and rats), termites, mosquitoes, and silverfish. Warm, humid conditions make the Gold Coast particularly susceptible year-round." }},
      { "@type": "Question", name: "How often should I get pest control done in Gold Coast?", acceptedAnswer: { "@type": "Answer", text: "Most Gold Coast properties benefit from a general pest treatment once or twice a year. Termite inspections should be conducted annually. Properties in bush-adjacent areas or with past pest issues may require more frequent treatment." }},
    ]},
  ],
}

const pests = [
  { name: "Cockroaches", signs: "Droppings (resemble black pepper), musty odour, egg cases behind appliances, sightings at night", prevention: ["Keep kitchen surfaces and floors free of crumbs and spills", "Store food in sealed containers", "Fix leaking taps — cockroaches are attracted to moisture", "Seal gaps around pipes and under doors", "Empty bins daily in the kitchen"], callPro: "Cockroach infestations establish quickly and are very difficult to eliminate with DIY products alone. Professional treatment is recommended for any active infestation." },
  { name: "Ants", signs: "Visible trails, nest mounds in garden or under pavers, activity around food sources or moisture", prevention: ["Seal food in containers", "Clean up food and drink spills immediately", "Seal cracks and gaps in walls and flooring", "Keep tree branches trimmed away from the property"], callPro: "Most ant species can be managed with bait treatments, but fire ants require immediate professional treatment and must be reported under Queensland biosecurity law." },
  { name: "Spiders", signs: "Webs in corners, ceilings, eaves, and garden areas; egg sacs; sightings of the spiders themselves", prevention: ["Regular cleaning to remove webs before they become established", "Reduce clutter in garages, sheds, and storage areas", "Seal gaps around windows, doors, and pipes", "Keep outdoor lighting minimal — insects attract spiders"], callPro: "Redback and funnel-web spiders are medically significant in Queensland. Professional treatment is recommended if these are present, especially with children or pets." },
  { name: "Rodents (Mice and Rats)", signs: "Droppings along walls, gnaw marks on food packaging or wiring, scratching sounds at night, nesting material", prevention: ["Store food in sealed containers", "Keep rubbish in lidded bins", "Seal gaps larger than 6mm around pipes and foundations", "Remove clutter and debris from around the property perimeter"], callPro: "Rodents breed quickly. At the first sign of rodent activity, professional baiting and exclusion is strongly recommended." },
  { name: "Termites", signs: "Hollow-sounding timber, mud tubes along walls or stumps, discarded wings near light sources, visible damage to wood", prevention: ["Maintain a termite barrier (chemical or physical) around the property", "Ensure adequate subfloor ventilation", "Remove timber debris from around the property", "Fix leaks promptly — moisture attracts termites"], callPro: "Termites can cause catastrophic structural damage. Annual professional inspections are essential in Queensland, and any suspected termite activity requires immediate professional assessment — never disturb a suspected nest." },
]

export default function PestControlGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Pest Control Guide</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Pest Control Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Common Pests in Gold Coast Homes — and How to Deal With Them</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Warm temperatures and high humidity make the Gold Coast year-round pest territory. Here's what to look for and what to do about it.</p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60"><span>Updated March 2025</span><span>•</span><span>9 min read</span></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <p className="text-base leading-8 text-slate-600">Gold Coast's subtropical climate creates ideal conditions for many common household pests. Warm temperatures year-round, high summer humidity, and the mix of coastal, bush, and suburban environments means pest pressure is a reality for most properties — not just older or poorly maintained ones.</p>

              {pests.map(({ name, signs, prevention, callPro }) => (
                <div key={name} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-black tracking-tight text-primary mb-4">{name}</h2>
                  <div className="mb-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-secondary mb-2">Signs of Activity</p>
                    <p className="text-sm leading-7 text-slate-600">{signs}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-secondary mb-2">Prevention</p>
                    <ul className="space-y-1">
                      {prevention.map(p => <li key={p} className="flex items-start gap-2 text-sm leading-7 text-slate-600"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{p}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-[1rem] border border-amber-200 bg-amber-50 p-3 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs leading-6 text-amber-700">{callPro}</p>
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How Often Should Gold Coast Properties Be Treated?</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">A general pest treatment once or twice a year provides a good level of protection for most Gold Coast homes against cockroaches, ants, spiders, and silverfish. Properties in bush-adjacent suburbs, older buildings, or homes with past pest activity may need more frequent treatment.</p>
                <p className="text-base leading-8 text-slate-600">Termite inspections should be annual for all Gold Coast properties — Queensland has some of the highest termite pressure in Australia. If you haven't had a termite inspection in the past 12 months, booking one is strongly recommended.</p>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book Pest Control</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Wave Solution provides pest control support across the Gold Coast for homes, rentals, and businesses.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/pest-control-gold-coast">View Pest Control</Link></Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Services</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/pest-control-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Pest Control Gold Coast →</Link></li>
                  <li><Link href="/deep-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Deep Cleaning Gold Coast →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Book Pest Control in the Gold Coast</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Wave Solution provides pest treatment across Gold Coast for homes, rental properties, and businesses. Get a fast local quote.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/pest-control-gold-coast">Book Pest Control</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
