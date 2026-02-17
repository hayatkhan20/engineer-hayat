import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import { ButtonLink } from "../../components/Button";

export default function FinalCTA() {
  return (
    <section className="border-t border-line bg-ink-950">
      <Container className="py-14 sm:py-18">
        <div className="rounded-2xl border border-line bg-white/5 p-8 sm:p-10 shadow-soft">
          <SectionHeader
            eyebrow="Final CTA"
            title="Let’s Build Intelligent Geospatial Systems"
            subtitle="I collaborate with organizations and research teams to design scalable spatial intelligence platforms."
          />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink to="/contact" className="px-5 py-2.5">
              Start a Conversation
            </ButtonLink>

            <div className="text-sm text-white/60">
              Fast response • Clear technical scoping • Production-focused delivery
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
