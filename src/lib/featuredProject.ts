export type FeaturedProject = {
  title: string;
  description: string;
  link?: string;
};

export type FeaturedProjects = FeaturedProject[];

export const featuredProjects: FeaturedProjects = [
  {
    title: "CSI-PCE Official Website",
    description:
      "CSI-PCE Official Website built using Next.js, TailwindCSS, Typescript, Trpc, Prisma, and PostgreSQL.",
    link: "https://csi.pce.ac.in/",
  },
  {
    title: "GPod AI",
    description:
      "Convert Articles to Engaging Audio. Built using Next.js, TailwindCSS, Typescript, Stripe and Vercel.",
    link: "https://gpod-ai.vercel.app/",
  },
  {
    title: "BOG BEACON",
    description:
      "Convert Content into Summarized Textbooks. Built using Next.js, Typescript, TailwindCSS, Shadcn, and Vercel",
    link: "https://the-textbook-project-web.vercel.app/",
  },
  {
    title: "Neuz Org Saas Platform",
    description:
      "Saas for Neuz Org built using Next.js, TailwindCSS, React-Hook-Form, and Express.js",
  },
  {
    title: "Neuz Org Website",
    description:
      "Landing page for Neuz Org built using Next.js, TailwindCSS, and Directus CMS.",
  },
  {
    title: "Relynk Website",
    description:
      "Relynk Website built using Next.js, TailwindCSS, React-Hook-Form and Directus CMS.",
  },
];
