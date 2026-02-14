import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/sections/Hero";
import { PricingPlansSection } from "./_components/sections/PricingPlans";
import { VisualProofSection } from "./_components/sections/VisualProof";
import { WhatYouGetSection } from "./_components/sections/WhatYouGet";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <VisualProofSection />
        <WhatYouGetSection />
        <PricingPlansSection />
      </main>

      <Footer />
    </>
  );
}
