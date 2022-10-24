import type { NextPage } from "next";
import Layout from "../components/Layout";
import Image from "next/future/image";
import Avatar from "../assets/avatar.jpeg";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col-reverse justify-center gap-4 lg:flex-row lg:gap-16">
        <div className="leading-none">
          <h2 className="font-epilogue mb-2 text-[2.5rem] font-extrabold text-zinc-200">
            Hitesh
          </h2>
          <p className="mb-4 text-zinc-300">Full Stack Web Developer</p>
          <p className="text-sm text-zinc-400">
            I build web apps! I&apos;m a Full-Stack Web Developer and a
            Third-year Computer Science Student, pursuing my degree from Pillai
            College of Engineering (Mumbai University), currently living in
            Mumbai, India.
          </p>
        </div>
        <div className="min-w-fit">
          <Image src={Avatar} alt="avatar" className="h-32 w-32 rounded-full" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
