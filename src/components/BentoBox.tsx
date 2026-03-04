import type { ReactNode } from "react";

type BentoBoxProps = {
  children?: ReactNode;
  spanX: 1 | 2 | 3 | 4;
  spanY: 1 | 2;
  className?: string;
};

export function BentoBox({ children, spanX, spanY, className }: BentoBoxProps) {
  const colSpanClass =
    {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
    }[spanX] ?? "col-span-1";

  const rowSpanClass =
    {
      1: "row-span-1",
      2: "row-span-2",
    }[spanY] ?? "row-span-1";

  const baseClasses =
    "border border-white/10 rounded-3xl bg-[#121212] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";

  const mergedClassName = [baseClasses, colSpanClass, rowSpanClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={mergedClassName}>{children}</div>;
}

