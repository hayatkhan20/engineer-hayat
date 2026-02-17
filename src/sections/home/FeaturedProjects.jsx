import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import { ButtonLink } from "../../components/Button";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="border-y border-line bg-ink-900/20">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects that reflect real systems"
          subtitle="These examples highlight architecture, data governance, and operational mapping—areas where correctness and performance actually matter."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} className="p-6 hover:bg-white/6 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold tracking-tight">{p.title}</div>
                  <div className="mt-1 text-sm text-white/60">{p.domain}</div>
                </div>
                <span className="h-10 w-10 rounded-2xl border border-line bg-white/5 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/35" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink to="/projects">Open the full Projects page</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
