import Seo from "../components/Seo";
import Hero from "../sections/home/Hero";
import FocusAreas from "../sections/home/FocusAreas";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import TechStack from "../sections/home/TechStack";

export default function Home() {
  return (
    <>
      <Seo
        title="Home | GeoSpatial Systems Engineer"
        description="GeoSpatial Systems Engineer portfolio: Web GIS, spatial data engineering, GeoAI, and real-time geospatial systems."
        canonicalPath="/"
      />
      <div className="bg-grid-radial">
        <Hero />
      </div>
      <FocusAreas />
      <FeaturedProjects />
      <TechStack />
    </>
  );
}
