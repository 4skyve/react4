type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export default async function ReviewDetail({ params }: Props) {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Ini adalah review {reviewId} untuk Produk {productId}
    </h1>
  );
}