import dynamic from "next/dynamic";

import { Header } from "@/app/_components/common/header";

const FaqSection = dynamic(
  () => import("./sections/faq-section").then((mod) => mod.FaqSection),
  { ssr: true },
);
const FeatureListSection = dynamic(
  () =>
    import("./sections/feature-list-section").then(
      (mod) => mod.FeatureListSection,
    ),
  { ssr: true },
);
const FooterSection = dynamic(
  () => import("./sections/footer-section").then((mod) => mod.FooterSection),
  { ssr: true },
);
const HeroSection = dynamic(
  () => import("./sections/hero-section").then((mod) => mod.HeroSection),
  { ssr: true },
);
const PricingSection = dynamic(
  () =>
    import("./sections/pricing-section/pricing-section").then(
      (mod) => mod.PricingSection,
    ),
  { ssr: true },
);
const ShapeShowcaseSection = dynamic(
  () =>
    import("./sections/shape-showcase-section").then(
      (mod) => mod.ShapeShowcaseSection,
    ),
  { ssr: true },
);
const TargetAudienceSection = dynamic(
  () =>
    import("./sections/target-audience-section").then(
      (mod) => mod.TargetAudienceSection,
    ),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () =>
    import("./sections/testimonials-section").then(
      (mod) => mod.TestimonialsSection,
    ),
  { ssr: true },
);

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
        <FaqSection />
        <FooterSection />
      </main>
    </>
  );
}
