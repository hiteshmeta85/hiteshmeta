import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { links } from "../components/Links/Links";
import LinkCard from "../components/Links/LinkCard";

const Links: NextPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h2 className="text-zinc-200 leading-none text-[2.5rem] font-extrabold">
            Links
          </h2>
          <p className="text-zinc-400 my-3 leading-tight">
            All my profile links to find me on the web.
          </p>
        </div>
        <div
          className="bg-gradient-to-r from-neutral-800 to-zinc-800 px-4 py-4 rounded-lg shadow-xl mt-6 shadow-xl p-4 flex justify-between gap-2">
          <div className="flex flex-col w-full gap-2">
            {links.map((link, index) => (
              <LinkCard key={index} icon={link.icon} name={link.name} url={link.url} value={link.value} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Links;