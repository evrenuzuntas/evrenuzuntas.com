import NextImage from "next/image";
import type { BentoItemData } from "@/constants/bentoItems";

export function ImageCard({ image, icon, label, sublabel }: BentoItemData) {
  if (!image) return null;

  const hasOverlay = icon || label || sublabel;

  return (
    <>
      <NextImage src={image} alt="" fill className="object-cover" />

      {hasOverlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {icon && (
            <div className="absolute top-3 left-3 size-8 rounded-lg overflow-hidden">
              <NextImage src={icon} alt="" fill className="object-cover" />
            </div>
          )}

          {(label || sublabel) && (
            <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5">
              {label && (
                <span className="text-sm font-semibold text-white">{label}</span>
              )}
              {sublabel && (
                <span className="text-xs text-white/60">{sublabel}</span>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
