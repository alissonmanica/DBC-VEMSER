import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';
import style from './App.css';
import Perfil from "./pages/perfil/Perfil";
import Repositorio from "./pages/repositorio/Repositorio";
import Contato from "./pages/contato/Contato";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  const [data, setData] = useState({})
  const [repos, setRepos] = useState({})

  async function setup() {
    try {
      const {data} = await axios.get('https://api.github.com/users/alissonmanica');
      setData(data);
    } catch (error) {
      console.log(`Ops! Houve um erro: ${error}`)
    }
    try {
      const {data} = await axios.get('https://api.github.com/users/alissonmanica/repos');
      setRepos(data)
    } catch (error) {
      console.log(`Ops! Houve um erro: ${error}`)
    }
  }
  
  useEffect(() => {
    setup();
}, []);

function verifyObject() {
  if (Object.keys(data).length) {
    return true;
  } else {
    return false;
  }
}

  return (
    <div className="App">
      {verifyObject() ? 
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Perfil data={data}/>} />
          <Route path='/repositorio' element={<Repositorio repos={repos}/>} />
          <Route path='/contato'element={<Contato/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
      : <p>erro!</p>
      }
    </div>
  );
}

export default App;
