import { Code } from "lucide-react";

export function Header() {
  const navItems = [
    { href: "#about", label: "Hakkımda" },
    { href: "#projects", label: "Projeler" },
    { href: "#skills", label: "Beceriler" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-xl font-bold">Portfolio</span>
        </div>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
