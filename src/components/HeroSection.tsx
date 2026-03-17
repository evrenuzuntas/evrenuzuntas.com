"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { FaYoutube, FaCode, FaUser } from "react-icons/fa6";
import { Skeleton } from "@/components/ui/Skeleton";

const formatTimestamp = () => dayjs().format("ddd, MMM DD, hh:mm A").toUpperCase();

export function HeroSection() {
  const [timestamp, setTimestamp] = useState(formatTimestamp);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(formatTimestamp()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center">
      {/* Timestamp */}
      <p suppressHydrationWarning className="text-[10px] md:text-xs tracking-[0.25em] text-foreground/30 uppercase font-medium mb-6 md:mb-8 z-10">
        {timestamp}
      </p>

      {/* Profile photo */}
      <div className="relative z-10 mb-4">
        <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-2 border-foreground/10 shadow-[var(--avatar-glow)]">
          {!avatarLoaded && <Skeleton className="absolute inset-0 rounded-full" />}
          <Image
            src="/pp.jpeg"
            alt="Evren Uzuntaş"
            fill
            sizes="112px"
            quality={80}
            className={`object-cover transition-opacity duration-500 ${avatarLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setAvatarLoaded(true)}
            priority
          />
        </div>

        {/* Blue verification badge */}
        <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1D9BF0] ring-2 ring-ring-badge">
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
      </div>

      {/* Name */}
      <div className="w-full overflow-x-clip">
        <h1 className="relative text-[clamp(2.5rem,9vw,7rem)] font-extrabold text-center text-foreground/10 whitespace-nowrap -mt-6">
          Evren Uzuntaş
        </h1>
      </div>

      {/* Quick navigation buttons */}
      <div className="relative z-10 flex items-center gap-3 mt-8">
        <button
          onClick={() => document.getElementById("software")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/60 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-foreground/10 hover:text-foreground hover:scale-105 hover:border-blue-400/30"
        >
          <FaCode className="text-blue-400" />
          Software
        </button>
        <button
          onClick={() => document.getElementById("personal")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/60 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-foreground/10 hover:text-foreground hover:scale-105 hover:border-[#AB47BC]/30"
        >
          <FaUser className="text-[#AB47BC]" />
          Personal
        </button>
        <button
          onClick={() => document.getElementById("youtube")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/60 text-sm font-medium tracking-wide transition-all duration-200 hover:bg-foreground/10 hover:text-foreground hover:scale-105 hover:border-[#FF0000]/30"
        >
          <FaYoutube className="text-[#FF0000]" />
          YouTube
        </button>
      </div>
    </section>
  );
}
