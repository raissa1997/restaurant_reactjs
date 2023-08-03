import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import Fichier from "./pages/Fichier";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Produit from "./pages/Produit";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fichier" element={<Fichier />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />

       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
