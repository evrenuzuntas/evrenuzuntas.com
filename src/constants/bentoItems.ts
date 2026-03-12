import type { ComponentType } from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaDiscord, FaTelegram, FaRedditAlien, FaTwitch, FaMedium, FaDev, FaStackOverflow, FaDribbble, FaBehance, FaPinterestP, FaSnapchat, FaWhatsapp, FaSpotify, FaSoundcloud, FaSteam, FaCodepen, FaFigma, FaMastodon, FaThreads, FaBluesky, FaPatreon, FaHashnode, FaDog } from "react-icons/fa6";
import { AlignLeft, Navigation, Mail, Globe, MessageCircle, Users, Clock, Eye } from "lucide-react";

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
  website: { icon: Globe, color: "text-white/60" },
  youtube_comment: { icon: MessageCircle, color: "text-[#FF0000]" },
  subscribers: { icon: Users, color: "text-[#FF0000]" },
  watch_time: { icon: Clock, color: "text-[#FF0000]" },
  views: { icon: Eye, color: "text-[#FF0000]" },
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
    id: "photo",
    image: "/photo.jpg",
    label: "Let's work together",
  },
  {
    id: "location",
    icon: "navigation",
    stat: "TR",
    label: "Eskişehir, TR",
    sublabel: "Hava Durumu",
  },
  {
    id: "contact",
    icon: "mail",
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
    icon: "instagram",
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
    icon: "x",
    link: "https://x.com/evoloper",
    label: "evoloper",
    sublabel: "X",
  },
  {
    id: "Medium",
    icon: "medium",
    link: "https://medium.com/@evoloper",
    label: "evoloper",
    sublabel: "Medium",
  },
  {
    id: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/905532028484",
    label: "Whatsapp",
  },
  {
    id: "Whatsapp",
    spanX: 2,
    icon: "text",
    label: "I’m a Senior Front-end/Fullstack developer with 5+ years of experience and the creator of the @evoloper YouTube channel. I build modern web applications using Next.js while sharing my passion for technology, cars, and gear through creative content. Beyond the screen, I’m an avid camper and a lifelong explorer of the latest gadgets.",
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

export const YOUTUBE_ITEMS: BentoItemData[] = [
  {
    id: "youtube-subs",
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "Subscribe",
    sublabel: "Go to my Youtube channel",
  },
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
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "Elinize emeğinize sağlık ancak bu kadar güzel anlatılırdı 👏🏻👏🏻",
    sublabel: "@Ozyeyo",
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
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "Yarın almayı planlıyorum, iyi ki izledim tüm soru işaretlerim gitti emeğinize sağlık❤",
    sublabel: "@SimülasyonGamer",
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
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "Size çok teşekkür ederim iki saat her yerden aradım nasıl kullanır diye siz karşıma çıktınız çok güzel anlattınız teşekkür ederim",
    sublabel: "@ElifKaban-d2x5e",
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
    id: "youtube-subs",
    icon: "subscribers",
    link: "https://youtube.com/@evoloper0",
    label: "Subscriber",
    stat: "1.5k+",
  },
  {
    id: "youtube-7",
    icon: "youtube",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper YouTube kanalıma git",
    image: "/youtube/Mavl7QQgMu4-SD.jpg",
    stat: "100+",
  },
  {
    id: "youtube-view",
    icon: "views",
    link: "https://youtube.com/@evoloper0",
    label: "Views",
    stat: "157.8K+",
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
    id: "youtube-hours",
    icon: "watch_time",
    link: "https://youtube.com/@evoloper0",
    label: "Watch time (hours)",
    stat: "4.7K+",
  },
  {
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "Üstad selamlar. Öncelikle video için teşekkürler. Çok açıklayıcı ve faydalı bir video olmuş eline sağlık. Ailemle birlikte kamp yapmaya başlayacağız...",
    sublabel: "@shnkamp",
  },
  {
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "@evoloper0 hay Allah razı olsun abicim ya çok teşekkür ederim ❤",
    sublabel: "@TrSavunma",
  },
  {
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "Abi Allah senden razı olsun kaç saattir uğraşıyorum çözemedim sen çıktın karşıma 10 dk da kurdum çok teşekkür ederim",
    sublabel: "@badenes5603",
  },
  {
    id: "youtube-comment",
    icon: "youtube_comment",
    link: "https://youtube.com/@evoloper0",
    label: "izlediğim en garip araba tanıtımı videosu. gülem mi izleyem mi karar veremedim xd ikna ettiniz beni chr ye",
    sublabel: "@kenybadi",
  },
];

export const SOFTWARE_ITEMS: BentoItemData[] = [
  {
    id: "bio",
    icon: "text",
    label: "Senior Dev & Tech Creator",
    sublabel: "Based in Eskişehir. Open for new roles.",
  },

  {
    id: "renew",
    spanX: 2,
    icon: "website",
    link: "https://renewturkiye.com/",
    label: "Renew Turkiye",
    image: "/software/screenshot-2026-03-12-07-52-47.png",
  },
  {
    id: "CV",
    link: "https://drive.google.com/file/d/1lTLtZNlVFvcKK9OJCpJWBf-QILdjb44e/view?usp=drive_link",
    label: "Check out my Resume",
  },

  {
    id: "maisPort",
    spanX: 2,
    icon: "website",
    label: "MAIS PORT - Enterprise Web Platform",
    image: "/software/maisPort.jpg",
  },
  {
    id: "ikam",
    spanX: 2,
    icon: "website",
    label: "IKAM - Replacement vehicle platform",
    image: "/software/ikam.jpg",
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
  },
];
