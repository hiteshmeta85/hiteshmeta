export type FeaturedProject = {
  title: string;
  description: string;
  link?: string;
  image?: string;
};

export type FeaturedProjects = FeaturedProject[];

export const featuredProjects: FeaturedProjects = [
  {
    title: "ViralMe",
    description: "A creator-based UGC platform connecting brands with content creators.",
    link: "https://apps.apple.com/in/app/viralme/id6738461768",
  },
  {
    title: "Turnover - B2B E-Commerce",
    description: "A B2B e-commerce platform built for the US marketplace.",
    link: "https://turnover.biz/",
  },
  {
    title: "Turnover - Seller Portal",
    description: "A seller portal for managing products, orders, and inventory.",
    link: "https://sell.turnover.biz/",
  },
  {
    title: "BOG BEACON",
    description: "An AI-powered edtech platform focused on cybersecurity education.",
    link: "https://beaconai.fusioncyber.co/",
  },
  {
    title: "CSI-PCE Official Website",
    description: "A redesigned official website with modern UI and enhanced features.",
    link: "https://csi.pce.ac.in/",
  },
  {
    title: "Gyanbot AI",
    description: "A chatbot solution designed for commercial applications.",
    link: "https://gyanbot.ai/",
  },
  {
    title: "GPod AI",
    description: "An AI-powered tool that converts articles into engaging podcasts.",
    link: "https://gpod-ai.vercel.app/",
  },
  {
    title: "Visual X",
    description: "A text-to-video application built for Press Information Bureau (Govt. of India).",
    link: "https://visualx-ai.vercel.app/",
  },
];
