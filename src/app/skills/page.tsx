"use client";

import SkillsSection from "@/components/SkillsSection";
import { Category, skills } from "@/lib/skills";

export default function Skills() {
  return (
    <div>
      <div className="leading-none">
        <h1 className="heading mb-2">Skills</h1>
        <p className="h5 mb-4">
          The technologies I&apos;ve worked with in production projects.
        </p>
      </div>
      {(Object.keys(Category) as Array<keyof typeof Category>).map((key) => {
        return (
          <SkillsSection
            key={key}
            skills={skills.filter((item) => item.category === Category?.[key])}
            category={Category?.[key]}
          />
        );
      })}
    </div>
  );
}
