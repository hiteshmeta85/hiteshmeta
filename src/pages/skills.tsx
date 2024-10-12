import React from "react";
import { Category, skills } from "../lib/skills";
import SkillsSection from "../components/SkillsSection";
import Layout from "../components/Layout";

const Skills = () => {
  return (
    <Layout>
      <div>
        <div className="leading-none">
          <h2 className="heading mb-2">Skills</h2>
          <p className="h5 mb-4">
            The technologies I&apos;ve worked with in production projects.
          </p>
        </div>
        {(Object.keys(Category) as Array<keyof typeof Category>).map((key) => {
          return (
            <SkillsSection
              key={key}
              skills={skills.filter(
                (item) => item.category === Category?.[key],
              )}
              category={Category?.[key]}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Skills;
