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
      "Revamped CSI-PCE's Official Website built using Next.js, TailwindCSS, Typescript, Trpc, Prisma, and PostgreSQL.",
    link: "https://csi.pce.ac.in/",
  },
  {
    title: "GPod AI",
    description:
      "Convert Articles to Engaging Podcasts using AI. Built using Next.js, TailwindCSS, Typescript, Supabase, Stripe and Vercel.",
    link: "https://gpod-ai.vercel.app/",
  },
  {
    title: "Visual X",
    description:
      "Web Application for Press Information Bureau (Govt. of India) that facilitates conversion of Text to Video for Press Releases.",
    link: "https://visualx-ai.vercel.app/",
  },

  {
    title: "NDRF Relief Portal",
    description:
      "Web Portal for NDRF team to help identify disaster related posts and tweets, present vital information and trace geolocation.",
    link: "https://homebrew-web.vercel.app/",
  },
  {
    title: "BOG BEACON",
    description:
      "Generate Textbooks using AI. Built using Next.js, Typescript, TailwindCSS, Shadcn, and Vercel",
    link: "https://the-textbook-project-web.vercel.app/",
  },
  {
    title: "Neuz Org Saas Platform",
    description:
      "Local Publishers Focused SaaS and Consumer Application. Built using Next.js, TailwindCSS, React-Hook-Form, and Express.js",
    link: "https://neuzorg.com/",
  },
  {
    title: "Neuz Org Website",
    description:
      "Landing page for Neuz Org built using Next.js, TailwindCSS, and Directus CMS.",
    link: "https://neuzorg.com/",
  },
];
