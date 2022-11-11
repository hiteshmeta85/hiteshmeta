import React from "react";
import { IconType } from "react-icons";

interface CustomButton {
  title: string;
  onClick?: () => void;
  icon: IconType;
  type?: "button" | "reset" | "submit";
  styles?: string;
  disabled?: boolean;
}

const CustomButton = (props: CustomButton) => {
  const { title, onClick, icon, type, styles, disabled = false } = props;

  return (
    <button
      onClick={onClick || undefined}
      type={type || "button"}
      disabled={disabled}
      className={`button-gradient h5 mt-3 rounded-lg px-4 py-2 px-7 hover:shadow-lg ${styles}`}
    >
      <div className="flex items-center justify-center gap-2">
        {React.createElement(icon)}
        <p className="relative top-[1px]">{title}</p>
      </div>
    </button>
  );
};

export default CustomButton;
