// src/app/courses/[courseId]/materials/[materialId]
type Props = {
  params: Promise<{
    materialId: string;
    courseId: string;
  }>;
};

export default async function materialDetail({ params }: Props) {
  const { materialId, courseId } = await params;

  return (
    <h1>
      Melihat materi {materialId} untuk mata pelajaran {courseId}
    </h1>
  );
}