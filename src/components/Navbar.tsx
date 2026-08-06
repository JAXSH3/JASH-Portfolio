import React from "react";
import { User, Cpu, Briefcase, FolderGit2, Mail, Download, Bot } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Navbar: React.FC = () => {
  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Tech Stack", href: "#skills", icon: Cpu },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Top Header Line: "Jash Patel" on Left, "robot can see your cursor" in Center, "Resume" on Right */}
      <header className="absolute top-0 left-0 right-0 z-30 p-6 flex items-center justify-between pointer-events-none">
        <a
          href="#hero"
          className="text-xl font-bold text-white tracking-tight hover:text-gray-300 transition-colors pointer-events-auto"
        >
          Jash Patel
        </a>

        {/* Center Notice: robot can see your cursor */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-normal text-white/80 backdrop-blur-md">
          <Bot size={13} className="text-white/70" />
          <span>robot can see your cursor</span>
        </div>

        {/* Top Right Quick Resume View */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-white bg-black/60 border border-slate-700 hover:bg-white hover:text-black transition duration-300 pointer-events-auto shadow-md"
        >
          <Download size={14} /> Resume
        </a>
      </header>

      {/* Ashif-style Floating Bottom Dock Navbar: Liquid Glass Frost Effect */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <nav className="flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/15">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white hover:bg-white/20 transition duration-200"
                title={item.name}
              >
                <Icon size={16} className="text-white shrink-0" />
                <span className="hidden md:inline">{item.name}</span>
              </a>
            );
          })}

          <div className="w-[1px] h-5 bg-white/30 mx-1 hidden sm:block" />

          {/* Social Icons */}
          <a
            href="https://github.com/JAXSH3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white hover:bg-white/20 transition duration-200"
            title="GitHub Profile"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://linkedin.com/in/jashpatel3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white hover:bg-white/20 transition duration-200"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href="https://x.com/JashPatel3_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white hover:bg-white/20 transition duration-200"
            title="Twitter / X Profile"
          >
            <FaXTwitter size={16} />
          </a>
        </nav>
      </div>
    </>
  );
};
