import React from "react";
import Header from "../../components/Header";
import Tile from "../../components/Tile";
import "./index.css";

// Builds Home
//
// Example Usage:
//
// <Home />
//
export default function Home() {
  return (
    <div>
      <main className="main">
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
            <div className="grid-item-1">
              <Tile
                title="Ortho Log Book"
                description="Developed a user registration system where healthcare professionals can sign up and create profiles."
              />
            </div>
            <div className="grid-item-1">
              <Tile
                title="Dentist"
                description="Designed an easy-to-use interface that guides users through the process of taking and uploading pictures of
                their teeth."
              />
            </div>
            <div className="grid-item-1">
              <Tile
                title="Dentist Workflow"
                description="Developed a dashboard where dentists can view a comprehensive list of their patients using lazy loading."
              />
            </div>
            <div className="grid-item-1">
              <Tile
                title="Field"
                description="Designed an interface to upload and manipulate IFC files using integrated functionalities."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
