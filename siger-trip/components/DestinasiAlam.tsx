import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  {
    id: 'anak-krakatau',
    title: 'Anak Gunung Krakatau',
    location: 'Selat Sunda, Lampung',
    description: 'Anak Gunung Krakatau menjadi sorotan karena latar sejarah vulkanik yang dramatis dan proses geologi yang masih aktif. Wisatawan tertarik untuk melihat fenomena alam ini serta belajar tentang dampak sejarah letusan pada wilayah sekitarnya.',
    image: '/images/Anak%20Gunung%20Krakatau%20home.webp',
    alt: 'Pemandangan Anak Gunung Krakatau di Lampung'
  },
  {
    id: 'way-kambas',
    title: 'Way Kambas',
    location: 'Lampung Timur',
    description: 'Way Kambas adalah pusat konservasi gajah dan ekowisata yang terkenal. Populer karena program konservasi yang berfokus pada pengunjung ramah lingkungan dan pengalaman interaksi satwa yang edukatif.',
    image: '/images/Way%20Kambas%20home.webp',
    alt: 'Area konservasi Way Kambas dengan suasana alam'
  },
  {
    id: 'pahawang',
    title: 'Pahawang',
    location: 'Lampung Selatan',
    description: 'Pahawang adalah pulau tropis yang terkenal dengan spot snorkeling dan watersportnya. Pengunjung bisa snorkeling di air laut yang jernih, island hopping ke Pulau Kelagian dan Pulau Kelapa, serta menikmati panorama bawah laut dengan terumbu karang dan ikan warna-warni.',
    image: '/images/pahawang.webp',
    alt: 'Pemandangan pantai dan laut di Pulau Pahawang Lampung'
  },
  {
    id: 'krakatau-park',
    title: 'Krakatau Park',
    location: 'Lampung Selatan',
    description: 'Krakatau Park adalah taman rekreasi tepi pantai yang menyajikan pemandangan selat Sunda dan aktivitas keluarga. Di sana Anda bisa menikmati taman bermain, spot foto, piknik tepi pantai, dan menyaksikan sunset dengan latar Gunung Krakatau.',
    image: '/images/Krakatau Park.webp',
    alt: 'Pemandangan Krakatau Park Lampung'
  },
  {
    id: 'pulau-wayang',
    title: 'Pulau Wayang',
    location: 'Lampung Selatan',
    description: 'Pulau Wayang adalah destinasi pulau kecil yang terkenal dengan pasir putih, air laut jernih, dan suasana tenang. Di sana pengunjung dapat snorkeling, berenang, memancing, atau sekadar bersantai menikmati panorama pulau-pulau kecil di sekitar Selat Sunda.',
    image: '/images/Pulau Wayang.webp',
    alt: 'Pemandangan Pulau Wayang Lampung'
  },
  {
    id: 'teluk-kiluan',
    title: 'Teluk Kiluan',
    location: 'Lampung Selatan',
    description: 'Teluk Kiluan terkenal dengan wisata lumba-lumba dan panorama teluk yang indah. Pengunjung bisa naik boat, menyaksikan atraksi lumba-lumba liar, berenang di pantai, dan menikmati sunset di pesisir yang tenang.',
    image: '/images/Teluk Kiluan.webp',
    alt: 'Pemandangan Teluk Kiluan Lampung'
  }
]

export default function DestinasiAlam() {
  return (
    <section id="alam" aria-labelledby="destinasi-alam-title" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">🌿 Wisata Lampung</span>
          <h3 id="destinasi-alam-title" className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Destinasi Alam Favorit</h3>
          <p className="mt-3 text-gray-600 text-base md:text-lg">Jelajahi keindahan alam Lampung mulai dari pulau eksotis, pantai menawan, hingga destinasi wisata yang memikat wisatawan dari berbagai daerah.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.id} className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-amber-200">Destinasi Alam</p>
                  <h4 className="mt-2 text-xl font-semibold leading-tight">{destination.title}</h4>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <svg className="h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9" r="2" fill="currentColor"/></svg>
                  <span>{destination.location}</span>
                </div>
                <p className="text-gray-700 text-sm leading-6" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {destination.description}
                </p>
                <div className="mt-5">
                  <Link
                    href="/destinasi"
                    className="inline-flex items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  >
                    Pelajari Destinasi
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
