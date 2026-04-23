"use client"
import HeroSection from "@/components/hero"
import FeaturesSection from "@/components/features"
import SocialProofSection from "@/components/social-proof"
import CTASection from "@/components/cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TolakAnginLanding() {
  return (
    <main className="min-h-screen bg-[#0d2418] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  )
}
