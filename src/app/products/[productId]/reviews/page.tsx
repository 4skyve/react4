//src/app/products/page.tsx
import Link from "next/link";

export default function reviewList() {
  return (
    <div>
    <h1>review List</h1>
    <Link href="reviews/1">review 1</Link>
    <br />
    <Link href="reviews/2">review 2</Link>
    <br />
    </div>
  );
}