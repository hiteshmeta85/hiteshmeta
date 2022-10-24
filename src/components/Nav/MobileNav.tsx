import React from "react";
import { NavbarItems } from "./NavItems";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
  return (
    <div className="lg:hidden pt-4 pb-0 container">
      <div className="h-full flex gap-4 overflow-x-scroll no-scrollbar-visible">
        {NavbarItems.map((item, index) => {
          return (
            <MobileNavItem key={index} slug={item.slug} icon={item.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;