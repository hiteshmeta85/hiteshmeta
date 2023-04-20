import React from "react";
import { FeaturedProjects } from "../lib/featuredProject";

const FeaturedSection = ({
  featuredProjects,
}: {
  featuredProjects: FeaturedProjects;
}) => {
  return (
    <div className="mt-10">
      <h2 className="h2 md:heading mb-2">Featured Projects</h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((repo, index) => (
          <a
            key={index}
            href={`${repo.link}`}
            target="_blank"
            rel="noreferrer"
            className="border-gradient rounded-lg border-4 shadow-lg duration-300 hover:scale-[103%] hover:shadow-xl"
          >
            <div className="container-gradient flex h-full cursor-pointer flex-col justify-between rounded-lg p-4">
              <div>
                <h3 className="heading mb-6 w-full text-xl font-bold tracking-tight">
                  {repo.repo}
                </h3>
                <p className="text w-full tracking-tight">{repo.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
