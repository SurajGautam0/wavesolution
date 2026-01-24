import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  testimonial: string
  image: string
}

export function TestimonialCard({ name, location, rating, testimonial, image }: TestimonialCardProps) {
  return (
    <div className="classic-card h-full w-full max-w-full overflow-x-auto">
      <div className="p-4 sm:p-6 w-full max-w-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-secondary">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-primary">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground italic border-l-4 border-secondary pl-3 py-1 break-words text-sm sm:text-base">{testimonial}</p>
      </div>
    </div>
  )
}

