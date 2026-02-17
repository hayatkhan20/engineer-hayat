import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";
import { Button, ButtonGhost } from "../../components/Button";

export default function ContactPanel() {
  const email = "your.email@domain.com"; // replace
  const github = "https://github.com/hayatkhan20"; // replace if needed
  const linkedin = "https://www.linkedin.com"; // replace

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard.");
    } catch {
      alert("Copy failed. Please copy manually: " + email);
    }
  };

  return (
    <section className="bg-grid-radial">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build a geospatial system that holds up in production"
          subtitle="Reach out for Web GIS engineering, data governance workflows, geospatial platform architecture, or GeoAI integration."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="text-sm font-semibold">Primary channel</div>
            <div className="mt-2 text-sm text-white/70">
              Email is best for project scope, timelines, and technical context.
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="rounded-xl border border-line bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/8 transition"
                href={`mailto:${email}?subject=GeoSpatial%20Systems%20Inquiry`}
              >
                {email}
              </a>
              <ButtonGhost onClick={copyEmail}>Copy email</ButtonGhost>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-sm font-semibold">What to include</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Data sources (vector/raster/telemetry), scale, and update frequency</li>
                <li>• Desired outputs (dashboards, APIs, validation rules, analytics)</li>
                <li>• Constraints (hosting, security, performance, interoperability)</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold">Profiles</div>
            <div className="mt-3 grid gap-2 text-sm">
              <a className="rounded-xl border border-line bg-white/5 px-4 py-2 text-white/80 hover:bg-white/8 transition" href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="rounded-xl border border-line bg-white/5 px-4 py-2 text-white/80 hover:bg-white/8 transition" href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-line bg-ink-900 p-4">
              <div className="text-sm font-medium">Availability</div>
              <div className="mt-2 text-sm text-white/70">
                Open to collaborations on Web GIS platforms and geospatial data engineering.
              </div>
              <div className="mt-4">
                <Button onClick={() => window.location.href = `mailto:${email}?subject=GeoSpatial%20Systems%20Collaboration`}>
                  Start an email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
