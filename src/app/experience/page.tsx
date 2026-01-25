import type { Metadata } from "next";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { siteConfig } from "@/lib/config";
import { experiences } from "@/lib/experience";

const pageTitle = "Experience";
const pageDescription =
  "My professional work experience, projects, and the technologies I've worked with.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: `${siteConfig.url}/experience`,
    type: "profile",
    images: [
      {
        url: siteConfig.images.avatar,
        width: 400,
        height: 400,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    images: [siteConfig.images.avatar],
  },
};

export default function Experience() {
  return (
    <div>
      <div className="mb-8 leading-none">
        <h1 className="heading mb-2">Experience</h1>
        <p className="h5">
          My professional journey and the projects I&apos;ve worked on.
        </p>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
}
