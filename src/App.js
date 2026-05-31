import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import Collections from "./pages/Collections";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
