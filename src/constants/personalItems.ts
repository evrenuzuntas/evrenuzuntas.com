import type { BentoItemData } from "./types";

export const BENTO_ITEMS: BentoItemData[] = [
  {
    id: "photo",
    image: "/photo.jpg",
    label: "Let's work together",
  },
  {
    id: "location",
    icon: "navigation",
    stat: "TR",
    label: "Eskişehir, TR",
    image: "/world.png",
  },
  {
    id: "contact",
    bigIcon: "mail",
    link: "mailto:evrenuzuntas@gmail.com",
    label: "evrenuzuntas",
    sublabel: "@gmail.com",
  },
  {
    id: "joy",
    icon: "dog",
    image: "/joy.jpg",
    label: "Joy",
    sublabel: "My Best Friend",
  },
  {
    id: "instagram",
    bigIcon: "instagram",
    link: "https://www.instagram.com/evoloper/",
    label: "evoloper",
    sublabel: "Instagram",
  },
  {
    id: "boat",
    spanX: 2,
    image: "/boat.jpg",
  },
  {
    id: "X",
    bigIcon: "x",
    link: "https://x.com/evoloper",
    label: "evoloper",
    sublabel: "X",
  },
  {
    id: "Medium",
    bigIcon: "medium",
    link: "https://medium.com/@evoloper",
    label: "Medium / evoloper",
    sublabel: "API kelimesi yazılım dünyasında neredeyse her yerde karşımıza çıkıyor. Ama ilginç olan şu: Herkes API diyor ama herkes aynı şeyi anlamıyor.",
  },
  {
    id: "Whatsapp",
    bigIcon: "whatsapp",
    link: "https://wa.me/905532028484",
    label: "Whatsapp",
  },
  {
    id: "bio-text",
    spanX: 2,
    icon: "text",
    label: "I'm a Senior Front-end/Fullstack developer with 5+ years of experience and the creator of the @evoloper YouTube channel. I build modern web applications using Next.js while sharing my passion for technology, cars, and gear through creative content. Beyond the screen, I'm an avid camper and a lifelong explorer of the latest gadgets.",
  },
  {
    id: "Camping",
    spanX: 2,
    spanY: 2,
    image: "/ilgaz_camp.JPG",
    label: "Ilgaz Camp",
  },
  {
    id: "Family",
    spanY: 2,
    image: "/famly.jpg",
    label: "My Fam",
  },
  {
    id: "GPTimage",
    image: "/gpt_image.PNG",
  },
];
