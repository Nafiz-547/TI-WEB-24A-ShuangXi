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

  return (
    <div className="space-y-6">
      {/* KONSOL HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Katalog Paket Wisata
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Modul pengisian, pembaruan, dan penghapusan data paket perjalanan SigerTrip.
          </p>
        </div>
        <Link
          href="/admin/paket/tambah"
          className="bg-[#f78232] text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-orange-600 active:scale-[0.98] transition-all text-center h-fit shadow-sm shadow-orange-500/10"
        >
          ➕ Tambah Paket Baru
        </Link>
      </div>

      {/* TABEL MASTER DATA (Formal & Padat) */}
      <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            📋 Database Rute & Paket Active
          </span>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-md font-bold">
            Total: {travelPackages.length} Paket
          </span>
        </div>

        {travelPackages.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-xs font-medium">
            Belum ada paket wisata terdaftar. Silakan tambah paket baru.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/30 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-6 w-24">Kategori</th>
                  <th className="py-3 px-6">Nama Paket</th>
                  <th className="py-3 px-6 w-32">Durasi</th>
                  <th className="py-3 px-6 w-32">Harga Base</th>
                  <th className="py-3 px-6 w-44 text-center">Aksi Operasional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {travelPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50/30 transition-colors">
                    <td className="py-3.5 px-6">
                      <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide ${
                        pkg.category === "Kuliner" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                        pkg.category === "Alam" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                        "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}>
                        {pkg.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="font-bold text-slate-900 text-sm">{pkg.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{pkg.id}</div>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-600">
                      ⏳ {pkg.duration} Hari
                      <span className="block text-[10px] text-slate-400 font-normal mt-0.5">
                        {pkg._count.destinations} Titik Jalur
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-bold text-slate-800">
                      {pkg.basePrice}
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center justify-center gap-1">
                        <Link
                          href={`/admin/paket/${pkg.id}/rute`}
                          className="px-2 py-1 rounded border border-slate-200 hover:border-orange-500 hover:text-[#f78232] bg-white font-bold text-[10px] transition-all"
                          title="Kelola detail rute linimasa"
                        >
                          📍 Rute
                        </Link>
                        <Link
                          href={`/admin/paket/edit/${pkg.id}`}
                          className="px-2 py-1 rounded border border-slate-200 hover:border-blue-500 hover:text-blue-600 bg-white font-semibold text-[10px] transition-all"
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