import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RuteForm from "./RuteForm";
import DeleteRuteButton from "./DeleteRuteButton";

type Params = Promise<{ id: string }>;

export default async function AdminManagementRutePage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  // Tarik data paket beserta seluruh rute destinasinya, urutkan berdasarkan hari dan waktu dibuat
  const travelPackage = await prisma.package.findUnique({
    where: { id },
    include: {
      destinations: {
        orderBy: [{ day: "asc" }, { createdAt: "asc" }],
      },
    },
  });

  if (!travelPackage) return notFound();

  return (
    <div className="space-y-8">
      {/* HEADER NAVIGASI */}
      <div>
        <Link
          href="/admin/paket"
          className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors"
        >
          ← Kembali ke Manajemen Paket
        </Link>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-2">
          Kelola Rute Linimasa
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Paket:{" "}
          <strong className="text-slate-700 font-semibold">
            {travelPackage.title}
          </strong>{" "}
          ({travelPackage.duration} Hari)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* KOLOM KIRI: DAFTAR RUTE YANG SUDAH ADA */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            📍 Daftar Titik Rute Aktif
          </h3>

          {travelPackage.destinations.length === 0 ? (
            <div className="bg-white text-center py-12 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs">
              Belum ada rute perjalanan yang ditambahkan untuk paket ini.
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden divide-y divide-slate-100">
              {travelPackage.destinations.map((dest) => (
                <div
                  key={dest.id}
                  className="p-4 flex gap-4 items-start hover:bg-slate-50/50 transition-colors"
                >
                  <div className="relative h-16 w-20 rounded-xl overflow-hidden bg-slate-100 border shrink-0">
                    <Image
                      src={dest.image || "/images/placeholder.jpg"}
                      alt={dest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-orange-50 text-[#f78232] border border-orange-100 px-2 py-0.5 rounded-md font-bold text-[10px]">
                        📅 Hari {dest.day}
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold text-[10px]">
                        {dest.category}
                      </span>
                      <span className="text-[11px] text-slate-400 truncate max-w-37.5">
                        📍 {dest.location}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">
                      {dest.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {dest.description}
                    </p>
                    <p className="text-[10px] text-[#f78232] font-bold mt-1">
                      Biaya: {dest.price}
                    </p>
                  </div>

                  {/* Tombol Hapus Rute Instan */}
                  <DeleteRuteButton id={dest.id} name={dest.name} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* KOLOM KANAN: FORM INPUT TAMBAH RUTE BARU */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 lg:sticky lg:top-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
            ➕ Tambah Titik Rute
          </h3>
          <RuteForm
            packageId={travelPackage.id}
            totalDays={travelPackage.duration}
          />
        </div>
      </div>
    </div>
  );
}
