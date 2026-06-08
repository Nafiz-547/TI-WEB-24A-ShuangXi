"use client";

import React, { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Putri",
    city: "Jakarta",
    text: "Perjalanan 7 hari bersama SigerTrip adalah yang terbaik! Guide kami sangat ramah, itinerari sempurna, dan kami bertemu banyak teman baru. Highly recommended!",
  },
  {
    name: "Ahmad Rizki",
    city: "Bandung",
    text: "Harga yang terjangkau namun kualitas layanan luar biasa. Destinasi yang dikunjungi tidak membosankan, semuanya tersembunyi dan indah. Pasti balik ke Lampung!",
  },
  {
    name: "Dewi Lestari",
    city: "Surabaya",
    text: "SigerTrip bukan hanya tentang wisata, tapi tentang belajar dan mengalami. Tim mereka benar-benar peduli dengan kepuasan kami. Terima kasih SigerTrip!",
  },
  {
    name: "Budi Santoso",
    city: "Yogyakarta",
    text: "Saya traveling solo dan merasa 100% aman. Destinasi yang dipilih sangat unik, tidak seperti paket wisata biasanya. Benar-benar adventure yang autentik!",
  },
  {
    name: "Ibu Siti",
    city: "Medan",
    text: "Keluarga kami sangat puas. Anak-anak belajar banyak tentang budaya Lampung, dan kami tenang karena semua sudah diatur dengan baik oleh SigerTrip.",
  },
  {
    name: "Rian Wijaya",
    city: "Semarang",
    text: "Transparansi harga dan tidak ada hidden cost. Destinasi menarik, makanan lezat, dan guide yang berpengetahuan luas. Sangat worth it!",
  },
];

export default function TestimonialSlider() {
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-linear-to-b from-slate-100 to-slate-50 py-20 relative">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-slate-900">Testimoni Traveler Kami</h2>
          <p className="mt-4 text-lg text-slate-600">Cerita inspiratif dari wisatawan yang telah merasakan petualangan bersama SigerTrip</p>
        </div>

        <div className="relative">
          <button
            aria-label="Previous testimonials"
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          >
            ‹
          </button>

          <div
            ref={ref}
            className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 py-6 scroll-smooth snap-x snap-mandatory sm:mx-0"
          >
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="min-w-[260px] snap-start rounded-2xl bg-white p-8 shadow-lg border border-slate-200/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-base leading-7 card-desc mb-6">{t.text}</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="card-title font-semibold">{t.name}</p>
                  <p className="card-desc text-sm">{t.city}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next testimonials"
            onClick={() => scroll(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
