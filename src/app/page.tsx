"use client";

import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:py-12">
      <HeroSection />
      <BentoGrid />
    </main>
  );
}
