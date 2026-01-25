"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import type { NavItem as NavItemType } from "../../lib/navLinks";

export const NavItem = ({
  slug,
  name,
  icon,
}: Omit<NavItemType, "slug"> & { slug?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Navigate to ${name}`}
      {...(slug && {
        onClick: () => router.push(slug),
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={`
          ${pathname === slug || isHovered ? "bg-zinc-600" : "bg-zinc-800"}
          rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-400
      `}
    >
      <span aria-hidden="true">
        {React.createElement(icon, { width: "1rem", className: "icon" })}
      </span>

      {isHovered && (
        <span className="absolute left-10 top-0 h-full rounded bg-zinc-700 p-2 text-xs text-zinc-200 shadow-xl">
          {name}
        </span>
      )}
    </button>
  );
};
