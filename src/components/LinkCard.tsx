import React from "react";
import type { IconType } from "react-icons";

interface LinkCardProps {
  url: string;
  value: string;
  name: string;
  icon: IconType;
}

const LinkCard = ({ url, value, name, icon }: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-background-gradient flex w-full items-center justify-between rounded-lg p-3 duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
    >
      <p className="m-0 text-sm text-zinc-300 md:text-base lg:text-base">
        {name} <span>{" // "}</span> {value}
      </p>
      <span className="icon m-0" aria-hidden="true">
        {React.createElement(icon)}
      </span>
    </a>
  );
};

export default LinkCard;
