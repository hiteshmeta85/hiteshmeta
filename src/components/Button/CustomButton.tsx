import React from "react";
import { IconType } from "react-icons";

interface CustomButton {
  title: string;
  onClick?: () => void;
  icon: IconType;
  type?: "button" | "reset" | "submit";
  styles?: string
  disabled?: boolean
}

const CustomButton = (props: CustomButton) => {
  const { title, onClick, icon, type, styles, disabled = false } = props;

  return (
    <button
      onClick={onClick || undefined}
      type={type || "button"}
      disabled={disabled}
      className={
        `rounded-lg bg-zinc-900 px-4 py-2 px-7 mt-3 text-white hover:shadow-lg ${styles}`
      }
    >
      <div className="flex gap-2 items-center justify-center">{React.createElement(icon)}<span>{title}</span></div>
    </button>
  );
};

export default CustomButton;