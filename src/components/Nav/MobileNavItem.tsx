import React from "react";
import { useRouter } from "next/router";
import { NavItem } from "../../lib/navLinks";

const MobileNavItem = ({ slug, icon }: Omit<NavItem, "name">) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(slug)}
      className={`
          ${router.asPath === slug ? "bg-zinc-600" : "bg-zinc-800"} 
          rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl
      `}
    >
      {React.createElement(icon, { width: "1rem", className: "icon" })}
    </button>
  );
};

export default MobileNavItem;
