import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Students" value={12} />
        <StatCard title="Upcoming Classes" value={3} color="bg-green-100" />
        <StatCard title="Pending Tasks" value={5} color="bg-red-100" />
      </main>
    </div>
  </div>
);

export default Dashboard;
