import type { Metadata } from "next"
import Link from "next/link"
import { AuthorBio } from "@/components/author-bio"

const slug = "professional-vs-diy-bond-cleaning-costs-benefits-wavesolution"
const pageTitle = "DIY vs Professional Bond Cleaning | Gold Coast"
const pageDescription =
  "Compare professional vs. DIY bond cleaning costs, time and bond-back risks on the Gold Coast. See which option suits your move."
const pageUrl = `https://www.wavesolution.com.au/blog/${slug}`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Bond cleaning on the Gold Coast" }],
  },
}

const comparison = [
  ["Time", "A team may complete a standard property in around 4–12 hours, depending on size and condition.", "Can take several days when fitted around work and moving tasks."],
  ["Equipment", "Commercial vacuums, steam equipment and task-specific products are supplied by the cleaner.", "You supply or hire equipment and buy products for ovens, bathrooms, glass and floors."],
  ["Experience", "A specialist works to a detailed end-of-lease scope and can spot commonly missed areas.", "Results depend on your experience, preparation and how closely you follow the exit checklist."],
  ["Upfront cost", "A Gold Coast clean may range from about $299 for a studio to over $1,000 for a larger home, depending on inclusions.", "Supplies and equipment can cost $100–$300 or more, before valuing your time."],
  ["Inspection risk", "A written scope and a re-clean policy can help resolve in-scope issues raised by the agent.", "Missed tasks may mean arranging another clean or disputing a bond deduction."],
]

