import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

export const NavItem = ({ slug, name, icon }: { slug: string, name: string, icon: ReactElement }) => {
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
          ${router.asPath === slug ? "bg-zinc-600" : isMouseOver ? "bg-zinc-600" : "bg-zinc-800"} 
          rounded-sm shadow hover:shadow-xl hover:scale-110 duration-300 ease-in-out p-2
      `}
    >
      {icon}

      {isMouseOver &&
        <span
          className="absolute text-xs left-10 top-0 p-2 h-full rounded shadow-xl text-zinc-200 bg-zinc-700">
          {name}
        </span>
      }
    </button>
  );
};