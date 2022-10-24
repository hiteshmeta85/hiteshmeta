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
      className="flex justify-between items-center bg-zinc-900/60 duration-200 p-3 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
      onClick={() => window.open(url, "_blank")}
    >
      <p className="text-zinc-300 m-0 text-sm lg:text-base md:text-base">
        {name} <span className="text-zinc-600">{" // "}</span>{" "}
        {value}
      </p>
      <p className="text-zinc-300 m-0">{React.createElement(icon)}</p>
    </div>
  );
};

export default LinkCard;