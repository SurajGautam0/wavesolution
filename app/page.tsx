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

export const metadata: Metadata = {
  title: "#1 Cleaning Services in Kathmandu, Lalitpur & Bhaktapur | CRYSTALFRONT",
  description: "CRYSTALFRONT is the leading professional cleaning company in Kathmandu, Lalitpur, and Bhaktapur. We specialize in residential deep cleaning, office maintenance, and high-glass cleaning. Book the best cleaners in Nepal.",
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
            {/* Welcome Section */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <h1 className="classic-heading text-3xl sm:text-5xl">Best Cleaning Services in Kathmandu & Lalitpur</h1>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <div className="space-y-4 max-w-2xl">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    CRYSTALFRONT is the premier provider of <strong>professional cleaning services in Kathmandu, Lalitpur, and Bhaktapur</strong>. Whether you need residential deep cleaning or commercial office maintenance, we bring international standards to the local industry.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Based in <strong>Bhaisepati, Lalitpur</strong>, our certified team uses eco-friendly technology to ensure your space remains pristine. Experience the highest standard of <strong>window and high-glass cleaning in Nepal</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
                <h2 className="classic-heading text-3xl sm:text-4xl">Professional Cleaning Solutions in Nepal</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Tailored cleaning solutions for every requirement.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="Window Cleaning"
                  description="Professional window cleaning for crystal clear views and enhanced curb appeal."
                  icon="Glasses"
                  price="Contact for Quote"
                />
                <ServiceCard
                  title="Glass Cleaning"
                  description="Expert cleaning for all types of glass surfaces, ensuring a streak-free finish."
                  icon="Sparkles"
                  price="Contact for Quote"
                />
                <ServiceCard
                  title="Storefront Glass Cleaning"
                  description="Keep your business looking its best with spotless and inviting storefronts."
                  icon="Store"
                  price="Contact for Quote"
                />

              </div>
              <div className="flex justify-center mt-8">
                <Button asChild className="classic-button">
                  <Link href="/services">
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

            {/* Testimonials */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
                <h2 className="classic-heading text-3xl sm:text-4xl">What Our Customers Say</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg">
                  Trusted by our local community in Lalitpur.
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
                      name="Ram Bahadur Thapa"
                      location="Bhaisepati, Lalitpur"
                      rating={5}
                      testimonial="CRYSTALFRONT has been providing exceptional cleaning for my home. Their work is highly organized and reliable. It's a pleasure to have such high-quality service in the Bhaisepati area."
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="Sita Kumari Rai"
                      location="Sanepa, Lalitpur"
                      rating={5}
                      testimonial="I have tried several cleaning services, but none compare to CRYSTALFRONT. Their team is extremely hardworking and they clean every corner of the house meticulously."
                      image="/placeholder.svg?height=80&width=80"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="commercial">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <TestimonialCard
                      name="Rajesh Khatri"
                      location="Ekantakuna, Lalitpur"
                      rating={5}
                      testimonial="We have entrusted CRYSTALFRONT with our office cleaning. They are doing a fantastic job. We've noticed a boost in employee morale since the office has been so clean."
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="Binita Basnet"
                      location="Bakhundole, Lalitpur"
                      rating={5}
                      testimonial="CRYSTALFRONT's cleaning service is very effective for our restaurant. They sanitize the kitchen and dining area thoroughly. We are extremely satisfied with their work."
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
                Book your professional cleaning service today and experience the CRYSTALFRONT excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-16 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black text-lg uppercase tracking-widest shadow-2xl shadow-secondary/20 transition-all hover:scale-105">
                  <Link href="/book">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 font-black text-lg uppercase tracking-widest transition-all hover:scale-105">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

