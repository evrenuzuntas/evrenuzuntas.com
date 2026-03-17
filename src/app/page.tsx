"use client";

import { useState, useCallback } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BentoBox } from "@/components/BentoBox";
import { BentoCard } from "@/components/BentoCard";
import { BentoExpandModal } from "@/components/BentoExpandModal";
import { BENTO_ITEMS, BOTTOM_ITEMS, SOFTWARE_ITEMS, YOUTUBE_ITEMS, type BentoItemData } from "@/constants/bentoItems";
import { FaCode, FaYoutube, FaUser } from "react-icons/fa6";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

const EMAIL = "evrenuzuntas@gmail.com";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [expandedItem, setExpandedItem] = useState<BentoItemData | null>(null);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-10">
      <HeroSection />
      {/* Software Development */}
      <div id="software" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
        <FaCode className="text-[#42A5F5] text-2xl group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm font-medium tracking-wider uppercase">Software Development</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {SOFTWARE_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} onClick={!item.link ? () => setExpandedItem(item) : undefined}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>

      {/* Personal */}
      <div id="personal" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
        <FaUser className="text-[#AB47BC] text-2xl group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm font-medium tracking-wider uppercase">Personal</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
      </div>
      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {BENTO_ITEMS.map((item) =>
          item.id === "contact" ? (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} onClick={copyEmail}>
              <BentoCard {...item} sublabel={copied ? "Kopyalandı!" : item.sublabel} />
            </BentoBox>
          ) : (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} onClick={!item.link ? () => setExpandedItem(item) : undefined}>
              <BentoCard {...item} />
            </BentoBox>
          ),
        )}
      </div>

      {/* YouTube Items  */}
      <div id="youtube" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
        <a href="https://youtube.com/@evoloper0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-[#FF0000] transition-colors duration-300 group">
          <FaYoutube className="text-[#FF0000] text-2xl group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-medium tracking-wider uppercase">YouTube</span>
        </a>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {YOUTUBE_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} onClick={!item.link ? () => setExpandedItem(item) : undefined}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>

      {/* Bottom Part */}
      <div id="bottom_part" className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {BOTTOM_ITEMS.map((item) => (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link} onClick={!item.link ? () => setExpandedItem(item) : undefined}>
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
      <BentoExpandModal item={expandedItem} onClose={() => setExpandedItem(null)} />
    </main>
  );
}
