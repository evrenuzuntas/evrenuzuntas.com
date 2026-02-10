import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ className = "", asChild, children, ...props }: ButtonProps) {
  // Eğer className'de p-0 veya !p-0 varsa varsayılan padding'i ekleme
  const hasNoPadding = className.includes("p-0") || className.includes("!p-0");
  const basePadding = hasNoPadding ? "" : "px-4 py-2";
  const buttonClassName = `inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground ${basePadding} font-medium transition-colors hover:bg-primary/90 ${className}`;
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: `${buttonClassName} ${(children as any).props?.className || ""}`,
      ...props,
    });
  }
  
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
