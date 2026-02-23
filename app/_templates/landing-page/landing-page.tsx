import { Header } from "@/app/_components/common/header";

import { FeatureListSection } from "./sections/feature-list-section";
import { HeroSection } from "./sections/hero-section";
import { PricingSection } from "./sections/pricing-section/pricing-section";
import { ShapeShowcaseSection } from "./sections/shape-showcase-section";
import { TargetAudienceSection } from "./sections/target-audience-section";
import { TestimonialsSection } from "./sections/testimonials-section";

export function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TargetAudienceSection />
        <ShapeShowcaseSection />
        <FeatureListSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </>
  );
}
