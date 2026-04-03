import { Phone, Clock, MapPin } from "lucide-react"

const serviceAreas = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Pflugerville",
  "Georgetown",
  "Leander",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
              <span className="font-bold text-xl">GreenScape Pro</span>
            </div>
            <p className="text-card/70 leading-relaxed">
              Professional landscaping services for homeowners in Austin and
              surrounding areas. Transform your outdoor space with our expert team.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-card/80 hover:text-card transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-card/80">
                <Clock className="w-5 h-5" />
                <span>Mon-Sat: 7am - 7pm</span>
              </div>
              <div className="flex items-center gap-3 text-card/80">
                <MapPin className="w-5 h-5" />
                <span>Austin, TX</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-card/70">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm">
              © {new Date().getFullYear()} GreenScape Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-card/60 hover:text-card text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-card/60 hover:text-card text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
