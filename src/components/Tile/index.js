import React from "react";
import "./index.css";

// Builds tile
//
// Parameters:
// {title} - Accepts title.
// {description} - Accepts description.
//
// Example Usage:
//
//       <Tile
//            title="BGV"
//              description="Developed a user registration system using controlled React components where individuals can sign up and create their profiles."
//       />
//
export default function Tile({ title, description }) {
  return (
    <div className="tile">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
