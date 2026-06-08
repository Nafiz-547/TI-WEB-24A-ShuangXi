"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RuteFormProps {
  packageId: string;
  totalDays: number;
  editData?: {
    id: string;
    name: string;
    category: string;
    day: number;
    location: string;
    description: string;
    image: string;
    price: string;
  } | null;
}

export default function RuteForm({ packageId, totalDays, editData }: RuteFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mengisi state awal secara kondisional (Jika editData ada, gunakan datanya)
  const [name, setName] = useState(editData ? editData.name : "");
  const [category, setCategory] = useState(editData ? editData.category : "Wisata");
  const [day, setDay] = useState(editData ? editData.day.toString() : "1");
  const [location, setLocation] = useState(editData ? editData.location : "");
  const [description, setDescription] = useState(editData ? editData.description : "");
  const [price, setPrice] = useState(editData ? editData.price : "");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Default gunakan gambar lama jika sedang mengedit dan tidak mengunggah berkas baru
      let imagePath = editData ? editData.image : "/images/placeholder.jpg";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok) throw new Error(uploadData.error || "Gagal upload gambar.");
        imagePath = uploadData.filePath;
      }

      // Tentukan metode API & Body data berdasarkan mode (Edit / Tambah)
      const url = "/api/destinasi";
      const method = editData ? "PUT" : "POST";
      const payload = editData 
        ? { id: editData.id, name, category, day, location, description, image: imagePath, price }
        : { packageId, name, category, day, location, description, image: imagePath, price };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Gagal memproses data rute.");

      if (editData) {
        // Jika sukses mengedit, bersihkan URL query parameter agar kembali ke mode tambah
        router.push(`/admin/paket/${packageId}/rute`);
      } else {
        // Jika sukses menambah, cukup reset inputan form biasa
        setName("");
        setLocation("");
        setDescription("");
        setPrice("");
        setFile(null);
      }
      
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-[11px] font-semibold text-red-600">
          ⚠️ {error}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="dest-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nama Lokasi / Aktivitas</label>
        <input
          id="dest-name"
          type="text"
          required
          placeholder="Contoh: Pantai Klara"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] bg-slate-50/50"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="dest-category" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kategori</label>
          <select
            id="dest-category"
            title="Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#f78232] bg-slate-50/50"
          >
            <option value="Wisata">🏝️ Wisata</option>
            <option value="Kuliner">🍱 Kuliner</option>
            <option value="Penginapan">🏨 Penginapan</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dest-day" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hari Ke-</label>
          <select
            id="dest-day"
            title="Pilih Hari"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#f78232] bg-slate-50/50"
          >
            {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>Hari {d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dest-location" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Alamat / Wilayah</label>
        <input
          id="dest-location"
          type="text"
          required
          placeholder="Contoh: Pesawaran"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] bg-slate-50/50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dest-price" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimasi Biaya Mandiri</label>
        <input
          id="dest-price"
          type="text"
          required
          placeholder="Contoh: Rp 15.000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] bg-slate-50/50"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dest-desc" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Agenda Kegiatan</label>
        <textarea
          id="dest-desc"
          rows={3}
          required
          placeholder="Apa saja kegiatan yang dilakukan?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#f78232] bg-slate-50/50 resize-none leading-relaxed"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dest-file" className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Foto Lokasi (Opsional jika edit)</label>
        <input
          id="dest-file"
          type="file"
          accept="image/*"
          title="Foto Lokasi"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
          }}
          className="w-full text-[11px] text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-bold file:bg-orange-50 file:text-[#f78232] hover:file:bg-orange-100 cursor-pointer"
        />
      </div>

      <div className="flex gap-2 pt-2">
        {editData && (
          <Link
            href={`/admin/paket/${packageId}/rute`}
            className="w-1/3 border border-slate-200 text-slate-500 text-center font-bold text-xs py-3 rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all"
          >
            Batal
          </Link>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`font-bold text-xs py-3 rounded-xl active:scale-[0.98] transition-all disabled:opacity-50 shadow-sm ${editData ? "w-2/3 bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/10" : "w-full bg-[#f78232] text-white hover:bg-orange-600 shadow-orange-500/10"}`}
        >
          {loading ? "⌛ Memproses..." : editData ? "💾 Simpan Perubahan" : "💾 Tambah ke Linimasa"}
        </button>
      </div>
    </form>
  );
}