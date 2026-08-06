import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { Cpu } from "lucide-react";

interface SkillItem {
  name: string;
  label: string;
  icon: string;
}

const SKILLS_ROW_1: SkillItem[] = [
  { name: "react", label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "typescript", label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "python", label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "fastapi", label: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "nodejs", label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "postgresql", label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const SKILLS_ROW_2: SkillItem[] = [
  { name: "tailwindcss", label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "javascript", label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "html5", label: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "css3", label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "git", label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "pandas", label: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
];

function useElementWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  numCopies?: number;
}

function VelocityText({ children, baseVelocity = 100, numCopies = 6 }: VelocityTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = [];
  for (let i = 0; i < numCopies; i++) {
    spans.push(
      <div className="shrink-0 flex items-center gap-6" key={i} ref={i === 0 ? copyRef : null}>
        {children}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full py-2 gpu-layer">
      <motion.div className="flex whitespace-nowrap gpu-layer" style={{ x }}>
        {spans}
      </motion.div>
    </div>
  );
}

export const TechStackSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto border-t border-slate-800/80 gpu-layer">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <Cpu size={14} />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tools & Technologies
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Ashif Elahi inspired velocity marquee animation. Powered by modern web, backend & AI frameworks.
        </p>
      </div>

      {/* Velocity Scroll Rows Container */}
      <div className="relative max-w-5xl mx-auto space-y-6 overflow-hidden gpu-layer">
        {/* Left Blur Mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{
            background: "linear-gradient(to right, #0B0F17 60%, transparent)",
          }}
        />
        {/* Right Blur Mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{
            background: "linear-gradient(to left, #0B0F17 60%, transparent)",
          }}
        />

        {/* Row 1 Velocity Text */}
        <VelocityText baseVelocity={-60} numCopies={6}>
          {SKILLS_ROW_1.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#121620] border border-slate-800 hover:border-slate-600 transition duration-200 mx-2 shadow-lg"
            >
              <img src={skill.icon} alt={skill.label} className="w-8 h-8 object-contain shrink-0" />
              <span className="text-sm font-semibold text-white font-mono">{skill.label}</span>
            </div>
          ))}
        </VelocityText>

        {/* Row 2 Velocity Text */}
        <VelocityText baseVelocity={60} numCopies={6}>
          {SKILLS_ROW_2.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#121620] border border-slate-800 hover:border-slate-600 transition duration-200 mx-2 shadow-lg"
            >
              <img src={skill.icon} alt={skill.label} className="w-8 h-8 object-contain shrink-0" />
              <span className="text-sm font-semibold text-white font-mono">{skill.label}</span>
            </div>
          ))}
        </VelocityText>
      </div>
    </section>
  );
};
