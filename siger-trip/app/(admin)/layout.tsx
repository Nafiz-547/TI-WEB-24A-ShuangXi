import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans">
      {/* SUB-HEADER ADMIN (Formal & Minimalis) */}
      <div className="w-full bg-slate-900 text-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-black tracking-wider text-xs uppercase bg-[#f78232] px-2 py-0.5 rounded text-white">
              Admin
            </span>
            <span className="text-xs font-bold text-slate-300">
              SigerTrip Konsol Manajemen Data
            </span>
          </div>
          <div className="text-[11px] text-slate-400 font-medium">
            Status: System Online
          </div>
        </div>
      </div>

      {/* AREA KONTEN UTAMA (Terpusat di Tengah, Tidak Melebar Kosong) */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}