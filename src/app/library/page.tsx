//src/app/library/page.tsx
import Link from "next/link";

export default function Library() {
  return (
    <div>
      <h1>Daftar Genre Buku</h1>
      <Link href="/library//Horror">Horror</Link> <br />
      <Link href="/library/romance">Romance</Link>
    </div>
  );
}