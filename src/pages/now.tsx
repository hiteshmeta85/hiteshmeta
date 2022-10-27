import Layout from "../components/Layout";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

const About = ({
  content,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="flex flex-row gap-4 lg:gap-16">
        <div className="leading-none">
          <h2 className="mb-2 text-[2.5rem] font-extrabold text-zinc-200">
            Now
          </h2>
          <p className="mb-4 text-zinc-400">
            The answer to &quot;What are you upto these days?&quot;
          </p>
          <div
            className="prose text-sm leading-5 underline-offset-4 prose-h6:text-xs prose-h6:text-zinc-400 prose-p:text-zinc-300 prose-a:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const fileName = fs.readFileSync(`src/content/now.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};
