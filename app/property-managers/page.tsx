import type { Metadata } from "next"
import Link from "next/link"
import { businessInfo } from "@/lib/business-info"

const pageUrl = `${businessInfo.baseUrl}/property-managers`

export const metadata: Metadata = {
  title: "Cleaning for Property Managers | Gold Coast | Wave Solution",
  description: "Arrange bond cleaning, carpet steam cleaning and pest treatment for Gold Coast rental handovers. Request a written, itemised quote.",
  alternates: { canonical: pageUrl },
}

const faqs = [
  { q: "What services can agencies request?", a: "Agencies can request bond or end-of-lease cleaning from $250, carpet hot-water extraction from $150, pest treatment, or a combined booking. Pest treatment is completed after cleaning and carpet work." },
  { q: "Can you work to an inspection date?", a: "Share the inspection date and the requested scope when you enquire. We will confirm availability and the proposed schedule before you book." },
  { q: "How do you handle keys and access?", a: "Tell us the access method, key collection or return instructions, building rules and any contact person. We will agree the access arrangements with you before the appointment." },
  { q: "What documents can you provide?", a: "We confirm the documents available for the requested service when quoting. A pest treatment receipt can be requested for the handover." },
  { q: "How do agencies request a quote?", a: "Send the property suburb, size, required services, inspection date and any scope or access notes through the quote form, by phone or by WhatsApp. We confirm the itemised scope and price in writing before booking." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
}

export default function PropertyManagersPage() {
  return <main className="min-h-screen bg-white text-slate-700">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="bg-secondary py-20 text-white"><div className="classic-container max-w-5xl">
      <p className="text-sm font-bold uppercase tracking-widest text-[#39BDE4]">Rental handovers · Gold Coast</p>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">Cleaning support for Gold Coast property managers</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">Arrange bond cleaning, carpet hot-water extraction and pest treatment for rental handovers. Share the property scope, access details and inspection date, and we will confirm a written quote and schedule.</p>
      <div className="mt-8 flex flex-wrap gap-4"><a className="rounded-full bg-[#39BDE4] px-6 py-3 font-bold text-secondary" href={businessInfo.phoneHref}>Call {businessInfo.phoneDisplay}</a><a className="rounded-full border border-white/30 px-6 py-3 font-bold text-white" href="https://wa.me/61450833683">WhatsApp</a><Link className="rounded-full border border-white/30 px-6 py-3 font-bold text-white" href="/book">Request a quote</Link></div>
    </div></section>
    <section className="classic-container grid gap-12 py-16 lg:grid-cols-2">
      <div><h2 className="text-2xl font-black text-primary">Handover services</h2><ul className="mt-5 list-disc space-y-3 pl-6 leading-7"><li>Bond and end-of-lease cleaning, from $250.</li><li>Carpet cleaning by hot-water extraction, from $150; drying time varies.</li><li>Pest treatment, quoted for the property and required scope.</li><li>Combined bond clean, carpet and pest booking, completed in this order: clean, carpet, pest. Ask for a pest treatment receipt for the inspection.</li></ul>
      <h2 className="mt-10 text-2xl font-black text-primary">Access, keys and inspection dates</h2><p className="mt-4 leading-7">Include the inspection date, access method, key collection or return instructions, building access rules and a contact person in your enquiry. We will agree the arrangements and confirm availability and timing before the booking is accepted.</p></div>
      <div><h2 className="text-2xl font-black text-primary">Scope, documents and quote process</h2><p className="mt-4 leading-7">Send the property address or suburb, bedroom and bathroom count, requested services, any inspection notes and access information. We will confirm an itemised scope and final price in writing before booking.</p><p className="mt-4 leading-7">Tell us which handover documents you need. We will confirm what is available for the selected work before it is booked. Pest treatment receipt can be requested for the inspection.</p>
      <h2 className="mt-10 text-2xl font-black text-primary">Frequently asked questions</h2><div className="mt-5 space-y-5">{faqs.map(({ q, a }) => <article key={q}><h3 className="font-bold text-primary">{q}</h3><p className="mt-2 leading-7">{a}</p></article>)}</div></div>
    </section>
  </main>
}
