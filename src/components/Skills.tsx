import React from "react";
import { skills } from "../lib/skills";

const Skills = () => {
  return (
    <div className="mt-10">
      <h2 className="heading mb-2">Skills</h2>
      <div className="grid w-full grid-cols-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="container-gradient flex cursor-pointer items-center gap-2 rounded-lg p-4 shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
          >
            {React.createElement(skill.icon, {
              className: "text-zinc-600 h-6 w-6 dark:text-zinc-300",
            })}
            <h3 className="h5 relative top-[2px] w-full text-sm font-medium leading-none tracking-wide">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
