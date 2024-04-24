import React from "react";
import Header from "../../components/Header";
import Tile from "../../components/Tile";

export default function Home() {
  return (
    <div>
      <main className="main">
        {/* HEADER COMPONENT */}
        {/* TILE COMPONENT */}

        <Header
          title="Hey! I'm Sumant Tulshibagwale.
                 My recent work can be viewed here."
        />
        <Tile title="BGV" description="Build a BGV appition." />
      </main>
    </div>
  );
}
