import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Lesson {
  id: string;
  date: string;
  topic: string;
}

const initialLessons: Lesson[] = [
  { id: "1", date: "2025-05-01", topic: "Introduction to verbs" },
  { id: "2", date: "2025-05-08", topic: "Past tense review" },
];

export default function LessonHistory() {
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [newTopic, setNewTopic] = useState("");
  const [newDate, setNewDate] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const addLesson = () => {
    if (!newTopic || !newDate) return;
    const newLesson: Lesson = {
      id: Date.now().toString(),
      topic: newTopic,
      date: newDate,
    };
    setLessons((prev) => [...prev, newLesson]);
    setNewTopic("");
    setNewDate("");
  };

  const deleteLesson = (id: string) => {
    setLessons((prev) => prev.filter((l) => l.id !== id));
  };

  const updateLesson = (id: string, topic: string) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? { ...l, topic } : l))
    );
    setEditingId(null);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Lesson History</h2>

      <div className="flex gap-2 mb-4">
        <Input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <Input
          placeholder="Lesson topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <Button onClick={addLesson}>Add</Button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Date</th>
            <th>Topic</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{lesson.date}</td>
              <td>
                {editingId === lesson.id ? (
                  <Input
                    value={lesson.topic}
                    onChange={(e) =>
                      setLessons((prev) =>
                        prev.map((l) =>
                          l.id === lesson.id ? { ...l, topic: e.target.value } : l
                        )
                      )
                    }
                  />
                ) : (
                  lesson.topic
                )}
              </td>
              <td className="text-right space-x-2">
                {editingId === lesson.id ? (
                  <Button
                    size="sm"
                    onClick={() => updateLesson(lesson.id, lesson.topic)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => setEditingId(lesson.id)}>
                    Edit
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteLesson(lesson.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
