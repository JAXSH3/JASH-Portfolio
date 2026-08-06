import React, { useState } from "react";
import { GraduationCap, MapPin, ChevronDown, ChevronUp } from "lucide-react";

interface EducationItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  skillsBadge?: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    title: "M.Tech in Artificial Intelligence & Data Science",
    organization: "K J Somaiya School of Engineering",
    location: "Mumbai, India",
    period: "Aug 2024 – Jul 2026",
    highlights: [
      "Specialized in AI pipeline orchestration, multi-model LLM workflows, RAG, and Statistical Modeling.",
      "Achieved CGPA: 7.9.",
    ],
    skillsBadge: ["AI & Data Science", "LangChain", "RAG", "Statistical Modeling", "PyTorch"],
  },
  {
    id: 2,
    title: "B.E. in Information Technology",
    organization: "Vasantdada College of Engineering",
    location: "Mumbai, India",
    period: "Aug 2020 – May 2024",
    highlights: [
      "Graduated with CGPA: 7.94.",
      "Core coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Operating Systems.",
    ],
    skillsBadge: ["Information Technology", "Web Dev", "DBMS", "Software Engineering"],
  },
];

export const EducationSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="education" className="relative py-16 px-4 md:px-8 max-w-4xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <GraduationCap size={14} />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Education
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          M.Tech in AI & Data Science & B.E. in Information Technology.
        </p>
      </div>

      {/* Education List */}
      <div className="space-y-4">
        {EDUCATION_DATA.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              onMouseEnter={() => setExpandedId(item.id)}
              className={`p-5 rounded-2xl bg-[#121620] border transition duration-200 cursor-pointer text-left ${
                isExpanded ? "border-white bg-[#161B26]" : "border-slate-800 hover:border-slate-600"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-white shrink-0">
                    <GraduationCap size={16} />
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
