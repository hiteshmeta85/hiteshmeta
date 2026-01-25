import type { IconType } from "react-icons";
import { BiCodeCurly } from "react-icons/bi";
import {
  SiAdonisjs,
  SiAnthropic,
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
  SiShadcnui,
  SiShopify,
  SiSlack,
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
  // Languages
  { name: "TypeScript", icon: SiTypescript, category: Category.Languages },
  { name: "JavaScript", icon: SiJavascript, category: Category.Languages },

  // Frontend - Core
  { name: "HTML", icon: SiHtml5, category: Category.Frontend },
  { name: "CSS", icon: SiCss3, category: Category.Frontend },

  // Frontend - Frameworks
  { name: "React.js", icon: SiReact, category: Category.Frontend },
  { name: "Next.js", icon: SiNextdotjs, category: Category.Frontend },

  // Frontend - Styling
  { name: "Tailwind CSS", icon: SiTailwindcss, category: Category.Frontend },
  { name: "shadcn/ui", icon: SiShadcnui, category: Category.Frontend },
  { name: "Radix UI", icon: SiRadixui, category: Category.Frontend },
  { name: "Chakra UI", icon: SiChakraui, category: Category.Frontend },

  // Frontend - State & Data
  { name: "React Query", icon: SiReactquery, category: Category.Frontend },
  { name: "Apollo Client", icon: SiApollographql, category: Category.Frontend },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    category: Category.Frontend,
  },
  { name: "Zod", icon: SiZod, category: Category.Frontend },

  // App
  { name: "Expo", icon: SiExpo, category: Category.App },

  // Backend - Runtime & Frameworks
  { name: "Node.js", icon: SiNodedotjs, category: Category.Backend },
  { name: "Express.js", icon: SiExpress, category: Category.Backend },
  { name: "Adonis.js", icon: SiAdonisjs, category: Category.Backend },
  { name: "tRPC", icon: SiTrpc, category: Category.Backend },

  // Backend - Databases
  { name: "PostgreSQL", icon: SiPostgresql, category: Category.Backend },
  { name: "MySQL", icon: SiMysql, category: Category.Backend },

  // Backend - ORMs
  { name: "Prisma", icon: SiPrisma, category: Category.Backend },
  { name: "TypeORM", icon: BiCodeCurly, category: Category.Backend },

  // Backend - CMS & BaaS
  { name: "Supabase", icon: SiSupabase, category: Category.Backend },
  { name: "Strapi", icon: SiStrapi, category: Category.Backend },
  { name: "Shopify", icon: SiShopify, category: Category.Backend },

  // Testing
  { name: "Cypress", icon: SiCypress, category: Category.Testing },
  { name: "Playwright", icon: BiCodeCurly, category: Category.Testing },
  { name: "Storybook", icon: SiStorybook, category: Category.Testing },

  // Tools - Version Control
  { name: "Git", icon: SiGit, category: Category.Tools },
  { name: "GitHub", icon: SiGithub, category: Category.Tools },

  // Tools - Deployment
  { name: "Vercel", icon: SiVercel, category: Category.Tools },

  // Tools - IDEs & AI
  { name: "WebStorm", icon: SiWebstorm, category: Category.Tools },
  { name: "Claude Code", icon: SiAnthropic, category: Category.Tools },

  // Tools - Design & API
  { name: "Figma", icon: SiFigma, category: Category.Tools },
  { name: "Postman", icon: SiPostman, category: Category.Tools },

  // Tools - Project Management
  { name: "Jira", icon: SiJira, category: Category.Tools },
  { name: "ClickUp", icon: SiClickup, category: Category.Tools },
  { name: "Slack", icon: SiSlack, category: Category.Tools },

  // Tools - Payments
  { name: "Stripe", icon: SiStripe, category: Category.Tools },
];
