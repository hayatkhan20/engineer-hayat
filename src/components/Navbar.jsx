import { NavLink, Link } from "react-router-dom";
import Container from "./Container";
import { ButtonLink } from "./Button";

const linkBase =
  "text-sm font-medium transition duration-200 hover:text-white";
const active = "text-white";
const inactive = "text-white/70";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ink-950/75 backdrop-blur">
      <Container className="h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/5">
            <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_25px_rgba(56,189,248,0.55)]" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              GeoSpatial Systems Engineer
            </div>
            <div className="text-[12px] text-white/60">
              Web GIS • GeoAI • Spatial Data Engineering
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-3">
          {/* Resume download (desktop) */}
          <a
            href="/Hayat_Ullah_Abid_CV.pdf"
            download
            className="
              hidden sm:inline-flex items-center justify-center
              rounded-xl px-4 py-2 text-sm font-medium
              border border-line bg-white/5 text-white/90
              hover:bg-white/8 transition
            "
          >
            Download Resume
          </a>

          <div className="hidden sm:block">
            <ButtonLink to="/contact" className="px-3 py-2">
              Reach out
            </ButtonLink>
          </div>

          {/* Mobile menu */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer rounded-xl border border-line bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/8 transition">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-line bg-ink-900 shadow-soft overflow-hidden">
              <div className="p-2 grid">
                <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5" to="/">
                  Home
                </Link>
                <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5" to="/projects">
                  Projects
                </Link>
                <Link className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5" to="/contact">
                  Contact
                </Link>

                <a
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                  href="/Hayat_Ullah_Abid_CV.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
