export const siteConfig = {
  name: "Hitesh Meta",
  title: "Hitesh Meta",
  description:
    "Software Engineer specializing in React, TypeScript, and Node.js. Building dynamic web applications.",
  url: "https://hiteshmeta.vercel.app",
  author: {
    name: "Hitesh Meta",
    role: "SDE II @Memorang AI",
  },
  keywords: [
    "Hitesh Meta",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ] as string[],
  images: {
    avatar: "/avatar.jpeg",
    favicon: "/favicon.ico",
  },
} as const;

export const themeConfig = {
  colors: {
    light: {
      background: "white",
      themeColor: "white",
    },
    dark: {
      background: "#18181b",
      themeColor: "#18181b",
    },
  },
  defaultTheme: "dark",
} as const;

export type SiteConfig = typeof siteConfig;
export type ThemeConfig = typeof themeConfig;
