"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter, ChevronDown, Glasses, Sparkles, Store, ShoppingBag, Building2, Sun, Layout, Square, Eraser, Monitor, Utensils, Briefcase } from "lucide-react"

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
    { href: "/services", label: "Window Cleaning", description: "Crystal clear views for homes & businesses", icon: Glasses },
    { href: "/services", label: "Glass Cleaning", description: "Specialized streak-free glass treatment", icon: Sparkles },
    { href: "/services", label: "Storefront Glass", description: "Welcoming entrances for your shop", icon: Store },
    { href: "/services", label: "Shop Front", description: "Keep your commercial frontage spotless", icon: ShoppingBag },
    { href: "/services", label: "Commercial Glass", description: "Large scale glass cleaning solutions", icon: Building2 },
    { href: "/services", label: "Exterior Glass", description: "Safe cleaning for high-reach windows", icon: Sun },
    { href: "/services", label: "Interior Glass", description: "Detailed cleaning for inside partitions", icon: Layout },
    { href: "/services", label: "Frame & Sill", description: "Complete frame and track maintenance", icon: Square },
    { href: "/services", label: "Spot & Stain Removal", description: "Expert mineral deposit & spot removal", icon: Eraser },
    { href: "/services", label: "Showroom Glass", description: "Display-ready glass for showrooms", icon: Monitor },
    { href: "/services", label: "Restaurant & Café", description: "Hygienic cleaning for dining spaces", icon: Utensils },
    { href: "/services", label: "Office Windows", description: "Bright and clear workspaces", icon: Briefcase },
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
        <div className="classic-container relative flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Mobile Burger Menu (Left) */}
          <div className="flex items-center lg:hidden z-10">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-10 w-10 flex items-center justify-center rounded-xl",
                    isScrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10",
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 border-none bg-white">
                <div className="bg-primary p-8 sm:p-12 text-white flex flex-col items-center">
                  <div className="relative w-full max-w-[200px] aspect-[3/1] mb-6">
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
                  <div className="pt-6 border-t border-gray-100 italic text-xs text-gray-400 text-center">
                    Trusted by 500+ locals in Lalitpur
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo (Centered on Mobile, Left on Desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:flex lg:items-center">
            <Link href="/" className="flex items-center group shrink-0">
              <div className={cn(
                "relative transition-all duration-500 group-hover:scale-105 origin-center lg:origin-left",
                "w-44 h-12 sm:w-56 sm:h-16 md:w-64 md:h-18 lg:w-72 lg:h-22"
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
          </div>

          {/* Nav Items (Desktop only) */}
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
                  <div className="absolute left-0 top-full pt-4 w-[600px] z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-primary/5 p-6 overflow-hidden relative">
                      {/* Decorative Background */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6 px-2">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900/40">Our Specialized Services</h4>
                          <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:underline transition-all">View All →</Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {serviceRoutes.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="flex items-start p-3 rounded-2xl hover:bg-blue-50/50 group/item transition-all duration-300 border border-transparent hover:border-blue-100"
                            >
                              <div className="mr-4 p-2.5 rounded-xl bg-blue-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shrink-0">
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-black text-blue-950 group-hover/item:text-primary transition-colors leading-none mb-1.5">{service.label}</span>
                                <span className="text-[11px] font-medium text-muted-foreground leading-tight line-clamp-1">{service.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Dropdown Footer */}
                      <div className="mt-6 pt-6 border-t border-blue-50 flex items-center justify-between px-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center">
                          <Sparkles className="w-3 h-3 mr-2 text-secondary" /> Crystal Clear Satisfaction Guaranteed
                        </p>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-black text-primary overflow-hidden">
                              <Image src={`/placeholder.svg?height=30&width=30`} alt="User" width={24} height={24} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section (Book Now) */}
          <div className="flex items-center z-10">
            <Button
              asChild
              className="h-8 sm:h-12 px-3 sm:px-8 rounded-full bg-secondary hover:bg-secondary/90 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-secondary/20"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

        </div>

      </header>
    </>
  )
}
