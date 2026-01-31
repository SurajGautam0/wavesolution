"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Instagram, Sparkles, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
  social: {
    instagram?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Bikram Basnet",
    position: "Founder & CEO",
    bio: "After spending years mastering advanced cleaning technologies and standards in international markets, Bikram returned to Nepal to modernize the industry. He established CRYSTALFRONT in 2026 to bring world-class precision to Lalitpur.",
    image: "/team/bikram.png",
    social: {},
  },
  {
    name: "Sameet Gautam",
    position: "General Manager",
    bio: "Sameet oversees all cleaning operations, ensuring our high standards are maintained across all services. His attention to detail and commitment to excellence has been instrumental in our growth.",
    image: "/sameetgautam.jpeg",
    social: {
      instagram: "https://www.instagram.com/crystalfrontwincare?igsh=eWt5czdydGxuODF1&utm_source=qr",
    },
  },
  {
    name: "Joseph Thapa",
    position: "Supervisor",
    bio: "Joseph is dedicated to ensuring our customers receive the best possible experience and that every cleaning job meets our rigorous quality standards. He manages our on-site teams with precision.",
    image: "/josep.jpeg",
    social: {},
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Premium Page Header */}
      <div className="page-header relative min-h-[50vh] flex items-center overflow-hidden bg-primary py-0">
        {/* Animated Background Container */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/aboutreal.jpeg"
              alt="Professional Cleaning Team"
              fill
              className="object-cover scale-110"
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

        <div className="classic-container relative z-20 py-20 text-white">
          <div className="max-w-3xl text-left animate-fadeIn">
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 overflow-hidden">
              <div className="relative w-4 h-4 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">#1 Cleaning Services</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 leading-[0.9]">
              Driven by <br />
              <span className="text-secondary shimmer-text">Quality</span>
            </h1>

            <div className="w-24 h-2 bg-secondary mb-10 rounded-full" />

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10">
              The Kathmandu Valley's premier cleaning service provider, bringing
              <span className="text-white font-black italic"> international precision </span>
              to every doorstep in Kathmandu, Lalitpur, and Bhaktapur.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black">Eco-Friendly</span>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Global Standards</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black">Certified Team</span>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">100% Verified</span>
                </div>
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
           @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}</style>
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
              <div key={index} className="group relative bg-white rounded-[2.5rem] p-4 shadow-xl border border-primary/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 scale-[1.01]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <div className="text-white text-[10px] font-black uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Crystalfront Professional
                    </div>
                  </div>
                </div>

                <div className="text-center px-4 pb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-3">
                    {member.position}
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-3 leading-tight tracking-tight">
                    {member.name}
                  </h3>
                  <div className="w-8 h-1 bg-secondary mx-auto mb-4 rounded-full transition-all duration-500 group-hover:w-16" />
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 font-medium italic">
                    "{member.bio}"
                  </p>
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

