"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import NeoBadge from "@/components/ui/NeoBadge";
import {
  ExternalLink,
  Link2,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { t, language } = useLanguage();

  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  const categoryColors = {
    accent: ["accent"],
    frontend: ["cyan"],
    fullstack: ["accent"],
    documentation: ["pink"],
  };

  return (
    <section
      id="projects"
      className="section-padding-x py-24 border-b-2 border-[var(--border-muted)]"
    >
      <div className="container-main">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="03"
            title={t.projects.sectionTitle}
            subtitle={t.projects.sectionSubtitle}
          />
        </div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((project, i) => {
            const variantMap = { 0: "accent", 1: "cyan", 2: "default" };
            const variant = variantMap[i] || "default";

            return (
              <NeoCard
                key={project.id}
                variant={variant}
                hoverable
                className="flex flex-col p-0 overflow-hidden"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 bg-[var(--bg-secondary)] border-b-2 border-[var(--border-muted)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col p-6 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.emoji}</span>
                    <Star
                      size={16}
                      className="text-[var(--accent-yellow)] fill-[var(--accent-yellow)] mt-1"
                    />
                  </div>

                  {/* Title & period */}
                  <h3 className="font-[var(--font-space)] font-bold text-lg text-[var(--text-primary)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-muted)] mb-3">
                    {project.period[language] || project.period.id}
                  </p>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-[var(--font-inter)] line-clamp-4 flex-1 mb-5">
                    {project.description[language] || project.description.id}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <NeoBadge
                        key={tag}
                        label={tag}
                        variant="muted"
                        size="sm"
                      />
                    ))}
                    {project.tags.length > 4 && (
                      <NeoBadge
                        label={`+${project.tags.length - 4}`}
                        variant="muted"
                        size="sm"
                      />
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <NeoButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                      >
                        <ExternalLink size={14} />
                        {t.projects.liveDemo}
                      </NeoButton>
                    )}
                    {project.repoUrl && (
                      <NeoButton
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="sm"
                      >
                        <Link2 size={14} />
                        {t.projects.viewProject}
                      </NeoButton>
                    )}
                  </div>
                </div>
              </NeoCard>
            );
          })}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              {t.projects.otherProjects}
            </p>

            {showAllProjects ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((project) => (
                  <NeoCard
                    key={project.id}
                    variant="muted"
                    className="p-5 flex gap-4 items-start"
                  >
                    <span className="text-2xl shrink-0">{project.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-[var(--font-space)] font-bold text-[var(--text-primary)] text-sm">
                          {project.title}
                        </h4>
                        <div className="flex gap-2 shrink-0">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                              aria-label="Link Project"
                            >
                              <Link2 size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5 mb-2">
                        {project.period[language] || project.period.id}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <NeoBadge
                            key={tag}
                            label={tag}
                            variant="muted"
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  </NeoCard>
                ))}
              </div>
            ) : null}

            {/* Toggle button */}
            <div className="mt-6 flex justify-center">
              <NeoButton
                onClick={() => setShowAllProjects(!showAllProjects)}
                variant="ghost"
                size="md"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp size={18} />
                    {t.projects.showLess}
                  </>
                ) : (
                  <>
                    <ChevronDown size={18} />
                    {t.projects.showMore} ({others.length})
                  </>
                )}
              </NeoButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
