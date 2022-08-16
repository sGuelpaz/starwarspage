import React, {Component} from 'react';
import Home from './pages/home/Index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarCom from './components/navigations/Navbar';
import { Personajes } from './pages/personajes/Personajes';
import { Planetas } from './pages/planetas/Planetas';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavbarCom/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/per" element={<Personajes/>}/>
      <Route path="/plan" element={<Planetas/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
