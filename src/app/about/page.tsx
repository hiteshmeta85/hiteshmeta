import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Hitesh Meta - Software Developer",
};

async function getAboutContent() {
  const filePath = path.join(process.cwd(), "src/content/about.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content;
}

export default async function About() {
  const content = await getAboutContent();

  return (
    <div className="leading-none">
      <h2 className="heading mb-2">About Me</h2>
      <div className="prose-style">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  );
}
