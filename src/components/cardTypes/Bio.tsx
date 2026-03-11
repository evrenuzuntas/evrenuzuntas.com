import { User } from "lucide-react";
import type { BentoItemData } from "@/constants/bentoItems";

export function Bio({ description, badge }: BentoItemData) {
  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
          <User className="h-5 w-5" strokeWidth={1.5} />
        </div>
        {badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {badge}
          </span>
        )}
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </>
  );
}
