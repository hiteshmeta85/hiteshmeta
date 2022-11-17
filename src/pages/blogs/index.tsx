import React from "react";
import Layout from "../../components/Layout";
import { getAllBlogsData } from "../../lib/blogs";
import { GetStaticProps } from "next";

const Blogs = ({
  allBlogsData,
}: {
  allBlogsData: {
    title: string;
    id: string;
    date: string;
    description: string | undefined;
  }[];
}) => {
  return (
    <Layout>
      <>
        <div className="leading-none">
          <h2 className="heading mb-2">Blogs</h2>
          <p className="h6 mb-4">by @hiteshmeta</p>
        </div>
        <div className="my-6" />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {allBlogsData.map((blog, index) => {
            return (
              <a key={index} href={`/blogs/${blog.id}`}>
                <div className="container-gradient flex h-full cursor-pointer flex-col justify-between gap-4 rounded-lg p-4 duration-300 hover:scale-105">
                  <p className="heading text-xl">{blog.title}</p>
                  <p className="text">{blog.description}</p>
                  <p className="text">{blog.date}</p>
                </div>
              </a>
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = getAllBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
};
