import React from "react";
import "./index.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <span>
        <span style={{ fontSize: "14px" }}>Sumant Tulshibagwale</span>
      </span>
      <span>
        <span style={{ fontSize: "11px", color: "grey" }}>
          <span>About</span>
          <span style={{ padding: "0 12px" }}>Contact</span>
          <span>Resume</span>
        </span>
        <br />
      </span>
    </div>
  );
}
