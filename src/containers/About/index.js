import React from "react";
import Passion from "../../components/Passion";
import "./index.css";

export default function About() {
  return (
    <div className="about">
      <main>
        {/* PASSION COMPONENT */}
        <Passion
          title={"Software Development"}
          description={
            " I'm passionate about building and designing  software products across financial tech,  productivity, and community. I specialize in   developing web apps products."
          }
        />
      </main>
    </div>
  );
}
