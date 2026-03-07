# Project Brief: Personal Website Portfolio

## 1. App General Description

**Name**
Muhammad Zaki Dzulfikar

**App**
Personal Website Portfolio

**Backstory**
[cite_start]Saya Muhammad Zaki Dzulfikar, mahasiswa program studi Informatika di Universitas Jenderal Soedirman angkatan 2023[cite: 5, 6]. [cite_start]Saya memiliki minat besar di bidang Fullstack Development dan berprofesi sebagai Web Developer independen[cite: 9, 10]. [cite_start]Saya menguasai berbagai teknologi modern seperti Next.js, React.js, Svelte, Astro.js, Laravel, dan Go[cite: 3]. [cite_start]Selain pengembangan web, saya juga memiliki kemampuan di bidang UI/UX menggunakan Figma dan Copywriting[cite: 3]. [cite_start]Saya aktif berorganisasi, salah satunya sebagai Head of Community di Soedirman Software Developer Community (SSDC) [cite: 50, 51] [cite_start]dan staf di HMIF Unsoed[cite: 44, 45, 76, 77]. Di luar coding, saya sesekali mengeksplorasi hobi lain seperti mekanik, bermusik, dan mendaki.

**Social Media**
- **Email:** zakidzlfkr@gmail.com
- **LinkedIn:** https://linkedin.com/in/zaki-dzulfikar
- **WhatsApp:** http://wa.me/6285786470923
- **GitHub:** https://github.com/JackBerck
- **Instagram:** http://instagram.com/zakidzlfkr_
- **Facebook:** https://www.facebook.com/jack.berck.5
- **Telegram:** http://t.me/zakidzlfkr

**App Solution**
Memberikan representasi digital yang profesional, unik, dan interaktif untuk memamerkan CV, proyek, pengalaman kerja, serta sertifikasi IT kepada calon perekrut atau klien.

**App Concept**
1. Website portofolio interaktif dengan performa tinggi dan ringan diakses.
2. Mengusung gaya desain "Neo-Brutalism" dengan tema gelap (*Dark Mode*). Desain akan menggunakan elemen UI yang *bold*, garis luar (*outline*) tegas, bayangan solid (*hard shadows*), dan kontras warna yang mencolok di atas kanvas gelap.

**App Description**
[cite_start]Website portofolio pribadi Muhammad Zaki Dzulfikar yang dirancang untuk menampilkan profil profesional, daftar keahlian, pengalaman organisasi/kerja, dan memamerkan proyek-proyek unggulan seperti Ziggs, PeduliRasa, dan Soedirman Student Summit[cite: 14, 15, 20, 26, 32]. Website ini menonjolkan estetika Neo-Brutalism gelap yang berkarakter kuat, namun tetap memprioritaskan *User Experience* (UX) yang bersih dan waktu muat (*load time*) yang sangat cepat.

**App Features**
Fitur aplikasi dirancang seringkas mungkin untuk audiens publik (Perekrut/Klien):
1. **Hero Section:** Perkenalan singkat yang kuat (*hook*), *role* saat ini, dan tombol *Call-to-Action* (Unduh CV & Kontak).
2. [cite_start]**About Me:** Latar belakang pendidikan di Informatika Universitas Jenderal Soedirman [cite: 4, 5] dan visi personal.
3. [cite_start]**Skills & Tech Stack:** Menampilkan ikon/daftar keahlian teknis (Web Dev, UI/UX, Copywriting) beserta teknologi yang dikuasai[cite: 3].
4. [cite_start]**Featured Projects:** Etalase proyek unggulan (Ziggs, PeduliRasa, dsb)[cite: 14, 15, 26]. Tiap proyek menampilkan deskripsi, gambar/thumbnail, teknologi yang dipakai, dan tautan (Live URL/Repo).
5. [cite_start]**Certificates:** Menampilkan sertifikasi seperti MEVN Stack Codepolitan dan AWS Back-End Dicoding[cite: 83, 84, 86].
6. **Contact Form:** Formulir sederhana untuk mengirim pesan langsung yang terhubung ke email.
7. [cite_start]**Experience & Organizations:** Linimasa (*timeline*) interaktif berisi pengalaman sebagai Web Developer [cite: 9, 10][cite_start], riwayat di HMIF, SSDC, dan *volunteer*[cite: 44, 50, 57].

**App Unique**
1. Desain Neo-Brutalism Dark Mode yang berani dan berbeda dari portofolio standar.
2. Sangat ringan karena dibangun secara statis/*server-side* dengan Next.js dan di-*deploy* di Vercel.

**App Target User**
1. Perekrut Perusahaan (HRD / Tech Lead).
2. Calon Klien Freelance.
3. Sesama Developer / Komunitas Tech.

---

## 2. App Tech

Project ini dibangun menggunakan **Next.js (App Router)** dengan **Tailwind CSS** untuk mempercepat proses *styling* Neo-Brutalism. Deployment dilakukan menggunakan **Vercel**. Untuk data proyek dan pengalaman atau hal lain, akan menggunakan pendekatan **Markdown (MDX)** atau **JSON lokal** agar tidak perlu memelihara database *server* terpisah, sehingga website menjadi sangat cepat dan gratis sepenuhnya.

---

## 3. App Database Schema

Karena ini adalah portofolio yang mengutamakan kecepatan dan keringanan, mayoritas data (Profil, Proyek, Pengalaman, atau data yang lain) bersifat **statis** (Hardcoded / file JSON / file MDX).

*> Catatan: Sebagai alternatif tanpa database, form kontak dapat diarahkan langsung ke Email menggunakan layanan pihak ketiga seperti Resend.*

---

## 4. App Backend Brief

1. Karena data portofolio statis, fokuslah pada optimasi gambar (`next/image`) dan SEO *metadata*.

---

## 5. App Frontend Brief

1. Terapkan arsitektur *layout* yang terstandarisasi untuk menjaga konsistensi padding/margin, contohnya:

```tsx
<Layout>
    {/* Hero Section */}
    <section className="section-padding-x border-b-4 border-black dark:border-white">
        <div className="container max-w-7xl">
            {/* Hero Section Content */}
        </div>
    </section>
    
    {/* Categories Section */}
    <section className="section-padding-x py-6">
        <div className="container max-w-7xl">
            {/* Categories Section Content */}
        </div>
    </section>
</Layout>
```
2. Tema Warna: Gunakan variabel di app.css / globals.css. Tema utama adalah GELAP, namun elemen Neo-Brutalism menonjolkan warna aksen neon/terang (seperti kuning stabilo, cyan, atau pink terang) untuk tombol dan hover states.
3. Styling Neo-Brutalism: - Gunakan border tebal (misal border-2 atau border-4) dengan warna terang atau warna putih kontras.
4. Gunakan hard shadow (tidak di-blur). Contoh di Tailwind: shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] atau menggunakan warna aksen.
5. Gunakan font tipografi yang berkarakter tegas (seperti Space Grotesk, Syne, atau font monospace) untuk judul/Heading.
6. Buat komponen UI yang dapat digunakan ulang (Reusable Components) seperti <NeoButton />, <NeoCard /> (untuk proyek), dan <NeoBadge /> (untuk daftar tech stack).
7. Pastikan semua elemen interaktif memberikan feedback yang jelas saat di-hover/diklik (misalnya translasi posisi elemen 2px atau 4px ke bawah/kanan agar bayangan seakan ditekan).