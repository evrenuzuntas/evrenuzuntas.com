"use client";

import type { ComponentType } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BentoBox } from "@/components/BentoBox";
import { BENTO_ITEMS, type BentoItemData } from "@/constants/bentoItems";

import { Text } from "@/components/cardTypes/Text";
import { Location } from "@/components/cardTypes/Location";
import { Email } from "@/components/cardTypes/Email";
import { Link } from "@/components/cardTypes/Link";
import { Social } from "@/components/cardTypes/Social";
import { Video } from "@/components/cardTypes/Video";
import { ImageCard } from "@/components/cardTypes/Image";

const CARD_COMPONENTS: Record<string, ComponentType<BentoItemData>> = {
  text: Text,
  location: Location,
  video: Video,
  image: ImageCard,
  email: Email,
  link: Link,
  social: Social,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:py-12">
      <HeroSection />
      <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
        {BENTO_ITEMS.map((item) => {
          const CardContent = CARD_COMPONENTS[item.type];
          if (!CardContent) return null;
          return (
            <BentoBox
              key={item.id}
              spanX={item.spanX}
              spanY={item.spanY}
              href={item.link}
              onClick={item.email ? () => navigator.clipboard.writeText(item.email!) : undefined}
              variant={item.image ? "image" : "default"}
            >
              <CardContent {...item} />
            </BentoBox>
          );
        })}
      </div>
    </main>
  );
}
