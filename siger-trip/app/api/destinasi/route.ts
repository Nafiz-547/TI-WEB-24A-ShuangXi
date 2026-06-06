import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { packageId, name, category, day, location, description, image, price } = body;

    if (!packageId || !name || !category || !day || !price) {
      return NextResponse.json({ error: "Kolom wajib diisi!" }, { status: 400 });
    }

    // Simpan titik pemberhentian baru ke database
    const newDestination = await prisma.destination.create({
      data: {
        packageId,
        name,
        category,
        day: parseInt(day),
        location,
        description,
        image,
        price,
      },
    });

    return NextResponse.json({ success: true, data: newDestination });
  } catch (error) {
    console.error("Kesalahan API Destinasi:", error);
    return NextResponse.json({ error: "Gagal menambahkan rute destinasi." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID Rute tidak ditemukan." }, { status: 400 });
    }

    await prisma.destination.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Rute berhasil dihapus." });
  } catch (error) {
    console.error("Kesalahan API Delete Destinasi:", error);
    return NextResponse.json({ error: "Gagal menghapus rute." }, { status: 500 });
  }
}