export type Locale = "tr" | "en";

export type Translations = {
  nav: {
    software: string;
    personal: string;
    youtube: string;
  };
  section: {
    softwareDevelopment: string;
    personal: string;
    youtube: string;
  };
  copied: string;
  bentoOverrides: Record<string, { label?: string; sublabel?: string }>;
};

export { tr } from "./tr";
export { en } from "./en";

import { tr } from "./tr";
import { en } from "./en";

export const TRANSLATIONS: Record<Locale, Translations> = { tr, en };
