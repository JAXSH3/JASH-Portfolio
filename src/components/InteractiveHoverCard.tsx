import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface InteractiveHoverCardProps {
  imageSrc: string;
  altText: string;
  badgeSrc?: string;
  className?: string;
}

export const InteractiveHoverCard: React.FC<InteractiveHoverCardProps> = ({
  imageSrc,
  altText,
  badgeSrc,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-30 group-hover:opacity-75 blur-xl transition duration-500" />

      <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
        {/* Base Image (Grayscale / Darkened background layer) */}
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 group-hover:scale-105"
        />

        {/* Color Mask Image revealed by mouse spotlight (Daniel Schulz effect) */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: `radial-gradient(140px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(140px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover filter saturate-150 contrast-110 brightness-110 scale-105"
          />
        </div>

        {/* Dynamic Cursor Light Ring */}
        {isHovered && (
          <div
            className="absolute pointer-events-none w-32 h-32 rounded-full border border-cyan-400/50 blur-[1px] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          />
        )}

        {/* Creative Lego Avatar Badge overlay (Sofi Dev Inspired) */}
        {badgeSrc && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 right-4 z-20"
          >
            <div className="relative group/badge p-1.5 rounded-2xl glass-panel border border-cyan-400/40 bg-slate-900/80 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src={badgeSrc}
                alt="Lego Jash Avatar Badge"
                className="w-14 h-14 object-cover rounded-xl border border-purple-500/30"
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900" />
            </div>
          </motion.div>
        )}

        {/* Subtle glass overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Caption Tag */}
        <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-slate-900/80 px-2.5 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
            AI & Full Stack Engineer
          </p>
        </div>
      </div>
    </div>
  );
};
