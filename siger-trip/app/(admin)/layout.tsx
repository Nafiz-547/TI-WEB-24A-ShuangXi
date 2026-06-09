import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans">
      {/* SUB-HEADER ADMIN (Formal, Minimalis & Navigatif) */}
      <div className="w-full bg-slate-900 text-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* SISI KIRI: IDENTITAS (Bisa Diklik untuk Kembali ke Katalog Utama) */}
          <Link
            href="/admin/paket"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            title="Kembali ke Katalog Utama"
          >
            <span className="font-black tracking-wider text-xs uppercase bg-[#f78232] px-2 py-0.5 rounded text-white shadow-sm">
              Admin
            </span>
            <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
              SigerTrip Konsol Manajemen Data
            </span>
          </Link>

          {/* SISI KANAN: TOMBOL NAVIGASI KENDALI */}
          <div className="flex items-center gap-4 text-[11px] font-bold tracking-wide uppercase">
            <Link
              href="/admin"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              📁 Halaman Admin
            </Link>
            <span className="text-slate-700 font-normal">|</span>
            <Link
              href="/admin/paket"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              📁 Katalog Paket
            </Link>
            <span className="text-slate-700 font-normal">|</span>
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 normal-case font-medium"
            >
              🌐 Lihat Web Publik →
            </Link>
          </div>
        </div>
      </div>

      {/* AREA KONTEN UTAMA */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
