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
    description:
      "A creator-based UGC platform connecting brands with content creators.",
    link: "https://apps.apple.com/in/app/viralme/id6738461768",
    image: "/images/projects/viralme.svg",
  },
  {
    title: "Turnover - B2B E-Commerce",
    description: "A B2B e-commerce platform built for the US marketplace.",
    link: "https://turnover.biz/",
    image: "/images/projects/turnover-ecommerce.svg",
  },
  {
    title: "Turnover - Seller Portal",
    description:
      "A seller portal for managing products, orders, and inventory.",
    link: "https://sell.turnover.biz/",
    image: "/images/projects/turnover-seller.svg",
  },
  {
    title: "Beacon AI",
    description:
      "An AI-powered edtech platform focused on cybersecurity education.",
    link: "https://beaconai.fusioncyber.co/",
    image: "/images/projects/beacon-ai.svg",
  },
  {
    title: "CSI-PCE Official Website",
    description:
      "A redesigned official website with modern UI and enhanced features.",
    link: "https://csi.pce.ac.in/",
    image: "/images/projects/csi-pce.svg",
  },
  {
    title: "Gyanbot AI",
    description: "A chatbot solution designed for commercial applications.",
    link: "https://gyanbot.ai/",
    image: "/images/projects/gyanbot-ai.svg",
  },
  {
    title: "GPod AI",
    description:
      "An AI-powered tool that converts articles into engaging podcasts.",
    link: "https://gpod-ai.vercel.app/",
    image: "/images/projects/gpod-ai.svg",
  },
  {
    title: "Visual X",
    description:
      "A text-to-video application built for Press Information Bureau (Govt. of India).",
    link: "https://visualx-ai.vercel.app/",
    image: "/images/projects/visual-x.svg",
  },
];
