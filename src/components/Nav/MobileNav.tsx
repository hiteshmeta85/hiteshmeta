"use client";

import React from "react";
import { navLinks } from "../../lib/navLinks";
import { type Link, socialLinks } from "../../lib/socialLinks";
import MobileNavItem from "./MobileNavItem";
import ThemeButton from "./ThemeButton";

const MobileNav = () => {
  const github = socialLinks.find((link) => link.name === "GitHub") as Link;
  const linkedin = socialLinks.find((link) => link.name === "LinkedIn") as Link;

  return (
    <nav
      aria-label="Mobile navigation"
      className="container pt-4 pb-0 lg:hidden"
    >
      <div className="flex h-full gap-4 overflow-x-scroll">
        {navLinks.map((item) => (
          <MobileNavItem
            key={item.name}
            slug={item.slug}
            icon={item.icon}
            name={item.name}
          />
        ))}
        <a
          href={linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-zinc-800 p-2 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          <span className="sr-only">Visit {linkedin.name}</span>
          {React.createElement(linkedin.icon, {
            width: "1rem",
            className: "icon",
            "aria-hidden": true,
          })}
        </a>
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-zinc-800 p-2 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          <span className="sr-only">Visit {github.name}</span>
          {React.createElement(github.icon, {
            width: "1rem",
            className: "icon",
            "aria-hidden": true,
          })}
        </a>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default MobileNav;
