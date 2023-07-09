export type FeaturedProject = {
  title: string;
  description: string;
  link: string;
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
    title: "Neuz Org Website",
    description:
      "Landing page for Neuz Org built using Next.js, TailwindCSS, and Directus CMS.",
    link: "https://neuz.org/",
  },
  {
    title: "WhileOne Corporate Website",
    description:
      "Landing page for WhileOne Company built using Next.js, TailwindCSS, Typescript, Formik, Yup and Nodemailer.",
    link: "https://www.whileone.in/",
  },
  {
    title: "Relynk Website",
    description:
      "Relynk Website built using Next.js, TailwindCSS, React-Hook-Form and Directus CMS.",
    link: "https://relynk.io/",
  },
];
