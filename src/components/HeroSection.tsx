"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaCode } from "react-icons/fa6";
import { HEADER_SOCIALS } from "@/constants/bentoItems";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  x: <FaXTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  tiktok: <FaTiktok />,
  youtube: <FaYoutube />,
};

const formatTimestamp = () => dayjs().format("ddd, MMM DD, hh:mm A").toUpperCase();

export function HeroSection() {
  const [timestamp, setTimestamp] = useState(formatTimestamp);

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(formatTimestamp()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center  pb-10  md:pb-14 overflow-hidden">
      {/* Timestamp */}
      <p suppressHydrationWarning className="text-[10px] md:text-xs tracking-[0.25em] text-white/30 uppercase font-medium mb-6 md:mb-8 z-10">
        {timestamp}
      </p>

      {/* Background large name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="text-[clamp(2.5rem,9vw,7rem)] font-extrabold leading-[0.85] text-center text-white/[0.03] whitespace-nowrap">
          Evren
          <br />
          Uzuntas
        </span>
      </div>

      {/* Profile photo */}
      <div className="relative z-10 mb-10">
        {/* Glow */}
        <div className="absolute -inset-4 rounded-full bg-white/[0.07] blur-2xl" />

        <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-2 border-white/10 shadow-lg shadow-black/40">
          <Image src="/pp.jpeg" alt="Evren Uzuntaş" fill sizes="112px" className="object-cover" priority />
        </div>

        {/* Blue verification badge */}
        <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1D9BF0] ring-2 ring-[#0a0a0a]">
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
      </div>

      {/* Social media bar */}
      <div className="relative z-10 flex items-center gap-2.5">
        {HEADER_SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105">
            <span className="text-[17px]">{SOCIAL_ICONS[s.id]}</span>
          </a>
        ))}
      </div>

      {/* Quick navigation buttons */}
      <div className="relative z-10 flex items-center gap-3 mt-8">
        <button
          onClick={() => document.getElementById("youtube")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 hover:border-[#FF0000]/30"
        >
          <FaYoutube className="text-[#FF0000]" />
          YouTube
        </button>
        <button
          onClick={() => document.getElementById("software")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105 hover:border-blue-400/30"
        >
          <FaCode className="text-blue-400" />
          Software
        </button>
      </div>
    </section>
  );
}
