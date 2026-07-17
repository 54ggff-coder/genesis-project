"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Genesis
        </Link>

        <div className="flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/assessment">
            Assessment
          </Link>

          <Link href="/pricing">
            Premium
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}