import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { id, direction } = await req.json();

    // 1. Cari data rute yang mau digeser
    const currentDest = await prisma.destination.findUnique({ where: { id } });
    if (!currentDest)
      return NextResponse.json(
        { error: "Rute tidak ditemukan" },
        { status: 404 },
      );

    // 2. Cari rute pembanding di hari yang sama
    const siblingDestinations = await prisma.destination.findMany({
      where: { packageId: currentDest.packageId, day: currentDest.day },
      orderBy: { sortOrder: "asc" },
    });

    const currentIndex = siblingDestinations.findIndex((d) => d.id === id);
    let targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    // Pastikan pergeseran tidak melebihi batas atas atau batas bawah
    if (targetIndex < 0 || targetIndex >= siblingDestinations.length) {
      return NextResponse.json({
        success: true,
        message: "Sudah di batas maksimal",
      });
    }

    const targetDest = siblingDestinations[targetIndex];

    // 3. Tukar nilai sortOrder di database menggunakan Prisma Transaction
    await prisma.$transaction([
      prisma.destination.update({
        where: { id: currentDest.id },
        data: { sortOrder: targetDest.sortOrder },
      }),
      prisma.destination.update({
        where: { id: targetDest.id },
        data: { sortOrder: currentDest.sortOrder },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error reordering:", error);
    return NextResponse.json(
      { error: "Gagal menggeser urutan" },
      { status: 500 },
    );
  }
}
