import { BentoBox } from "@/components/BentoBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 auto-rows-[120px] sm:auto-rows-[150px]">
          {/* 2x2 kutu */}
          <BentoBox spanX={2} spanY={2} />

          {/* 2x1 kutu */}
          <BentoBox spanX={2} spanY={1} />

          {/* 1x1 kutular */}
          <BentoBox spanX={1} spanY={1} />
          <BentoBox spanX={1} spanY={1} />

          {/* Farklı kombinasyonlar */}
          <BentoBox spanX={2} spanY={1} />
          <BentoBox spanX={2} spanY={2} />
        </div>
      </div>
    </main>
  );
}
