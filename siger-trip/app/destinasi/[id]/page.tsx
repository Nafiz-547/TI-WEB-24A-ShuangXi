import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe params sebagai Promise sesuai standar Next.js 15 & 16
type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ day?: string }>;

export default async function PackageDetailPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  // 1. Unwrap params dan searchParams menggunakan await
  const { id } = await params;
  const { day } = await searchParams;
  
  // Jika tidak ada query ?day=X di URL, otomatis default ke Hari ke-1
  const selectedDay = day ? parseInt(day) : 1; 

  // 2. Ambil data Paket beserta Destinasi yang hanya sesuai hari yang dipilih
  const travelPackage = await prisma.package.findUnique({
    where: { id },
    include: {
      destinations: {
        where: { day: selectedDay },
        orderBy: { createdAt: 'asc' } // Urutkan berdasarkan urutan input destinasi
      }
    }
  });

  // Jika ID paket salah atau tidak ada di database, tampilkan halaman 404
  if (!travelPackage) return notFound();

  // Membuat array angka untuk tombol hari berdasarkan durasi paket (misal durasi 3 = [1, 2, 3])
  const totalDays = Array.from({ length: travelPackage.duration }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* BANNER UTAMA PAKET WISATA */}
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

      {/* KONTEN UTAMA & FILTER LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SIDEBAR TABS: FILTER JADWAL HARI (UI/UX Khas Itinerary) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1">
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

            {/* INFO BUDGET & CALL TO ACTION */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Harga Paket Mulai</p>
              <p className="text-2xl font-black text-[#f78232] mt-0.5">{travelPackage.basePrice}</p>
              <button className="w-full mt-4 bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                💬 Pesan Paket Jasa via WA
              </button>
            </div>
          </div>

          {/* DAFTAR TEMPAT WISATA PADA HARI YANG DIPILIH */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Rencana Kunjungan Hari ke-{selectedDay}
              </h2>
              <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md font-semibold">
                {travelPackage.destinations.length} Destinasi Terjadwal
              </span>
            </div>

            {/* Jika hari yang diklik belum dimasukkan datanya di Prisma */}
            {travelPackage.destinations.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 px-4">
                <span className="text-3xl block mb-2">🏖️</span>
                <p className="text-slate-400 text-sm font-medium">Belum ada rute destinasi wisata yang di-input untuk hari ini.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {travelPackage.destinations.map((dest, index) => (
                  <div 
                    key={dest.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col sm:flex-row"
                  >
                    {/* Foto Destinasi */}
                    <div className="relative h-48 sm:h-auto sm:w-1/3 min-h-[150px]">
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
                    
                    {/* Detail Informasi Destinasi */}
                    <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                      <div>
                        <h4 className="card-title text-lg">{dest.name}</h4>
                        <p className="card-desc text-xs mt-0.5">📍 {dest.location}</p>
                        <p className="card-desc text-xs md:text-sm mt-3 leading-relaxed line-clamp-3">
                          {dest.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between items-center text-xs text-slate-500">
                        <span>Estimasi Tiket Masuk: <strong className="text-[#f78232]">{dest.price}</strong></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}