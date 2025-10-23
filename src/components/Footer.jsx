import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#131825] to-[#0b1018] py-12 border-t border-[#222936] mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Brand and mission */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <span className="font-bold text-xl text-cyan-400 tracking-tight pb-2">
            CodePup<span className="inline-block animate-pulse ml-1">✨</span>
          </span>
          <span className="text-gray-300 text-base opacity-90">
            Elevate your ideas. Launch code faster. Every product starts here.
          </span>
        </div>
        {/* Product highlights */}
        <div className="flex flex-col md:w-1/6">
          <span className="font-bold text-cyan-400 pb-2">Discover</span>
          <a href="#features" className="text-gray-400 hover:text-pink-400">
            Interactive Features
          </a>
          <a href="#gallery" className="text-gray-400 hover:text-pink-400">
            Live Gallery
          </a>
          <a href="#docs" className="text-gray-400 hover:text-pink-400">
            Docs
          </a>
          <a href="#faq" className="text-gray-400 hover:text-pink-400">
            Support
          </a>
        </div>
        {/* Company info */}
        <div className="flex flex-col md:w-1/6">
          <span className="font-bold text-cyan-400 pb-2">Team</span>
          <a href="#about" className="text-gray-400 hover:text-pink-400">
            Who We Are
          </a>
          <a href="#community" className="text-gray-400 hover:text-pink-400">
            Community Zone
          </a>
          <a href="#contact" className="text-gray-400 hover:text-pink-400">
            Contact Us
          </a>
        </div>
        {/* Social links */}
        <div className="flex flex-col md:w-1/6">
          <span className="font-bold text-cyan-400 pb-2">Connect</span>
          <div className="flex gap-3">
            <a
              href="https://twitter.com/"
              className="hover:text-cyan-400 text-gray-300"
              target="_blank"
              rel="noopener"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-cyan-400 text-gray-300"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              className="hover:text-cyan-400 text-gray-300"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            <a href="#discord" className="hover:text-cyan-400 text-gray-300">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <span>© 2025 CodePup AI Studio — Next-level tools for thinkers and doers. </span>
        <span className="flex items-center gap-2">
          Crafted with
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#FF6B6B"
            className="inline-block"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" stroke="#FFF" strokeWidth="2" fill="none" />
          </svg>
          by <span className="font-semibold text-cyan-400">Student Creators</span>
        </span>
      </div>
    </footer>
  );
}
