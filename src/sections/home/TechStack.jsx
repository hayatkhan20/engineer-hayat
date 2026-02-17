import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";
import Badge from "../../components/Badge";

const stacks = [
  {
    title: "Frontend",
    items: ["React", "Vite", "TailwindCSS", "React Router", "Map UI patterns"]
  },
  {
    title: "Geospatial",
    items: ["PostGIS", "GeoServer", "OGC services", "CRS discipline", "Spatial indexing"]
  },
  {
    title: "Backend",
    items: ["APIs", "Validation layers", "Auth/roles", "Asynchronous pipelines"]
  },
  {
    title: "Quality",
    items: ["Data governance", "Constraints & dictionaries", "Observability mindset"]
  }
];

export default function TechStack() {
  return (
    <section>
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Tooling"
          title="A stack built for maintainability"
          subtitle="Lean dependencies, strong structure, and fast navigation—ideal for a professional portfolio that will grow over time."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
