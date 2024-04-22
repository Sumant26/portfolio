import React from "react";

export default function Passion({ title, description }) {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2
        style={{
          whiteSpace: "discard-inner",
          width: "300px",
          textAlign: "inherit",
          fontSize: "15px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          whiteSpace: "discard-inner",
          width: "300px",
          textAlign: "left",
          fontSize: "11px",
          color: "grey",
        }}
      >
        {description}
      </p>
    </div>
  );
}
