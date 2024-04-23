import React from "react";
import "./index.css";

export default function Header({ title }) {
  return (
    <div className="header">
      <h2 className="h2">{title}</h2>
    </div>
  );
}
