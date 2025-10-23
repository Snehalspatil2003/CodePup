import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
      <Button
  href="/roadmap"
  className="bg-[#182337] text-white text-2xl md:text-3xl px-16 py-6 rounded-3xl shadow-lg hover:bg-[#131b2e] transition-colors duration-300"
>
  OUR ROADMAP
</Button>
    </div>
    <div className="container md:pb-10">
      <Heading
        tag="Ready to get started"
        title="Using CodePup.ai: A Quick Guide"
        className="text-3xl md:text-4xl font-bold text-[#182337]"
      />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div
                className={`
                  relative p-8 xl:p-15 rounded-[2.4375rem] overflow-hidden
                  shadow-xl 
                  backdrop-blur-lg
                  bg-gradient-to-br from-[rgba(24,35,55,0.55)] to-[rgba(39,70,100,0.68)] 
                  border border-[rgba(225,225,255,0.10)]
                  max-w-full
                `}
                style={{
                  boxShadow: "0 8px 32px 0 rgba(10,24,48,0.18)",
                }}
              >
                <div className="absolute top-0 left-0 w-full pointer-events-none opacity-20 z-0">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>
                    <div className="flex items-center px-4 py-1 bg-n-1/70 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <img
                      className="w-full rounded-2xl"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 break-words">{item.title}</h4>
                  <p className="body-2 text-n-4 break-words">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
