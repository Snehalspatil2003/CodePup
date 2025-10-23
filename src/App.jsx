import ButtonGradient from "./assets/svg/ButtonGradient";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Benefits from "./components/Benefits";
import Home from "./sections/Home";
import IntroAnimation from "./components/IntroAnimation";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import FaqSection from "./sections/FaqSection";
import Footer from "./components/Footer";
import Services from "./components/Services";
import React from "react";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <div className="relative gradient text-white">
            <CustomCursor />
            <ParticlesBackground />
            <Navbar />

            <section id="home"><Home /></section>
            <section id="gallery"><Gallery /></section>
            <section id="benefits"><Benefits /></section>
            <section id="services"><Services /></section>
            <section id="pricing"><Pricing /></section>
            <section id="roadmap"><Roadmap /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="faqsection"><FaqSection /></section>
            <footer id="footer"><Footer /></footer>
          </div>
          <ButtonGradient />
        </>
      )}
    </>
  );
}
