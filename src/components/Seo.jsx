import { useEffect } from "react";

export default function Seo({ title, description, canonicalPath = "/" }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (attr, key, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard
    if (description) setMeta("name", "description", description);

    // Canonical
    const href = `${window.location.origin}${canonicalPath}`;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", href);

    // Twitter
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [title, description, canonicalPath]);

  return null;
}
