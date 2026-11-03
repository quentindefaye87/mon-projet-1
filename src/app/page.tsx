import { Hero } from "@/components/organisms/Hero";
import { ScrollVideo } from "@/components/motion/ScrollVideo";
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
      <ScrollVideo
        src="/video/ouverture"
        poster="/video/ouverture-poster.jpg"
        eyebrow="SCAL · depuis 1978"
        title="Des ouvertures"
        accent="à vos mesures."
        text="Fabrication et pose par nos propres équipes, à Aixe-sur-Vienne et dans toute la Haute-Vienne."
      />
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
