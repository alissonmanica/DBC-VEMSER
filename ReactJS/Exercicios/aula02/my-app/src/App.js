import Header from "./components/header/Header";


import './App.css';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
