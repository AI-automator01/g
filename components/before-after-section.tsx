"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    beforeCaption: "Overgrown backyard",
    afterCaption: "Complete landscape redesign",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    beforeCaption: "Bare dirt front yard",
    afterCaption: "Beautiful curb appeal",
  },
  {
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
    beforeCaption: "Outdated patio area",
    afterCaption: "Modern outdoor living space",
  },
]

export function BeforeAfterSection() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            See The Difference Professional Landscaping Makes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Real transformations from real homeowners in your area
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative bg-background rounded-xl overflow-hidden shadow-lg">
                {/* Before Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.before}
                    alt={project.beforeCaption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-foreground/80 text-card px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="flex items-center justify-center py-3 bg-primary">
                  <ArrowRight className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* After Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.after}
                    alt={project.afterCaption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>

              {/* Captions */}
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {project.beforeCaption}
                </span>
                <span className="text-primary font-medium">
                  {project.afterCaption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
          >
            Get My Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
