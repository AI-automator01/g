import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { ProcessSection } from "@/components/process-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { LeadFormSection } from "@/components/lead-form-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main>
      <StickyHeader />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ProcessSection />
      <ServiceAreaSection />
      <SpecialOfferSection />
      <LeadFormSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
