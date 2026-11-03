import { Hero } from "@/components/organisms/Hero";
import { ScrollFrames } from "@/components/motion/ScrollFrames";
import { ExpertiseBand } from "@/components/organisms/ExpertiseBand";
import { AboutTeaser } from "@/components/organisms/AboutTeaser";
import { CollectionsSection } from "@/components/organisms/CollectionsSection";
import { ProjectsShowcase } from "@/components/organisms/ProjectsShowcase";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { NewsTeaser } from "@/components/organisms/NewsTeaser";
import { CtaBanner } from "@/components/organisms/CtaBanner";

export default function HomePage() {
  return (
    <>
      <ScrollFrames />
      <Hero />
      <ExpertiseBand />
      <CollectionsSection />
      <AboutTeaser />
      <ProjectsShowcase />
      <ProcessSection />
      <NewsTeaser />
      <CtaBanner />
    </>
  );
}
