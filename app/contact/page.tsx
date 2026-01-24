"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      })

      setIsSubmitted(true)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <div className="page-header">
        <div className="classic-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-white/80 mb-8">
              Have questions or ready to book? We're here to help you with all your cleaning needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="contact-info-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-2">We're available 24/7</p>
                  <Link href="tel:0450833683" className="text-primary hover:underline font-medium">
                    0450 833 683
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-info-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">We'll respond to your inquiry within 24 hours</p>
                  <Link href="mailto:info@crystalfront.com" className="text-primary hover:underline font-medium">
                    info@crystalfront.com
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-info-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">Our main office is located in Bhaisepati, Lalitpur</p>
                  <address className="not-italic text-primary">
                    Bhaisepati
                    <br />
                    Lalitpur
                    <br />
                    Nepal
                  </address>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-info-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Available 24/7</li>
                    <li>Every day of the week</li>

                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="classic-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about our services, want to request a quote, or need to schedule a cleaning,
                we're here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Quick Response:</strong> We aim to respond to all inquiries
                    within 24 hours.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Free Quotes:</strong> Request a no-obligation quote for any of
                    our services.
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Personalized Service:</strong> We tailor our services to meet
                    your specific needs and preferences.
                  </span>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <div className="bg-green-100 p-4 rounded-full mb-6">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">Thank You!</h3>
                    <p className="text-center text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button asChild className="classic-button">
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="0412 345 678" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select onValueChange={handleSelectChange}>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="quote">Request a Quote</SelectItem>
                              <SelectItem value="booking">Booking Information</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full classic-button" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 justify-center">
                            <Send className="h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="classic-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Us</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve clients in Bhaisepati, Lalitpur, with our main office located in Bhaisepati.
            </p>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* This would be a real map in a production environment */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="classic-container">
          <div className="classic-card p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready for a Cleaner Space?</h2>
            <p className="text-muted-foreground mb-6">
              Book your cleaning service today and experience the CRYSTALFRONT difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild className="classic-button">
                <Link href="/book">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white hover:bg-gray-100 text-primary border-gray-300">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

