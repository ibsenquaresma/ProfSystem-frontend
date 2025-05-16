import { BookOpen, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 h-screen bg-gray-900 text-white p-6">
    <h2 className="text-2xl font-bold mb-6">Teacher Panel</h2>
    <nav className="space-y-4">
      <Link to="/" className="flex items-center gap-2 hover:text-gray-300"><BookOpen /> Dashboard</Link>
      <Link to="/students" className="flex items-center gap-2 hover:text-gray-300"><Users /> Students</Link>
      <Link to="/schedule" className="flex items-center gap-2 hover:text-gray-300"><Calendar /> Schedule</Link>
    </nav>
  </aside>
);

export default Sidebar;
