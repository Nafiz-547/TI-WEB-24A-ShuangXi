import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RuteForm from "./RuteForm";
import DeleteRuteButton from "./DeleteRuteButton";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ edit?: string }>;

export default async function AdminManagementRutePage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await params;
  const { edit } = await searchParams; // Ambil ID rute yang mau diedit dari URL

  // 1. Tarik data paket beserta seluruh rutenya
  const travelPackage = await prisma.package.findUnique({
    where: { id },
    include: {
      // CARI BARIS INI DI FILE page.tsx KELOLA RUTE:
      destinations: {
        orderBy: [{ day: "asc" }, { sortOrder: "asc" }, { createdAt: "asc" }], 
      },
    },
  });

  if (!travelPackage) return notFound();

  // 2. Jika ada query ?edit=ID, cari data lama rute tersebut untuk dilempar ke form
  const editData = edit
    ? await prisma.destination.findUnique({ where: { id: edit } })
    : null;

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
        {/* KOLOM KIRI: DAFTAR RUTE */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
            📍 Daftar Titik Rute Aktif
          </h3>

          {travelPackage.destinations.length === 0 ? (
            <div className="bg-white text-center py-12 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs">
              Belum ada rute perjalanan yang ditambahkan.
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden divide-y divide-slate-100">
              {travelPackage.destinations.map((dest) => {
                const isBeingEdited = edit === dest.id;
                return (
                  <div
                    key={dest.id}
                    className={`p-4 flex gap-4 items-start transition-colors ${isBeingEdited ? "bg-orange-50/40 border-l-4 border-l-[#f78232]" : "hover:bg-slate-50/50"}`}
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

                    {/* TOMBOL AKSI RUTE */}
                    <div className="flex items-center gap-1 self-center">
                      <Link
                        href={`/admin/paket/${id}/rute?edit=${dest.id}`}
                        className="text-xs p-2 text-slate-400 hover:text-blue-500 rounded-lg border border-transparent hover:border-slate-200 transition-all active:scale-[0.95]"
                        title="Edit Titik Rute"
                      >
                        ✏️
                      </Link>
                      <DeleteRuteButton id={dest.id} name={dest.name} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* KOLOM KANAN: FORM DINAMIS (BISA TAMBAH / EDIT) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 lg:sticky lg:top-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
            {editData ? "✏️ Edit Titik Rute" : "➕ Tambah Titik Rute"}
          </h3>
          {/* Trik Reset State React menggunakan atribut 'key' */}
          <RuteForm
            key={editData ? editData.id : "tambah-mode"}
            packageId={travelPackage.id}
            totalDays={travelPackage.duration}
            editData={editData}
          />
        </div>
      </div>
    </div>
  );
}
