import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleResumeClick = () => {
    // Your logic for handling LinkedIn icon click
    window.open(
      "https://drive.google.com/file/d/1pSZu9APXrVfJYKo5B2o9FlYSRoI5nSq9/view?usp=sharing",
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
          <Link to="/Home">
            <span>Home</span>
          </Link>
          <Link to="/About">
            <span className="spanAbout">About</span>
          </Link>
          <span onClick={handleResumeClick}>Resume</span>
        </span>
        <br />
      </span>
    </div>
  );
}
