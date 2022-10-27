import React, { useState } from "react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

export const NavItem = ({
  slug,
  name,
  icon,
}: {
  slug: string;
  name: string;
  icon: IconType;
}) => {
  const router = useRouter();
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <button
      onClick={() => router.push(slug)}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
      className={`
          ${
            router.asPath === slug
              ? "bg-zinc-600"
              : isMouseOver
              ? "bg-zinc-600"
              : "bg-zinc-800"
          } 
          rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl
      `}
    >
      {React.createElement(icon, { width: "1rem", className: "text-zinc-100" })}

      {isMouseOver && (
        <span className="absolute left-10 top-0 h-full rounded bg-zinc-700 p-2 text-xs text-zinc-200 shadow-xl">
          {name}
        </span>
      )}
    </button>
  );
};
