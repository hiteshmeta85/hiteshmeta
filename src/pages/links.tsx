import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { links } from "../components/Links/Links";
import LinkCard from "../components/Links/LinkCard";

const Links: NextPage = () => {
  return (
    <Layout>
      <div>
        <div className="leading-none">
          <h2 className="heading mb-2">Links</h2>
          <p className="h5 mb-4">All my profile links to find me on the web.</p>
        </div>
        <div className="container-gradient mt-6 flex justify-between gap-2 rounded-lg px-4 py-4 shadow-xl">
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
