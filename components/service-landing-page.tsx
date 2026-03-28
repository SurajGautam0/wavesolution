import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"
import { getServicePage, type ServicePage } from "@/lib/service-pages"

type ServiceLandingPageProps = {
  page: ServicePage
}

export function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const pageUrl = `${businessInfo.baseUrl}/${page.slug}`
  const relatedPages = page.relatedSlugs
    .map((slug) => getServicePage(slug))
    .filter((entry): entry is ServicePage => Boolean(entry))
  const nearbyLocations = [
    { href: "/locations/southport", label: "Southport" },
    { href: "/locations/robina", label: "Robina" },
    { href: "/locations/surfers-paradise", label: "Surfers Paradise" },
    { href: "/locations/broadbeach", label: "Broadbeach" },
    { href: siteLinks.locations, label: "More Gold Coast Areas" },
  ]
  const relatedArticles =
    page.slug === "office-cleaning-gold-coast" || page.slug === "commercial-cleaning-gold-coast"
      ? [
          {
            href: "/blog/office-cleaning",
            label: "Office Cleaning Guide",
            description: "Helpful advice on cleaning frequency and workplace hygiene planning.",
          },
          {
            href: "/blog/eco-friendly",
            label: "Eco-Friendly Cleaning",
            description: "Green cleaning methods for businesses and sensitive work environments.",
          },
        ]
      : [
          {
            href: "/blog/cleaning-tips",
            label: "House Cleaning Tips",
            description: "Practical advice for maintaining homes and rentals between visits.",
          },
          {
            href: "/blog/eco-friendly",
            label: "Eco-Friendly Cleaning",
            description: "Non-toxic product ideas and green cleaning habits for Gold Coast properties.",
          },
        ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: businessInfo.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.shortLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: page.heroTitle,
        serviceType: page.shortLabel,
        description: page.metaDescription,
        areaServed: businessInfo.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
          containedInPlace: {
            "@type": "State",
            name: "Queensland",
          },
        })),
        provider: {
          "@id": `${businessInfo.baseUrl}/#business`,
        },
        url: pageUrl,
        telephone: businessInfo.phoneE164,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em]">
              <MapPin className="h-4 w-4 text-secondary" />
              {page.heroEyebrow}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              <Link href={siteLinks.home} className="transition-colors hover:text-secondary">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{page.shortLabel}</span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">{page.heroTitle}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{page.heroDescription}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                    <Link href={siteLinks.book}>
                      Get Free Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                    <Link href={businessInfo.phoneHref}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Why This Page Matters</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                  {page.keywords.slice(0, 3).map((keyword) => (
                    <li key={keyword} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>{keyword}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  We service homes and businesses across {businessInfo.serviceAreas.slice(0, 4).join(", ")} and surrounding Gold Coast suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-6">
              {page.overview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Included Support</p>
                <ul className="mt-4 space-y-3">
                  {page.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Local Trust Signals</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                  {page.whyChooseUs.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-8">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <h2 className="text-2xl font-black tracking-tight text-primary">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-primary">Helpful Internal Links</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              If you are comparing{" "}
              <Link href="/cleaning-gold-coast" className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                cleaning Gold Coast
              </Link>{" "}
              providers, need{" "}
              <Link href={siteLinks.contact} className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                professional cleaners Gold Coast
              </Link>{" "}
              homes and businesses can contact directly, or are looking for{" "}
              <Link href="/house-cleaning-gold-coast" className="font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline">
                local house cleaners
              </Link>
              , these pages will help you compare the right service before booking.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/${relatedPage.slug}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{relatedPage.shortLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{relatedPage.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-primary">Frequently Asked Questions</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Answers to common questions about {page.shortLabel.toLowerCase()}, quoting, service scope, and local Gold Coast bookings.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight text-primary">Nearby Gold Coast Areas</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We regularly support homes, rentals, and businesses across nearby suburbs, and these local pages help reinforce suburb relevance without relying on duplicate templates.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {nearbyLocations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/20 hover:text-secondary"
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight text-primary">Helpful Reading</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Browse our blog hub and supporting articles for practical advice that helps customers understand scope, maintenance, and the right service for their property.
              </p>
              <div className="mt-6 space-y-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block rounded-[1.25rem] border border-slate-200 bg-white p-4 transition-colors hover:border-primary/20 hover:bg-slate-50"
                  >
                    <p className="text-sm font-bold text-primary">{article.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{article.description}</p>
                  </Link>
                ))}
                <Link
                  href={siteLinks.blog}
                  className="block rounded-[1.25rem] border border-slate-200 bg-white p-4 transition-colors hover:border-primary/20 hover:bg-slate-50"
                >
                  <p className="text-sm font-bold text-primary">Gold Coast Blog Hub</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Explore Wave Solution's growing cluster of local cleaning, rental, commercial, and pest-control guides.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to Book {page.shortLabel}?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Tell us what needs cleaning, where the property is located, and when you would like the service. We will help you choose the right scope and provide a fast local quote.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-950 hover:bg-secondary/90">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={siteLinks.contact}>Book Local Cleaner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
