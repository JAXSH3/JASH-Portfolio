import React, { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SplineEvent } from "@splinetool/runtime";

interface SkillItem {
  id: string;
  name: string;
  label: string;
  category: string;
  shortDescription: string;
  icon: string;
}

const SKILLS_MAP: Record<string, SkillItem> = {
  react: { id: "react", name: "react", label: "React", category: "Frontend", shortDescription: "Full-stack UI development, component architecture & hooks.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ts: { id: "ts", name: "ts", label: "TypeScript", category: "Frontend", shortDescription: "Strict typing for enterprise client & server applications.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  js: { id: "js", name: "js", label: "JavaScript", category: "Frontend", shortDescription: "Dynamic ES6+ logic and async DOM workflows.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  tailwind: { id: "tailwind", name: "tailwind", label: "Tailwind CSS", category: "Frontend", shortDescription: "Utility-first modern dark glassmorphic layouts.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  python: { id: "python", name: "python", label: "Python", category: "Backend & AI", shortDescription: "AI pipeline orchestration, FastAPI APIs & data scraping.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  fastapi: { id: "fastapi", name: "fastapi", label: "FastAPI", category: "Backend & AI", shortDescription: "High-performance async RESTful microservices.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  nodejs: { id: "nodejs", name: "nodejs", label: "Node.js", category: "Backend & AI", shortDescription: "Backend API endpoints and serverless workflows.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  postgres: { id: "postgres", name: "postgres", label: "PostgreSQL", category: "Backend & AI", shortDescription: "Relational database modeling and transaction safety.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  docker: { id: "docker", name: "docker", label: "Docker", category: "Tools & Cloud", shortDescription: "Containerized deployments and local LLM pipelines.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  gcp: { id: "gcp", name: "gcp", label: "Google Cloud", category: "Tools & Cloud", shortDescription: "Cloud infrastructure and model endpoint deployments.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  git: { id: "git", name: "git", label: "Git", category: "Tools & Cloud", shortDescription: "Version control and collaborative software development.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  github: { id: "github", name: "github", label: "GitHub", category: "Tools & Cloud", shortDescription: "Repositories, CI/CD pipelines, and pull requests.", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
};

export const TechStackKeyboard: React.FC = () => {
  const [splineApp, setSplineApp] = useState<Application | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILLS_MAP.react);
  const splineRef = useRef<HTMLDivElement>(null);

  const handleSplineLoad = (app: Application) => {
    setSplineApp(app);

    // Make text objects visible on keyboard surface as in Naresh Khatri portfolio
    try {
      const textDesktopDark = app.findObjectByName("text-desktop-dark");
      const textDesktopLight = app.findObjectByName("text-desktop");
      if (textDesktopLight) textDesktopLight.visible = true;
      if (textDesktopDark) textDesktopDark.visible = true;
    } catch {
      // ignore
    }

    app.addEventListener("mouseHover", (e: SplineEvent) => {
      if (!e.target || !e.target.name) return;
      const targetName = e.target.name.toLowerCase();
      if (targetName === "body" || targetName === "platform") {
        try {
          app.setVariable("heading", "");
          app.setVariable("desc", "");
        } catch { /* ignore */ }
      } else {
        const skill = SKILLS_MAP[targetName];
        if (skill) {
          setSelectedSkill(skill);
          try {
            app.setVariable("heading", skill.label);
            app.setVariable("desc", skill.shortDescription);
          } catch { /* ignore */ }
        }
      }
    });

    app.addEventListener("keyDown", (e: SplineEvent) => {
      if (!e.target || !e.target.name) return;
      const targetName = e.target.name.toLowerCase();
      const skill = SKILLS_MAP[targetName];
      if (skill) {
        setSelectedSkill(skill);
        try {
          app.setVariable("heading", skill.label);
          app.setVariable("desc", skill.shortDescription);
        } catch { /* ignore */ }
      }
    });

    app.addEventListener("keyUp", () => {
      try {
        app.setVariable("heading", "");
        app.setVariable("desc", "");
      } catch { /* ignore */ }
    });
  };

  const selectSkillFromGrid = (skill: SkillItem) => {
    setSelectedSkill(skill);
    if (splineApp) {
      try {
        splineApp.setVariable("heading", skill.label);
        splineApp.setVariable("desc", skill.shortDescription);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section id="skills" className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <span>Tech Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tools & Technologies
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Interactive 3D Mechanical Keyboard (Naresh Khatri Inspired). Click or hover keycaps directly on the 3D scene below.
        </p>
      </div>

      {/* 3D Spline Mechanical Keyboard View */}
      <div
        ref={splineRef}
        className="relative w-full h-[450px] md:h-[550px] rounded-3xl bg-[#121620] border border-slate-800 overflow-hidden mb-8 shadow-2xl"
      >
        <Spline
          scene="/assets/skills-keyboard.spline"
          onLoad={handleSplineLoad}
          className="w-full h-full"
        />
        <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto bg-slate-950/90 p-4 rounded-2xl border border-slate-800 max-w-sm pointer-events-none">
          <p className="text-xs font-mono text-white font-bold uppercase mb-1">3D Interactive Keyboard</p>
          <p className="text-xs text-gray-400">Click or hover any keycap on the 3D mechanical keyboard to display skill descriptions!</p>
        </div>
      </div>

      {/* Selected Skill Active Inspector Card */}
      {selectedSkill && (
        <div className="p-6 rounded-2xl bg-[#121620] border border-slate-800 max-w-2xl mx-auto flex items-center gap-5 text-left mb-10">
          <img
            src={selectedSkill.icon}
            alt={selectedSkill.label}
            className="w-12 h-12 object-contain shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{selectedSkill.label}</h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-400">
                {selectedSkill.category}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">{selectedSkill.shortDescription}</p>
          </div>
        </div>
      )}

      {/* Clean Minimal Black & White Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {Object.values(SKILLS_MAP).map((skill) => {
          const isActive = selectedSkill?.id === skill.id;
          return (
            <button
              key={skill.id}
              onClick={() => selectSkillFromGrid(skill)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition duration-200 border text-center ${
                isActive
                  ? "bg-slate-900 border-white text-white shadow-lg"
                  : "bg-[#121620] border-slate-800 text-gray-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="w-8 h-8 object-contain mb-2"
              />
              <span className="text-xs font-semibold">{skill.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
