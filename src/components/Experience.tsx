import React, { useState } from "react";
import { Briefcase, GraduationCap, MapPin, ChevronDown, ChevronUp } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "work" | "education";
  highlights: string[];
  skillsBadge?: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    title: "Software Development Intern — AI Engineering & Full Stack",
    organization: "Jio Creative Labs",
    location: "Mumbai, India",
    period: "Jul 2025 – Apr 2026",
    type: "work",
    highlights: [
      "Designed and built Venta, an enterprise CRM from the ground up for Sales & BD team with full architecture, role hierarchy, and daily operation workflows.",
      "Built 3 AI-driven automation workflows (BIZintel, BrandCrafter, Brand Hierarchy) using Google Opal & LLM APIs to streamline sales and creative operations.",
      "Ran data scraping and analysis pipelines to power lead generation, sales optimization, and lead-visualization dashboards.",
      "Stress-tested generative AI image and video models against creative briefs to identify production readiness.",
      "Delivered 10+ internal AI tool training sessions and built data-heavy pitch decks with visuals and AI-generated creatives.",
    ],
    skillsBadge: ["React", "TypeScript", "Python", "FastAPI", "Google Opal", "Gemini API", "PostgreSQL"],
  },
  {
    id: 2,
    title: "M.Tech in Artificial Intelligence & Data Science",
    organization: "K J Somaiya School of Engineering",
    location: "Mumbai, India",
    period: "Aug 2024 – Jul 2026",
    type: "education",
    highlights: [
      "Specialized in AI pipeline orchestration, multi-model LLM workflows, RAG, and Statistical Modeling.",
      "Achieved CGPA: 7.9.",
    ],
    skillsBadge: ["AI & Data Science", "LangChain", "RAG", "Statistical Modeling", "PyTorch"],
  },
  {
    id: 3,
    title: "B.E. in Information Technology",
    organization: "Vasantdada College of Engineering",
    location: "Mumbai, India",
    period: "Aug 2020 – May 2024",
    type: "education",
    highlights: [
      "Graduated with CGPA: 7.94.",
      "Core coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Operating Systems.",
    ],
    skillsBadge: ["Information Technology", "Web Dev", "DBMS", "Software Engineering"],
  },
  {
    id: 4,
    title: "Web Development Intern",
    organization: "IBM SkillsBuild",
    location: "Mumbai, India",
    period: "Jul 2023 – Aug 2023",
    type: "work",
    highlights: [
      "Built responsive web interfaces with HTML, CSS, and JavaScript in an Agile team environment, hitting sprint delivery timelines.",
    ],
    skillsBadge: ["HTML5", "CSS3", "JavaScript", "Agile"],
  },
  {
    id: 5,
    title: "Web Development Intern",
    organization: "GetFly Technologies",
    location: "Mumbai, India",
    period: "Jun 2023 – Jul 2023",
    type: "work",
    highlights: [
      "Designed and built web components, partnering with project managers on UI/usability improvements.",
    ],
    skillsBadge: ["UI Design", "Component Dev", "Usability"],
  },
  {
    id: 6,
    title: "Web Development Intern",
    organization: "Exposys Data Lab",
    location: "Mumbai, India",
    period: "Apr 2022 – May 2022",
    type: "work",
    highlights: [
      "Maintained and enhanced existing web applications, resolving bugs and upgrading user interface responsiveness.",
    ],
    skillsBadge: ["Frontend Maintenance", "Bug Fixing"],
  },
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-16 px-4 md:px-8 max-w-4xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <span>Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Experience & Education
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Compact timeline. Hover or click an item to view key bullet points and technical highlights.
        </p>
      </div>

      {/* Compact Timeline Container */}
      <div className="space-y-4">
        {TIMELINE_DATA.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleExpand(item.id)}
              onMouseEnter={() => setExpandedId(item.id)}
              className={`p-5 rounded-2xl bg-[#121620] border transition duration-200 cursor-pointer text-left ${
                isExpanded ? "border-white bg-[#161B26]" : "border-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-white shrink-0">
                    {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 mt-0.5">
                      {item.organization} • <span className="font-mono">{item.period}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-mono">
                    <MapPin size={12} className="text-gray-500" />
                    {item.location}
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {/* Bullet Points Container on Expand / Hover */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-3">
                  <ul className="space-y-2 pl-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        <span className="text-gray-500 shrink-0 font-mono">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.skillsBadge && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skillsBadge.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
