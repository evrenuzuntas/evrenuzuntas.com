import type { ReactNode, ElementType } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type BentoBoxProps = {
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  icon?: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  content?: ReactNode;
  contentAlign?: "start" | "center" | "end";
  image?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const colSpan: Record<number, string> = { 1: "col-span-1", 2: "col-span-2" };
const rowSpan: Record<number, string> = { 1: "row-span-1", 2: "row-span-2" };
const justify: Record<string, string> = { start: "justify-start", center: "justify-center", end: "justify-end" };

const aspectRatio: Record<string, string> = {
  "1-1": "aspect-square",
  "2-2": "aspect-square",
  "2-1": "aspect-[2/1]",
  "1-2": "aspect-[1/2]",
};

export function BentoBox({ spanX = 1, spanY = 1, icon, topLeft, topRight, content, contentAlign = "end", image, className = "", href, onClick }: BentoBoxProps) {
  const isExternal = href?.startsWith("http");
  const Tag: ElementType = href ? "a" : onClick ? "button" : "div";
  const aspect = aspectRatio[`${spanX}-${spanY}`] ?? "aspect-square";

  const tagProps = Tag === "a" ? { href, ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }) } : Tag === "button" ? { type: "button" as const, onClick } : {};

  if (image) {
    return (
      <Tag {...tagProps} className={["relative overflow-hidden rounded-3xl border border-white/10 no-underline", aspect, "desktop:aspect-auto", (href || onClick) && "cursor-pointer", colSpan[spanX], rowSpan[spanY], className].filter(Boolean).join(" ")}>
        <Image src={image} alt="" fill className="object-cover" />
      </Tag>
    );
  }

  const resolvedTopLeft = topLeft ?? (icon && <span className="h-4 w-4 text-white/60 [&>svg]:h-full [&>svg]:w-full">{icon}</span>);
  const resolvedTopRight = topRight ?? (href && <ArrowUpRight className="h-4 w-4 text-white/50" strokeWidth={2} />);

  return (
    <Tag {...tagProps} className={["flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 gap-3 text-white/90 no-underline text-inherit", aspect, "desktop:aspect-auto", (href || onClick) && "cursor-pointer", colSpan[spanX], rowSpan[spanY], className].filter(Boolean).join(" ")}>
      {(resolvedTopLeft || resolvedTopRight) && (
        <header className="flex items-start justify-between shrink-0">
          <div>{resolvedTopLeft}</div>
          <div>{resolvedTopRight}</div>
        </header>
      )}

      {content && <div className={`flex-1 flex flex-col min-h-0 ${justify[contentAlign]}`}>{content}</div>}
    </Tag>
  );
}
