import Link from "next/link";
import { Code } from "lucide-react";

export function Header() {
  const navItems = [
    { href: "/about", label: "Hakkımda" },
    { href: "/projects", label: "Projeler" },
    { href: "/skills", label: "Beceriler" },
    { href: "/contact", label: "İletişim" },
    { href: "/youtube", label: "YouTube" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-xl font-bold">Portfolio</span>
        </Link>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
