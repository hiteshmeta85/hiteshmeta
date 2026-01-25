"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import type { NavItem } from "../../lib/navLinks";
import { cn } from "../../lib/utils";

const MobileNavItem = ({ slug, icon, name }: NavItem) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      aria-label={`Navigate to ${name}`}
      onClick={() => router.push(slug)}
      className={cn(
        "rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none",
        pathname === slug ? "bg-zinc-600" : "bg-zinc-800",
      )}
    >
      <span aria-hidden="true">
        {React.createElement(icon, { width: "1rem", className: "icon" })}
      </span>
    </button>
  );
};

export default MobileNavItem;
