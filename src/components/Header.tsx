"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[var(--accent)] shadow-[0_4px_0_0_rgba(161,31,31,0.3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-20 min-h-[56px]">
          <Link href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/pbm-logo.png"
              alt="PBM Construction Services LLC"
              width={180}
              height={60}
              className="h-10 sm:h-14 w-auto object-contain"
            />
            <span className="font-[family-name:var(--font-display)] text-white text-base sm:text-xl tracking-wide">
              <span className="sm:hidden">PBM Construction</span>
              <span className="hidden sm:inline">PBM Construction Services LLC</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="mx-3 text-stone-600 font-bold">/</span>
                )}
              </span>
            ))}
            <a
              href="tel:469-370-1920"
              className="ml-6 px-6 py-3 bg-[var(--accent)] text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-red-600 transition-colors border-l-4 border-red-900/80"
            >
              469-370-1920
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-3 -m-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t-2 border-stone-800">
            <div className="flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 px-4 text-stone-400 hover:text-[var(--accent)] hover:bg-stone-900 font-bold uppercase tracking-wider text-base -mx-4"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:469-370-1920"
                className="mx-4 mt-2 inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-[var(--accent)] text-white font-bold uppercase tracking-wider"
              >
                469-370-1920
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
