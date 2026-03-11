"use client";

import { BentoBox } from "./BentoBox";
import { BENTO_ITEMS, TECH_STACK, SOCIAL_ICONS, type BentoItemData } from "@/constants/bentoItems";
import { User, Navigation, Mail, Code2, Cloud, Copy } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";

function renderItem(item: BentoItemData) {
  switch (item.type ?? item.id) {
    case "bio":
      return (
        <BentoBox
          key={item.id}
          contentAlign="end"
          topLeft={
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
              <User className="h-5 w-5" strokeWidth={1.5} />
            </div>
          }
          topRight={
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {item.badge}
            </span>
          }
          content={<p className="text-sm font-medium">{item.description}</p>}
        />
      );

    case "location":
      return (
        <BentoBox
          key={item.id}
          icon={<Navigation />}
          topRight={<ReactCountryFlag countryCode={item.countryCode!} svg style={{ width: "1.4em", height: "1.4em", borderRadius: "6px" }} aria-label="Türk Bayrağı" />}
          content={
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">
                {item.city}, {item.countryCode}
              </span>
              <div className="flex items-center gap-1.5 text-white/50">
                <Cloud className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span className="text-xs">Hava Durumu</span>
              </div>
            </div>
          }
        />
      );

    case "youtube":
      return (
        <BentoBox
          key={item.id}
          spanX={item.spanX}
          spanY={item.spanY}
          href={item.href}
          topLeft={
            <div className="flex h-9 w-9 items-center justify-center">
              <FaYoutube className="h-5 w-5 text-[#FF0000]" />
            </div>
          }
          content={
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs text-white/50">{item.sublabel}</span>
            </div>
          }
        />
      );

    case "photo":
      return <BentoBox key={item.id} image={item.image} />;

    case "contact":
      return (
        <BentoBox
          key={item.id}
          icon={<Mail />}
          topRight={<Copy className="h-4 w-4 text-white/50" strokeWidth={2} />}
          onClick={() => navigator.clipboard.writeText(item.email!)}
          content={
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-white/80">{item.email!.split("@")[0]}</span>
              <span className="text-sm font-medium text-white/50">@{item.email!.split("@")[1]}</span>
            </div>
          }
        />
      );

    case "tech-stack":
      return (
        <BentoBox
          key={item.id}
          spanX={item.spanX}
          icon={<Code2 />}
          content={
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          }
        />
      );

    case "social": {
      const social = SOCIAL_ICONS[item.id];
      if (!social) return null;
      const Icon = social.icon;
      return (
        <BentoBox
          key={item.id}
          href={item.href}
          contentAlign="center"
          content={
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Icon className={`h-5 w-5 ${social.color}`} />
              </div>
              <span className="text-xs font-medium text-white/70">{item.label}</span>
            </div>
          }
        />
      );
    }

    default:
      return null;
  }
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(0,200px))] tablet:grid-cols-[repeat(4,minmax(0,200px))] gap-4 justify-center desktop:auto-rows-[200px]">
      {BENTO_ITEMS.map(renderItem)}
    </div>
  );
}
