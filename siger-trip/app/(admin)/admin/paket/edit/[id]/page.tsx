import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import EditPackageForm from "./EditForm";

type Params = Promise<{ id: string }>;

export default async function AdminEditPaketPage({ params }: { params: Params }) {
  // Await params sesuai standar Next.js terbaru
  const { id } = await params;

  // Cari data lama paket berdasarkan ID
  const travelPackage = await prisma.package.findUnique({
    where: { id },
  });

  // Jika ID asal-asalan dan paket tidak ditemukan, lempar ke halaman 404
  if (!travelPackage) return notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/paket" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
          ← Kembali ke Daftar Paket
        </Link>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-2">Edit Paket Wisata</h1>
        <p className="text-xs text-slate-500 mt-1">Mengubah informasi paket "{travelPackage.title}".</p>
      </div>

      {/* Panggil komponen Form Client dan kirim data lama sebagai data awal */}
      <EditPackageForm initialData={travelPackage} />
    </div>
  );
}