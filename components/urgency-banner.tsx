"use client"

import { useState, useEffect } from "react"
import { Clock, X } from "lucide-react"

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [spotsLeft, setSpotsLeft] = useState(3)

  useEffect(() => {
    // Randomize between 2-4 spots for authenticity
    setSpotsLeft(Math.floor(Math.random() * 3) + 2)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-accent text-accent-foreground py-2.5 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <Clock className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span className="font-medium text-center">
          <span className="hidden sm:inline">Limited Availability: </span>
          Only <span className="font-bold">{spotsLeft} spots</span> left this week for free estimates
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-accent-foreground/10 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
