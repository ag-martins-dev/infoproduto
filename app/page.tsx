import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { CausesToBuySection } from "./_components/sections/CausesToBuy";
import { FrequentlyAskedQuestionsSection } from "./_components/sections/FrequentlyAskedQuestions";
import { HeroSection } from "./_components/sections/Hero";
import { PricingPlansSection } from "./_components/sections/PricingPlans";
import { TestimonialsSection } from "./_components/sections/Testimonials";
import { VisualProofSection } from "./_components/sections/VisualProof";
import { WhatYouGetSection } from "./_components/sections/WhatYouGet";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <CausesToBuySection />
        <VisualProofSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <PricingPlansSection />
        <FrequentlyAskedQuestionsSection />
      </main>

      <Footer />
    </>
  );
}
