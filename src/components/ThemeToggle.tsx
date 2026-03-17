"use client";

import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md text-foreground/60 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-foreground/15 hover:text-foreground hover:scale-110"
    >
      {theme === "dark" ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}
