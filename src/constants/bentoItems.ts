export const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind"];

export type BentoItemData = {
  id: string;
  spanX?: 1 | 2 | 3 | 4;
  spanY?: 1 | 2 | 3 | 4;
  image?: string;
  href?: string;
  label?: string;
  sublabel?: string;
  description?: string;
  badge?: string;
  city?: string;
  countryCode?: string;
  email?: string;
};

export const BENTO_ITEMS: BentoItemData[] = [
  {
    id: "bio",
    description:
      "Senior Fullstack Developer. Tech vlogger at @evoloper. Based in Eskişehir. Crafting clean code and high-quality content.",
    badge: "Open for roles",
  },
  {
    id: "location",
    city: "Eskişehir",
    countryCode: "TR",
  },
  {
    id: "youtube",
    spanX: 2,
    spanY: 2,
    href: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    sublabel: "Abone sayısı —",
  },
  {
    id: "photo",
    image: "/photo.jpg",
  },
  {
    id: "contact",
    email: "evrenuzuntas@gmail.com",
  },
  {
    id: "tech-stack",
    spanX: 2,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/evrenuzuntas",
    label: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/evoloper",
    label: "GitHub",
  },
];
