// src/app/courses/[courseId]/page.tsx
import Link from "next/link";

type Props = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function courseDetail({ params }: Props) {
  const { courseId } = await params;

  return (
<h1>Courses: {courseId}
  <br/>  <Link href={`/courses/${courseId}/materials`}>Lihat materi</Link>
</h1>
  );
}