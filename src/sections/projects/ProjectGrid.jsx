import Card from "../../components/Card";
import Badge from "../../components/Badge";
import { ButtonLink } from "../../components/Button";

export default function ProjectGrid({ items }) {

  return (

    <div className="grid gap-6 lg:grid-cols-3">

      {items.map(project => (

        <Card
          key={project.id}
          className="
            p-6
            hover:-translate-y-1
            hover:border-accent-400/40
            hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]
            transition-all duration-300
          "
        >

          <div className="flex justify-between items-center">

            <Badge>
              {project.category}
            </Badge>

            <span className="text-xs text-white/50">
              {project.year}
            </span>

          </div>

          <h3 className="mt-3 text-lg font-semibold">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-white/70">
            {project.shortDescription}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-2">

            {project.technologies.map(tech => (

              <Badge key={tech}>
                {tech}
              </Badge>

            ))}

          </div>

          <div className="mt-6">

            <ButtonLink to="/projects">
              Read Details
            </ButtonLink>

          </div>

        </Card>

      ))}

    </div>

  );

}
