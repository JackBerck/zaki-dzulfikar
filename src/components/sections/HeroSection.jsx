"use client";

import NeoButton from "@/components/ui/NeoButton";
import { Download, Mail, ArrowDown } from "lucide-react";

const roles = ["Fullstack Web Developer", "UI/UX Designer", "Copywriter"];

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding-x border-b-2 border-[var(--border-muted)] overflow-hidden"
    >
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative geometric shapes */}
      <div className="absolute top-24 right-8 md:right-24 w-20 h-20 border-2 border-[var(--accent-yellow)] opacity-40 animate-float" />
      <div className="absolute top-36 right-16 md:right-36 w-10 h-10 bg-[var(--accent-yellow)] opacity-20" />
      <div className="absolute bottom-32 left-8 md:left-24 w-14 h-14 border-2 border-[var(--accent-cyan)] opacity-30" />
      <div
        className="absolute bottom-48 right-12 md:right-48 w-8 h-8 bg-[var(--accent-pink)] opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container-main relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--accent-green)] bg-[var(--bg-card)] mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
            <span className="text-[var(--accent-green)] text-xs font-mono font-semibold tracking-widest uppercase">
              Available for Work
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-[var(--font-space)] font-bold leading-[1.0] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
              Muhammad
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
              Zaki{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--accent-yellow)]">
                  Dzulfikar
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[var(--accent-yellow)] opacity-20 -z-0" />
              </span>
            </span>
          </h1>

          {/* Roles */}
          <div
            className="flex flex-wrap gap-2 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className={`px-3 py-1 text-sm font-mono font-semibold border ${
                  i === 0
                    ? "border-[var(--accent-yellow)] text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10"
                    : i === 1
                      ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10"
                      : "border-[var(--accent-pink)] text-[var(--accent-pink)] bg-[var(--accent-pink)]/10"
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-in-up font-[var(--font-inter)]"
            style={{ animationDelay: "0.3s" }}
          >
            Mahasiswa Informatika{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Universitas Jenderal Soedirman
            </span>{" "}
            yang passionate membangun produk digital yang berdampak — dari
            arsitektur backend yang solid hingga UI yang memukau.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <NeoButton
              variant="primary"
              size="lg"
              href="/cv-zaki-dzulfikar.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Download CV
            </NeoButton>
            <NeoButton variant="outline" size="lg" onClick={scrollToContact}>
              <Mail size={18} />
              Hubungi Saya
            </NeoButton>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 mt-16 pt-8 border-t border-[var(--border-muted)] animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "5+", label: "Proyek Selesai" },
              { value: "2+", label: "Tahun Coding" },
              { value: "3+", label: "Teknologi Utama" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-[var(--font-space)] text-3xl font-bold text-[var(--accent-yellow)]">
                  {stat.value}
                </p>
                <p className="text-[var(--text-muted)] text-sm font-[var(--font-inter)] mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        aria-label="Scroll down"
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] hover:text-[var(--accent-yellow)] transition-colors animate-float z-10"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
