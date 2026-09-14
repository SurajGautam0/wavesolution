import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { businessInfo } from "@/lib/business-info"

export function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Quick Contact Widget */}
      <div className="classic-widget">
        <h3 className="classic-widget-title">Contact Us</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Phone className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Call Us</p>
              <Link href={businessInfo.phoneHref} className="text-primary hover:underline">
                {businessInfo.phoneDisplay}
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Our Location</p>
              <p className="text-sm text-slate-600">{businessInfo.address.full}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-sm text-slate-600">
                {businessInfo.businessHoursDisplay[0]}
                <br />
                {businessInfo.businessHoursDisplay[1]}
                <br />
                {businessInfo.businessHoursDisplay[2]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Request a Quote Widget */}
      <div className="classic-widget">
        <h3 className="classic-widget-title">Request a Quote</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Your Name" className="border-slate-200" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Your Email" type="email" className="border-slate-200" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Your Phone" className="border-slate-200" />
          </div>
          <Button className="classic-button w-full">Get a Quote</Button>
        </div>
      </div>

      {/* Service Areas Widget */}
      <div className="classic-widget">
        <h3 className="classic-widget-title">Gold Coast Service Areas</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <Link href="/locations/southport" className="font-medium hover:text-primary">
              Cleaning Services Southport
            </Link>
            <p className="text-sm text-slate-600 mt-1">
              Local cleaning for homes, apartments, offices, and rentals in Southport.
            </p>
          </div>
          <div className="border-b pb-4">
            <Link href="/locations/robina" className="font-medium hover:text-primary">
              Cleaning Services Robina
            </Link>
            <p className="text-sm text-slate-600 mt-1">
              House cleaning, office cleaning, deep cleaning, and more in Robina.
            </p>
          </div>
          <div>
            <Link href="/locations/surfers-paradise" className="font-medium hover:text-primary">
              Cleaning Services Surfers Paradise
            </Link>
            <p className="text-sm text-slate-600 mt-1">
              Apartment, holiday-let, and commercial cleaning across Surfers Paradise.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="classic-widget">
        <h3 className="classic-widget-title">Recent Posts</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <Link href="/blog/cleaning-tips" className="font-medium hover:text-primary">
              10 Cleaning Tips for a Spotless Home
            </Link>
            <p className="text-xs text-slate-600 mt-1">March 15, 2024</p>
          </div>
          <div className="border-b pb-4">
            <Link href="/blog/eco-friendly" className="font-medium hover:text-primary">
              Eco-Friendly Cleaning Solutions
            </Link>
            <p className="text-xs text-slate-600 mt-1">February 28, 2024</p>
          </div>
          <div>
            <Link href="/blog/office-cleaning" className="font-medium hover:text-primary">
              How Often Should You Clean Your Office?
            </Link>
            <p className="text-xs text-slate-600 mt-1">February 10, 2024</p>
          </div>

        </div>
      </div>
    </aside>
  )
}

