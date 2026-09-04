//src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    //ini page.tsx tugas praktikum

    // <div>
    // <h1>Welcome to Home</h1>
    // <Link href='/profile'>Profile</Link>
    // <br />
    // <Link href='/about'>About</Link>
    // <br />
    // <Link href='/blogs'>Blog</Link>
    // <br />
    // <Link href='/products'>Products</Link>
    // <br />
    // </div>

    <div>
    <h1>Selamat datang di portal sekolah :D</h1> 
    <p>Pilih halaman yang diminati yah</p>
    <Link href='/teachers'>Teacher</Link> <br />
    <Link href='/library'>Library</Link> <br />
    <Link href='/courses'>Courses</Link>
    </div>
  );
}