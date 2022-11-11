import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded bg-zinc-800 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-700 hover:shadow-xl"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <div className="icon p-2">
        {theme === "dark" ? <FiMoon /> : <FiSun />}
      </div>
    </button>
  );
};

export default ThemeButton;
