import Link from "next/link"
import { CalendarDays, Clock, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
              <Link href="tel:0450833683" className="text-primary hover:underline">
                0450 833 683
              </Link>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Our Location</p>
              <p className="text-sm text-muted-foreground">Bhaisepati, Lalitpur</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 8am - 6pm
                <br />
                Saturday: 9am - 4pm
                <br />
                Sunday: Closed
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
            <Input placeholder="Your Name" className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Your Email" type="email" className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Input placeholder="Your Phone" className="border-gray-300" />
          </div>
          <Button className="classic-button w-full">Get a Quote</Button>
        </div>
      </div>

      {/* Upcoming Events Widget */}
      <div className="classic-widget">
        <h3 className="classic-widget-title">Upcoming Events</h3>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="font-medium">Cleaning Workshop</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4 text-primary" />
              <span>March 25, 2024</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Learn professional cleaning techniques from our experts.
            </p>
          </div>
          <div className="border-b pb-4">
            <p className="font-medium">Community Clean-up</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4 text-primary" />
              <span>April 15, 2024</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Join us for a community clean-up event at Sydney Harbor.
            </p>
          </div>
          <div>
            <p className="font-medium">Eco-Cleaning Seminar</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4 text-primary" />
              <span>May 10, 2024</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about environmentally friendly cleaning solutions.
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
            <p className="text-xs text-muted-foreground mt-1">March 15, 2024</p>
          </div>
          <div className="border-b pb-4">
            <Link href="/blog/eco-friendly" className="font-medium hover:text-primary">
              Eco-Friendly Cleaning Solutions
            </Link>
            <p className="text-xs text-muted-foreground mt-1">February 28, 2024</p>
          </div>
          <div>
            <Link href="/blog/office-cleaning" className="font-medium hover:text-primary">
              How Often Should You Clean Your Office?
            </Link>
            <p className="text-xs text-muted-foreground mt-1">February 10, 2024</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

