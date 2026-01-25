import type { FeaturedProject, FeaturedProjects } from "../lib/featuredProject";

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

type ProjectWithIndex = FeaturedProject & { originalIndex: number };

const distributeToColumns = (
  items: FeaturedProjects,
  columnCount: number
): ProjectWithIndex[][] => {
  const columns: ProjectWithIndex[][] = Array.from(
    { length: columnCount },
    () => [] as ProjectWithIndex[]
  );

  if (columnCount === 1) {
    columns[0] = items.map((item, i) => ({ ...item, originalIndex: i }));
    return columns;
  }

  if (columnCount === 2) {
    items.forEach((item, i) => {
      const col = columns[i % 2];
      if (col) col.push({ ...item, originalIndex: i });
    });
    return columns;
  }

  // 3 columns: fill left, right, center pattern
  const fillOrder = [0, 2, 0, 2, 1, 0, 2, 1];
  items.forEach((item, i) => {
    const columnIndex = fillOrder[i % fillOrder.length] ?? 0;
    const col = columns[columnIndex];
    if (col) col.push({ ...item, originalIndex: i });
  });

  return columns;
};

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
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {image ? (
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div
          className={`aspect-video ${gradients[index % gradients.length]}`}
        />
      )}
      <div className="p-4">
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

const ProjectCardWrapper = ({ project }: { project: ProjectWithIndex }) => {
  const card = (
    <ProjectCard
      title={project.title}
      description={project.description}
      index={project.originalIndex}
      image={project.image}
    />
  );

  if (project.link === undefined) {
    return <div className="masonry-item">{card}</div>;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="masonry-item block rounded-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
    >
      {card}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
};

const FeaturedSection = ({
  featuredProjects,
}: {
  featuredProjects: FeaturedProjects;
}) => {
  const columns3 = distributeToColumns(featuredProjects, 3);
  const columns2 = distributeToColumns(featuredProjects, 2);
  const columns1 = distributeToColumns(featuredProjects, 1);

  return (
    <section aria-labelledby="featured-projects" className="mt-10">
      <h2 id="featured-projects" className="h3 mb-4">
        Featured Projects
      </h2>

      {/* Mobile: 1 column */}
      <div className="flex gap-4 sm:hidden">
        {columns1.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-4">
            {column.map((project) => (
              <ProjectCardWrapper key={project.title} project={project} />
            ))}
          </div>
        ))}
      </div>

      {/* Tablet: 2 columns */}
      <div className="hidden gap-5 sm:flex lg:hidden">
        {columns2.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-5">
            {column.map((project) => (
              <ProjectCardWrapper key={project.title} project={project} />
            ))}
          </div>
        ))}
      </div>

      {/* Desktop: 3 columns (left-right-center fill) */}
      <div className="hidden gap-6 lg:flex">
        {columns3.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-6">
            {column.map((project) => (
              <ProjectCardWrapper key={project.title} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
