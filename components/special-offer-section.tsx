"use client"

import { CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Fast Response Times",
  "Experienced Landscaping Team",
  "Free No-Obligation Estimate",
]

export function SpecialOfferSection() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Get Your Free Yard Transformation Quote
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            Discover how beautiful your yard could look with professional landscaping
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-card text-primary hover:bg-card/90 text-lg px-10 py-6 h-auto font-semibold"
            >
              Get My Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
