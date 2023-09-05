import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

export default function Nev() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/contact" element={<Contact />}/>


    </Routes>
    </BrowserRouter>
  );
}
