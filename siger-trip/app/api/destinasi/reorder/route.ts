import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, direction } = body;

    // 1. Ambil data rute yang sedang di-klik
    const currentDest = await prisma.findUnique({ where: { id } });
    if (!currentDest) return NextResponse.json({ error: "Data tidak ditemukan" }, { status: 404 });

    // 2. Ambil SEMUA rute di Paket dan HARI yang sama (Diurutkan berdasarkan sortOrder, lalu waktu buat)
    const siblings = await prisma.destination.findMany({
      where: { 
        packageId: currentDest.packageId,
        day: currentDest.day 
      },
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "asc" } // Ini penyelamat jika semua sortOrder bernilai 0
      ],
    });

    // 3. Cari posisi rute saat ini di dalam antrean
    const currentIndex = siblings.findIndex((dest) => dest.id === id);
    if (currentIndex === -1) return NextResponse.json({ error: "Gagal menemukan indeks" }, { status: 400 });

    // 4. Tentukan posisi tujuan (Geser atas atau bawah)
    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    // Jika sudah mentok di paling atas atau paling bawah, abaikan
    if (targetIndex < 0 || targetIndex >= siblings.length) {
      return NextResponse.json({ success: true, message: "Sudah di batas ujung" });
    }

    // 5. Eksekusi Penukaran Posisi (Gunakan Transaksi Database agar aman)
    const currentId = siblings[currentIndex].id;
    const targetId = siblings[targetIndex].id;

    await prisma.$transaction([
      prisma.destination.update({
        where: { id: currentId },
        data: { sortOrder: targetIndex }, // Beri nomor urut baru
      }),
      prisma.destination.update({
        where: { id: targetId },
        data: { sortOrder: currentIndex }, // Beri nomor urut baru
      })
    ]);

    // 6. Rapikan sisa urutan data lainnya agar tidak ada angka ganda (Self-Healing System)
    const cleanupUpdates: any[] = []; // Siapkan keranjang kosong yang bersih

    siblings.forEach((dest, index) => {
      // Hanya masukkan ke keranjang jika rute ini BUKAN rute yang sedang ditukar
      if (dest.id !== currentId && dest.id !== targetId) {
        cleanupUpdates.push(
          prisma.destination.update({
            where: { id: dest.id },
            data: { sortOrder: index },
          })
        );
      }
    });

    // Eksekusi transaksi tanpa perlu pengabaian TypeScript (ts-ignore) sama sekali!
    if (cleanupUpdates.length > 0) {
      await prisma.$transaction(cleanupUpdates);
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Gagal Reorder:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}