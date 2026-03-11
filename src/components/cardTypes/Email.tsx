import { Mail, Copy } from "lucide-react";
import type { BentoItemData } from "@/constants/bentoItems";

export function Email({ email }: BentoItemData) {
  if (!email) return null;

  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <span className="h-4 w-4 text-white/60 [&>svg]:h-full [&>svg]:w-full">
          <Mail />
        </span>
        <Copy className="h-4 w-4 text-white/50" strokeWidth={2} />
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-white/80">{email.split("@")[0]}</span>
          <span className="text-sm font-medium text-white/50">@{email.split("@")[1]}</span>
        </div>
      </div>
    </>
  );
}
