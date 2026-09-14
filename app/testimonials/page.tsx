"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TestimonialProps {
  name: string
  location: string
  rating: number
  testimonial: string
  image: string
  date: string
  service: string
}

const testimonials: Record<string, TestimonialProps[]> = {
  residential: [
    {
      name: "Sarah Johnson",
      location: "Southport, QLD",
      rating: 5,
      testimonial:
        "WaveSolution has been cleaning my home for over a year now, and I couldn't be happier with their service. The team is always punctual, thorough, and friendly.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 15, 2024",
      service: "Home Cleaning",
    },
    {
      name: "Michael Thompson",
      location: "Melbourne, VIC",
      rating: 5,
      testimonial:
        "I was amazed at how spotless my apartment was after WaveSolution's deep cleaning service. They paid attention to every detail and exceeded my expectations.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 10, 2024",
      service: "Deep Cleaning",
    },
    {
      name: "Jennifer Lee",
      location: "Broadbeach, QLD",
      rating: 4,
      testimonial:
        "An excellent company for window and general cleaning. The work is top-tier. Everything is outstanding.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 5, 2024",
      service: "Window Cleaning",
    },
    {
      name: "Lisa Chen",
      location: "Surfers Paradise, QLD",
      rating: 5,
      testimonial:
        "WaveSolution's service is highly professional. The cleaning agents they use are environmentally friendly and safe. I highly recommend their services to everyone.",
      image: "/placeholder.svg?height=80&width=80",
      date: "February 28, 2024",
      service: "Home Cleaning",
    },
  ],
  commercial: [
    {
      name: "David Williams",
      location: "Robina, QLD",
      rating: 5,
      testimonial:
        "Our office has never looked better since we started using WaveSolution's commercial cleaning service. Highly professional and consistent.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 12, 2024",
      service: "Office Cleaning",
    },
    {
      name: "Emma Roberts",
      location: "Brisbane, QLD",
      rating: 5,
      testimonial:
        "WaveSolution's cleaning service is very effective for our restaurant. They sanitize the kitchen and dining area thoroughly. We are extremely satisfied with their work.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 8, 2024",
      service: "Restaurant Cleaning",
    },
    {
      name: "James Parker",
      location: "Perth, WA",
      rating: 4,
      testimonial:
        "Cleaning a medical center requires high sensitivity. WaveSolution handles this task with great expertise. Their cleaning standards are remarkably high.",
      image: "/placeholder.svg?height=80&width=80",
      date: "February 20, 2024",
      service: "Medical Facility Cleaning",
    },
    {
      name: "Rebecca Taylor",
      location: "Adelaide, SA",
      rating: 5,
      testimonial:
        "WaveSolution is always our first choice for our corporate office. They are punctual and their work is of consistent high quality.",
      image: "/placeholder.svg?height=80&width=80",
      date: "February 15, 2024",
      service: "Office Cleaning",
    },
  ],
  specialized: [
    {
      name: "Amanda Wilson",
      location: "Gold Coast, QLD",
      rating: 5,
      testimonial:
        "WaveSolution is excellent for carpet cleaning. They made my old carpet look brand new again. All the stubborn stains are completely gone.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 14, 2024",
      service: "Carpet Cleaning",
    },
    {
      name: "Robert Brown",
      location: "Canberra, ACT",
      rating: 5,
      testimonial:
        "The end of lease cleaning was thorough and professional. We got our full bond back thanks to WaveSolution's excellent work.",
      image: "/placeholder.svg?height=80&width=80",
      date: "March 6, 2024",
      service: "End of Lease Cleaning",
    },
    {
      name: "Chris Martin",
      location: "Nerang, QLD",
      rating: 4,
      testimonial:
        "I called WaveSolution for post-renovation cleaning. They removed all the dust and debris perfectly. The work quality is superb.",
      image: "/placeholder.svg?height=80&width=80",
      date: "February 25, 2024",
      service: "Post-Construction Cleaning",
    },
    {
      name: "Sophie Harris",
      location: "Burleigh Heads, QLD",
      rating: 5,
      testimonial:
        "Their upholstery cleaning is amazing. The color and freshness of my sofa have been restored. I am very satisfied with the results.",
      image: "/placeholder.svg?height=80&width=80",
      date: "February 18, 2024",
      service: "Upholstery Cleaning",
    },
  ],
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className="testimonial-card h-full w-full max-w-full overflow-x-auto">
      <CardContent className="p-4 sm:p-6 w-full max-w-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-secondary">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary">{testimonial.name}</h4>
            <p className="text-sm text-slate-600">{testimonial.location}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-secondary text-secondary" : "text-slate-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Quote className="absolute -left-2 -top-2 h-8 w-8 text-secondary/20 rotate-180" />
          <p className="text-slate-600 italic pl-3 py-1 break-words text-sm sm:text-base">{testimonial.testimonial}</p>
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-slate-600">
          <span>{testimonial.service}</span>
          <span>{testimonial.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Premium Page Header */}
      <div className="page-header relative min-h-[50vh] flex items-center overflow-hidden bg-primary py-0">
        {/* Animated Background Container */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/1.jpeg"
              alt="Professional Cleaning"
              fill
              className="object-cover animate-pulse-slow scale-110"
              style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
              priority
            />
          </div>
          {/* Multi-layered Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />

          {/* Decorative Animated Light Leaks */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/20 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="classic-container relative z-20 py-20">
          <div className="max-w-3xl text-left">
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fadeIn">
              <div className="relative w-4 h-4 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Customer Stories</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 text-white leading-[0.9] animate-fadeIn">
              Customer Testimonials <br />
              <span className="text-secondary shimmer-text">Gold Coast</span>
            </h1>

            <div className="w-24 h-2 bg-secondary mb-10 rounded-full animate-fadeIn" />

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10 animate-fadeIn">
              Real experiences from our customers who transformed their spaces with the WaveSolution standard of excellence.
            </p>

            <div className="flex gap-4 animate-fadeIn">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-blue-100 flex items-center justify-center overflow-hidden">
                    <Image src="/avatar-placeholder.svg" alt="Gold Coast customer avatar" width={48} height={48} className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />)}
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-white/60">4.9/5 Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Keyframes in-line */}
        <style jsx>{`
          @keyframes ken-burns {
            0% { transform: scale(1); }
            100% { transform: scale(1.15) translate(1%, 1%); }
          }
        `}</style>
      </div>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-16 bg-[#F3F3F3]">
        <div className="classic-container">
          <Tabs defaultValue="residential" className="w-full">
            <div className="flex justify-center mb-6 sm:mb-10">
              <TabsList className="bg-white shadow-md w-full max-w-full overflow-x-auto">
                <TabsTrigger
                  value="residential"
                  className="px-6 py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
                >
                  Residential
                </TabsTrigger>
                <TabsTrigger
                  value="commercial"
                  className="px-6 py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
                >
                  Commercial
                </TabsTrigger>
                <TabsTrigger
                  value="specialized"
                  className="px-6 py-3 data-[state=active]:bg-secondary data-[state=active]:text-white"
                >
                  Specialized
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="residential" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 w-full max-w-full">
                {testimonials.residential.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 w-full max-w-full">
                {testimonials.commercial.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 w-full max-w-full">
                {testimonials.specialized.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Share Your Experience</h2>
            <p className="text-lg text-slate-600 mb-8">
              We value your feedback! If you have used our services, please share your experience with us.
            </p>
            <Button asChild size="lg" className="classic-button">
              <Link href="/contact?testimonial=true">Submit Your Feedback</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="classic-container">
          <div className="classic-card p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready for a Cleaner Space?</h2>
            <p className="text-slate-600 mb-6">
              Join our satisfied customers and experience the WaveSolution difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild className="classic-button">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white hover:bg-slate-100 text-primary border-slate-200">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

