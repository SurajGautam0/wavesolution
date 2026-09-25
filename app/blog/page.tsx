"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Bug,
  Home,
  Sparkles,
  Search,
  Clock,
  CheckCircle2,
  FileText,
  ChevronRight,
  Sparkle,
  Calendar,
  Layers,
  Award,
  Flame,
  Filter,
  CheckSquare,
  ShieldCheck,
  PhoneCall,
  Download,
  Mail,
  Check,
  DollarSign
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo, siteLinks } from "@/lib/business-info"

interface Article {
  slug: string
  title: string
  description: string
  category: "house" | "bond" | "commercial" | "pest" | "specialized"
  categoryLabel: string
  readTime: string
  date: string
  featured?: boolean
  popular?: boolean
  icon: typeof Home
  tags: string[]
}

const ALL_ARTICLES: Article[] = [
  {
    slug: "/blog/end-of-lease-cleaning-cost-gold-coast",
    title: "End of Lease Cleaning Cost Gold Coast 2025 — Full Price Guide",
    description:
      "How much does end of lease cleaning cost in Gold Coast? Real 2025 prices by bedroom count, what is included, common add-ons, and how to avoid being overcharged.",
    category: "bond",
    categoryLabel: "Bond & Move-Out",
    readTime: "9 min read",
    date: "September 2025",
    featured: true,
    popular: true,
    icon: DollarSign,
    tags: ["End of Lease", "Pricing Guide", "Gold Coast", "Bond Cleaning"],
  },
  {
    slug: "/blog/bond-cleaning-checklist",
    title: "The Ultimate Bond Cleaning Checklist for Queensland Rentals",
    description:
      "A comprehensive, step-by-step room checklist designed to satisfy strict real estate property managers and secure your 100% bond refund.",
    category: "bond",
    categoryLabel: "Bond & Move-Out",
    readTime: "7 min read",
    date: "March 2024",
    featured: true,
    popular: true,
    icon: Award,
    tags: ["Bond Cleaning", "RTA Queensland", "Checklist", "Deposit Refund"],
  },
  {
    slug: "/blog/cleaning-tips",
    title: "House Cleaning Tips for Gold Coast Homes in Humid Weather",
    description:
      "Practical cleaning habits and preventative maintenance advice for coastal Queensland properties dealing with salt air, dust, and humidity.",
    category: "house",
    categoryLabel: "House Cleaning",
    readTime: "5 min read",
    date: "March 2024",
    popular: true,
    icon: Home,
    tags: ["Home Maintenance", "Humidity", "Gold Coast", "Eco Tips"],
  },
  {
    slug: "/blog/mould-prevention-gold-coast",
    title: "Mould Prevention & Safe Removal in Subtropical Gold Coast",
    description:
      "How to prevent and safely eradicate black mould in bathrooms, ceilings, and wardrobes during humid Queensland wet seasons.",
    category: "specialized",
    categoryLabel: "Specialized Cleaning",
    readTime: "6 min read",
    date: "March 2024",
    popular: true,
    icon: Sparkles,
    tags: ["Mould Prevention", "Indoor Air Quality", "Health", "Humidity"],
  },
  {
    slug: "/blog/end-of-lease-checklist",
    title: "Complete End of Lease Cleaning Checklist for Gold Coast Tenants",
    description:
      "Everything you need to inspect from ovens to window tracks before handing back keys to your landlord or property agent.",
    category: "bond",
    categoryLabel: "Bond & Move-Out",
    readTime: "6 min read",
    date: "February 2024",
    icon: CheckSquare,
    tags: ["End of Lease", "Exit Clean", "Inspection Ready"],
  },
  {
    slug: "/blog/office-cleaning",
    title: "Office Cleaning Best Practices for Healthier Workplaces",
    description:
      "Guidelines for corporate suites, medical practices, and shared commercial spaces to reduce sick days and boost staff productivity.",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    readTime: "5 min read",
    date: "February 2024",
    icon: Building2,
    tags: ["Office Hygiene", "Workplace Clean", "Commercial Sanitization"],
  },
  {
    slug: "/blog/pest-control-guide",
    title: "Gold Coast Pest Control & Household Prevention Guide",
    description:
      "Identify early signs of coastal pests including cockroaches, ants, spiders, and silverfish, and learn preventative home defence strategies.",
    category: "pest",
    categoryLabel: "Pest Control",
    readTime: "6 min read",
    date: "February 2024",
    popular: true,
    icon: Bug,
    tags: ["Pest Prevention", "Cockroaches", "Termites", "Safety"],
  },
  {
    slug: "/blog/eco-friendly",
    title: "Eco-Friendly Cleaning Solutions for Families & Pets",
    description:
      "Non-toxic, plant-based cleaning alternatives that clean effectively without releasing harmful VOCs into your family's living spaces.",
    category: "house",
    categoryLabel: "House Cleaning",
    readTime: "4 min read",
    date: "February 2024",
    icon: Sparkle,
    tags: ["Eco-Friendly", "Pet Safe", "Non-Toxic", "Green Living"],
  },
  {
    slug: "/blog/carpet-cleaning-guide",
    title: "Professional Carpet Steam Cleaning & Stain Extraction Guide",
    description:
      "Why regular hot-water extraction prolongs carpet lifespan, removes embedded allergens, and lifts tough stains in high-traffic zones.",
    category: "specialized",
    categoryLabel: "Specialized Cleaning",
    readTime: "5 min read",
    date: "January 2024",
    icon: Sparkles,
    tags: ["Carpet Care", "Steam Cleaning", "Stain Removal"],
  },
  {
    slug: "/blog/deep-cleaning-guide",
    title: "When and How to Do a Full Property Deep Clean",
    description:
      "The differences between regular maintenance cleans and intensive deep cleans, including appliance detailing, grout scrubbing, and baseboards.",
    category: "house",
    categoryLabel: "House Cleaning",
    readTime: "6 min read",
    date: "January 2024",
    icon: Layers,
    tags: ["Deep Clean", "Spring Cleaning", "Grout Cleaning"],
  },
  {
    slug: "/blog/how-often-house-cleaning",
    title: "How Often Should You Clean Your Home? Weekly vs Fortnightly",
    description:
      "Find the optimal cleaning cadence based on your household size, kids, indoor pets, allergy sensitivities, and lifestyle.",
    category: "house",
    categoryLabel: "House Cleaning",
    readTime: "4 min read",
    date: "January 2024",
    icon: Clock,
    tags: ["Cleaning Schedule", "Housekeeping", "Lifestyle"],
  },
  {
    slug: "/blog/move-out-cleaning-mistakes",
    title: "7 Costly Move-Out Cleaning Mistakes That Risk Your Bond",
    description:
      "Avoid the most common oversights such as dirty rangehood filters, ceiling fan blades, and silicone sealant grime that fail inspections.",
    category: "bond",
    categoryLabel: "Bond & Move-Out",
    readTime: "5 min read",
    date: "January 2024",
    icon: Award,
    tags: ["Bond Mistakes", "Tenant Tips", "Inspection Check"],
  },
  {
    slug: "/blog/commercial-cleaning-benefits",
    title: "Why Professional Commercial Cleaning Drives Business Growth",
    description:
      "How pristine business premises enhance brand perception, customer trust, compliance with Queensland workplace health laws, and staff morale.",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    readTime: "5 min read",
    date: "January 2024",
    icon: Building2,
    tags: ["Business Growth", "Commercial Sanitization", "Customer Perception"],
  },
  {
    slug: "/blog/move-in-cleaning-tips",
    title: "Move-In Cleaning Checklist: How to Reset Your New Property",
    description:
      "Key sanitary touchpoints to disinfect before unpacking boxes into a newly purchased home or rental apartment.",
    category: "house",
    categoryLabel: "House Cleaning",
    readTime: "5 min read",
    date: "December 2023",
    icon: Home,
    tags: ["Move-In", "New Home", "Disinfection"],
  },
  {
    slug: "/blog/office-cleaning-schedule",
    title: "How to Build a High-Standard Office Cleaning Schedule",
    description:
      "A complete daily, weekly, and monthly cleaning task breakdown tailored for busy corporate, medical, and legal workplaces.",
    category: "commercial",
    categoryLabel: "Commercial & Office",
    readTime: "6 min read",
    date: "December 2023",
    icon: Building2,
    tags: ["Office Schedule", "Hygiene Standards", "Facility Management"],
  },
  {
    slug: "/blog/rental-inspection-tips",
    title: "How to Ace Your Routine 3-Month Rental Property Inspection",
    description:
      "Quick 30-minute cleaning priorities to keep your landlord and property agent happy during routine periodic inspections.",
    category: "bond",
    categoryLabel: "Bond & Move-Out",
    readTime: "4 min read",
    date: "December 2023",
    icon: CheckSquare,
    tags: ["Rental Inspection", "Tenant Rights", "Quick Clean"],
  },
  {
    slug: "/blog/after-builders-cleaning-guide",
    title: "After Builders & Renovation Cleaning: Full Dust Extraction Guide",
    description:
      "Techniques and HEPA filtration strategies to completely eliminate abrasive plaster dust, grout haze, and paint splatter after construction.",
    category: "specialized",
    categoryLabel: "Specialized Cleaning",
    readTime: "6 min read",
    date: "November 2023",
    icon: Sparkles,
    tags: ["After Builders", "Post Construction", "HEPA Filtration"],
  },
]

