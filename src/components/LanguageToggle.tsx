"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={toggleLocale}
      aria-label="Toggle language"
      className={`fixed top-6 right-[4.75rem] z-50 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background/90 text-foreground/60 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-background hover:text-foreground ${
        hidden ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-tight">
        {locale === "tr" ? "EN" : "TR"}
      </span>
    </button>
  );
}
