import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// Builds Footer
//
// Example Usage:
//
// <Footer></Footer>
//
export default function Footer() {
  // Function to load GitHub Page
  const handleGithubClick = () => {
    // Your logic for handling GitHub icon click
    window.open("https://github.com/Sumant26", "_blank");
    console.log("GitHub icon clicked");
  };

  // Function to load LinkedIn Page
  const handleLinkedInClick = () => {
    // Your logic for handling LinkedIn icon click
    window.open("https://www.linkedin.com/in/sumant-tulshibagwale/", "_blank");
    console.log("LinkedIn icon clicked");
  };

  // Function to load Email
  const handleMailClick = () => {
    // Your logic for handling Mail icon click
    window.open("mailto:sumanttulshibagwale@gmail.com", "_blank");
    console.log("Mail icon clicked");
  };

  return (
    <div className="footer">
      <span>
        <FontAwesomeIcon
          className="fontAwesomeIcon"
          icon={faLinkedinIn}
          onClick={handleLinkedInClick}
        />
        <FontAwesomeIcon
          className="fontAwesomeIcon"
          style={{ padding: "0 12px" }}
          icon={faGithub}
          onClick={handleGithubClick}
        />
        <FontAwesomeIcon
          className="fontAwesomeIcon"
          icon={faEnvelope}
          onClick={handleMailClick}
        />
      </span>
    </div>
  );
}
