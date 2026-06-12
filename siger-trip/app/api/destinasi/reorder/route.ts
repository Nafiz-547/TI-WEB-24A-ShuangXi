import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { id, direction } = await req.json();

    // 1. Ambil data rute yang ditargetkan
    const currentDest = await prisma.destination.findUnique({ where: { id } });
    if (!currentDest) return NextResponse.json({ error: "Rute tidak ditemukan" }, { status: 404 });

    // 2. Ambil seluruh rute di hari yang sama, urutkan berdasarkan sortOrder lalu waktu pembuatan
    const siblingDestinations = await prisma.destination.findMany({
      where: { packageId: currentDest.packageId, day: currentDest.day },
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "asc" }
      ],
    });

    const currentIndex = siblingDestinations.findIndex((d) => d.id === id);
    const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    // Cegah pergeseran jika sudah melampaui batas atas atau bawah rute
    if (targetIndex < 0 || targetIndex >= siblingDestinations.length) {
      return NextResponse.json({ success: true, message: "Sudah berada di batas maksimal" });
    }

    // 3. Bangun transaksi massal untuk memperbarui nomor urut berdasarkan urutan indeks baru
    const updates = siblingDestinations.map((dest, index) => {
      let newOrder = index;
      
      // Tukar indeks posisi jika item berada di area pergeseran
      if (index === currentIndex) newOrder = targetIndex;
      if (index === targetIndex) newOrder = currentIndex;

      return prisma.destination.update({
        where: { id: dest.id },
        data: { sortOrder: newOrder },
      });
    });

    // Jalankan pembaruan data secara serempak di PostgreSQL
    await prisma.$transaction(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kesalahan Sistem Reorder:", error);
    return NextResponse.json({ error: "Gagal memproses perubahan posisi jalur linimasa" }, { status: 500 });
  }
}