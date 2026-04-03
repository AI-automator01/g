"use client"

import { useState } from "react"
import { Clock, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Lawn Maintenance",
  "Landscape Design",
  "Mulching & Garden Beds",
  "Yard Cleanup",
  "Tree & Shrub Trimming",
  "Full Yard Transformation",
  "Other",
]

export function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Request Your Free Landscaping Quote
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Fill out the form and one of our landscaping experts will get back
                to you within 24 hours.
              </p>

              {/* Trust Signals */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">24-Hour Response</p>
                    <p className="text-sm text-muted-foreground">
                      We respond to all inquiries quickly
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">No Obligation</p>
                    <p className="text-sm text-muted-foreground">
                      Your quote is completely free
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="bg-card border-border shadow-xl">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      We&apos;ve received your request. One of our landscaping experts
                      will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Address
                      </label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Your property address"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-card-foreground mb-1.5"
                      >
                        Service Needed
                      </label>
                      <Select name="service" required>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 h-auto text-lg font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Landscaping Quote"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      We respond to all quote requests within 24 hours.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
