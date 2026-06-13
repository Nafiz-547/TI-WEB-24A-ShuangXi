"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReorderButtons({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleMove = async (direction: "up" | "down") => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/destinasi/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, direction }),
      });

      if (res.ok) {
        // PERINTAH SAKTI: Paksa Next.js mengambil data segar dari database
        router.refresh(); 
      } else {
        console.error("Gagal menggeser posisi");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 rounded-md overflow-hidden border border-slate-200 shadow-sm mr-2">
      <button
        onClick={() => handleMove("up")}
        disabled={loading}
        className="px-2 py-0.5 text-[9px] text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors disabled:opacity-30"
        title="Geser ke Atas"
      >
        ▲
      </button>
      <div className="h-px w-full bg-slate-200"></div>
      <button
        onClick={() => handleMove("down")}
        disabled={loading}
        className="px-2 py-0.5 text-[9px] text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors disabled:opacity-30"
        title="Geser ke Bawah"
      >
        ▼
      </button>
    </div>
  );
}