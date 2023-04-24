
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import About from './pages/About';
import {Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
