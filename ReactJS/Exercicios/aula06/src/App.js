import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
