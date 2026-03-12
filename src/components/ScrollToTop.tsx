"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 shadow-lg shadow-black/30 transition-all duration-300 hover:bg-white/15 hover:text-white hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
