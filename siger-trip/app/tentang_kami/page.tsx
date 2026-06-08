import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";


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

      <TestimonialSlider />
    </main>
  );
}
