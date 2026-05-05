import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function DetailPage({ params }: { params: { id: string } }) {
  // Ambil 1 data berdasarkan ID
  const data = await prisma.destination.findUnique({
    where: { id: params.id },
  });

  if (!data) return notFound();

  return (
    <div className="min-h-screen">
      
      <div className="relative h-[60vh] w-full">
        <Image src="{data.image}" alt="{data.name}" fill className="object-cover"/>
        <div className="absolute inset-0 bg-black/40 flex items-end p-10">
          <h1 className="text-5xl font-bold text-white">{data.name}</h1>
        </div>
      </div>
      <div className="p-10 max-w-4xl mx-auto">
         <p className="text-lg leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
}