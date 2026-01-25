import {
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import FeaturedSection from "@/components/FeaturedSection";
import { siteConfig } from "@/lib/config";
import { featuredProjects } from "@/lib/featuredProject";

const topSkills = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-16">
        <div className="leading-none">
          <h2 className="heading mb-2">{siteConfig.author.name}</h2>
          <p className="h5 mb-4">{siteConfig.author.role}</p>
          <p className="text">
            I&apos;m a Software Engineer, proficient in creating dynamic web
            applications.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {topSkills.map((skill) => (
              <skill.Icon
                key={skill.name}
                className="h-5 w-5 text-zinc-600 dark:text-zinc-300"
              />
            ))}
          </div>
        </div>
      </div>
      <FeaturedSection featuredProjects={featuredProjects} />
    </div>
  );
}
