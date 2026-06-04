import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

export default async function AdminPaketPage() {
  // Tarik semua data paket dari database, urutkan dari yang terbaru
  const packages = await prisma.package.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* HEADER & TOMBOL TAMBAH */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            Kelola Paket Wisata
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Daftar seluruh paket tur SigerTrip yang aktif dan ditayangkan.
          </p>
        </div>
        <Link
          href="/admin/paket/tambah"
          className="bg-[#f78232] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/10 text-center"
        >
          ➕ Tambah Paket Baru
        </Link>
      </div>

      {/* TABEL DATA PAKET */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        {packages.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-xs">
            Belum ada paket wisata di database. Klik "Tambah Paket Baru" untuk
            memulai.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6 w-20">Banner</th>
                  <th className="py-4 px-6">Nama Paket</th>
                  <th className="py-4 px-6">Kategori</th>
                  <th className="py-4 px-6">Durasi</th>
                  <th className="py-4 px-6">Harga Mulai</th>
                  <th className="py-4 px-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                {packages.map((pkg) => (
                  <tr
                    key={pkg.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    {/* Kolom Gambar */}
                    <td className="py-4 px-6">
                      <div className="relative h-12 w-16 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                        <Image
                          src={pkg.image || "/images/placeholder.jpg"}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    {/* Kolom Judul */}
                    <td className="py-4 px-6">
                      <span className="font-bold text-slate-900 block">
                        {pkg.title}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5 max-w-xs truncate">
                        {pkg.description}
                      </span>
                    </td>
                    {/* Kolom Kategori */}
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 border border-slate-200 text-slate-600">
                        {pkg.category}
                      </span>
                    </td>
                    {/* Kolom Durasi */}
                    <td className="py-4 px-6 font-semibold text-slate-600">
                      {pkg.duration} Hari
                    </td>
                    {/* Kolom Harga */}
                    <td className="py-4 px-6 font-bold text-[#f78232]">
                      {pkg.basePrice}
                    </td>
                    {/* Kolom Tombol Aksi */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/admin/paket/edit/${pkg.id}`}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white font-semibold text-[11px]"
                        >
                          ✏️ Edit
                        </Link>
                        <DeleteButton
                          packageId={pkg.id}
                          packageTitle={pkg.title}
                        />
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
