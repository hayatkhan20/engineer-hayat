import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";

export default function ResearchHighlights() {
  return (
    <section className="py-20 border-b border-line bg-ink-950">

      <Container>

        <SectionHeader
          eyebrow="Research"
          title="Research & Intellectual Direction"
        />

        {/* Research Interests */}
        <div className="
          rounded-2xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <h3 className="text-lg font-semibold mb-3">
            Research Interests
          </h3>

          <p className="text-sm text-white/70 leading-relaxed">
            My research direction centers on uncertainty-aware probabilistic modeling,
            spatio-temporal inference, multi-sensor data fusion, and GeoAI-driven decision-support systems.
            I focus on designing geospatial architectures that explicitly model uncertainty,
            integrate heterogeneous sensor streams, and support high-stakes operational decision-making.
          </p>

        </div>

        {/* Publications */}
        <div className="mt-10">

          <h3 className="text-lg font-semibold mb-4">
            Publications & Presentations
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">
                Machine Learning-Based LULC Classification
              </div>
              <div className="text-xs text-white/60 mt-1">
                Manuscript in preparation
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">
                SUPTM 2026 — Oral Presentation
              </div>
              <div className="text-xs text-white/60 mt-1">
                Spatio-Temporal Urban Modeling
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium">
                IC-WEES 2023 — Blockchain for Energy Systems
              </div>
              <div className="text-xs text-white/60 mt-1">
                International Conference Publication
              </div>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}
