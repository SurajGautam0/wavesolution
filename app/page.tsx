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
                <h2 className="classic-heading text-3xl sm:text-4xl">Welcome to CRYSTALFRONT</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <div className="space-y-4 max-w-2xl">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We are Bhaisepati, Lalitpur's premier cleaning service provider, dedicated to making your home or office spotless
                    and fresh.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    With years of professional experience, we deliver exceptional results every time, exceeding your expectations with every swipe.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="classic-card p-6 sm:p-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10">
                <h2 className="classic-heading text-3xl sm:text-4xl">Our Services</h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Tailored cleaning solutions for every requirement.
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
                      name="राम बहादुर थापा"
                      location="भैसेपाटी, ललितपुर"
                      rating={5}
                      testimonial="CRYSTALFRONT ले मेरो घरको सरसफाई निकै राम्रोसँग गरिरहेको छ। उनीहरूको काम निकै व्यवस्थित र भरपर्दो छ। विशेष गरि भैसेपाटी क्षेत्रमा यति राम्रो सर्भिस पाउनु एकदमै खुसीको कुरा हो।"
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="सीता कुमारी राई"
                      location="सानेपा, ललितपुर"
                      rating={5}
                      testimonial="मैले धेरै ठाउँमा सरसफाई गराएँ तर CRYSTALFRONT जस्तो सफा गर्ने कोही भेटिन। उनीहरूको टिमु निकै मिहिनेती छ। घरको कुनाकुनासम्म धेरै राम्रोसँग सफा गर्छन्।"
                      image="/placeholder.svg?height=80&width=80"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="commercial">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <TestimonialCard
                      name="राजेश खत्री"
                      location="एकान्तकुना, ललितपुर"
                      rating={5}
                      testimonial="हाम्रो अफिसको सरसफाईको जिम्मा CRYSTALFRONT लाई दिएका छौं। उनीहरूले निकै राम्रो काम गरिरहेका छन्। अफिस सफा भएपछि कर्मचारीहरूको मनोबल पनि बढेको महसुस गरेका छौं।"
                      image="/placeholder.svg?height=80&width=80"
                    />
                    <TestimonialCard
                      name="बिनीता बस्नेत"
                      location="बखुन्डोल, ललितपुर"
                      rating={5}
                      testimonial="हाम्रो रेस्टुरेन्टको लागि CRYSTALFRONT को सरसफाई निकै प्रभावकारी छ। उनीहरूले किचेन र डाइनिङ हल निकै राम्रोसँग सेनिटाइज गर्छन्। उनीहरूको काममा हामी धेरै सन्तुष्ट छौं।"
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

