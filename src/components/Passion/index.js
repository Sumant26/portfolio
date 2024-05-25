import React from "react";
import "./index.css";

// Builds Passion
//
//Parameters:
//
// {title} - Accepts title.
// {description} - Builds description.
//
// Example Usage:
//
//            <Passion
//              title={"Software Development"}
//              description={
//                         " I'm passionate about building and designing  software products across financial tech,  productivity, and community. I specialize in   developing web apps products."
//                          }
//            />
//
export default function Passion({ title, description }) {
  return (
    <div className="passion">
      <h2 className="h2">{title}</h2>
      <p className="p">{description}</p>
    </div>
  );
}
