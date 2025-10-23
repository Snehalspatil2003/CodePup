import React, { useState } from "react";

const faqs = [
  {
    question: "What is CodePup.ai?",
    answer: "CodePup.ai is an AI-powered platform that generates full-stack websites instantly from natural language prompts.",
  },
  {
    question: "Which frameworks does it support?",
    answer: "It generates code using modern stacks like React, Tailwind CSS, Node.js, and supports export for MERN/PERN projects.",
  },
  {
    question: "Can I edit the generated code?",
    answer: "Yes, you can download and customize the code locally or continue refining it within the platform.",
  },
  {
    question: "Is prior coding experience required?",
    answer: "No, it’s designed for both developers and non-developers to build sites quickly using simple prompts.",
  },
  {
    question: "How does deployment work?",
    answer: "Deploy with one click on CodePup’s cloud or export the code to host on Vercel, Netlify, or your preferred platform.",
  },
  {
    question: "Does it support backend integration?",
    answer: "Yes, it can generate Express APIs and connect to databases like MongoDB or PostgreSQL upon request.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer: "Absolutely—exported code is fully yours to use, modify, and deploy for clients or products.",
  },
  {
    question: "Is mobile responsiveness guaranteed?",
    answer: "Every generated site is responsive by default, optimized for mobile, tablet, and desktop views.",
  },
];

const ArrowIcon = ({ open }) => (
  <svg
    className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 10l4 4 4-4"
      stroke="#06b6d4"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#182337] bg-gradient-to-b from-[#182337] to-[#274664] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-cyan-300 drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#19233F] rounded-xl p-8 shadow-lg border border-[#222] text-white relative cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">{item.question}</span>
                <span className="ml-2">
                  <ArrowIcon open={openIndex === i} />
                </span>
              </div>
              {openIndex === i && (
                <div className="mt-6 text-gray-300 text-base">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
