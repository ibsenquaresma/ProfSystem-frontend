import { mockLessons } from "../../data/mockStudentLessons";
import LessonHistory from "./LessonHistory";
import { useState } from "react";

type Lesson = {
  id: number;
  date: string;
  topic: string;
  notes?: string;
};

const StudentDetails = () => {
  const [lessons, setLessons] = useState<Lesson[]>([
    { id: 1, date: "2025-05-10", topic: "Past Simple" },
    { id: 2, date: "2025-05-14", topic: "Future Continuous" },
  ]);

  const [newLesson, setNewLesson] = useState({ date: "", topic: "", notes: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAdd = () => {
    if (!newLesson.date || !newLesson.topic) return;
    const newEntry: Lesson = {
      id: lessons.length + 1,
      date: newLesson.date,
      topic: newLesson.topic,
      notes: newLesson.notes,
    };
    setLessons([...lessons, newEntry]);
    setNewLesson({ date: "", topic: "", notes: "" });
  };

  const handleEdit = (id: number) => {
    const lesson = lessons.find((l) => l.id === id);
    if (lesson) {
      setNewLesson({ date: lesson.date, topic: lesson.topic, notes: lesson.notes ?? "" });
      setEditingId(id);
    }
  };

  const handleUpdate = () => {
    if (editingId === null) return;
    setLessons((prev) =>
      prev.map((l) =>
        l.id === editingId ? { ...l, ...newLesson } : l
      )
    );
    setEditingId(null);
    setNewLesson({ date: "", topic: "", notes: "" });
  };

  const handleDelete = (id: number) => {
    setLessons(lessons.filter((l) => l.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-2">Student Info</h2>
        <p><strong>Name:</strong> John Smith</p>
        <p><strong>Email:</strong> john@example.com</p>
      </div>

      <div className="border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold mb-4">Lesson History</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="date"
            className="border p-2 rounded flex-1"
            value={newLesson.date}
            onChange={(e) => setNewLesson({ ...newLesson, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Topic"
            className="border p-2 rounded flex-1"
            value={newLesson.topic}
            onChange={(e) => setNewLesson({ ...newLesson, topic: e.target.value })}
          />
          <input
            type="text"
            placeholder="Notes"
            className="border p-2 rounded flex-1"
            value={newLesson.notes}
            onChange={(e) => setNewLesson({ ...newLesson, notes: e.target.value })}
          />
          {editingId ? (
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleAdd}>
              Add
            </button>
          )}
        </div>

        <table className="w-full border table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-2 py-2">Date</th>
              <th className="border px-2 py-2">Topic</th>
              <th className="border px-2 py-2">Notes</th>
              <th className="border px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td className="border px-2 py-1">{lesson.date}</td>
                <td className="border px-2 py-1">{lesson.topic}</td>
                <td className="border px-2 py-1">{lesson.notes}</td>
                <td className="border px-2 py-1 space-x-2">
                  <button
                    onClick={() => handleEdit(lesson.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(lesson.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {lessons.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No lessons recorded.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
