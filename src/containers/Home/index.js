import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <header>
        {/* NAV COMPONENT */}
        <Navbar />
      </header>
      <main>
        {/* HEADER COMPONENT */}
        {/* TILE COMPONENT */}
        <Header
          title="Hey! I'm Max Berger.
My recent work can be viewed here."
          align={"center"}
        />
      </main>
      <footer>
        {/* FOOTER COMPONENT */}
        <Footer />
      </footer>
    </>
  );
}
