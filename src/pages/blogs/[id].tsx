import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import Layout from "../../components/Layout";
import md from "markdown-it";
import { getAllBlogIds, getBlogData } from "../../lib/blogs";

const Blog = ({
  content,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div
        className="prose-style"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </Layout>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontmatter, content } = await getBlogData(params?.id as string);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};
