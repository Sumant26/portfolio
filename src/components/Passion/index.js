import React from "react";
import "./index.css";

export default function Passion({ title, description }) {
  return (
    <div className="passion">
      <h2 className="h2">{title}</h2>
      <p className="p">{description}</p>
    </div>
  );
}
