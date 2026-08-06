import React from "react";
import { Mail, Phone, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-16 pb-12 px-4 md:px-8 border-t border-slate-800/80 bg-[#0B0F17]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 mb-14">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-gray-300">
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let's Work Together
        </h2>

        {/* Professional Photo */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900">
          <img
            src="/professional-photo.jpg"
            alt="Jash Patel Professional Photo"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
          Open for AI engineering, full-stack software development roles, or technical collaborations. Reach out directly via email, phone, or social profiles.
        </p>

        {/* Direct Contact Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:jpjashpateljp@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121620] border border-slate-800 hover:border-slate-600 text-gray-200 hover:text-white transition text-xs sm:text-sm font-mono"
          >
            <Mail size={16} /> jpjashpateljp@gmail.com
          </a>

          <a
            href="tel:+919325046320"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121620] border border-slate-800 hover:border-slate-600 text-gray-200 hover:text-white transition text-xs sm:text-sm font-mono"
          >
            <Phone size={16} /> +91 9325046320
          </a>
        </div>

        {/* Social Icons & Resume Download */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href="https://github.com/JAXSH3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#121620] border border-slate-800 text-gray-300 hover:text-white hover:border-slate-600 transition"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/jashpatel3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#121620] border border-slate-800 text-gray-300 hover:text-white hover:border-slate-600 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://x.com/JashPatel3_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#121620] border border-slate-800 text-gray-300 hover:text-white hover:border-slate-600 transition"
            aria-label="Twitter / X Profile"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold text-black bg-white hover:bg-gray-200 transition shadow-md"
          >
            <Download size={15} /> View Resume
          </a>
        </div>
      </div>

      {/* Footer Bottom Bar: Only © 2026 Jash Patel */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800/60 text-center text-xs font-mono text-gray-400">
        <p>© 2026 Jash Patel</p>
      </div>
    </footer>
  );
};
