import { Star, Shield, MapPin, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "These guys completely transformed our yard. Fast, professional, and affordable. I couldn't be happier with the results!",
    author: "Sarah M.",
    location: "Homeowner in Austin",
    rating: 5,
  },
  {
    quote:
      "From the first call to completion, the experience was seamless. Our neighbors keep asking who did our landscaping.",
    author: "Michael R.",
    location: "Homeowner in Round Rock",
    rating: 5,
  },
  {
    quote:
      "Best landscaping company in the area. They showed up on time, worked efficiently, and left our yard looking amazing.",
    author: "Jennifer L.",
    location: "Homeowner in Cedar Park",
    rating: 5,
  },
]

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: MapPin, label: "Locally Owned & Operated" },
  { icon: Award, label: "Free Estimates" },
  { icon: Users, label: "100+ Happy Customers" },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Trusted By Homeowners Across Austin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See why local homeowners choose us for their landscaping needs
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="mt-4 text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-secondary-foreground text-sm md:text-base">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
