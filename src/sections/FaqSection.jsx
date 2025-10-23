import React, { useState } from "react";

const faqs = [
  {
    question: "How fast can I build a site?",
    answer: "With CodePup.ai, most sites are scaffolded in under 5 minutes. Just describe your idea in a prompt.",
  },
  {
    question: "Can I export code?",
    answer: "Yes, you get real code ready for local editing or deployment—React, Tailwind, and more.",
  },
  {
    question: "Do you host sites?",
    answer: "One-click hosting is available. You can also export and host anywhere you want.",
  },
  {
    question: "Can I customize themes?",
    answer: "You can tweak layouts, colors, and styles instantly—just update your prompt or edit the code.",
  },
  {
    question: "Is team collaboration supported?",
    answer: "Yes, you can share drafts and collaborate before launching live.",
  },
  {
    question: "Are my sites secure?",
    answer: "All generated sites follow latest security best practices.",
  },
  {
    question: "Can I use my own domain?",
    answer: "Custom domains are supported—connect, launch, and get online fast.",
  },
  {
    question: "Is it mobile responsive?",
    answer: "Yes, every template and export is fully responsive for all devices.",
  },
];

// SVG arrow that spins when opened
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
          Clear Your Doubts
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
