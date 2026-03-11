"use client";

import { HeroSection } from "@/components/HeroSection";
import { BentoBox } from "@/components/BentoBox";
import { BentoCard } from "@/components/BentoCard";
import { BENTO_ITEMS, YOUTUBE_ITEMS } from "@/constants/bentoItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:py-12">
      <HeroSection />

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {BENTO_ITEMS.map((item) => (
          <BentoBox
            key={item.id}
            spanX={item.spanX}
            spanY={item.spanY}
            href={item.link}
            variant={item.image ? "image" : "default"}
          >
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>

      {/* Buraya istediğin içeriği ekleyebilirsin */}

      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px] mt-4">
        {YOUTUBE_ITEMS.map((item) => (
          <BentoBox
            key={item.id}
            spanX={item.spanX}
            spanY={item.spanY}
            href={item.link}
            variant={item.image ? "image" : "default"}
          >
            <BentoCard {...item} />
          </BentoBox>
        ))}
      </div>
    </main>
  );
}
