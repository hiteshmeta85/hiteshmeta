import Image from "next/image";
import type { FeaturedProjects } from "../lib/featuredProject";

const gradients = [
  "bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-indigo-600/30 dark:from-blue-500/25 dark:via-blue-600/15 dark:to-indigo-700/25",
  "bg-gradient-to-tr from-emerald-400/30 via-teal-500/20 to-cyan-600/30 dark:from-emerald-500/25 dark:via-teal-600/15 dark:to-cyan-700/25",
  "bg-gradient-to-bl from-violet-400/30 via-purple-500/20 to-fuchsia-600/30 dark:from-violet-500/25 dark:via-purple-600/15 dark:to-fuchsia-700/25",
  "bg-gradient-to-tl from-amber-400/30 via-orange-500/20 to-red-600/30 dark:from-amber-500/25 dark:via-orange-600/15 dark:to-red-700/25",
  "bg-gradient-to-br from-rose-400/30 via-pink-500/20 to-fuchsia-600/30 dark:from-rose-500/25 dark:via-pink-600/15 dark:to-fuchsia-700/25",
  "bg-gradient-to-tr from-cyan-400/30 via-sky-500/20 to-blue-600/30 dark:from-cyan-500/25 dark:via-sky-600/15 dark:to-blue-700/25",
  "bg-gradient-to-bl from-orange-400/30 via-amber-500/20 to-yellow-600/30 dark:from-orange-500/25 dark:via-amber-600/15 dark:to-yellow-700/25",
  "bg-gradient-to-tl from-slate-400/30 via-zinc-500/20 to-neutral-600/30 dark:from-slate-500/25 dark:via-zinc-600/15 dark:to-neutral-700/25",
];

const ProjectCard = ({
  title,
  description,
  index,
  image,
}: {
  title: string;
  description: string;
  index: number;
  image?: string;
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {image ? (
        <div className="relative aspect-video w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div
          className={`aspect-video ${gradients[index % gradients.length]}`}
        />
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturedSection = ({
  featuredProjects,
}: {
  featuredProjects: FeaturedProjects;
}) => {
  return (
    <section aria-labelledby="featured-projects" className="mt-10">
      <h2 id="featured-projects" className="h3 mb-4">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {featuredProjects.map((project, index) => {
          const card = (
            <ProjectCard
              title={project.title}
              description={project.description}
              index={index}
              image={project.image}
            />
          );

          if (project.link === undefined) {
            return (
              <div key={project.title} className="h-full">
                {card}
              </div>
            );
          }

          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
            >
              {card}
              <span className="sr-only">(opens in new tab)</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedSection;
