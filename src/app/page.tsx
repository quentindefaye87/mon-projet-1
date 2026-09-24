import { Hero } from "@/components/organisms/Hero";
import { ExpertiseBand } from "@/components/organisms/ExpertiseBand";
import { AboutTeaser } from "@/components/organisms/AboutTeaser";
import { CollectionsSection } from "@/components/organisms/CollectionsSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { ProjectsShowcase } from "@/components/organisms/ProjectsShowcase";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { CommitmentsSection } from "@/components/organisms/CommitmentsSection";
import { JournalTeaser } from "@/components/organisms/JournalTeaser";
import { CtaBanner } from "@/components/organisms/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseBand />
      <CollectionsSection />
      <AboutTeaser />
      <FeaturesSection />
      <ProjectsShowcase />
      <ProcessSection />
      <CommitmentsSection />
      <JournalTeaser />
      <CtaBanner />
    </>
  );
}
