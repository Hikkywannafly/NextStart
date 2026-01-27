import {
  CtaSection,
  FeaturesSection,
  HeroSection,
  LandingHeader,
  PreviewSection,
  ShowcaseSection,
} from "@/components/landing";
import { PageLayout } from "@/components/layouts";

export default function HomePage() {
  return (
    <PageLayout>
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <PreviewSection />
      <ShowcaseSection />
      <CtaSection />
    </PageLayout>
  );
}
