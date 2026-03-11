import { SOCIAL_ICONS, type BentoItemData } from "@/constants/bentoItems";

export function Social({ id, label }: BentoItemData) {
  const social = SOCIAL_ICONS[id];
  if (!social) return null;
  const Icon = social.icon;

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon className={`h-5 w-5 ${social.color}`} />
        </div>
        <span className="text-xs font-medium text-white/70">{label}</span>
      </div>
    </div>
  );
}
