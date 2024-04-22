import React from "react";

import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <header>{/* NAV COMPONENT */}</header>
      <main>
        {/* HEADER COMPONENT */}
        {/* TILE COMPONENT */}
        <Header
          title="Hey! I'm Max Berger.
My recent work can be viewed here."
          align={"center"}
        />
      </main>
      <footer>{/* FOOTER COMPONENT */}</footer>
    </>
  );
}
