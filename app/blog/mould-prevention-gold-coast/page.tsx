import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "Mould Prevention Guide for Gold Coast Homes | Humidity & Cleaning Tips",
  description:
    "Gold Coast's warm, humid climate makes mould a common problem in homes. Learn how to prevent, remove, and manage mould and moisture in bathrooms, bedrooms, and kitchens.",
  keywords: [
    "mould prevention Gold Coast",
    "mould removal Gold Coast",
    "humidity cleaning Gold Coast",
    "bathroom mould Gold Coast",
    "mould in rental property Queensland",
  ],
  alternates: { canonical: "https://www.wavesolution.com.au/blog/mould-prevention-gold-coast" },
  openGraph: {
    title: "Mould Prevention Guide for Gold Coast Homes",
    description: "How to prevent and remove mould in Gold Coast homes — practical advice for the humid subtropical climate.",
    url: "https://www.wavesolution.com.au/blog/mould-prevention-gold-coast",
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
        { "@type": "ListItem", position: 3, name: "Mould Prevention Gold Coast", item: "https://www.wavesolution.com.au/blog/mould-prevention-gold-coast" },
      ],
    },
    {
      "@type": "Article",
      headline: "Mould Prevention Guide for Gold Coast Homes",
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
      datePublished: "2025-02-15",
      dateModified: "2025-02-15",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/mould-prevention-gold-coast",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is mould so common in Gold Coast homes?",
          acceptedAnswer: { "@type": "Answer", text: "Gold Coast has a humid subtropical climate with warm temperatures year-round. High humidity levels create ideal conditions for mould growth, particularly in bathrooms, laundries, and poorly ventilated rooms." },
        },
        {
          "@type": "Question",
          name: "How do you remove mould from bathroom tiles in the Gold Coast?",
          acceptedAnswer: { "@type": "Answer", text: "Use a dedicated mould remover or a solution of white vinegar and water. Apply to affected grout and tiles, leave for 10-15 minutes, then scrub with a stiff brush. Rinse and dry thoroughly. Prevent recurrence by improving ventilation." },
        },
        {
          "@type": "Question",
          name: "Is a landlord responsible for mould in a rental property in Queensland?",
          acceptedAnswer: { "@type": "Answer", text: "Responsibility depends on the cause. Landlords are generally responsible for mould caused by structural issues (leaks, inadequate ventilation). Tenants may be responsible for mould caused by lifestyle factors (not ventilating bathrooms, not reporting leaks). Both parties have obligations under Queensland tenancy law." },
        },
      ],
    },
  ],
}

