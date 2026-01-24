"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServicesHovered, setIsServicesHovered] = React.useState(false)
  const servicesRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainRoutes = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/services", label: "Services", active: pathname === "/services" || pathname.startsWith("/services/"), hasSubmenu: true },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/testimonials", label: "Testimonials", active: pathname === "/testimonials" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
    { href: "/login", label: "Client Portal", active: pathname === "/login" },
  ]

  const serviceRoutes = [
    { href: "/services/home-cleaning", label: "Home Cleaning", icon: "🏠" },
    { href: "/services/office-cleaning", label: "Office Cleaning", icon: "🏢" },
    { href: "/services/deep-cleaning", label: "Deep Cleaning", icon: "✨" },
    { href: "/services/move-in-out", label: "Move In/Out", icon: "📦" },
    { href: "/services/window-cleaning", label: "Window Cleaning", icon: "🪟" },
    { href: "/services/carpet-cleaning", label: "Carpet Cleaning", icon: "🧹" },
  ]

  return (
    <>
      {/* Top Bar - Hidden on small mobile */}
      <div className="hidden md:block w-full bg-primary text-white/90 py-1 border-b border-white/5 relative z-[60]">
        <div className="classic-container flex items-center justify-between">
          <div className="flex items-center space-x-6 text-xs font-medium uppercase tracking-[0.15em]">
            <Link href="tel:0450833683" className="flex items-center hover:text-secondary transition-all group">
              <Phone className="mr-2 h-3 w-3 text-secondary group-hover:animate-pulse" />
              0450 833 683
            </Link>
            <Link href="mailto:info@crystalfront.com" className="flex items-center hover:text-secondary transition-all">
              <Mail className="mr-2 h-3 w-3 text-secondary" />
              info@crystalfront.com
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="text-white/60 hover:text-secondary transition-all hover:scale-110">
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-0.5 shadow-md"
            : "bg-primary py-0.5 sm:py-1 border-b border-white/5",
        )}
      >
        <div className="classic-container flex items-center justify-between">
          <div className="flex items-center flex-1 lg:flex-none">
            {/* Mobile Burger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "lg:hidden mr-3 h-10 w-10 flex items-center justify-center rounded-xl",
                    isScrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10",
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 border-none bg-white">
                <div className="bg-primary p-8 sm:p-12 text-white flex flex-col items-center">
                  <div className="relative w-full max-w-[200px] aspect-[2/1] mb-4">
                    <Image
                      src="/logo.png"
                      alt="CRYSTALFRONT"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <p className="text-white/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black underline underline-offset-8 decoration-secondary/30 text-center">Premium Cleaning Service</p>
                </div>
                <div className="p-6 space-y-6">
                  <nav className="space-y-1">
                    {mainRoutes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-all",
                          route.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-6 border-t border-gray-100 italic text-xs text-gray-400">
                    Trusted by 500+ locals in Lalitpur
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className={cn(
                "relative transition-all duration-500 group-hover:scale-105",
                "w-24 h-7 min-[400px]:w-32 min-[400px]:h-9 sm:w-40 sm:h-12 md:w-48 md:h-14 lg:w-56 lg:h-16"
              )}>
                <Image
                  src="/logo.png"
                  alt="CRYSTALFRONT Logo"
                  fill
                  priority
                  className={cn(
                    "object-contain transition-all duration-500",
                    isScrolled ? "brightness-100" : "brightness-0 invert"
                  )}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 ml-10">
              {mainRoutes.map((route) => (
                <div
                  key={route.href}
                  className="relative group"
                  onMouseEnter={() => route.hasSubmenu && setIsServicesHovered(true)}
                  onMouseLeave={() => route.hasSubmenu && setIsServicesHovered(false)}
                >
                  <Link
                    href={route.href}
                    className={cn(
                      "px-4 py-2 text-[13px] font-black uppercase tracking-widest rounded-full transition-all relative overflow-hidden",
                      isScrolled
                        ? route.active ? "text-primary" : "text-primary/60 hover:text-primary"
                        : route.active ? "text-secondary" : "text-white/70 hover:text-white",
                    )}
                  >
                    {route.label}
                    {route.hasSubmenu && <ChevronDown className="ml-1 h-3.5 w-3.5 inline transition-transform group-hover:rotate-180" />}
                    <span className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100",
                      isScrolled ? "bg-primary" : "bg-secondary"
                    )} />
                  </Link>

                  {/* Mega Dropdown */}
                  {route.hasSubmenu && isServicesHovered && (
                    <div className="absolute left-0 top-full pt-4 w-64 z-[100] animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="bg-white rounded-3xl shadow-2xl border border-primary/5 p-2 grid grid-cols-1 gap-1">
                        {serviceRoutes.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center px-4 py-3 rounded-2xl hover:bg-primary/5 group/item transition-all"
                          >
                            <span className="mr-3 text-lg group-hover/item:scale-110 transition-transform">{service.icon}</span>
                            <span className="text-sm font-bold text-gray-900 group-hover/item:text-primary transition-colors">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <Button
              asChild
              className="h-8 sm:h-10 px-4 sm:px-7 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
