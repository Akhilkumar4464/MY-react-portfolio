import React from 'react';
import Header from './components/navbar/Header.jsx';
import Home from './components/Home/Home.jsx';
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/About.jsx';
import Projects from './components/experience/Projects.jsx';
import Contact from './components/contect/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
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
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
