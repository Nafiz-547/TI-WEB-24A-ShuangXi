import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ day?: string }>;

export default async function PackageDetailPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  // 1. Ambil ID Paket dan Query Hari dari URL
  const { id } = await params;
  const { day } = await searchParams;
  
  const selectedDay = day ? parseInt(day) : 1; 

  // 2. Ambil data Paket SEKALIGUS Destinasi, Restoran, dan Penginapan (Relasi)
  const travelPackage = await prisma.package.findUnique({
    where: { id },
    include: {
      destinations: {
        where: { day: selectedDay },
        orderBy: { createdAt: 'asc' }
      },
      restaurants: true, // Ambil semua rekomendasi tempat makan untuk paket ini
      lodgings: true,    // Ambil semua rekomendasi penginapan untuk paket ini
    }
  });

  if (!travelPackage) return notFound();

  const totalDays = Array.from({ length: travelPackage.duration }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* HERO BANNER */}
      <div className="relative h-[35vh] md:h-[45vh] w-full bg-slate-900">
        <Image
          src={travelPackage.image || "/images/placeholder.jpg"}
          alt={travelPackage.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 max-w-6xl mx-auto text-white">
          <span className="bg-[#f78232] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {travelPackage.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-3 tracking-tight">
            {travelPackage.title}
          </h1>
          <p className="text-slate-300 mt-2 max-w-2xl text-xs md:text-sm line-clamp-2">
            {travelPackage.description}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SIDEBAR: FILTER HARI & INFO ORDER */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1 sticky top-6">
            <h3 className="font-bold text-slate-800 text-base mb-4">Rute Perjalanan</h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {totalDays.map((d) => (
                <Link
                  key={d}
                  href={`/destinasi/${id}?day=${d}`}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 block text-center lg:text-left whitespace-nowrap flex-1 lg:flex-none ${
                    selectedDay === d
                      ? 'bg-[#f78232] text-white shadow-md shadow-orange-500/10'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  📅 Hari Ke- {d}
                </Link>
              ))}
            </div>

            {/* TOMBOL PESAN JASA TRAVEL (Dinamis ke WA Jasa Travel SigerTrip) */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Harga Paket Mulai</p>
              <p className="text-2xl font-black text-[#f78232] mt-0.5">{travelPackage.basePrice}</p>
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20Admin%20SigerTrip%2C%20saya%20tertarik%20untuk%20memesan%20Jasa%20Travel%20paket%3A%20${encodeURIComponent(travelPackage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2 text-sm text-center"
              >
                💬 Pesan Jasa Travel SigerTrip
              </a>
            </div>
          </div>

          {/* KONTEN UTAMA: DESTINASI, KULINER & HOTEL */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* 1. BAGIAN TEMPAT WISATA (PER HARI) */}
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <h2 className="text-lg font-bold text-slate-800">📍 Rencana Wisata Hari ke-{selectedDay}</h2>
                <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md font-semibold">
                  {travelPackage.destinations.length} Tempat Wisata
                </span>
              </div>

              {travelPackage.destinations.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-400 text-sm">Belum ada rute destinasi untuk hari ini.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {travelPackage.destinations.map((dest, index) => (
                    <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col sm:flex-row">
                      <div className="relative h-40 sm:h-auto sm:w-1/3 min-h-[120px]">
                        <Image
                          src={dest.image ? dest.image.replace('public', '').replace(/\\/g, '/') : "/images/placeholder.jpg"}
                          alt={dest.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#f78232] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                          {index + 1}
                        </div>
                      </div>
                      <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-bold text-slate-800">{dest.name}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">📍 {dest.location}</p>
                          <p className="text-slate-600 text-xs mt-2.5 leading-relaxed line-clamp-2">
                            {dest.description}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 border-t pt-2">Tiket Masuk: <strong className="text-[#f78232]">{dest.price}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. BAGIAN REKOMENDASI TEMPAT MAKAN (GLOBAL PAKET) */}
            <div>
              <div className="border-b pb-4 mb-6">
                <h2 className="text-lg font-bold text-slate-800">🍱 Rekomendasi Kuliner Khas</h2>
                <p className="text-xs text-slate-400 mt-0.5">Kuliner wajib coba selama mengambil paket trip ini</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {travelPackage.restaurants.map((rest) => (
                  <div key={rest.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                    <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={rest.image ? rest.image.replace('public', '').replace(/\\/g, '/') : "/images/placeholder.jpg"}
                        alt={rest.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-slate-800 text-sm">{rest.name}</h4>
                      <p className="text-xs text-[#f78232] font-semibold mt-0.5">⭐ Menu: {rest.menuStub}</p>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">📍 {rest.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. BAGIAN REKOMENDASI PENGINAPAN (GLOBAL PAKET) */}
            <div>
              <div className="border-b pb-4 mb-6">
                <h2 className="text-lg font-bold text-slate-800">🏨 Rekomendasi Penginapan Nyaman</h2>
                <p className="text-xs text-slate-400 mt-0.5">Opsi tempat istirahat terbaik di sekitar rute perjalanan</p>
              </div>

              <div className="space-y-3">
                {travelPackage.lodgings.map((lodge) => (
                  <div key={lodge.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-800 text-sm">{lodge.name}</h4>
                        <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded">
                          {lodge.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">📍 {lodge.location}</p>
                    </div>
                    <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0">
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Estimasi Tarif</p>
                      <p className="text-sm font-bold text-slate-700 mt-0.5">{lodge.priceRange}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}