import { FileText, ClipboardCheck, Hammer } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "Step 1",
    title: "Request Your Free Quote",
    description:
      "Fill out our simple form or give us a call. We'll get back to you within 24 hours.",
  },
  {
    icon: ClipboardCheck,
    step: "Step 2",
    title: "We Evaluate Your Yard",
    description:
      "Our experts visit your property to assess your needs and recommend the best plan.",
  },
  {
    icon: Hammer,
    step: "Step 3",
    title: "We Transform Your Landscape",
    description:
      "Our skilled team gets to work transforming your outdoor space into something beautiful.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Our Simple 3-Step Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Getting started is easy. Here&apos;s how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Icon */}
              <div className="relative inline-flex">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                  {item.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
