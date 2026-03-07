import certificatesData from "@/data/certificates.json";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoCard from "@/components/ui/NeoCard";
import { Award, Calendar, ExternalLink } from "lucide-react";

const colorMap = {
  yellow: {
    variant: "accent",
    bg: "bg-[var(--accent-yellow)]/10",
    text: "text-[var(--accent-yellow)]",
    border: "border-[var(--accent-yellow)]",
  },
  cyan: {
    variant: "cyan",
    bg: "bg-[var(--accent-cyan)]/10",
    text: "text-[var(--accent-cyan)]",
    border: "border-[var(--accent-cyan)]",
  },
  pink: {
    variant: "pink",
    bg: "bg-[var(--accent-pink)]/10",
    text: "text-[var(--accent-pink)]",
    border: "border-[var(--accent-pink)]",
  },
};

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="section-padding-x py-24 border-b-2 border-[var(--border-muted)]"
    >
      <div className="container-main">
        <SectionHeader
          number="05"
          title="Sertifikasi"
          subtitle="Sertifikasi dan pencapaian profesional yang telah saya raih"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const colors = colorMap[cert.color] || colorMap.yellow;

            return (
              <NeoCard
                key={cert.id}
                variant={colors.variant}
                hoverable
                className="p-6 flex flex-col"
              >
                {/* Icon circle */}
                <div
                  className={`w-14 h-14 ${colors.bg} ${colors.border} border-2 flex items-center justify-center text-3xl mb-5`}
                >
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-[var(--font-space)] font-bold text-[var(--text-primary)] text-base leading-tight mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mb-1">
                    <Award size={13} className={colors.text} />
                    <span className={`text-sm font-semibold ${colors.text}`}>
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[var(--text-muted)]" />
                    <span className="text-sm text-[var(--text-muted)] font-mono">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Verify link */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs font-mono ${colors.text} hover:underline`}
                  >
                    <ExternalLink size={12} />
                    Verifikasi Sertifikat
                  </a>
                )}
              </NeoCard>
            );
          })}
        </div>

        {/* Decorative number */}
        <div className="mt-12 flex items-center justify-center gap-4 text-center">
          <div className="flex-1 h-px bg-[var(--border-muted)]" />
          <div className="text-center">
            <p className="font-[var(--font-space)] text-4xl font-bold text-[var(--accent-yellow)]">
              {certificatesData.length}
            </p>
            <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mt-1">
              Sertifikasi Diraih
            </p>
          </div>
          <div className="flex-1 h-px bg-[var(--border-muted)]" />
        </div>
      </div>
    </section>
  );
}
