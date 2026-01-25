import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About CRYSTALFRONT - Best Cleaning Solutions in Lalitpur Since 2026",
  description: "Learn about the mission, values, and expert team behind CRYSTALFRONT. Providing top-tier residential and commercial cleaning services in Bhaisepati and Lalitpur with international precision.",
  keywords: ["about CRYSTALFRONT", "cleaning company Lalitpur", "professional cleaning team Nepal", "best cleaners Bhaisepati"],
}

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Bikram Basnet",
    position: "Founder & CEO",
    bio: "After spending years mastering advanced cleaning technologies and standards in international markets, Bikram returned to Nepal to modernize the industry. He established CRYSTALFRONT in 2026 to bring world-class precision to Lalitpur.",
    image: "/team/bikram.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sameet Gautam",
    position: "General Manager",
    bio: "Sameet oversees all cleaning operations, ensuring our high standards are maintained across all services. His attention to detail and commitment to excellence has been instrumental in our growth.",
    image: "/team/sameet.png",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Joseph Thapa",
    position: "Supervisor",
    bio: "Joseph is dedicated to ensuring our customers receive the best possible experience and that every cleaning job meets our rigorous quality standards. He manages our on-site teams with precision.",
    image: "/team/joseph.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="page-header relative overflow-hidden">
        {/* Background Overlay with Nepali vibe */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1544806030-22d206f9d150?auto=format&fit=crop&q=80&w=2000"
            alt="Kathmandu Valley Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        </div>
        <div className="classic-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About CRYSTALFRONT</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-white/80 mb-8">
              The Kathmandu Valley's premier cleaning service provider, bringing international standards since 2026.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The CRYSTALFRONT story began in the international cleaning industry, where our founder, Bikram Basnet, spent years mastering advanced techniques, eco-friendly standards, and high-precision equipment. While working abroad, he observed a significant gap: while the world was moving towards automated and scientific cleaning, the local industry in our home country remained largely traditional and unregulated.
                </p>
                <p>
                  Driven by the desire to elevate standards in Nepal, he returned with a mission to bridge this gap. We realized that true excellence comes from training, not just tools. In 2026, we officially launched CRYSTALFRONT after months of intensive staff training, where we taught our employees the international 'Crystal Clear' methodology.
                </p>
                <p>
                  Today, we are proud to offer a service that combines global expertise with local dedication. We don't just clean; we import a standard of hygiene and professionalism that Bhaisepati and Lalitpur deserve.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-white/50">
              <Image
                src="/about.jpg"
                alt="CRYSTALFRONT Professional Standards"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-secondary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                Our Mission in Motion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="classic-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At CRYSTALFRONT, our values guide everything we do. They shape our approach to service delivery and define
              our relationships with our clients and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in every aspect of our service, from the products we use to the results we
                    deliver.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency, building trust with our clients through reliable service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to environmentally friendly practices, using eco-conscious products and methods.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Respect</h3>
                  <p className="text-muted-foreground">
                    We treat our clients, their properties, and our team members with the utmost respect and
                    consideration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our success is built on the dedication and expertise of our team. Get to know the people who make
              CRYSTALFRONT exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover team-member-image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose CRYSTALFRONT?</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Experienced Professionals:</strong> Our team consists of trained
                    and experienced cleaning specialists.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Comprehensive Services:</strong> From regular home cleaning to
                    specialized services, we cover all your cleaning needs.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Quality Guaranteed:</strong> We stand behind our work with a
                    100% satisfaction guarantee.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Eco-Friendly Options:</strong> We offer environmentally
                    conscious cleaning solutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Flexible Scheduling:</strong> We work around your schedule to
                    provide convenient service.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Insured and Bonded:</strong> Your property is protected when you
                    work with us.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="classic-button">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2 border-4 border-white/50">
              <Image
                src="/images/cleaning-service.jpg"
                alt="Professional cleaning team in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="classic-container">
          <div className="classic-card p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Ready to Experience the CRYSTALFRONT Difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book your cleaning service today and see why we're Bhaisepati, Lalitpur's premier cleaning provider.
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

