"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span
              className={`font-bold text-lg md:text-xl transition-colors ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              GreenScape Pro
            </span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 font-semibold transition-colors ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
            <Button
              variant="outline"
              className={`transition-all ${
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-card text-card bg-card/10 hover:bg-card hover:text-foreground"
              }`}
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              Call Now
            </Button>
            <Button onClick={scrollToForm} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-card"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border p-4 space-y-4 animate-in slide-in-from-top-2">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-foreground font-semibold"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>(555) 123-4567</span>
            </a>
            <Button
              variant="outline"
              className="w-full border-primary text-primary"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              Call Now
            </Button>
            <Button onClick={scrollToForm} className="w-full bg-primary text-primary-foreground">
              Get Free Quote
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
