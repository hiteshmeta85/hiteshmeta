import Layout from "../components/Layout";
import FeaturedSection from "../components/FeaturedSection";
import { featuredProjects } from "../lib/featuredProject";
import React from "react";
import {
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const topSkills = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-16">
          <div className="leading-none">
            <h2 className="heading mb-2">Hitesh Meta</h2>
            <p className="h5 mb-4">SDE II @Memorang AI</p>
            <p className="text">
              I&apos;m a Software Engineer, proficient in creating dynamic web
              applications.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {topSkills.map((skill, index) =>
                React.createElement(skill.icon, {
                  key: index,
                  className: "text-zinc-600 h-5 w-5 dark:text-zinc-300",
                }),
              )}
            </div>
          </div>
          {/*<div className="min-w-fit">
            <Image
              src={Avatar}
              alt="avatar"
              quality={100}
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>*/}
        </div>
        <FeaturedSection featuredProjects={featuredProjects} />
      </div>
    </Layout>
  );
};

export default Home;
