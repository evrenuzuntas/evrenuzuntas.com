"use client";

import { HeroSection } from "@/components/HeroSection";
import { BentoBox } from "@/components/BentoBox";
import { bentoItems } from "@/constants/bentoItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:py-12">
      <HeroSection />

      <div className="w-full max-w-[200px] md:max-w-[416px] lg:max-w-[848px] mx-auto">
        <div className="grid grid-cols-[200px] md:grid-cols-[200px_200px] lg:grid-cols-[200px_200px_200px_200px] gap-4 auto-rows-[200px] overflow-hidden">
          {bentoItems.map((item) => (
            <BentoBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
