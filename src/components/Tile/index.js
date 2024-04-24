import React from "react";
import "./index.css";

export default function Tile({ title, description }) {
  return (
    <div className="tile">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
