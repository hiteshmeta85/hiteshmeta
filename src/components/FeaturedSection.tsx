import React from "react";
import { FeaturedProjects } from "../lib/featuredProject";

const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-gradient rounded-lg border-4 shadow-lg">
      <div className="container-gradient flex h-full flex-col rounded-lg p-4">
        <h3 className="h1 min-h-[60px] w-full text-lg font-bold tracking-tight">
          {title}
        </h3>
        <p className="text w-full tracking-tight">{description}</p>
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
    <div className="mt-10">
      <h2 className="h2 md:heading mb-2">Featured Projects</h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => {
          if (project.link === undefined) {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
              />
            );
          }
          return (
            <a
              key={index}
              href={`${project.link}`}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer duration-300 hover:scale-[103%] hover:shadow-xl"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedSection;
