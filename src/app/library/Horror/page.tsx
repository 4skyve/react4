//src/app/library/Horror
import Link from "next/link";

export default function GenreHorror() {
  return (
    <div>
      <h1>Ini adalah list buku horror</h1>
      <p>The shinning</p>
      <p>Danur</p>
    <Link href="/library">Kembali ke Beranda</Link>
    </div>
  );
}