import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Home Cleaning Services Gold Coast | House Cleaners from $120",
  description: "Professional home cleaning services in Gold Coast from $120. Regular weekly, fortnightly or one-off house cleaning. Trusted by 2,000+ Gold Coast families. Eco-friendly products. Fully insured cleaners. Book online or call 0450 833 683.",
  keywords: ["home cleaning Gold Coast", "house cleaning Gold Coast", "house cleaners near me", "domestic cleaning Gold Coast", "regular cleaning Gold Coast", "weekly cleaning Gold Coast", "home cleaners Southport", "affordable house cleaning Gold Coast"],
  alternates: {
    canonical: "https://www.wavesolution.com.au/services/home-cleaning",
  },
  openGraph: {
    title: "Home Cleaning Services Gold Coast | From $120 | WaveSolution",
    description: "Trusted home cleaning across Gold Coast. From $120/clean. Book online today.",
    url: "https://www.wavesolution.com.au/services/home-cleaning",
  },
}

export default function HomeCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Service Hero */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Residential Services
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Home Cleaning Services</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Keep your home spotless and fresh with our professional home cleaning services.
            </p>
            <Button asChild size="lg">
              <Link href="/book">Book Home Cleaning</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-4">What's Included</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Dusting of all accessible surfaces</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Vacuuming of carpets and rugs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Mopping of all hard floors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Cleaning and sanitizing of bathrooms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Cleaning and sanitizing of kitchen surfaces</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Emptying of trash bins</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Making beds with fresh linens (upon request)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Experienced and professional cleaners</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Eco-friendly cleaning products available</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>100% satisfaction guarantee</span>
              </li>
            </ul>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>1 Bedroom Home</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>2 Bedroom Home</span>
                    <span className="font-semibold">$140</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>3 Bedroom Home</span>
                    <span className="font-semibold">$160</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>4+ Bedroom Home</span>
                    <span className="font-semibold">From $180</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Additional Bathroom</span>
                    <span className="font-semibold">+$20 each</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold">Add-on Services:</h4>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Inside Fridge Cleaning</span>
                    <span className="font-semibold">+$30</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Inside Oven Cleaning</span>
                    <span className="font-semibold">+$35</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Interior Window Cleaning</span>
                    <span className="font-semibold">+$40</span>
                  </div>
                </div>

                <Button asChild className="w-full mt-6">
                  <Link href="/book">Book Now</Link>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Prices may vary based on the condition and size of your home. We'll provide a final quote after
                  assessing your specific needs.
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">How long does a typical home cleaning take?</h4>
                  <p className="text-muted-foreground">
                    Depending on the size of your home, a standard cleaning typically takes 2-4 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Do I need to provide cleaning supplies?</h4>
                  <p className="text-muted-foreground">
                    No, our cleaners bring all necessary cleaning supplies and equipment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Is there a satisfaction guarantee?</h4>
                  <p className="text-muted-foreground">
                    Yes, if you're not satisfied with any aspect of our service, we'll come back and re-clean at no
                    additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

