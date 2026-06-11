import Image from "next/image";
import Link from "next/link";

export default function SorotanKuliner() {
  const items = [
    {
      id: 'gulai-taboh',
      title: 'Gulai Taboh Ikan',
      desc: 'Gulai Taboh berakar dari tradisi pesisir Lampung; kuah santan kaya rempah dibuat dengan bahan lokal dan ikan segar. Kepopulerannya datang dari rasa kuat rempah dan keterikatan pada budaya lokal.',
      img: '/images/Gulai%20Taboh%20Ikan%20khas%20Lampung%20home.webp',
      alt: 'Gulai Taboh Ikan khas Lampung',
      href: 'https://www.indonesia.travel/id/id/travel-ideas/gastronomy/gulai-taboh/'
    },
    {
      id: 'seruit',
      title: 'Seruit',
      desc: 'Seruit adalah olahan ikan asap yang populer di kalangan masyarakat Lampung. Asal-usulnya terkait kebiasaan pengawetan ikan di komunitas pesisir; popularitasnya meningkat karena cita rasa unik dan ketersediaannya di pasar lokal.',
      img: '/images/seruit%20home.webp',
      alt: 'Seruit Lampung',
      href: 'https://tribratanews.lampung.polri.go.id/detail-post/seruit-makanan-khas-lampung-yang-lezat-dan-penuh-tradisi'
    },
    {
      id: 'bakso-son-haji-sony',
      title: 'Bakso Son Haji Sony',
      desc: 'Bakso Son Haji Sony adalah bakso legendaris Lampung yang terkenal karena kuah kaldunya pekat, bakso urat kenyal, dan pangsit goreng yang renyah. Asal-usulnya sangat terkait dengan Bandar Lampung, khususnya outlet asli di kawasan Teluk Betung, sehingga sering disebut sebagai salah satu bakso khas dan favorit pengunjung di Lampung.',
      img: '/images/Bakso Son Haji Sony.webp',
      alt: 'Bakso Son Haji Sony Lampung',
      href: 'https://www.google.com/search?q=Bakso+Son+Haji+Sony'
    },
    {
      id: 'pindang-patin',
      title: 'Pindang Patin',
      desc: 'Pindang Patin adalah masakan tradisional Lampung yang terbuat dari ikan patin segar yang dipindang dengan kuah rempah hangat berisi lengkuas, jahe, dan cabai. Hidangan ini menjadi favorit karena cita rasa kuah yang gurih dan tradisional, serta berasal dari daerah-daerah seperti Lampung Selatan dan Lampung Tengah yang kaya dengan perairan ikan patin.',
      img: '/images/Pindang Patin.webp',
      alt: 'Pindang Patin Lampung',
      href: 'https://www.google.com/search?q=Pindang+Patin+Lampung'
    },
    {
      id: 'nasi-uduk-toha',
      title: 'Nasi Uduk Toha',
      desc: 'Nasi Uduk Toha khas Lampung terkenal karena aroma santan yang gurih, lauk lengkap, dan sambal kacangnya yang pedas manis. Menu legendaris ini sering jadi pilihan utama warga Bandar Lampung dan wisatawan yang ingin mencicipi sajian tradisional pagi hari.',
      img: '/images/Nasi Uduk Toha.webp',
      alt: 'Nasi Uduk Toha Lampung',
      href: 'https://www.google.com/search?q=Nasi+Uduk+Toha'
    },
    {
      id: 'mie-khodon',
      title: 'Mie Khodon',
      desc: 'Mie Khodon khas Lampung dikenal sebagai sajian mi rumahan yang pedas dan gurih, memakai bumbu kacang, cabai, dan potongan ayam kampung. Makanan ini banyak digemari karena teksturnya kenyal dan cita rasanya yang kuat, serta sering ditemukan di warung tradisional Bandar Lampung.',
      img: '/images/Mie Khodon.webp',
      alt: 'Mie Khodon Lampung',
      href: 'https://www.google.com/search?q=Mie+Khodon+Lampung'
    }
  ];

  return (
    <section id="kuliner" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Sorotan Kuliner</h3>
        <p className="text-gray-600 mb-6">Cicipi kuliner khas Lampung yang kaya cita rasa dan tradisi.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.id} className="group bg-white rounded-[18px] border border-gray-100 shadow-sm overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="relative h-[240px] md:h-full">
                    <Image
                      src={it.img}
                      alt={it.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent md:from-black/10" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">{it.title}</h4>
                      <span className="ml-auto flex items-center text-sm text-amber-600" aria-hidden>
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Lampung
                      </span>
                    </div>

                    <p className="text-sm text-gray-700" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                      {it.desc}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={it.href}
                      target={it.href.startsWith('http') ? '_blank' : undefined}
                      rel={it.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md font-medium shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
