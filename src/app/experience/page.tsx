import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { experiences } from "@/lib/experience";

export const metadata = {
  title: "Experience",
  description: "My professional work experience and projects.",
};

export default function Experience() {
  return (
    <div>
      <div className="mb-8 leading-none">
        <h1 className="heading mb-2">Experience</h1>
        <p className="h5">
          My professional journey and the projects I&apos;ve worked on.
        </p>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
}
