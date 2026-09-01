"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

const darkPages = ["/", "/a-propos"];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLightPage = !darkPages.includes(pathname);
  const showDark = scrolled || isLightPage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDark
          ? "bg-[#1B1710]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-cream hover:text-amber transition-colors duration-300"
        >
          Fornello
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-amber"
                  : "text-cream-muted hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/reserver"
          className="hidden md:inline-flex btn-primary px-5 py-2.5 bg-amber text-bg-dark text-sm font-medium tracking-wide hover:bg-amber-light"
        >
          Réserver une table
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream hover:text-amber transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-white/5 bg-[#1B1710]/95 backdrop-blur-md animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base tracking-wide transition-colors ${
                  pathname === link.href ? "text-amber" : "text-cream-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reserver"
              onClick={() => setMobileOpen(false)}
              className="mt-2 btn-primary px-5 py-3 bg-amber text-bg-dark text-sm font-medium tracking-wide text-center"
            >
              Réserver une table
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
