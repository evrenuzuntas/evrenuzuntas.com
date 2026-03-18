"use client";

import { useState, useCallback, useMemo, type ReactNode } from "react";
import { HeroSection, Footer } from "@/components/sections";
import { BentoBox, BentoCard, StackPopup } from "@/components/bento";
import { BENTO_ITEMS, BOTTOM_ITEMS, SOFTWARE_ITEMS, YOUTUBE_ITEMS, type BentoItemData } from "@/constants";
import { FaCode, FaYoutube, FaUser } from "react-icons/fa6";
import { ScrollToTop, ThemeToggle, LanguageToggle } from "@/components/ui";
import { useLanguage } from "@/components/providers";

const EMAIL = "evrenuzuntas@gmail.com";

const GRID_CLASS = "grid grid-flow-dense grid-cols-[200px_200px] tablet:grid-cols-[200px_200px_200px_200px] gap-4 justify-center desktop:auto-rows-[200px]";

function SectionDivider({ id, icon, label, href }: { id: string; icon: ReactNode; label: string; href?: string }) {
  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200">
      {icon}
      <span className="text-sm font-medium tracking-wider uppercase">{label}</span>
    </a>
  ) : (
    <>
      {icon}
      <span className="text-sm font-medium tracking-wider uppercase">{label}</span>
    </>
  );

  return (
    <div id={id} className="flex items-center gap-4 my-10 max-w-[832px] mx-auto scroll-mt-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
      {content}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
    </div>
  );
}

function BentoGrid({ items, renderItem }: { items: BentoItemData[]; renderItem?: (item: BentoItemData) => ReactNode }) {
  return (
    <div className={GRID_CLASS}>
      {items.map((item) =>
        renderItem ? (
          renderItem(item)
        ) : (
          <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link}>
            <BentoCard {...item} />
          </BentoBox>
        ),
      )}
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [stackPopup, setStackPopup] = useState<{ title?: string; items: BentoItemData[] } | null>(null);
  const { t, localize } = useLanguage();

  const softwareItems = useMemo(() => localize(SOFTWARE_ITEMS), [localize]);
  const bentoItems = useMemo(() => localize(BENTO_ITEMS), [localize]);
  const youtubeItems = useMemo(() => localize(YOUTUBE_ITEMS), [localize]);
  const bottomItems = useMemo(() => localize(BOTTOM_ITEMS), [localize]);

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

      <SectionDivider id="software" icon={<FaCode className="text-[#42A5F5] text-2xl" />} label={t.section.softwareDevelopment} />
      <BentoGrid
        items={softwareItems}
        renderItem={(item) =>
          item.stackItems?.length ? (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} onClick={() => setStackPopup({ title: item.label, items: item.stackItems! })}>
              <BentoCard {...item} />
            </BentoBox>
          ) : (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link}>
              <BentoCard {...item} />
            </BentoBox>
          )
        }
      />
      <StackPopup open={!!stackPopup} onClose={() => setStackPopup(null)} title={stackPopup?.title} items={stackPopup?.items ?? []} />

      <SectionDivider id="personal" icon={<FaUser className="text-[#AB47BC] text-2xl" />} label={t.section.personal} />
      <BentoGrid
        items={bentoItems}
        renderItem={(item) =>
          item.id === "contact" ? (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} onClick={copyEmail}>
              <BentoCard {...item} subLabel={copied ? t.copied : item.subLabel} />
            </BentoBox>
          ) : (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link}>
              <BentoCard {...item} />
            </BentoBox>
          )
        }
      />

      <SectionDivider id="youtube" icon={<FaYoutube className="text-[#FF0000] text-2xl" />} label={t.section.youtube} href="https://youtube.com/@evoloper0" />
      <BentoGrid
        items={youtubeItems}
        renderItem={(item) =>
          item.stackItems?.length ? (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} onClick={() => setStackPopup({ title: item.label, items: item.stackItems! })}>
              <BentoCard {...item} />
            </BentoBox>
          ) : (
            <BentoBox key={item.id} spanX={item.spanX} spanY={item.spanY} href={item.link}>
              <BentoCard {...item} />
            </BentoBox>
          )
        }
      />

      <div className="flex items-center gap-4 my-10 max-w-[832px] mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-foreground/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/20 to-foreground/20" />
      </div>
      <BentoGrid items={bottomItems} />

      <Footer />
      <ScrollToTop />
      <ThemeToggle />
      <LanguageToggle />
    </main>
  );
}
