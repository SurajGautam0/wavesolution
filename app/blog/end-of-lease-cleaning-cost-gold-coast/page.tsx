import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ChevronRight, AlertCircle, DollarSign, Home, Clock, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthorBio } from "@/components/author-bio"

export const metadata: Metadata = {
  title: "End of Lease Cleaning Cost Gold Coast 2025 | Full Price Guide",
  description:
    "How much does end of lease cleaning cost in Gold Coast? Full 2025 price guide by property size, bedroom count, add-ons, and what is included. Quotes from $249.",
  alternates: { canonical: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-cost-gold-coast" },
  openGraph: {
    title: "End of Lease Cleaning Cost Gold Coast 2025 | Full Price Guide",
    description: "Real 2025 prices for end of lease cleaning in Gold Coast by bedroom count. What is included and what costs extra.",
    url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-cost-gold-coast",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "End of lease cleaning cost Gold Coast" }],
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
        { "@type": "ListItem", position: 3, name: "End of Lease Cleaning Cost Gold Coast", item: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-cost-gold-coast" },
      ],
    },
    {
      "@type": "Article",
      headline: "End of Lease Cleaning Cost Gold Coast 2025 — Full Price Guide",
      description: "Complete 2025 price guide for end of lease cleaning in Gold Coast. Prices by bedroom count, inclusions, add-ons, and tips to avoid overcharging.",
      author: {
        "@type": "Person",
        name: "Suraj Gautam",
        jobTitle: "Operations Director & Quality Assurance Lead",
        worksFor: { "@type": "Organization", name: "Wave Solution Cleaning & Pest Control", url: "https://www.wavesolution.com.au" },
        url: "https://www.wavesolution.com.au/team",
      },
      publisher: {
        "@type": "Organization",
        name: "Wave Solution Cleaning Gold Coast",
        logo: { "@type": "ImageObject", url: "https://www.wavesolution.com.au/logo.png" },
        url: "https://www.wavesolution.com.au",
      },
      datePublished: "2025-09-01",
      dateModified: "2025-09-22",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-cost-gold-coast",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.wavesolution.com.au/blog/end-of-lease-cleaning-cost-gold-coast" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does end of lease cleaning cost in Gold Coast?",
          acceptedAnswer: { "@type": "Answer", text: "End of lease cleaning in Gold Coast typically costs between $249 and $699 depending on property size. A 1-bedroom unit averages $249-$329, 2-bedroom $329-$429, 3-bedroom $399-$549, and 4-bedroom $499-$699. Prices vary based on condition, add-ons, and suburb." },
        },
        {
          "@type": "Question",
          name: "Is carpet steam cleaning included in end of lease cleaning?",
          acceptedAnswer: { "@type": "Answer", text: "No. Carpet steam cleaning is almost always quoted separately. For a 3-bedroom home expect to pay an additional $120-$180." },
        },
        {
          "@type": "Question",
          name: "Can a landlord require professional end of lease cleaning in Queensland?",
          acceptedAnswer: { "@type": "Answer", text: "Under Queensland tenancy law (RTRA Act), landlords cannot require a professional cleaner unless your lease included one at move-in. The property must be returned in the same condition as the entry report." },
        },
        {
          "@type": "Question",
          name: "How long does end of lease cleaning take in Gold Coast?",
          acceptedAnswer: { "@type": "Answer", text: "A 2-bedroom unit takes 4-6 hours. A 3-bedroom house takes 6-9 hours. A 4-bedroom home can take 8-12 hours depending on condition." },
        },
        {
          "@type": "Question",
          name: "What is included in end of lease cleaning?",
          acceptedAnswer: { "@type": "Answer", text: "Standard end of lease cleaning covers: full kitchen (oven, stovetop, rangehood, cupboards, benchtops, sink), bathrooms (tiles, grout, toilet, vanity, shower screens), all rooms (walls spot-cleaned, skirting boards, light switches, ceiling fans), windows inside, and floors swept and mopped. Carpet cleaning, external windows, and pest control are usually extra." },
        },
      ],
    },
  ],
}

