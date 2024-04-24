import React from "react";
import Header from "../../components/Header";
import Tile from "../../components/Tile";
import "./index.css";

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
        <div className="projects">
          <div className="grid-container">
            <div className="grid-item-1">
              <Tile
                title="BGV"
                description="Developed a user registration system using controlled React components where individuals can sign up and create their profiles."
              />
            </div>
            <div className="grid-item-2">
              <Tile
                title="BGV"
                description="Developed a user registration system using controlled React components where individuals can sign up and create their profiles."
              />
            </div>
            <div className="grid-item-2">
              <Tile
                title="BGV"
                description="Developed a user registration system using controlled React components where individuals can sign up and create their profiles."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
