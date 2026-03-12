"use client";

import { HeroSection } from "@/components/HeroSection";
import { BentoBox } from "@/components/BentoBox";
import { BentoCard } from "@/components/BentoCard";
import { BENTO_ITEMS, SOFTWARE_ITEMS, YOUTUBE_ITEMS } from "@/constants/bentoItems";
import { FaCode, FaYoutube } from "react-icons/fa6";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10">
      <HeroSection />
      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {BENTO_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} variant={item.image ? "image" : "default"}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>

      {/* YouTube Items  */}
      <div id="youtube" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />
        <a href="https://youtube.com/@evoloper0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-[#FF0000] transition-colors duration-300 group">
          <FaYoutube className="text-[#FF0000] text-2xl group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-medium tracking-wider uppercase">YouTube</span>
        </a>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {YOUTUBE_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} variant={item.image ? "image" : "default"}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>

      {/* Software Development */}
      <div id="software" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />
        <FaCode className="text-[#42A5F5] text-2xl group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm font-medium tracking-wider uppercase">Software Development</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {SOFTWARE_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} variant={item.image ? "image" : "default"}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>
      <ScrollToTop />
    </main>
  );
}
