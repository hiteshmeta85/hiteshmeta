import Image from "next/image";
import { SiExpo, SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";
import FeaturedSection from "@/components/FeaturedSection";
import { siteConfig } from "@/lib/config";
import { featuredProjects } from "@/lib/featuredProject";

const topSkills = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Expo", Icon: SiExpo },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex-1 leading-none">
          <h1 className="heading mb-2">{siteConfig.author.name}</h1>
          <p className="h5 mb-4">{siteConfig.author.role}</p>
          <p className="text max-w-md leading-relaxed">
            I&apos;m a Software Engineer, proficient in creating dynamic web
            applications.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {topSkills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400"
              >
                <skill.Icon className="h-4 w-4 shrink-0 relative -top-0.5" />
                <span className="leading-none">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={siteConfig.images.avatar}
            alt={siteConfig.author.name}
            width={140}
            height={140}
            priority
            className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800"
          />
        </div>
      </div>
      <FeaturedSection featuredProjects={featuredProjects} />
    </div>
  );
}