const pricingData = [
  { size: "Studio / 1 Bed 1 Bath", price: "$249 – $329", duration: "3–4 hrs", ideal: "Apartments, units" },
  { size: "2 Bed 1 Bath", price: "$329 – $399", duration: "4–6 hrs", ideal: "Units, townhouses" },
  { size: "2 Bed 2 Bath", price: "$369 – $449", duration: "5–7 hrs", ideal: "Apartments, duplexes" },
  { size: "3 Bed 1 Bath", price: "$399 – $499", duration: "6–8 hrs", ideal: "Houses, townhouses" },
  { size: "3 Bed 2 Bath", price: "$449 – $549", duration: "6–9 hrs", ideal: "Most Gold Coast homes" },
  { size: "4 Bed 2 Bath", price: "$549 – $649", duration: "8–11 hrs", ideal: "Family homes" },
  { size: "4 Bed 3 Bath", price: "$599 – $699", duration: "9–12 hrs", ideal: "Larger family homes" },
  { size: "5+ Bed", price: "Custom quote", duration: "12+ hrs", ideal: "Large or acreage homes" },
]

const addons = [
  { name: "Carpet steam cleaning (per room)", price: "$35 – $55" },
  { name: "Carpet steam cleaning (full home)", price: "$120 – $220" },
  { name: "Oven deep clean (standalone)", price: "$60 – $90" },
  { name: "External window cleaning", price: "$80 – $160" },
  { name: "Balcony / outdoor area scrub", price: "$60 – $100" },
  { name: "Garage sweep and clean", price: "$50 – $80" },
  { name: "Fridge and freezer clean", price: "$40 – $70" },
  { name: "Wall wash (full property)", price: "$80 – $150" },
  { name: "Pest control (end of lease flea/spray)", price: "$130 – $200" },
  { name: "After-hours or weekend surcharge", price: "+$40 – $80" },
]

const costFactors = [
  { title: "Property condition", desc: "A property that has not been cleaned regularly will take significantly longer. Heavy oven grease, built-up soap scum, and mould in grout can double the time required compared to a well-maintained property." },
  { title: "Number of bathrooms", desc: "Bathrooms are the most labour-intensive rooms. Every additional bathroom adds roughly 45–90 minutes to the job, so a 2-bath property costs noticeably more than a 1-bath of similar size." },
  { title: "Suburb and access", desc: "Properties in outer Gold Coast suburbs like Coomera, Ormeau, or Pimpama may carry a small travel surcharge. High-rise apartments with restricted parking or freight lift access can also affect pricing." },
  { title: "Add-ons selected", desc: "Carpet steam cleaning and pest control are usually the biggest add-on costs. Always check your lease to see what was professionally done at the start of your tenancy." },
  { title: "Furnished vs unfurnished", desc: "Unfurnished empty properties are the fastest to clean and typically sit at the lower end of price ranges. Furnished properties take longer and may attract extra time charges." },
  { title: "Inspection date urgency", desc: "Same-day or next-day cleans attract a short-notice surcharge of $40–$80. Booking 5–10 days in advance locks in the best rate." },
]

const whatIsIncluded = [
  "Oven interior — racks, door glass, bottom tray, seals",
  "Stovetop, rangehood, and splashback",
  "All kitchen cupboard and drawer interiors",
  "Benchtops, sink, and tapware",
  "All bathroom tiles, grout, shower screens",
  "Toilet — bowl, seat, cistern exterior",
  "Vanity, mirror, exhaust fan",
  "All skirting boards full property",
  "Light switches and power points",
  "Ceiling fans and light fittings",
  "Window glass inside (accessible)",
  "Window tracks and sills",
  "Wardrobes inside — shelves, rails, drawers",
  "Walls — spot clean marks and scuffs",
  "Hard floors — sweep, vacuum, mop",
  "Air conditioning filters — remove, clean, refit",
  "Laundry tub, taps, and lint filter",
  "Doorframes and internal doors",
]

const faqs = [
  { q: "Does the price include GST?", a: "Yes. All prices listed by Wave Solution are GST-inclusive. Always confirm this when comparing quotes — some operators advertise ex-GST prices that look cheaper." },
  { q: "Do you charge extra for heavily soiled properties?", a: "If a property requires significantly more time — heavy oven grease, extensive mould — additional charges may apply. We will let you know before starting if this is likely." },
  { q: "Can I get a fixed price or is it hourly?", a: "Wave Solution quotes fixed prices based on your property size and condition. You know the cost upfront with no surprise hourly blowouts." },
  { q: "Do I need to be home during the clean?", a: "No. Most end of lease cleans happen after the tenant has moved out. Key collection or lockbox access works fine." },
  { q: "What areas of Gold Coast do you cover?", a: "We cover all major Gold Coast suburbs including Southport, Broadbeach, Surfers Paradise, Robina, Burleigh Heads, Palm Beach, Coomera, Helensvale, Ormeau, and surrounding areas." },
]

