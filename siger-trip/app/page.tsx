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
            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full card-stack-mobile">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon makanan home (1).webp" alt="Icon makanan" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="card-title text-xl mb-3">Destinasi Kuliner di Lampung</h3>
                <p className="card-desc">Rasakan kuliner khas Lampung dari warung tradisional sampai cafe modern, lengkap dengan rekomendasi menu dan lokasi favorit.</p>
              </div>
              <div className="mt-6">
                <Link href="#kuliner" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Sorotan Kuliner</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full card-stack-mobile">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon alam home.webp" alt="Icon destinasi alam" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="card-title text-xl mb-3">Destinasi Alam di Lampung</h3>
                <p className="card-desc">Jelajahi keindahan alam Lampung: pantai, bukit, air terjun, dan destinasi outdoor yang ideal untuk pemula.</p>
              </div>
              <div className="mt-6">
                <Link href="#alam" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Sorotan Alam</Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full card-stack-mobile">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <Image src="/images/icon destinasi home.webp" alt="Icon paket destinasi" width={48} height={48} className="object-contain" />
                </div>
                <h3 className="card-title text-xl mb-3">Rencana Perjalanan & Paket</h3>
                <p className="card-desc">Temukan rencana perjalanan yang fleksibel dan rekomendasi paket untuk menikmati Lampung maksimal.</p>
              </div>
              <div className="mt-6">
                <Link href="/destinasi#paket" className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200">Lihat Rencana</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/destinasi" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full font-semibold shadow hover:bg-amber-600">Lihat Kumpulan Destinasi</Link>
          </div>
        </div>
      </section>

      {/* KEUNTUNGAN MENGGUNAKAN JASA SIGER TRIP */}
      <section id="paket" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Keuntungan Menggunakan Jasa Siger Trip</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Pengalaman liburan yang aman, nyaman, dan dirancang khusus untuk Anda. Berikut beberapa keuntungan utama pelanggan kami.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Harga transparan dan kompetitif', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M17 5H7a3 3 0 000 6h10a3 3 0 010 6H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )},
              { title: 'Driver berpengalaman', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c0-4 4-7 9-7s9 3 9 7v5a1 1 0 01-1 1h-4v-3H8v3H4a1 1 0 01-1-1v-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.6"/></svg>
              )},
              { title: 'Kendaraan bersih dan nyaman', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 17v2M17 17v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              )},
              { title: 'Pelayanan ramah dan responsif', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )},
              { title: 'Destinasi wisata terbaik di Lampung', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )},
              { title: 'Fleksibel menyesuaikan kebutuhan pelanggan', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              )},
              { title: 'Proses booking mudah', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 2v4M8 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              )},
              { title: 'Dukungan customer service', icon: (
                <svg className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 14s1-1 4-1 4 1 4 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              )}
            ].map((b) => (
              <div key={b.title} className="group rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">{b.icon}</div>
                  <h4 className="card-title text-lg">{b.title}</h4>
                </div>
                <p className="card-desc text-sm">Kami memastikan setiap poin ini menjadi bagian dari pengalaman Anda bersama Siger Trip.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PELANGGAN YANG TELAH MENGGUNAKAN JASA SIGER TRIP (TESTIMONIALS) */}
      <section id="infotainment" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Pelanggan yang Telah Menggunakan Jasa Siger Trip</h3>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Baca pengalaman singkat dari beberapa pelanggan yang telah menikmati layanan kami.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Andi Putra', city: 'Bandar Lampung', rating: 5, review: 'Perjalanan lancar, driver sangat profesional. Rekomendasi!', avatar: '/images/siger.webp' },
              { name: 'Sari Dewi', city: 'Metro', rating: 5, review: 'Itinerary pas dan fleksibel, anak-anak juga senang.', avatar: '/images/siger.webp' },
              { name: 'Budi Susilo', city: 'Lampung Selatan', rating: 4, review: 'Kendaraan bersih dan nyaman, layanan cepat tanggap.', avatar: '/images/siger.webp' },
              { name: 'Rina Maharani', city: 'Bandar Lampung', rating: 5, review: 'Harga transparan dan pelayanan ramah, sangat puas.', avatar: '/images/siger.webp' },
              { name: 'Dewi Kurnia', city: 'Pringsewu', rating: 4, review: 'Destinasi pilihan tepat, pengalaman tak terlupakan.', avatar: '/images/siger.webp' },
              { name: 'Tegar', city: 'Lampung Tengah', rating: 5, review: 'Booking mudah, CS responsif, recommended!', avatar: '/images/siger.webp' }
            ].map((c) => (
              <article key={c.name} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transform card-stack-mobile">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="shrink-0">
                    <div className="h-14 w-14 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                      <Image src={c.avatar} alt={`${c.name} avatar`} width={56} height={56} className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="card-title text-sm">{c.name}</h4>
                        <p className="card-desc text-xs">{c.city}</p>
                      </div>
                      <div className="text-amber-500 flex items-center gap-1 text-sm">
                        {Array.from({ length: c.rating }).map((_, i) => (
                          <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.335 24 12 19.897 4.665 24 6 15.601 0 9.748l8.332-1.73z"/></svg>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 card-desc text-sm">{c.review}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOROTAN KULINER */}
      <section id="kuliner" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Sorotan Kuliner</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Gulai Taboh */}
            <article className="rounded-lg bg-white border p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start card-stack-mobile">
              <Image src="/images/Gulai%20Taboh%20Ikan%20khas%20Lampung%20home.webp" alt="Gulai Taboh" width={180} height={120} className="rounded-md object-cover" />
              <div className="card-body">
                <h4 className="card-title text-lg mb-2">Gulai Taboh Ikan</h4>
                <p className="card-desc mb-2">Gulai Taboh berakar dari tradisi pesisir Lampung; kuah santan kaya rempah dibuat dengan bahan lokal dan ikan segar. Kepopulerannya datang dari rasa kuat rempah dan keterikatan pada budaya lokal yang diwariskan turun-temurun.</p>
              </div>
            </article>

            {/* Seruit */}
            <article className="rounded-lg bg-white border p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start card-stack-mobile">
              <Image src="/images/seruit%20home.webp" alt="Seruit" width={180} height={120} className="rounded-md object-cover" />
              <div className="card-body">
                <h4 className="card-title text-lg mb-2">Seruit</h4>
                <p className="card-desc mb-2">Seruit adalah olahan ikan asap yang populer di kalangan masyarakat Lampung. Asal-usulnya terkait kebiasaan pengawetan ikan di komunitas pesisir; popularitasnya meningkat karena cita rasa unik dan ketersediaannya di pasar lokal.</p>
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
            <article className="rounded-lg bg-gray-50 border p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start card-stack-mobile">
              <Image src="/images/Anak%20Gunung%20Krakatau%20home.webp" alt="Anak Gunung Krakatau" width={180} height={120} className="rounded-md object-cover" />
              <div className="card-body">
                <h4 className="card-title text-lg mb-2">Anak Gunung Krakatau</h4>
                <p className="card-desc mb-2">Anak Gunung Krakatau menjadi sorotan karena latar sejarah vulkanik yang dramatis dan proses geologi yang masih aktif. Wisatawan tertarik untuk melihat fenomena alam ini serta belajar tentang dampak sejarah letusan pada wilayah sekitarnya.</p>
              </div>
            </article>

            {/* Way Kambas */}
            <article className="rounded-lg bg-gray-50 border p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start card-stack-mobile">
              <Image src="/images/Way%20Kambas%20home.webp" alt="Way Kambas" width={180} height={120} className="rounded-md object-cover" />
              <div className="card-body">
                <h4 className="card-title text-lg mb-2">Way Kambas</h4>
                <p className="card-desc mb-2">Way Kambas adalah pusat konservasi gajah dan ekowisata yang terkenal. Populer karena program konservasi yang berfokus pada pengunjung ramah lingkungan dan pengalaman interaksi satwa yang edukatif.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bagian selanjutnya (misal ringkasan jasa) bisa diteruskan Tama di bawah sini */}
    </main>
  );
}