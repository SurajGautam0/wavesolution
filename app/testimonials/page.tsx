"use client"

import Link from "next/link"
import { Star, Quote, ChevronRight, Shield, Award, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TestimonialProps {
  name: string
  location: string
  rating: number
  testimonial: string
  date: string
  service: string
  initials: string
  accent: string
}

const testimonials: Record<string, TestimonialProps[]> = {
  residential: [
    {
      name: "Sarah Johnson",
      location: "Southport, QLD",
      rating: 5,
      testimonial:
        "WaveSolution has been cleaning my home for over a year now, and I couldn't be happier with their service. The team is always punctual, thorough, and friendly.",
      date: "March 15, 2024",
      service: "Home Cleaning",
      initials: "SJ",
      accent: "from-[#39BDE4] to-[#249FC5]",
    },
    {
      name: "Michael Thompson",
      location: "Broadbeach, QLD",
      rating: 5,
      testimonial:
        "I was amazed at how spotless my apartment was after their deep cleaning service. They paid attention to every detail and exceeded my expectations.",
      date: "March 10, 2024",
      service: "Deep Cleaning",
      initials: "MT",
      accent: "from-[#333365] to-[#4a4a7a]",
    },
    {
      name: "Jennifer Lee",
      location: "Surfers Paradise, QLD",
      rating: 5,
      testimonial:
        "An excellent company for window and general cleaning. The work is top-tier. Everything was left sparkling clean and fresh.",
      date: "March 5, 2024",
      service: "Window Cleaning",
      initials: "JL",
      accent: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Lisa Chen",
      location: "Burleigh Heads, QLD",
      rating: 5,
      testimonial:
        "WaveSolution's service is highly professional. The cleaning agents they use are environmentally friendly and safe. I highly recommend their services.",
      date: "February 28, 2024",
      service: "Home Cleaning",
      initials: "LC",
      accent: "from-amber-500 to-amber-600",
    },
  ],
  commercial: [
    {
      name: "David Williams",
      location: "Robina, QLD",
      rating: 5,
      testimonial:
        "Our office has never looked better since we started using WaveSolution's commercial cleaning service. Highly professional and consistent results every time.",
      date: "March 12, 2024",
      service: "Office Cleaning",
      initials: "DW",
      accent: "from-[#39BDE4] to-[#249FC5]",
    },
    {
      name: "Emma Roberts",
      location: "Gold Coast, QLD",
      rating: 5,
      testimonial:
        "WaveSolution's cleaning service is very effective for our restaurant. They sanitize the kitchen and dining area thoroughly. We are extremely satisfied.",
      date: "March 8, 2024",
      service: "Restaurant Cleaning",
      initials: "ER",
      accent: "from-[#333365] to-[#4a4a7a]",
    },
    {
      name: "James Parker",
      location: "Nerang, QLD",
      rating: 5,
      testimonial:
        "Cleaning a medical center requires high sensitivity. WaveSolution handles this with great expertise. Their cleaning standards are remarkably high.",
      date: "February 20, 2024",
      service: "Medical Facility Cleaning",
      initials: "JP",
      accent: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Rebecca Taylor",
      location: "Coomera, QLD",
      rating: 5,
      testimonial:
        "WaveSolution is always our first choice for our corporate office. They are punctual and their work is of consistent high quality.",
      date: "February 15, 2024",
      service: "Office Cleaning",
      initials: "RT",
      accent: "from-amber-500 to-amber-600",
    },
  ],
  specialized: [
    {
      name: "Amanda Wilson",
      location: "Helensvale, QLD",
      rating: 5,
      testimonial:
        "WaveSolution is excellent for carpet cleaning. They made my old carpet look brand new again. All the stubborn stains are completely gone.",
      date: "March 14, 2024",
      service: "Carpet Cleaning",
      initials: "AW",
      accent: "from-[#39BDE4] to-[#249FC5]",
    },
    {
      name: "Robert Brown",
      location: "Palm Beach, QLD",
      rating: 5,
      testimonial:
        "The end of lease cleaning was thorough and professional. We got our full bond back thanks to WaveSolution's excellent work.",
      date: "March 6, 2024",
      service: "End of Lease Cleaning",
      initials: "RB",
      accent: "from-[#333365] to-[#4a4a7a]",
    },
    {
      name: "Chris Martin",
      location: "Varsity Lakes, QLD",
      rating: 5,
      testimonial:
        "I called WaveSolution for post-renovation cleaning. They removed all the dust and debris perfectly. The work quality is superb.",
      date: "February 25, 2024",
      service: "Post-Construction Cleaning",
      initials: "CM",
      accent: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Sophie Harris",
      location: "Merrimac, QLD",
      rating: 5,
      testimonial:
        "Their upholstery cleaning is amazing. The color and freshness of my sofa have been restored. I am very satisfied with the results.",
      date: "February 18, 2024",
      service: "Upholstery Cleaning",
      initials: "SH",
      accent: "from-amber-500 to-amber-600",
    },
  ],
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className="group h-full border-0 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 bg-white rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 sm:p-8">
          {/* Quote mark */}
          <div className="mb-4">
            <Quote className="h-8 w-8 text-[#39BDE4]/30 fill-[#39BDE4]/10" />
          </div>

          {/* Review text */}
          <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base mb-6">
            {testimonial.testimonial}
          </p>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />
        </div>

        {/* Author */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center gap-4">
          <div className={`flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.accent} flex items-center justify-center text-white text-sm font-bold tracking-wide shadow-md`}>
            {testimonial.initials}
          </div>
          <div className="min-w-0">
            <p className="font-bold text-slate-900 text-sm truncate">{testimonial.name}</p>
            <p className="text-xs text-slate-500 truncate">{testimonial.location}</p>
          </div>
          <div className="ml-auto flex-shrink-0">
            <span className="inline-flex items-center rounded-full bg-[#39BDE4]/10 px-3 py-1 text-[11px] font-semibold text-[#249FC5]">
              {testimonial.service}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
        <Icon className="h-7 w-7 text-secondary" />
      </div>
      <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-white/60 font-medium">{label}</p>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#333365]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#39BDE4]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#249FC5]/10 rounded-full blur-[100px]" />
        </div>

        <div className="classic-container relative z-10 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm border border-white/10">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Trusted by 430+ Customers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              What Our Customers
              <br />
              <span className="text-secondary">Say About Us</span>
            </h1>

            <div className="w-16 h-1 bg-secondary mt-6 mb-8 rounded-full" />

            <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
              Real feedback from Gold Coast homes and businesses we proudly clean every week.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            <StatCard icon={Star} value="4.9" label="Google Rating" />
            <StatCard icon={Users} value="430+" label="Happy Clients" />
            <StatCard icon={Award} value="10+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Review cards */}
      <section className="py-16 sm:py-20 bg-[#F3F3F3]">
        <div className="classic-container">
          <Tabs defaultValue="residential" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white shadow-md rounded-xl p-1">
                <TabsTrigger
                  value="residential"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold data-[state=active]:bg-[#39BDE4] data-[state=active]:text-white transition-all"
                >
                  Residential
                </TabsTrigger>
                <TabsTrigger
                  value="commercial"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold data-[state=active]:bg-[#39BDE4] data-[state=active]:text-white transition-all"
                >
                  Commercial
                </TabsTrigger>
                <TabsTrigger
                  value="specialized"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold data-[state=active]:bg-[#39BDE4] data-[state=active]:text-white transition-all"
                >
                  Specialized
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="residential">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {testimonials.residential.map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {testimonials.commercial.map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialized">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {testimonials.specialized.map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="classic-container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#333365] to-[#39BDE4] p-10 sm:p-14 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Share Your Experience
              </h2>
              <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
                Loved our service? Leave us a review and help other Gold Coast families find a cleaner they can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#333365] hover:bg-white/90 font-bold rounded-xl">
                  <Link href="https://maps.app.goo.gl/gabLdzZ7v3VRzgk87" target="_blank" rel="noopener noreferrer">
                    Review on Google
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-xl">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-[#F3F3F3] py-16 sm:py-20">
        <div className="classic-container text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#333365] tracking-tight mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-slate-600 text-lg max-w-lg mx-auto mb-8">
            Join hundreds of Gold Coast families who trust WaveSolution for their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="classic-button font-bold rounded-xl">
              <Link href="/book">
                Book a Clean
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-200 text-[#333365] hover:bg-slate-50 font-bold rounded-xl">
              <Link href="tel:+61435230994">Call 0435 230 994</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
