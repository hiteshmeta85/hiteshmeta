import React from "react";
import { PinnedRepos } from "../lib/types";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";

const PinnedRepos = (props: { pinnedRepos: PinnedRepos }) => {
  return (
    <div className="mt-10">
      <h2 className="heading mb-2">Projects</h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {props.pinnedRepos.map((repo, index) => (
          <a
            key={index}
            href={`${repo.link}`}
            target="_blank"
            rel="noreferrer"
            className="gap-4 rounded-lg shadow-lg duration-300 hover:scale-[103%] hover:shadow-xl"
          >
            <div className="container-gradient flex h-full cursor-pointer flex-col justify-between rounded-lg p-4">
              <div>
                <h3 className="h4 mb-6 w-full text-lg font-bold leading-none tracking-tight">
                  {repo.repo}
                </h3>
                <p className="text mb-6 w-full tracking-tight">
                  {repo.description}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="text flex items-center gap-2 text-lg font-semibold">
                  <FiStar />
                  <p className="relative top-[2px]">{repo.stars}</p>
                </div>
                <div className="text flex items-center gap-2 text-lg font-semibold">
                  <VscRepoForked />
                  <p className="relative top-[2px]">{repo.forks}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/hiteshmeta85?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="link group flex cursor-pointer items-center gap-2 no-underline duration-200"
        >
          View More{" "}
          <span className="duration-200 group-hover:translate-x-1">
            <FiArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default PinnedRepos;
