import type { ReactNode, ElementType } from "react";

type BentoBoxProps = {
  spanX?: 1 | 2;
  spanY?: 1 | 2;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

const colSpan: Record<number, string> = { 1: "col-span-1", 2: "col-span-2" };
const rowSpan: Record<number, string> = { 1: "row-span-1", 2: "row-span-2" };

const aspectRatio: Record<string, string> = {
  "1-1": "aspect-square",
  "2-2": "aspect-square",
  "2-1": "aspect-[52/25]",
  "1-2": "aspect-[25/52]",
};

export function BentoBox({ spanX = 1, spanY = 1, href, onClick, className = "", children }: BentoBoxProps) {
  const isExternal = href?.startsWith("http");
  const Tag: ElementType = href ? "a" : onClick ? "button" : "div";
  const aspect = aspectRatio[`${spanX}-${spanY}`] ?? "aspect-square";

  const tagProps = Tag === "a" ? { href, ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }) } : Tag === "button" ? { type: "button" as const, onClick } : {};

  return (
    <Tag
      {...tagProps}
      className={[
        "relative overflow-hidden rounded-[24px] border-t border-foreground/10 shadow-[0_1px_0_0_rgba(0,0,0,0.25)]",
        "flex flex-col bg-card-from p-4 gap-3 text-foreground/90 text-inherit no-underline",
        aspect,
        "desktop:aspect-auto",
        (href || onClick) && "cursor-pointer",
        colSpan[spanX],
        rowSpan[spanY],
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
