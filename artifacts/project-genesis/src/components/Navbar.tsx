import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const { t, isRTL } = useI18n();
  const [loc] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleLogout() {
    logout();
    window.location.href = "/";
  }

  const navLinks = [
    { href: "/", label: t("nav_home") },
    { href: "/assessment", label: t("nav_assessment") },
    ...(user ? [
      { href: "/dashboard", label: t("nav_dashboard") },
      { href: "/report", label: t("nav_report") },
    ] : []),
  ];

  const isActive = (href: string) =>
    href === "/" ? loc === "/" : loc.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-page">
        <nav className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">Genesis</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
