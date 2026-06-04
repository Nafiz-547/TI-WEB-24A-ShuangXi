"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  packageId,
  packageTitle,
}: {
  packageId: string;
  packageTitle: string;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    // Tampilkan konfirmasi pop-up standar browser demi keamanan UX
    const confirmDelete = confirm(
      `Apakah Anda yakin ingin menghapus paket "${packageTitle}"?\nSemua rute destinasi di dalam paket ini juga akan ikut terhapus.`,
    );

    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/paket?id=${packageId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Gagal menghapus.");
      }

      // Paksa Next.js me-refresh data tabel di background tanpa reload halaman penuh
      router.refresh();
    } catch (error: any) {
      alert(`⚠️ Error: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-red-500 hover:text-red-600 transition-colors bg-white font-semibold text-[11px] disabled:opacity-50"
    >
      {isDeleting ? "⌛..." : "🗑️ Hapus"}
    </button>
  );
}
