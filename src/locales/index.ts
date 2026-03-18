export type Locale = "tr" | "en";

export type Translations = {
  devNotice: {
    title: string;
    description: string;
    dismiss: string;
  };
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
  bentoOverrides: Record<string, { label?: string; subLabel?: string }>;
};

export { tr } from "./tr";
export { en } from "./en";

import { tr } from "./tr";
import { en } from "./en";

export const TRANSLATIONS: Record<Locale, Translations> = { tr, en };
