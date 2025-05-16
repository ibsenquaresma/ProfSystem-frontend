import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StudentDetails from "../components/student/StudentDetails";

const students = [
  { name: "Alice Johnson", email: "alice@example.com", progress: 80 },
  { name: "Bruno Silva", email: "bruno@example.com", progress: 65 },
  { name: "Camila Torres", email: "camila@example.com", progress: 90 },
];

const StudentProfile = () => {
  const { id } = useParams<{ id: string }>();
  const student = students[parseInt(id || "0", 10)];

  if (!student) return <div className="p-6">Student not found.</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <StudentDetails  />
        </main>
      </div>
    </div>
  );
};

export default StudentProfile;