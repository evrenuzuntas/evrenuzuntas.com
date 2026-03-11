import type { ReactNode, ElementType } from "react";

type BentoBoxProps = {
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "image";
  className?: string;
  children: ReactNode;
};

const colSpan: Record<number, string> = { 1: "col-span-1", 2: "col-span-2" };
const rowSpan: Record<number, string> = { 1: "row-span-1", 2: "row-span-2" };

const aspectRatio: Record<string, string> = {
  "1-1": "aspect-square",
  "2-2": "aspect-square",
  "2-1": "aspect-[2/1]",
  "1-2": "aspect-[1/2]",
};

export function BentoBox({ spanX = 1, spanY = 1, href, onClick, variant = "default", className = "", children }: BentoBoxProps) {
  const isExternal = href?.startsWith("http");
  const Tag: ElementType = href ? "a" : onClick ? "button" : "div";
  const aspect = aspectRatio[`${spanX}-${spanY}`] ?? "aspect-square";

  const tagProps = Tag === "a" ? { href, ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }) } : Tag === "button" ? { type: "button" as const, onClick } : {};

  const base = ["rounded-3xl border border-white/10 no-underline", aspect, "desktop:aspect-auto", (href || onClick) && "cursor-pointer", colSpan[spanX], rowSpan[spanY], className];

  const variantClass = variant === "image" ? "relative overflow-hidden" : "flex flex-col bg-gradient-to-br from-[#141414] to-[#0c0c0c] p-4 gap-3 text-white/90 text-inherit";

  return (
    <Tag {...tagProps} className={[...base, variantClass].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
