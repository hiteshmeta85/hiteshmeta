"use client";

import LinkCard from "@/components/LinkCard";
import { socialLinks } from "@/lib/socialLinks";

export default function Links() {
  return (
    <div>
      <div className="leading-none">
        <h1 className="heading mb-2">Links</h1>
        <p className="h5 mb-4">All my profile links to find me on the web.</p>
      </div>
      <div className="container-gradient mt-6 flex justify-between gap-2 rounded-lg px-4 py-4 shadow-xl">
        <div className="flex w-full flex-col gap-2">
          {socialLinks.map((link) => (
            <LinkCard
              key={link.name}
              icon={link.icon}
              name={link.name}
              url={link.url}
              value={link.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
