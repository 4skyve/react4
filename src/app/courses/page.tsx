//src/app/courses/page.tsx
import Link from "next/link";

export default function coursesList() {
  return (
  <div>
<h1>Daftar Courses</h1>
  <Link href="/courses/matematika">matematika</Link>
  <br />
  <Link href="/courses/ipas">ipas</Link>
  <br />
  <Link href="/courses/kik">kik</Link>
  </div>
  );
}