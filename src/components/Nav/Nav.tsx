"use client";

import React from "react";
import { navLinks } from "../../lib/navLinks";
import { type Link, socialLinks } from "../../lib/socialLinks";
import { NavItem } from "./NavItem";
import ThemeButton from "./ThemeButton";

const Nav = () => {
  const github = socialLinks.find((link) => link.name === "GitHub") as Link;
  const linkedin = socialLinks.find((link) => link.name === "LinkedIn") as Link;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed hidden h-full px-6 pt-6 lg:block"
    >
      <div className="flex h-full flex-col items-center justify-start gap-4">
        {navLinks.map((item) => (
          <NavItem
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
          className="rounded-sm bg-zinc-800 p-2 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-600 hover:shadow-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
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
          className="rounded-sm bg-zinc-800 p-2 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-600 hover:shadow-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
        >
          <span className="sr-only">Visit {github.name}</span>
          {React.createElement(github.icon, {
            width: "1rem",
            className: "icon",
            "aria-hidden": true,
          })}
        </a>
        <ThemeButton />
        <div
          className="mt-2 h-full border-r-2 border-zinc-800"
          aria-hidden="true"
        />
      </div>
    </nav>
  );
};

export default Nav;
