"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const AUTO_DISMISS_SECONDS = 15;

export function DevNoticeBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [remaining, setRemaining] = useState(AUTO_DISMISS_SECONDS);

  useEffect(() => {
    if (!visible) return;

    setRemaining(AUTO_DISMISS_SECONDS);
    const startedAt = Date.now();

    const interval = window.setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
      const next = Math.max(0, AUTO_DISMISS_SECONDS - elapsedSeconds);
      setRemaining(next);
      if (next === 0) setVisible(false);
    }, 250);

    return () => window.clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60] w-full border-b border-white/10 bg-gradient-to-r from-indigo-600/35 via-sky-600/25 to-fuchsia-600/30 backdrop-blur supports-[backdrop-filter]:bg-indigo-600/25">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-1.5 sm:flex-row sm:items-center">
        <p className="w-full text-sm font-medium leading-snug text-white/90">
          <span className="font-semibold">{t.devNotice.title}</span>
          <span className="text-white/70"> — {t.devNotice.description}</span>
        </p>

        <button
          type="button"
          onClick={() => {
            setVisible(false);
          }}
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-sm font-medium leading-none text-white/85 transition hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label={t.devNotice.dismiss}
        >
          <span>
            {t.devNotice.dismiss} ({remaining})
          </span>
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