export default function EndOfLeaseCleaningCostGoldCoastPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>End of Lease Cleaning Cost</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Pricing Guide · Gold Coast 2025</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              End of Lease Cleaning Cost Gold Coast — Full 2025 Price Guide
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              Real prices for every property size. What is included, what costs extra, and how to avoid being overcharged on your move-out clean.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span>Updated September 2025</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span className="font-semibold text-white">Written by Suraj Gautam</span>
              <span>•</span>
              <span className="text-secondary font-bold">QLD Tenancy Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick price bar */}
      <div className="bg-secondary">
        <div className="classic-container py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 opacity-75" />1 Bed from <strong>$249</strong></span>
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 opacity-75" />2 Bed from <strong>$329</strong></span>
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 opacity-75" />3 Bed from <strong>$399</strong></span>
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4 opacity-75" />4 Bed from <strong>$549</strong></span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">

            {/* Article */}
            <div className="space-y-10">

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  End of lease cleaning is one of the most searched services in Gold Coast every month — and for good reason. Getting your bond back depends on handing back a property that meets the original entry condition, and most tenants want to know exactly what it will cost before they book.
                </p>
                <p>
                  This guide breaks down the real 2025 prices for end of lease cleaning across Gold Coast, covering every property size, what is included in a standard clean, what costs extra, and the factors that push prices up or down.
                </p>
              </div>

              {/* QLD law alert */}
              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-amber-800">Queensland Tenancy Law — Know Your Rights</p>
                    <p className="mt-2 text-sm leading-7 text-amber-700">
                      Under the <strong>Residential Tenancies &amp; Rooming Accommodation Act (RTRA)</strong>, landlords in Queensland <strong>cannot require you to use a professional cleaner</strong> unless a professional clean was documented at the start of your tenancy. However, the property must be returned in the same condition as the entry report (fair wear and tear excepted). In practice, professional cleaning is the safest way to guarantee the standard is met.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing table */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-2">End of Lease Cleaning Prices by Property Size — Gold Coast 2025</h2>
                <p className="text-sm leading-7 text-slate-500 mb-6">Prices below are for a standard unfurnished property in average condition. Add-ons like carpet cleaning are listed separately.</p>
                <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Property Size</th>
                        <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Price Range</th>
                        <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Duration</th>
                        <th className="text-left px-5 py-4 font-black text-xs uppercase tracking-wider">Typical For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingData.map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-5 py-4 font-bold text-slate-800">{row.size}</td>
                          <td className="px-5 py-4 font-black text-secondary">{row.price}</td>
                          <td className="px-5 py-4 text-slate-600">{row.duration}</td>
                          <td className="px-5 py-4 text-slate-500">{row.ideal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-3 px-1">* Prices are indicative for Gold Coast as of September 2025. Final price confirmed at booking.</p>
              </div>

              {/* Inclusions */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-2">What Is Included in a Standard End of Lease Clean</h2>
                <p className="text-sm leading-7 text-slate-500 mb-5">The following items are covered in a standard end of lease clean with Wave Solution — these are exactly what property managers check during final inspections.</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {whatIsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[1rem] border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add-ons */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-2">Common Add-Ons and Their Costs</h2>
                <p className="text-sm leading-7 text-slate-500 mb-5">These services are not included in the standard base price. Check your lease to see if any were professionally done at move-in — if so, you may need to match that standard at move-out.</p>
                <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left px-5 py-3 font-black text-xs uppercase tracking-wider text-slate-600">Add-On Service</th>
                        <th className="text-left px-5 py-3 font-black text-xs uppercase tracking-wider text-slate-600">Approx. Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addons.map((addon, i) => (
                        <tr key={addon.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-5 py-3 text-slate-700">{addon.name}</td>
                          <td className="px-5 py-3 font-bold text-secondary">{addon.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cost factors */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-2">What Makes the Price Go Up or Down</h2>
                <p className="text-sm leading-7 text-slate-500 mb-6">Two properties of the same bedroom count can sit at very different ends of the price range depending on these factors.</p>
                <div className="space-y-4">
                  {costFactors.map((factor) => (
                    <div key={factor.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-800 mb-1">{factor.title}</p>
                      <p className="text-sm leading-7 text-slate-600">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIY vs Pro */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">DIY vs. Professional End of Lease Cleaning</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    The short answer: DIY is possible, but it carries real risk. Property managers conduct detailed room-by-room comparisons against the entry condition report. The most commonly failed items — oven grease, shower grout, and carpet stains — are genuinely difficult to remove to inspection standard with household products.
                  </p>
                  <p>
                    <strong className="text-slate-800">The hidden cost of DIY</strong> is often time. A 3-bedroom house done properly by one person takes 12–15 hours. Professional teams with the right commercial equipment can do the same job in 6–8 hours at a significantly higher standard.
                  </p>
                  <p>
                    <strong className="text-slate-800">Bond at stake.</strong> If the property fails the final inspection, you are either returning to reclean at your cost or having the cost deducted from your bond. A $400 professional clean protecting a $2,000 bond is often a straightforward decision.
                  </p>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-5">
                    <p className="font-black text-green-800 mb-3 flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Professional Cleaning</p>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />Inspection-standard result</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />Commercial-grade equipment</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />Saves 10–15 hours of your time</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />Reduces risk of bond dispute</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />Receipts for lease records</li>
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="font-black text-slate-700 mb-3 flex items-center gap-2"><Home className="h-4 w-4" />DIY Cleaning</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />12–15+ hours of work</li>
                      <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />Consumer products may not be enough</li>
                      <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />Risk of failing inspection</li>
                      <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />May need to reclean at extra cost</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Avoid overcharging */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">How to Avoid Being Overcharged</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p><strong className="text-slate-800">Get an itemised quote.</strong> Any reputable cleaner should tell you exactly what is included and what is extra. If carpet cleaning and pest control are bundled without asking, question it — these are not always needed.</p>
                  <p><strong className="text-slate-800">Confirm what your lease requires.</strong> Check the entry condition report to see if carpets and pest control were professionally done when you moved in. Queensland law only requires you to match the entry condition — not exceed it.</p>
                  <p><strong className="text-slate-800">Book early, not last-minute.</strong> Same-day and next-day bookings attract surcharges. Booking 5–7 days ahead avoids short-notice fees.</p>
                  <p><strong className="text-slate-800">Empty the property first.</strong> Having all furniture removed before your clean avoids additional time charges for cleaning around items.</p>
                  <p><strong className="text-slate-800">Ask about a re-clean guarantee.</strong> Reputable companies offer a free re-clean within 24–72 hours if the property fails inspection on a covered item.</p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-800 mb-2">{faq.q}</p>
                      <p className="text-sm leading-7 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <AuthorBio />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Get a Fixed Quote</p>
                <p className="mt-3 text-2xl font-black">From $249</p>
                <p className="mt-2 text-sm leading-7 text-white/75">Tell us your suburb, bedroom count, and inspection date. We will confirm your fixed price within the hour.</p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/end-of-lease-cleaning-gold-coast">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" className="mt-3 w-full h-11 rounded-full border-white/20 bg-white/5 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
                  <Link href="/book">Book Online Now</Link>
                </Button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Why Wave Solution</p>
                <ul className="space-y-3">
                  {[
                    { icon: Star, text: "4.9 Google rating — 87+ reviews" },
                    { icon: ShieldCheck, text: "Fully insured and police-checked" },
                    { icon: CheckCircle2, text: "Fixed price — no surprise extras" },
                    { icon: Clock, text: "Free re-clean if inspection fails" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-slate-700">
                      <Icon className="h-4 w-4 text-secondary shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Guides</p>
                <ul className="space-y-3">
                  <li><Link href="/blog/bond-cleaning-checklist" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Checklist QLD</Link></li>
                  <li><Link href="/blog/end-of-lease-checklist" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning Checklist</Link></li>
                  <li><Link href="/blog/move-out-cleaning-mistakes" className="text-sm font-semibold text-primary hover:text-secondary">Move-Out Mistakes That Cost You</Link></li>
                  <li><Link href="/blog/rental-inspection-tips" className="text-sm font-semibold text-primary hover:text-secondary">Rental Inspection Tips Gold Coast</Link></li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Related Services</p>
                <ul className="space-y-3">
                  <li><Link href="/end-of-lease-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Cleaning</Link></li>
                  <li><Link href="/bond-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Bond Cleaning Gold Coast</Link></li>
                  <li><Link href="/carpet-cleaning-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Carpet Cleaning Gold Coast</Link></li>
                  <li><Link href="/pest-control-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">End of Lease Pest Control</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">Ready to Book?</p>
          <h2 className="text-3xl font-black tracking-tight">Get Your End of Lease Clean Sorted Today</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Wave Solution provides fixed-price end of lease cleaning across the Gold Coast. Tell us your suburb, property size, and inspection date and we will confirm your quote fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/end-of-lease-cleaning-gold-coast">Book End of Lease Clean</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
