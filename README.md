# 🌴 SigerTrip: Gerbang Petualangan Lampung
SigerTrip adalah platform rencana perjalanan (*itinerary*) eksklusif 7 hari yang dirancang khusus untuk memandu wisatawan menjelajahi keindahan tersembunyi Bandar Lampung, mulai dari kedatangan di Bakauheni hingga eksplorasi wisata alam dan kuliner lokal.
Proyek ini dibangun dengan fokus pada arsitektur sistem yang tangguh, antarmuka pengguna yang modern, serta sentralisasi data (*Single Source of Truth*) menggunakan infrastruktur *cloud*.

🚀 **[Lihat Live Deployment SigerTrip di Sini](https://sigertrip-web.vercel.app/)**


## 🛠️ Arsitektur & Teknologi (Tech Stack)
Proyek ini menggunakan standar pengembangan web modern dengan pemisahan yang jelas antara antarmuka (*frontend*) dan manajemen tata kelola data (*backend/infrastructure*):
* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **ORM & Database Management:** [Prisma ORM](https://www.prisma.io/)
* **Cloud Database:** [Supabase](https://supabase.com/) (PostgreSQL dengan arsitektur *Connection Pooling*)
* **Deployment & Hosting:** [Vercel](https://vercel.com/) (Serverless)
* **Security:** HTTP Basic Authentication Middleware (Akses *Dashboard* Admin)


## ✨ Fitur Utama
1. **Katalog Destinasi Terpusat:** Menampilkan sorotan alam, kuliner, dan rencana perjalanan yang datanya ditarik secara *real-time* dari *cloud database*.
2. **Dashboard Admin Aman:** Rute `/admin` dilindungi oleh *Middleware* khusus yang memblokir akses publik tanpa otorisasi.
3. **Optimasi Gambar:** Menggunakan komponen `next/image` untuk performa *rendering* aset visual yang maksimal.
4. **Cloud Database Sync:** Sinkronisasi mulus antar-anggota tim tanpa perlu konfigurasi *database* lokal yang rumit.


## 💻 Panduan Pengembangan Lokal (Local Development)
Untuk anggota tim yang ingin menjalankan proyek ini di mesin lokal, silakan ikuti langkah-langkah tata kelola infrastruktur berikut:
### 1. Kloning Repositori
```bash
git clone [https://github.com/](https://github.com/)[USERNAME_GITHUB]/sigertrip.git
cd sigertrip
