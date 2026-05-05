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

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-900/5">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                Filosofi Kami
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Menjadikan setiap perjalanan Lampung berarti.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                SigerTrip percaya bahwa wisata bukan sekadar destinasi — tetapi cerita, budaya, dan pengalaman yang terangkai bersama. Kami membantu Anda merasakan Lampung secara otentik dengan itinerari yang sudah dirancang rapi.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">Visi</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Menjadi travel partner terbaik untuk wisata Lampung.</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Membawa wisatawan ke destinasi tersembunyi dengan kenyamanan, keamanan, dan nilai lokal.</p>
              </article>
              <article className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">Misi</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Menyajikan perjalanan mudah dan inspiratif.</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Memberikan itinerari siap pakai, dukungan lokal, dan pengalaman wisata yang bersahabat untuk semua pelancong.</p>
              </article>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-slate-200/70 bg-slate-950/95 p-8 text-slate-50 shadow-xl shadow-slate-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Nilai Kami</p>
              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-lg font-semibold">Autentik</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Mengutamakan pengalaman lokal yang nyata dan tidak sekadar wisata komersial.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Terpercaya</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Menghadirkan layanan yang jelas, harga transparan, dan itinerari terencana.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Terjangkau</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Menawarkan paket yang seimbang antara pengalaman dan nilai, tanpa mengorbankan kualitas.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-900/5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Fokus</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Perjalanan yang mudah, tenang, dan penuh cerita.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Dari pemesanan hingga perjalanan selesai, tim SigerTrip mendampingi Anda dengan layanan personal, pilihan destinasi terbaik, dan dukungan penuh di setiap langkah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
