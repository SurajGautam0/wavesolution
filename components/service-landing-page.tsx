import Image from "next/image"
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
    { href: "/locations/nerang", label: "Nerang" },
    { href: "/locations/burleigh-heads", label: "Burleigh Heads" },
    { href: "/locations/palm-beach", label: "Palm Beach" },
    { href: "/locations/helensvale", label: "Helensvale" },
    { href: "/locations/coomera", label: "Coomera" },
    { href: "/locations/varsity-lakes", label: "Varsity Lakes" },
    { href: "/locations/carrara", label: "Carrara" },
    { href: siteLinks.locations, label: "More Gold Coast Areas" },
  ]
  const relatedArticles = (() => {
    if (page.slug === "office-cleaning-gold-coast" || page.slug === "commercial-cleaning-gold-coast") {
      return [
        {
          href: "/blog/office-cleaning",
          label: "Office Cleaning Guide",
          description: "Helpful advice on cleaning frequency and workplace hygiene planning.",
        },
        {
          href: "/blog/commercial-cleaning-benefits",
          label: "Commercial Cleaning Benefits",
          description: "Why regular commercial cleaning pays off for Gold Coast businesses.",
        },
      ]
    }
    if (page.slug === "bond-cleaning-gold-coast" || page.slug === "end-of-lease-cleaning-gold-coast" || page.slug === "end-of-lease-pest-control-gold-coast" || page.slug === "cleaning-carrara") {
      return [
        {
          href: "/blog/end-of-lease-cleaning-requirements-qld",
          label: "End of Lease Requirements QLD 2026",
          description: "Legal checklist and RTRA Act breakdown every Queensland tenant needs before handing back their keys.",
        },
        {
          href: "/blog/bond-cleaning-checklist",
          label: "Ultimate Bond Cleaning Checklist",
          description: "Room-by-room Queensland rental inspection checklist to guarantee your full deposit refund.",
        },
        {
          href: "/blog/end-of-lease-cleaning-cost-gold-coast",
          label: "End of Lease Cleaning Price Guide",
          description: "Real prices by room count, what is included, add-ons, and how to avoid extra charges.",
        },
      ]
    }
    if (page.slug === "carpet-cleaning-gold-coast") {
      return [
        {
          href: "/blog/carpet-cleaning-guide",
          label: "Gold Coast Carpet Cleaning Guide",
          description: "Steam extraction methods, drying times, and stain removal advice for coastal homes.",
        },
        {
          href: "/blog/cleaning-tips",
          label: "House Cleaning Tips",
          description: "Practical advice for maintaining homes and carpets between deep visits.",
        },
      ]
    }
    if (page.slug === "pest-control-gold-coast") {
      return [
        {
          href: "/blog/pest-control-guide",
          label: "Gold Coast Pest Prevention Guide",
          description: "Effective prevention and treatment for cockroaches, spiders, fleas, and coastal pests.",
        },
        {
          href: "/blog/eco-friendly",
          label: "Eco-Friendly Cleaning & Treatments",
          description: "Safe, family-friendly methods for keeping properties healthy and pest-free.",
        },
      ]
    }
    return [
      {
        href: "/blog/cleaning-tips",
        label: "House Cleaning Tips",
        description: "Practical advice for maintaining homes and rentals between visits.",
      },
      {
        href: "/blog/mould-prevention-gold-coast",
        label: "Mould Prevention & Removal",
        description: "How to prevent and eradicate mould in humid subtropical Gold Coast homes.",
      },
    ]
  })()
  const pricingDetails =
    page.slug === "office-cleaning-gold-coast" || page.slug === "commercial-cleaning-gold-coast"
      ? [
          "Quotes depend on the type of premises, floor area, layout, and the level of daily or weekly usage.",
          "Access timing, after-hours requirements, and agreed cleaning frequency affect the service plan.",
          "Extra hygiene priorities, customer-facing areas, and site-specific requirements can change the scope.",
        ]
      : page.slug === "carpet-cleaning-gold-coast"
        ? [
            "Carpet area, room count, and the level of wear or staining all affect the quote.",
            "Site access, drying expectations, and whether the service is part of a move-out clean can change scope.",
            "Heavier buildup or detail work around edges and high-traffic lanes may require more time and care.",
          ]
        : page.slug === "pest-control-gold-coast"
          ? [
              "Quotes depend on property type, issue details, treatment scope, and site access.",
              "Homes, rentals, and commercial sites can require different treatment planning and follow-up support.",
              "The more clearly the issue is described up front, the faster we can recommend the right next step.",
            ]
          : [
              "Property size, room count, and the level of detail needed are the biggest quote drivers.",
              "Move-out, move-in, renovation, or heavier buildup can increase the scope compared with standard maintenance cleaning.",
              "Access timing, urgency, optional extras, and whether the service is one-off or recurring also affect pricing.",
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
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-service.jpg"
            alt={`${page.heroTitle} by Wave Solution Gold Coast`}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover"
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="classic-container relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              <Link href={siteLinks.home} className="transition-colors hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href={siteLinks.services} className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-[#39BDE4]">{page.shortLabel}</span>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <MapPin className="h-4 w-4 text-[#39BDE4]" />
              {page.heroEyebrow}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">{page.heroTitle}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{page.heroDescription}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-[#39BDE4] px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 hover:bg-[#249FC5]">
                <Link href={siteLinks.book}>
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/25 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/20 hover:text-white">
                <Link href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {businessInfo.phoneDisplay}
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {["Fully insured", "Police-checked", "4.9★ Google rating"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <CheckCircle className="h-3.5 w-3.5 text-[#39BDE4]" />
                  {badge}
                </span>
              ))}
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
              <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">What's Included in Your Clean</p>
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
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Why Choose Wave Solution</p>
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

      <section className="bg-[#F3F3F3] py-14 md:py-20">
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
          <div className="mb-10 rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-primary">Pricing Guide for {page.shortLabel}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We use tailored quotes because cleaning and pest-control needs vary by property, condition, timing, and service scope. The most accurate pricing comes from a quick local quote, but these are the main factors that shape the estimate.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pricingDetails.map((detail) => (
                <div key={detail} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-sm leading-7 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-[#F3F3F3] p-8 shadow-sm sm:p-10">
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

      <section className="bg-[#F3F3F3] py-14 md:py-20">
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
            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7 shadow-sm">
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

            <div className="rounded-[2rem] border border-slate-200 bg-[#F3F3F3] p-7 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight text-primary">Helpful Reading</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Browse our blog hub and supporting articles for practical advice that helps customers understand scope, maintenance, and the right service for their property.
              </p>
              <div className="mt-6 space-y-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block rounded-[1.25rem] border border-slate-200 bg-white p-4 transition-colors hover:border-primary/20 hover:bg-[#F3F3F3]"
                  >
                    <p className="text-sm font-bold text-primary">{article.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{article.description}</p>
                  </Link>
                ))}
                <Link
                  href={siteLinks.blog}
                  className="block rounded-[1.25rem] border border-slate-200 bg-white p-4 transition-colors hover:border-primary/20 hover:bg-[#F3F3F3]"
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
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90 shadow-lg shadow-black/20">
                <Link href={siteLinks.book}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/20 hover:text-white">
                <a href={businessInfo.phoneHref} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
