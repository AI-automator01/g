"use client"

import { Leaf, Pencil, Flower2, TreeDeciduous, Scissors } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Leaf,
    title: "Lawn Maintenance",
    description:
      "Weekly or biweekly lawn care to keep your yard looking perfect year-round.",
  },
  {
    icon: Pencil,
    title: "Landscape Design",
    description:
      "Custom outdoor designs to transform your property into a stunning oasis.",
  },
  {
    icon: Flower2,
    title: "Mulching & Garden Beds",
    description:
      "Fresh mulch and professionally designed planting beds for lasting beauty.",
  },
  {
    icon: TreeDeciduous,
    title: "Yard Cleanups",
    description:
      "Seasonal and one-time yard cleanups to restore your outdoor space.",
  },
  {
    icon: Scissors,
    title: "Tree & Shrub Trimming",
    description:
      "Keep your landscape healthy, safe, and beautiful with expert trimming.",
  },
]

export function ServicesSection() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Our Landscaping Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From routine maintenance to complete transformations, we handle it all
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
          >
            Get A Free Landscaping Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
