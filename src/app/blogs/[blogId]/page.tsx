// src/app/products/[productId]/page.tsx

type Props = {
  params: Promise<{
    blogId: string;
  }>;
};

export default async function blog({ params }: Props) {
  const { blogId } = await params;

  return (
    <h1>Details about Blog {blogId}</h1>
  );
}