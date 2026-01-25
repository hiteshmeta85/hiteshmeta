export type FeaturedProject = {
  title: string;
  description: string;
  link?: string;
};

export type FeaturedProjects = FeaturedProject[];

export const featuredProjects: FeaturedProjects = [
  {
    title: "ViralMe",
    description: "A Creator based UGC platform for brands.",
    link: "https://apps.apple.com/in/app/viralme/id6738461768",
  },
  {
    title: "Turnover - B2B E-Commerce",
    description:
      "Turnover is a B2B ecommerce platform built for the US marketplace.",
    link: "https://turnover.biz/",
  },
  {
    title: "Turnover - Seller Portal",
    description:
      "Platform for sellers to manage products, orders, and inventory.",
    link: "https://sell.turnover.biz/",
  },
  {
    title: "BOG BEACON",
    description: "An AI-based edTech platform in Cybersecurity space.",
    link: "https://beaconai.fusioncyber.co/",
  },
  {
    title: "CSI-PCE Official Website",
    description:
      "Revamped CSI-PCE's Official Website with a brand new design and cool new features.",
    link: "https://csi.pce.ac.in/",
  },
  {
    title: "Gyanbot AI",
    description:
      "The ultimate chatbot solution designed for commercial applications.",
    link: "https://gyanbot.ai/",
  },
  {
    title: "GPod AI",
    description: "Convert Articles to Engaging Podcasts using AI.",
    link: "https://gpod-ai.vercel.app/",
  },
  {
    title: "Visual X",
    description:
      "Web Application for Press Information Bureau (Govt. of India) that facilitates conversion of Text to Video for Press Releases.",
    link: "https://visualx-ai.vercel.app/",
  },
];
