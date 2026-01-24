import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="classic-footer">
      <div className="classic-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-all duration-300 hover:scale-105">
              <span className="text-3xl sm:text-4xl font-serif font-black tracking-tighter text-white uppercase">
                Crystal<span className="text-secondary">Front</span>
              </span>
            </Link>

            <p className="text-white/80">Professional cleaning services for homes and businesses in Bhaisepati, Lalitpur.</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-serif font-bold">Quick Links</h3>
            <div className="w-12 h-1 bg-secondary mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/80 hover:text-secondary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-secondary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-white/80 hover:text-secondary">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-serif font-bold">Contact Us</h3>
            <div className="w-12 h-1 bg-secondary mb-4"></div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-white/80">Bhaisepati, Lalitpur</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary" />
                <Link href="tel:0450833683" className="text-white/80 hover:text-secondary">
                  0450 833 683
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-secondary" />
                <Link href="mailto:info@crystalfront.com" className="text-white/80 hover:text-secondary">
                  info@crystalfront.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-serif font-bold">Newsletter</h3>
            <div className="w-12 h-1 bg-secondary mb-4"></div>
            <p className="mb-4 text-white/80">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="space-y-2">
              <Input
                placeholder="Your email address"
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="classic-button w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/60">
              &copy; {new Date().getFullYear()} CRYSTALFRONT. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-white/60">
              <Link href="/admin" className="hover:text-secondary">
                Admin
              </Link>
              <Link href="/privacy" className="hover:text-secondary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

