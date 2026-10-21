import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const url = `${businessInfo.baseUrl}/blog/dashain-house-cleaning-gold-coast`
const title = "Dashain House Cleaning Gold Coast | 10% Off"
const description =
  "Getting ready for Dashain on the Gold Coast? Refresh your home with Wave Solution and enjoy 10% off Dashain house cleaning. Get in touch to book."
const imageUrl = `${businessInfo.baseUrl}/images/dashain-house-cleaning-unsplash.jpg`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  keywords: [
    "Dashain house cleaning Gold Coast",
    "house cleaning Gold Coast",
    "Dashain cleaning offer Gold Coast",
    "festival house cleaning Gold Coast",
    "Nepali cleaning service Gold Coast",
  ],
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [{ url: imageUrl, alt: "A freshly mopped living room ready for Dashain guests" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
}

const faqs = [
  {
    question: "Is the Dashain house-cleaning offer available on the Gold Coast?",
    answer:
      "Yes. Wave Solution is offering 10% off Dashain house cleaning on the Gold Coast. Contact the team to check availability and confirm the offer for your booking.",
  },
  {
    question: "What does a house-cleaning visit cover?",
    answer:
      "The requested cleaning areas are agreed before the visit. Share the rooms and tasks you want cleaned so Wave Solution can confirm the scope for your home.",
  },
  {
    question: "Which Gold Coast areas can I ask about?",
    answer:
      "Wave Solution serves the Gold Coast, including Southport, Surfers Paradise, Broadbeach, Robina, Nerang, Burleigh Heads, Palm Beach, Helensvale, Coomera, Varsity Lakes, Carrara, Hope Island, Merrimac, Main Beach, Benowa and Highland Park. Ask the team to confirm your address.",
  },
  {
    question: "How do I claim the Dashain discount?",
    answer:
      "Contact Wave Solution about a house-cleaning booking and mention the Dashain 10% offer. The team can confirm availability and the details that apply to your booking.",
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
        { "@type": "ListItem", position: 3, name: "Dashain House Cleaning Gold Coast", item: url },
      ],
    },
    {
      "@type": "BlogPosting",
      headline: "Dashain House Cleaning on the Gold Coast: Save 10% on a Festive Home Refresh",
      description,
      image: imageUrl,
      datePublished: "2026-10-21",
      dateModified: "2026-10-21",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
      publisher: { "@type": "Organization", name: businessInfo.businessName, url: businessInfo.baseUrl },
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

export default function DashainHouseCleaningGoldCoastPost() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-secondary py-14 text-white md:py-20">
        <div className="classic-container max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/">Home</Link><ChevronRight className="h-4 w-4" /><Link href="/blog">Blog</Link><ChevronRight className="h-4 w-4" /><span>Dashain house cleaning</span>
          </nav>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#39BDE4]">A Dashain offer for Gold Coast homes</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Get your Gold Coast home Dashain-ready and save 10% on house cleaning</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">Welcome family and friends into a fresh, comfortable home this Dashain. Wave Solution is offering 10% off Dashain house cleaning across the Gold Coast.</p>
        </div>
      </section>

      <article className="classic-container grid max-w-6xl gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary">
          <figure className="not-prose mb-8">
            <Image
              src="/images/dashain-house-cleaning-unsplash.jpg"
              alt="A woman mops a bright living room, preparing the home for guests"
              width={1600}
              height={900}
              priority
              className="h-auto max-h-[520px] w-full rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <figcaption className="mt-2 text-sm text-slate-500">
              Photo by <a href="https://unsplash.com/photos/a-woman-mops-a-bright-modern-living-room-floor-2NcTLdFHpH8" target="_blank" rel="noreferrer">the photographer on Unsplash</a>, free to use under the <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash License</a>.
            </figcaption>
          </figure>

          <p className="lead">Dashain is a time to welcome loved ones, share meals and enjoy time together. If you are preparing your Gold Coast home for guests, a house clean can take some of the work off your list. Wave Solution is offering 10% off Dashain house cleaning.</p>

          <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-lg font-bold text-primary">दशैंको हार्दिक मंगलमय शुभकामना!</p>
            <p className="mt-2 text-slate-700">Spend more time with family this Dashain and let our local team help with the house-cleaning jobs on your list.</p>
          </div>

          <h2>Make room for the moments that matter</h2>
          <p>Before the tika, jamara, family photos and festive meal, many households like to freshen the rooms where everyone gathers. Kitchens, bathrooms, floors and guest spaces can need extra attention when visitors are coming. A planned house clean helps you prepare those everyday areas while keeping your own Dashain traditions at the centre of the celebration.</p>
          <p>Whether you are hosting relatives for a meal or expecting friends to stop by, start by deciding which rooms matter most. A focused clean can help make the home feel ready without turning the days before Dashain into one long cleaning session.</p>

          <h2>Dashain house-cleaning offer: save 10%</h2>
          <p>Wave Solution is offering <strong>10% off Dashain house cleaning</strong> for Gold Coast homes. To ask about the offer, contact the team and mention the Dashain promotion when you request a booking. The team will confirm availability and the cleaning tasks included in your quote.</p>
          <p>Want a regular refresh after the festival as well? Ask about weekly, fortnightly or one-off house-cleaning visits. The cleaning schedule and areas are discussed around your home and preferences.</p>

          <h2>A simple way to get your home ready</h2>
          <ol>
            <li><strong>Choose the rooms.</strong> List the spaces you want cleaned, such as the kitchen, bathrooms, living room or guest bedroom.</li>
            <li><strong>Share your priorities.</strong> Let the team know about high-traffic areas, surfaces that need extra attention and any access instructions.</li>
            <li><strong>Request a quote.</strong> Give your Gold Coast suburb, preferred date and the cleaning tasks you have in mind.</li>
            <li><strong>Mention the offer.</strong> Ask Wave Solution to confirm the 10% Dashain discount and booking availability.</li>
          </ol>

          <h2>Local house cleaning across the Gold Coast</h2>
          <p>Wave Solution provides house cleaning across the Gold Coast, including Southport, Surfers Paradise, Broadbeach, Robina, Nerang, Burleigh Heads, Palm Beach, Helensvale, Coomera, Varsity Lakes, Carrara, Hope Island, Merrimac, Main Beach, Benowa and Highland Park. Contact the team to check availability for your address and preferred date.</p>
          <p>Share the details of your home and the kind of clean you need. A clear scope helps the team prepare a quote that matches your priorities, whether you need a one-off pre-Dashain refresh or want to discuss ongoing visits.</p>

          <div className="not-prose my-8 rounded-3xl bg-primary p-7 text-white">
            <p className="flex items-center gap-2 text-xl font-black"><Sparkles className="h-5 w-5" /> Celebrate Dashain in a home that feels fresh</p>
            <p className="mt-3 leading-7 text-white/85">Ask Wave Solution about 10% off Dashain house cleaning on the Gold Coast. Mention the Dashain offer when you request your quote.</p>
            <Link href="/book" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-primary">Request a house-cleaning quote <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <h2>Frequently asked questions</h2>
          {faqs.map(({ question, answer }) => <section key={question}><h3>{question}</h3><p>{answer}</p></section>)}

          <p className="not-prose mt-8 text-sm text-slate-500">Image source: <a href="https://unsplash.com/photos/a-woman-mops-a-bright-modern-living-room-floor-2NcTLdFHpH8" target="_blank" rel="noreferrer">Unsplash photo</a> · Used under the <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash License</a>.</p>
        </div>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Dashain special</p>
          <h2 className="mt-2 text-2xl font-black text-primary">Save 10% on house cleaning</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Preparing for guests or a family celebration? Contact our Gold Coast team and mention the Dashain offer when requesting your quote.</p>
          <Link href="/book" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white">Ask about the offer <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/house-cleaning-gold-coast" className="mt-3 inline-flex w-full justify-center text-sm font-semibold text-primary">View house-cleaning service</Link>
        </aside>
      </article>
    </main>
  )
}
