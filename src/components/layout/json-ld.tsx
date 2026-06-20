import { absoluteUrl, siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
    },
    keywords: siteConfig.keywords.join(", "),
    about: {
      "@type": "Thing",
      name: "Structured representation of cataract surgical knowledge",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
