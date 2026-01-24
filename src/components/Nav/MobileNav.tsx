"use client";

import React from "react";
import { navLinks } from "../../lib/navLinks";
import MobileNavItem from "./MobileNavItem";
import { NavItem } from "./NavItem";
import { Link, socialLinks } from "../../lib/socialLinks";
import ThemeButton from "./ThemeButton";

const MobileNav = () => {
  const github = socialLinks.find((link) => link.name === "GitHub") as Link;
  const linkedin = socialLinks.find((link) => link.name === "LinkedIn") as Link;

  return (
    <div className="container pt-4 pb-0 lg:hidden">
      <div className="no-scrollbar-visible flex h-full gap-4 overflow-x-scroll">
        {navLinks.map((item, index) => {
          return (
            <MobileNavItem key={index} slug={item.slug} icon={item.icon} />
          );
        })}
        <a href={linkedin.url} target="_blank" rel="noreferrer">
          <NavItem name={linkedin.name} icon={linkedin.icon} />
        </a>
        <a href={github.url} target="_blank" rel="noreferrer">
          <NavItem name={github.name} icon={github.icon} />
        </a>
        <ThemeButton />
      </div>
    </div>
  );
};

export default MobileNav;
