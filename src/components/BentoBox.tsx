import type { ReactNode } from "react";

type BentoBoxProps = {
  spanX: 1 | 2 | 3 | 4;
  spanY: 1 | 2 | 3 | 4;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  content?: ReactNode;
  /** İçeriğin dikey hizalaması: üst, orta, alt */
  contentAlign?: "start" | "center" | "end";
  className?: string;
};

export function BentoBox({
  spanX,
  spanY,
  topLeft,
  topRight,
  content,
  contentAlign = "start",
  className,
}: BentoBoxProps) {
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
      3: "row-span-3",
      4: "row-span-4",
    }[spanY] ?? "row-span-1";

  const baseClasses =
    "rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-[border-color,transform] duration-300 hover:border-white/20 hover:scale-[1.01]";

  const mergedClassName = [baseClasses, colSpanClass, rowSpanClass, className]
    .filter(Boolean)
    .join(" ");

  const hasHeader = topLeft != null || topRight != null;

  return (
    <div className={`${mergedClassName} flex flex-col min-h-0`}>
      <div className="flex flex-1 flex-col min-h-0 p-6 sm:p-8 gap-4">
        {hasHeader && (
          <header className="flex justify-between items-start shrink-0">
            <div className="flex items-center justify-start">{topLeft}</div>
            <div className="flex items-center justify-end">{topRight}</div>
          </header>
        )}
        {content != null && (
          <div
            className={`flex-1 flex flex-col min-h-0 ${
              contentAlign === "center"
                ? "justify-center"
                : contentAlign === "end"
                  ? "justify-end"
                  : "justify-start"
            }`}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
}
