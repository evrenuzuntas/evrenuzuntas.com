import { FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import { HEADER_SOCIALS } from "@/constants/bentoItems";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  x: <FaXTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  tiktok: <FaTiktok />,
  youtube: <FaYoutube />,
};

export function Footer() {
  return (
    <footer className="relative mt-20 pb-10">
      {/* Top divider */}
      <div className="max-w-[832px] mx-auto mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="flex flex-col items-center gap-5">
        {/* Social icons */}
        <div className="flex items-center gap-2.5">
          {HEADER_SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-105"
            >
              <span className="text-[14px]">{SOCIAL_ICONS[s.id]}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-[0.2em] text-white/20 uppercase font-medium">
          © {new Date().getFullYear()} Evren Uzuntaş
        </p>
      </div>
    </footer>
  );
}
