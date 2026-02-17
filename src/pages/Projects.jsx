import Seo from "../components/Seo";
import ProjectGrid from "../sections/projects/ProjectGrid";
import ProjectFilters from "../sections/projects/ProjectFilters";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import { useMemo, useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const tags = useMemo(() => {
    const all = new Set();
    projects.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all)];
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <Seo
        title="Projects | GeoSpatial Systems Engineer"
        description="Projects showcasing Web GIS architecture, spatial data governance, GeoAI integration, and performance-minded geospatial systems."
        canonicalPath="/projects"
      />
      <section className="border-b border-line bg-grid-radial">
        <Container className="py-14 sm:py-16">
          <SectionHeader
            eyebrow="Projects"
            title="Systems, not demos"
            subtitle="A focused set of work highlighting scalable geospatial interfaces, robust data workflows, and decision-support patterns."
          />
          <ProjectFilters tags={tags} active={filter} onChange={setFilter} />
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
