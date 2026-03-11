import type { ComponentType } from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaDiscord, FaTelegram, FaRedditAlien, FaTwitch, FaMedium, FaDev, FaStackOverflow, FaDribbble, FaBehance, FaPinterestP, FaSnapchat, FaWhatsapp, FaSpotify, FaSoundcloud, FaSteam, FaCodepen, FaFigma, FaMastodon, FaThreads, FaBluesky, FaPatreon, FaHashnode, FaDog } from "react-icons/fa6";
import { AlignLeft, Navigation, Mail } from "lucide-react";

type IconEntry = { icon: ComponentType<{ className?: string }>; color: string };

export const ICON_MAP: Record<string, IconEntry> = {
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
  dog: { icon: FaDog, color: "text-[#D2691E]" },
  text: { icon: AlignLeft, color: "text-white/60" },
  navigation: { icon: Navigation, color: "text-white/60" },
  mail: { icon: Mail, color: "text-white/60" },
};

export type BentoItemData = {
  id: string;
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  icon?: string;
  stat?: string;
  image?: string;
  label?: string;
  sublabel?: string;
  link?: string;
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
    icon: "text",
    label: "Senior Dev & Tech Creator",
    sublabel: "Based in Eskişehir. Open for new roles.",
  },
  {
    id: "location",
    icon: "navigation",
    stat: "TR",
    label: "Eskişehir, TR",
    sublabel: "Hava Durumu",
  },
  {
    id: "photo",
    image: "/photo.jpg",
    label: "Let's work together",
  },
  {
    id: "contact",
    icon: "mail",
    link: "mailto:evrenuzuntas@gmail.com",
    label: "evrenuzuntas",
    sublabel: "@gmail.com",
  },
  {
    id: "linkedin",
    icon: "linkedin",
    link: "https://linkedin.com/in/evrenuzuntas",
    label: "LinkedIn",
    stat: "500+",
  },
  {
    id: "github",
    icon: "github",
    link: "https://github.com/evoloper",
    label: "GitHub",
    stat: "20k",
  },
  {
    id: "joy",
    icon: "dog",
    image: "/joy.jpg",
    label: "Joy",
  },
];

export const YOUTUBE_ITEMS: BentoItemData[] = [
  {
    id: "youtube-1",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/77t-FTb8D9I-SD.jpg",
  },
  {
    id: "youtube-2",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/aaLbmi7sXmg-SD.jpg",
  },
  {
    id: "youtube-3",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/aEr9WDp5z5g-SD.jpg",
  },
  {
    id: "youtube-4",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/BdRjQGJgW38-SD.jpg",
    stat: "100+",
  },
  {
    id: "youtube-5",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/cZyu_4_wFO8-SD.jpg",
    stat: "100+",
  },
  {
    id: "youtube-6",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/iCaWleQqaX0-SD.jpg",
    stat: "100+",
  },
  {
    id: "youtube-7",
    spanX: 2,
    spanY: 1,
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/Mavl7QQgMu4-SD.jpg",
    stat: "100+",
  },
];
