import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog posts by Hitesh Meta",
};

export default function Blogs() {
  const allBlogsData = getAllBlogs();

  return (
    <>
      <div className="leading-none">
        <h1 className="heading mb-2">Blogs</h1>
        <p className="h6 mb-4">by @hiteshmeta</p>
      </div>
      <div className="my-6" />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allBlogsData.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div className="container-gradient border-gradient flex h-full cursor-pointer flex-col justify-between gap-4 rounded-xl border-4 p-4 shadow-lg duration-300 hover:scale-105">
              <div className="flex flex-col gap-4">
                <h2 className="h3">{blog.frontmatter.title}</h2>
                <p className="text">{blog.frontmatter.description}</p>
              </div>
              <p className="text mt-4">{blog.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
