import './App.css';
import BarKategori from './components/BarKategori';
import Navbar from "./components/Navbar";
import BuatForum from './components/BuatForum';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-between">
      <BarKategori />
      <BuatForum />
      </div>
    </div>
  )
}

export default App;
