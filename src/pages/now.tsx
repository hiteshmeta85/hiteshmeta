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
      <div className="leading-none">
        <h2 className="heading mb-2">Now</h2>
        <p className="h5 mb-4">
          The answer to &quot;What are you upto these days?&quot;
        </p>
        <div
          className="prose-style"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
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
