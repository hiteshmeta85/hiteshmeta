import { IconType } from "react-icons";
import {
  SiAdonisjs,
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
];
