import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState('');

  const load = async () => {
    const res = await axios.get('http://localhost:3000/tasks');
    setTasks(res.data);
  };

  const add = async () => {
    if (!title.trim()) return;
    await axios.post('http://localhost:3000/tasks', { title });
    setTitle('');
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-[80vh]">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Your Tasks</h1>
        <div className="flex mb-6">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 border p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={add}
            className="bg-green-500 text-white px-6 rounded-r-lg hover:bg-green-600 transition"
          >
            Add
          </button>
        </div>
        <div className="space-y-3">
          {tasks.map(t => (
            <div key={t.id} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <span>{t.title}</span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">New</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
