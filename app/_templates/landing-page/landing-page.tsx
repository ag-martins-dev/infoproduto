import { FeatureListSection } from "./sections/feature-list-section";
import { HeroSection } from "./sections/hero-section";
import { ShapeShowcaseSection } from "./sections/shape-showcase-section";
import { TargetAudienceSection } from "./sections/target-audience-section";

export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <TargetAudienceSection />
      <ShapeShowcaseSection />
      <FeatureListSection />
    </main>
  );
}
