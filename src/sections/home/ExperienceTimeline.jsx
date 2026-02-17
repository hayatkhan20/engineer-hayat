import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Badge from "../../components/Badge";

/*
Vertical professional timeline
Clean, recruiter-focused
*/

const experiences = [
  {
    role: "Full Stack GIS Developer",
    organization: "Geometro GmbH",
    duration: "2024 – Present",
    highlights: [
      "Engineered enterprise-grade Web GIS platforms supporting multi-country deployments across Europe.",
      "Optimized spatial rendering performance and API contracts for high-volume geospatial datasets.",
      "Implemented scalable data governance workflows improving system reliability and operational accuracy.",
      "Delivered 50+ system enhancements across mapping, export tools, and spatial analytics modules."
    ],
    tech: ["React", "PostGIS", "GeoServer", "Enterprise Web GIS"]
  },
  {
    role: "GIS Engineer",
    organization: "KFA Software Pvt. Ltd.",
    duration: "2023 – 2024",
    highlights: [
      "Developed national-scale disaster management geospatial platforms.",
      "Engineered glacier and glacial lake inventory systems with spatial risk assessment workflows.",
      "Designed spatial processing algorithms for geospatial data validation and analytics.",
      "Improved performance of large spatial datasets through optimized indexing strategies."
    ],
    tech: ["GeoServer", "PostGIS", "Spatial Algorithms", "Disaster GIS"]
  },
  {
    role: "Web GIS Intern",
    organization: "GIS Plus Total Solution",
    duration: "2022 – 2023",
    highlights: [
      "Built interactive Web GIS dashboards for spatial data visualization.",
      "Supported map digitization workflows and spatial data processing tasks.",
      "Developed front-end geospatial components integrating OGC services.",
      "Contributed to geospatial programming tasks improving workflow efficiency."
    ],
    tech: ["Web GIS", "Leaflet", "Spatial Programming"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 border-b border-line bg-ink-950">

      <Container>

        <SectionHeader
          eyebrow="Career"
          title="Professional Experience"
          subtitle="Engineering scalable geospatial systems across enterprise and national platforms."
        />

        <div className="relative">

          {/* Vertical Accent Line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent-500/30" />

          <div className="space-y-12">

            {experiences.map((exp, index) => {

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative
                    lg:grid lg:grid-cols-2 lg:gap-12
                    ${isLeft ? "" : "lg:text-right"}
                  `}
                >

                  {/* Content Card */}
                  <div
                    className={`
                      group
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-6
                      hover:border-accent-400/40
                      hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]
                      transition
                      ${isLeft ? "lg:pr-12" : "lg:pl-12 lg:col-start-2"}
                    `}
                  >

                    <div className="flex flex-col gap-1">

                      <h3 className="text-lg font-semibold">
                        {exp.role}
                      </h3>

                      <span className="text-accent-400 text-sm font-medium">
                        {exp.organization}
                      </span>

                      <span className="text-white/50 text-xs">
                        {exp.duration}
                      </span>

                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-white/70 leading-relaxed">
                      {exp.highlights.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}
