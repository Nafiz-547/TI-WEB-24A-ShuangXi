import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-linear-to-b from-amber-400/20 via-slate-900/40 to-slate-950/95" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300 ring-1 ring-amber-300/20">
            Tentang Kami
          </span>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            SigerTrip: Gerbang Petualangan Lampung
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Kami merancang pengalaman liburan 7 hari yang nyaman, terjangkau, dan penuh kisah. Dari budaya Bandar Lampung sampai pesona laut selatan, SigerTrip membantu Anda menjelajahi Lampung dengan percaya diri.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Kembali ke Beranda
            </Link>
            <Link href="/destinasi" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:bg-white/15">
              Lihat Destinasi
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900">Apa yang Kami Tawarkan?</h2>
          <p className="mt-4 text-lg text-slate-600">SigerTrip menyediakan pengalaman wisata Lampung yang sempurna dengan nilai-nilai utama kami</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Filosofi Kami</h3>
            <p className="text-slate-600 leading-7">
              Mengubah perjalanan menjadi cerita bermakna. Kami percaya setiap destinasi memiliki cerita unik yang menghubungkan wisatawan dengan budaya lokal Lampung.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Visi Kami</h3>
            <p className="text-slate-600 leading-7">
              Menjadi travel partner terbaik untuk wisata Lampung. Kami ingin menjadi pilihan utama wisatawan yang mencari pengalaman autentik dan tak terlupakan.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Misi Kami</h3>
            <p className="text-slate-600 leading-7">
              Menyajikan perjalanan mudah dan inspiratif. Kami berkomitmen memberikan itinerari terencana dengan dukungan lokal penuh di setiap langkah.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Nilai-Nilai Kami</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">1. Autentik</h4>
                <p className="text-slate-600">Mengutamakan pengalaman lokal yang nyata dan bukan sekadar wisata komersial biasa.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Terpercaya</h4>
                <p className="text-slate-600">Transparansi harga, itinerari jelas, dan layanan dapat diandalkan adalah prioritas kami.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Terjangkau</h4>
                <p className="text-slate-600">Paket seimbang antara kualitas pengalaman dan nilai uang tanpa mengorbankan kenyamanan.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Fokus Layanan Kami</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">1. Perjalanan Mudah</h4>
                <p className="text-slate-600">Proses pemesanan sederhana dari awal hingga akhir dengan dukungan tim yang responsive.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">2. Pengalaman Berkualitas</h4>
                <p className="text-slate-600">Destinasi pilihan, guide berpengalaman, dan aktivitas yang dirancang khusus untuk Anda.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">3. Dukungan Penuh</h4>
                <p className="text-slate-600">Layanan personal dari perencanaan hingga perjalanan selesai dengan bantuan 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b from-slate-100 to-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900">Testimoni Traveler Kami</h2>
            <p className="mt-4 text-lg text-slate-600">Cerita inspiratif dari wisatawan yang telah merasakan petualangan bersama SigerTrip</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;Perjalanan 7 hari bersama SigerTrip adalah yang terbaik! Guide kami sangat ramah, itinerari sempurna, dan kami bertemu banyak teman baru. Highly recommended!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Sarah Putri</p>
                <p className="text-sm text-slate-500">Jakarta</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;Harga yang terjangkau namun kualitas layanan luar biasa. Destinasi yang dikunjungi tidak membosankan, semuanya tersembunyi dan indah. Pasti balik ke Lampung!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Ahmad Rizki</p>
                <p className="text-sm text-slate-500">Bandung</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;SigerTrip bukan hanya tentang wisata, tapi tentang belajar dan mengalami. Tim mereka benar-benar peduli dengan kepuasan kami. Terima kasih SigerTrip!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Dewi Lestari</p>
                <p className="text-sm text-slate-500">Surabaya</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;Saya traveling solo dan merasa 100% aman. Destinasi yang dipilih sangat unik, tidak seperti paket wisata biasanya. Benar-benar adventure yang autentik!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Budi Santoso</p>
                <p className="text-sm text-slate-500">Yogyakarta</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;Keluarga kami sangat puas. Anak-anak belajar banyak tentang budaya Lampung, dan kami tenang karena semua sudah diatur dengan baik oleh SigerTrip.&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Ibu Siti</p>
                <p className="text-sm text-slate-500">Medan</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 text-slate-600 mb-6">
                &apos;Transparansi harga dan tidak ada hidden cost. Destinasi menarik, makanan lezat, dan guide yang berpengetahuan luas. Sangat worth it!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Rian Wijaya</p>
                <p className="text-sm text-slate-500">Semarang</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
