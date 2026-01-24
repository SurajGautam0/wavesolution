import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export const metadata: Metadata = {
  title: "Our Services | CRYSTALFRONT",
  description: "Explore our range of professional cleaning services for homes and businesses in Bhaisepati, Lalitpur.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Services Hero */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Professional Cleaning Services
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of cleaning services to meet your needs. From residential to commercial, we've got
              you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            title="Move In/Out"
            description="Comprehensive cleaning for when you're moving in or out of a property."
            icon="Truck"
            price="From $300"
          />
          <ServiceCard
            title="Window Cleaning"
            description="Crystal clear windows for homes and commercial buildings."
            icon="Glasses"
            price="From $150"
          />
          <ServiceCard
            title="Carpet Cleaning"
            description="Deep cleaning for carpets, removing stains and odors."
            icon="Carpet"
            price="From $180"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Experience Our Services?
            </h2>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Book your cleaning service today and experience the CRYSTALFRONT difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

