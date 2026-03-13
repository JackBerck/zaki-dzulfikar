"use client";

import experienceData from "@/data/experience.json";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";
import { Briefcase, Users, Heart, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
  const { t, language } = useLanguage();

  const typeConfig = {
    work: {
      label: t.experience.work,
      icon: Briefcase,
      variant: "accent",
      dotColor: "bg-[var(--accent-yellow)]",
      textColor: "text-[var(--accent-yellow)]",
      borderColor: "border-[var(--accent-yellow)]",
    },
    organization: {
      label: t.experience.organization,
      icon: Users,
      variant: "cyan",
      dotColor: "bg-[var(--accent-cyan)]",
      textColor: "text-[var(--accent-cyan)]",
      borderColor: "border-[var(--accent-cyan)]",
    },
    volunteer: {
      label: t.experience.volunteer,
      icon: Heart,
      variant: "pink",
      dotColor: "bg-[var(--accent-pink)]",
      textColor: "text-[var(--accent-pink)]",
      borderColor: "border-[var(--accent-pink)]",
    },
  };

  return (
    <section
      id="experience"
      className="section-padding-x py-24 border-b-2 border-[var(--border-muted)]"
    >
      <div className="container-main">
        <SectionHeader
          number="04"
          title={t.experience.sectionTitle}
          subtitle={t.experience.sectionSubtitle}
        />

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 mb-12">
          {Object.entries(typeConfig).map(([type, config]) => {
            const Icon = config.icon;
            return (
              <div key={type} className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${config.dotColor}`}
                />
                <Icon size={13} className={config.textColor} />
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  {config.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[var(--border-muted)] hidden sm:block" />

          <div className="space-y-8">
            {experienceData.map((entry, index) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;

              return (
                <div key={entry.id} className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-3.5 top-5 w-3 h-3 rounded-full ${config.dotColor} border-2 border-[var(--bg-primary)] hidden sm:block z-10`}
                  />

                  <NeoCard
                    variant={config.variant}
                    className="p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150"
                  >
                    {/* Card header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 border ${config.borderColor} bg-[var(--bg-secondary)] flex items-center justify-center shrink-0`}
                        >
                          <Icon size={16} className={config.textColor} />
                        </div>
                        <div>
                          <h3 className="font-[var(--font-space)] font-bold text-[var(--text-primary)] leading-tight">
                            {entry.title[language] || entry.title.id}
                          </h3>
                          <p
                            className={`font-semibold text-sm ${config.textColor} mt-0.5`}
                          >
                            {entry.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                          {entry.period[language] || entry.period.id}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                          <MapPin size={10} />
                          {entry.location}
                        </span>
                      </div>
                    </div>

                    {/* Description list */}
                    <ul className="space-y-1.5">
                      {(
                        entry.description[language] || entry.description.id
                      ).map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--text-secondary)] font-[var(--font-inter)] flex gap-3"
                        >
                          <span
                            className={`${config.textColor} mt-1.5 shrink-0`}
                          >
                            ▸
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </NeoCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
