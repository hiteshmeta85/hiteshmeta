import { Category, Skills as ISkills } from "../lib/skills";
import React from "react";

const SkillsSection = (props: { skills: ISkills; category: Category }) => {
  const { skills, category } = props;

  return (
    <div className="my-8">
      <p className="mb-2">{category}</p>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="container-gradient flex cursor-pointer items-center gap-3 rounded-lg p-4 shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
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

export default SkillsSection;
