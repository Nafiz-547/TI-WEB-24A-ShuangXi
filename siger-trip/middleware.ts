import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // 1. Ambil header otorisasi dari browser pengunjung
  const basicAuth = req.headers.get('authorization');

  // 2. Jika pengunjung memasukkan username & password di popup browser
  if (basicAuth) {
    // Pecah kode enkripsi bawaan browser
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Ambil kredensial asli dari file .env
    const validUser = process.env.ADMIN_USER;
    const validPass = process.env.ADMIN_PASSWORD;

    // Jika cocok, izinkan masuk ke halaman admin
    if (user === validUser && pwd === validPass) {
      return NextResponse.next();
    }
  }

  // 3. Jika belum login atau password salah, munculkan popup bawaan browser
  return new NextResponse('Akses Ditolak. Silakan masukkan kredensial yang benar.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// 4. Aturan: Middleware ini HANYA aktif untuk URL yang mengandung /admin
export const config = {
  matcher: ['/admin/:path*'],
};