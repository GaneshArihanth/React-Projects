import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou'; 
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} /> 
      </Routes>
    </>
  );
}

export default App;
