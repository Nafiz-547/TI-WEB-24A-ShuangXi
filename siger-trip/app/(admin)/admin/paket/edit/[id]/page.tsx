import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import EditPackageForm from "./EditForm";

type Params = Promise<{ id: string }>;

export default async function AdminEditPaketPage({ params }: { params: Params }) {
  const { id } = await params;

  const travelPackage = await prisma.package.findUnique({
    where: { id },
  });

  if (!travelPackage) return notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/paket" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
          ← Kembali ke Daftar Paket
        </Link>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 mt-2">Edit Paket Wisata</h1>
        <p className="text-xs text-slate-500 mt-1">
          Mengubah informasi paket &quot;{travelPackage.title}&quot;.
        </p>
      </div>

      <EditPackageForm initialData={travelPackage} />
    </div>
  );
}