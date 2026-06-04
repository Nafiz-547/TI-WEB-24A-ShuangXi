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