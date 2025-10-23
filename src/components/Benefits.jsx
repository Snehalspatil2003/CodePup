import React, { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import ParticlesBackground from "../components/ParticlesBackground";

const Benefits = () => {
  // State to track which card is hovered/tapped (for mobile compatibility)
  const [activeCard, setActiveCard] = useState(null);

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
      <Section id="features">
        <div className="container relative z-10 py-12">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-4xl md:text-5xl lg:text-6xl p-4 border rounded-lg"
            title="Your vision, AI-built, Ready to Launch"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((item) => {
              const isActive = activeCard === item.id;
              return (
                <div
                  key={item.id}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] rounded-xl md:max-w-[24rem] min-h-[24rem]"
                  style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() =>
                    setActiveCard((prev) => (prev === item.id ? null : item.id))
                  }
                  onTouchStart={() =>
                    setActiveCard((prev) => (prev === item.id ? null : item.id))
                  }
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className={`absolute inset-0.5 bg-n-8 transition-opacity duration-300 ${
                      isActive ? "opacity-10" : "opacity-0"
                    }`}
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <ClipPath />
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Benefits;
