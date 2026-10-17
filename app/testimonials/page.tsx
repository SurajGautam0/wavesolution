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
import { serviceAreaCount } from "@/lib/claims"
import { saveTestimonial } from "@/lib/firebase-service"

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
  // NOTE: `verified`, `source` ("Google") and `helpfulCount` were removed.
  // Claiming all 12 testimonials were Google reviews was unverifiable, and the
  // per-review "helpful" counts (24, 18, 31, …) were invented engagement
  // metrics — Google reviews have no like counts. Both are spam-policy risks.
}

const ALL_TESTIMONIALS: Testimonial[] = []

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
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmittingReview, setIsSubmittingReview] = useState(false)
  const [reviewSubmitError, setReviewSubmitError] = useState("")
  const [reviewEmailAlertSent, setReviewEmailAlertSent] = useState<boolean | null>(null)
  const [reviewForm, setReviewForm] = useState({
    name: "",
    suburb: "",
    service: "House Cleaning",
    rating: 5,
    review: "",
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingReview(true)
    setReviewSubmitError("")
    try {
      await saveTestimonial({
        name: reviewForm.name.trim(),
        location: reviewForm.suburb.trim(),
        suburb: reviewForm.suburb.trim(),
        service: reviewForm.service,
        rating: reviewForm.rating,
        message: reviewForm.review.trim(),
        text: reviewForm.review.trim(),
        category: "residential",
      })

      let emailAlertSent = false
      try {
        const notification = await fetch("/api/notify-enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "testimonial",
            name: reviewForm.name,
            message: `Rating: ${reviewForm.rating}/5\nService: ${reviewForm.service}\nSuburb: ${reviewForm.suburb}\n\n${reviewForm.review}`,
          }),
        })
        emailAlertSent = notification.ok
        if (!notification.ok) console.warn("Review saved but notification email could not be sent.")
      } catch (error) {
        console.error("Review saved but notification email failed", error)
      }

      setReviewEmailAlertSent(emailAlertSent)
      setFormSubmitted(true)
      setTimeout(() => {
        setIsFormOpen(false)
        setFormSubmitted(false)
        setReviewForm({ name: "", suburb: "", service: "House Cleaning", rating: 5, review: "" })
      }, 3500)
    } catch (error) {
      console.error("Could not save customer review", error)
      setReviewSubmitError("We couldn’t submit your review. Please try again or contact our team directly.")
    } finally {
      setIsSubmittingReview(false)
    }
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
                  Google reviews
                </span>
              </div>

              {/* Main Heading for SEO */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Customer Reviews &{" "}
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

        {/* Verifiable trust section — deliberately publishes NO aggregate rating
            or review count, because neither could be verified from the Google
            Business Profile. A star distribution with zero negatives alongside a
            hardcoded "412 five-star" figure is a review-snippet policy risk. */}
        <section className="relative z-20 -mt-8 sm:-mt-12 classic-container">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-100">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 text-center">
                <ShieldCheck className="mx-auto mb-3 h-7 w-7 text-[#249FC5]" />
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900">
                  Google reviews
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Read customer reviews on Google, where their source is shown.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-7 w-7 text-emerald-600" />
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900">
                  Leave a Google Review
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Had a clean with us? A Google review is the most useful thing you can give us.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 text-center">
                <Sparkles className="mx-auto mb-3 h-7 w-7 text-[#249FC5]" />
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900">
                  Covered-item re-clean support
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  If anything is missed, we return and fix it at no charge.
                </p>
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
                    Your review will be checked by our team before it appears on the website.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center">
                    <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-white">Thank You for Your Feedback!</h4>
                    <p className="text-sm text-white/80 mt-1">
                      {reviewEmailAlertSent
                        ? "Your review has been saved for approval and our team has been notified. Thanks for sharing your experience."
                        : "Your review has been saved for approval, but the team email alert could not be sent. Thanks for sharing your experience."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {reviewSubmitError && <p role="alert" className="rounded-xl border border-red-300/40 bg-red-500/10 p-3 text-sm text-red-100">{reviewSubmitError}</p>}
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
                        disabled={isSubmittingReview}
                        onClick={() => setIsFormOpen(false)}
                        className="text-white/70 hover:text-white"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmittingReview}
                        className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl"
                      >
                        {isSubmittingReview ? <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : <Send className="mr-2 h-4 w-4" />}
                        {isSubmittingReview ? "Submitting…" : "Submit Review"}
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
                Reviews are hosted on our Google Business Profile and shown with Google as their source.
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
                <h3 className="text-lg font-bold text-slate-800">Read reviews on Google</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  We are linking to the original Google profile so you can read the reviews at their source.
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
                              Client Review
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
                  title: "Bond-Ready Cleaning",
                  desc: "We use a detailed bond-clean checklist and can review covered items from the agreed scope if inspection feedback is raised.",
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  icon: BadgeCheck,
                  title: "Fully Insured & Police Checked",
                  desc: "Fully insured with public liability cover, and every cleaner is background-screened before entering your home or office.",
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
                  desc: "Tell us about your property and any product requirements when you request a quote.",
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
                  Google reviews
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
                  q: "Where can I read customer reviews?",
                  a: "Visit our Google Business Profile to read customer reviews with Google shown as the source.",
                },
                {
                  q: "What re-clean support is available for bond cleaning?",
                  a: "For bond and end-of-lease cleans, contact us promptly if inspection feedback identifies an item within the agreed scope. We will review it under our covered-item re-clean support. This does not guarantee a bond refund.",
                },
                {
                  q: "Can I request the same regular cleaner for my home or office?",
                  a: "Absolutely. For recurring weekly, fortnightly, or monthly cleans, we allocate a dedicated cleaner or team to maintain consistent quality and familiarity with your property.",
                },
                {
                  q: "Are your cleaners covered by insurance?",
                  a: "Yes, all our cleaners are covered by our public liability insurance and have undergone national police background checks.",
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
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">Fully</p>
                <p className="text-xs text-white/60 font-medium">Insured Team</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">Free</p>
                <p className="text-xs text-white/60 font-medium">Covered-item re-clean support</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">15 min</p>
                <p className="text-xs text-white/60 font-medium">Quote Response</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#39BDE4]">{serviceAreaCount}</p>
                <p className="text-xs text-white/60 font-medium">Suburbs Served</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
