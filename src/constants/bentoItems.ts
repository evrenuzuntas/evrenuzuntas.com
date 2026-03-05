export const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind"];

export type BentoItemData = {
  id: string;
  spanX?: 1 | 2 | 3 | 4;
  spanY?: 1 | 2 | 3 | 4;
  contentAlign?: "start" | "center" | "end";
  icon?: string;
  image?: string;
  title?: string;
  subtitle?: string;
  tags?: string[];
  href?: string;
  email?: string;
  badge?: string;
  countryCode?: string;
};

export const BENTO_ITEMS: BentoItemData[] = [
  {
    id: "bio",
    icon: "user",
    badge: "Open for roles",
    title:
      "Senior Fullstack Developer. Tech vlogger at @evoloper. Based in Eskişehir. Crafting clean code and high-quality content.",
  },
  {
    id: "location",
    icon: "navigation",
    countryCode: "TR",
    title: "Eskişehir, TR",
    subtitle: "Hava Durumu",
  },
  {
    id: "youtube",
    spanX: 2,
    spanY: 2,
    icon: "youtube",
    href: "https://youtube.com/@evoloper0",
    title: "@evoloper YouTube kanalıma git",
    subtitle: "Abone sayısı —",
  },
  {
    id: "photo",
    image: "/photo.jpg",
  },
  {
    id: "contact",
    icon: "mail",
    email: "evrenuzuntas@gmail.com",
  },
  {
    id: "tech-stack",
    spanX: 2,
    icon: "code2",
    tags: TECH_STACK,
  },
  {
    id: "linkedin",
    icon: "linkedin",
    href: "https://linkedin.com/in/evrenuzuntas",
    title: "LinkedIn",
    contentAlign: "center",
  },
  {
    id: "github",
    icon: "github",
    href: "https://github.com/evoloper",
    title: "GitHub",
    contentAlign: "center",
  },
];
