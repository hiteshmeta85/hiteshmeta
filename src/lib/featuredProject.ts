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
  {
    repo: "Neuz Org Website",
    description:
      "Landing page for Neuz Org built using Next.js, TailwindCSS, and Directus CMS.",
    link: "https://neuz.org/",
  },
  {
    repo: "WhileOne Corporate Website",
    description:
      "Landing page for WhileOne Company built using Next.js, TailwindCSS, Typescript, Formik, Yup and Nodemailer.",
    link: "https://www.whileone.in/",
  },
];
