import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogFrontmatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  published?: boolean;
}

export interface Blog {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export function getAllBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((name) => name.replace(/\.(mdx|md)$/, ""));
}

export function getAllBlogs(): Blog[] {
  const slugs = getAllBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlugSync(slug))
    .filter((blog): blog is Blog => blog !== null)
    .filter((blog) => blog.frontmatter.published !== false);

  return blogs;
}

function getBlogBySlugSync(slug: string): Blog | null {
  const mdxPath = path.join(blogsDirectory, `${slug}.mdx`);
  const mdPath = path.join(blogsDirectory, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return getBlogBySlugSync(slug);
}

// Legacy functions for backwards compatibility during migration
export function getAllBlogsData() {
  return getAllBlogs().map((blog) => ({
    id: blog.slug,
    title: blog.frontmatter.title,
    date: blog.frontmatter.date,
    description: blog.frontmatter.description,
  }));
}

export function getAllBlogIds() {
  return getAllBlogSlugs().map((slug) => ({
    params: { id: slug },
  }));
}

export async function getBlogData(id: string) {
  const blog = await getBlogBySlug(id);
  return {
    frontmatter: blog?.frontmatter || {},
    content: blog?.content || "",
  };
}
