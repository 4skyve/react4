//src/app/products/page.tsx
import Link from "next/link";

export default function ProductList() {
  return (
    <div>
    <h1>Blog List</h1>
    <Link href="/blogs/1">Blog 1</Link>
    <br />
    <Link href="/blogs/2">Blog 2</Link>
    <br />
    </div>
  );
}