import React from "react";
import { IconType } from "react-icons";

interface props {
  url: string;
  value: string;
  name: string;
  icon: IconType;
}

const LinkCard = (props: props) => {
  const { url, value, name, icon } = props;

  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-zinc-900/60 p-3 duration-200 hover:-translate-y-1 hover:shadow-lg"
      onClick={() => window.open(url, "_blank")}
    >
      <p className="m-0 text-sm text-zinc-300 md:text-base lg:text-base">
        {name} <span className="text-zinc-600">{" // "}</span> {value}
      </p>
      <p className="m-0 text-zinc-300">{React.createElement(icon)}</p>
    </div>
  );
};

export default LinkCard;
