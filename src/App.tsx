import { useState } from "react";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { TechStackSection } from "./components/TechStackSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { Projects } from "./components/Projects";
import { ContactFooter } from "./components/ContactFooter";

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-white overflow-x-hidden selection:bg-gray-700 selection:text-white">
      {/* 1. Exact Apple SVG Handwriting Preloader (Satya Subudhi Inspired) */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Application Page */}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <EducationSection />
          <Projects />
        </main>
        <ContactFooter />
      </div>
    </div>
  );
}

export default App;
