"use client";

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
      className="link-background-gradient flex w-full cursor-pointer items-center justify-between rounded-lg p-3 duration-200 hover:-translate-y-1 hover:shadow-lg"
      onClick={() => window.open(url, "_blank")}
    >
      <p className="m-0 text-sm text-zinc-300 md:text-base lg:text-base">
        {name} <span>{" // "}</span> {value}
      </p>
      <p className="icon m-0">{React.createElement(icon)}</p>
    </div>
  );
};

export default LinkCard;
