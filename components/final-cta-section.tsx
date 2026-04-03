"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Ready For A Better Looking Yard?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Get your free quote today and start transforming your outdoor space.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
            >
              Get Your Free Quote Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 h-auto"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Phone Number */}
          <div className="mt-8">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-xl font-semibold"
            >
              <Phone className="w-6 h-6" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
