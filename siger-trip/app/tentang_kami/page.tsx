import Link from "next/link";
import Image from "next/image";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden text-white">
        <Image
          src="/images/tentang.jpg"
          alt="Lampung Hero"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300 ring-1 ring-amber-300/20">
            Tentang Kami
          </span>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">SigerTrip:</span>
            <span className="block bg-linear-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">Gerbang Petualangan Lampung</span>
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
          <p className="mt-4 text-lg text-slate-600">SigerTrip bukan hanya sekadar layanan travel biasa. Kami menghadirkan pengalaman wisata Lampung yang komprehensif dan berkesan, dibangun atas fondasi nilai-nilai utama yang kami pegang teguh. Setiap paket dirancang dengan cermat untuk memberikan Anda petualangan yang tak terlupakan, memadukan keindahan alam, kekayaan budaya, dan kenyamanan berkualitas tinggi. Kami berkomitmen untuk membuat setiap perjalanan Anda menjadi lebih dari sekadar liburan—menjadi sebuah cerita yang akan Anda ceritakan untuk selamanya.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="card-title text-xl mb-3">Filosofi Kami</h3>
            <p className="card-desc leading-7">
              Mengubah perjalanan menjadi cerita bermakna. Kami percaya setiap destinasi memiliki cerita unik yang menghubungkan wisatawan dengan budaya lokal Lampung.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="card-title text-xl mb-3">Visi Kami</h3>
            <p className="card-desc leading-7">
              Menjadi travel partner terbaik untuk wisata Lampung. Kami ingin menjadi pilihan utama wisatawan yang mencari pengalaman autentik dan tak terlupakan.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="card-title text-xl mb-3">Misi Kami</h3>
            <p className="card-desc leading-7">
              Menyajikan perjalanan mudah dan inspiratif. Kami berkomitmen memberikan itinerari terencana dengan dukungan lokal penuh di setiap langkah.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="card-title text-2xl mb-6">Nilai-Nilai Kami</h3>
            <div className="space-y-5">
              <div>
                <h4 className="card-title mb-2">1. Autentik</h4>
                <p className="card-desc">Mengutamakan pengalaman lokal yang nyata dan bukan sekadar wisata komersial biasa.</p>
              </div>
              <div>
                <h4 className="card-title mb-2">2. Terpercaya</h4>
                <p className="card-desc">Transparansi harga, itinerari jelas, dan layanan dapat diandalkan adalah prioritas kami.</p>
              </div>
              <div>
                <h4 className="card-title mb-2">3. Terjangkau</h4>
                <p className="card-desc">Paket seimbang antara kualitas pengalaman dan nilai uang tanpa mengorbankan kenyamanan.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-4xl mb-6 text-slate-400">✱</div>
            <h3 className="card-title text-2xl mb-6">Fokus Layanan Kami</h3>
            <div className="space-y-5">
              <div>
                <h4 className="card-title mb-2">1. Perjalanan Mudah</h4>
                <p className="card-desc">Proses pemesanan sederhana dari awal hingga akhir dengan dukungan tim yang responsive.</p>
              </div>
              <div>
                <h4 className="card-title mb-2">2. Pengalaman Berkualitas</h4>
                <p className="card-desc">Destinasi pilihan, guide berpengalaman, dan aktivitas yang dirancang khusus untuk Anda.</p>
              </div>
              <div>
                <h4 className="card-title mb-2">3. Dukungan Penuh</h4>
                <p className="card-desc">Layanan personal dari perencanaan hingga perjalanan selesai dengan bantuan 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 bg-slate-50 rounded-3xl shadow-sm border border-slate-200/80">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-500">Paket Unggulan</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">Apa yang Bisa Kamu Dapatkan</h2>
          <p className="mt-4 text-lg text-slate-600">Pilih paket yang sesuai dengan gaya liburanmu: santai, petualangan, atau eksplorasi budaya Lampung tanpa ribet.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200/80">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a2 2 0 0 0-2 2v1.07A7 7 0 0 0 5 12v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a7 7 0 0 0-5-6.93V4a2 2 0 0 0-2-2zM8 20a1 1 0 0 1-1-1v-4a6 6 0 0 1 12 0v4a1 1 0 0 1-1 1H8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Paket Wisata Budaya</h3>
            <p className="text-slate-600 leading-7 mb-6">Jelajahi warisan budaya Lampung, candi, rumah adat, dan festival lokal dengan itinerari yang nyaman.</p>
            <div className="inline-flex items-center gap-2 text-amber-500 font-semibold">
              <span>Mulai dari Rp 2.499.000</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200/80">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Paket Petualangan</h3>
            <p className="text-slate-600 leading-7 mb-6">Rasakan trekking, snorkeling, dan perjalanan pantai eksklusif yang dirancang untuk penjelajah sejati.</p>
            <div className="inline-flex items-center gap-2 text-amber-500 font-semibold">
              <span>Mulai dari Rp 3.299.000</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200/80">
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Paket Keluarga</h3>
            <p className="text-slate-600 leading-7 mb-6">Nikmati perjalanan ramah keluarga dengan aktivitas seru, penginapan nyaman, dan layanan ramah anak.</p>
            <div className="inline-flex items-center gap-2 text-amber-500 font-semibold">
              <span>Mulai dari Rp 3.799.000</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-slate-900">FAQ Singkat</h2>
          <p className="mt-2 text-lg text-slate-600">Pertanyaan umum yang sering diajukan — cepat dan jelas.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900 list-none">Bagaimana cara memesan paket?</summary>
            <p className="mt-3 text-slate-600">Pilih paket, isi formulir pemesanan, lalu lakukan pembayaran DP 30%. Tim kami akan mengonfirmasi via email atau WhatsApp.</p>
          </details>

          <details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900 list-none">Metode pembayaran apa yang diterima?</summary>
            <p className="mt-3 text-slate-600">Kami menerima transfer bank, e-wallet populer, dan pembayaran kartu melalui partner kami. Detail akan dikirim saat konfirmasi.</p>
          </details>

          <details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900 list-none">Bagaimana kebijakan pembatalan?</summary>
            <p className="mt-3 text-slate-600">Pembatalan bisa dilakukan 7 hari sebelum keberangkatan untuk pengembalian sebagian. Untuk detail lengkap, hubungi tim kami.</p>
          </details>

          <details className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900 list-none">Apakah anak-anak bisa ikut paket keluarga?</summary>
            <p className="mt-3 text-slate-600">Ya — paket keluarga dirancang ramah anak dengan akomodasi dan aktivitas yang sesuai. Sebutkan usia anak saat pemesanan untuk penyesuaian.</p>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-600">Layanan Kami</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">Detail Jasa Travel</h2>
          <p className="mt-4 text-lg text-slate-600">Semua yang Anda butuhkan sudah termasuk dalam paket kami — dari penjemputan hingga pengalaman tak terlupakan.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Penjemputan dari Bakauheni</h3>
            <p className="text-slate-600 leading-7">
              Kami menjemput Anda dari Pelabuhan Bakauheni dan membawa Anda langsung ke hotel dengan armada bus modern dan nyaman.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13c0 1.65.67 3.15 1.76 4.24L2.5 20.5c-.71.71-.71 1.86 0 2.57.71.71 1.86.71 2.57 0l4.26-4.26C11.85 20.33 13.35 21 15 21c5.52 0 10-4.48 10-10S20.52 1 15 1 5 5.48 5 11zm10-8c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm3.5 9c.83 0 1.5-.67 1.5-1.5S19.33 11 18.5 11 17 11.67 17 12.5s.67 1.5 1.5 1.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Penginapan Berkualitas</h3>
            <p className="text-slate-600 leading-7">
              Hotel bintang 3-4 di lokasi strategis dengan fasilitas AC, mandi air panas, dan WiFi gratis di setiap malam.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 5V1h-1v4H8.01V1H7v4H4c-1.1 0-2 .9-2 2v3h2V7h13v3h2V7c0-1.1-.9-2-2-2h-3V1h-1v4zm8.23 7c-.58 0-1.05.47-1.05 1.05 0 .58.47 1.05 1.05 1.05.58 0 1.05-.47 1.05-1.05 0-.58-.47-1.05-1.05-1.05zm-7.52 0c-.58 0-1.05.47-1.05 1.05 0 .58.47 1.05 1.05 1.05.58 0 1.05-.47 1.05-1.05 0-.58-.47-1.05-1.05-1.05zM2 7h20v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Transportasi Selama Perjalanan</h3>
            <p className="text-slate-600 leading-7">
              Bus modern dengan AC, kursi empuk, dan driver berpengalaman untuk semua perjalanan antar destinasi.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Guide Profesional & Ramah</h3>
            <p className="text-slate-600 leading-7">
              Tour guide berpengalaman yang menguasai sejarah, budaya, dan rahasia tersembunyi di setiap destinasi Lampung.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 5V1h-1v4H8.01V1H7v4H4c-1.1 0-2 .9-2 2v3h20V7c0-1.1-.9-2-2-2h-3V1h-1v4zm8.23 7c-.58 0-1.05.47-1.05 1.05 0 .58.47 1.05 1.05 1.05.58 0 1.05-.47 1.05-1.05 0-.58-.47-1.05-1.05-1.05zm-7.52 0c-.58 0-1.05.47-1.05 1.05 0 .58.47 1.05 1.05 1.05.58 0 1.05-.47 1.05-1.05 0-.58-.47-1.05-1.05-1.05zM2 7h20v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Makan & Minuman</h3>
            <p className="text-slate-600 leading-7">
              Sarapan dan makan malam di hotel, serta lunch box berkualitas di destinasi wisata dengan menu lokal autentik.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Asuransi Perjalanan</h3>
            <p className="text-slate-600 leading-7">
              Perlindungan asuransi perjalanan termasuk dalam paket untuk ketenangan pikiran Anda selama liburan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900">Tim Kami</h2>
          <p className="mt-4 text-lg text-slate-600">Profesional berpengalaman yang siap memberikan pengalaman terbaik untuk perjalanan Anda</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Tim Member 1 */}
          <div className="text-center group">
            <div className="relative mb-6 mx-auto w-48 h-48 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <div className="w-full h-full bg-linear-to-br from-amber-300 to-amber-500 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Eka Prasetya</h3>
            <p className="text-amber-500 font-semibold mb-3">Founder & CEO</p>
            <p className="text-slate-600 leading-7 mb-4">
              Visioner di balik SigerTrip dengan pengalaman 10 tahun di industri pariwisata. Eka berdedikasi menciptakan pengalaman travel yang bermakna dan autentik untuk setiap traveler.
            </p>
            <div className="flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">LinkedIn</a>
              <span className="text-amber-500">•</span>
              <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">Instagram</a>
            </div>
          </div>

          {/* Tim Member 2 */}
          <div className="text-center group">
            <div className="relative mb-6 mx-auto w-48 h-48 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <div className="w-full h-full bg-linear-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Rini Susanto</h3>
            <p className="text-blue-500 font-semibold mb-3">Operations Manager</p>
            <p className="text-slate-600 leading-7 mb-4">
              Memastikan setiap detail perjalanan Anda berjalan sempurna. Rini memiliki keahlian dalam koordinasi logistik dan manajemen tim yang luar biasa.
            </p>
            <div className="flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">LinkedIn</a>
              <span className="text-blue-500">•</span>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">Instagram</a>
            </div>
          </div>

          {/* Tim Member 3 */}
          <div className="text-center group">
            <div className="relative mb-6 mx-auto w-48 h-48 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <div className="w-full h-full bg-linear-to-br from-green-300 to-green-500 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Doni Hermawan</h3>
            <p className="text-green-500 font-semibold mb-3">Lead Guide & Experience Designer</p>
            <p className="text-slate-600 leading-7 mb-4">
              Ahli dalam menciptakan itinerari yang tak terlupakan dengan pengetahuan mendalam tentang destinasi Lampung dan budaya lokal.
            </p>
            <div className="flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="text-green-500 hover:text-green-600 font-semibold">LinkedIn</a>
              <span className="text-green-500">•</span>
              <a href="#" className="text-green-500 hover:text-green-600 font-semibold">Instagram</a>
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
              <p className="text-base leading-7 card-desc mb-6">
                &apos;Perjalanan 7 hari bersama SigerTrip adalah yang terbaik! Guide kami sangat ramah, itinerari sempurna, dan kami bertemu banyak teman baru. Highly recommended!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Sarah Putri</p>
                <p className="card-desc text-sm">Jakarta</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 card-desc mb-6">
                &apos;Harga yang terjangkau namun kualitas layanan luar biasa. Destinasi yang dikunjungi tidak membosankan, semuanya tersembunyi dan indah. Pasti balik ke Lampung!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Ahmad Rizki</p>
                <p className="card-desc text-sm">Bandung</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 card-desc mb-6">
                &apos;SigerTrip bukan hanya tentang wisata, tapi tentang belajar dan mengalami. Tim mereka benar-benar peduli dengan kepuasan kami. Terima kasih SigerTrip!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Dewi Lestari</p>
                <p className="card-desc text-sm">Surabaya</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 card-desc mb-6">
                &apos;Saya traveling solo dan merasa 100% aman. Destinasi yang dipilih sangat unik, tidak seperti paket wisata biasanya. Benar-benar adventure yang autentik!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Budi Santoso</p>
                <p className="card-desc text-sm">Yogyakarta</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 card-desc mb-6">
                &apos;Keluarga kami sangat puas. Anak-anak belajar banyak tentang budaya Lampung, dan kami tenang karena semua sudah diatur dengan baik oleh SigerTrip.&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Ibu Siti</p>
                <p className="card-desc text-sm">Medan</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-base leading-7 card-desc mb-6">
                &apos;Transparansi harga dan tidak ada hidden cost. Destinasi menarik, makanan lezat, dan guide yang berpengetahuan luas. Sangat worth it!&apos;
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="card-title">Rian Wijaya</p>
                <p className="card-desc text-sm">Semarang</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
