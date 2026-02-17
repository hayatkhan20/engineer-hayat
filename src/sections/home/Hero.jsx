import Container from "../../components/Container";
import { ButtonLink, ButtonGhost } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else navigate("/projects");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">

      {/* Animated Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundSize: "60px 60px"
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] animate-pulseGlow" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-400/20 rounded-full blur-[120px] animate-pulseGlow" />
      </div>

      <Container className="relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              GeoSpatial Systems Engineer
            </h1>

            {/* Subheadline */}
            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-accent-400 font-medium">
              Building Enterprise Web GIS, GeoAI Platforms, and Real-Time Spatial Intelligence Systems
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              I design and engineer scalable geospatial architectures integrating Web GIS,
              machine learning, IoT telemetry, and spatial decision-support systems for
              enterprise, research, and public-sector applications.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={scrollToProjects}
                className="
                  px-6 py-3 rounded-xl
                  bg-accent-500 text-white font-medium
                  hover:bg-accent-400
                  transition-all duration-300
                  hover:scale-[1.03]
                  shadow-soft
                "
              >
                View Engineering Projects
              </button>

              <ButtonLink
                to="/contact"
                className="
                  px-6 py-3
                  hover:scale-[1.03]
                  transition-all duration-300
                "
              >
                Collaborate With Me
              </ButtonLink>

            </div>

            {/* Technical Highlight Line */}
            <div className="mt-8 text-sm text-white/50 tracking-wide">
              Web GIS • GeoAI • Spatial Data Engineering • IoT Telemetry • Cloud-Native GIS
            </div>

          </div>


          {/* RIGHT VISUAL ABSTRACT */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">

            <div className="relative w-[380px] h-[380px]">

              {/* Outer Ring */}
              <div className="
                absolute inset-0
                border border-white/10
                rounded-full
                animate-floatSlow
              " />

              {/* Inner Ring */}
              <div className="
                absolute inset-[60px]
                border border-accent-500/30
                rounded-full
                animate-floatSlow
              " />

              {/* Core */}
              <div className="
                absolute inset-[140px]
                bg-accent-500
                rounded-full
                blur-[6px]
                animate-pulseGlow
              " />

              {/* Orbital dot */}
              <div className="
                absolute top-[20%] left-[65%]
                w-3 h-3
                bg-accent-400
                rounded-full
                shadow-[0_0_15px_rgba(56,189,248,0.9)]
                animate-floatSlow
              " />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}
