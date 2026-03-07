import skillsData from "@/data/skills.json";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding-x py-24 border-b-2 border-[var(--border-muted)]"
    >
      <div className="container-main">
        <SectionHeader
          number="02"
          title="Skills & Tech Stack"
          subtitle="Teknologi dan tools yang saya gunakan sehari-hari"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillsData.categories.map((category, catIdx) => {
            const accentVariants = ["accent", "cyan", "pink"];
            const accentColors = [
              "text-[var(--accent-yellow)]",
              "text-[var(--accent-cyan)]",
              "text-[var(--accent-pink)]",
            ];
            const barColors = [
              "bg-[var(--accent-yellow)]",
              "bg-[var(--accent-cyan)]",
              "bg-[var(--accent-pink)]",
            ];

            return (
              <NeoCard
                key={category.id}
                variant={accentVariants[catIdx]}
                className="p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3
                    className={`font-[var(--font-space)] font-bold text-lg ${accentColors[catIdx]}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{skill.icon}</span>
                          <span className="text-sm font-medium text-[var(--text-primary)] font-[var(--font-inter)]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-[var(--bg-secondary)] border border-[var(--border-muted)]">
                        <div
                          className={`h-full ${barColors[catIdx]} transition-all`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </NeoCard>
            );
          })}
        </div>

        {/* Marquee tech strip */}
        <div className="mt-16 border-y-2 border-[var(--border-muted)] py-4 overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[
              "Next.js",
              "React.js",
              "Svelte",
              "Astro.js",
              "Laravel",
              "Go",
              "TypeScript",
              "Tailwind CSS",
              "PostgreSQL",
              "Redis",
              "Figma",
              "Next.js",
              "React.js",
              "Svelte",
              "Astro.js",
              "Laravel",
              "Go",
              "TypeScript",
              "Tailwind CSS",
              "PostgreSQL",
              "Redis",
              "Figma",
            ].map((tech, i) => (
              <span
                key={i}
                className="text-[var(--text-muted)] font-mono text-sm flex items-center gap-2"
              >
                <span className="text-[var(--accent-yellow)]">⬡</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
