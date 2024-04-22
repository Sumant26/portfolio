import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default function Footer() {
  const handleGithubClick = () => {
    // Your logic for handling GitHub icon click
    window.open("https://github.com/Sumant26", "_blank");
    console.log("GitHub icon clicked");
  };

  const handleLinkedInClick = () => {
    // Your logic for handling GitHub icon click
    window.open("https://www.linkedin.com/in/sumant-tulshibagwale/", "_blank");
    console.log("GitHub icon clicked");
  };
  return (
    <div className="footer" style={{ textAlign: "center" }}>
      <span>
        <FontAwesomeIcon icon={faLinkedinIn} onClick={handleLinkedInClick} />
        <FontAwesomeIcon
          style={{ padding: "0 12px" }}
          icon={faGithub}
          onClick={handleGithubClick}
        />
        <FontAwesomeIcon icon={faEnvelope} onClick={handleGithubClick} />
      </span>
    </div>
  );
}
