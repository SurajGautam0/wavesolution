import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialCard } from "@/components/testimonial-card"
import { ServiceCard } from "@/components/service-card"
import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"
import { DiscountPopup } from "@/components/discount-popup"
import { WorkerShowcase } from "@/components/worker-showcase"
import { Metadata } from "next"
import { siteLinks } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Best Cleaning Services Gold Coast | Exceptional Home & Office Cleans",
  description: "Looking for top-quality, reliable cleaning services in the Gold Coast? Wave Solution Cleaning provides exceptional house cleaning, deep cleaning, and pest control.",
  alternates: {
    canonical: "https://www.wavesolution.com.au",
  },
  openGraph: {
    title: "Cleaning Services Gold Coast | Wave Solution Cleaning",
    description: "Trusted cleaning services across Gold Coast homes and businesses. Book online or call 0450 833 683.",
    url: "https://www.wavesolution.com.au",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <DiscountPopup />
      <HeroSection />

      {/* Main Content with Sidebar */}
      <div className="classic-container py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {/* Trust Badges - Local SEO */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-muted/50 p-4 rounded-xl border border-muted">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">Locally Owned on Gold Coast</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-sm">Eco-Friendly Products</span>
              </div>
            </div>

            {/* Welcome Section */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <h1 className="classic-heading text-3xl sm:text-5xl">Exceptional House Cleaning Services in Gold Coast</h1>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <div className="space-y-4 max-w-2xl">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We are a Gold Coast cleaning and pest control team dedicated to making your
                    home or office spotless, fresh and pest-free. With years of experience and a team of
                    professional cleaners, we deliver exceptional results every time.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you need regular home cleaning in Southport, a deep clean for your office in Robina,
                    specialized services like carpet cleaning, or reliable pest control, our team is equipped with the skills and
                    tools to exceed your expectations.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
                <h2 className="classic-heading text-3xl sm:text-4xl">Our Top-Quality Cleaning Services</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Our team of experienced professionals uses the latest cleaning techniques and
                  eco-friendly products to ensure your space is not just clean, but healthy too.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="Home Cleaning"
                  description="Regular cleaning services for your home, keeping it spotless and fresh."
                  icon="Home"
                  price="From $120"
                />
                <ServiceCard
                  title="Office Cleaning"
                  description="Professional cleaning for offices and commercial spaces."
                  icon="Building2"
                  price="From $200"
                />
                <ServiceCard
                  title="Deep Cleaning"
                  description="Thorough cleaning of all areas, including hard-to-reach spots."
                  icon="Sparkles"
                  price="From $250"
                />
                <ServiceCard
                  title="Regular House Cleaning"
                  description="Scheduled weekly or fortnightly cleaning to keep your home consistently spotless."
                  icon="Repeat"
                  price="From $120/visit"
                />
                <ServiceCard
                  title="Same Day Service"
                  description="Need it cleaned today? Fast same-day cleaning with no compromise on quality."
                  icon="CalendarClock"
                  price="From $120"
                />
                <ServiceCard
                  title="Pest Control"
                  description="Safe and effective pest control for homes and businesses."
                  icon="Bug"
                  price="From $150"
                />
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild className="classic-button">
                  <Link href={siteLinks.services}>
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            {/* Worker Cleaning Class Section */}
            <WorkerShowcase />

            {/* How It Works */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
                <h2 className="classic-heading text-3xl sm:text-4xl">How It Works</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg">Three simple steps to a pristine space.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Book Online</h3>
                  <p className="text-muted-foreground">
                    Select your service, date, and time through our easy booking system.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white mb-4">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. We Clean</h3>
                  <p className="text-muted-foreground">
                    Our professional team arrives and provides exceptional cleaning service.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Enjoy</h3>
                  <p className="text-muted-foreground">Relax and enjoy your clean space. Satisfaction guaranteed!</p>
                </div>
              </div>
            </section>

            {/* Locations Section */}
            <section className="classic-card p-6 sm:p-10 mb-8">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-8">
                <h2 className="classic-heading text-3xl sm:text-4xl">Service Areas Across Gold Coast</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg">
                  We are a proud local business providing trusted domestic and commercial cleaning across the Gold Coast, including these key suburbs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-center">
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Surfers Paradise</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Broadbeach</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Southport</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Robina</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Burleigh Waters</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Palm Beach</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Coomera</div>
                <div className="p-3 bg-muted rounded-lg font-medium text-sm">Miami</div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
                <h2 className="classic-heading text-3xl sm:text-4xl">What Our Customers Say</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
              <Tabs defaultValue="residential">
                <div className="flex justify-center mb-6">
                  <TabsList className="bg-muted">
                    <TabsTrigger
                      value="residential"
                      className="data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                      Residential
                    </TabsTrigger>
                    <TabsTrigger
                      value="commercial"
                      className="data-[state=active]:bg-secondary data-[state=active]:text-white"
                    >
                      Commercial
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="residential">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <TestimonialCard
                      name="Sarah Johnson"
                      location="Southport, QLD"
                      rating={5}
                      testimonial="WaveSolution has been cleaning my home for over a year now, and I couldn't be happier with their service. The team is always punctual, thorough, and friendly."
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="Michael Thompson"
                      location="Surfers Paradise, QLD"
                      rating={5}
                      testimonial="I was amazed at how spotless my apartment was after WaveSolution's deep cleaning service. They paid attention to every detail and exceeded my expectations."
                      image="/placeholder.svg?height=80&width=80"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="commercial">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <TestimonialCard
                      name="David Williams"
                      location="Robina, QLD"
                      rating={5}
                      testimonial="Our office has never looked better since we started using WaveSolution's commercial cleaning service. Highly professional and consistent."
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="Emma Roberts"
                      location="Broadbeach, QLD"
                      rating={5}
                      testimonial="WaveSolution's cleaning service is very effective for our restaurant. They sanitize the kitchen and dining area thoroughly. We are extremely satisfied with their work."
                      image="/placeholder.svg?height=80&width=80"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
      </div>

      <section className="bg-primary text-white py-12 sm:py-20 mt-12">
        <div className="classic-container">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-8 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-serif font-black mb-6">Ready for a Cleaner Space?</h2>
              <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                Book your cleaning service today and experience the WaveSolution difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-16 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black text-lg uppercase tracking-widest shadow-2xl shadow-secondary/20 transition-all hover:scale-105">
                  <Link href={siteLinks.book}>Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 font-black text-lg uppercase tracking-widest transition-all hover:scale-105">
                  <Link href={siteLinks.contact}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

