import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Contato from './pages/Contato';
import Home from './pages/Home';
import Inicial from "./pages/Inicial";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contato'element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
