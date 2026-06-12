import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboardPage() {
  // Ambil metrik statistik langsung dari PostgreSQL lewat Prisma
  const totalPackages = await prisma.package.count();
  const totalDestinations = await prisma.destination.count();

  return (
    <div className="space-y-6">
      {/* HEADER UTAMA */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-900">
          Selamat Datang, Lead Admin Nafiz! 👋
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Pantau, tambah, dan modifikasi seluruh katalog rute lini masa
          SigerTrip dari satu panel kendali terpusat.
        </p>
      </div>

      {/* KARTU STATISTIK DATA RIIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* KARTU TOTAL PAKET */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Paket Wisata
            </p>
            <h3 className="text-3xl font-black text-slate-800 mt-1">
              {totalPackages} Paket
            </h3>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Telah aktif tayang di katalog publik
            </p>
          </div>
          <span className="text-3xl bg-blue-50 p-4 rounded-2xl text-blue-500">
            📦
          </span>
        </div>

        {/* KARTU TOTAL DESTINASI */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Pemberhentian (Rute)
            </p>
            <h3 className="text-3xl font-black text-slate-800 mt-1">
              {totalDestinations} Titik
            </h3>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Tersebar di seluruh linimasa harian paket
            </p>
          </div>
          <span className="text-3xl bg-orange-50 p-4 rounded-2xl text-[#f78232]">
            🗺️
          </span>
        </div>
      </div>

      {/* PANEL AKSES CEPAT AKSI */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
          Aksi Cepat Manajemen
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/paket"
            className="bg-[#f78232] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/10"
          >
            ⚙️ Mulai Kelola & CRUD Paket Wisata
          </Link>
        </div>
      </div>
    </div>
  );
}
