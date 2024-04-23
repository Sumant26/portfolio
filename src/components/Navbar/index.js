import React from "react";
import "./index.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <span>
        <span className="spanName">Sumant Tulshibagwale</span>
      </span>
      <span>
        <span className="spanOptions">
          <span>Home</span>
          <span className="spanAbout">About</span>
          <span>Resume</span>
        </span>
        <br />
      </span>
    </div>
  );
}
