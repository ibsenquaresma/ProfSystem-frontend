import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StudentTable from "../components/student/StudentTable";

const Students = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-6">
        <StudentTable />
      </main>
    </div>
  </div>
);

export default Students;
