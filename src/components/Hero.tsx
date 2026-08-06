import React, { Suspense, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { ArrowRight, ExternalLink } from "lucide-react";
import { WordRotate } from "./WordRotate";
import RotatingText from "./RotatingText";

export const Hero: React.FC = () => {
  const skills = [
    "AI Engineer",
    "Full-Stack Developer",
    "AI Pipeline Architect",
    "M.Tech AI Candidate",
  ];
  const greetings = ["Hi", "Namaste", "Kem Cho"];

  useEffect(() => {
    const removeSplineLogo = () => {
      const links = document.querySelectorAll('a[href*="spline.design"], a[href*="spline"]');
      links.forEach((link) => {
        const parent = link.parentElement;
        if (parent && parent !== document.body && parent.children.length <= 2) {
          parent.remove();
        } else {
          link.remove();
        }
      });

      const watermark = document.querySelector('.spline-watermark, #spline-logo');
      if (watermark) watermark.remove();
    };

    removeSplineLogo();
    const t1 = setTimeout(removeSplineLogo, 500);
    const t2 = setTimeout(removeSplineLogo, 1500);
    const t3 = setTimeout(removeSplineLogo, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleSplineLoad = (app: Application) => {
    try {
      // Clamp pixel ratio for 60fps+ rendering on Retina/high-DPI screens
      const renderer = (app as unknown as { _renderer?: { setPixelRatio?: (n: number) => void } })._renderer;
      if (renderer?.setPixelRatio) {
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      }

      const allObjs = app.getAllObjects();
      allObjs.forEach((obj) => {
        if (obj.name && (obj.name.toLowerCase().includes("nazbot") || obj.name.toLowerCase().includes("text"))) {
          if ((obj as unknown as { text?: string }).text !== undefined) {
            (obj as unknown as { text: string }).text = "JASH";
          }
        }
      });
      try { app.setVariable("text", "JASH"); } catch { /* ignore */ }
      try { app.setVariable("nazbot", "JASH"); } catch { /* ignore */ }
      try { app.setVariable("title", "JASH"); } catch { /* ignore */ }
      try { app.setVariable("heading", "JASH"); } catch { /* ignore */ }
    } catch {
      // Spline load fallback
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black gpu-layer">
      {/* 1. Spline Background (Ashif Elahi Interactive 3D Robot) */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-slate-950/80" />}>
          <Spline
            scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
            onLoad={handleSplineLoad}
            aria-label="Interactive 3D animation"
          />
        </Suspense>
      </div>

      {/* 2. Overlay Content (Aligned to Center - Ashif Elahi Style) */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-4 sm:p-8 md:p-16 text-center bg-black/20 pointer-events-none">
        <div className="max-w-3xl w-full pointer-events-auto gpu-layer">
          {/* Main Headline with WordRotate */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white [text-shadow:_0_3px_5px_rgb(0_0_0_/_50%)] tracking-tight">
            <WordRotate words={greetings} className="text-white" />
            <span className="whitespace-nowrap">, I'm</span>
          </h1>

          <div className="mt-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight [text-shadow:_0_3px_5px_rgb(0_0_0_/_50%)]">
              Jash Patel
            </h2>
          </div>

          {/* Rotating Text for Skills */}
          <div className="flex justify-center mt-6">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl font-mono [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>

          {/* Primary Call-to-action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white hover:text-black hover:scale-105"
            >
              View Resume
            </a>
          </div>

          {/* Secondary AI Portfolio button below View My Work & View Resume */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://www.fastfol.io/jashpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 pointer-events-auto hover:scale-105"
            >
              <ExternalLink size={14} /> AI Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
