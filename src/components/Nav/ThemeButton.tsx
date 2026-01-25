"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="rounded bg-zinc-800 p-2 shadow focus:ring-2 focus:ring-zinc-400 focus:outline-none"
      >
        <div className="icon h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="rounded bg-zinc-800 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-700 hover:shadow-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <div className="icon p-2" aria-hidden="true">
        {theme === "dark" ? <FiMoon /> : <FiSun />}
      </div>
    </button>
  );
};

export default ThemeButton;
