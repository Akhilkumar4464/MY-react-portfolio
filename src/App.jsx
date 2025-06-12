import React from 'react';
import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <div 
      className=" h-screen  md:h-screen w-full bg-gradient-to-r from-slate-500 to-slate-900 md:scroll-m-0   md:w-screen flex flex-col"
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