export default function MouldPreventionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary">Blog</Link><ChevronRight className="h-3.5 w-3.5" />
            <span>Mould Prevention</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Home Health Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">Mould and Moisture Prevention Guide for Gold Coast Homes</h1>
            <p className="text-lg text-white/75 leading-8 mb-8">Gold Coast's humidity makes mould a real challenge. Here's how to prevent it, treat it, and keep your home healthier year-round.</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated February 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">Written by Suraj Gautam</span>
              <span>•</span>
              <span className="text-secondary font-bold">Gold Coast Climate Specialist</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Why Gold Coast Homes Are Vulnerable</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">Gold Coast sits in a humid subtropical climate with summer humidity regularly above 70-80%. Combined with warm temperatures year-round, this creates ideal conditions for mould spores to settle and grow — particularly in poorly ventilated rooms, around windows, in bathrooms, and on south-facing walls that receive less sunlight.</p>
                <p className="text-base leading-8 text-slate-600">Apartments and units with limited natural airflow are especially vulnerable. So are homes with older construction, inadequate ventilation fans, or single-glazed windows that produce condensation during cooler nights.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-5">Prevention: Room by Room</h2>
                <div className="space-y-5">
                  {[
                    { room: "Bathroom", tips: ["Run the exhaust fan during and for 15 minutes after every shower", "Squeegee walls and glass after use to remove moisture", "Leave the bathroom door open after use to allow airflow", "Wash and replace bath mats regularly — they hold moisture", "Inspect grout and re-seal if it becomes porous"] },
                    { room: "Kitchen", tips: ["Use the rangehood whenever cooking — steam contributes to humidity", "Wipe benchtops and the sink area dry after use", "Clean the inside of the microwave and oven regularly to prevent moisture buildup", "Don't leave wet sponges or cloths sitting on surfaces"] },
                    { room: "Bedroom and Living Areas", tips: ["Open windows regularly to allow fresh air circulation", "Don't dry clothes indoors if possible — it significantly increases humidity", "Use the air conditioner on 'dry' mode during humid periods", "Keep wardrobes slightly open or ventilated to prevent musty buildup", "Move furniture a few centimetres away from external walls to allow airflow"] },
                    { room: "Laundry", tips: ["Vent your dryer externally if possible", "Clean the washing machine drum and seals regularly", "Don't leave wet clothes sitting in the machine", "Ensure the laundry room has adequate ventilation"] },
                  ].map(({ room, tips }) => (
                    <div key={room} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-primary mb-3">{room}</p>
                      <ul className="space-y-2">
                        {tips.map(t => (
                          <li key={t} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How to Remove Existing Mould</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">For surface mould on tiles, grout, window sills, and non-porous surfaces, the following approach is effective for most Gold Coast homes:</p>
                <ol className="space-y-3">
                  {[
                    "Ventilate the area well before starting — open windows and doors",
                    "Wear gloves and avoid inhaling mould spores directly",
                    "Apply white vinegar undiluted, or a dedicated mould remover product",
                    "Allow to sit for 10-15 minutes",
                    "Scrub with a stiff brush, working along grout lines",
                    "Rinse with clean water and dry the surface thoroughly",
                    "Repeat for stubborn areas — older mould may require multiple treatments",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-black">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 rounded-[1rem] border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-amber-700">If mould is present on porous materials like plasterboard, ceiling tiles, or soft furnishings, it is usually not possible to clean effectively. These materials may need to be replaced. If you see widespread mould on walls or ceilings, the underlying cause (a leak, inadequate ventilation) should be addressed first.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Mould in Rental Properties: Who's Responsible?</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">Under Queensland tenancy law, responsibility for mould depends on the cause. Landlords are responsible for mould caused by structural defects — leaking pipes, inadequate waterproofing, or insufficient ventilation that was present when you moved in. Tenants are expected to take reasonable steps to ventilate the property and report maintenance issues promptly.</p>
                <p className="text-base leading-8 text-slate-600">If mould appears during your tenancy, document it with photos and report it to your property manager in writing. If it's caused by a structural issue, the landlord is responsible for remediation. If mould is significant and unaddressed, it may constitute a breach of your rental agreement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Professional Cleaning and Mould Control</h2>
                <p className="text-base leading-8 text-slate-600">Regular professional cleaning helps control the surface conditions that allow mould to take hold. A thorough bathroom and kitchen clean every two weeks keeps grout, tiles, tapware, and surfaces free of the soap residue and moisture buildup that mould thrives on. If mould has established itself in grout, a professional deep clean can address it more effectively than routine maintenance cleaning alone.</p>
              </div>

              <AuthorBio />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book a Deep Clean</p>
                <p className="mt-4 text-sm leading-7 text-white/75">Persistent mould in bathrooms and kitchens? A professional deep clean addresses the buildup properly.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/deep-cleaning-gold-coast">Book Deep Cleaning</Link>
                </Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Articles</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/how-often-house-cleaning" className="text-sm font-semibold text-primary hover:text-secondary">How Often to Clean →</Link></li>
                  <li><Link href="/blog/cleaning-tips" className="text-sm font-semibold text-primary hover:text-secondary">House Cleaning Tips →</Link></li>
                  <li><Link href="/blog/eco-friendly" className="text-sm font-semibold text-primary hover:text-secondary">Eco-Friendly Cleaning →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Need Help With Deep Cleaning in the Gold Coast?</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">Wave Solution provides house cleaning, deep cleaning, and bathroom detail cleaning across the Gold Coast.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90"><Link href="/deep-cleaning-gold-coast">Book Deep Cleaning</Link></Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10"><Link href="/contact">Get a Quote</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
