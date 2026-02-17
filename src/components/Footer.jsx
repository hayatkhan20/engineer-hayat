import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <Container className="py-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold">
              Building reliable geospatial systems for decision support.
            </div>
            <div className="mt-2 text-sm text-white/60">
              Focused on scalable Web GIS, spatio-temporal pipelines, and uncertainty-aware GeoAI.
            </div>
          </div>

          <div className="md:text-right text-sm text-white/60">
            <div className="text-white/75">© {new Date().getFullYear()} • Portfolio</div>
            <div className="mt-1">Deployed on Render • Optimized for fast loads</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
