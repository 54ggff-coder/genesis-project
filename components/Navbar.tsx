"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/pricing", label: "Premium" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Genesis
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm hover:text-brand-accent transition",
                pathname === link.href && "text-brand-accent font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-xl text-sm"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base hover:text-brand-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block bg-black text-white rounded-xl px-4 py-2 text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
