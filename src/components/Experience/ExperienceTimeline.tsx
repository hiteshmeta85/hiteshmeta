import React from "react";
import { FiExternalLink } from "react-icons/fi";
import type { WorkExperience } from "@/lib/experience";
import { cn } from "@/lib/utils";

type ExperienceTimelineProps = {
  experiences: WorkExperience[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <section aria-label="Work experience timeline" className="relative">
      {experiences.map((exp, index) => {
        const isCurrent = exp.period.end === null;
        const isLast = index === experiences.length - 1;

        return (
          <article
            key={exp.id}
            className="relative pb-10 pl-8 last:pb-0"
            aria-labelledby={`exp-${exp.id}-title`}
          >
            {/* Timeline line */}
            {!isLast && (
              <div
                className="absolute top-4 left-[7px] h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"
                aria-hidden="true"
              />
            )}

            {/* Timeline dot */}
            <div
              className={cn(
                "absolute top-1.5 left-0 h-4 w-4 rounded-full",
                isCurrent
                  ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                  : "border-2 border-zinc-400 bg-white dark:border-zinc-500 dark:bg-zinc-900"
              )}
              aria-hidden="true"
            />

            {/* Card content */}
            <div className="container-gradient rounded-lg p-5 shadow-sm">
              {/* Header */}
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3
                    id={`exp-${exp.id}-title`}
                    className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                  >
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {exp.role}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:text-right">
                  <time className="text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.period.start} - {exp.period.end ?? "Present"}
                  </time>
                  {isCurrent && (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>

              {/* Technologies */}
              {exp.technologies.length > 0 && (
                <div className="mb-4">
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-600 bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        <span aria-hidden="true">
                          {React.createElement(tech.icon, {
                            className: "h-3.5 w-3.5",
                          })}
                        </span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects */}
              {exp.projects.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                    Projects
                  </h4>
                  <ul className="space-y-2">
                    {exp.projects.map((project) => (
                      <li
                        key={project.name}
                        className="rounded-md bg-zinc-50 p-3 dark:bg-zinc-700"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                              {project.name}
                            </p>
                            {project.description && (
                              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                                {project.description}
                              </p>
                            )}
                          </div>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                              aria-label={`Visit ${project.name} project`}
                            >
                              <FiExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ExperienceTimeline;
