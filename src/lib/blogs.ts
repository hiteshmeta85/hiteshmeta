import fs from "fs";
import matter from "gray-matter";

export function getAllBlogsData() {
  const fileNames = fs.readdirSync(`src/content/blogs`);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const filepath = fs.readFileSync(`src/content/blogs/${id}.md`, "utf8");

    const {
      data: { title, date, description },
    } = matter(filepath);

    return {
      id,
      title,
      date,
      description,
    };
  });
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(`src/content/blogs`);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getBlogData(id: string) {
  const fileName = fs.readFileSync(`src/content/blogs/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    frontmatter,
    content,
  };
}
