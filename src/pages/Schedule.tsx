import Header from "../components/Header";
import ScheduleLesson from "../components/Schedule/ScheduleLesson";
import Sidebar from "../components/Sidebar";

const Schedule = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">
        <Header />
        <main className="p-6 overflow-auto flex-1 bg-gray-50">
          <ScheduleLesson />
        </main>
      </div>
    </div>
  );
};

export default Schedule;
