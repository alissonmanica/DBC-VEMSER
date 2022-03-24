import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import style from './App.css';
import Perfil from "./pages/perfil/Perfil";
import Repositorio from "./pages/repositorio/Repositorio";
import Contato from "./pages/contato/Contato";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Perfil/>} />
          <Route path='/repositorio' element={<Repositorio/>} />
          <Route path='/contato'element={<Contato/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
