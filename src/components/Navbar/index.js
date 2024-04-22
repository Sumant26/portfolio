import React from "react";

export default function Navbar() {
  return (
    <div>
      <span style={{ float: "left", fontSize: "14px" }}>
        Sumant Tulshibagwale
      </span>
      <span style={{ float: "right", fontSize: "11px", color: "grey" }}>
        <span>About</span>
        <span style={{ padding: "0 12px" }}>Contact</span>
        <span>Resume</span>
      </span>
      <br />
    </div>
  );
}
