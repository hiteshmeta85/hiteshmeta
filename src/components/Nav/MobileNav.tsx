import React from "react";
import { NavbarItems } from "./NavItems";
import MobileNavItem from "./MobileNavItem";
import ThemeButton from "./ThemeButton";

const MobileNav = () => {
  return (
    <div className="container pt-4 pb-0 lg:hidden">
      <div className="no-scrollbar-visible flex h-full gap-4 overflow-x-scroll">
        {NavbarItems.map((item, index) => {
          return (
            <MobileNavItem key={index} slug={item.slug} icon={item.icon} />
          );
        })}
        <ThemeButton />
      </div>
    </div>
  );
};

export default MobileNav;
