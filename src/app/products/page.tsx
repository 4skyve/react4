//src/app/products/page.tsx
import Link from "next/link";

export default function ProductList() {
  return (
  <div>
  <Link href="/products/1">Product 1 </Link>
  <br />
  <Link href="/products/2">Product 2</Link>
  <br />
  <Link href="/products/3">Product 3</Link>
  </div>
  );
}