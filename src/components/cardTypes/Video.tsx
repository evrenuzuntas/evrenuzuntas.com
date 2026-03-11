import { FaYoutube } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import type { BentoItemData } from "@/constants/bentoItems";

export function Video({ label, sublabel, link }: BentoItemData) {
  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <div className="flex h-9 w-9 items-center justify-center">
          <FaYoutube className="h-5 w-5 text-[#FF0000]" />
        </div>
        {link && <ArrowUpRight className="h-4 w-4 text-white/50" strokeWidth={2} />}
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-xs text-white/50">{sublabel}</span>
        </div>
      </div>
    </>
  );
}
