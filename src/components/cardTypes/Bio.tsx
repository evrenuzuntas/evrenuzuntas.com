import { User } from "lucide-react";
import type { BentoItemData } from "@/constants/bentoItems";

export function Bio({ description, badge }: BentoItemData) {
  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <User className="h-5 w-5" strokeWidth={1.5} />
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </>
  );
}
