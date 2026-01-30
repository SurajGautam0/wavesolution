import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="classic-footer">
      <div className="classic-container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <div className="relative w-32 h-12 min-[400px]:w-40 min-[400px]:h-16 sm:w-48 sm:h-20 md:w-56 md:h-24">
                <Image
                  src="/logo.png"
                  alt="CRYSTALFRONT"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
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
                href="https://www.instagram.com/crystalfrontwincare?igsh=eWt5czdydGxuODF1&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@crystalfront2026"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <span className="sr-only">TikTok</span>
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
                <Link href="/gallery" className="text-white/80 hover:text-secondary">
                  Gallery
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

