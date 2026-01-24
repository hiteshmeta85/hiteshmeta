import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx-components";

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
