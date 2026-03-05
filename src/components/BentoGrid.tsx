"use client";

import type { ComponentType } from "react";
import { BentoBox } from "./BentoBox";
import { BENTO_ITEMS, type BentoItemData } from "@/constants/bentoItems";
import { User, Navigation, Mail, Code2, Copy } from "lucide-react";
import { FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";

type IconDef = {
  component: ComponentType<{ className?: string }>;
  className?: string;
};

const ICON_MAP: Record<string, IconDef> = {
  user: { component: User },
  navigation: { component: Navigation },
  mail: { component: Mail },
  code2: { component: Code2 },
  youtube: { component: FaYoutube, className: "text-[#FF0000]" },
  linkedin: { component: FaLinkedinIn, className: "text-[#0A66C2]" },
  github: { component: FaGithub, className: "text-white/80" },
};

function renderItem(item: BentoItemData) {
  if (item.image) {
    return (
      <BentoBox
        key={item.id}
        image={item.image}
        spanX={item.spanX}
        spanY={item.spanY}
      />
    );
  }

  const iconDef = item.icon ? ICON_MAP[item.icon] : null;
  const isCentered = item.contentAlign === "center";

  /* ---- top-right ---- */
  let topRight;
  if (item.badge) {
    topRight = (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {item.badge}
      </span>
    );
  } else if (item.countryCode) {
    topRight = (
      <ReactCountryFlag
        countryCode={item.countryCode}
        svg
        style={{ width: "1.4em", height: "1.4em", borderRadius: "6px" }}
      />
    );
  } else if (item.email) {
    topRight = <Copy className="h-4 w-4 text-white/50" strokeWidth={2} />;
  }

  /* ---- icon (non-centered only) ---- */
  let iconNode;
  if (iconDef && !isCentered) {
    const Icon = iconDef.component;
    iconNode = <Icon className={iconDef.className} />;
  }

  /* ---- content ---- */
  let content;
  if (isCentered && iconDef) {
    const Icon = iconDef.component;
    content = (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon className={`h-5 w-5 ${iconDef.className ?? ""}`} />
        </div>
        {item.title && (
          <span className="text-xs font-medium text-white/70">
            {item.title}
          </span>
        )}
      </div>
    );
  } else if (item.tags) {
    content = (
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  } else if (item.email) {
    const [user, domain] = item.email.split("@");
    content = (
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-white/80">{user}</span>
        <span className="text-sm font-medium text-white/50">@{domain}</span>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col gap-0.5">
        {item.title && (
          <span className="text-sm font-medium">{item.title}</span>
        )}
        {item.subtitle && (
          <span className="text-xs text-white/50">{item.subtitle}</span>
        )}
      </div>
    );
  }

  return (
    <BentoBox
      key={item.id}
      spanX={item.spanX}
      spanY={item.spanY}
      href={item.email ? undefined : item.href}
      onClick={
        item.email
          ? () => navigator.clipboard.writeText(item.email!)
          : undefined
      }
      contentAlign={item.contentAlign}
      icon={iconNode}
      topRight={topRight}
      content={content}
    />
  );
}

export function BentoGrid() {
  return (
    <div className="w-full max-w-[200px] md:max-w-[416px] lg:max-w-[848px] mx-auto">
      <div className="grid grid-cols-[200px] md:grid-cols-[200px_200px] lg:grid-cols-[200px_200px_200px_200px] gap-4 auto-rows-[200px] overflow-hidden">
        {BENTO_ITEMS.map(renderItem)}
      </div>
    </div>
  );
}
