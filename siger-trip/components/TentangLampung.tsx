import Image from 'next/image'
import Link from 'next/link'

export default function TentangLampung() {
  return (
    <section aria-labelledby="tentang-lampung" className="py-8">
      <div className="max-w-6xl mx-auto px-4 transition-all duration-700 opacity-100 translate-y-0">
        <div className="grid gap-6 md:grid-cols-2 items-center rounded-[20px] bg-gradient-to-r from-white via-amber-50 to-white shadow-md overflow-hidden p-6 md:p-8">
          {/* Teks */}
          <div>
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-3">✨ Provinsi Lampung</span>
            <h2 id="tentang-lampung" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Gerbang Wisata Pulau Sumatra</h2>
            <p className="text-gray-700 mb-4">Lampung menawarkan perpaduan sempurna antara keindahan alam, kekayaan budaya, dan kuliner khas yang menggugah selera. Dari pantai eksotis, pulau-pulau menawan, hingga tradisi lokal yang unik, Lampung menjadi destinasi ideal untuk liburan yang berkesan.</p>

            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2"><svg className="h-5 w-5 text-amber-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>100+ Destinasi Wisata</li>
              <li className="flex items-start gap-2"><svg className="h-5 w-5 text-amber-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Puluhan Pantai Eksotis</li>
              <li className="flex items-start gap-2"><svg className="h-5 w-5 text-amber-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Beragam Kuliner Khas</li>
              <li className="flex items-start gap-2"><svg className="h-5 w-5 text-amber-500 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Akses Mudah dari Jakarta</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/destinasi" className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md font-medium shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition">Jelajahi Destinasi</Link>
              <Link href="/paket" className="inline-flex items-center px-4 py-2 bg-white text-amber-600 rounded-md font-medium border border-amber-100 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 transition">Lihat Paket Wisata</Link>
            </div>
          </div>

          {/* Gambar */}
          <div className="w-full">
            <div className="relative rounded-[16px] overflow-hidden h-56 md:h-64 shadow-sm">
              <Image src="/images/pahawang.webp" alt="Pulau Pahawang Lampung" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
