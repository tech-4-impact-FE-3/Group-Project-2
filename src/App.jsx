import './App.css';
import BarKategori from './components/BarKategori';
import Gambar from './components/gambar';
import Gambarindex from './components/gambarIndex';
import Navbar from "./components/Navbar";
import BuatForum from './components/BuatForum';

function App() {

  return (
    <div className="App">
    <Navbar /> 
      <div className="d-flex justify-content-between">
    <BarKategori />  
    {/* <Gambar /> */}
    {/* <Gambarindex />  */}
      <BuatForum />
      </div>
    </div>
  )
}

export default App;