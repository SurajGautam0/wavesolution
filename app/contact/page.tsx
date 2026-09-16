"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles,
  Award,
  Building2,
  Home,
  Check,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Calendar,
  Zap,
  PhoneCall,
  UserCheck
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { saveContact } from "@/lib/firebase-service"
import { businessInfo, siteLinks } from "@/lib/business-info"

const POPULAR_SERVICES = [
  "House Cleaning",
  "Bond / End of Lease",
  "Commercial & Office",
  "Carpet Steam Clean",
  "Deep Spring Clean",
  "Pest Control",
  "After Builders Clean",
]

const POPULAR_SUBURBS = [
  { name: "Southport", slug: "/locations/southport" },
  { name: "Robina", slug: "/locations/robina" },
  { name: "Broadbeach", slug: "/locations/broadbeach" },
  { name: "Surfers Paradise", slug: "/locations/surfers-paradise" },
  { name: "Burleigh Heads", slug: "/locations/burleigh-heads" },
  { name: "Palm Beach", slug: "/locations/palm-beach" },
  { name: "Coomera", slug: "/locations/coomera" },
  { name: "Helensvale", slug: "/locations/helensvale" },
  { name: "Varsity Lakes", slug: "/locations/varsity-lakes" },
  { name: "Nerang", slug: "/locations/nerang" },
  { name: "Merrimac", slug: "/locations/merrimac" },
  { name: "Benowa", slug: "/locations/benowa" },
]

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "House Cleaning",
    propertyType: "House (3-4 Bed)",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await saveContact({
        ...formData,
        subject: `${formData.service} - ${formData.suburb || "Gold Coast"}`,
        timestamp: new Date().toISOString(),
      })

      toast({
        title: "Message Sent Successfully",
        description:
          "Thank you! Our Gold Coast team has received your enquiry and will respond promptly.",
      })

      setIsSubmitted(true)
    } catch (error) {
      toast({
        title: "Submission Error",
        description:
          "There was an issue sending your message. Please give us a direct call at 0450 833 683.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Schema for Contact Page SEO
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Wave Solution Cleaning Gold Coast",
    description:
      "Contact Wave Solution Cleaning for free house, office, bond, and commercial cleaning quotes across the Gold Coast.",
    url: `${businessInfo.baseUrl}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: businessInfo.businessNameWithLocation,
      telephone: businessInfo.phoneInternationalDisplay,
      email: businessInfo.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: businessInfo.address.locality,
        addressRegion: businessInfo.address.region,
        postalCode: businessInfo.address.postalCode,
        addressCountry: businessInfo.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: businessInfo.coordinates.latitude,
        longitude: businessInfo.coordinates.longitude,
      },
      openingHoursSpecification: businessInfo.openingHoursSpecification,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1b1b3a] via-[#23234d] to-[#333365] text-white pt-24 pb-20 sm:pt-28 sm:pb-28">
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-[#39BDE4]/20 blur-[130px]" />
            <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-[#39BDE4]/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#39BDE4_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          </div>

          <div className="classic-container relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center space-x-2 text-xs font-medium text-white/60 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              <span className="text-[#39BDE4] font-semibold">Contact Us</span>
            </nav>

            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-md border border-white/15 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-[#39BDE4] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                  Gold Coast Local Support
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs font-medium text-white/90">
                  Avg 15-Minute Response Time
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                Get in Touch With Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39BDE4] via-[#6be0ff] to-white">
                  Gold Coast Cleaning Team
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Have questions about our house cleaning, bond cleans, or commercial schedules?
                Request a free tailored quote or reach out directly to our friendly Gold Coast team.
              </p>

              {/* Quick Actions Bar */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-lg shadow-[#39BDE4]/25"
                >
                  <Link href={businessInfo.phoneHref}>
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call {businessInfo.phoneDisplay}
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl"
                >
                  <Link href={siteLinks.book}>
                    <Calendar className="mr-2 h-4 w-4 text-[#39BDE4]" />
                    Book Online in 60 Seconds
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Direct Contact Method Cards */}
        <section className="relative z-20 -mt-8 sm:-mt-12 classic-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <Card className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[#39BDE4]/10 text-[#249FC5] flex items-center justify-center mb-5">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Direct Phone</h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Speak with our Gold Coast customer care manager.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={businessInfo.phoneHref}
                    className="text-base font-extrabold text-[#333365] hover:text-[#249FC5] flex items-center justify-between"
                  >
                    <span>{businessInfo.phoneDisplay}</span>
                    <ChevronRight className="h-4 w-4 text-[#39BDE4]" />
                  </Link>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Mon - Sat: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Support</h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Send quote specs, floor plans or photos for fast estimate.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`mailto:${businessInfo.email}`}
                    className="text-sm font-extrabold text-[#333365] hover:text-[#249FC5] flex items-center justify-between truncate"
                  >
                    <span className="truncate">{businessInfo.email}</span>
                    <ChevronRight className="h-4 w-4 text-[#39BDE4] shrink-0" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                    Fast response within 24 hours
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas Card */}
            <Card className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Coverage Area</h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Operating across all coastal and inland Gold Coast suburbs.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={businessInfo.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-[#333365] hover:text-[#249FC5] flex items-center justify-between"
                  >
                    <span>Gold Coast, QLD 4215</span>
                    <ExternalLink className="h-4 w-4 text-[#39BDE4]" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium mt-1 block">
                    15+ Suburbs Serviced
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours Card */}
            <Card className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Operating Hours</h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Early morning & after-hours commercial available.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Mon - Fri:</span>
                    <span>8:00am - 6:00pm</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Saturday:</span>
                    <span>9:00am - 4:00pm</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Interactive Form & Trust Sidebar Section */}
        <section className="py-16 sm:py-20">
          <div className="classic-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Container (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-900/5">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-2">
                      <Zap className="h-3.5 w-3.5" />
                      Instant Free Quote & Enquiry
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-slate-600 mt-2">
                      Tell us about your property and cleaning requirements. We will provide a transparent, upfront quote.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center animate-fadeIn">
                      <div className="h-16 w-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-black text-emerald-900 mb-2">
                        Message Received!
                      </h3>
                      <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6 leading-relaxed">
                        Thank you for contacting WaveSolution. One of our Gold Coast cleaning coordinators will review your details and respond with a personalized quote within 15–30 minutes.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => {
                            setIsSubmitted(false)
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              suburb: "",
                              service: "House Cleaning",
                              propertyType: "House (3-4 Bed)",
                              message: "",
                            })
                          }}
                          variant="outline"
                          className="rounded-xl font-bold border-emerald-300 text-emerald-800"
                        >
                          Send Another Message
                        </Button>
                        <Button
                          asChild
                          className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl"
                        >
                          <Link href={siteLinks.home}>Return to Homepage</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Selector Chips */}
                      <div>
                        <Label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                          Select Required Service
                        </Label>
                        <div className="flex flex-wrap gap-2">
                          {POPULAR_SERVICES.map((srv) => {
                            const isSelected = formData.service === srv
                            return (
                              <button
                                key={srv}
                                type="button"
                                onClick={() => handleServiceSelect(srv)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                                  isSelected
                                    ? "bg-[#333365] text-white shadow-md shadow-[#333365]/20"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60"
                                }`}
                              >
                                {srv}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Your Full Name *
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-xl border-slate-200 py-3 text-sm focus:ring-[#39BDE4]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="e.g. 0412 345 678"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-xl border-slate-200 py-3 text-sm focus:ring-[#39BDE4]"
                          />
                        </div>
                      </div>

                      {/* Email & Suburb */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="e.g. sarah@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-xl border-slate-200 py-3 text-sm focus:ring-[#39BDE4]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="suburb" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Gold Coast Suburb *
                          </Label>
                          <Input
                            id="suburb"
                            required
                            placeholder="e.g. Southport, Robina, Broadbeach"
                            value={formData.suburb}
                            onChange={handleChange}
                            className="rounded-xl border-slate-200 py-3 text-sm focus:ring-[#39BDE4]"
                          />
                        </div>
                      </div>

                      {/* Property Type Dropdown */}
                      <div className="space-y-1.5">
                        <Label htmlFor="propertyType" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Property Size / Type
                        </Label>
                        <select
                          id="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#39BDE4]"
                        >
                          <option value="Apartment / Unit (1-2 Bed)">Apartment / Unit (1-2 Bed)</option>
                          <option value="Apartment / Unit (3+ Bed)">Apartment / Unit (3+ Bed)</option>
                          <option value="House (3-4 Bed)">House (3-4 Bed)</option>
                          <option value="Large Family Home (5+ Bed)">Large Family Home (5+ Bed)</option>
                          <option value="Commercial Office / Workspace">Commercial Office / Workspace</option>
                          <option value="Retail / Restaurant / Clinic">Retail / Restaurant / Clinic</option>
                        </select>
                      </div>

                      {/* Message / Details */}
                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Cleaning Requirements & Preferred Dates
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Tell us about special requests (e.g. oven clean, carpet steam, pet hair, preferred days/times)..."
                          value={formData.message}
                          onChange={handleChange}
                          className="rounded-xl border-slate-200 text-sm focus:ring-[#39BDE4]"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl text-base shadow-lg shadow-[#39BDE4]/20 transition-all"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending Request...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Request Free Quote
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Trust & Guarantee Sidebar (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* 100% Bond Guarantee Card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#23234d] to-[#333365] text-white p-7 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-[#39BDE4]/20 text-[#39BDE4]">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">
                        100% Bond Back Guarantee
                      </h3>
                      <p className="text-xs text-[#39BDE4] font-semibold">
                        72-Hour Free Callback Promise
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                    If your property manager flags any cleaning item from the official RTA exit report, our cleaners will return and fix it at zero extra charge.
                  </p>
                  <ul className="space-y-2 text-xs text-white/90">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#39BDE4]" />
                      <span>RTA-compliant comprehensive room checklist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#39BDE4]" />
                      <span>Oven, rangehood, and window tracks included</span>
                    </li>
                  </ul>
                </div>

                {/* Trust Badges Box */}
                <div className="rounded-3xl bg-white border border-slate-200/80 p-7 shadow-sm space-y-4">
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                    Why Gold Coast Residents Trust Us:
                  </h4>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">$20 Million Public Liability</p>
                      <p className="text-xs text-slate-500">Fully insured for complete peace of mind.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600 mt-0.5 shrink-0">
                      <UserCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">National Police-Checked Staff</p>
                      <p className="text-xs text-slate-500">Strictly background-vetted cleaners.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-600 mt-0.5 shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Eco-Friendly & Pet Safe</p>
                      <p className="text-xs text-slate-500">Non-toxic formulas safe for kids and pets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-600 mt-0.5 shrink-0">
                      <Star className="h-4 w-4 fill-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">4.9 / 5.0 Star Rating</p>
                      <p className="text-xs text-slate-500">430+ verified Gold Coast reviews.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Call Banner */}
                <div className="rounded-3xl bg-slate-100 p-6 text-center border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Need an Urgent Quote?
                  </p>
                  <p className="text-lg font-black text-slate-900 mb-3">
                    Speak directly to our team now
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[#333365] hover:bg-[#23234d] text-white font-bold rounded-xl"
                  >
                    <Link href={businessInfo.phoneHref}>
                      <PhoneCall className="mr-2 h-4 w-4 text-[#39BDE4]" />
                      Call {businessInfo.phoneDisplay}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suburbs Covered Grid */}
        <section className="py-16 sm:py-20 bg-white border-y border-slate-200/70">
          <div className="classic-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#39BDE4]/10 px-3.5 py-1 text-xs font-bold text-[#249FC5] uppercase tracking-wider mb-3">
                <MapPin className="h-3.5 w-3.5" />
                Service Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Servicing All Gold Coast Suburbs
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Our cleaners are locally stationed across the northern, central, and southern Gold Coast.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {POPULAR_SUBURBS.map((suburb) => (
                <Link
                  key={suburb.name}
                  href={suburb.slug}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#39BDE4] hover:bg-white transition-all group shadow-sm"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#249FC5]">
                    {suburb.name}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#39BDE4] transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={siteLinks.locations}
                className="text-xs font-bold text-[#249FC5] hover:underline inline-flex items-center gap-1"
              >
                View all Gold Coast location service pages
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Google Maps Embed Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="classic-container">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Our Gold Coast Location
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Serving residences, apartments, and corporate offices from Coolangatta to Coomera.
              </p>
            </div>

            <div className="h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Wave Solution Cleaning - Gold Coast Map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={businessInfo.mapsEmbedUrl}
              />
            </div>
          </div>
        </section>

        {/* FAQs About Contact & Quotes */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="classic-container max-w-3xl">
            <div className="text-center mb-12">
              <Badge className="bg-[#39BDE4]/10 text-[#249FC5] hover:bg-[#39BDE4]/10 mb-2 font-bold text-xs uppercase tracking-wider">
                Common Inquiries
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Contact Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How fast will I receive my cleaning quote?",
                  a: "For standard residential and office cleans, we typically respond within 15 to 30 minutes during business hours with a clear, itemized quote.",
                },
                {
                  q: "Do I need to be home when the cleaners arrive?",
                  a: "No. Many of our Gold Coast clients arrange key safe access or meet our police-checked cleaners at the start of the job and return when it is completed.",
                },
                {
                  q: "Do you provide urgent same-day or next-day cleans?",
                  a: "Yes! Subject to team availability, we accommodate urgent move-in, move-out, or commercial cleaning requests across the Gold Coast.",
                },
                {
                  q: "Are cleaning supplies and equipment included?",
                  a: "Yes. Our team arrives fully equipped with commercial-grade HEPA vacuums, steam extractors, microfiber cloths, and eco-friendly solutions.",
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

        {/* Final CTA Banner */}
        <section className="bg-gradient-to-br from-[#333365] to-[#1b1b3a] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39BDE4]/10 rounded-full blur-[140px]" />
          </div>

          <div className="classic-container relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm border border-white/15">
              <Sparkles className="h-4 w-4 text-[#39BDE4]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#39BDE4]">
                Book Online Or Call Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Ready to Schedule Your Gold Coast Clean?
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Book in less than 60 seconds or speak directly with our friendly Gold Coast customer care team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-[#39BDE4] hover:bg-[#2fb2d8] text-[#1b1b3a] font-bold rounded-xl shadow-xl shadow-[#39BDE4]/20 px-8"
              >
                <Link href={siteLinks.book}>
                  Book Online Now
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
          </div>
        </section>
      </div>
    </>
  )
}
