import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const revalidate = 0; // Memastikan data selalu segar tanpa cache usang

export default async function AdminPaketPage() {
  // Tarik data paket dan hitung total rute secara paralel
  const travelPackages = await prisma.package.findMany({
    include: {
      _count: {
        select: { destinations: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const totalDestinations = await prisma.destination.count();

  return (
    <div className="space-y-7 animate-fade-in">
      {/* 📊 SECTION 1: HEADER & STATS WIDGET */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Dashboard Panel Admin</h1>
          <p className="text-xs text-slate-500 mt-0.5">Kelola katalog paket wisata dan linimasa rute harian SigerTrip.</p>
        </div>
        
        <Link
          href="/admin/paket/tambah"
          className="inline-flex items-center justify-center bg-[#f78232] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-sm shadow-orange-500/20 self-start md:self-auto"
        >
          ➕ Tambah Paket Baru
        </Link>
      </div>

      {/* GRID METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Paket Wisata</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-black text-slate-900">{travelPackages.length}</span>
            <span className="text-xs font-semibold text-slate-500">Katalog</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Titik Rute</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-black text-slate-900">{totalDestinations}</span>
            <span className="text-xs font-semibold text-slate-500">Lokasi Tersebar</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between bg-gradient-to-br from-orange-50/30 to-transparent">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Status Database</span>
          <div className="flex items-center gap-2 mt-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700">PostgreSQL Terhubung</span>
          </div>
        </div>
      </div>

      {/* 📋 SECTION 2: MODERN CARD TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">📋 Daftar Katalog Aktif</h3>
        </div>

        {travelPackages.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-xs font-medium">
            Belum ada paket wisata di database. Klik &quot;Tambah Paket Baru&quot; untuk memulai.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/30">
                  <th className="py-3.5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-24">Kategori</th>
                  <th className="py-3.5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nama Paket Perjalanan</th>
                  <th className="py-3.5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-28">Durasi</th>
                  <th className="py-3.5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-32">Harga Mulai</th>
                  <th className="py-3.5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-48 text-center">Aksi Operasional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {travelPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/40 transition-colors group">
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-1 rounded-lg font-bold text-[10px] ${
                        pkg.category === "Kuliner" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                        pkg.category === "Alam" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                        "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>
                        {pkg.category === "Kuliner" ? "🍱 " : pkg.category === "Alam" ? "🏔️ " : "🏙️ "}
                        {pkg.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 group-hover:text-[#f78232] transition-colors">{pkg.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">ID: {pkg.id}</div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-600">
                      {pkg.duration} Hari
                      <span className="block text-[10px] text-slate-400 font-normal">{pkg._count.destinations} titik rute</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-700">{pkg.basePrice}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-1.5">
                        <Link
                          href={`/admin/paket/${pkg.id}/rute`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:text-[#f78232] transition-all duration-200 bg-white font-bold text-[11px] active:scale-[0.95]"
                        >
                          📍 Rute
                        </Link>
                        <Link
                          href={`/admin/paket/edit/${pkg.id}`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 bg-white font-semibold text-[11px] active:scale-[0.95]"
                        >
                          ✏️ Edit
                        </Link>
                        <DeleteButton packageId={pkg.id} packageTitle={pkg.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}