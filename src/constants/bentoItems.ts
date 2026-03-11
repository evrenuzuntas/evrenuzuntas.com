import type { IconType } from "react-icons";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaDiscord, FaTelegram, FaRedditAlien, FaTwitch, FaMedium, FaDev, FaStackOverflow, FaDribbble, FaBehance, FaPinterestP, FaSnapchat, FaWhatsapp, FaSpotify, FaSoundcloud, FaSteam, FaCodepen, FaFigma, FaMastodon, FaThreads, FaBluesky, FaPatreon, FaHashnode } from "react-icons/fa6";

export const SOCIAL_ICONS: Record<string, { icon: IconType; color: string }> = {
  linkedin: { icon: FaLinkedinIn, color: "text-[#0A66C2]" },
  github: { icon: FaGithub, color: "text-white/80" },
  x: { icon: FaXTwitter, color: "text-white" },
  twitter: { icon: FaXTwitter, color: "text-white" },
  instagram: { icon: FaInstagram, color: "text-[#E4405F]" },
  facebook: { icon: FaFacebookF, color: "text-[#1877F2]" },
  youtube: { icon: FaYoutube, color: "text-[#FF0000]" },
  tiktok: { icon: FaTiktok, color: "text-white" },
  discord: { icon: FaDiscord, color: "text-[#5865F2]" },
  telegram: { icon: FaTelegram, color: "text-[#26A5E4]" },
  reddit: { icon: FaRedditAlien, color: "text-[#FF4500]" },
  twitch: { icon: FaTwitch, color: "text-[#9146FF]" },
  medium: { icon: FaMedium, color: "text-white/80" },
  devto: { icon: FaDev, color: "text-white/80" },
  stackoverflow: { icon: FaStackOverflow, color: "text-[#F58025]" },
  dribbble: { icon: FaDribbble, color: "text-[#EA4C89]" },
  behance: { icon: FaBehance, color: "text-[#1769FF]" },
  pinterest: { icon: FaPinterestP, color: "text-[#BD081C]" },
  snapchat: { icon: FaSnapchat, color: "text-[#FFFC00]" },
  whatsapp: { icon: FaWhatsapp, color: "text-[#25D366]" },
  spotify: { icon: FaSpotify, color: "text-[#1DB954]" },
  soundcloud: { icon: FaSoundcloud, color: "text-[#FF5500]" },
  steam: { icon: FaSteam, color: "text-white/80" },
  codepen: { icon: FaCodepen, color: "text-white/80" },
  figma: { icon: FaFigma, color: "text-[#F24E1E]" },
  mastodon: { icon: FaMastodon, color: "text-[#6364FF]" },
  threads: { icon: FaThreads, color: "text-white" },
  bluesky: { icon: FaBluesky, color: "text-[#0085FF]" },
  patreon: { icon: FaPatreon, color: "text-[#FF424D]" },
  hashnode: { icon: FaHashnode, color: "text-[#2962FF]" },
};

export type BentoItemData = {
  id: string;
  type: string;
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  image?: string;
  icon?: string;
  link?: string;
  label?: string;
  sublabel?: string;
  description?: string;
  badge?: string;
  city?: string;
  countryCode?: string;
  email?: string;
  stat?: string;
};

export const HEADER_SOCIALS = [
  { id: "x", href: "https://x.com/evrenuzuntas", label: "X" },
  { id: "instagram", href: "https://instagram.com/evrenuzuntas", label: "Instagram" },
  { id: "linkedin", href: "https://linkedin.com/in/evrenuzuntas", label: "LinkedIn" },
  { id: "tiktok", href: "https://tiktok.com/@evrenuzuntas", label: "TikTok" },
  { id: "youtube", href: "https://youtube.com/@evoloper0", label: "YouTube" },
];

export const BENTO_ITEMS: BentoItemData[] = [
  {
    id: "bio",
    type: "text",
    description: "Senior Dev & Tech Creator. Based in Eskişehir. Open for new roles.",
  },
  {
    id: "location",
    type: "location",
    city: "Eskişehir",
    countryCode: "TR",
  },
  {
    id: "youtube",
    type: "video",
    spanX: 2,
    spanY: 2,
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    sublabel: "Abone sayısı —",
  },
  {
    id: "photo",
    type: "image",
    label: "Let's work together",
    image: "/photo.jpg",
  },
  {
    id: "contact",
    type: "email",
    email: "evrenuzuntas@gmail.com",
  },
  {
    id: "linkedin",
    type: "social",
    link: "https://linkedin.com/in/evrenuzuntas",
    label: "LinkedIn",
    stat: "500+",
  },
  {
    id: "github",
    type: "social",
    link: "https://github.com/evoloper",
    label: "GitHub",
    stat: "20",
  },
];
