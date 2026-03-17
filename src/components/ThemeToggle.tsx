"use client";

import { useTheme } from "./ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background/90 text-foreground/60 shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-background hover:text-foreground"
    >
      {theme === "dark" ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}
