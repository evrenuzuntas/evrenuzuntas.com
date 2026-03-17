"use client";

import { useState } from "react";
import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ICON_MAP, type BentoItemData } from "@/constants";
import { Skeleton } from "@/components/ui/Skeleton";

export function BentoCard({ icon, bigIcon, stat, image, label, sublabel, link, expanded }: BentoItemData & { expanded?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const iconKey = bigIcon ?? icon;
  const iconData = iconKey ? ICON_MAP[iconKey] : null;
  const IconComp = iconData?.icon;
  const iconSize = bigIcon ? "h-10 w-10" : "h-5 w-5";
  const hasImage = !!image;

  return (
    <>
      {image && (
        <>
          {!loaded && <Skeleton className="absolute inset-0 rounded-[24px]" />}
          <NextImage src={image} alt={label || ""} fill sizes="(max-width: 768px) 50vw, 200px" quality={75} className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`} onLoad={() => setLoaded(true)} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </>
      )}

      {(IconComp || stat || link) && (
        <header className="relative z-10 flex items-start justify-between shrink-0 min-w-0">
          {IconComp ? <IconComp className={`${iconSize} shrink-0 ${iconData!.color}`} /> : <span />}
          {stat ? <span className={`text-sm font-semibold truncate ${hasImage ? "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]" : "text-shadow-card"}`}>{stat}</span> : link ? <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/40" strokeWidth={2} /> : null}
        </header>
      )}

      {(label || sublabel) && (
        <div className="relative z-10 flex-1 flex flex-col min-h-0 justify-end overflow-hidden text-left">
          <div className="flex flex-col gap-0.5 min-w-0">
            {label && <span className={`text-sm break-words ${expanded ? "" : "line-clamp-5"} ${hasImage ? "font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]" : "font-medium text-foreground/90 text-shadow-card"}`}>{label}</span>}
            {sublabel && <span className={`text-xs break-words ${expanded ? "" : "line-clamp-2"} ${hasImage ? "text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]" : "text-foreground/50 sub-shadow-card"}`}>{sublabel}</span>}
          </div>
        </div>
      )}
    </>
  );
}
