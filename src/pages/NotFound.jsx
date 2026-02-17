import { Link } from "react-router-dom";
import Container from "../components/Container";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 | GeoSpatial Systems Engineer"
        description="Page not found."
        canonicalPath="/404"
      />
      <Container className="py-16">
        <div className="rounded-2xl border border-line bg-white/5 p-10">
          <div className="text-sm uppercase tracking-[0.22em] text-white/60">
            Not found
          </div>
          <h1 className="mt-2 text-2xl font-semibold">This route doesn’t exist.</h1>
          <p className="mt-3 text-white/70 text-sm">
            Return to the homepage or explore projects focused on real geospatial systems.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-line bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/8 transition"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
