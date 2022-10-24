import React from "react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

interface props {
  slug: string;
  icon: IconType;
}

const MobileNavItem = (props: props) => {
  const router = useRouter();
  const { slug, icon } = props;

  return (
    <button
      onClick={() => router.push(slug)}
      className={`
          ${router.asPath === slug ? "bg-zinc-600" : "bg-zinc-800"} 
          rounded-sm p-2 shadow duration-300 ease-in-out hover:scale-110 hover:shadow-xl
      `}
    >
      {React.createElement(icon, { width: "1rem", className: "text-zinc-100" })}
    </button>
  );
};

export default MobileNavItem;
