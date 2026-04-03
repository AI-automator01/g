"use client"

import { Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Beautiful professionally landscaped yard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight text-balance">
            Transform Your Yard With Professional Landscaping
          </h1>
          <p className="mt-6 text-lg md:text-xl text-card/90 text-pretty">
            Trusted local landscaping experts serving homeowners in Austin. Fast quotes,
            reliable service, and beautiful results.
          </p>

          {/* Benefit Stack */}
          <div className="mt-8 space-y-3">
            {[
              "Free Landscaping Estimates",
              "Licensed & Insured Professionals",
              "5-Star Rated Local Service",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-card">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
            >
              Get Your Free Landscaping Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card text-card bg-card/10 hover:bg-card hover:text-foreground text-lg px-8 py-6 h-auto"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Phone Number */}
          <div className="mt-6">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 text-card/90 hover:text-card transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-card/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-card/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
