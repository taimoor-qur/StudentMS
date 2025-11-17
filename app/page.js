import Image from "next/image";



export default function Home() {

  async function studentCount() {
    const totalStudent = await fetch('/api/studentCount');
    const st = await totalStudent.json()
    setStudents(st)
  }

  return (
    <div>
      <h1 className="text-2xl">Welcome to Student Portal</h1>
      <p className="text-green-500">Student, courses and enrollment management area</p>
      <p>No Of Students</p>

    </div>
  );
}
