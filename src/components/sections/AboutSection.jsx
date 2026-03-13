"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";
import { GraduationCap, MapPin, Calendar, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-padding-x py-24 border-b-2 border-[var(--border-muted)]"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <SectionHeader
              number="01"
              title={t.about.sectionTitle}
              subtitle={t.about.sectionSubtitle}
            />

            <div className="mt-8 space-y-5 text-[var(--text-secondary)] font-[var(--font-inter)] leading-relaxed">
              <p>
                {t.about.intro}{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  Muhammad Zaki Dzulfikar
                </span>{" "}
                — {t.about.role} di{" "}
                <span className="text-[var(--accent-yellow)] font-semibold">
                  Universitas Jenderal Soedirman
                </span>{" "}
                {t.about.middle}
              </p>
              <p>{t.about.p2_1}</p>
              <p>
                {t.about.p3_1}{" "}
                <span className="text-[var(--accent-cyan)] font-semibold">
                  {t.about.p3_2}
                </span>{" "}
                {t.about.p3_3}
              </p>
            </div>

            {/* Personal info */}
            <div className="mt-8 space-y-3">
              {[
                {
                  icon: MapPin,
                  label: t.about.location,
                  color: "text-[var(--accent-pink)]",
                },
                {
                  icon: Calendar,
                  label: t.about.date,
                  color: "text-[var(--accent-cyan)]",
                },
                {
                  icon: GraduationCap,
                  label: t.about.degree,
                  color: "text-[var(--accent-yellow)]",
                },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <Icon size={16} className={`${color} shrink-0`} />
                  <span className="text-[var(--text-secondary)] font-[var(--font-inter)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Heart size={12} className="text-[var(--accent-pink)]" />{" "}
                {t.about.interests}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.interestList.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 border border-[var(--border-muted)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-yellow)] hover:text-[var(--accent-yellow)] transition-colors cursor-default"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education card + visual */}
          <div className="space-y-6">
            {/* Avatar placeholder */}
            <NeoCard
              variant="accent"
              className="p-6 flex flex-col items-center gap-4"
            >
              <div className="aspect-square bg-[var(--accent-yellow)]/10 border-2 border-[var(--accent-yellow)] flex items-center justify-center text-6xl font-bold font-[var(--font-space)] text-[var(--accent-yellow)]">
                <img
                  src="/img/zaki-dzulfikar.png"
                  alt="Foto Zaki Dzulfikar"
                  className="max-h-64 lg:max-h-96"
                />
              </div>
              <div className="text-center">
                <p className="font-[var(--font-space)] font-bold text-xl text-[var(--text-primary)]">
                  Muhammad Zaki Dzulfikar
                </p>
                <p className="text-[var(--text-muted)] text-sm font-mono mt-1">
                  NIM: H1D023065
                </p>
                <p className="text-[var(--accent-yellow)] text-sm font-semibold mt-1">
                  Informatika · Unsoed · 2023
                </p>
              </div>
            </NeoCard>

            {/* Education card */}
            <NeoCard className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)] flex items-center justify-center shrink-0">
                  <GraduationCap
                    size={18}
                    className="text-[var(--accent-yellow)]"
                  />
                </div>
                <div>
                  <h3 className="font-[var(--font-space)] font-bold text-[var(--text-primary)]">
                    Universitas Jenderal Soedirman
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {t.about.eduDegree} · {t.about.eduDate}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] font-mono mb-3">
                {t.about.courses}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {t.about.courseList.slice(0, 7).map((course) => (
                  <span
                    key={course}
                    className="text-xs px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-muted)] text-[var(--text-secondary)]"
                  >
                    {course}
                  </span>
                ))}
                <span className="text-xs px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-muted)] text-[var(--text-muted)]">
                  +{t.about.courseList.length - 7} {t.about.more}
                </span>
              </div>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
