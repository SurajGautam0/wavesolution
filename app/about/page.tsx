import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Instagram, Sparkles, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Wave Solution | Gold Coast Cleaning Experts Since 2010",
  description:
    "Meet the Wave Solution team — Gold Coast's trusted local cleaners since 2010. Fully insured, police-checked staff delivering house, office, bond and commercial cleaning services.",
  alternates: {
    canonical: "https://www.wavesolution.com.au/about",
  },
  openGraph: {
    title: "About Wave Solution | Gold Coast Cleaning Experts Since 2010",
    description:
      "Meet the Wave Solution team — Gold Coast's trusted local cleaners since 2010. Fully insured, police-checked staff delivering house, office, bond and commercial cleaning services.",
    url: "https://www.wavesolution.com.au/about",
    type: "website",
    images: [{ url: "/gold-coast-cleaning-services.jpeg", width: 1200, height: 630, alt: "Wave Solution cleaning team Gold Coast" }],
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wavesolution.com.au" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.wavesolution.com.au/about" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.wavesolution.com.au/#business",
      name: "Wave Solution Cleaning Gold Coast",
      url: "https://www.wavesolution.com.au",
      foundingDate: "2010",
      description:
        "Wave Solution is Gold Coast's trusted local cleaning company founded in 2010, providing house cleaning, bond cleaning, office cleaning, and commercial cleaning across the Gold Coast.",
      employee: [
        {
          "@type": "Person",
          name: "Sushant Timalcena",
          jobTitle: "Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Veshraj Gautam",
          jobTitle: "Operations Manager",
        },
      ],
    },
  ],
}

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
    name: "Sushant Timalcena",
    position: "Founder & CEO",
    bio: "Sushant founded WaveSolution in 2010 with a vision to provide dependable cleaning support across the Gold Coast. He leads the business with a strong focus on service standards, local accountability, and practical customer care.",
    image: "/avatar-placeholder.svg",
    social: {},
  },
  {
    name: "Veshraj Gautam",
    position: "Operations Manager",
    bio: "Veshraj oversees day-to-day operations, helping keep scheduling, quality, and communication consistent across residential and commercial jobs.",
    image: "/avatar-placeholder.svg",
    social: {
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Michael Chen",
    position: "Customer Relations",
    bio: "Michael focuses on customer communication, helping new enquiries move smoothly from quote to booking while making service expectations clear.",
    image: "/avatar-placeholder.svg",
    social: {},
  },
  {
    name: "Emma Thompson",
    position: "Training Specialist",
    bio: "Emma supports training and service consistency so the team follows clear standards across homes, rental properties, and workplaces.",
    image: "/avatar-placeholder.svg",
    social: {
      instagram: "https://instagram.com/",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      {/* Premium Page Header */}
      <div className="page-header relative min-h-[50vh] flex items-center overflow-hidden bg-primary py-0">
        {/* Animated Background Container */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/gold-coast-cleaning-team.jpg"
              alt="Professional Cleaning Team"
              fill
              className="object-cover scale-110"
              style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
              priority
              sizes="100vw"
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
                  sizes="16px"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Gold Coast Cleaning Specialists</span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 leading-[0.9]">
              About Wave Solution Gold Coast <br />
              <span className="text-secondary shimmer-text">Cleaning Experts</span>
            </h1>

            <div className="w-24 h-2 bg-secondary mb-10 rounded-full" />

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed mb-10">
              Gold Coast&apos;s trusted cleaning service provider, dedicated to excellence since 2010.
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

      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <div className="space-y-4 text-slate-600">
                <p>
                  WaveSolution was founded in 2010 with a simple mission: to provide exceptional
                  cleaning services that exceed customer expectations. What began as a small team
                  of dedicated professionals has grown into one of Gold Coast&apos;s most trusted
                  local property-service providers.
                </p>
                <p>
                  Our journey has been driven by a passion for cleanliness and a commitment to
                  quality. We understand that a clean environment contributes to health,
                  productivity, and overall well-being, which is why we approach each job with meticulous
                  attention to detail.
                </p>
                <p>
                  Over the years, we've expanded our services to meet the diverse needs of our
                  clients, from residential homes to commercial spaces and related property care, while maintaining the
                  personalized approach that has become our hallmark.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-white/50">
              <Image
                src="/about.jpg"
                alt="WaveSolution Professional Standards"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-secondary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                Our Mission in Motion
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Our Values Section */}
       <section className="py-16 bg-slate-50">
        <div className="classic-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              At WaveSolution, our values guide everything we do. They shape our approach to service delivery and define
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
                   <h3 className="text-xl font-bold mb-2 text-slate-900">Excellence</h3>
                   <p className="text-slate-600">
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
                   <h3 className="text-xl font-bold mb-2 text-slate-900">Integrity</h3>
                   <p className="text-slate-600">
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
                   <h3 className="text-xl font-bold mb-2 text-slate-900">Sustainability</h3>
                   <p className="text-slate-600">
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
                   <h3 className="text-xl font-bold mb-2 text-slate-900">Respect</h3>
                   <p className="text-slate-600">
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our success is built on the dedication and expertise of our team. Get to know the people who make
              WaveSolution exceptional.
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <div className="text-white text-[10px] font-black uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      WaveSolution Professional
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
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 font-medium italic">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#F3F3F3]">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose WaveSolution?</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
               <ul className="space-y-4">
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Experienced Professionals:</strong> Our team consists of trained
                     and experienced cleaning specialists.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Comprehensive Services:</strong> From regular home cleaning to
                     specialized services, we cover all your cleaning needs.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Quality Guaranteed:</strong> We stand behind our work with a
                     100% satisfaction guarantee.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Eco-Friendly Options:</strong> We offer environmentally
                     conscious cleaning solutions.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Flexible Scheduling:</strong> We work around your schedule to
                     provide convenient service.
                   </span>
                 </li>
                 <li className="flex items-start">
                   <CheckCircle className="mr-2 h-5 w-5 shrink-0 mt-0.5" />
                   <span className="text-slate-600">
                     <strong className="text-slate-900">Fully Insured and Police-Checked:</strong> Your property is
                     supported by a team that takes trust, access, and accountability seriously.
                   </span>
                 </li>
               </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="classic-button">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white hover:bg-slate-100 text-primary border-slate-200">
                  <Link href="/team">Meet the Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2 border-4 border-white/50">
              <Image
                src="/images/gold-coast-cleaning-service.jpg"
                alt="Professional cleaning team in action across Gold Coast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
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
               Ready to Experience the Wave Solution Difference?
             </h2>
             <p className="text-slate-600 mb-6">
               Book your cleaning service today and see why local Gold Coast homes and businesses trust Wave Solution.
             </p>
             <div className="flex flex-col gap-4 sm:flex-row justify-center">
               <Button asChild className="h-12 rounded-full bg-secondary px-6 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-secondary/90">
                 <Link href="/book">Book Now</Link>
               </Button>
               <Button asChild variant="outline" className="h-12 rounded-full border-slate-200 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-primary hover:bg-slate-100">
                 <Link href="/contact">Contact Us</Link>
               </Button>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}

