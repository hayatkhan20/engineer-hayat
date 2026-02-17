import Seo from "../components/Seo";
import ContactPanel from "../sections/contact/ContactPanel";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Collaboration • Web GIS • GeoAI • Real-Time Tracking"
        description="Let’s collaborate on enterprise Web GIS, GeoAI consulting, real-time tracking systems, spatial data engineering, or research partnerships."
        canonicalPath="/contact"
      />
      <ContactPanel />
    </>
  );
}
