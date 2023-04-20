export type FeaturedProject = {
  repo: string;
  description: string;
  link: string;
};

export type FeaturedProjects = FeaturedProject[];

export const featuredProjects: FeaturedProjects = [
  {
    repo: "CSI-PCE Official Website",
    description:
      "CSI-PCE Official Website built using Next.js, TailwindCSS, Typescript, Trpc, Prisma, and PostgreSQL.",
    link: "https://csi.pce.ac.in/",
  },
];
