import React from "react";
import { NavLinks } from "../../lib/navLinks";
import MobileNavItem from "./MobileNavItem";
import dynamic from "next/dynamic";
const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const MobileNav = () => {
  return (
    <div className="container pt-4 pb-0 lg:hidden">
      <div className="no-scrollbar-visible flex h-full gap-4 overflow-x-scroll">
        {NavLinks.map((item, index) => {
          return (
            <MobileNavItem
              key={index}
              name={item.name}
              slug={item.slug}
              icon={item.icon}
            />
          );
        })}
        <ThemeButton />
      </div>
    </div>
  );
};

export default MobileNav;
