import { prisma } from "@/lib/prisma";
import Image from 'next/image';
import Link from 'next/link';

// Di Next.js 15 & 16, searchParams sifatnya asynchronous (Promise)
type SearchParams = Promise<{ day?: string }>;

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // 1. Ambil query '?day=X' dari URL
  const { day } = await searchParams;
  const selectedDay = day ? parseInt(day) : undefined;

  // 2. Ambil data dari PostgreSQL dengan filter kondisional
  const destinations = await prisma.destination.findMany({
    where: selectedDay ? { day: selectedDay } : {}, // Jika selectedDay ada, filter berdasarkan hari. Jika tidak, ambil semua.
    orderBy: {
      createdAt: 'desc', // Menampilkan data yang baru dimasukkan di urutan teratas
    },
  });

  // Array untuk generate tombol filter Hari 1 sampai Hari 7
  const availableDays = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Jelajah Destinasi <span className="text-[#f78232]">SigerTrip</span>
        </h1>
        <p className="text-slate-600 mt-2">Rencanakan petualangan terbaikmu di Lampung</p>
      </div>

      {/* FILTER BUTTONS NAVIGATION (UI/UX Friendly) */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
        {/* Tombol Semua Hari */}
        <Link
          href="/destinasi"
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
            !selectedDay
              ? 'bg-[#f78232] text-white border-[#f78232] shadow-md shadow-orange-500/20'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Semua Hari
        </Link>

        {/* Tombol Hari 1 - 7 */}
        {availableDays.map((d) => (
          <Link
            key={d}
            href={`/destinasi?day=${d}`}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              selectedDay === d
                ? 'bg-[#f78232] text-white border-[#f78232] shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Hari {d}
          </Link>
        ))}
      </div>

      {/* EMPTY STATE (Jika Hari yang dipilih belum ada datanya) */}
      {destinations.length === 0 && (
        <div className="max-w-md mx-auto text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
          <div className="text-4xl mb-3">🏝️</div>
          <h3 className="text-lg font-bold text-slate-800">Belum Ada Destinasi</h3>
          <p className="text-slate-500 text-sm mt-1">
            Paket wisata untuk <span className="font-semibold text-[#f78232]">Hari {selectedDay}</span> sedang dipersiapkan oleh tim SigerTrip.
          </p>
          <Link href="/destinasi" className="inline-block mt-4 text-sm font-bold text-blue-600 hover:underline">
            ← Kembali lihat semua hari
          </Link>
        </div>
      )}

      {/* DESTINATIONS GRID */}
      {destinations.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <Link href={`/destinasi/${item.id}`} key={item.id} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={
                      item.image
                        ? item.image.replace('public', '').replace(/\\/g, '/')
                        : "/images/placeholder.jpg"
                    } 
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#f78232] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    Hari {item.day}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#f78232] transition-colors duration-200 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 flex items-center gap-1">
                    📍 {item.location}
                  </p>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center border-t pt-4 mt-auto">
                    <div>
                      <p className="text-xs text-slate-400">Estimasi Biaya</p>
                      <span className="font-bold text-[#f78232]">{item.price}</span>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-600 font-bold px-3 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      Detail Trip →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}