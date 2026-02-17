import Seo from "../components/Seo";
import Hero from "../sections/home/Hero";
import FocusAreas from "../sections/home/FocusAreas";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import TechStack from "../sections/home/TechStack";

export default function Home() {
  return (
    <>
      <Seo
        title="GeoSpatial Systems Engineer | Portfolio"
        description="Enterprise Web GIS, GeoAI, and real-time spatial intelligence systems engineering portfolio."
        canonicalPath="/"
      />

      <Hero />

      <FocusAreas />

      {/* add id for scroll targeting */}
      <div id="projects">
        <FeaturedProjects />
      </div>

      <TechStack />
    </>
  );
}
