import { SOCIAL_ICONS, type BentoItemData } from "@/constants/bentoItems";

export function Social({ id, link, stat }: BentoItemData) {
  const social = SOCIAL_ICONS[id];
  if (!social) return null;
  const Icon = social.icon;

  const displayUrl = link?.replace(/^https?:\/\//, "");

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <Icon className={`h-5 w-5 ${social.color}`} />
        {stat && <span className="text-sm font-semibold text-white/60">{stat}</span>}
      </div>
      {displayUrl && <span className="text-sm text-white/40 truncate">{displayUrl}</span>}
    </div>
  );
}
