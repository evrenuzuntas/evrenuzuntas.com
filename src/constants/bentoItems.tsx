import type { ReactNode } from "react";
import { User, MapPin, Mail, Code2, ArrowUpRight, Linkedin, Github, Cloud } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export type BentoItem = {
  id: string;
  spanX: 1 | 2 | 3 | 4;
  spanY: 1 | 2 | 3 | 4;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  content?: ReactNode;
  /** İçeriğin dikey hizalaması: start (üst), center, end (alt) */
  contentAlign?: "start" | "center" | "end";
  className?: string;
};

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind"];

export const bentoItems: BentoItem[] = [
  {
    id: "bio",
    spanX: 2,
    spanY: 2,
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
    content: <p className="text-lg font-semibold leading-snug tracking-tight text-white/95 sm:text-xl">Senior Fullstack Developer. Tech vlogger at @evoloper. Based in Eskişehir. Crafting clean code and high-quality content.</p>,
  },
  {
    id: "youtube",
    spanX: 2,
    spanY: 1,
    topLeft: (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70">
        <YoutubeIcon className="h-4 w-4" />
      </div>
    ),
    topRight: <ArrowUpRight className="h-4 w-4 text-white/50" strokeWidth={2} aria-hidden />,
    content: (
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-white/90">@evoloper YouTube kanalıma git</span>
        <span className="text-xs text-white/50">Abone sayısı —</span>
      </div>
    ),
  },
  {
    id: "location",
    spanX: 1,
    spanY: 1,
    contentAlign: "center",
    topLeft: <MapPin className="h-4 w-4 text-white/60" strokeWidth={1.5} aria-hidden />,
    content: (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-white/90">Eskişehir, TR</span>
        <div className="flex items-center gap-1.5 text-white/50">
          <Cloud className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span className="text-xs">Hava Durumu</span>
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    spanX: 1,
    spanY: 1,
    contentAlign: "center",
    topLeft: <Mail className="h-4 w-4 text-white/60" strokeWidth={1.5} aria-hidden />,
    content: (
      <a href="mailto:hello@example.com" className="text-sm font-medium text-white/80 underline decoration-white/20 underline-offset-2 transition hover:text-white hover:decoration-white/40">
        E-posta gönder
      </a>
    ),
  },
  {
    id: "tech-stack",
    spanX: 2,
    spanY: 1,
    topLeft: <Code2 className="h-4 w-4 text-white/60" strokeWidth={1.5} aria-hidden />,
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
    id: "social",
    spanX: 1,
    spanY: 1,
    contentAlign: "center",
    content: (
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-white/20 hover:text-white/90" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-white/20 hover:text-white/90" aria-label="GitHub">
          <Github className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    ),
  },
];
