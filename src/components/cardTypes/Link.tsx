import { Code2 } from "lucide-react";
import { type BentoItemData } from "@/constants/bentoItems";

export function Link(_props: BentoItemData) {
  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <span className="h-4 w-4 text-white/60 [&>svg]:h-full [&>svg]:w-full">
          <Code2 />
        </span>
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <div className="flex flex-wrap gap-2"></div>
      </div>
    </>
  );
}
