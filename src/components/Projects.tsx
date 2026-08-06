import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, X, Layers, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Enterprise AI & CRM" | "AI Workflows" | "Data & Analytics";
  description: string;
  longDescription: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "venta",
    title: "Venta",
    subtitle: "Enterprise CRM Platform with AI Chatbot",
    category: "Enterprise AI & CRM",
    description: "Full-stack enterprise CRM with embedded Gemini AI chatbot, role hierarchies, and AI-assisted email drafting deployed for daily sales operations.",
    longDescription: [
      "Designed and built from scratch as the primary daily operations platform for Sales & BD teams at Jio Creative Labs.",
      "Embedded AI chatbot powered by Google AI Studio and Gemini API integrated into Google Workspace.",
      "Includes automated lead tracking, role hierarchy access controls, and AI-assisted sales email drafting.",
      "Implemented using React, TypeScript, Node.js/FastAPI, and PostgreSQL."
    ],
    techStack: ["React", "TypeScript", "Google AI Studio", "Gemini API", "FastAPI", "PostgreSQL"],
    liveUrl: "https://venta-crm-459999933022.asia-southeast1.run.app/login",
    featured: true,
  },
  {
    id: "bizintel",
    title: "BIZintel",
    subtitle: "AI Sales Intelligence Workflow",
    category: "AI Workflows",
    description: "Automated AI lead generation workflow accelerating business intelligence and market research using multi-model LLMs.",
    longDescription: [
      "Automates market research and company profiling for sales targeting.",
      "Integrates automated workflows with multi-model LLM APIs for rapid company insights.",
      "Dramatically reduced pre-call sales research time for BD executives."
    ],
    techStack: ["LLM APIs", "Python", "Web Scraping", "FastAPI"],
    liveUrl: "https://opal.google/app/1CrEv80RWpZtcqmiIAKBBmvtgZJNELMlY",
    featured: true,
  },
  {
    id: "brandcrafter",
    title: "BrandCrafter",
    subtitle: "AI Creative Brief Visualizer",
    category: "AI Workflows",
    description: "Generative AI workflow that turns creative briefs into concept visuals, speeding up ideation and client review cycles.",
    longDescription: [
      "Translates text-based creative briefs into concept imagery using generative image models.",
      "Integrated into internal creative review pipelines at Jio Creative Labs.",
      "Accelerated ideation timelines from days to minutes."
    ],
    techStack: ["Generative AI APIs", "Stable Diffusion", "Python"],
    liveUrl: "https://opal.google/app/1rX7ccDx0CdEP0JN1WlbwjTR-KzHtjwzm",
    featured: true,
  },
  {
    id: "brandhierarchy",
    title: "Brand Hierarchy",
    subtitle: "Automated Brand Mapping Tool",
    category: "AI Workflows",
    description: "Web-scraping and data pipeline tool that maps brand hierarchies and parent-child corporate relationships for targeted outreach.",
    longDescription: [
      "Scrapes corporate organizational structures to build accurate brand hierarchies.",
      "Enables sales teams to identify key parent holding entities for enterprise pitches.",
      "Outputs interactive lead-visualization dashboards."
    ],
    techStack: ["Python", "BeautifulSoup / Scrapy", "Pandas"],
    liveUrl: "https://opal.google/app/1TqvtPDi5O3ZP1PVOkicA24213QUztEOB",
    featured: false,
  },
  {
    id: "f1analysis",
    title: "F1 Driver Analysis",
    subtitle: "Modern Formula 1 Performance Metrics (2000–Present)",
    category: "Data & Analytics",
    description: "Custom 'Accuracy Average' scoring metric evaluating race wins, podiums, and pole positions to rank top modern F1 drivers.",
    longDescription: [
      "Engineered a novel mathematical metric ('Accuracy Average') to evaluate driver consistency.",
      "Analyzed race data across modern F1 seasons from 2000 to present.",
      "Created visualizations and statistical rankings using Pandas and Matplotlib."
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "NumPy", "Data Science"],
    githubUrl: "https://github.com/JAXSH3/F1-Driver-Analysis",
    featured: false,
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Enterprise AI & CRM", "AI Workflows", "Data & Analytics"];

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <Layers size={14} />
          <span>Projects & Tooling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Enterprise CRMs, agentic AI automation pipelines, and data analytics.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition duration-200 ${
              filter === cat
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-[#121620] text-gray-400 border border-slate-800 hover:text-white hover:border-slate-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#121620] border border-slate-800 hover:border-slate-600 p-6 rounded-2xl flex flex-col justify-between relative text-left transition duration-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-300">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[10px] font-mono text-gray-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Featured
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-0.5">{project.subtitle}</p>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 pt-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-semibold text-white hover:text-gray-300 flex items-center gap-1 transition-colors"
              >
                View Details <ArrowUpRight size={14} />
              </button>

              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                    title="View GitHub Repository"
                  >
                    <FaGithub size={16} />
                  </a>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Project Live Link"
                    title="View Project Link"
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121620] p-6 md:p-8 rounded-3xl max-w-xl w-full border border-slate-800 space-y-5 relative max-h-[85vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-1.5 rounded-full bg-slate-900 border border-slate-800"
              >
                <X size={18} />
              </button>

              <div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-300">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-gray-400">{selectedProject.subtitle}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Highlights</h4>
                <ul className="space-y-1.5">
                  {selectedProject.longDescription.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle size={14} className="text-white shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-black bg-white hover:bg-gray-200 transition"
                  >
                    <FaGithub size={15} /> View Code on GitHub
                  </a>
                ) : selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-black bg-white hover:bg-gray-200 transition"
                  >
                    <ExternalLink size={15} /> View Project Link
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
