import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, Phone } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const url = `${businessInfo.baseUrl}/blog/end-of-lease-pest-control-gold-coast`
const title = "End of Lease Pest Control Gold Coast | Tenant Guide"
const description = "Do you need pest control when leaving a Gold Coast rental? Check your entry report, lease terms and treatment timing before you book."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
}

const faqs = [
  {
    question: "Is end-of-lease pest control always required in Queensland?",
    answer: "No blanket answer applies to every tenancy. Check the entry condition report, the condition at the start, your agreement and any applicable pet terms. The Queensland RTA explains the circumstances and examples.",
  },
  {
    question: "When should pest treatment happen during a bond clean?",
    answer: "For a combined booking, Wave Solution schedules the bond clean first, carpet hot-water extraction second and pest treatment last. The treatment receipt needs to be current for the inspection, so share the inspection date when requesting a quote.",
  },
  {
    question: "Can pest treatment be booked with bond and carpet cleaning?",
    answer: "Yes. Bond cleaning starts from $250 and carpet hot-water extraction starts from $150. Pest treatment is quoted separately for the property and requested scope; the full itemised quote is confirmed in writing before booking.",
  },
  {
    question: "What should I prepare before pest treatment?",
    answer: "Preparation depends on the product and treatment scope. Wave Solution provides the relevant preparation and re-entry guidance before the job.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.baseUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${businessInfo.baseUrl}/blog` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
    {
      "@type": "Article",
      headline: title,
      description,
      datePublished: "2026-10-19",
      dateModified: "2026-10-19",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      publisher: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      image: `${businessInfo.baseUrl}/gold-coast-cleaning-services.jpeg`,
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

export default function EndOfLeasePestControlGoldCoastPost() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-secondary py-14 text-white md:py-20">
        <div className="classic-container max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/">Home</Link><ChevronRight className="h-4 w-4" /><Link href="/blog">Blog</Link><ChevronRight className="h-4 w-4" /><span>End-of-lease pest control</span>
          </nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#39BDE4]">Gold Coast rental handover guide</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">End-of-lease pest control on the Gold Coast: what tenants should check</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">A pest treatment is not automatically required at every move-out. Start with the property’s condition report and your tenancy terms, then plan the work around the inspection date if treatment is required.</p>
        </div>
      </section>

      <article className="classic-container grid max-w-6xl gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary">
          <p className="lead">If your property manager has asked for end-of-lease pest control, check the request against your rental records before you book. Your entry condition report, the property’s starting condition and any relevant agreement terms help show what needs to be done.</p>

          <h2>Is pest control required when you leave a Queensland rental?</h2>
          <p>There is no one rule that makes every tenant arrange a professional pest treatment at the end of a tenancy. The Queensland Residential Tenancies Authority (RTA) says a tenant must return the property in the same condition it was in at the start, allowing for fair wear and tear. The RTA also explains that an owner or property manager cannot require a tenant to leave the property in better condition than it was at the beginning.</p>
          <p>That means the details matter. Compare the entry condition report with the property’s current condition. Check any special terms in your agreement and any relevant conditions attached to pet approval. If the request is unclear, ask the property manager to explain which term or starting condition it relates to. For the official guidance and examples, read the <a href="https://www.rta.qld.gov.au/pests" target="_blank" rel="noreferrer">RTA’s page on carpet cleaning and pest control</a>.</p>
          <p>This article is general information, not a decision about your tenancy. For a dispute or unclear requirement, contact the RTA or get independent tenancy advice.</p>

          <h2>What to check before you book</h2>
          <ol>
            <li><strong>Read the entry condition report.</strong> Note any pest concerns recorded when you moved in and whether treatment is mentioned.</li>
            <li><strong>Check the agreement and pet terms.</strong> Look for specific written conditions that apply to your tenancy. Do not assume that a request applies to every property.</li>
            <li><strong>Ask what proof the agent needs.</strong> Confirm whether a treatment receipt is required and the date by which it must be current for inspection.</li>
            <li><strong>Share the handover details.</strong> Tell the provider the suburb, property type, issue, access instructions and inspection date so the scope and timing can be checked.</li>
          </ol>

          <h2>Plan bond cleaning, carpets and pest treatment in order</h2>
          <p>If you need all three services, sequence them so one job does not undo the previous one: complete the bond clean first, carpet hot-water extraction second, and pest treatment last. The treatment receipt should be current at the inspection, so include that date when arranging the schedule.</p>
          <p>Carpet extraction can leave moisture in the fibres. Drying time varies with carpet type, airflow, humidity and the amount of moisture used, so leave suitable time before the inspection and follow the care guidance provided for the job.</p>
          <p>Wave Solution’s bond cleaning starts from $250 and carpet hot-water extraction starts from $150. Pest treatment is quoted for the property and agreed treatment scope. A final itemised quote is confirmed in writing before booking; the pest-treatment price is not included in the two cleaning starting prices.</p>

          <h2>What happens before pest treatment?</h2>
          <p>Before treatment, the provider should explain the agreed scope and the preparation and re-entry guidance that applies to the products used. Wave Solution provides this guidance before the job. Follow the instructions for the specific treatment and ask about anything you are unsure of before the technician starts.</p>
          <p>Keep the receipt with your handover records if your agent has requested proof. Confirm the receipt date is suitable for the inspection before you book. Do not rely on a general pest treatment article to determine what your individual lease requires.</p>

          <h2>Get a quote for an end-of-lease booking</h2>
          <p>To request a Gold Coast quote, provide your suburb, property size, required services, inspection date and any access notes. Wave Solution can quote the bond clean, carpet work and pest treatment together, with each service and price shown in the written scope.</p>
          <p>See the <Link href="/bond-pest-carpet-end-of-lease">bond, carpet and pest booking details</Link>, read the <Link href="/bond-cleaning-gold-coast">bond cleaning service scope</Link>, or <Link href="/pest-control-gold-coast">request a pest treatment quote</Link>.</p>

          <h2>Frequently asked questions</h2>
          {faqs.map(({ question, answer }) => <section key={question}><h3>{question}</h3><p>{answer}</p></section>)}
        </div>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
          <h2 className="text-xl font-black text-primary">Need a hand with the handover?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Share the suburb, property size and inspection date for a written quote covering the agreed work.</p>
          <div className="mt-5 flex flex-col gap-3"><Link href="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white">Request a quote <ArrowRight className="h-4 w-4" /></Link><a href={businessInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-primary"><Phone className="h-4 w-4" />{businessInfo.phoneDisplay}</a></div>
        </aside>
      </article>
    </main>
  )
}
