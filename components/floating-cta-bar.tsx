"use client"

import { useState, useEffect } from "react"
import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-3 animate-in slide-in-from-bottom-4">
      <div className="flex gap-3">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="flex-1 border-primary text-primary h-12"
        >
          <a href="tel:+15551234567">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
        <Button
          size="lg"
          onClick={scrollToForm}
          className="flex-1 bg-primary text-primary-foreground h-12"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Free Quote
        </Button>
      </div>
    </div>
  )
}
