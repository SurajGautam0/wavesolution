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
      name: "Ram Bahadur Thapa",
      location: "Bhaisepati, Lalitpur",
      rating: 5,
      testimonial:
        "CRYSTALFRONT has been providing exceptional cleaning for my home. Their work is highly organized and reliable. It's a pleasure to have such high-quality service in the Bhaisepati area.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 15, 2026",
      service: "Home Cleaning",
    },
    {
      name: "Sita Kumari Rai",
      location: "Sanepa, Lalitpur",
      rating: 5,
      testimonial:
        "I have tried several cleaning services, but none compare to CRYSTALFRONT. Their team is extremely hardworking and they clean every corner of the house meticulously.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 10, 2026",
      service: "Deep Cleaning",
    },
    {
      name: "Prakash Shrestha",
      location: "Jhamsikhel, Lalitpur",
      rating: 4,
      testimonial:
        "An excellent company for window and glass cleaning. The work is top-tier, although they arrived slightly late once. Everything else is outstanding.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 5, 2026",
      service: "Window Cleaning",
    },
    {
      name: "Anjali Sharma",
      location: "Nakkhu, Lalitpur",
      rating: 5,
      testimonial:
        "CRYSTALFRONT's service is highly professional. The cleaning agents they use are environmentally friendly and safe for health. I highly recommend their services to everyone.",
      image: "/placeholder.svg?height=80&width=80",
      date: "December 28, 2025",
      service: "Home Cleaning",
    },
  ],
  commercial: [
    {
      name: "Rajesh Khatri",
      location: "Ekantakuna, Lalitpur",
      rating: 5,
      testimonial:
        "We have entrusted CRYSTALFRONT with our office cleaning. They are doing a fantastic job. We've noticed a boost in employee morale since the office has been so clean.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 12, 2026",
      service: "Office Cleaning",
    },
    {
      name: "Binita Basnet",
      location: "Bakhundole, Lalitpur",
      rating: 5,
      testimonial:
        "CRYSTALFRONT's cleaning service is very effective for our restaurant. They sanitize the kitchen and dining area thoroughly. We are extremely satisfied with their work.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 8, 2026",
      service: "Restaurant Cleaning",
    },
    {
      name: "Dinesh K.C.",
      location: "Kupandole, Lalitpur",
      rating: 4,
      testimonial:
        "Cleaning a medical center requires high sensitivity. CRYSTALFRONT handles this task with great expertise. Their cleaning standards are remarkably high.",
      image: "/placeholder.svg?height=80&width=80",
      date: "December 20, 2025",
      service: "Medical Facility Cleaning",
    },
    {
      name: "Arjun Neupane",
      location: "Jawalakhel, Lalitpur",
      rating: 5,
      testimonial:
        "CRYSTALFRONT is always our first choice for our corporate office. They are punctual and their work is of consistent high quality.",
      image: "/placeholder.svg?height=80&width=80",
      date: "December 15, 2025",
      service: "Office Cleaning",
    },
  ],
  specialized: [
    {
      name: "Nirmala Sunuwar",
      location: "Imadol, Lalitpur",
      rating: 5,
      testimonial:
        "CRYSTALFRONT is excellent for carpet cleaning. They made my old carpet look brand new again. All the stubborn stains are completely gone.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 14, 2026",
      service: "Carpet Cleaning",
    },
    {
      name: "Suman Ghimire",
      location: "Dhobighat, Lalitpur",
      rating: 5,
      testimonial:
        "Water tank and septic tank cleaning is a difficult job, but they did it very well. The cleaning crew was very disciplined and professional.",
      image: "/placeholder.svg?height=80&width=80",
      date: "January 6, 2026",
      service: "Tank Cleaning",
    },
    {
      name: "Aman Tamang",
      location: "Latitpur-5",
      rating: 4,
      testimonial:
        "I called CRYSTALFRONT for post-construction cleaning. They removed all the cement and paint stains. The work quality is superb.",
      image: "/placeholder.svg?height=80&width=80",
      date: "December 30, 2025",
      service: "Post-Construction Cleaning",
    },
    {
      name: "Gita Giri",
      location: "Sanepa, Lalitpur",
      rating: 5,
      testimonial:
        "Their sofa cleaning technology is very modern. The color and shine of the sofa have been restored. I am very satisfied with the results.",
      image: "/placeholder.svg?height=80&width=80",
      date: "December 22, 2025",
      service: "Sofa Cleaning",
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
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Quote className="absolute -left-2 -top-2 h-8 w-8 text-secondary/20 rotate-180" />
          <p className="text-muted-foreground italic pl-3 py-1 break-words text-sm sm:text-base">{testimonial.testimonial}</p>
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
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
              src="/1cleaning.jpg"
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
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Trusted by 500+ Clients</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 text-white leading-[0.9] animate-fadeIn">
              Stories of <br />
              <span className="text-secondary shimmer-text">Brilliance</span>
            </h1>

            <div className="w-24 h-2 bg-secondary mb-10 rounded-full animate-fadeIn" />

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10 animate-fadeIn">
              Real experiences from our customers who transformed their spaces with the CRYSTALFRONT standard of excellence.
            </p>

            <div className="flex gap-4 animate-fadeIn">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-blue-100 flex items-center justify-center overflow-hidden">
                    <Image src={`/placeholder-user.jpg`} alt="User" width={48} height={48} className="object-cover" />
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
      <section className="py-10 sm:py-16 bg-gray-50">
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
            <p className="text-lg text-muted-foreground mb-8">
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
            <p className="text-muted-foreground mb-6">
              Join our satisfied customers and experience the CRYSTALFRONT difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild className="classic-button">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white hover:bg-gray-100 text-primary border-gray-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

