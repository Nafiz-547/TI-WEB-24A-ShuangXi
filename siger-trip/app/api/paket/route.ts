import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, duration, category, description, basePrice, image } = body;

    // Validasi input standar
    if (!title || !duration || !category || !basePrice) {
      return NextResponse.json({ error: "Kolom wajib diisi!" }, { status: 400 });
    }

    // Masukkan data ke PostgreSQL lewat Prisma
    const newPackage = await prisma.package.create({
      data: {
        title,
        duration: parseInt(duration),
        category,
        description,
        basePrice,
        image, // Berisi string path gambar dari API upload
      },
    });

    return NextResponse.json({ success: true, data: newPackage });
  } catch (error) {
    console.error("Kesalahan API Paket:", error);
    return NextResponse.json({ error: "Gagal menyimpan paket wisata baru." }, { status: 500 });
  }
}

// Tambahkan method DELETE di dalam file app/api/paket/route.ts yang sama
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID Paket tidak ditemukan." }, { status: 400 });
    }

    // Hapus paket dari PostgreSQL (Otomatis menghapus rute destinasi di dalamnya karena onDelete: Cascade)
    await prisma.package.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Paket berhasil dihapus." });
  } catch (error) {
    console.error("Kesalahan API Delete Paket:", error);
    return NextResponse.json({ error: "Gagal menghapus paket wisata." }, { status: 500 });
  }
}

// Tambahkan method PUT di dalam file app/api/paket/route.ts yang sama
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, duration, category, description, basePrice, image } = body;

    if (!id || !title || !duration || !category || !basePrice) {
      return NextResponse.json({ error: "Kolom wajib diisi!" }, { status: 400 });
    }

    // Perbarui data paket di PostgreSQL berdasarkan ID
    const updatedPackage = await prisma.package.update({
      where: { id },
      data: {
        title,
        duration: parseInt(duration),
        category,
        description,
        basePrice,
        image, // Update dengan path gambar baru (jika ada)
      },
    });

    return NextResponse.json({ success: true, data: updatedPackage });
  } catch (error) {
    console.error("Kesalahan API Update Paket:", error);
    return NextResponse.json({ error: "Gagal memperbarui data paket wisata." }, { status: 500 });
  }
}