import './App.css';
import { Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;