import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ThemeToggle />
        <Hero />
        <main>
          <WorkExperience />
          <Skills />
          <Certifications />
          <Education />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}