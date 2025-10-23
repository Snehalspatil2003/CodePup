import React from "react";

// Add a rating (1–5) to each testimonial
const testimonials = [
  {
    text: "Launching my startup was effortless with CodePup.ai.",
    name: "Riya Mishra",
    role: "Founder",
    rating: 5,
  },
  {
    text: "No more config struggles. Just prompts, instant results.",
    name: "Jonas Weber",
    role: "Web Developer",
    rating: 4,
  },
  {
    text: "CodePup made my portfolio stand out for recruiters!",
    name: "Mehul Arora",
    role: "Job Seeker",
    rating: 5,
  },
  {
    text: "Loved the ready-to-use templates. Saved me so much time.",
    name: "Olivia Chen",
    role: "UI Designer",
    rating: 4,
  },
  {
    text: "Building client sites in hours, not days.",
    name: "Leo Alvarez",
    role: "Freelancer",
    rating: 5,
  },
  {
    text: "The AI builder streamlines my workflow every single project.",
    name: "Kate Williams",
    role: "Agency Lead",
    rating: 5,
  },
  {
    text: "Everything—auth, payments, database—is plug and play.",
    name: "Saurabh Jain",
    role: "App Creator",
    rating: 4,
  },
  {
    text: "CodePup.ai is my go-to for rapid MVPs.",
    name: "Ella Simone",
    role: "Product Manager",
    rating: 5,
  },
];

// Simple react star SVG
const Star = ({ filled }) => (
  <svg
    className="inline-block mx-0.5"
    viewBox="0 0 20 20"
    fill={filled ? "#FFD600" : "#444B5A"}
    width={20}
    height={20}
  >
    <polygon points="10,1 12.314,6.942 18.566,7.066 13.898,11.048 15.776,17.206 10,13.86 4.224,17.206 6.101,11.048 1.434,7.066 7.686,6.942" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#182337] bg-gradient-to-b from-[#182337] to-[#274664] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-cyan-300 drop-shadow-lg">
          Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-[#19233F] rounded-xl p-8 shadow-lg border border-[#222] text-white flex flex-col justify-between min-h-[180px]">
              <div>
                <p className="text-lg mb-6 min-h-[58px]">{item.text}</p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <span>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} filled={idx < item.rating} />
                  ))}
                </span>
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
