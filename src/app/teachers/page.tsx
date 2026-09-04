//src/app/teachers/page.tsx
import Link from "next/link";

export default function TeacherList() {
return (
<div>
    <h1>Teacher List</h1>
    <Link href="/teachers/budi">budi</Link>
    <br />
    <Link href="/teachers/citra">Citra</Link>
    <br />
    <Link href="/teachers/siti">Siti</Link>
</div>
  );
} 