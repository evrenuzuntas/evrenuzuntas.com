"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { SOCIALS } from "@/constants/socials";

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
    <section className="relative flex flex-col items-center justify-center pt-16 pb-10 md:pt-24 md:pb-14 overflow-hidden">
      {/* Timestamp */}
      <p
        suppressHydrationWarning
        className="text-[10px] md:text-xs tracking-[0.25em] text-white/30 uppercase font-medium mb-14 md:mb-16 z-10"
      >
        {timestamp}
      </p>

      {/* Background large name */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
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
          <Image
            src="/photo.jpg"
            alt="Evren Uzuntaş"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blue verification badge */}
        <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1D9BF0] ring-2 ring-[#0a0a0a]">
          <svg
            className="h-3 w-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
      </div>

      {/* Social media bar */}
      <div className="relative z-10 flex items-center gap-2.5">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105"
          >
            <span className="text-[17px]">{SOCIAL_ICONS[s.id]}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
