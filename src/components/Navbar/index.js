import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Builds Navbar
//
// Example Usage:
//
// <Navbar></Navbar>
//
export default function Navbar() {
  // Function to load Resume
  const handleResumeClick = () => {
    // Your logic for handling LinkedIn icon click
    window.open(
      "https://drive.google.com/file/d/1moWSy10eMtIaKBSCmD1wW4AJbcYjLQmw/view?usp=sharing",
      "_blank"
    );
    console.log("Resume icon clicked");
  };

  return (
    <div className="navbar">
      <span>
        <span className="spanName">Sumant Tulshibagwale</span>
      </span>
      <span>
        <span className="spanOptions">
          <Link to="/" className="spanOptions">
            <span>Home</span>
          </Link>
          <Link to="/About" className="spanOptions">
            <span className="spanAbout">About</span>
          </Link>
          <span onClick={handleResumeClick}>Resume</span>
        </span>
        <br />
      </span>
    </div>
  );
}
