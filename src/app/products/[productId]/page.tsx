// src/app/products/[productId]/page.tsx
import Link from "next/link";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  return (
<h1>Details about product {productId}
  <br/>  <Link href={`/products/${productId}/reviews`}>Lihat review</Link>
</h1>
  );
}