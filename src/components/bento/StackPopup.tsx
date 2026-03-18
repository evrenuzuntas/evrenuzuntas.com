"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { BentoBox, BentoCard } from "@/components/bento";
import type { BentoItemData } from "@/constants";

/* Ana sayfayla aynı: birim tam 200px, aralık 16px, iki birim = 416px */
const POPUP_GRID = "grid grid-flow-dense grid-cols-[200px_200px] gap-4 auto-rows-[200px]";

type StackPopupProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  items: BentoItemData[];
};

export function StackPopup({ open, onClose, title, items }: StackPopupProps) {
  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Stack"}
    >
      <div
        className="relative w-full max-w-[min(464px,100%)] max-h-[85vh] overflow-auto scrollbar-hide rounded-[24px] border border-foreground/10 bg-background p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 mb-4">
          {title && <h3 className="text-lg font-semibold text-foreground truncate">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto shrink-0 rounded-full p-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className={POPUP_GRID}>
          {items.map((item) => (
            <BentoBox
              key={item.id}
              spanX={item.spanX ?? 1}
              spanY={item.spanY ?? 1}
              href={item.link}
            >
              <BentoCard {...item} />
            </BentoBox>
          ))}
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
