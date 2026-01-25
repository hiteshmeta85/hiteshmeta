import type { IconType } from "react-icons";
import {
  SiCypress,
  SiExpo,
  SiGraphql,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShopify,
  SiStorybook,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";

export type Technology = {
  name: string;
  icon: IconType;
};

export type Project = {
  name: string;
  description?: string;
  link?: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string;
  technologies: Technology[];
  projects: Project[];
};

export const experiences: WorkExperience[] = [
  {
    id: "memorang-ai",
    company: "Memorang AI",
    role: "SDE II",
    location: "Remote",
    period: {
      start: "Jun 2025",
      end: null,
    },
    description: "",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Expo", icon: SiExpo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "tRPC", icon: SiTrpc },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    projects: [],
  },
  {
    id: "viralme",
    company: "ViralMe",
    role: "SDE I",
    location: "On-site",
    period: {
      start: "Nov 2024",
      end: "May 2025",
    },
    description:
      "Contributed to the development of a creator-based UGC platform for brands. Built an iOS and Android app for creators and a Shopify app for merchants from scratch.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Expo", icon: SiExpo },
      { name: "Shopify", icon: SiShopify },
      { name: "TypeScript", icon: SiTypescript },
      { name: "tRPC", icon: SiTrpc },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    projects: [
      {
        name: "ViralMe Creator App",
        description:
          "Creator onboarding flows, PDP and PLP screens, Instagram AutoDM flows, YouTube and Instagram integrations.",
      },
      {
        name: "ViralMe Merchant App",
        description: "Shopify integrations for merchants.",
      },
    ],
  },
  {
    id: "turnover-global",
    company: "Turnover Global",
    role: "SDE I (Frontend Lead)",
    location: "On-site",
    period: {
      start: "Mar 2024",
      end: "Oct 2024",
    },
    description:
      "Led frontend development of web and app, contributed to backend and DevOps-related tasks. Built a custom B2B eCommerce platform from scratch and an internal engine to analyze and manage product and seller data.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "tRPC", icon: SiTrpc },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    projects: [
      {
        name: "B2B eCommerce Platform",
        description:
          "Custom storefront, seller panel, and admin dashboard with third-party integrations for analytics, search indexing, payments, shipping, and bookkeeping.",
      },
    ],
  },
  {
    id: "fusion-cyber",
    company: "Fusion Cyber",
    role: "Software Engineer (Frontend Lead)",
    location: "Remote",
    period: {
      start: "Aug 2023",
      end: "Mar 2024",
    },
    description:
      "Led frontend development and managed backend development for in-house app solutions.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    projects: [
      {
        name: "Bog Beacon",
        description: "An EdTech platform for the cybersecurity space.",
      },
      {
        name: "GPT Podcaster",
        description: "AI-generated podcasts platform.",
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Freelance Software Engineer",
    location: "Remote",
    period: {
      start: "May 2023",
      end: "Mar 2024",
    },
    description:
      "Developed AI-driven web applications across diverse domains, including travel, education, and content creation.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    projects: [
      {
        name: "Gyanbot",
        description: "Chatbot solution designed for commercial applications.",
      },
      {
        name: "TravHub",
        description: "AI-generated travel itineraries and affiliate bookings.",
      },
    ],
  },
  {
    id: "fullstack-interactive",
    company: "Full-stack Interactive LLP",
    role: "Full-Stack Web Developer (Intern)",
    location: "Hybrid",
    period: {
      start: "Jul 2022",
      end: "Oct 2023",
    },
    description:
      "Series of internships (Jul 2022, Dec 2022, Jun-Oct 2023) providing hands-on exposure to building and testing UI components using Storybook, server-side rendered responsive web pages in Next.js with TypeScript, GraphQL integrations, and E2E testing with Cypress.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Storybook", icon: SiStorybook },
      { name: "Cypress", icon: SiCypress },
    ],
    projects: [],
  },
  {
    id: "weframetech",
    company: "WeFrameTech",
    role: "Full-Stack Web Developer",
    location: "Remote, Part-time",
    period: {
      start: "Feb 2023",
      end: "Jul 2023",
    },
    description:
      "Worked on multiple projects including Neuz Org's SaaS platform and Consumer application. Contributed to a Food Entrepreneur-based SaaS. Interacted with international clients, delivering high-quality web solutions.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    projects: [
      {
        name: "Neuz Org",
        description: "SaaS platform and Consumer application.",
      },
    ],
  },
];
