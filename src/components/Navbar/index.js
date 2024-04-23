import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <span>
        <span className="spanName">Sumant Tulshibagwale</span>
      </span>
      <span>
        <span className="spanOptions">
          <Link to="/Home">
            <span>Home</span>
          </Link>
          <Link to="/About">
            <span className="spanAbout">About</span>
          </Link>
          <span>Resume</span>
        </span>
        <br />
      </span>
    </div>
  );
}
