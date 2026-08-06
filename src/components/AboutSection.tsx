import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Terminal, Download, Laptop, Car, Sparkles, Database } from "lucide-react";
import { WordRotate } from "./WordRotate";

export const AboutSection: React.FC = () => {
  const headlines = [
    "AI Engineer",
    "Full-Stack Developer",
    "AI Pipeline Architect",
    "M.Tech AI Candidate",
  ];

  return (
    <section id="about" className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 2x Bigger Frameless Lego Avatar Image with 3D Floating Elements */}
        <div className="lg:col-span-6 flex justify-center w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center relative"
          >
            <img
              src="/lego-avatar.png"
              alt="Jash Patel Lego Avatar"
              className="w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] md:w-[650px] md:h-[650px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
            />

            {/* Floating 3D-styled Element 1: Laptop / Computer (Top-Left) */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-4 sm:left-12 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121620]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                <Laptop size={18} />
              </div>
              <span className="text-xs font-mono font-bold text-white">Computer Dev</span>
            </motion.div>

            {/* Floating 3D-styled Element 2: F1 Race Car (Top-Right) */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-16 right-4 sm:right-12 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121620]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                <Car size={18} />
              </div>
              <span className="text-xs font-mono font-bold text-white">F1 Racing</span>
            </motion.div>

            {/* Floating 3D-styled Element 3: AI & Neural Pipelines (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-6 sm:left-16 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121620]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                <Sparkles size={18} />
              </div>
              <span className="text-xs font-mono font-bold text-white">AI Engineering</span>
            </motion.div>

            {/* Floating 3D-styled Element 4: Data & Databases (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-16 right-6 sm:right-16 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121620]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white">
                <Database size={18} />
              </div>
              <span className="text-xs font-mono font-bold text-white">Data Science</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Bio Summary & Rolling Headline */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
            <span>About Me</span>
          </div>

          {/* Rolling Headline */}
          <div className="h-14 sm:h-16 flex items-center overflow-hidden">
            <WordRotate
              words={headlines}
              duration={2500}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            />
          </div>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I am an M.Tech candidate in Artificial Intelligence & Data Science at <span className="text-white font-semibold">K. J. Somaiya School of Engineering</span> with 10 months of hands-on experience at <span className="text-white font-semibold">Jio Creative Labs</span> building full-stack CRM platforms (<span className="text-white font-semibold">Venta</span>), agentic AI workflows (<span className="text-white font-semibold">BIZintel, BrandCrafter</span>), and generative-AI tooling in production.
          </p>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121620] text-xs font-mono text-gray-300 border border-slate-800">
              <Cpu size={15} className="text-white" /> AI Pipeline Orchestration
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121620] text-xs font-mono text-gray-300 border border-slate-800">
              <Code2 size={15} className="text-white" /> Full-Stack Software Engineering
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121620] text-xs font-mono text-gray-300 border border-slate-800">
              <Terminal size={15} className="text-white" /> Agentic Workflows
            </div>
          </div>

          {/* Core Tech Quick Pills */}
          <div className="pt-2">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Core Stack</p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "LangChain", "Gemini API"].map((tech) => (
                <span key={tech} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono text-black bg-white hover:bg-gray-200 transition duration-300 shadow-md"
            >
              <Download size={15} /> View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
