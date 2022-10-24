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
          <h2 className="text-[2.5rem] font-extrabold leading-none text-zinc-200">
            Links
          </h2>
          <p className="my-3 leading-tight text-zinc-400">
            All my profile links to find me on the web.
          </p>
        </div>
        <div className="mt-6 flex justify-between gap-2 rounded-lg bg-gradient-to-r from-neutral-800 to-zinc-800 p-4 px-4 py-4 shadow-xl shadow-xl">
          <div className="flex w-full flex-col gap-2">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                icon={link.icon}
                name={link.name}
                url={link.url}
                value={link.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Links;
