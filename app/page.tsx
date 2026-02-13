import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/sections/Hero";
import { PricingPlansSection } from "./_components/sections/PricingPlans";
import { VisualProofSection } from "./_components/sections/VisualProof";
import { WhatYouGetSection } from "./_components/sections/WhatYouGet";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <HeroSection />
        <VisualProofSection />
        <WhatYouGetSection />
        <PricingPlansSection />
      </main>

      <Footer />
    </div>
  );
}
