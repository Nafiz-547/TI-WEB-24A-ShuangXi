import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export const revalidate = 0;

export default async function AdminPaketPage() {
  const travelPackages = await prisma.package.findMany({
    include: {
      _count: { select: { destinations: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const totalDestinations = await prisma.destination.count();

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-2">
      {/* SECTION HEADER UTAMA */}
      <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <span className="text-[10px] font-extrabold text-[#f78232] uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md">Internal Sistem</span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-2">SigerTrip Management Console</h1>
          <p className="text-xs text-slate-500 mt-1">Sistem kontrol data backend untuk pembaruan paket wisata dan destinasi regional.</p>
        </div>
        <Link
          href="/admin/paket/tambah"
          className="bg-[#f78232] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all shadow-sm shadow-orange-500/10 text-center"
        >
          ➕ Daftarkan Paket Baru
        </Link>
      </div>

      {/* GRID STATISTIK SISTEM (Padat & Informatif) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Katalog Aktif</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{travelPackages.length} <span className="text-xs font-normal text-slate-400">Unit Paket</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Titik Destinasi terikat</p>
          <p className="text-2xl font-black text-slate-900 mt-1">{totalDestinations} <span className="text-xs font-normal text-slate-400">Pemberhentian</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Engine Relasi</p>
          <p className="text-xs font-bold text-slate-700 mt-2.5 bg-slate-100 px-2 py-1 rounded-md inline-block">Prisma Client v7</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm bg-gradient-to-br from-slate-50 to-white">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Koneksi Database</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800">PostgreSQL Cloud / Local</span>
          </div>
        </div>
      </div>

      {/* TABEL DATA INDUK */}
      <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Master Data Paket Perjalanan</h2>
          <span className="text-[10px] bg-slate-200/60 text-slate-600 px-2.5 py-0.5 rounded-full font-bold">Terbaca: {travelPackages.length} Baris</span>
        </div>

        {travelPackages.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-xs font-medium bg-slate-50/20">
            📭 Basis data kosong. Silakan gunakan opsi tambah paket di atas untuk mengisi data baru.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/40 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6 w-28">Kategori</th>
                  <th className="py-4 px-6">Identitas & Nama Paket</th>
                  <th className="py-4 px-6 w-36">Durasi Operasional</th>
                  <th className="py-4 px-6 w-36">Nilai Valuasi (Mulai)</th>
                  <th className="py-4 px-6 w-44 text-center">Aksi Manajemen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {travelPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-1 rounded-md font-bold text-[9px] uppercase tracking-wide ${
                        pkg.category === "Kuliner" ? "bg-amber-50 text-amber-700 border border-amber-200/60" :
                        pkg.category === "Alam" ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" :
                        "bg-blue-50 text-blue-700 border border-blue-200/60"
                      }`}>
                        {pkg.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-extrabold text-slate-900 text-sm">{pkg.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{pkg.id}</div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-600">
                      ⏱️ {pkg.duration} Hari
                      <span className="block text-[10px] text-slate-400 font-normal mt-0.5">{pkg._count.destinations} Titik Terjadwal</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">{pkg.basePrice}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-1.5">
                        <Link
                          href={`/admin/paket/${pkg.id}/rute`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:text-[#f78232] transition-all bg-white font-bold text-[11px] active:scale-[0.95]"
                        >
                          📍 Rute
                        </Link>
                        <Link
                          href={`/admin/paket/edit/${pkg.id}`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all bg-white font-semibold text-[11px] active:scale-[0.95]"
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