import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // <-- 1. Import komponen Navbar yang baru

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SigerTrip | Gerbang Petualangan Lampung",
  description: "SigerTrip membantu Anda merancang perjalanan wisata Lampung yang nyaman, otentik, dan berkesan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> {/* Mengubah lang ke "id" karena website berbahasa Indonesia */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        
        {/* 2. Panggil komponen Navbar di sini (Menggantikan header lama & tag <menu />) */}
        <Navbar />

        {/* Konten Utama Halaman */}
        <main className="content">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          Copyright &copy; 2026 - SigerTrip. All rights reserved.
        </footer>

      </body>
    </html>
  );
}