"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Send,
  Facebook,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/JackBerck",
    color: "hover:text-[var(--text-primary)]",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/zaki-dzulfikar",
    color: "hover:text-[#0077B5]",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "http://instagram.com/zakidzlfkr_",
    color: "hover:text-[#E1306C]",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:zakidzlfkr@gmail.com",
    color: "hover:text-[var(--accent-yellow)]",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "http://wa.me/6285786470923",
    color: "hover:text-[#25D366]",
  },
  {
    label: "Telegram",
    icon: Send,
    href: "http://t.me/zakidzlfkr",
    color: "hover:text-[#2AABEE]",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/jack.berck.5",
    color: "hover:text-[#1877F2]",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t-2 border-[var(--border-muted)] bg-[var(--bg-secondary)] mt-0">
      <div className="container-main section-padding-x py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-[var(--accent-yellow)] border border-[var(--border-color)] flex items-center justify-center font-[var(--font-space)] font-bold text-black text-sm">
                ZD
              </div>
              <span className="font-[var(--font-space)] font-bold text-[var(--text-primary)]">
                Zaki Dzulfikar
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm font-[var(--font-inter)]">
              Fullstack Web Developer · UI/UX · Copywriting
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-[var(--text-muted)] transition-colors duration-150 ${social.color}`}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-[var(--border-muted)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)] font-[var(--font-inter)]">
          <p>
            © {currentYear} Muhammad Zaki Dzulfikar. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
