"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReorderButtons({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleReorder = async (direction: "up" | "down") => {
    setLoading(true);
    try {
      const res = await fetch("/api/destinasi/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, direction }),
      });
      
      if (res.ok) {
        // Menyegarkan data halaman secara halus tanpa reload total browser
        router.refresh();
      }
    } catch (err) {
      console.error("Gagal mengubah urutan:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      <button
        type="button"
        disabled={loading}
        onClick={() => handleReorder("up")}
        className="p-1 text-[10px] text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors disabled:opacity-40"
        title="Naikkan Urutan"
      >
        ▲
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={() => handleReorder("down")}
        className="p-1 text-[10px] text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors disabled:opacity-40"
        title="Turunkan Urutan"
      >
        ▼
      </button>
    </div>
  );
}