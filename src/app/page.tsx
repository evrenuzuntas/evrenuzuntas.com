import { BentoBox } from "@/components/BentoBox";
import { bentoItems } from "@/constants/bentoItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 auto-rows-[120px] sm:auto-rows-[260px] overflow-hidden">
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
            />
          ))}
        </div>
      </div>
    </main>
  );
}
