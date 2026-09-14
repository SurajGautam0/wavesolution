import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Building2, Bug, Home, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { businessInfo, siteLinks } from "@/lib/business-info"

const featuredArticles = [
  {
    href: "/blog/cleaning-tips",
    title: "House Cleaning Tips for Gold Coast Homes",
    description:
      "Practical cleaning advice for busy households that want a cleaner, easier-to-manage home between professional visits.",
    label: "House Cleaning",
    icon: Home,
  },
  {
    href: "/blog/eco-friendly",
    title: "Eco-Friendly Cleaning Solutions",
    description:
      "A greener approach to cleaning products, methods, and indoor hygiene for families, pets, and sensitive homes.",
    label: "Eco-Friendly Cleaning",
    icon: Sparkles,
  },
  {
    href: "/blog/office-cleaning",
    title: "Office Cleaning Best Practices",
    description:
      "Helpful guidance for Gold Coast workplaces that need more consistent hygiene, presentation, and cleaning schedules.",
    label: "Commercial Cleaning",
    icon: Building2,
  },
]

const contentClusters = [
  {
    title: "House Cleaning Cluster",
    icon: Home,
    topics: [
      "How often house cleaning is needed in humid Gold Coast suburbs",
      "Regular cleaning vs deep cleaning for family homes and apartments",
      "Preparing your home before a cleaner arrives",
      "Coastal mould and moisture cleaning advice for local households",
    ],
  },
  {
    title: "Bond Cleaning Cluster",
    icon: BookOpen,
    topics: [
      "Bond cleaning checklist for Queensland rental properties",
      "How to improve your chances of getting the full bond back",
      "Common move-out cleaning mistakes that affect inspections",
      "Inspection-day cleaning timeline for Gold Coast rentals",
    ],
  },
  {
    title: "Commercial Cleaning Cluster",
    icon: Building2,
    topics: [
      "How often offices should be professionally cleaned",
      "Commercial cleaning schedules for retail and customer-facing sites",
      "Office hygiene standards and shared-space cleaning priorities",
      "Eco-friendly workplace cleaning for local businesses",
    ],
  },
  {
    title: "Pest Control Cluster",
    icon: Bug,
    topics: [
      "Common pests in Gold Coast homes and how to spot early signs",
      "Cockroach prevention in warm and humid properties",
      "How often pest treatment may be needed in coastal suburbs",
      "Pre-settlement and rental pest concerns to prepare for",
    ],
  },
]

export const metadata: Metadata = {
  title: "Gold Coast Cleaning Blog | Local Guides for Homes, Rentals and Businesses",
  description:
    "Explore Wave Solution's Gold Coast blog for helpful cleaning, rental, commercial, and pest-control advice written for local homes and businesses.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/blog`,
  },
  openGraph: {
    title: "Gold Coast Cleaning Blog | Local Guides for Homes, Rentals and Businesses",
    description:
      "Explore Wave Solution's Gold Coast blog for helpful cleaning, rental, commercial, and pest-control advice written for local homes and businesses.",
    url: `${businessInfo.baseUrl}/blog`,
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning blog Gold Coast" }],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wavesolution.com.au/blog" },
  ],
}

export default function BlogHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="classic-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary">Helpful Local Advice</p>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Gold Coast Cleaning and Pest Control Guides
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
              This blog hub is where Wave Solution builds long-term topical authority with useful content for Gold Coast households, rental properties, offices, and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary">Featured Guides</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Each article is designed to answer a real customer question, support a core service page, and make the next step easier for Gold Coast visitors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <article.icon className="h-8 w-8 text-secondary" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-secondary">{article.label}</p>
                <h3 className="mt-3 text-xl font-black tracking-tight text-primary">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{article.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="classic-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-primary">Planned Content Clusters</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The strongest local SEO content strategy is built around clear silos. These clusters give Wave Solution room to answer more Gold Coast questions without publishing thin or duplicate pages.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {contentClusters.map((cluster) => (
              <article key={cluster.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <cluster.icon className="h-8 w-8 text-secondary" />
                <h3 className="mt-4 text-2xl font-black tracking-tight text-primary">{cluster.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {cluster.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="rounded-[2.5rem] border border-slate-200 bg-primary p-8 text-center text-white shadow-xl sm:p-12">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Need Help With a Gold Coast Property Now?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75">
              If you already know what you need, move straight to the right service page or request a fast local quote for your home, rental property, office, or business.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                <Link href={siteLinks.services}>View Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
                <Link href={siteLinks.book}>Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
