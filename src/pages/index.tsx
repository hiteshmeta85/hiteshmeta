import Layout from "../components/Layout";
import Image from "next/future/image";
import Avatar from "../../public/avatar.jpeg";
import PinnedRepos from "../components/PinnedRepos";
import { Repo } from "../lib/types";
import { GetStaticProps } from "next";
import { getPinnedRepos } from "../lib/getPinnedRepos";
import Skills from "../components/Skills";

const Home = (props: { pinnedRepos: Repo[] }) => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col-reverse justify-center gap-4 lg:flex-row lg:gap-16">
          <div className="leading-none">
            <h2 className="heading mb-2">Hitesh</h2>
            <p className="h5 mb-4">Full Stack Web Developer</p>
            <p className="text">
              I build web apps! I&apos;m a Full-Stack Web Developer and a
              Third-year Computer Science Student, pursuing my degree from
              Pillai College of Engineering (Mumbai University), currently
              living in Mumbai, India.
            </p>
          </div>
          <div className="min-w-fit">
            <Image
              src={Avatar}
              alt="avatar"
              className="h-32 w-32 rounded-full"
            />
          </div>
        </div>
        <PinnedRepos pinnedRepos={props.pinnedRepos} />
        <Skills />
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const pinnedRepos = await getPinnedRepos();

  return {
    props: {
      pinnedRepos,
    },
    revalidate: 86400,
  };
};
