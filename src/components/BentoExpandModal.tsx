"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import type { BentoItemData } from "@/constants/bentoItems";
import { BentoCard } from "./BentoCard";

type Props = {
  item: BentoItemData | null;
  onClose: () => void;
};

export function BentoExpandModal({ item, onClose }: Props) {
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    if (!item) return;
    setClosing(false);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, handleClose]);

  if (!item || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${closing ? "bento-backdrop-exit" : "bento-backdrop-enter"}`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className={[
          "relative overflow-hidden rounded-[24px] border-t border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.25)]",
          "flex flex-col bg-card-from p-4 gap-3 text-foreground/90",
          "w-full max-w-[416px] min-h-[200px] max-h-[75vh] overflow-y-auto",
          closing ? "bento-modal-exit" : "bento-modal-enter",
        ].join(" ")}
      >
        <BentoCard {...item} expanded />
      </div>
    </div>,
    document.body,
  );
}
