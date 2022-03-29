import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import AuthProvider from "./context/AuthContext";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
