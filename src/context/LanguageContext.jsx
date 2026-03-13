"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      status: "Tersedia untuk bekerja",
      desc1: "Mahasiswa Informatika",
      desc2: "Universitas Jenderal Soedirman",
      desc3:
        "yang passionate membangun produk digital yang berdampak — dari arsitektur backend yang solid hingga UI yang memukau.",
      dlCV: "Download CV",
      contact: "Hubungi Saya",
      stats: [
        { label: "Proyek Selesai" },
        { label: "Tahun Coding" },
        { label: "Teknologi Utama" },
      ],
    },
    about: {
      sectionTitle: "Tentang Saya",
      sectionSubtitle: "Sekilas tentang latar belakang dan perjalanan saya",
      intro: "Halo! Saya",
      role: "mahasiswa Informatika",
      middle:
        "angkatan 2023 yang memiliki passion besar di bidang Fullstack Web Development.",
      p2_1: "Sebagai Web Developer independen, saya membangun website responsif dan interaktif menggunakan teknologi modern. Saya percaya bahwa kode yang baik bukan hanya yang bekerja dengan benar, tapi juga yang mudah dipelihara, scalable, dan memberikan pengalaman terbaik bagi pengguna.",
      p3_1: "Di luar coding, saya aktif berorganisasi dan mengeksplorasi hobi lainnya, seperti mekanik, bermusik, dan mendaki gunung. Saya selalu bersemangat untuk belajar hal baru dan",
      p3_2: "berkolaborasi",
      p3_3: "dalam proyek yang menantang. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!",
      location: "Batang, Jawa Tengah",
      date: "2 Agustus 2003",
      degree: "Informatika, Universitas Jenderal Soedirman",
      interests: "Minat & Hobi",
      eduDegree: "S1 Informatika",
      eduDate: "Juli 2023 – Sekarang",
      courses: "Mata kuliah relevan:",
      more: "lagi...",
      courseList: [
        "Algoritma Pemrograman",
        "Struktur Data",
        "Matematika Diskrit",
        "Basis Data",
        "Pemrograman Web",
        "Rekayasa Perangkat Lunak",
        "Data Mining",
        "Kecerdasan Buatan",
        "Sistem Informasi",
        "Analisis & Perancangan Sistem",
      ],
      interestList: [
        { label: "Fullstack Dev", icon: "⚡" },
        { label: "UI/UX Design", icon: "🎨" },
        { label: "Open Source", icon: "🐙" },
        { label: "Copywriting", icon: "✍️" },
        { label: "Mekanik", icon: "🔧" },
        { label: "Musik", icon: "🎸" },
        { label: "Mendaki", icon: "⛰️" },
      ],
    },
    skills: {
      sectionTitle: "Keahlian & Teknologi",
      sectionSubtitle: "Teknologi dan alat yang saya gunakan sehari-hari",
    },
    projects: {
      sectionTitle: "Proyek Unggulan",
      sectionSubtitle: "Proyek-proyek unggulan yang pernah saya kerjakan",
      otherProjects: "// Proyek Lainnya",
      liveDemo: "Live Demo",
      viewProject: "Lihat Project",
      showMore: "Lihat Proyek Lainnya",
      showLess: "Sembunyikan Proyek Lainnya",
    },
    experience: {
      sectionTitle: "Pengalaman & Riwayat",
      sectionSubtitle: "Perjalanan karir dan organisasi saya sejauh ini",
      work: "Pekerjaan",
      organization: "Organisasi",
      volunteer: "Relawan",
    },
    certificates: {
      sectionTitle: "Sertifikat",
      sectionSubtitle: "Beberapa sertifikasi yang telah saya capai",
      viewCredential: "Lihat Kredensial",
    },
    contact: {
      sectionTitle: "Mari Terhubung",
      sectionSubtitle: "Tertarik bekerja sama? Mari berkenalan!",
      p1: "Saya selalu terbuka untuk peluang baru — baik itu kolaborasi proyek freelance, diskusi teknologi, atau sekadar ngobrol seputar web development. Jangan ragu untuk menghubungi saya!",
      location: "Batang, Jawa Tengah, Indonesia",
      findMe: "// Temukan saya di",
      formName: "Nama",
      formNamePlaceholder: "Nama Anda",
      formEmail: "Email",
      formEmailPlaceholder: "email@anda.com",
      formMessage: "Pesan",
      formMessagePlaceholder: "Halo, saya tertarik...",
      sendBtn: "Kirim Pesan",
    },
    footer: {
      madeWith: "Dibuat dengan",
      by: "oleh",
      rights: "Hak Cipta Dilindungi.",
      backToTop: "Kembali ke atas",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      status: "Available for work",
      desc1: "An Informatics student at",
      desc2: "Jenderal Soedirman University",
      desc3:
        "passionate about building impactful digital products — from solid backend architecture to stunning UIs.",
      dlCV: "Download CV",
      contact: "Contact Me",
      stats: [
        { label: "Projects Completed" },
        { label: "Years Coding" },
        { label: "Core Technologies" },
      ],
    },
    about: {
      sectionTitle: "About Me",
      sectionSubtitle: "A glimpse into my background and journey",
      intro: "Hello! I am",
      role: "an Informatics student",
      middle:
        "class of 2023 with a great passion for Fullstack Web Development.",
      p2_1: "As an independent Web Developer, I build responsive and interactive websites using modern technologies. I believe that good code is not only one that works correctly, but also one that is easy to maintain, scalable, and provides the best user experience.",
      p3_1: "Outside of coding, I am active in organizations and explore other hobbies, such as mechanics, playing music, and mountain climbing. I am always excited to learn new things and",
      p3_2: "collaborate",
      p3_3: "on challenging projects. Let's connect and create something amazing together!",
      location: "Batang, Central Java",
      date: "August 2, 2003",
      degree: "Informatics, Jenderal Soedirman University",
      interests: "Interests & Hobbies",
      eduDegree: "B.Sc in Informatics",
      eduDate: "July 2023 – Present",
      courses: "Relevant coursework:",
      more: "more...",
      courseList: [
        "Programming Algorithms",
        "Data Structures",
        "Discrete Mathematics",
        "Database",
        "Web Programming",
        "Software Engineering",
        "Data Mining",
        "Artificial Intelligence",
        "Information Systems",
        "System Analysis & Design",
      ],
      interestList: [
        { label: "Fullstack Dev", icon: "⚡" },
        { label: "UI/UX Design", icon: "🎨" },
        { label: "Open Source", icon: "🐙" },
        { label: "Copywriting", icon: "✍️" },
        { label: "Mechanic", icon: "🔧" },
        { label: "Music", icon: "🎸" },
        { label: "Hiking", icon: "⛰️" },
      ],
    },
    skills: {
      sectionTitle: "Skills & Tech Stack",
      sectionSubtitle: "Technologies and tools I use daily",
    },
    projects: {
      sectionTitle: "Featured Projects",
      sectionSubtitle: "Highlight projects I've worked on",
      otherProjects: "// Other Projects",
      liveDemo: "Live Demo",
      viewProject: "View Project",
      showMore: "Show Other Projects",
      showLess: "Hide Other Projects",
    },
    experience: {
      sectionTitle: "Experience & History",
      sectionSubtitle: "My career and organizational journey so far",
      work: "Work",
      organization: "Organization",
      volunteer: "Volunteer",
    },
    certificates: {
      sectionTitle: "Certificates",
      sectionSubtitle: "Some certifications I have achieved",
      viewCredential: "View Credential",
    },
    contact: {
      sectionTitle: "Get In Touch",
      sectionSubtitle: "Interested in working together? Let's connect!",
      p1: "I'm always open to new opportunities — whether it's freelance project collaboration, tech discussions, or just a chat about web development. Don't hesitate to reach out!",
      location: "Batang, Central Java, Indonesia",
      findMe: "// Find me on",
      formName: "Name",
      formNamePlaceholder: "Your Name",
      formEmail: "Email",
      formEmailPlaceholder: "your@email.com",
      formMessage: "Message",
      formMessagePlaceholder: "Hello, I am interested in...",
      sendBtn: "Send Message",
    },
    footer: {
      madeWith: "Built with",
      by: "by",
      rights: "All Rights Reserved.",
      backToTop: "Back to top",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
