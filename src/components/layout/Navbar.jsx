"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.certificates.sectionTitle, href: "#certificates" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b-2 border-[var(--border-muted)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-main section-padding-x">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Zaki Dzulfikar - Home"
            >
              {/* Monogram */}
              <div className="w-10 h-10 bg-[var(--accent-yellow)] border-2 border-[var(--border-color)] flex items-center justify-center font-[var(--font-space)] font-bold text-black text-lg shadow-[2px_2px_0px_0px_#f0f0f0] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100">
                ZD
              </div>
              <div className="hidden sm:block">
                <p className="font-[var(--font-space)] font-bold text-sm text-[var(--text-primary)] leading-tight">
                  Zaki Dzulfikar
                </p>
                <p className="text-xs text-[var(--text-muted)] font-mono">
                  Fullstack Dev
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`px-3 py-2 text-sm font-medium font-[var(--font-inter)] transition-colors duration-150 relative group ${
                        isActive
                          ? "text-[var(--accent-yellow)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--accent-yellow)] transition-all duration-150 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-50"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button and Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors text-sm font-mono text-[var(--text-secondary)] rounded-none"
                title="Swith Language"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              <NeoButton
                variant="ghost"
                size="sm"
                href="#contact"
                onClick={() => handleNavClick("#contact")}
              >
                Hire Me
              </NeoButton>
            </div>

            {/* Mobile menu toggle & Language */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="p-2 text-[var(--text-secondary)] border border-[var(--border-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-xs font-mono font-bold leading-none block">
                  {language.toUpperCase()}
                </span>
              </button>
              <button
                className="p-2 text-[var(--text-primary)] border border-[var(--border-muted)] hover:border-[var(--border-color)] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 lg:hidden flex flex-col transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-16 lg:h-20" /> {/* Spacer */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 p-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full max-w-xs text-center py-4 text-2xl font-bold font-[var(--font-space)] text-[var(--text-primary)] border-b border-[var(--border-muted)] hover:text-[var(--accent-yellow)] transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-6">
            <NeoButton
              variant="primary"
              size="lg"
              onClick={() => handleNavClick("#contact")}
            >
              Hire Me 🚀
            </NeoButton>
          </div>
        </div>
      </div>
    </>
  );
}
