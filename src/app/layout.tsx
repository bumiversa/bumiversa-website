// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BUMIVERSA | Website Profil Bisnis & Organisasi",
  description: "Kami membantu bisnis dan organisasi membangun website profil yang modern, terstruktur, dan dirancang untuk membangun kepercayaan digital.",
  metadataBase: new URL('https://website.bumiversa.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-850`}
      >
        {children}
      </body>
    </html>
  );
}
