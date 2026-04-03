import { MapPin } from "lucide-react"

const serviceAreas = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Pflugerville",
  "Georgetown",
  "Leander",
  "Kyle",
  "Buda",
]

export function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Local Service</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground text-balance">
            Proudly Serving Homeowners In
          </h2>

          {/* Main City */}
          <div className="mt-8">
            <span className="text-5xl md:text-6xl font-bold text-primary">
              Austin
            </span>
          </div>

          {/* Surrounding Areas */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.slice(1).map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-card rounded-full text-secondary-foreground font-medium border border-border"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We specialize in residential landscaping projects throughout the Austin
            metro area. Our local team understands the unique climate and soil
            conditions of Central Texas.
          </p>
        </div>
      </div>
    </section>
  )
}
