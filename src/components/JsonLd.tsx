import { siteConfig } from "@/lib/config";
import { socialLinks } from "@/lib/socialLinks";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Memorang AI",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Next.js",
      "Web Development",
    ],
    sameAs: socialLinks.map((link) => link.url),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - static JSON-LD data we control
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
