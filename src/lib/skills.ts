import type { IconType } from "react-icons";
import { BiCodeCurly } from "react-icons/bi";
import {
  SiAdonisjs,
  SiApollographql,
  SiChakraui,
  SiClickup,
  SiCss3,
  SiCypress,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiShopify,
  SiStorybook,
  SiStrapi,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiWebstorm,
  SiZod,
} from "react-icons/si";

export enum Category {
  Frontend = "Frontend",
  App = "App",
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
    name: "HTML",
    icon: SiHtml5,
    category: Category.Frontend,
  },
  {
    name: "CSS",
    icon: SiCss3,
    category: Category.Frontend,
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    category: Category.Frontend,
  },
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
    name: "Node.js",
    icon: SiNodedotjs,
    category: Category.Backend,
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
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: Category.Frontend,
  },
  {
    name: "Radix UI",
    icon: SiRadixui,
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
    name: "Chakra UI",
    icon: SiChakraui,
    category: Category.Frontend,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: Category.Backend,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: Category.Backend,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    category: Category.Backend,
  },
  {
    name: "Strapi",
    icon: SiStrapi,
    category: Category.Backend,
  },
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
    name: "Vercel",
    icon: SiVercel,
    category: Category.Tools,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: Category.Backend,
  },
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
  {
    name: "React Query",
    icon: SiReactquery,
    category: Category.Frontend,
  },
  {
    name: "Zod",
    icon: SiZod,
    category: Category.Frontend,
  },
  {
    name: "TypeORM",
    icon: BiCodeCurly,
    category: Category.Backend,
  },
  {
    name: "ClickUp",
    icon: SiClickup,
    category: Category.Tools,
  },
  {
    name: "Jira",
    icon: SiJira,
    category: Category.Tools,
  },
  {
    name: "Playwright",
    icon: BiCodeCurly,
    category: Category.Testing,
  },
  {
    name: "Stripe",
    icon: SiStripe,
    category: Category.Tools,
  },
  {
    name: "Shopify",
    icon: SiShopify,
    category: Category.Backend,
  },
  {
    name: "Expo",
    icon: SiExpo,
    category: Category.App,
  },
];
