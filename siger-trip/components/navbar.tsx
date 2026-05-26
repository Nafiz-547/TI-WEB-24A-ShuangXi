import Link from 'next/link';
import Image from 'next/image'; // Import Image bawaan Next.js

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo SigerTrip (Sekarang bisa diklik untuk kembali ke Home) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/SIGERTRIP.png"
                alt="Logo SigerTrip"
                width={130}
                height={40}
                className="object-contain cursor-pointer"
                priority // Menandakan gambar ini penting untuk langsung dimuat
              />
            </Link>
          </div>

          {/* Menu Navigasi Berpindah Halaman */}
          <div className="flex space-x-6 sm:space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
            <Link 
              href="/destinasi" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200 text-sm sm:text-base"
            >
              Destinasi
            </Link>
            <Link 
              href="/tentang-kami" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200 text-sm sm:text-base"
            >
              Tentang Kami
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}