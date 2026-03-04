"use client";

import { BentoBox } from "@/components/BentoBox";
import { bentoItems } from "@/constants/bentoItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-10 md:py-12">
      {/* Kapsayıcı: Mobile 200px, Tablet 416px (200×2+16), Desktop 848px (200×4+16×3) */}
      <div className="w-full max-w-[200px] md:max-w-[416px] lg:max-w-[848px] mx-auto">
        <div className="grid grid-cols-[200px] md:grid-cols-[200px_200px] lg:grid-cols-[200px_200px_200px_200px] gap-4 auto-rows-[200px] overflow-hidden">
          {bentoItems.map((item) => (
            <BentoBox
              key={item.id}
              spanX={item.spanX}
              spanY={item.spanY}
              topLeft={item.topLeft}
              topRight={item.topRight}
              content={item.content}
              contentAlign={item.contentAlign}
              className={item.className}
              href={item.href}
              onClick={item.onClick}
              disabled={item.disabled}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
