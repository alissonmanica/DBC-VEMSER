import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import Address from "./pages/address/Address";
import CreateUser from "./pages/users/CreateUser";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";
import Users from "./pages/users/Users";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
          <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/address" element={<Address />} />
              {/* <Route path="/create-user" element={<CreateUser />}> */}
              <Route path="create-user" element={<CreateUser />}>
                <Route path=":id" element={<CreateUser />} />
              </Route>
            </Routes>
          <Footer />
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
