import type { NextPage } from "next";
import Layout from "../components/Layout";
import Image from 'next/future/image'
import Avatar from "../assets/avatar.jpeg"

const Home: NextPage = () => {

  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-4 lg:gap-12">
        <div className="leading-none">
          <h2 className="text-zinc-200 font-epilogue text-[2.5rem] font-extrabold mb-2">
            Hitesh
          </h2>
          <p className="text-zinc-300 mb-4">
            Full Stack Web Developer
          </p>
          <p className="text-zinc-400 text-sm">
            I build web apps! I&apos;m a Full-Stack Web Developer and a Third-year Computer Science Student, pursuing my degree
            from Pillai College of Engineering (Mumbai University), currently living in Mumbai, India.
          </p>
        </div>
        <div className="min-w-fit">
          <Image
            src={Avatar}
            alt="avatar"
            className="rounded-full h-32 w-32"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
