"use client";

import { useState } from "react";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ICON_MAP, type BentoItemData } from "@/constants/bentoItems";
import { Skeleton } from "@/components/ui/Skeleton";

export function BentoCard({ icon, stat, image, label, sublabel, link }: BentoItemData) {
  const [loaded, setLoaded] = useState(false);
  const iconData = icon ? ICON_MAP[icon] : null;
  const IconComp = iconData?.icon;
  const img = !!image;

  const iconShadow = img
    ? "[filter:drop-shadow(0_0_3px_rgba(0,0,0,1))_drop-shadow(0_0_10px_rgba(0,0,0,1))_drop-shadow(0_0_24px_rgba(0,0,0,0.8))_drop-shadow(0_0_48px_rgba(0,0,0,0.5))]"
    : "drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] drop-shadow-[0_0_24px_rgba(255,255,255,0.08)]";

  const textShadow = img
    ? "[text-shadow:0_0_6px_rgba(0,0,0,1),0_0_16px_rgba(0,0,0,0.9),0_0_36px_rgba(0,0,0,0.7),0_0_60px_rgba(0,0,0,0.4)]"
    : "[text-shadow:0_0_8px_rgba(255,255,255,0.15),0_0_20px_rgba(255,255,255,0.08),0_0_40px_rgba(255,255,255,0.04)]";

  const subShadow = img
    ? "[text-shadow:0_0_6px_rgba(0,0,0,1),0_0_14px_rgba(0,0,0,0.8),0_0_32px_rgba(0,0,0,0.5)]"
    : "[text-shadow:0_0_8px_rgba(255,255,255,0.12),0_0_20px_rgba(255,255,255,0.06)]";

  return (
    <>
      {image && (
        <>
          {!loaded && <Skeleton className="absolute inset-0 rounded-3xl" />}
          <NextImage
            src={image}
            alt={label || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </>
      )}

      {(IconComp || stat || link) && (
        <header className="relative z-10 flex items-start justify-between shrink-0 min-w-0">
          {IconComp ? <IconComp className={`h-5 w-5 shrink-0 ${iconData!.color} ${iconShadow}`} /> : <span />}
          {stat ? <span className={`text-sm font-semibold truncate ${textShadow}`}>{stat}</span> : link ? <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40" strokeWidth={2} /> : null}
        </header>
      )}

      {(label || sublabel) && (
        <div className="relative z-10 flex-1 flex flex-col min-h-0 justify-end overflow-hidden">
          <div className="flex flex-col gap-0.5 min-w-0">
            {label && (
              <span className={`text-sm break-words line-clamp-5 ${img ? "font-semibold text-white" : "font-medium text-white/90"} ${textShadow}`}>
                {label}
              </span>
            )}
            {sublabel && (
              <span className={`text-xs break-words line-clamp-2 ${img ? "text-white/80" : "text-white/50"} ${subShadow}`}>
                {sublabel}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
