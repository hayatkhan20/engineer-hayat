import { useMemo, useState } from "react";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import { Button } from "../../components/Button";

import {
  Building2,
  Brain,
  Radar,
  Database,
  Microscope,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const COLLAB_TYPES = [
  "Enterprise Web GIS Development",
  "GeoAI Consulting",
  "Real-Time Tracking Systems",
  "Spatial Data Engineering",
  "Research Collaboration"
];

export default function ContactPanel() {
  const directEmail = "hayatgcmhs@gmail.com";
  const githubUrl = "https://github.com/hayatkhan20";
  const linkedinUrl = "https://www.linkedin.com/in/hayat-ullah-abid/";

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: COLLAB_TYPES[0],
    message: ""
  });

  const mailtoHref = useMemo(() => {
    const subject = `Collaboration Inquiry — ${form.type}`;
    const body = [
      `Name: ${form.name || "(not provided)"}`,
      `Email: ${form.email || "(not provided)"}`,
      `Collaboration Type: ${form.type}`,
      "",
      "Message:",
      form.message || "(no message)"
    ].join("\n");

    return `mailto:${directEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form, directEmail]);

  const onChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend: open user's mail client with a prefilled message
    window.location.href = mailtoHref;
  };

  const collaborationCards = [
    {
      icon: Building2,
      title: "Enterprise Web GIS Development",
      desc:
        "Production-grade platforms for operational mapping, role-based workflows, data governance, and scalable spatial UI.",
      stack: ["React", "PostGIS", "GeoServer", "OGC", "Spatial APIs"]
    },
    {
      icon: Brain,
      title: "GeoAI Consulting",
      desc:
        "GeoAI system design: model integration, inference pipelines, evaluation strategy, and uncertainty-aware decision outputs.",
      stack: ["GeoAI", "ML Pipelines", "Computer Vision", "Spatial Analytics"]
    },
    {
      icon: Radar,
      title: "Real-Time Tracking Systems",
      desc:
        "Live tracking dashboards integrating telemetry streams, event-driven updates, and spatial intelligence layers.",
      stack: ["Telemetry", "WebSockets", "Event Streams", "Monitoring"]
    },
    {
      icon: Database,
      title: "Spatial Data Engineering",
      desc:
        "Clean data contracts, validation rules, indexing strategies, and scalable ETL for high-volume spatial datasets.",
      stack: ["ETL", "Validation", "Indexing", "Performance"]
    },
    {
      icon: Microscope,
      title: "Research Collaboration",
      desc:
        "Collaboration on spatio-temporal inference, multi-sensor fusion, uncertainty-aware modeling, and applied GeoAI systems.",
      stack: ["Bayesian", "Spatio-temporal", "Sensor Fusion", "Uncertainty"]
    }
  ];

  return (
    <section className="bg-grid-radial border-b border-line">
      <Container className="py-14 sm:py-18">
        <SectionHeader
          eyebrow="Collaboration"
          title="Let’s Build Spatial Intelligence Systems Together"
          subtitle="I collaborate with teams to engineer scalable geospatial platforms—from enterprise Web GIS to real-time tracking and GeoAI-enabled decision support."
        />

        {/* Collaboration cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborationCards.map((c) => {
            const Icon = c.icon;
            return (
              <Card
                key={c.title}
                className="
                  p-6
                  border border-line
                  bg-white/5
                  hover:-translate-y-1
                  hover:border-accent-400/40
                  hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]
                  transition
                "
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl border border-accent-400/20 bg-accent-500/10 flex items-center justify-center">
                    <Icon size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.stack.slice(0, 5).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Form + Direct contact */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Form */}
          <Card className="lg:col-span-7 p-6">
            <div className="text-sm font-semibold">Send a collaboration request</div>
            <p className="mt-2 text-sm text-white/70">
              This form opens your email client with a prefilled message (no backend needed).
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-white/60">Name</label>
                  <input
                    value={form.name}
                    onChange={onChange("name")}
                    className="mt-2 w-full rounded-xl border border-line bg-ink-900/60 px-4 py-3 text-sm text-white/90 outline-none focus:border-accent-400/50"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Email</label>
                  <input
                    value={form.email}
                    onChange={onChange("email")}
                    type="email"
                    className="mt-2 w-full rounded-xl border border-line bg-ink-900/60 px-4 py-3 text-sm text-white/90 outline-none focus:border-accent-400/50"
                    placeholder="you@domain.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/60">Collaboration Type</label>
                <select
                  value={form.type}
                  onChange={onChange("type")}
                  className="mt-2 w-full rounded-xl border border-line bg-ink-900/60 px-4 py-3 text-sm text-white/90 outline-none focus:border-accent-400/50"
                >
                  {COLLAB_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-ink-900">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-white/60">Message</label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-line bg-ink-900/60 px-4 py-3 text-sm text-white/90 outline-none focus:border-accent-400/50"
                  placeholder="Briefly describe your system goals, data sources, and timeline."
                  required
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit">Submit</Button>

                <a
                  href="/Hayat_Ullah_Abid_CV.pdf"
                  download
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl px-4 py-2 text-sm font-medium
                    border border-line bg-white/5 text-white/90
                    hover:bg-white/8 transition
                  "
                >
                  Download Resume
                </a>

                <a
                  href={mailtoHref}
                  className="text-sm text-accent-400 hover:text-accent-300 transition"
                >
                  Prefer email? Open mail draft →
                </a>
              </div>
            </form>
          </Card>

          {/* Direct contact */}
          <Card className="lg:col-span-5 p-6">
            <div className="text-sm font-semibold">Direct contact</div>
            <p className="mt-2 text-sm text-white/70">
              Quick links for recruiters, collaborators, and teams.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${directEmail}`}
                className="rounded-xl border border-line bg-white/5 px-4 py-3 hover:bg-white/8 transition flex items-center gap-3"
              >
                <Mail size={18} className="text-accent-400" />
                <div className="text-sm text-white/85">{directEmail}</div>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line bg-white/5 px-4 py-3 hover:bg-white/8 transition flex items-center gap-3"
              >
                <Linkedin size={18} className="text-accent-400" />
                <div className="text-sm text-white/85">LinkedIn</div>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line bg-white/5 px-4 py-3 hover:bg-white/8 transition flex items-center gap-3"
              >
                <Github size={18} className="text-accent-400" />
                <div className="text-sm text-white/85">GitHub</div>
              </a>

              <div className="mt-2 rounded-xl border border-line bg-ink-900 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/55">
                  Resume
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Download the latest CV as PDF.
                </div>
                <a
                  href="/Hayat_Ullah_Abid_CV.pdf"
                  download
                  className="
                    mt-4 inline-flex items-center justify-center
                    rounded-xl px-4 py-2 text-sm font-medium
                    bg-accent-500/90 hover:bg-accent-500 text-white
                    transition
                  "
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
