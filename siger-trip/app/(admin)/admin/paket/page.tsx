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
    <div className="space-y-6">
      
      {/* 🚀 BAR PANEL AKSI */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-100/40">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Katalog Paket Wisata</h1>
          <p className="text-xs text-slate-500 mt-0.5">Modul CRUD master data perjalanan regional Lampung.</p>
        </div>
        <Link
          href="/admin/paket/tambah"
          className="bg-[#f78232] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all shadow-sm shadow-orange-500/10 text-center"
        >
          ➕ Daftarkan Paket Baru
        </Link>
      </div>

      {/* 📈 PANEL INDIKATOR KINERJA */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Paket Terdaftar</span>
          <p className="text-2xl font-black text-slate-900 mt-1">{travelPackages.length} <span className="text-xs font-semibold text-slate-400">Unit</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Rute Terintegrasi</span>
          <p className="text-2xl font-black text-slate-900 mt-1">{totalDestinations} <span className="text-xs font-semibold text-slate-400">Pemberhentian</span></p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Infrastruktur Data</span>
          <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border px-2.5 py-1 rounded-lg self-start">
            🛢️ PostgreSQL x Prisma Client
          </span>
        </div>
      </div>

      {/* 📋 TABEL DATA UTAMA */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-100/40 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">📋 Lembar Induk Informasi</h3>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-bold">Terbaca: {travelPackages.length} Baris</span>
        </div>

        {travelPackages.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-xs font-medium">
            Sistem belum mendeteksi data paket perjalanan aktif.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/20 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-6 w-28">Kategori</th>
                  <th className="py-3.5 px-6">Nama Paket & Kode Unik</th>
                  <th className="py-3.5 px-6 w-36">Durasi Kerja</th>
                  <th className="py-3.5 px-6 w-36">Valuasi Dasar</th>
                  <th className="py-3.5 px-6 w-44 text-center">Aksi Manajemen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {travelPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wide border ${
                        pkg.category === "Kuliner" ? "bg-amber-50 text-amber-700 border-amber-200" :
                        pkg.category === "Alam" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                        "bg-blue-50 text-blue-700 border-blue-200"
                      }`}>
                        {pkg.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-extrabold text-slate-900 text-sm group-hover:text-[#f78232] transition-colors">{pkg.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{pkg.id}</div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-600">
                      ⏱️ {pkg.duration} Hari
                      <span className="block text-[10px] text-slate-400 font-normal mt-0.5">{pkg._count.destinations} Rute Terjadwal</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">{pkg.basePrice}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-1.5">
                        <Link
                          href={`/admin/paket/${pkg.id}/rute`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-orange-500 hover:text-[#f78232] transition-all bg-white font-bold text-[11px]"
                        >
                          📍 Rute
                        </Link>
                        <Link
                          href={`/admin/paket/edit/${pkg.id}`}
                          className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all bg-white font-semibold text-[11px]"
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