import { prisma } from "@/lib/prisma";
import Image from 'next/image';
import Link from 'next/link';

export default async function ExplorePage() {
  // 1. Ambil data asli dari PostgreSQL via Prisma
  const destinations = await prisma.destination.findMany({
    orderBy: {
      day: 'asc', // Urutkan berdasarkan hari agar rapi
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Jelajah Destinasi <span className="text-[#f78232]">SigerTrip</span>
        </h1>
        <p className="text-slate-600 mt-2">Data ini diambil langsung dari PostgreSQL!</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item) => (
          <Link href={`/destinasi/${item.id}`} key={item.id} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute top-4 left-4 bg-[#f78232] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Day {item.day}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#f78232]">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 mb-2">{item.location}</p>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="font-bold text-[#f78232]">{item.price}</span>
                  <span className="text-sm text-blue-600 font-semibold">Lihat Detail →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}