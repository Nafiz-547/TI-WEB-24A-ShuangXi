import { prisma } from "@/lib/prisma";
import Image from 'next/image';
import Link from 'next/link';

export default async function CatalogPage() {
  // 1. Ambil semua data paket dari database PostgreSQL
  const packages = await prisma.package.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <span className="text-sm font-bold text-[#f78232] tracking-widest uppercase bg-orange-50 px-3 py-1 rounded-full">
          Katalog Perjalanan
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">
          Pilih Paket Wisata <span className="text-[#f78232]">SigerTrip</span>
        </h1>
        <p className="text-slate-600 mt-2">Bundel itinerary terstruktur rancangan pemandu lokal Lampung</p>
      </div>

      {/* GRID DAFTAR PAKET */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col lg:flex-row"
          >
            {/* Banner Utama Paket */}
            <div className="relative h-48 lg:h-auto lg:w-2/5 min-h-[200px] overflow-hidden group">
              <Image 
                src={
                  pkg.image
                    ? pkg.image.replace('public', '').replace(/\\/g, '/')
                    : "/images/placeholder.jpg"
                } 
                alt={pkg.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#f78232] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {pkg.category}
              </div>
            </div>

            {/* Informasi Detail Paket */}
            <div className="p-6 flex flex-col justify-between lg:w-3/5">
              <div>
                  <div className="flex items-center gap-2 text-xs text-[#334155] mb-1">
                    <span>⏱️ {pkg.duration} Hari Perjalanan</span>
                  </div>
                  <h3 className="card-title text-xl mb-2 hover:text-[#f78232] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="card-desc text-sm line-clamp-3 mb-4">
                    {pkg.description}
                  </p>
              </div>

              {/* Harga & Tombol Aksi */}
              <div className="flex justify-between items-center border-t pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Mulai Dari</p>
                  <span className="text-lg font-extrabold text-[#f78232]">{pkg.basePrice}</span>
                </div>
                {/* Link menuju halaman detail itinerary per hari */}
                <Link 
                  href={`/destinasi/${pkg.id}`} 
                  className="bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#f78232] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-200"
                >
                  Lihat Itinerary →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}