import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";
import { profile } from "../../data/profile";

export default function FocusAreas() {
  return (
    <section id="focus">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Core focus"
          title="Engineering-grade geospatial systems"
          subtitle="From spatial databases to map UI, I design end-to-end systems that stay correct, fast, and maintainable as complexity grows."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.focus.map((item) => (
            <Card key={item} className="p-5 hover:bg-white/6 transition">
              <div className="text-sm font-medium">{item}</div>
              <div className="mt-2 text-sm text-white/70">
                Built with consistency, observability, and long-term scalability in mind.
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
