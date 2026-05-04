import { destinations } from '@/data/destinations';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function DetailPage({ params }: { params: { id: string } }) {
  const data = destinations.find((item) => item.id === params.id);

  if (!data) return notFound();

  return (
    <div className="min-h-screen bg-white">
      
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image src="{data.image}" alt="{data.name}" fill className="object-cover"/>
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="p-8 md:p-16 text-white">
            <span className="bg-[#f78232] px-4 py-1 rounded-full text-sm font-bold">Hari ke-{data.day}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4">{data.name}</h1>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Tentang Destinasi</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{data.description}</p>
          </div>
          <div className="w-full md:w-80 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg mb-4">Informasi Trip</h3>
            <div className="space-y-3 text-sm">
              <p>📍 <span className="font-semibold">Lokasi:</span> {data.location}</p>
              <p>💰 <span className="font-semibold">Estimasi:</span> {data.price}</p>
              <p>🚗 <span className="font-semibold">Transport:</span> Penjemputan Bakauheni</p>
            </div>
            <button className="w-full mt-6 bg-[#f78232] text-white py-3 rounded-xl font-bold hover:bg-[#e06d1f] transition-all">
              Booking Lewat WA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}