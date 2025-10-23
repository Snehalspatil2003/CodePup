import Section from "./Section";
import { stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full min-h-screen relative overflow-hidden bg-[#2E5A88] bg-gradient-to-b from-[#2E5A88] to-[#39587A]"
    >
      <Section className="overflow-hidden">
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            {/* Sphere image removed. Only stars remain */}
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>
          {/* Heading without box, white text */}
          <div className="mb-8 text-center">
            <Heading title="Pay once, Use forever" />
            <style jsx>{`
              .mb-8.text-center h2,
              .mb-8.text-center h3 {
                color: #fff !important; /* white */
              }
              .mb-8.text-center h2 {
                font-size: 2.7rem;
                font-weight: bold;
                line-height: 1.1;
              }
              .mb-8.text-center h3 {
                font-size: 1.7rem;
                font-weight: 600;
                margin-top: 0.5rem;
              }
              @media (min-width: 768px) {
                .mb-8.text-center h2 {
                  font-size: 3.5rem;
                }
                .mb-8.text-center h3 {
                  font-size: 2.1rem;
                }
              }
            `}</style>
          </div>
          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
          <div className="flex justify-center mt-10">
            <a
              className="text-xs font-code font-bold tracking-wider uppercase border-b"
              href="/pricing"
            >
              See the full details
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Pricing;
