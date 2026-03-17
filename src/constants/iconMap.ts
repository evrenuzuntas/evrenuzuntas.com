import type { ComponentType } from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaMedium, FaWhatsapp, FaDog, FaFileLines, FaBriefcase } from "react-icons/fa6";
import { AlignLeft, Navigation, Mail, Globe, MessageCircle, Users, Clock, Eye } from "lucide-react";

type IconEntry = { icon: ComponentType<{ className?: string }>; color: string };

export const ICON_MAP: Record<string, IconEntry> = {
  linkedin: { icon: FaLinkedinIn, color: "text-[#0A66C2]" },
  github: { icon: FaGithub, color: "text-foreground/80" },
  x: { icon: FaXTwitter, color: "text-foreground" },
  instagram: { icon: FaInstagram, color: "icon-instagram-gradient" },
  youtube: { icon: FaYoutube, color: "text-[#FF0000]" },
  tiktok: { icon: FaTiktok, color: "text-foreground" },
  medium: { icon: FaMedium, color: "text-foreground/80" },
  whatsapp: { icon: FaWhatsapp, color: "text-[#25D366]" },
  dog: { icon: FaDog, color: "text-[#D2691E]" },
  resume: { icon: FaFileLines, color: "text-foreground/80" },
  opentowork: { icon: FaBriefcase, color: "text-[#457032]" },
  text: { icon: AlignLeft, color: "text-foreground/60" },
  navigation: { icon: Navigation, color: "text-foreground/60" },
  mail: { icon: Mail, color: "text-foreground/60" },
  website: { icon: Globe, color: "text-foreground/60" },
  youtube_comment: { icon: MessageCircle, color: "text-[#FF0000]" },
  subscribers: { icon: Users, color: "text-[#FF0000]" },
  watch_time: { icon: Clock, color: "text-[#FF0000]" },
  views: { icon: Eye, color: "text-[#FF0000]" },
};
