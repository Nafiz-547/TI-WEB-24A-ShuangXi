import Link from 'next/link';
import Image from 'next/image'; // Import Image bawaan Next.js

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo SigerTrip (responsive sizing, maintain aspect ratio) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/SIGERTRIP.png"
                alt="Logo SigerTrip"
                width={160}
                height={48}
                className="object-contain cursor-pointer h-10 sm:h-12"
                priority
              />
            </Link>
          </div>

          {/* Menu Navigasi Berpindah Halaman */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-amber-500 font-medium transition duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
            <Link 
              href="/destinasi" 
              className="text-slate-700 hover:text-amber-500 font-medium transition duration-200 text-sm sm:text-base"
            >
              Destinasi
            </Link>
            <Link 
              href="/tentang_kami" 
              className="text-slate-700 hover:text-amber-500 font-medium transition duration-200 text-sm sm:text-base"
            >
              Tentang Kami
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}