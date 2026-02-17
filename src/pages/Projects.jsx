import Seo from "../components/Seo";
import ProjectGrid from "../sections/projects/ProjectGrid";
import ProjectFilters from "../sections/projects/ProjectFilters";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useMemo, useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {

  const [filter, setFilter] = useState("All");

  // Build unique category list
  const categories = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter by category
  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <Seo
        title="Projects | GeoSpatial Systems Engineer"
        description="Engineering case studies showcasing enterprise Web GIS, GeoAI systems, and real-time spatial intelligence platforms."
        canonicalPath="/projects"
      />

      <section className="border-b border-line bg-grid-radial">
        <Container className="py-14 sm:py-16">
          <SectionHeader
            eyebrow="Engineering Portfolio"
            title="Systems, Not Demos"
            subtitle="A curated set of production-grade geospatial platforms engineered for scalability, intelligence, and operational impact."
          />
          <ProjectFilters
            tags={categories}
            active={filter}
            onChange={setFilter}
          />
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-14">
          <ProjectGrid items={filtered} />
        </Container>
      </section>
    </>
  );
}
