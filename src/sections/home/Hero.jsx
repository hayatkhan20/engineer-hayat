import Container from "../../components/Container";
import { ButtonLink, ButtonGhost } from "../../components/Button";
import Badge from "../../components/Badge";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Badge>Web GIS Architecture</Badge>
              <Badge>Spatial Data Engineering</Badge>
              <Badge>GeoAI Systems</Badge>
            </div>

            <h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight">
              {profile.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to="/projects">View Projects</ButtonLink>
              <ButtonGhost onClick={() => document.getElementById("focus")?.scrollIntoView()}>
                Explore Focus Areas
              </ButtonGhost>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 text-sm text-white/70">
              <div className="rounded-2xl border border-line bg-white/5 p-4">
                <div className="text-white/90 font-medium">Systems mindset</div>
                <div className="mt-1">
                  Clean interfaces, robust data contracts, predictable performance under load.
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-white/5 p-4">
                <div className="text-white/90 font-medium">Geospatial rigor</div>
                <div className="mt-1">
                  CRS correctness, spatial indexing, validation rules, and operational mapping UX.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white/5 p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.22em] text-accent-400/90">
                What I build
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
                  <span>Operational dashboards for geospatial decision support</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
                  <span>Data governance workflows (constraints, dictionaries, validation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
                  <span>GeoAI integration pipelines with measurable reliability</span>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-line bg-ink-900 p-4">
                <div className="text-sm font-medium">Performance note (Render free tier)</div>
                <div className="mt-2 text-sm text-white/70">
                  Routes are code-split, UI is dependency-light, and assets are minimal by default.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
