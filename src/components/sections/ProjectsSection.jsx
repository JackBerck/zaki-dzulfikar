import projectsData from "@/data/projects.json";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import NeoBadge from "@/components/ui/NeoBadge";
import { ExternalLink, Github, Star } from "lucide-react";

export default function ProjectsSection() {
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
            title="Featured Projects"
            subtitle="Proyek-proyek unggulan yang pernah saya kerjakan"
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
                className="flex flex-col p-6"
              >
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
                  {project.period}
                </p>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-[var(--font-inter)] line-clamp-4 flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <NeoBadge key={tag} label={tag} variant="muted" size="sm" />
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
                      Live
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
                      <Github size={14} />
                      GitHub
                    </NeoButton>
                  )}
                </div>
              </NeoCard>
            );
          })}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
              // Proyek Lainnya
            </p>
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
                            aria-label="GitHub"
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5 mb-2">
                      {project.period}
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
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-10 flex justify-center">
          <NeoButton
            href="https://github.com/JackBerck"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="md"
          >
            <Github size={18} />
            Lihat semua di GitHub
          </NeoButton>
        </div>
      </div>
    </section>
  );
}
