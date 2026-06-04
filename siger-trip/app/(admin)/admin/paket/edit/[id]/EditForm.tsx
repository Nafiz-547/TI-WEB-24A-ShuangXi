"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditPackageForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Inisialisasi state langsung dengan data lama dari database
  const [title, setTitle] = useState(initialData.title);
  const [duration, setDuration] = useState(initialData.duration.toString());
  const [category, setCategory] = useState(initialData.category);
  const [description, setDescription] = useState(initialData.description || "");
  const [basePrice, setBasePrice] = useState(initialData.basePrice);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Gunakan path gambar lama sebagai default jika admin tidak mengunggah gambar baru
      let imagePath = initialData.image;

      // Jika ada file baru yang dimasukkan, jalankan upload engine terlebih dahulu
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok)
          throw new Error(uploadData.error || "Gagal mengunggah gambar.");

        imagePath = uploadData.filePath;
      }

      // Kirim pembaruan data lewat metode PUT ke API Paket
      const response = await fetch("/api/paket", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: initialData.id,
          title,
          duration,
          category,
          description,
          basePrice,
          image: imagePath,
        }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Gagal memperbarui paket.");

      router.push("/admin/paket");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Nama Paket Wisata
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kategori Paket
            </label>
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

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Durasi Tur (Hari)
            </label>
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

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Harga Mulai Dari
          </label>
          <input
            type="text"
            required
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Deskripsi Singkat Paket
          </label>
          <textarea
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] transition-colors bg-slate-50/50 resize-none leading-relaxed"
          />
        </div>

        <div className="flex flex-col gap-1.5 p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/40">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Ganti Banner Gambar (Opsional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0])
                setFile(e.target.files[0]);
            }}
            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-50 file:text-[#f78232] hover:file:bg-orange-100 mt-1 cursor-pointer"
          />
          <p className="text-[10px] text-slate-400 mt-1">
            Kosongkan jika tidak ingin mengubah banner gambar lama.
          </p>
        </div>

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
            className="bg-[#f78232] text-white font-bold text-xs px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 shadow-sm"
          >
            {loading ? "⌛ Menyimpan Perubahan..." : "💾 Simpan Pembaruan"}
          </button>
        </div>
      </form>
    </div>
  );
}
