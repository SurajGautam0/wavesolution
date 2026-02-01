import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Kathmandu Valley | #1 Cleaning Company",
  description: "Explore the best professional cleaning services in Kathmandu, Lalitpur, and Bhaktapur. From residential deep cleaning to high-end commercial glass maintenance, CRYSTALFRONT is your trusted partner for a spotless space.",
  keywords: ["cleaning services Kathmandu", "deep cleaning Lalitpur", "commercial cleaners Bhaktapur", "best cleaning company Nepal", "professional house cleaning Kathmandu"],
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Services Hero */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Cleaning Services in Kathmandu, Lalitpur & Bhaktapur
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide the highest quality residential and commercial cleaning solutions across the entire Kathmandu Valley. Elite standards, certified teams, and eco-friendly technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <ServiceCard
            title="Shop Front Cleaning"
            description="Thorough cleaning for shop fronts to attract more customers to your business."
            icon="ShoppingBag"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Commercial Glass Cleaning"
            description="Specialized glass cleaning solutions for commercial buildings and high-rises."
            icon="Building2"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Exterior Glass Cleaning"
            description="Safe and effective cleaning for even the most hard-to-reach exterior glass surfaces."
            icon="Sun"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Interior Glass Cleaning"
            description="Detailed cleaning for all interior glass, partitions, and decorative mirrors."
            icon="Layout"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Frame & Sill Cleaning"
            description="Complete cleaning including frames and sills for a perfectly maintained look."
            icon="Square"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Spot & Stain Removal"
            description="Expert removal of tough mineral deposits, spots, and stains from glass."
            icon="Eraser"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Showroom Glass Cleaning"
            description="Ensure your displayed products shine through perfectly clear showroom glass."
            icon="Monitor"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Restaurant & Café Glass Cleaning"
            description="Hygienic and sparkling glass cleaning tailored for the food and beverage industry."
            icon="Utensils"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Office Window Cleaning"
            description="Improve your workplace environment with clean, bright, and streak-free windows."
            icon="Briefcase"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Commercial Deep Cleaning"
            description="Comprehensive deep cleaning solutions for commercial spaces, ensuring a pristine environment."
            icon="Building2"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Commercial Spring Cleaning"
            description="Thorough seasonal cleaning to refresh and revitalize your commercial property."
            icon="Sparkles"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Post Construction Windows Cleaning"
            description="Specialized cleaning to remove construction debris and residue from new or renovated windows."
            icon="HardHat"
            price="Contact for Quote"
          />
          <ServiceCard
            title="Paints/Stains and Stickers Removal"
            description="Expert removal of paint splatters, stubborn stains, and adhesive residue from glass surfaces."
            icon="Eraser"
            price="Contact for Quote"
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

