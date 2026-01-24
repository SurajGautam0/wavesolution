"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [bookingStep, setBookingStep] = useState(1)

  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-20 md:py-32">
      {/* Nepali Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1544806030-22d206f9d150?auto=format&fit=crop&q=80&w=2400"
          alt="Kathmandu Valley Landscape"
          fill
          className="object-cover scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-secondary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl opacity-50" />

      <div className="classic-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-8 text-white text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm self-center lg:self-start">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Crystal Clear Results</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tighter leading-[1.1]">
                Professional Cleaning Excellence in <span className="text-secondary shimmer-text">Valley</span>
              </h1>

              <div className="w-24 h-1.5 bg-secondary mx-auto lg:mx-0 rounded-full"></div>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-lg sm:text-xl text-white/70 leading-relaxed font-medium">
                Experience the CRYSTALFRONT standard. We bring a new level of clean to your Bhaisepati home or office with eco-friendly products.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="h-16 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black text-lg uppercase tracking-widest shadow-2xl shadow-secondary/30 transition-all hover:scale-105 active:scale-95">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full border-2 border-white/20 hover:border-white text-white font-black text-lg uppercase tracking-widest transition-all hover:scale-105 active:scale-95 bg-white/5 backdrop-blur-sm">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative group">
            {/* Decorative Card Shadow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition-opacity" />

            <Card className="relative classic-card border-none shadow-2xl mt-8 lg:mt-0 w-full max-w-[480px] mx-auto bg-white rounded-[2rem] overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary p-6 sm:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-16 -mt-16" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Fast Quote</h3>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mt-2 flex items-center">
                      <Clock className="w-3 h-3 mr-2 text-secondary" /> Get scheduled in seconds
                    </p>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6">
                  {bookingStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Service Required</Label>
                        <Select>
                          <SelectTrigger className="h-14 border-gray-100 bg-gray-50/50 rounded-2xl focus:ring-secondary/20 transition-all font-bold text-gray-700">
                            <SelectValue placeholder="What can we clean for you?" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-gray-100 shadow-2xl">
                            <SelectItem value="window">Window Cleaning</SelectItem>
                            <SelectItem value="glass">Glass Cleaning</SelectItem>
                            <SelectItem value="storefront">Storefront Cleaning</SelectItem>
                            <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                            <SelectItem value="interior">Interior Glass Cleaning</SelectItem>
                          </SelectContent>

                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Service Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
                          <Input placeholder="e.g., Bhaisepati, Sanepa" className="h-14 pl-12 border-gray-100 bg-gray-50/50 rounded-2xl focus:ring-secondary/20 transition-all font-bold text-gray-700" />
                        </div>
                      </div>
                      <Button onClick={() => setBookingStep(2)} className="h-16 w-full rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                        Continue
                      </Button>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Select Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
                          <Input type="date" className="h-14 pl-12 border-gray-100 bg-gray-50/50 rounded-2xl focus:ring-secondary/20 transition-all font-bold text-gray-700" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" onClick={() => setBookingStep(1)} className="h-16 rounded-2xl border-gray-100 font-bold text-gray-400 hover:text-primary">
                          Back
                        </Button>
                        <Button asChild className="h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black uppercase tracking-widest shadow-xl shadow-secondary/20">
                          <Link href="/book">Next Step</Link>
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <div className={cn("w-2 h-2 rounded-full transition-all duration-300", bookingStep === 1 ? "bg-primary w-6" : "bg-gray-200")} />
                    <div className={cn("w-2 h-2 rounded-full transition-all duration-300", bookingStep === 2 ? "bg-primary w-6" : "bg-gray-200")} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
