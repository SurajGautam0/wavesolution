"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, Bug, Building2, ChevronDown, Home, Mail, Menu, Phone, Repeat, Sparkles, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { businessInfo, siteLinks } from "@/lib/business-info"

const serviceRoutes = [
  { href: siteLinks.cleaningGoldCoast, label: "Cleaning Gold Coast", description: "Broad local overview for homes, offices, rentals, and businesses", icon: Sparkles },
  { href: siteLinks.homeCleaning, label: "House Cleaning", description: "Weekly, fortnightly, and one-off cleaning for homes", icon: Home },
  { href: siteLinks.officeCleaning, label: "Office Cleaning", description: "Professional workplace cleaning for offices and staff spaces", icon: Building2 },
  { href: siteLinks.bondCleaning, label: "Bond Cleaning", description: "Detailed move-out cleaning before inspection and handover", icon: Truck },
  { href: siteLinks.endOfLeaseCleaning, label: "End of Lease", description: "Rental exit cleaning for apartments, units, and homes", icon: Repeat },
  { href: siteLinks.moveInCleaning, label: "Move-In Cleaning", description: "Fresh-start cleaning before settling into a home or rental", icon: Home },
  { href: siteLinks.commercialCleaning, label: "Commercial Cleaning", description: "Tailored business cleaning for customer-facing premises", icon: Briefcase },
  { href: siteLinks.deepCleaning, label: "Deep Cleaning", description: "One-off detailed cleaning for homes, offices, and rentals", icon: Sparkles },
  { href: siteLinks.afterBuildersCleaning, label: "After Builders", description: "Post-renovation cleaning for homes, fit-outs, and commercial spaces", icon: Sparkles },
  { href: siteLinks.carpetCleaning, label: "Carpet Cleaning", description: "Carpet refresh for homes, rentals, and workplaces", icon: Sparkles },
  { href: siteLinks.pestControl, label: "Pest Control", description: "Local treatment support for common Gold Coast pest issues", icon: Bug },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServicesHovered, setIsServicesHovered] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainRoutes = [
    { href: siteLinks.home, label: "Home", active: pathname === siteLinks.home },
    {
      href: siteLinks.services,
      label: "Services",
      active:
        pathname === siteLinks.services ||
        pathname.startsWith("/services/") ||
        serviceRoutes.some((route) => pathname === route.href),
      hasSubmenu: true,
    },
    { href: siteLinks.gallery, label: "Gallery", active: pathname === siteLinks.gallery },
    { href: siteLinks.blog, label: "Blog", active: pathname === siteLinks.blog || pathname.startsWith("/blog/") },
    { href: siteLinks.about, label: "About", active: pathname === siteLinks.about },
    { href: siteLinks.testimonials, label: "Testimonials", active: pathname === siteLinks.testimonials },
    { href: siteLinks.contact, label: "Contact", active: pathname === siteLinks.contact },
    { href: siteLinks.portal, label: "Client Portal", active: pathname === siteLinks.portal },
  ]

  return (
    <>
      <div className="relative z-[60] hidden w-full border-b border-white/5 bg-primary py-0.5 text-white/90 md:block">
        <div className="classic-container flex items-center justify-between">
          <div className="flex items-center space-x-5 text-[11px] font-medium uppercase tracking-[0.12em]">
            <Link href={businessInfo.phoneHref} className="group flex items-center transition-all hover:text-secondary">
              <Phone className="mr-2 h-3 w-3 text-secondary group-hover:animate-pulse" />
              {businessInfo.phoneDisplay}
            </Link>
            <Link href={`mailto:${businessInfo.email}`} className="flex items-center transition-all hover:text-secondary">
              <Mail className="mr-2 h-3 w-3 text-secondary" />
              {businessInfo.email}
            </Link>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            Gold Coast house, office, carpet cleaning, and pest control
          </p>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          isScrolled ? "bg-white/95 py-0 shadow-md backdrop-blur-md" : "border-b border-white/5 bg-primary py-0 sm:py-0.5",
        )}
      >
        <div className="classic-container relative flex h-14 items-center justify-between sm:h-16 lg:h-[4.5rem]">
          <div className="flex items-center gap-0">
            <div className="z-10 -mr-4 flex items-center lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl p-0",
                      isScrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10",
                    )}
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] border-none bg-white p-0">
                  <div className="flex flex-col items-center bg-primary p-8 text-white sm:p-12">
                    <div className="relative mb-6 aspect-[3/1] w-full max-w-[200px]">
                      <Image src="/logo.png" alt="Wave Solution Cleaning" fill className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                      Gold Coast cleaning specialists
                    </p>
                  </div>
                  <div className="space-y-6 p-6">
                    <nav className="space-y-1">
                      {mainRoutes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center rounded-xl px-4 py-3 text-sm font-bold transition-all",
                            route.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-600 hover:bg-gray-50",
                          )}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="border-t border-gray-100 pt-6 text-center text-xs italic text-gray-400">
                      Trusted by homes and businesses across the Gold Coast
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Link href={siteLinks.home} className="group flex shrink-0 items-center">
              <div
                className={cn(
                  "relative origin-left transition-all duration-500 group-hover:scale-105",
                  "h-9 w-[108px] sm:h-12 sm:w-36 md:h-14 md:w-44 lg:h-16 lg:w-52",
                )}
              >
                <Image
                  src="/logo.png"
                  alt="Wave Solution Cleaning logo"
                  fill
                  priority
                  className={cn("object-contain transition-all duration-500", isScrolled ? "brightness-100" : "brightness-0 invert")}
                />
              </div>
            </Link>
          </div>

          <nav className="ml-10 hidden items-center space-x-1 lg:flex">
            {mainRoutes.map((route) => (
              <div
                key={route.href}
                className="group relative"
                onMouseEnter={() => route.hasSubmenu && setIsServicesHovered(true)}
                onMouseLeave={() => route.hasSubmenu && setIsServicesHovered(false)}
              >
                <Link
                  href={route.href}
                  className={cn(
                    "relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] transition-all",
                    isScrolled ? (route.active ? "text-primary" : "text-primary/60 hover:text-primary") : route.active ? "text-secondary" : "text-white/70 hover:text-white",
                  )}
                >
                  {route.label}
                  {route.hasSubmenu && <ChevronDown className="ml-1 inline h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 transform transition-transform group-hover:scale-x-100",
                      isScrolled ? "bg-primary" : "bg-secondary",
                    )}
                  />
                </Link>

                {route.hasSubmenu && isServicesHovered && (
                  <div className="absolute left-0 top-full z-[100] w-[620px] animate-in fade-in slide-in-from-top-2 pt-4 duration-300">
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/5 bg-white p-6 shadow-2xl">
                      <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-secondary/5 blur-3xl" />

                      <div className="relative z-10">
                        <div className="mb-6 flex items-center justify-between px-2">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900/40">Our Specialized Services</h4>
                          <Link href={siteLinks.services} className="text-[10px] font-black uppercase tracking-widest text-secondary transition-all hover:underline">
                            View All
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {serviceRoutes.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="group/item flex items-start rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50"
                            >
                              <div className="mr-4 shrink-0 rounded-xl bg-blue-50 p-2.5 text-primary transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white">
                                <service.icon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="mb-1.5 text-[13px] font-black leading-none text-blue-950 transition-colors group-hover/item:text-primary">
                                  {service.label}
                                </span>
                                <span className="line-clamp-2 text-[11px] font-medium leading-tight text-muted-foreground">{service.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-blue-50 px-2 pt-6">
                        <p className="flex items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          <Sparkles className="mr-2 h-3 w-3 text-secondary" /> Satisfaction Guaranteed
                        </p>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((value) => (
                            <div key={value} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-black text-primary">
                              {value}
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

          <div className="z-10 flex items-center">
            <Button
              asChild
              className="h-9 rounded-full bg-secondary px-4 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-xl shadow-secondary/20 transition-all hover:scale-105 hover:bg-secondary/90 active:scale-95 sm:h-10 sm:px-6"
            >
              <Link href={siteLinks.book}>Book Now</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
