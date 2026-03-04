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
  /** Link varsa kutu <a> olarak render edilir (dış linklerde target="_blank") */
  href?: string;
  /** href yoksa ve onClick varsa kutu <button> olarak render edilir */
  onClick?: () => void;
  /** true ise tıklama devre dışı, opaklık düşer */
  disabled?: boolean;
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

export function BentoBox({
  spanX,
  spanY,
  topLeft,
  topRight,
  content,
  contentAlign = "start",
  className,
  href,
  onClick,
  disabled = false,
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

  const isClickable = !disabled && (href != null || (onClick != null && href == null));
  const baseClasses =
    "rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0c0c0c] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-[border-color,transform,box-shadow] duration-300 hover:border-white/20 hover:scale-[1.01]" +
    (isClickable ? " cursor-pointer hover:shadow-[0_0_24px_rgba(255,255,255,0.06)]" : "") +
    (disabled ? " pointer-events-none opacity-60" : "");

  const mergedClassName = [baseClasses, colSpanClass, rowSpanClass, className]
    .filter(Boolean)
    .join(" ");

  const hasHeader = topLeft != null || topRight != null;

  const inner = (
    <div className="flex flex-1 flex-col min-h-0 p-4 gap-3">
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
  );

  if (href != null && !disabled) {
    const isExternal = isExternalHref(href);
    return (
      <a
        href={href}
        className={`${mergedClassName} flex flex-col min-h-0 no-underline text-inherit`}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {inner}
      </a>
    );
  }

  if (onClick != null && href == null && !disabled) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${mergedClassName} flex flex-col min-h-0 w-full text-left border-0 bg-transparent p-0`}
      >
        {inner}
      </button>
    );
  }

  return (
    <div className={`${mergedClassName} flex flex-col min-h-0`}>
      {inner}
    </div>
  );
}
