// src/app/courses/[courseId]/materials
import Link from "next/link";

export default function materialList() {
  return (
    <div>
    <h1>List Material</h1>
    <Link href="materials/bab_1">bab1</Link>
    <br />
    <Link href="materials/bab_2">bab 2</Link>
    <br />
    </div>
  );
}