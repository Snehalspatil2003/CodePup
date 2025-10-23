import React, { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

const sites = [
  {
    image: project1,
    title: "Personal Portfolio",
    desc: "Stand out as a professional—display your projects, expertise, and achievements on a portfolio that wows",
  },
  {
    image: project2,
    title: "Blog Platform",
    desc: "Share stories and insights with a modern, media-rich blog built for engagement and discovery",
  },
  {
    image: project3,
    title: "Magazine",
    desc: "Deliver news, reviews, and stories in a clean editorial format—perfect for teams and creators alike",
  },
  {
    image: project4,
    title: "E-Commerce Store",
    desc: "Launch a clean, conversion-focused shop to showcase and sell products with ease",
  },
  {
    image: project5,
    title: "Fashion/Brand Landing Page",
    desc: "Present your brand or products with a bold, interactive landing page that inspires immediate action",
  },
  {
    image: project6,
    title: "Travel Website",
    desc: "Plan your next adventure with a captivating travel site—showcase trips, destinations, and tips in style",
  },
];

function FlipCard({ site }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer group"
      onClick={() => setFlipped(!flipped)}
      // Prevent touch event propagation if needed
      onTouchStart={(e) => e.stopPropagation()}
    >
      <div
        className={`relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front side */}
        <div className="absolute w-full h-full bg-[#111827] rounded-xl shadow-lg border border-[#222] flex flex-col justify-center items-center px-6 backface-hidden">
          <h3 className="text-2xl font-semibold text-white mb-4">{site.title}</h3>
          <p className="text-gray-400 text-base text-center">{site.desc}</p>
          <span className="mt-7 text-xs text-gray-600">Tap or Hover to preview</span>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg border border-[#222] rotate-y-180 backface-hidden flex items-center justify-center bg-[#111827]">
          <img src={site.image} alt={site.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#182337] bg-gradient-to-b from-[#182337] to-[#274664]">
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery-Have a Look</h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          "Explore live examples: bold business sites, stunning portfolios, inspiring travel pages, interactive blogs, and beyond—all built with a single prompt."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sites.map((site, i) => (
            <FlipCard key={i} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
}
