import { IconType } from "react-icons";
import {
  SiAdonisjs,
  SiApollographql,
  SiChakraui,
  SiCypress,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStorybook,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiReacthookform,
  SiCplusplus,
  SiVercel,
  SiSupabase,
  SiDirectus,
  SiFigma,
  SiPostman,
  SiWebstorm,
  SiTrpc,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

export enum Category {
  Frontend = "Frontend",
  Backend = "Backend",
  Languages = "Languages",
  Testing = "Testing",
  Tools = "Tools",
}

export type Skill = {
  name: string;
  icon: IconType;
  category: Category;
};

export type Skills = Skill[];

export const skills: Skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: Category.Frontend,
  },
  {
    name: "React.js",
    icon: SiReact,
    category: Category.Frontend,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: Category.Backend,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    category: Category.Languages,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    category: Category.Frontend,
  },
  {
    name: "Adonis.js",
    icon: SiAdonisjs,
    category: Category.Backend,
  },
  {
    name: "Cypress.io",
    icon: SiCypress,
    category: Category.Testing,
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    category: Category.Testing,
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    category: Category.Languages,
  },
  {
    name: "Python",
    icon: SiPython,
    category: Category.Languages,
  },
  {
    name: "Chakra-UI",
    icon: SiChakraui,
    category: Category.Frontend,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: Category.Backend,
  },
  {
    name: "TypeORM",
    icon: BiCodeCurly,
    category: Category.Backend,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: Category.Backend,
  },
  // {
  //   name: "Strapi",
  //   icon: SiStrapi,
  //   category: Category.Backend,
  // },
  {
    name: "Git",
    icon: SiGit,
    category: Category.Tools,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: Category.Tools,
  },
  {
    name: "Apollo Client",
    icon: SiApollographql,
    category: Category.Frontend,
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    category: Category.Frontend,
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: Category.Languages,
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: Category.Tools,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: Category.Backend,
  },
  // {
  //   name: "Directus",
  //   icon: SiDirectus,
  //   category: Category.Backend,
  // },
  {
    name: "Figma",
    icon: SiFigma,
    category: Category.Tools,
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: Category.Tools,
  },
  {
    name: "Webstorm",
    icon: SiWebstorm,
    category: Category.Tools,
  },
  {
    name: "Trpc",
    icon: SiTrpc,
    category: Category.Backend,
  },
];
