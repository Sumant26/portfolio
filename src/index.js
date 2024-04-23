import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>
);
