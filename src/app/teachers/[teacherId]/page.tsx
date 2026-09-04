// src/app/teachers/[teacherId]/page.tsx

type Props = {
  params: Promise<{
    teacherId: string;
  }>;
};

export default async function TeacherDetails({ params }: Props) {
  const { teacherId } = await params;

  return (
<h1>Melihat Profil Akademik untuk guru: {teacherId}</h1>
  );
}