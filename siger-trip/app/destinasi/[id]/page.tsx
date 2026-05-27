import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ day?: string }>;

export default async function PackageTimelinePage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { id } = await params;
  const { day } = await searchParams;
  
  const selectedDay = day ? parseInt(day) : 1; 

  const travelPackage = await prisma.package.findUnique({
    where: { id },
    include: {
      destinations: {
        where: { day: selectedDay },
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  if (!travelPackage) return notFound();

  const totalDays = Array.from({ length: travelPackage.duration }, (_, i) => i + 1);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Kuliner":
        return { bg: "bg-orange-50 text-orange-600 border-orange-200", icon: "🍱" };
      case "Penginapan":
        return { bg: "bg-purple-50 text-purple-600 border-purple-200", icon: "🏨" };
      default: 
        return { bg: "bg-blue-50 text-blue-600 border-blue-200", icon: "🏝️" };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* HERO BANNER */}
      <div className="relative h-[35vh] md:h-[40vh] w-full bg-slate-900">
        <Image
          src={travelPackage.image || "/images/placeholder.jpg"}
          alt={travelPackage.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 max-w-6xl mx-auto">
          <span className="bg-[#f78232] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
            {travelPackage.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mt-3 text-slate-800 tracking-tight">
            {travelPackage.title}
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        
        {/* 💡 TOMBOL KEMBALI KE KATALOG (UX ADDITION) */}
        <div className="mb-5">
          <Link
            href="/destinasi"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#f78232] transition-colors group"
          >
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-200 font-mono text-sm">
              ←
            </span>
            Kembali ke Katalog Destinasi
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SIDEBAR NAVIGATION HARI */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1 lg:sticky lg:top-6">
            <h3 className="font-bold text-slate-800 text-sm mb-4 uppercase tracking-wider">Pilih Hari Kunjungan</h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {totalDays.map((d) => (
                <Link
                  key={d}
                  href={`/destinasi/${id}?day=${d}`}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 block text-center lg:text-left ${
                    selectedDay === d
                      ? 'bg-[#f78232] text-white shadow-md shadow-orange-500/10'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  📅 Hari Ke- {d}
                </Link>
              ))}
            </div>

            {/* WA ORDER LINK */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Estimasi Biaya Paket</p>
              <p className="text-2xl font-black text-[#f78232]">{travelPackage.basePrice}</p>
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20Admin%20SigerTrip%2C%20saya%20tertarik%20untuk%20memesan%20Jasa%20Travel%20paket%3A%20${encodeURIComponent(travelPackage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs text-center"
              >
                💬 Ambil Jasa Travel SigerTrip
              </a>
            </div>
          </div>

          {/* TIMELINE ITINERARY */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 border-b pb-4 mb-6">
              🗺️ Rute Perjalanan Kronologis — Hari {selectedDay}
            </h2>

            {travelPackage.destinations.length === 0 ? (
              <div className="text-center py-12 border border-dashed rounded-xl text-slate-400 text-xs">
                Belum ada agenda rute titik kunjungan untuk hari ini.
              </div>
            ) : (
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                {travelPackage.destinations.map((dest, index) => {
                  const styles = getCategoryStyles(dest.category);
                  return (
                    <div key={dest.id} className="relative pl-6 md:pl-8 group">
                      
                      <span className="absolute -left-[11px] top-1.5 bg-white border-2 border-[#f78232] text-[#f78232] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black group-hover:bg-[#f78232] group-hover:text-white transition-colors duration-200">
                        {index + 1}
                      </span>

                      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col md:flex-row gap-5 hover:bg-white hover:shadow-md hover:border-slate-200/60 transition-all duration-200">
                        <div className="relative h-32 md:w-1/3 min-h-[120px] rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={dest.image ? dest.image.replace('public', '').replace(/\\/g, '/') : "/images/placeholder.jpg"}
                            alt={dest.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${styles.bg}`}>
                                {styles.icon} {dest.category}
                              </span>
                              <span className="text-[11px] text-slate-400">📍 {dest.location}</span>
                            </div>
                            <h4 className="font-bold text-slate-800 text-base group-hover:text-[#f78232] transition-colors">
                              {dest.name}
                            </h4>
                            <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                              {dest.description}
                            </p>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-4 border-t pt-2">
                            Estimasi Pengeluaran: <strong className="text-slate-700 font-semibold">{dest.price}</strong>
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}