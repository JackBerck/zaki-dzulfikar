"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Telegram,
} from "lucide-react";

const socialLinks = [
  { label: "GitHub", icon: Github, href: "https://github.com/JackBerck" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/zaki-dzulfikar",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "http://instagram.com/zakidzlfkr_",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "http://wa.me/6285786470923",
    highlight: true,
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "zakidzlfkr@gmail.com",
    href: "mailto:zakidzlfkr@gmail.com",
  },
  {
    icon: Phone,
    label: "+62 857 8647 0923",
    href: "http://wa.me/6285786470923",
  },
  { icon: MapPin, label: "Batang, Jawa Tengah, Indonesia", href: null },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto href
    const subject = encodeURIComponent(
      `[Portfolio] Pesan dari ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
    );
    const mailtoHref = `mailto:zakidzlfkr@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoHref;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputBase =
    "w-full bg-[var(--bg-secondary)] border-2 border-[var(--border-muted)] text-[var(--text-primary)] font-[var(--font-inter)] px-4 py-3 placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors resize-none";

  return (
    <section id="contact" className="section-padding-x py-24">
      <div className="container-main">
        <SectionHeader
          number="06"
          title="Kontak"
          subtitle="Tertarik bekerja sama? Mari berkenalan!"
          align="center"
          className="items-center text-center"
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div>
            <p className="text-[var(--text-secondary)] font-[var(--font-inter)] leading-relaxed mb-8">
              Saya selalu terbuka untuk peluang baru — baik itu kolaborasi
              proyek freelance, diskusi teknologi, atau sekadar ngobrol seputar
              web development. Jangan ragu untuk menghubungi saya!
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[var(--accent-yellow)]" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-yellow)] transition-colors font-[var(--font-inter)] text-sm"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[var(--text-secondary)] font-[var(--font-inter)] text-sm">
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                // Temukan saya di
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, icon: Icon, href, highlight }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center gap-2 px-4 py-2 border text-sm font-medium transition-all duration-100
                      ${
                        highlight
                          ? "border-[var(--accent-yellow)] text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/5 hover:bg-[var(--accent-yellow)] hover:text-black shadow-[2px_2px_0px_0px_#ffe600] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                          : "border-[var(--border-muted)] text-[var(--text-secondary)] hover:border-[var(--border-color)] hover:text-[var(--text-primary)]"
                      }`}
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <NeoCard variant="accent" className="p-8">
            <h3 className="font-[var(--font-space)] font-bold text-xl text-[var(--text-primary)] mb-6">
              Kirim Pesan 📨
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2"
                >
                  Nama *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap kamu"
                  className={inputBase}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  className={inputBase}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan atau pertanyaan kamu..."
                  className={inputBase}
                />
              </div>

              <NeoButton
                variant="primary"
                size="lg"
                className="w-full"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sent" ? (
                  <>✅ Membuka Email Client...</>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pesan
                  </>
                )}
              </NeoButton>
            </form>
          </NeoCard>
        </div>
      </div>
    </section>
  );
}
