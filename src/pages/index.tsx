import Layout from "../components/Layout";
import Image from "next/future/image";
import Avatar from "../assets/avatar.jpeg";
import axios from "axios";
import PinnedRepos from "../components/PinnedRepos";
import { useEffect, useState } from "react";

const Home = () => {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  const fetchData = async () => {
    await axios(
      `https://gh-pinned-repos.egoist.dev/?username=hiteshmeta85`,
    ).then(function (response) {
      setPinnedRepos(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {pinnedRepos.length > 0 && <PinnedRepos pinnedRepos={pinnedRepos} />}
      </div>
    </Layout>
  );
};

export default Home;
