import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    // 1. Validasi apakah file ada
    if (!file) {
      return NextResponse.json({ error: "Tidak ada file yang diunggah." }, { status: 400 });
    }

    // 2. Validasi tipe file (Hanya mengizinkan gambar)
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File harus berupa gambar (JPEG/PNG/WEBP)." }, { status: 400 });
    }

    // 3. Konversi file menjadi Buffer Node.js
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 4. Buat nama file unik menggunakan Timestamp agar tidak saling tertimpa
    const uniqueFilename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
    
    // 5. Tentukan lokasi folder penyimpanan (public/uploads)
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // 6. Pastikan folder 'public/uploads' otomatis dibuat jika belum ada di laptop/hosting
    await fs.mkdir(uploadDir, { recursive: true });

    // 7. Tulis file gambar ke dalam disk lokal server
    const finalFilePath = path.join(uploadDir, uniqueFilename);
    await fs.writeFile(finalFilePath, buffer);

    // 8. Kembalikan URL jalur gambar yang bisa langsung dibaca oleh tag <Image> Next.js
    return NextResponse.json({ 
      success: true,
      filePath: `/uploads/${uniqueFilename}` 
    });

  } catch (error) {
    console.error("Kesalahan API Upload:", error);
    return NextResponse.json({ error: "Gagal mengunggah gambar ke server." }, { status: 500 });
  }
}