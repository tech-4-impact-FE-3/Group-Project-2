import './App.css';
import { Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;