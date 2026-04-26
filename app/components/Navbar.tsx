"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/positions", label: "SAMAHAN Positions" },
  { href: "/history", label: "History" },
  { href: "/participate", label: "Why Participate?" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo mark + wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-400 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
            <span className="text-slate-900 font-black text-sm tracking-tight">RT</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-sm">The Round Table</span>
            <span className="text-slate-500 text-[11px] mt-0.5 hidden sm:block">
              Student Government Educational Hub · ADDU
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-amber-400 bg-amber-400/8"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — animates to × */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.25 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-slate-300 transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-300 transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-300 transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — drops down below navbar */}
      <div
        className={`md:hidden border-t border-slate-800/60 bg-slate-950 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-amber-400 bg-amber-400/8"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {pathname === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
