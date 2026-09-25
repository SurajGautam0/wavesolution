"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Sparkles,
  MapPin,
  ThumbsUp,
  Search,
  ExternalLink,
  Award,
  BadgeCheck,
  PhoneCall,
  Calendar,
  Building2,
  Home,
  Sparkle,
  Filter,
  MessageSquarePlus,
  Send,
  HeartHandshake
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { businessInfo, siteLinks } from "@/lib/business-info"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  category: "residential" | "commercial" | "bond" | "specialized"
  service: string
  date: string
  initials: string
  accent: string
  highlight: string
  review: string
  verified: boolean
  source: "Google" | "Direct Client"
  helpfulCount: number
}

const ALL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah Johnson",
    location: "Southport, QLD",
    rating: 5,
    category: "residential",
    service: "Regular House Cleaning",
    date: "March 15, 2024",
    initials: "SJ",
    accent: "from-[#39BDE4] to-[#249FC5]",
    highlight: "Always punctual, thorough, and friendly",
    review:
      "WaveSolution has been cleaning our 4-bedroom home in Southport fortnightly for over a year now. The team is consistently on time, brings all their own eco-friendly products, and leaves the kitchen and bathrooms spotless. It has given our family our weekends back!",
    verified: true,
    source: "Google",
    helpfulCount: 24,
  },
  {
    id: "t-2",
    name: "Michael Thompson",
    location: "Broadbeach, QLD",
    rating: 5,
    category: "residential",
    service: "Deep Spring Cleaning",
    date: "March 10, 2024",
    initials: "MT",
    accent: "from-[#333365] to-[#4a4a7a]",
    highlight: "Exceeded all expectations on deep clean",
    review:
      "I booked a full deep clean for my beachfront apartment prior to hosting family. They cleaned behind appliances, scrubbed balcony sliding tracks, and restored our tiled floors. Truly incredible attention to detail.",
    verified: true,
    source: "Google",
    helpfulCount: 18,
  },
  {
    id: "t-3",
    name: "Robert & Kelly Brown",
    location: "Palm Beach, QLD",
    rating: 5,
    category: "bond",
    service: "Bond / End of Lease Cleaning",
    date: "March 6, 2024",
    initials: "RB",
    accent: "from-emerald-500 to-teal-600",
    highlight: "100% full bond refund without any hassle",
    review:
      "Our real estate property manager is notoriously strict with exit reports. WaveSolution came through with their 72-hour bond back guarantee. The oven, range hood, and windows looked brand new. Got our entire deposit back in 48 hours!",
    verified: true,
    source: "Google",
    helpfulCount: 31,
  },
  {
    id: "t-4",
    name: "David Williams",
    location: "Robina, QLD",
    rating: 5,
    category: "commercial",
    service: "Corporate Office Cleaning",
    date: "March 12, 2024",
    initials: "DW",
    accent: "from-blue-600 to-indigo-700",
    highlight: "Professional, discreet, and reliable every week",
    review:
      "We manage a 2-storey accounting office in Robina. WaveSolution handles our after-hours office sanitation, bins, restrooms, and kitchen areas 3 nights a week. They are trustworthy, thorough, and provide itemized tax invoicing.",
    verified: true,
    source: "Google",
    helpfulCount: 15,
  },
  {
    id: "t-5",
    name: "Amanda Wilson",
    location: "Helensvale, QLD",
    rating: 5,
    category: "specialized",
    service: "Carpet Steam Cleaning & Stain Removal",
    date: "March 14, 2024",
    initials: "AW",
    accent: "from-cyan-500 to-blue-600",
    highlight: "Stubborn pet stains and odours completely eliminated",
    review:
      "We have two golden retrievers and our lounge room carpet had seen better days. The technician used hot water extraction and specialized pet treatments. The carpets dried quickly and smell wonderfully clean.",
    verified: true,
    source: "Google",
    helpfulCount: 19,
  },
  {
    id: "t-6",
    name: "Emma Roberts",
    location: "Surfers Paradise, QLD",
    rating: 5,
    category: "commercial",
    service: "Restaurant & Kitchen Sanitation",
    date: "March 8, 2024",
    initials: "ER",
    accent: "from-purple-600 to-indigo-600",
    highlight: "Remarkably high hygiene standards",
    review:
      "Operating a busy dining venue requires spotless cleanliness and food-safe hygiene. WaveSolution handles our floor scrubbing and kitchen degreasing. Our health inspection scores have been flawless since hiring them.",
    verified: true,
    source: "Google",
    helpfulCount: 12,
  },
  {
    id: "t-7",
    name: "Jennifer Lee",
    location: "Surfers Paradise, QLD",
    rating: 5,
    category: "specialized",
    service: "Window & High-Rise Glass Cleaning",
    date: "March 5, 2024",
    initials: "JL",
    accent: "from-teal-500 to-cyan-600",
    highlight: "Sparkling crystal-clear ocean views",
    review:
      "Living on the coast means salty residue constantly builds up on our sliding balcony glass. The WaveSolution team cleaned inside and out with streak-free squeegees. Super polite crew and excellent prices.",
    verified: true,
    source: "Google",
    helpfulCount: 9,
  },
  {
    id: "t-8",
    name: "Chris Martin",
    location: "Varsity Lakes, QLD",
    rating: 5,
    category: "bond",
    service: "After Builders / Post-Renovation Clean",
    date: "February 25, 2024",
    initials: "CM",
    accent: "from-amber-500 to-orange-600",
    highlight: "Removed all gypsum fine dust and paint overspray",
    review:
      "After finishing a 3-month home renovation, fine plaster dust was everywhere. WaveSolution brought industrial HEPA vacuums and detailed every cabinet, track, and light fixture. Made moving in seamless!",
    verified: true,
    source: "Google",
    helpfulCount: 14,
  },
  {
    id: "t-9",
    name: "James Parker",
    location: "Nerang, QLD",
    rating: 5,
    category: "commercial",
    service: "Medical Clinic & Dental Practice Clean",
    date: "February 20, 2024",
    initials: "JP",
    accent: "from-emerald-600 to-teal-700",
    highlight: "Hospital-grade disinfection protocols",
    review:
      "Cleaning a healthcare practice demands strict disinfection standards and cross-contamination prevention. WaveSolution follows hospital-grade protocols with dedicated colour-coded microfibres. Highly recommended.",
    verified: true,
    source: "Google",
    helpfulCount: 22,
  },
  {
    id: "t-10",
    name: "Sophie Harris",
    location: "Merrimac, QLD",
    rating: 5,
    category: "specialized",
    service: "Upholstery & Fabric Couch Cleaning",
    date: "February 18, 2024",
    initials: "SH",
    accent: "from-rose-500 to-pink-600",
    highlight: "Breathed new life into our 6-seater modular sofa",
    review:
      "Our light grey fabric couch had toddler spills and general discolouration. WaveSolution did a gentle steam clean and stain lift. It dried within a few hours and looks virtually brand new again.",
    verified: true,
    source: "Google",
    helpfulCount: 11,
  },
  {
    id: "t-11",
    name: "Rebecca Taylor",
    location: "Coomera, QLD",
    rating: 5,
    category: "residential",
    service: "Fortnightly Housekeeping",
    date: "February 15, 2024",
    initials: "RT",
    accent: "from-sky-500 to-blue-600",
    highlight: "The most trustworthy cleaners we have ever had",
    review:
      "As busy working parents in northern Gold Coast, having trustworthy police-checked cleaners is paramount. They have our key and always leave the home smelling fresh without harsh toxic fumes.",
    verified: true,
    source: "Google",
    helpfulCount: 17,
  },
  {
    id: "t-12",
    name: "Lisa Chen",
    location: "Burleigh Heads, QLD",
    rating: 5,
    category: "residential",
    service: "Eco-Friendly House Cleaning",
    date: "February 28, 2024",
    initials: "LC",
    accent: "from-emerald-500 to-teal-600",
    highlight: "Safe for kids and indoor pets",
    review:
      "I specifically requested their non-toxic, eco-friendly plant-based cleaning solutions for my asthma and young children. WaveSolution accommodated with zero fuss and the clean was top tier.",
    verified: true,
    source: "Google",
    helpfulCount: 16,
  },
]

