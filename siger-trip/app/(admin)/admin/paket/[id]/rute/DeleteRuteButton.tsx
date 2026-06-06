"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteRuteButtonProps {
  id: string;
  name: string;
}

export default function DeleteRuteButton({ id, name }: DeleteRuteButtonProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = confirm(
      `Hapus titik rute "${name}" dari linimasa harian?`,
    );
    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/destinasi?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus rute.");
      router.refresh();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Terjadi kesalahan.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-xs p-2 text-slate-400 hover:text-red-500 rounded-lg border border-transparent hover:border-slate-200 transition-all self-center active:scale-[0.95]"
      title="Hapus Rute"
    >
      {isDeleting ? "⏳" : "🗑️"}
    </button>
  );
}
