"use client"

import { useState } from "react"
import { Phone, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function InlineQuoteWidget() {
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return
    
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const scrollToFullForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Card className="bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
      <CardContent className="p-5">
        {isSubmitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 text-primary mx-auto" />
            <p className="mt-3 font-semibold text-card-foreground">We&apos;ll call you shortly!</p>
            <p className="text-sm text-muted-foreground mt-1">Usually within 15 minutes</p>
          </div>
        ) : (
          <>
            <p className="text-sm font-medium text-card-foreground mb-3">
              Get a callback in 15 minutes:
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-9 bg-background h-11"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground h-11 px-4"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </Button>
            </form>
            <button
              type="button"
              onClick={scrollToFullForm}
              className="text-xs text-muted-foreground hover:text-foreground mt-3 underline underline-offset-2"
            >
              Or fill out the full form
            </button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
