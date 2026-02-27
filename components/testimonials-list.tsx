"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getApprovedTestimonials } from "@/lib/firebase-service"

interface TestimonialProps {
  id: string
  name: string
  location: string
  rating: number
  testimonial: string
  image: string
  date: string
  service: string
  category: string
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <Card className="testimonial-card h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-secondary">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Quote className="absolute -left-2 -top-2 h-8 w-8 text-secondary/20 rotate-180" />
          <p className="text-muted-foreground italic pl-4 py-1">{testimonial.testimonial}</p>
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
          <span>{testimonial.service}</span>
          <span>{testimonial.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsList() {
  const [testimonials, setTestimonials] = useState<Record<string, TestimonialProps[]>>({
    residential: [],
    commercial: [],
    specialized: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const data = await getApprovedTestimonials()

        // Categorize testimonials
        const categorized: Record<string, TestimonialProps[]> = {
          residential: [],
          commercial: [],
          specialized: []
        }

        data.forEach((testimonial: TestimonialProps) => {
          if (!testimonial.category) {
            // Fallback categorization based on service if category is not set
            if (testimonial.service.includes("Home") || testimonial.service.includes("Move")) {
              categorized.residential.push(testimonial)
            } else if (testimonial.service.includes("Office") || testimonial.service.includes("Commercial")) {
              categorized.commercial.push(testimonial)
            } else {
              categorized.specialized.push(testimonial)
            }
          } else {
            categorized[testimonial.category].push(testimonial)
          }
        })

        setTestimonials(categorized)
      } catch (err) {
        console.error("Error fetching testimonials:", err)
        setError("Failed to load testimonials. Please try again later.")

        // Fallback to sample data in case of error
        setTestimonials({
          residential: [
            {
              id: "1",
              name: "Sarah Johnson",
              location: "Southport, QLD",
              rating: 5,
              testimonial:
                "WaveSolution has been cleaning my home for over a year now, and I couldn't be happier with their service. The team is always punctual, thorough, and friendly.",
              image: "/placeholder.svg?height=80&width=80",
              date: "March 15, 2024",
              service: "Home Cleaning",
              category: "residential"
            }
          ],
          commercial: [
            {
              id: "2",
              name: "David Roberts",
              location: "Perth, WA",
              rating: 5,
              testimonial:
                "WaveSolution has been maintaining our office building for the past two years. Their attention to detail and reliability have made them an invaluable partner.",
              image: "/placeholder.svg?height=80&width=80",
              date: "March 10, 2024",
              service: "Office Cleaning",
              category: "commercial"
            }
          ],
          specialized: [
            {
              id: "3",
              name: "Thomas Brown",
              location: "Brisbane, QLD",
              rating: 5,
              testimonial:
                "I was impressed with WaveSolution's carpet cleaning service. They removed stains that I thought were permanent and revitalized my old carpets.",
              image: "/placeholder.svg?height=80&width=80",
              date: "February 20, 2024",
              service: "Carpet Cleaning",
              category: "specialized"
            }
          ]
        })
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return <div className="text-center py-20">Loading testimonials...</div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>
  }

  return (
    <Tabs defaultValue="residential" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="residential">Residential</TabsTrigger>
        <TabsTrigger value="commercial">Commercial</TabsTrigger>
        <TabsTrigger value="specialized">Specialized</TabsTrigger>
      </TabsList>
      {Object.entries(testimonials).map(([category, items]) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
} 
