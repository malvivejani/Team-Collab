import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState<string[]>([]);

  useEffect(() => {
    socket.on("chat", (m) => setMsgs((prev) => [...prev, m]));
  }, []);

  const send = () => {
    if (!msg.trim()) return;
    socket.emit("chat", msg);
    setMsg("");
  };

  return (
    <div className="flex flex-col h-[80vh] bg-gray-100">
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <span
              className={`px-4 py-2 rounded-2xl shadow ${
                i % 2 === 0
                  ? "bg-white text-gray-700"
                  : "bg-blue-600 text-white"
              }`}
            >
              {m}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t flex">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={send}
          className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
