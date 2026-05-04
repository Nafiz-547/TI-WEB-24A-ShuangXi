import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        
        {/* 1. Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: "url('/hero-lampung.jpg')", // Ganti dengan nama file fotomu
          }}
        >
          {/* 2. Overlay Gelap (Agar teks terbaca jelas) */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 3. Konten Teks */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            SigerTrip: Gerbang Petualangan <span className="text-amber-400">Lampung</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Nikmati rencana perjalanan 7 hari eksklusif dari Bakauheni menyusuri keindahan tersembunyi Bandar Lampung.
          </p>
          
          {/* Tombol Call to Action */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/destinasi" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-lg active:scale-95"
            >
              Mulai Jelajah
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold rounded-full border border-white/30 transition-all"
            >
              Pelajari Jasa Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian selanjutnya (misal ringkasan jasa) bisa diteruskan Tama di bawah sini */}
    </main>
  );
}