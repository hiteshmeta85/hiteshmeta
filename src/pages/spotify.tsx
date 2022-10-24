import React from "react";
import Layout from "../components/Layout";

const Spotify = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-4 lg:gap-16">
        <div className="leading-none">
          <h2 className="text-zinc-200 text-[2.5rem] font-extrabold mb-2">
            Spotify
          </h2>
          <p className="text-zinc-400 mb-4 mt-4">
            My Spotify stats
          </p>
          <p className="text-zinc-300 mt-12">
            Working on it!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Spotify;