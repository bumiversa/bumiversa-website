// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BUMIVERSA | Website Profil Bisnis & Organisasi",
    template: "%s | BUMIVERSA",
  },
  description: "Kami membantu bisnis dan organisasi membangun website profil yang modern, terstruktur, dan dirancang untuk membangun kepercayaan digital. Problem-first, bukan template-first.",
  metadataBase: new URL("https://website.bumiversa.dev"),
  alternates: {
    canonical: "https://website.bumiversa.dev",
  },
  icons: {
    icon: '/bumiversa_favicon.png',
    apple: '/bumiversa_favicon.png', // Fallback untuk perangkat Apple
  },
  openGraph: {
    title: "BUMIVERSA | Website Profil Bisnis & Organisasi",
    description: "Kami membantu bisnis dan organisasi membangun website profil yang modern, terstruktur, dan dirancang untuk membangun kepercayaan digital.",
    type: "website",
    locale: "id_ID",
    siteName: "BUMIVERSA",
    images: [
      {
        url: '/og-image.png', // Path relatif terhadap folder public/
        width: 1200,
        height: 630,
        alt: 'BUMIVERSA - Website Profil Bisnis & Organisasi',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUMIVERSA | Website Profil Bisnis & Organisasi",
    description: "Kami membantu bisnis dan organisasi membangun website profil yang modern, terstruktur, dan dirancang untuk membangun kepercayaan digital.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-850 flex flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
