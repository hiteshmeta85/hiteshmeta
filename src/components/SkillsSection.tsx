import React from "react";
import type { Category, Skills as ISkills } from "../lib/skills";

const SkillsSection = (props: { skills: ISkills; category: Category }) => {
  const { skills, category } = props;

  return (
    <section
      aria-labelledby={`skills-${category.toLowerCase().replace(/\s+/g, "-")}`}
      className="my-8"
    >
      <h2
        id={`skills-${category.toLowerCase().replace(/\s+/g, "-")}`}
        className="mb-2"
      >
        {category}
      </h2>
      <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 list-none p-0">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="container-gradient flex items-center gap-3 rounded-lg p-4 shadow-lg"
          >
            <span aria-hidden="true">
              {React.createElement(skill.icon, {
                className: "text-zinc-600 h-6 w-6 dark:text-zinc-300",
              })}
            </span>
            <span className="relative top-[2px] w-full text-sm font-medium leading-none tracking-wide">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
