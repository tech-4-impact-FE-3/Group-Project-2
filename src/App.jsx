import './App.css';
import BarKategori from './components/BarKategori';
import Gambar from './components/gambar';
import Gambarindex from './components/gambarIndex';
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
    <Navbar /> 
    <BarKategori />  
    {/* <Gambar /> */}
    {/* <Gambarindex />  */}
    </div>
  )
}

export default App;