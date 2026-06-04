"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminTambahPaketPage() {
  const router = useRouter();
  
  // State Penampung Form Teks
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("3");
  const [category, setCategory] = useState("Kuliner");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  
  // State Penampung File & Indikator Loading
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let imagePath = "/images/placeholder.jpg"; // Default jika tidak upload gambar

      // FASE 1: Proses Upload Gambar jika file dipilih
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadResponse.json();

        if (!uploadResponse.ok) {
          throw new Error(uploadData.error || "Gagal mengunggah gambar.");
        }

        imagePath = uploadData.filePath; // Ambil path unik dari server
      }

      // FASE 2: Kirim Seluruh Data ke API Paket
      const packageResponse = await fetch("/api/paket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          duration,
          category,
          description,
          basePrice,
          image: imagePath,
        }),
      });

      const packageData = await packageResponse.json();

      if (!packageResponse.ok) {
        throw new Error(packageData.error || "Gagal menyimpan paket.");
      }

      // Jika sukses, kembalikan admin ke halaman tabel utama dengan data ter-refresh
      router.push("/admin/paket");
      router.refresh();

    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* NAVIGASI KEMBALI */}
      <div>
        <Link href="/admin/paket" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
          ← Kembali ke Daftar Paket
        </Link>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-2">Tambah Paket Wisata Baru</h1>
        <p className="text-xs text-slate-500 mt-1">Buat katalog paket baru. Seluruh inputan file akan otomatis dienkripsi dan disimpan ke server internal.</p>
      </div>

      {/* BOX FORM UTAMA */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60">
        
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* INPUT JUDUL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nama Paket Wisata</label>
            <input
              type="text"
              required
              placeholder="Contoh: 3 Hari Keliling Kuliner Legendaris"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* SELECT KATEGORI */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori Paket</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
              >
                <option value="Kuliner">🍱 Kuliner</option>
                <option value="Alam">🏔️ Alam</option>
                <option value="Perkotaan">🏙️ Perkotaan</option>
              </select>
            </div>

            {/* INPUT DURASI */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi Tur (Hari)</label>
              <input
                type="number"
                min="1"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
              />
            </div>
          </div>

          {/* INPUT HARGA */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Harga Mulai Dari</label>
            <input
              type="text"
              required
              placeholder="Contoh: Rp 350.000"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
            />
          </div>

          {/* INPUT DESKRIPSI */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deskripsi Singkat Paket</label>
            <textarea
              rows={4}
              required
              placeholder="Jelaskan secara garis besar apa saja yang akan didapatkan wisatawan di paket ini..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50 resize-none leading-relaxed"
            />
          </div>

          {/* INPUT FILE UPLOAD GAMBAR */}
          <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/40">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Banner Utama Paket (Gambar)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-50 file:text-[#f78232] hover:file:bg-orange-100 file:cursor-pointer cursor-pointer mt-1"
            />
            <p className="text-[10px] text-slate-400 mt-1">Format yang didukung: JPG, PNG, WEBP. Maksimal 2MB.</p>
          </div>

          {/* TOMBOL AKSI */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <Link
              href="/admin/paket"
              className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Batal
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#f78232] text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-orange-500/10"
            >
              {loading ? "⌛ Sedang Menyimpan..." : "💾 Simpan Paket Wisata"}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}