import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Badge from "../../components/Badge";
import Card from "../../components/Card";
import { ButtonLink } from "../../components/Button";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-20 border-b border-line bg-ink-950">

      <Container>

        <SectionHeader
          eyebrow="Engineering Case Studies"
          title="Featured Projects"
          subtitle="Flagship engineering systems demonstrating scalable geospatial architecture, GeoAI integration, and operational decision-support platforms."
        />

        <div className="space-y-8">

          {featuredProjects.map(project => (

            <Card
              key={project.id}
              className="
                overflow-hidden
                hover:-translate-y-1
                hover:border-accent-400/40
                hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]
                transition-all duration-300
              "
            >

              <div className="grid lg:grid-cols-2 gap-6">

                {/* Image */}
                <div className="bg-white/5 flex items-center justify-center min-h-[220px]">

                  <div className="text-white/40 text-sm">
                    Project Visual
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <Badge>
                    {project.category}
                  </Badge>

                  <h3 className="mt-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {project.technologies.slice(0,5).map(tech => (
                      <Badge key={tech}>
                        {tech}
                      </Badge>
                    ))}

                  </div>

                  <div className="mt-6">
                    <ButtonLink to="/projects">
                      View Case Study
                    </ButtonLink>
                  </div>

                </div>

              </div>

            </Card>

          ))}

        </div>

        {/* View All Button */}
        <div className="mt-10">

          <ButtonLink to="/projects">
            View All Projects
          </ButtonLink>

        </div>

      </Container>

    </section>
  );
}
