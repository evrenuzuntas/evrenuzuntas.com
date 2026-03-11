import NextImage from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ICON_MAP, type BentoItemData } from "@/constants/bentoItems";

export function BentoCard({ icon, stat, image, label, sublabel, link }: BentoItemData) {
  const iconData = icon ? ICON_MAP[icon] : null;
  const IconComp = iconData?.icon;

  const topRight = stat ? (
    <span className="text-sm font-semibold text-white/60">{stat}</span>
  ) : link ? (
    <ArrowUpRight className="h-4 w-4 text-white/40" strokeWidth={2} />
  ) : null;

  const hasHeader = !!(IconComp || topRight);

  if (image) {
    return (
      <>
        <NextImage src={image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {hasHeader && (
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
            {IconComp ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/30 backdrop-blur-sm">
                <IconComp className={`h-4 w-4 ${iconData!.color}`} />
              </div>
            ) : (
              <div />
            )}
            {topRight}
          </div>
        )}

        {(label || sublabel) && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5 z-10">
            {label && <span className="text-sm font-semibold text-white">{label}</span>}
            {sublabel && <span className="text-xs text-white/60">{sublabel}</span>}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {hasHeader && (
        <header className="flex items-start justify-between shrink-0">
          {IconComp ? <IconComp className={`h-5 w-5 ${iconData!.color}`} /> : <div />}
          {topRight}
        </header>
      )}

      {(label || sublabel) && (
        <div className="flex-1 flex flex-col min-h-0 justify-end">
          <div className="flex flex-col gap-0.5">
            {label && <span className="text-sm font-medium text-white/90">{label}</span>}
            {sublabel && <span className="text-xs text-white/50">{sublabel}</span>}
          </div>
        </div>
      )}
    </>
  );
}
