"use client";

import type { ReactNode } from "react";
import { User, Navigation, Mail, Code2, Cloud, Copy } from "lucide-react";
import { FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag";

export type BentoItem = {
  id: string;
  spanX?: 1 | 2 | 3 | 4;
  spanY?: 1 | 2 | 3 | 4;
  icon?: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  content?: ReactNode;
  contentAlign?: "start" | "center" | "end";
  image?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind"];

export const bentoItems: BentoItem[] = [
  {
    id: "bio",
    contentAlign: "end",
    topLeft: (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
        <User className="h-5 w-5" strokeWidth={1.5} />
      </div>
    ),
    topRight: (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Open for roles
      </span>
    ),
    content: <p className="text-sm font-medium">Senior Fullstack Developer. Tech vlogger at @evoloper. Based in Eskişehir. Crafting clean code and high-quality content.</p>,
  },
  {
    id: "location",
    icon: <Navigation />,
    topRight: <ReactCountryFlag countryCode="TR" svg style={{ width: "1.4em", height: "1.4em", borderRadius: "6px" }} aria-label="Türk Bayrağı" />,
    content: (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">Eskişehir, TR</span>
        <div className="flex items-center gap-1.5 text-white/50">
          <Cloud className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="text-xs">Hava Durumu</span>
        </div>
      </div>
    ),
  },
  {
    id: "youtube",
    spanX: 2,
    spanY: 2,
    href: "https://youtube.com/@evoloper0",
    topLeft: (
      <div className="flex h-9 w-9 items-center justify-center">
        <FaYoutube className="h-5 w-5 text-[#FF0000]" />
      </div>
    ),
    content: (
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">@evoloper YouTube kanalıma git</span>
        <span className="text-xs text-white/50">Abone sayısı —</span>
      </div>
    ),
  },
  {
    id: "photo",
    image: "/photo.jpg",
  },
  {
    id: "contact",
    icon: <Mail />,
    topRight: <Copy className="h-4 w-4 text-white/50" strokeWidth={2} />,
    href: "mailto:evrenuzuntas@gmail.com",
    content: (
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-white/80">evrenuzuntas</span>
        <span className="text-sm font-medium text-white/50">@gmail.com</span>
      </div>
    ),
  },
  {
    id: "tech-stack",
    spanX: 2,
    icon: <Code2 />,
    content: (
      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70">
            {tech}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/evrenuzuntas",
    contentAlign: "center",
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <FaLinkedinIn className="h-5 w-5 text-[#0A66C2]" />
        </div>
        <span className="text-xs font-medium text-white/70">LinkedIn</span>
      </div>
    ),
  },
  {
    id: "github",
    href: "https://github.com/evoloper",
    contentAlign: "center",
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <FaGithub className="h-5 w-5 text-white/80" />
        </div>
        <span className="text-xs font-medium text-white/70">GitHub</span>
      </div>
    ),
  },
];
