import { IconType } from "react-icons";
import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

export type Skill = {
  name: string;
  icon: IconType;
};

export type Skills = Skill[];

export const skills: Skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React.js",
    icon: SiReact,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "Javascript",
    icon: SiJavascript,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Chakra-UI",
    icon: SiChakraui,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "TypeORM",
    icon: BiCodeCurly,
  },
  {
    name: "Prisma",
    icon: SiPrisma,
  },
  {
    name: "Strapi",
    icon: SiStrapi,
  },
];