const SUBURB_FILTERS = [
  "All Suburbs",
  "Southport",
  "Robina",
  "Broadbeach",
  "Surfers Paradise",
  "Palm Beach",
  "Burleigh Heads",
  "Coomera",
  "Helensvale",
  "Varsity Lakes",
  "Nerang",
  "Merrimac",
]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedSuburb, setSelectedSuburb] = useState<string>("All Suburbs")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [helpfulLikes, setHelpfulLikes] = useState<Record<string, number>>({})
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [reviewForm, setReviewForm] = useState({
    name: "",
    suburb: "",
    service: "House Cleaning",
    rating: 5,
    review: "",
  })

  const handleLike = (id: string) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setIsFormOpen(false)
      setFormSubmitted(false)
      setReviewForm({
        name: "",
        suburb: "",
        service: "House Cleaning",
        rating: 5,
        review: "",
      })
    }, 2500)
  }

  const filteredTestimonials = useMemo(() => {
    return ALL_TESTIMONIALS.filter((item) => {
      // Category match
      const categoryMatch =
        activeCategory === "all" || item.category === activeCategory

      // Suburb match
      const suburbMatch =
        selectedSuburb === "All Suburbs" ||
        item.location.toLowerCase().includes(selectedSuburb.toLowerCase())

      // Search match
      const query = searchQuery.toLowerCase().trim()
      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.review.toLowerCase().includes(query) ||
        item.highlight.toLowerCase().includes(query)

      return categoryMatch && suburbMatch && searchMatch
    })
  }, [activeCategory, selectedSuburb, searchQuery])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1b1b3a] via-[#23234d] to-[#333365] text-white pt-24 pb-20 sm:pt-28 sm:pb-28">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pexels-karola-g-4239146.jpg"
              alt="Professional cleaning team Gold Coast"
              fill
              className="object-cover opacity-15"
              priority
              sizes="100vw"
            />
          </div>
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            <div className="absolute -top-24 left-1/4 h-[550px] w-[550px] rounded-full bg-[#39BDE4]/20 blur-[130px]" />
            <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-[#39BDE4]/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#39BDE4_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          </div>

          <div className="classic-container relative z-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs font-medium text-white/60 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-[#39BDE4] font-semibold">
                Customer Reviews & Testimonials
              </span>
            </nav>

            <div className="max-w-3xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-md border border-white/15 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-[#39BDE4] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                  Gold Coast Verified Reviews
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs font-medium text-white/90">
                  430+ Five-Star Ratings
                </span>
              </div>

              {/* Main Heading for SEO */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Real Customer Reviews &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39BDE4] via-[#6be0ff] to-white">
                  Gold Coast Feedback
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Discover honest feedback from local families, real estate tenants,
                offices, and businesses who rely on WaveSolution for pristine
                cleaning across every Gold Coast suburb.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-lg shadow-[#39BDE4]/25 hover:shadow-xl transition-all"
                >
                  <Link href="/book">
                    Book a Clean Today
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm"
                >
                  <Link
                    href="https://maps.app.goo.gl/gabLdzZ7v3VRzgk87"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 text-[#39BDE4]" />
                    Review Us on Google
                  </Link>
                </Button>

                <Button
                  onClick={() => setIsFormOpen(!isFormOpen)}
                  size="lg"
                  variant="ghost"
                  className="text-white/90 hover:text-white hover:bg-white/10 font-semibold rounded-xl"
                >
                  <MessageSquarePlus className="mr-2 h-4 w-4 text-[#39BDE4]" />
                  Submit Feedback
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Breakdown & Trust Guarantees Section */}
        <section className="relative z-20 -mt-8 sm:-mt-12 classic-container">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Overall Score Box */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 text-center">
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-amber-400 text-amber-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    4.9
                  </span>
                  <span className="text-xl font-bold text-slate-400">/ 5.0</span>
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  Based on 430+ Google & Local Reviews
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  100% Genuine Verified Client Feedback
                </div>
              </div>

              {/* Star Progress Distribution */}
              <div className="lg:col-span-5 space-y-2.5">
                {[
                  { stars: "5 Stars", percentage: 96, count: "412" },
                  { stars: "4 Stars", percentage: 4, count: "18" },
                  { stars: "3 Stars", percentage: 0, count: "0" },
                  { stars: "2 Stars", percentage: 0, count: "0" },
                  { stars: "1 Star", percentage: 0, count: "0" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-medium">
                    <span className="w-14 text-slate-600 font-semibold">{item.stars}</span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-slate-500 font-semibold">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Pillars */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#39BDE4]/10 text-[#249FC5] mt-0.5">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      72-Hr Bond Guarantee
                    </h4>
                    <p className="text-xs text-slate-500">Free re-clean if your agent requests adjustments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Police-Checked Staff
                    </h4>
                    <p className="text-xs text-slate-500">Fully vetted, insured & background-checked.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 mt-0.5">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Eco-Friendly Cleaners
                    </h4>
                    <p className="text-xs text-slate-500">Safe for children, pets & sensitive homes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optional Interactive Review Submission Form Dropdown */}
        {isFormOpen && (
          <section className="classic-container mt-8 animate-fadeIn">
            <div className="rounded-3xl bg-gradient-to-br from-[#23234d] to-[#333365] text-white p-6 sm:p-8 shadow-2xl border border-white/10">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <Badge className="bg-[#39BDE4] text-[#1b1b3a] hover:bg-[#39BDE4] mb-2 font-bold">
                    Client Feedback Form
                  </Badge>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Share Your Cleaning Experience
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    Your feedback helps Gold Coast families and businesses choose a cleaner they can trust.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-white">Thank You for Your Feedback!</h4>
                    <p className="text-sm text-white/80 mt-1">
                      Your review has been submitted and will be verified by our team.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewForm.name}
                          onChange={(e) =>
                            setReviewForm({ ...reviewForm, name: e.target.value })
                          }
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#39BDE4] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1">
                          Suburb (Gold Coast)
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewForm.suburb}
                          onChange={(e) =>
                            setReviewForm({ ...reviewForm, suburb: e.target.value })
                          }
                          placeholder="e.g. Southport, Broadbeach"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#39BDE4] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1">
                          Service Received
                        </label>
                        <select
                          value={reviewForm.service}
                          onChange={(e) =>
                            setReviewForm({ ...reviewForm, service: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#39BDE4] text-sm [&>option]:text-slate-900"
                        >
                          <option value="House Cleaning">House Cleaning</option>
                          <option value="Bond Cleaning">Bond / End of Lease Cleaning</option>
                          <option value="Commercial / Office">Office & Commercial Cleaning</option>
                          <option value="Carpet Steam Clean">Carpet Steam Cleaning</option>
                          <option value="Deep Clean">Deep Spring Clean</option>
                          <option value="Window Cleaning">Window Cleaning</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white/80 uppercase mb-1">
                          Star Rating
                        </label>
                        <div className="flex items-center gap-2 pt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() =>
                                setReviewForm({ ...reviewForm, rating: star })
                              }
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-6 w-6 transition-colors ${
                                  star <= reviewForm.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-white/20"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/80 uppercase mb-1">
                        Your Review & Feedback
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={reviewForm.review}
                        onChange={(e) =>
                          setReviewForm({ ...reviewForm, review: e.target.value })
                        }
                        placeholder="Tell us about the quality, punctuality, and cleanliness..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#39BDE4] text-sm"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setIsFormOpen(false)}
                        className="text-white/70 hover:text-white"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Review
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Filter, Search & Categories Controls */}
        <section className="py-12 sm:py-16">
          <div className="classic-container">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-1">
                  <Filter className="h-3.5 w-3.5" />
                  Filter & Search Reviews
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Verified Reviews by Service & Suburb
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Showing {filteredTestimonials.length} verified testimonials across Gold Coast residential and commercial services.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 backdrop-blur-sm rounded-2xl mb-6 max-w-fit">
              {[
                { id: "all", label: "All Reviews", icon: Sparkles },
                { id: "residential", label: "House & Deep Clean", icon: Home },
                { id: "bond", label: "Bond & End of Lease", icon: Award },
                { id: "commercial", label: "Commercial & Office", icon: Building2 },
                { id: "specialized", label: "Carpet & Specialized", icon: Sparkle },
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-white text-[#333365] shadow-md shadow-slate-900/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#39BDE4]" : "text-slate-400"}`} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Search & Suburb Pill Selector */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-8">
              {/* Search Bar */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search reviews by keyword, name, or service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#39BDE4] shadow-sm"
                />
              </div>

              {/* Suburb Horizontal Scroll / Dropdown */}
              <div className="md:col-span-7 flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Suburb:
                </span>
                {SUBURB_FILTERS.map((suburb) => {
                  const isSelected = selectedSuburb === suburb
                  return (
                    <button
                      key={suburb}
                      onClick={() => setSelectedSuburb(suburb)}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-[#333365] text-white shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {suburb}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Testimonial Cards Grid */}
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                <Search className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No matching reviews found</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or clearing your suburb filter to see all client feedback.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory("all")
                    setSelectedSuburb("All Suburbs")
                    setSearchQuery("")
                  }}
                  className="mt-4 rounded-xl font-semibold text-xs"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.map((item) => {
                  const likes = (helpfulLikes[item.id] || 0) + item.helpfulCount
                  return (
                    <Card
                      key={item.id}
                      className="group flex flex-col justify-between h-full bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                        <div>
                          {/* Top row: Rating + Source Badge */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(item.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-sm"
                                />
                              ))}
                            </div>

                            <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                              <BadgeCheck className="h-3.5 w-3.5 text-blue-500" />
                              {item.source} Review
                            </div>
                          </div>

                          {/* Highlight Excerpt Quote */}
                          <h3 className="font-bold text-slate-900 text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#249FC5] transition-colors">
                            &ldquo;{item.highlight}&rdquo;
                          </h3>

                          {/* Full Review Text */}
                          <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                            {item.review}
                          </p>
                        </div>

                        {/* Card Footer: Author details, location & service badge */}
                        <div className="pt-4 border-t border-slate-100 mt-auto">
                          {/* Service Tag */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <span className="inline-flex items-center rounded-lg bg-[#39BDE4]/10 px-2.5 py-1 text-[11px] font-bold text-[#249FC5]">
                              {item.service}
                            </span>
                            <span className="text-[11px] font-medium text-slate-400">
                              {item.date}
                            </span>
                          </div>

                          {/* User Avatar + Suburb + Like Button */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br ${item.accent} flex items-center justify-center text-white text-xs font-black tracking-wider shadow-sm`}
                              >
                                {item.initials}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-900 text-sm truncate">
                                  {item.name}
                                </p>
                                <p className="text-xs text-slate-500 flex items-center gap-1">
                                  <MapPin className="h-3 w-3 text-slate-400" />
                                  {item.location}
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleLike(item.id)}
                              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#249FC5] p-2 rounded-xl hover:bg-slate-50 transition-colors"
                              title="Helpful review"
                            >
                              <ThumbsUp className="h-3.5 w-3.5" />
                              <span className="font-semibold">{likes}</span>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* Why Clients Choose WaveSolution Grid */}
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
          <div className="classic-container">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-3.5 py-1 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-3">
                <HeartHandshake className="h-3.5 w-3.5" />
                The WaveSolution Difference
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why Gold Coast Homes & Businesses Trust Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                We combine meticulous cleaning standards with honest local customer care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "100% Bond Back Promise",
                  desc: "We follow official RTA exit checklists and offer a free 72-hr callback guarantee for total bond security.",
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  icon: BadgeCheck,
                  title: "Fully Insured & Police Checked",
                  desc: "$20M Public Liability insurance with background-screened staff you can trust in your home or office.",
                  color: "bg-emerald-50 text-emerald-600",
                },
                {
                  icon: Clock,
                  title: "Punctual & Reliable",
                  desc: "Clear arrival windows, fast SMS updates, and dependable regular cleaner allocations.",
                  color: "bg-amber-50 text-amber-600",
                },
                {
                  icon: Sparkles,
                  title: "Eco-Friendly Chemistry",
                  desc: "Commercial-grade HEPA filters and non-toxic formulas that keep children, pets, and waterways safe.",
                  color: "bg-purple-50 text-purple-600",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#39BDE4]/30 hover:bg-white transition-all shadow-sm hover:shadow-md"
                  >
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Google Reviews Direct CTA */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="classic-container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#23234d] via-[#333365] to-[#1b1b3a] p-8 sm:p-14 text-white shadow-2xl">
              {/* Background glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#39BDE4]/20 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#39BDE4]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[#39BDE4] uppercase tracking-wider mb-4 border border-white/15">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  Google Verified Business Profile
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                  Had Your Property Cleaned Recently? Share Your Experience
                </h2>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                  Your feedback helps us continuously elevate our service and helps Gold Coast residents choose a cleaning team they can rely on with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-lg"
                  >
                    <Link
                      href="https://maps.app.goo.gl/gabLdzZ7v3VRzgk87"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Star className="mr-2 h-4 w-4 fill-[#1b1b3a] text-[#1b1b3a]" />
                      Leave a Google Review
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl"
                  >
                    <Link href="/contact">Contact Customer Care</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs About Our Reviews & Service Quality */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="classic-container max-w-4xl">
            <div className="text-center mb-12">
              <Badge className="bg-[#39BDE4]/10 text-[#249FC5] hover:bg-[#39BDE4]/10 mb-2 font-bold text-xs uppercase tracking-wider">
                Common Questions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions About Our Reviews
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Are all WaveSolution testimonials authentic?",
                  a: "Yes. All testimonials displayed on our website are collected directly from verified Google Business reviews and direct client feedback submitted across Gold Coast suburbs.",
                },
                {
                  q: "What is your 72-Hour Bond Cleaning Satisfaction Guarantee?",
                  a: "For bond and end-of-lease cleans, if your real estate property manager flags any area from the official condition report within 72 hours, our cleaners will return and rectify it completely free of charge.",
                },
                {
                  q: "Can I request the same regular cleaner for my home or office?",
                  a: "Absolutely. For recurring weekly, fortnightly, or monthly cleans, we allocate a dedicated cleaner or team to maintain consistent quality and familiarity with your property.",
                },
                {
                  q: "Are your cleaners covered by insurance?",
                  a: "Yes, all our cleaners are covered under our comprehensive $20M Public Liability insurance and have undergone strict national police background checks.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Booking Call to Action */}
        <section className="bg-gradient-to-br from-[#333365] to-[#1b1b3a] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39BDE4]/10 rounded-full blur-[140px]" />
          </div>

          <div className="classic-container relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm border border-white/15">
              <Sparkles className="h-4 w-4 text-[#39BDE4]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                Experience Five-Star Cleaning
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Ready for a Spotless Home or Office on the Gold Coast?
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Join hundreds of happy Gold Coast families and businesses. Instant online quotes with flexible scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-xl shadow-[#39BDE4]/20 px-8"
              >
                <Link href="/book">
                  Book Your Clean Online
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl px-8"
              >
                <Link href={businessInfo.phoneHref}>
                  <PhoneCall className="mr-2 h-4 w-4 text-[#39BDE4]" />
                  Call {businessInfo.phoneDisplay}
                </Link>
              </Button>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10 max-w-2xl mx-auto">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">4.9 / 5.0</p>
                <p className="text-xs text-white/60 font-medium">Google Rating</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">430+</p>
                <p className="text-xs text-white/60 font-medium">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">100%</p>
                <p className="text-xs text-white/60 font-medium">Bond Guarantee</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">15+</p>
                <p className="text-xs text-white/60 font-medium">Suburbs Served</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}