const faqs = [
  {
    question: "How long does a professional bond clean take?",
    answer: "Time depends on property size, condition and the agreed scope. A standard apartment or house may take around 4–12 hours.",
  },
  {
    question: "What is usually included in a bond clean?",
    answer: "A standard scope commonly covers kitchens, bathrooms, living areas, bedrooms, floors and interior windows. Check the written inclusions, since carpets, pest treatment and some external areas may cost extra.",
  },
  {
    question: "Do I need to be at the property during the clean?",
    answer: "Usually not. Arrange access and key handover with the cleaning company or property manager in advance.",
  },
  {
    question: "Does hiring a professional guarantee my bond back?",
    answer: "No cleaning service can guarantee a bond refund because the outcome depends on the entry condition, fair wear and tear, the tenancy agreement and the inspection. Ask what the re-clean policy covers and keep your receipt and checklist.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
        { "@type": "ListItem", position: 3, name: "Professional vs. DIY Bond Cleaning", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      headline: "Professional vs. DIY Bond Cleaning: Costs & Benefits",
      description: pageDescription,
      author: { "@type": "Organization", name: "Wave Solution Cleaning & Pest Control", url: "https://www.wavesolution.com.au" },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning & Pest Control", url: "https://www.wavesolution.com.au" },
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      mainEntityOfPage: pageUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
}

export default function ProfessionalVsDiyBondCleaningPage() {
  return (
    <main className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-gradient-to-br from-[#1b1b3a] to-[#333365] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
            <Link href="/blog" className="hover:text-white">Blog</Link><span className="mx-2">/</span><span>Bond &amp; Move-Out</span>
          </nav>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#39BDE4]">Bond &amp; Move-Out · 8 min read</p>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Professional vs. DIY Bond Cleaning: Costs &amp; Benefits</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">Moving out on the Gold Coast? Compare the money, time and preparation each option takes before deciding how to get your rental ready for its final inspection.</p>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <p className="text-lg leading-8 text-slate-700">Bond cleaning—also called end-of-lease or exit cleaning—is a thorough clean completed before you return a rental property. The aim is to leave it in the condition required by your tenancy agreement and entry condition report, allowing for fair wear and tear. A missed oven, window track or bathroom detail can mean extra work during an already busy move.</p>
        <p className="mt-5 leading-8">Should you do it yourself or hire a professional? The right choice depends on your available time, the property’s condition, the cleaning scope and the cost of supplies. Here is a practical comparison to help you decide.</p>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">Professional vs. DIY bond cleaning at a glance</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-[680px] w-full text-left text-sm">
            <thead className="bg-slate-50 text-[#1b1b3a]"><tr><th className="p-4 font-bold">Factor</th><th className="p-4 font-bold">Professional clean</th><th className="p-4 font-bold">DIY clean</th></tr></thead>
            <tbody>{comparison.map(([factor, professional, diy]) => <tr key={factor} className="border-t border-slate-200 align-top"><th scope="row" className="p-4 font-bold">{factor}</th><td className="p-4 leading-6">{professional}</td><td className="p-4 leading-6">{diy}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-500">Prices and time are indicative only. Get a written quote that lists the property details, inclusions and any add-ons.</p>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">When a professional clean may suit you</h2>
        <p className="mt-4 leading-8">A professional team can be useful when your move-out date is close, the property needs a deep clean, or you would rather focus on packing and handover. Experienced cleaners bring their equipment and work through a defined scope, which can reduce the chance of overlooking less obvious areas.</p>
        <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 marker:text-[#39BDE4]">
          <li><strong>Less time managing the clean:</strong> Ask for an estimated duration and confirm when the property needs to be empty.</li>
          <li><strong>Task-specific equipment:</strong> Check whether oven, carpet, window and pest treatments are included or quoted separately.</li>
          <li><strong>A clear remedy process:</strong> Ask whether the provider offers a re-clean for issues within the agreed scope and how quickly you need to report them.</li>
          <li><strong>One coordinated booking:</strong> If you need carpet cleaning or pest treatment, confirm whether these can be scheduled alongside the bond clean.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">When DIY could work</h2>
        <p className="mt-4 leading-8">Doing the work yourself may suit a smaller, well-maintained property when you have enough time, suitable equipment and confidence using the right products. Start with the property manager’s exit checklist and compare it with your entry condition report. Budget for supplies or equipment hire, and leave time to inspect your work before handing back the keys.</p>
        <p className="mt-4 leading-8">Commonly missed areas include the inside of cupboards, oven racks, rangehood filters, window tracks, skirting boards, light fittings and marks on walls. Carpet steam cleaning or other specialist work may require separate equipment or a qualified provider.</p>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">How to compare the real cost</h2>
        <p className="mt-4 leading-8">A DIY clean is not automatically free: count products, equipment hire and the time you will spend cleaning instead of moving. For a professional quote, provide the number of bedrooms and bathrooms, property condition, inspection date and any extras requested in your tenancy agreement. Compare the written inclusions and re-clean terms, not just the headline price.</p>
        <p className="mt-4 leading-8">Before booking, confirm who handles key collection, whether the home needs to be vacant, and what happens if the agent raises an in-scope cleaning issue. Keep the quote, receipt, checklist and any inspection feedback together.</p>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">Common mistakes that can complicate handover</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 marker:text-[#39BDE4]">
          <li>Using a generic checklist instead of checking the property manager’s requirements and entry report.</li>
          <li>Underestimating how long a detailed clean takes and leaving no time for a final walkthrough.</li>
          <li>Forgetting to confirm whether carpets, balconies, garages, external windows or pest treatment are part of the scope.</li>
          <li>Overlooking high-touch and less visible spots such as switches, tracks, cupboard interiors and skirting boards.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-black text-[#1b1b3a] sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-5 space-y-5">{faqs.map(({ question, answer }) => <section key={question} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-bold text-[#1b1b3a]">{question}</h3><p className="mt-2 leading-7 text-slate-600">{answer}</p></section>)}</div>

        <section className="mt-12 rounded-3xl bg-[#1b1b3a] p-7 text-white sm:p-9">
          <h2 className="text-2xl font-black">Need help with your Gold Coast move-out clean?</h2>
          <p className="mt-3 leading-7 text-white/80">Wave Solution provides bond cleaning and related services across the Gold Coast. Share your property size, suburb and inspection date to request a quote and confirm the scope.</p>
          <Link href="/end-of-lease-cleaning-gold-coast" className="mt-6 inline-flex rounded-full bg-[#39BDE4] px-6 py-3 font-bold text-[#1b1b3a] hover:bg-[#2fb2d8]">Explore bond cleaning</Link>
        </section>
        <AuthorBio />
      </article>
    </main>
  )
}
