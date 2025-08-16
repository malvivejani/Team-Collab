import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Chat from "./pages/Chat";
import "./index.css";

const Navbar = () => {
  const location = useLocation();
  const linkCls = (path: string) =>
    `px-3 py-2 rounded-md hover:bg-blue-500 transition ${
      location.pathname === path ? "bg-blue-700 font-semibold" : ""
    }`;

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-blue-600 text-white shadow">
      <span className="font-bold text-lg">TeamCollab Lite</span>
      <div className="flex gap-4">
        <Link to="/" className={linkCls("/")}>
          Login
        </Link>
        <Link to="/tasks" className={linkCls("/tasks")}>
          Tasks
        </Link>
        <Link to="/chat" className={linkCls("/chat")}>
          Chat
        </Link>
      </div>
    </nav>
  );
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
