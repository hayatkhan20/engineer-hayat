import Seo from "../components/Seo";
import ContactPanel from "../sections/contact/ContactPanel";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | GeoSpatial Systems Engineer"
        description="Contact for collaboration on Web GIS, spatial data engineering, GeoAI systems, and geospatial decision-support platforms."
        canonicalPath="/contact"
      />
      <ContactPanel />
    </>
  );
}
