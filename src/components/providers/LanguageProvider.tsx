"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { TRANSLATIONS, type Locale, type Translations } from "@/locales";
import type { BentoItemData } from "@/constants";

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  localize: (items: BentoItemData[]) => BentoItemData[];
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "tr",
  t: TRANSLATIONS.tr,
  toggleLocale: () => {},
  localize: (items) => items,
});

const LOCALES: Locale[] = ["tr", "en"];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocale(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const idx = LOCALES.indexOf(prev);
      const next = LOCALES[(idx + 1) % LOCALES.length];
      localStorage.setItem("locale", next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = TRANSLATIONS[locale];

  const localize = useCallback(
    (items: BentoItemData[]): BentoItemData[] => {
      function mapItem(item: BentoItemData): BentoItemData {
        const override = t.bentoOverrides[item.id];
        const base = override
          ? {
              ...item,
              ...(override.label !== undefined && { label: override.label }),
              ...(override.sublabel !== undefined && { sublabel: override.sublabel }),
            }
          : item;
        if (base.stackItems?.length) {
          return { ...base, stackItems: base.stackItems.map(mapItem) };
        }
        return base;
      }
      return items.map(mapItem);
    },
    [t],
  );

  return <LanguageContext.Provider value={{ locale, t, toggleLocale, localize }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
