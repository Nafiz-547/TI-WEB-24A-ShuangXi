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
      href: '/destinasi?filter=kuliner&item=gulai-taboh'
    },
    {
      id: 'seruit',
      title: 'Seruit',
      desc: 'Seruit adalah olahan ikan asap yang populer di kalangan masyarakat Lampung. Asal-usulnya terkait kebiasaan pengawetan ikan di komunitas pesisir; popularitasnya meningkat karena cita rasa unik dan ketersediaannya di pasar lokal.',
      img: '/images/seruit%20home.webp',
      alt: 'Seruit Lampung',
      href: '/destinasi?filter=kuliner&item=seruit'
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

                  <div className="mt-6 flex items-center gap-3">
                    <Link href={it.href} className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md font-medium shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition">
                      Lihat Detail
                    </Link>
                    <Link href="/destinasi" className="inline-flex items-center px-4 py-2 bg-white text-amber-600 rounded-md font-medium border border-amber-100 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 transition">
                      Pelajari Kuliner Ini
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
