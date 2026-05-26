import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        
        {/* 1. Background Image (gedung Siger di belakang teks) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: "url('/images/gedung%20siger%20home.webp')",
          }}
        >
          {/* 2. Overlay lembut agar menyerupai mockup (abu-abu transparan) */}
          <div className="absolute inset-0 bg-gray-600/55"></div>
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

      {/* DESTINASI SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Destinasi Untuk Pengunjung Pertama Kali</h2>
          <p className="text-lg text-gray-600 mb-8">Kami mengumpulkan destinasi terbaik di Lampung yang cocok untuk wisatawan yang baru pertama kali berkunjung — mulai dari pantai, budaya, hingga wisata kuliner. Temukan rekomendasi lengkap dan rencana perjalanan yang mudah diikuti.</p>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon makanan home (1).webp" alt="Icon makanan" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Destinasi Kuliner di Lampung</h3>
                <p className="text-gray-600 leading-7">Rasakan kuliner khas Lampung dari warung tradisional sampai cafe modern, lengkap dengan rekomendasi menu dan lokasi favorit.</p>
              </div>
              <div className="mt-6">
                <Link href="#kuliner" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Sorotan Kuliner</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon alam home.webp" alt="Icon destinasi alam" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Destinasi Alam di Lampung</h3>
                <p className="text-gray-600 leading-7">Jelajahi keindahan alam Lampung: pantai, bukit, air terjun, dan destinasi outdoor yang ideal untuk pemula.</p>
              </div>
              <div className="mt-6">
                <Link href="#alam" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Sorotan Alam</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon destinasi home.webp" alt="Icon paket destinasi" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Paket 7 Hari di Lampung</h3>
                <p className="text-gray-600 leading-7">Dapatkan panduan paket perjalanan 7 hari lengkap dengan itinerary harian untuk pengalaman Lampung yang maksimal.</p>
              </div>
              <div className="mt-6">
                <Link href="/destinasi#paket" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Paket 7 Hari</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/destinasi" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full font-semibold shadow hover:bg-amber-600">Lihat Kumpulan Destinasi</Link>
          </div>
        </div>
      </section>

      {/* SOROTAN KULINER */}
      <section id="kuliner" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Sorotan Kuliner</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Gulai Taboh */}
            <article className="rounded-lg bg-white border p-6 shadow-sm flex gap-4 items-start">
              <Image src="/images/Gulai%20Taboh%20Ikan%20khas%20Lampung%20home.webp" alt="Gulai Taboh" width={180} height={120} className="rounded-md object-cover" />
              <div>
                <h4 className="text-lg font-semibold mb-2">Gulai Taboh Ikan</h4>
                <p className="text-gray-600 mb-2">Gulai Taboh berakar dari tradisi pesisir Lampung; kuah santan kaya rempah dibuat dengan bahan lokal dan ikan segar. Kepopulerannya datang dari rasa kuat rempah dan keterikatan pada budaya lokal yang diwariskan turun-temurun.</p>
              </div>
            </article>

            {/* Seruit */}
            <article className="rounded-lg bg-white border p-6 shadow-sm flex gap-4 items-start">
              <Image src="/images/seruit%20home.webp" alt="Seruit" width={180} height={120} className="rounded-md object-cover" />
              <div>
                <h4 className="text-lg font-semibold mb-2">Seruit</h4>
                <p className="text-gray-600 mb-2">Seruit adalah olahan ikan asap yang populer di kalangan masyarakat Lampung. Asal-usulnya terkait kebiasaan pengawetan ikan di komunitas pesisir; popularitasnya meningkat karena cita rasa unik dan ketersediaannya di pasar lokal.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SOROTAN DESTINASI ALAM */}
      <section id="alam" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Sorotan Destinasi Alam</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Anak Gunung Krakatau */}
            <article className="rounded-lg bg-gray-50 border p-6 shadow-sm flex gap-4 items-start">
              <Image src="/images/Anak%20Gunung%20Krakatau%20home.webp" alt="Anak Gunung Krakatau" width={180} height={120} className="rounded-md object-cover" />
              <div>
                <h4 className="text-lg font-semibold mb-2">Anak Gunung Krakatau</h4>
                <p className="text-gray-600 mb-2">Anak Gunung Krakatau menjadi sorotan karena latar sejarah vulkanik yang dramatis dan proses geologi yang masih aktif. Wisatawan tertarik untuk melihat fenomena alam ini serta belajar tentang dampak sejarah letusan pada wilayah sekitarnya.</p>
              </div>
            </article>

            {/* Way Kambas */}
            <article className="rounded-lg bg-gray-50 border p-6 shadow-sm flex gap-4 items-start">
              <Image src="/images/Way%20Kambas%20home.webp" alt="Way Kambas" width={180} height={120} className="rounded-md object-cover" />
              <div>
                <h4 className="text-lg font-semibold mb-2">Way Kambas</h4>
                <p className="text-gray-600 mb-2">Way Kambas adalah pusat konservasi gajah dan ekowisata yang terkenal. Populer karena program konservasi yang berfokus pada pengunjung ramah lingkungan dan pengalaman interaksi satwa yang edukatif.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bagian selanjutnya (misal ringkasan jasa) bisa diteruskan Tama di bawah sini */}
    </main>
  );
}