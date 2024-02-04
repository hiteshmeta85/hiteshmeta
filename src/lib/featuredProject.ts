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
    title: "Gyanbot AI",
    description:
      "The ultimate chatbot solution designed for commercial applications. Built using Next.js, Typescript, React Query and Shadcn.",
    link: "https://gyanbot.ai/",
  },
  {
    title: "TravHub AI",
    description:
      "AI Generated Travel Itineraries. Built using Next.js, Typescript, React Query and Shadcn.",
    link: "https://travhub.ai/",
  },
  {
    title: "BOG BEACON",
    description:
      "Generate Textbooks using AI. Built using Next.js, Typescript, TailwindCSS, Shadcn, and Vercel",
    link: "https://the-textbook-project-web.vercel.app/",
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
];
