export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hitesh Meta",
    url: "https://hiteshmeta.vercel.app",
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
    sameAs: [
      "https://github.com/hiteshmeta",
      "https://linkedin.com/in/hiteshmeta",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - static JSON-LD data we control
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
