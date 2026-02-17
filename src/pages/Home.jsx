import Seo from "../components/Seo";
import Hero from "../sections/home/Hero";
import WhatIBuild from "../sections/WhatIBuild";
import FocusAreas from "../sections/home/FocusAreas";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import TechStack from "../sections/home/TechStack";
import ExperienceTimeline from "../sections/home/ExperienceTimeline";
import ResearchHighlights from "../sections/home/ResearchHighlights";
import FinalCTA from "../sections/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Seo
        title="GeoSpatial Systems Engineer | Web GIS • GeoAI • Spatial Intelligence"
        description="I design scalable enterprise Web GIS, GeoAI-enabled decision support, and real-time spatial intelligence systems—built for production, performance, and impact."
        canonicalPath="/"
      />

      {/* Phase 2 Hero */}
      <Hero />

      {/* Phase 3 New Section */}
      <WhatIBuild />

      {/* Existing Sections */}
      <FocusAreas />

      <div id="projects">
        <FeaturedProjects />
      </div>

      <ExperienceTimeline />

      <ResearchHighlights />

      <TechStack />

      <FinalCTA />

    </>
  );
}
