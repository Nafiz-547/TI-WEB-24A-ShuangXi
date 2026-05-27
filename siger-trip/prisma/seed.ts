import { loadEnvConfig } from '@next/env';
// 1. Panggil variabel environment (.env)
loadEnvConfig(process.cwd());

// 2. KUNCI RAHASIA: Import instansiasi prisma yang SUDAH JALAN di Next.js kamu
import { prisma } from '../lib/prisma';

async function main() {
  // Bersihkan data lama terlebih dahulu agar tidak terjadi duplikasi ID
  await prisma.destination.deleteMany({});
  await prisma.package.deleteMany({});

  console.log('⏳ Sedang menyuntikkan data paket wisata SigerTrip...');

  // DATA PAKET 1: Perkotaan & Budaya
  const pkgBdl = await prisma.package.create({
    data: {
      id: 'pkg-bdl-7d',
      title: '7 Hari Keliling Kota & Budaya Bandar Lampung',
      duration: 7,
      category: 'Perkotaan',
      description: 'Jelajahi sudut ikonik ibu kota Lampung selama seminggu penuh. Mulai dari wisata sejarah di museum, berburu kain tapis khas, hingga menikmati city light dari perbukitan kota.',
      basePrice: 'Rp 850.000',
      image: '/images/banner-bdl.webp',
    },
  });

  // DATA PAKET 2: Kuliner
  const pkgKuliner = await prisma.package.create({
    data: {
      id: 'pkg-kuliner-3d',
      title: '3 Hari Wisata Kuliner Legendaris Bandar Lampung',
      duration: 3,
      category: 'Kuliner',
      description: 'Manjakan lidahmu dengan petualangan rasa 3 hari penuh. Menikmati bakso daging sapi premium, kopi durian khas, hingga berburu oleh-oleh keripik pisang Gang PU.',
      basePrice: 'Rp 350.000',
      image: '/images/banner-kuliner.webp',
    },
  });

  // DATA PAKET 3: Alam
  const pkgAlam = await prisma.package.create({
    data: {
      id: 'pkg-alam-5d',
      title: '5 Hari Petualangan Alam & Gunung Bandar Lampung',
      duration: 5,
      category: 'Alam',
      description: 'Paket liburan untuk para pecinta alam. Tracking perbukitan sejuk, bermain air di air terjun tersembunyi, dan merasakan sensasi glamping di kaki gunung.',
      basePrice: 'Rp 650.000',
      image: '/images/banner-alam.webp',
    },
  });

  console.log('✅ 3 Paket utama berhasil dibuat. Melanjutkan input rute destinasi...');

  // SUNTIK DATA TIMELINE DESTINASI
  await prisma.destination.createMany({
    data: [
      // Rute Paket 1 (Perkotaan) - Hari 1
      {
        id: 'bdl-day1-1',
        packageId: pkgBdl.id,
        day: 1,
        name: 'Museum Lampung',
        category: 'Wisata',
        location: 'Kedaton, Bandar Lampung',
        description: 'Melihat sejarah purbakala Lampung, rumah adat, hingga koleksi kain tapis kuno.',
        image: '/images/museum-lampung.webp',
        price: 'Rp 5.000',
      },
      {
        id: 'bdl-day1-2',
        packageId: pkgBdl.id,
        day: 1,
        name: 'Nasi Uduk Toha',
        category: 'Kuliner',
        location: 'Jl. Kartini, Bandar Lampung',
        description: 'Makan malam di sentra nasi uduk paling legendaris di Bandar Lampung dengan pilihan lauk ayam dan jeroan hangat.',
        image: '/images/uduk-toha.webp',
        price: 'Rp 25.000 / porsi',
      },
      {
        id: 'bdl-day1-3',
        packageId: pkgBdl.id,
        day: 1,
        name: 'Hotel Horison Bandar Lampung',
        category: 'Penginapan',
        location: 'Jl. Kartini (Pusat Kota)',
        description: 'Istirahat di hotel strategis tengah kota untuk mempermudah mobilisasi hari berikutnya.',
        image: '/images/hotel-horison.webp',
        price: 'Rp 450.000 / malam',
      },

      // Rute Paket 2 (Kuliner) - Hari 1
      {
        id: 'kul-day1-1',
        packageId: pkgKuliner.id,
        day: 1,
        name: 'Sentra Keripik Pisang Gang PU',
        category: 'Wisata',
        location: 'Kedaton, Bandar Lampung',
        description: 'Melihat langsung proses pengolahan dan mencicipi keripik pisang khas Lampung berbagai rasa yang melimpah bumbunya.',
        image: '/images/gang-pu.webp',
        price: 'Gratis Masuk',
      },
      {
        id: 'kul-day1-2',
        packageId: pkgKuliner.id,
        day: 1,
        name: 'Bakso Son Haji Sony',
        category: 'Kuliner',
        location: 'Jl. Wolter Monginsidi, Bandar Lampung',
        description: 'Menikmati makan siang bakso legendaris Lampung yang terkenal dengan tekstur garing dan rasa daging sapinya yang sangat kuat.',
        image: '/images/bakso-sony.webp',
        price: 'Rp 35.000 / porsi',
      },

      // Rute Paket 3 (Alam) - Hari 1
      {
        id: 'alm-day1-1',
        packageId: pkgAlam.id,
        day: 1,
        name: 'Taman Kupu-Kupu Gita Persada',
        category: 'Wisata',
        location: 'Kemiling, Kaki Gunung Betung',
        description: 'Konservasi alam yang sejuk dengan penangkaran ratusan spesies kupu-kupu lokal yang indah.',
        image: '/images/gita-persada.webp',
        price: 'Rp 15.000',
      },
      {
        id: 'alm-day1-2',
        packageId: pkgAlam.id,
        day: 1,
        name: 'Wira Garden Glamping',
        category: 'Penginapan',
        location: 'Batu Putuk, Bandar Lampung',
        description: 'Bermalam di tenda glamping premium pinggir sungai jernih dengan suasana alam kaki gunung yang asri.',
        image: '/images/wira-garden.webp',
        price: 'Rp 500.000 / malam',
      },
    ],
  });

  console.log('🎉 Semua data berhasil disuntikkan ke database!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });