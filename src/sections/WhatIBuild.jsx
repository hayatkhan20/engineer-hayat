import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

import {
  Globe,
  Radar,
  Brain,
  Layers,
  Cloud,
  Cpu
} from "lucide-react";

/*
Capability cards describing engineering services
Performance optimized:
- No heavy animations
- Tailwind-only styling
- Lightweight hover effects
*/

const capabilities = [
  {
    icon: Globe,
    title: "Enterprise Web GIS Platforms",
    description:
      "Designing scalable, high-performance Web GIS platforms supporting enterprise workflows, spatial analytics, and operational geospatial visualization.",
    stack:
      "React • PostGIS • GeoServer • OGC Services • Spatial APIs"
  },
  {
    icon: Radar,
    title: "Real-Time Tracking & Telemetry Systems",
    description:
      "Building real-time geospatial tracking systems integrating telemetry streams, live location feeds, and operational monitoring dashboards.",
    stack:
      "WebSockets • GPS Telemetry • Event Streams • Spatial Databases"
  },
  {
    icon: Brain,
    title: "GeoAI & Spatial Machine Learning",
    description:
      "Engineering machine learning pipelines that analyze spatial patterns, detect geospatial events, and generate intelligence-driven insights.",
    stack:
      "Python • TensorFlow • Spatial Analytics • Computer Vision"
  },
  {
    icon: Layers,
    title: "Spatial Decision Support Systems",
    description:
      "Creating systems that transform geospatial data into actionable intelligence for planning, operations, and strategic decision-making.",
    stack:
      "Spatial Modeling • Analytics • Visualization • GIS Workflows"
  },
  {
    icon: Cloud,
    title: "Cloud-Native Geospatial Architecture",
    description:
      "Designing resilient cloud-native geospatial systems optimized for scalability, performance, and distributed spatial data processing.",
    stack:
      "Cloud Infrastructure • Containerization • APIs • Distributed GIS"
  },
  {
    icon: Cpu,
    title: "IoT-Integrated Geospatial Systems",
    description:
      "Integrating IoT sensor networks with geospatial platforms to enable real-time monitoring, tracking, and spatial intelligence generation.",
    stack:
      "IoT Sensors • Telemetry Pipelines • Real-Time Processing"
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-20 border-b border-line bg-ink-950">

      <Container>

        <SectionHeader
          eyebrow="Capabilities"
          title="What I Build"
          subtitle="I engineer scalable geospatial systems that integrate mapping, intelligence, and real-time data pipelines."
        />

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {capabilities.map((cap, index) => {

            const Icon = cap.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent-400/40
                  hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]
                "
              >

                {/* Icon */}
                <div className="
                  w-12 h-12
                  rounded-xl
                  bg-accent-500/10
                  border border-accent-400/20
                  flex items-center justify-center
                  mb-4
                  group-hover:bg-accent-500/20
                  transition
                ">
                  <Icon
                    size={22}
                    className="text-accent-400"
                  />
                </div>

                {/* Title */}
                <h3 className="
                  text-lg
                  font-semibold
                  mb-2
                  tracking-tight
                ">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="
                  text-sm
                  text-white/70
                  leading-relaxed
                  mb-4
                ">
                  {cap.description}
                </p>

                {/* Stack */}
                <div className="
                  text-xs
                  text-accent-400/90
                  font-medium
                  tracking-wide
                ">
                  {cap.stack}
                </div>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}
