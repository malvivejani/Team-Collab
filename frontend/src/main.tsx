import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Chat from './pages/Chat';

const Navbar = () => {
  const location = useLocation();
  const linkCls = (path: string) =>
    `hover:underline ${location.pathname === path ? 'font-bold underline' : ''}`;

  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white shadow">
      <span className="font-bold">TeamCollab Lite</span>
      <div className="flex gap-6">
        <Link to="/" className={linkCls('/')}>Login</Link>
        <Link to="/tasks" className={linkCls('/tasks')}>Tasks</Link>
        <Link to="/chat" className={linkCls('/chat')}>Chat</Link>
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

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
