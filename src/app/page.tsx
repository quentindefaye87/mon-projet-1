import { Hero } from "@/components/organisms/Hero";
import { ExpertiseBand } from "@/components/organisms/ExpertiseBand";
import { AboutTeaser } from "@/components/organisms/AboutTeaser";
import { CollectionsSection } from "@/components/organisms/CollectionsSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { ProjectsShowcase } from "@/components/organisms/ProjectsShowcase";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { CommitmentsSection } from "@/components/organisms/CommitmentsSection";
import { JournalTeaser } from "@/components/organisms/JournalTeaser";
import { ScrollLogo } from "@/components/motion/ScrollLogo";
import { CtaBanner } from "@/components/organisms/CtaBanner";

export default function HomePage() {
  return (
    <>
      <ScrollLogo
        eyebrow="SCAL · depuis 1978"
        title="Des ouvertures"
        accent="à vos mesures."
        text="Fabrication et pose par nos propres équipes, à Aixe-sur-Vienne et dans toute la Haute-Vienne."
      />
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
