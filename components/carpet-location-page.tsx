import Link from "next/link"
import { businessInfo, siteLinks } from "@/lib/business-info"

export type CarpetLocationContent = {
  suburb: string
  slug: string
  title: string
  description: string
  intro: [string, string]
  localSections: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
}

export function CarpetLocationPage({ page }: { page: CarpetLocationContent }) {
  const pageUrl = `${businessInfo.baseUrl}/carpet-cleaning-${page.slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${businessInfo.baseUrl}/#business`,
        name: businessInfo.businessNameWithLocation,
        url: businessInfo.baseUrl,
        telephone: businessInfo.phoneE164,
        areaServed: {
          "@type": "City",
          name: page.suburb,
          containedInPlace: { "@type": "State", name: "Queensland" },
        },
      },
      {
        "@type": "Service",
        name: `Carpet cleaning in ${page.suburb}`,
        serviceType: "Carpet cleaning",
        provider: { "@id": `${businessInfo.baseUrl}/#business` },
        areaServed: { "@type": "City", name: page.suburb },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  return (
    <main className="bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">Gold Coast carpet cleaning</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Carpet Cleaning {page.suburb}</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-white/80">
            {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white" href={siteLinks.book}>Get a carpet cleaning quote</Link>
            <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white" href={businessInfo.phoneHref}>Call {businessInfo.phoneDisplay}</a>
            <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white" href="https://wa.me/61450833683">WhatsApp</a>
          </div>
        </div>
      </section>

      <div className="classic-container max-w-5xl space-y-14 py-14 md:py-20">
        <section>
          <h2 className="text-3xl font-black text-primary">Our carpet cleaning method</h2>
          <p className="mt-4 leading-8">We clean carpets using hot-water extraction. First we check the carpet type, condition and areas you want treated, because not every fibre suits the same process. Drying time varies with fibre, airflow, humidity and the amount of moisture used. We’ll explain the expected care and drying guidance for your property when we quote.</p>
        </section>

        <section>
          <h2 className="text-3xl font-black text-primary">What we clean</h2>
          <p className="mt-4 leading-8">Carpeted rooms, hallways and stairs can be included in your quote. Tell us about stains, pet accidents, odours or heavily used paths so we can discuss the right scope. We’ll identify what is included in writing before you book, so you know which rooms and items are covered and whether a specialist treatment is needed.</p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <h2 className="text-3xl font-black text-primary">Price</h2>
          <p className="mt-4 leading-8">Carpet cleaning in {page.suburb} starts from $150. The quote depends on the number and size of rooms, carpet condition, access and any stain or odour work requested. Share the property details and preferred date through our <Link className="font-bold text-primary underline" href={siteLinks.book}>online quote form</Link>, call us or message us on WhatsApp. We confirm the scope and price before the booking is accepted.</p>
        </section>

        {page.localSections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-3xl font-black text-primary">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-8">{paragraph}</p>)}
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-black text-primary">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <nav aria-label="Related services" className="flex flex-wrap gap-3 border-t border-slate-200 pt-7 text-sm font-semibold">
          <Link className="text-primary underline" href={`/locations/${page.slug}`}>Cleaning services in {page.suburb}</Link>
          <Link className="text-primary underline" href={page.slug === "hope-island" ? siteLinks.pestControl : `/pest-control-gold-coast/${page.slug}`}>{page.slug === "hope-island" ? "Pest control Gold Coast" : `Pest control in ${page.suburb}`}</Link>
          <Link className="text-primary underline" href={siteLinks.bondCleaning}>Bond cleaning Gold Coast</Link>
          <Link className="text-primary underline" href={siteLinks.carpetCleaning}>Carpet cleaning Gold Coast</Link>
        </nav>

        <section className="rounded-3xl bg-primary p-8 text-center text-white">
          <h2 className="text-3xl font-black">Need carpet cleaning in {page.suburb}?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/80">Tell us which rooms need attention and when you need the work done. We’ll confirm the method, scope and price before you book.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link className="rounded-full bg-secondary px-6 py-3 text-sm font-bold" href={siteLinks.book}>Request a quote</Link>
            <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold" href={businessInfo.phoneHref}>Call {businessInfo.phoneDisplay}</a>
            <a className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold" href="https://wa.me/61450833683">WhatsApp us</a>
          </div>
        </section>
      </div>
    </main>
  )
}
