//src/app/library/Horror
import Link from "next/link";

export default function GenreHorror() {
  return (
    <div>
      <h1>Ini adalah list buku Romance</h1>
      <p>Lotus in the mud</p>
      <p>Cake Shop</p>
    <Link href="/library">Kembali ke Beranda</Link>
    </div>
  );
}