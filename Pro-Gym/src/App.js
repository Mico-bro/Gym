import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bmi from './pages/Bmi';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className='App'>

    <Router>
        <Navbar />
    <Routes> 
        <Route  exact path="/"  element={<Home />} />
        <Route  exact path="/menu"  element={<Menu />} />
        <Route  exact path="/bmi"  element={<Bmi />} />
        <Route  exact path="/contact"  element={<Contact />} />
        <Route  exact path="/about"  element={<About />} />
    </Routes> 
        <Footer />
     </Router> 
    </div>
  );
}

export default App;