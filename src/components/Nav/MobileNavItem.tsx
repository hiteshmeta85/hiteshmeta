"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { NavItem } from "../../lib/navLinks";

const MobileNavItem = ({ slug, icon }: Omit<NavItem, "name">) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => router.push(slug)}
      className={`
          ${pathname === slug ? "bg-zinc-600" : "bg-zinc-800"}
          rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl
      `}
    >
      {React.createElement(icon, { width: "1rem", className: "icon" })}
    </button>
  );
};

export default MobileNavItem;
