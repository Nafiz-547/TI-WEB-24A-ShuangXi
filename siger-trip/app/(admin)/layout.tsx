import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* SIDEBAR ADMIN (MINIMALIS & PROFESIONAL) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800">
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h2 className="text-lg font-black text-white tracking-wider flex items-center gap-2">
            ⚡ SIGERTRIP <span className="text-xs bg-[#f78232] text-white px-2 py-0.5 rounded font-bold">ADMIN</span>
          </h2>
          <p className="text-[10px] text-slate-500 mt-1 uppercase font-semibold tracking-wider">UKM Programming Protek</p>
        </div>

        {/* MENU NAVIGASI INTERNAL ADMIN */}
        <nav className="flex-1 p-4 space-y-1.5 text-sm font-medium">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800 text-white transition-colors">
            📊 Dashboard Ringkasan
          </Link>
          <Link href="/admin/paket" className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-colors text-slate-400">
            📦 Kelola Paket Wisata
          </Link>
          
          <div className="pt-4 border-t border-slate-800 mt-4">
            <Link href="/destinasi" target="_blank" className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-800 text-slate-400 text-xs transition-colors">
              🌐 Lihat Web Publik ↗
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800 text-[11px] text-slate-600 text-center bg-slate-950">
          SigerTrip Engine v1.0 • 2026
        </div>
      </aside>

      {/* KONTEN UTAMA DOCK */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}