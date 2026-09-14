import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "How Often Should You Get Your House Professionally Cleaned? | Gold Coast Guide",
  description:
    "Find out how often Gold Coast homes should be professionally cleaned based on your household size, lifestyle, and property type. Practical guidance from local cleaners.",
  keywords: [
    "how often house cleaning Gold Coast",
    "house cleaning frequency",
    "how often professional cleaning",
    "weekly vs fortnightly cleaning",
    "cleaning schedule Gold Coast",
  ],
  alternates: {
    canonical: "https://www.wavesolution.com.au/blog/how-often-house-cleaning",
  },
  openGraph: {
    title: "How Often Should You Get Your House Professionally Cleaned?",
    description: "Practical guide to house cleaning frequency for Gold Coast homes. Weekly, fortnightly, or one-off — what's right for you.",
    url: "https://www.wavesolution.com.au/blog/how-often-house-cleaning",
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
        { "@type": "ListItem", position: 3, name: "How Often House Cleaning", item: "https://www.wavesolution.com.au/blog/how-often-house-cleaning" },
      ],
    },
    {
      "@type": "Article",
      headline: "How Often Should You Get Your House Professionally Cleaned?",
      author: { "@type": "Organization", name: "Wave Solution Cleaning", url: "https://www.wavesolution.com.au" },
      publisher: { "@type": "Organization", name: "Wave Solution Cleaning Gold Coast", url: "https://www.wavesolution.com.au" },
      datePublished: "2025-02-10",
      dateModified: "2025-02-10",
      image: "https://www.wavesolution.com.au/gold-coast-cleaning-services.jpeg",
      url: "https://www.wavesolution.com.au/blog/how-often-house-cleaning",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often should a house be professionally cleaned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Gold Coast households benefit from fortnightly professional cleaning. Busy families or households with pets or allergies often prefer weekly. Single occupants or minimalist households may find monthly sufficient.",
          },
        },
        {
          "@type": "Question",
          name: "Is weekly or fortnightly cleaning better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Weekly cleaning keeps the home in consistently better condition and reduces the time needed per visit. Fortnightly cleaning is more cost-effective for households that maintain tidiness between visits.",
          },
        },
        {
          "@type": "Question",
          name: "How much does regular house cleaning cost in the Gold Coast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular house cleaning in the Gold Coast starts from $120 per session for a standard clean. Larger homes or more detailed requirements will cost more. Contact Wave Solution for a tailored quote.",
          },
        },
      ],
    },
  ],
}

const frequencyGuide = [
  {
    frequency: "Weekly",
    bestFor: "Families with young children, households with pets, allergy sufferers, or anyone with high-traffic living areas",
    benefits: [
      "Home stays consistently clean and easier to manage",
      "Less buildup between visits means each clean takes less time",
      "Better for allergy and asthma management — dust and pet dander controlled more regularly",
      "Kitchen and bathrooms remain hygienically clean",
    ],
    considerations: "Higher monthly cost, but lower per-session effort required from the cleaner.",
  },
  {
    frequency: "Fortnightly",
    bestFor: "Working couples, moderate-sized households, or homes with good day-to-day tidiness habits",
    benefits: [
      "Good balance between cleanliness and cost",
      "Most popular choice for Gold Coast households",
      "Maintains a consistently presentable home",
      "Sufficient for properties without heavy pet or child traffic",
    ],
    considerations: "Some buildup between visits, especially in kitchens and bathrooms.",
  },
  {
    frequency: "Monthly",
    bestFor: "Single occupants, minimalist households, holiday homes, or investment properties between tenancies",
    benefits: [
      "Most cost-effective option",
      "Good for properties with low daily traffic",
      "Useful maintenance clean for holiday or investment properties",
    ],
    considerations: "More buildup between visits means each clean takes longer and may cost more.",
  },
  {
    frequency: "One-Off",
    bestFor: "Pre-sale preparation, before or after guests, post-renovation, spring cleaning, or move-in/move-out",
    benefits: [
      "No ongoing commitment",
      "Ideal for specific occasions or seasonal resets",
      "Good starting point before beginning a regular schedule",
    ],
    considerations: "First visit often takes longer as there is more to address.",
  },
]

export default function HowOftenHouseCleaningPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="classic-container relative">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Cleaning Frequency</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-secondary mb-4">House Cleaning Guide</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              How Often Should You Get Your House Professionally Cleaned?
            </h1>
            <p className="text-lg text-white/75 leading-8 mb-8">
              A practical guide for Gold Coast households to find the right cleaning frequency based on your lifestyle, property, and household type.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span>Updated February 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="classic-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">The Short Answer</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  For most Gold Coast households, <strong>fortnightly professional cleaning</strong> is the right balance between cost, convenience, and cleanliness. Weekly cleaning is better for busy families or homes with pets. Monthly cleaning works well for smaller households with minimal traffic. One-off cleans suit specific occasions.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  The right answer depends on your household size, lifestyle, the type of property, and how much cleaning you do between professional visits. The guide below walks through each scenario.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-6">Cleaning Frequency Guide</h2>
                <div className="space-y-6">
                  {frequencyGuide.map((option) => (
                    <div key={option.frequency} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="rounded-full bg-primary px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white">{option.frequency}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-700 mb-3">Best for: {option.bestFor}</p>
                      <ul className="space-y-2 mb-3">
                        {option.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm leading-7 text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-slate-500 italic">{option.considerations}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">Gold Coast-Specific Considerations</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p><strong className="text-slate-800">Humidity and mould.</strong> Gold Coast's warm, humid climate means bathrooms and laundries are more prone to mould and mildew than in drier parts of Australia. More frequent cleaning helps keep moisture-related buildup under control.</p>
                  <p><strong className="text-slate-800">Sand and coastal dust.</strong> Homes near the beach or in coastal suburbs can accumulate sand and fine dust much faster than inland properties. Weekly or fortnightly cleaning is especially practical for these locations.</p>
                  <p><strong className="text-slate-800">Holiday and Airbnb properties.</strong> Short-term rental properties on the Gold Coast need cleaning between every guest stay. This is typically a turnaround clean rather than a deep clean, but frequency is dictated entirely by booking patterns.</p>
                  <p><strong className="text-slate-800">High-rise apartments.</strong> Apartments in Surfers Paradise, Broadbeach, and other high-density areas often need kitchen and bathroom attention more regularly due to compact layouts and heavy daily use.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">When to Book a One-Off Deep Clean</h2>
                <p className="text-base leading-8 text-slate-600 mb-4">
                  Even households on a regular cleaning schedule benefit from an occasional deep clean — a more thorough service that addresses the areas standard maintenance cleaning doesn't reach in detail. Consider a deep clean:
                </p>
                <ul className="space-y-3">
                  {[
                    "Before moving into a new property",
                    "After a long period without professional cleaning",
                    "Before selling or listing for rent",
                    "After renovation work",
                    "Seasonally — at least once a year for most properties",
                    "Before or after major events or extended guests",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary mb-4">What to Expect on a First Visit</h2>
                <p className="text-base leading-8 text-slate-600">
                  If a property hasn't been professionally cleaned in a while, the first visit will take longer than subsequent sessions. There is more buildup to address, and the cleaner needs to bring the property up to a higher baseline before the regular schedule can begin. After the first visit, subsequent cleans become faster and more efficient. This is worth factoring into both your budget and your expectations for the initial clean.
                </p>
              </div>

            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-primary p-6 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Book House Cleaning</p>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  Wave Solution provides weekly, fortnightly, and one-off house cleaning across the Gold Coast.
                </p>
                <Button asChild className="mt-5 w-full h-11 rounded-full bg-secondary text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                  <Link href="/house-cleaning-gold-coast">View House Cleaning</Link>
                </Button>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Related Articles</p>
                <ul className="mt-4 space-y-3">
                  <li><Link href="/blog/cleaning-tips" className="text-sm font-semibold text-primary hover:text-secondary">House Cleaning Tips →</Link></li>
                  <li><Link href="/blog/deep-cleaning-guide" className="text-sm font-semibold text-primary hover:text-secondary">When to Book a Deep Clean →</Link></li>
                  <li><Link href="/blog/mould-prevention-gold-coast" className="text-sm font-semibold text-primary hover:text-secondary">Mould Prevention Guide →</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="classic-container text-center">
          <h2 className="text-3xl font-black tracking-tight">Get a Fast Quote for House Cleaning</h2>
          <p className="mt-4 text-base leading-8 text-white/75 max-w-2xl mx-auto">
            Tell us your suburb, property type, and preferred frequency and we'll get back to you with a tailored local quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
              <Link href="/house-cleaning-gold-coast">Book House Cleaning</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
