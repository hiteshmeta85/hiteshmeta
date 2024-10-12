export type FeaturedProject = {
  title: string;
  description: string;
  link?: string;
};

export type FeaturedProjects = FeaturedProject[];

export const featuredProjects: FeaturedProjects = [
  {
    title: "BOG BEACON",
    description:
      "Generate Textbooks using AI. Built using Next.js, Typescript, TailwindCSS, Shadcn, and Vercel",
    link: "https://beaconai.fusioncyber.co/",
  },
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
