import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Muhammad Zaki Dzulfikar | Fullstack Web Developer",
  description:
    "Portfolio Muhammad Zaki Dzulfikar — Mahasiswa Informatika Unsoed, Fullstack Web Developer yang berpengalaman dengan Next.js, React.js, Laravel, dan Go. Lihat proyek, pengalaman, dan kontak saya.",
  keywords: [
    "Muhammad Zaki Dzulfikar",
    "Web Developer",
    "Fullstack Developer",
    "Next.js",
    "React.js",
    "Laravel",
    "Portfolio",
    "Unsoed",
    "Informatika",
  ],
  authors: [
    { name: "Muhammad Zaki Dzulfikar", url: "https://github.com/JackBerck" },
  ],
  creator: "Muhammad Zaki Dzulfikar",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zaki-dzulfikar.vercel.app",
    title: "Muhammad Zaki Dzulfikar | Fullstack Web Developer",
    description:
      "Portfolio profesional Muhammad Zaki Dzulfikar — Fullstack Web Developer & UI/UX Designer dari Universitas Jenderal Soedirman.",
    siteName: "Zaki Dzulfikar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zaki Dzulfikar | Fullstack Web Developer",
    description:
      "Portfolio profesional Muhammad Zaki Dzulfikar — Fullstack Web Developer & UI/UX Designer.",
    creator: "@zakidzlfkr_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased font-[var(--font-inter)] bg-[#0a0a0a] text-[#f0f0f0]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
