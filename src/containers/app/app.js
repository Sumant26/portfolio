import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Home from "../Home";
import About from "../About";

export default function App() {
  return (
    <React.StrictMode>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer></Footer>
    </React.StrictMode>
  );
}
