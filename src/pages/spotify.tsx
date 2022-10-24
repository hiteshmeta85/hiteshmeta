import React from "react";
import Layout from "../components/Layout";

const Spotify = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-4 lg:gap-16">
        <div className="leading-none">
          <h2 className="mb-2 text-[2.5rem] font-extrabold text-zinc-200">
            Spotify
          </h2>
          <p className="mb-4 mt-4 text-zinc-400">My Spotify stats</p>
          <p className="mt-12 text-zinc-300">Working on it!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Spotify;
