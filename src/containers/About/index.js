import React from "react";
import Passion from "../../components/Passion";

export default function About() {
  return (
    <div>
      <main>
        {/* PASSION COMPONENT */}
        <Passion
          title={"Software Development"}
          description={
            " I'm passionate about building and designing  software products across financial tech,  productivity, and community. I specialize in   developing web apps products."
          }
        />
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
