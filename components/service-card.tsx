import { Building2, CarIcon as Carpet, Glasses, Home, Sparkles, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price: string
}

export function ServiceCard({ title, description, icon, price }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Home":
        return <Home className="h-10 w-10 text-primary" />
      case "Building2":
        return <Building2 className="h-10 w-10 text-primary" />
      case "Sparkles":
        return <Sparkles className="h-10 w-10 text-primary" />
      case "Truck":
        return <Truck className="h-10 w-10 text-primary" />
      case "Glasses":
        return <Glasses className="h-10 w-10 text-primary" />
      case "Carpet":
        return <Carpet className="h-10 w-10 text-primary" />
      default:
        return <Home className="h-10 w-10 text-primary" />
    }
  }

  return (
    <div className="classic-card h-full">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-primary/10 p-4 rounded-full">{getIcon()}</div>
          <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
          <div className="w-12 h-1 bg-secondary mb-4"></div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="font-semibold text-primary mb-4">{price}</div>
          <Button asChild className="classic-button w-full">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

