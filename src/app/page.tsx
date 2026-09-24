import { Hero } from "@/components/organisms/Hero";
import { LogoBand } from "@/components/organisms/LogoBand";
import { AboutTeaser } from "@/components/organisms/AboutTeaser";
import { CollectionsSection } from "@/components/organisms/CollectionsSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { ProjectsShowcase } from "@/components/organisms/ProjectsShowcase";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { JournalTeaser } from "@/components/organisms/JournalTeaser";
import { CtaBanner } from "@/components/organisms/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBand />
      <CollectionsSection />
      <AboutTeaser />
      <FeaturesSection />
      <ProjectsShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <JournalTeaser />
      <CtaBanner />
    </>
  );
}