const CONTENT_CLUSTERS = [
  {
    title: "House & Deep Cleaning Hub",
    description: "Guidance on regular maintenance, eco-friendly methods, and seasonal deep cleans for Gold Coast homes.",
    icon: Home,
    href: siteLinks.homeCleaning,
    serviceLabel: "House Cleaning Services",
    topics: [
      { text: "How often house cleaning is needed in humid Gold Coast suburbs", href: "/blog/how-often-house-cleaning" },
      { text: "Regular maintenance vs intensive deep cleaning breakdown", href: "/blog/deep-cleaning-guide" },
      { text: "House cleaning tips and habits for busy families", href: "/blog/cleaning-tips" },
      { text: "Eco-friendly non-toxic solutions safe for pets and children", href: "/blog/eco-friendly" },
    ],
  },
  {
    title: "Bond & End of Lease Hub",
    description: "Official Queensland RTA checklist items and inspection advice to guarantee 100% deposit return.",
    icon: Award,
    href: siteLinks.bondCleaning,
    serviceLabel: "Bond Cleaning Services",
    topics: [
      { text: "Complete bond cleaning checklist for Queensland rentals", href: "/blog/bond-cleaning-checklist" },
      { text: "7 costly move-out cleaning mistakes that risk your deposit", href: "/blog/move-out-cleaning-mistakes" },
      { text: "End of lease cleaning checklist for apartments & homes", href: "/blog/end-of-lease-checklist" },
      { text: "How to pass your routine periodic rental inspection", href: "/blog/rental-inspection-tips" },
    ],
  },
  {
    title: "Commercial & Office Cleaning Hub",
    description: "Hygiene standards, after-hours protocols, and custom schedules for professional workplaces.",
    icon: Building2,
    href: siteLinks.commercialCleaning,
    serviceLabel: "Commercial Cleaning Services",
    topics: [
      { text: "Office cleaning best practices for healthy team environments", href: "/blog/office-cleaning" },
      { text: "Creating a reliable daily and weekly workplace cleaning schedule", href: "/blog/office-cleaning-schedule" },
      { text: "How professional commercial cleaning elevates business growth", href: "/blog/commercial-cleaning-benefits" },
    ],
  },
  {
    title: "Pest Control & Specialized Care Hub",
    description: "Preventative pest barriers, carpet hot-water extraction, and coastal mould remediation.",
    icon: Bug,
    href: siteLinks.pestControl,
    serviceLabel: "Pest Control Services",
    topics: [
      { text: "Gold Coast pest identification & household prevention strategies", href: "/blog/pest-control-guide" },
      { text: "Mould prevention and safe bathroom removal in coastal humidity", href: "/blog/mould-prevention-gold-coast" },
      { text: "Professional carpet steam cleaning and stain removal guide", href: "/blog/carpet-cleaning-guide" },
      { text: "After builders post-construction fine dust extraction guide", href: "/blog/after-builders-cleaning-guide" },
    ],
  },
]

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchCategory =
        activeCategory === "all" || article.category === activeCategory

      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.categoryLabel.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query))

      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  const featuredArticle = ALL_ARTICLES.find((a) => a.featured) || ALL_ARTICLES[0]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubscribed(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1b1b3a] via-[#23234d] to-[#333365] text-white pt-24 pb-20 sm:pt-28 sm:pb-28">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pexels-polina-zimmerman-4008518.jpg"
              alt="Professional cleaning guides and tips"
              fill
              className="object-cover opacity-15"
              priority
              sizes="100vw"
            />
          </div>
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            <div className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-[#39BDE4]/20 blur-[130px]" />
            <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-[#39BDE4]/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#39BDE4_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          </div>

          <div className="classic-container relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs font-medium text-white/60 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-[#39BDE4] font-semibold">
                Cleaning & Pest Control Guides
              </span>
            </nav>

            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-md border border-white/15 shadow-inner">
                <Sparkles className="h-4 w-4 text-[#39BDE4]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                  Gold Coast Cleaning Knowledge Hub
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs font-medium text-white/90">
                  16+ Free Local Guides
                </span>
              </div>

              {/* Main Heading for SEO */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Gold Coast Cleaning &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39BDE4] via-[#6be0ff] to-white">
                  Pest Control Guides
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Practical advice, Queensland RTA bond checklists, coastal mould prevention,
                and office hygiene best practices written specifically for Gold Coast properties.
              </p>

              {/* Instant Search Bar */}
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 16+ guides (e.g. bond checklist, mould, oven, pest)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-4 focus:ring-[#39BDE4]/30 shadow-xl"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article Spotlight Banner */}
        <section className="relative z-20 -mt-8 sm:-mt-12 classic-container">
          <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-100 hover:border-[#39BDE4]/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold border border-amber-200">
                    <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    Editor&apos;s Featured Guide
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#39BDE4]/10 text-[#249FC5] px-3 py-1 rounded-full text-xs font-bold">
                    {featuredArticle.categoryLabel}
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                  <Link
                    href={featuredArticle.slug}
                    className="hover:text-[#249FC5] transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredArticle.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-md shadow-[#39BDE4]/20"
                >
                  <Link href={featuredArticle.slug}>
                    Read Complete Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Visual Quick Checklist Box */}
              <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#23234d] text-white p-6 shadow-inner">
                <div className="flex items-center gap-2 text-[#39BDE4] text-xs font-bold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="h-4 w-4" />
                  Key Checklist Topics
                </div>
                <h3 className="font-bold text-white text-base mb-4">
                  What This Guide Covers:
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#39BDE4] shrink-0 mt-0.5" />
                    <span>Kitchen: Oven interior, rangehood degreasing & splashbacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#39BDE4] shrink-0 mt-0.5" />
                    <span>Bathrooms: Soap scum descaling, grout & exhaust fans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#39BDE4] shrink-0 mt-0.5" />
                    <span>Windows & Tracks: Coastal salt air & sliding track grit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#39BDE4] shrink-0 mt-0.5" />
                    <span>Walls & Skirtings: Spot cleaning scuffs without paint damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Controls & Articles Grid */}
        <section className="py-12 sm:py-16">
          <div className="classic-container">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-1">
                  <Filter className="h-3.5 w-3.5" />
                  Browse by Category
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  All Cleaning & Maintenance Guides
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Showing {filteredArticles.length} of {ALL_ARTICLES.length} published Gold Coast cleaning resources.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 backdrop-blur-sm rounded-2xl mb-8 max-w-fit">
              {[
                { id: "all", label: "All Guides", icon: Sparkles },
                { id: "house", label: "House Cleaning", icon: Home },
                { id: "bond", label: "Bond & Move-Out", icon: Award },
                { id: "commercial", label: "Commercial & Office", icon: Building2 },
                { id: "pest", label: "Pest Control", icon: Bug },
                { id: "specialized", label: "Specialized & Carpet", icon: Sparkle },
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-white text-[#333365] shadow-md shadow-slate-900/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#39BDE4]" : "text-slate-400"}`} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Article Cards Grid */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                <Search className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No guides match your search</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  Try searching with different keywords like &quot;carpet&quot;, &quot;bond&quot;, &quot;office&quot;, or &quot;mould&quot;.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 rounded-xl font-semibold text-xs"
                >
                  View All Guides
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredArticles.map((article) => {
                  const Icon = article.icon
                  return (
                    <Card
                      key={article.slug}
                      className="group flex flex-col justify-between h-full bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                    >
                      <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                        <div>
                          {/* Top Row: Icon + Category + Read Time */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 rounded-xl bg-[#39BDE4]/10 text-[#249FC5] flex items-center justify-center group-hover:bg-[#39BDE4] group-hover:text-white transition-colors">
                                <Icon className="h-5 w-5" />
                              </div>
                              <span className="text-xs font-bold text-[#249FC5] uppercase tracking-wider">
                                {article.categoryLabel}
                              </span>
                            </div>

                            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-[#249FC5] transition-colors">
                            <Link href={article.slug}>{article.title}</Link>
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {article.description}
                          </p>
                        </div>

                        {/* Card Bottom */}
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex flex-wrap items-center gap-1.5 mb-4">
                            {article.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[11px] font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={article.slug}
                            className="inline-flex items-center justify-between w-full text-xs font-bold text-[#333365] group-hover:text-[#249FC5] transition-colors"
                          >
                            <span>Read Full Article</span>
                            <div className="h-7 w-7 rounded-full bg-slate-100 group-hover:bg-[#39BDE4]/15 flex items-center justify-center transition-colors">
                              <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Structured Topical Authority Content Silos */}
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
          <div className="classic-container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-3.5 py-1 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-3">
                <Layers className="h-3.5 w-3.5" />
                Structured Knowledge Silos
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Gold Coast Cleaning Knowledge Clusters
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Explore in-depth topics organized by service category. Each silo links directly to specialized Gold Coast cleaning services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CONTENT_CLUSTERS.map((cluster) => {
                const Icon = cluster.icon
                return (
                  <div
                    key={cluster.title}
                    className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#249FC5]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              {cluster.title}
                            </h3>
                            <p className="text-xs text-slate-500">
                              {cluster.topics.length} In-Depth Articles
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {cluster.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {cluster.topics.map((topic, i) => (
                          <li key={i}>
                            <Link
                              href={topic.href}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#249FC5] transition-colors"
                            >
                              <ChevronRight className="h-4 w-4 text-[#39BDE4] shrink-0 mt-0.5" />
                              <span>{topic.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80">
                      <Link
                        href={cluster.href}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#249FC5] hover:underline"
                      >
                        Explore {cluster.serviceLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Free Checklist Lead Magnet Download */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="classic-container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#23234d] via-[#333365] to-[#1b1b3a] p-8 sm:p-12 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#39BDE4]/20 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[#39BDE4] uppercase tracking-wider mb-4 border border-white/15">
                    <Download className="h-3.5 w-3.5" />
                    Free PDF Guide
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                    Download the 2024 Queensland Bond Cleaning Checklist
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                    Get the exact room-by-room inspection checklist used by Gold Coast real estate property managers to inspect rentals and release full security bonds.
                  </p>

                  {newsletterSubscribed ? (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      Checklist sent! Check your inbox for the download link.
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email address..."
                        className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#39BDE4] flex-1"
                      />
                      <Button
                        type="submit"
                        className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl whitespace-nowrap"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Checklist
                      </Button>
                    </form>
                  )}
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xs text-center">
                    <FileText className="h-12 w-12 text-[#39BDE4] mx-auto mb-3" />
                    <h4 className="font-bold text-white text-base mb-1">RTA-Compliant Template</h4>
                    <p className="text-xs text-white/70">
                      Includes oven detailing, sliding door tracks, bathroom descaling & wall scuff protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-gradient-to-br from-[#333365] to-[#1b1b3a] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39BDE4]/10 rounded-full blur-[140px]" />
          </div>

          <div className="classic-container relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm border border-white/15">
              <Sparkles className="h-4 w-4 text-[#39BDE4]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                Professional Cleaning Support
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Need Professional Cleaners on the Gold Coast?
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              From regular home housekeeping to inspection-ready bond cleans and commercial office sanitization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-xl shadow-[#39BDE4]/20 px-8"
              >
                <Link href={siteLinks.book}>
                  Get a Free Instant Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl px-8"
              >
                <Link href={businessInfo.phoneHref}>
                  <PhoneCall className="mr-2 h-4 w-4 text-[#39BDE4]" />
                  Call {businessInfo.phoneDisplay}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
  )
}
