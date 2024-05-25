import React from "react";
import "./index.css";

// Builds Header
//
// Parameters:
//
// {title} : Accpets title of the page.
//
// Example Usage:
//
//         <Header
//           title="Hey! I'm Sumant Tulshibagwale.
//           My recent work can be viewed here."
//         />
//
export default function Header({ title }) {
  return (
    <div className="header">
      <h2 className="h2">{title}</h2>
    </div>
  );
}
