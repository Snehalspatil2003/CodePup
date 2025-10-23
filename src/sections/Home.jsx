import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avatar from "../assets/4-small.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://www.codepup.ai/" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/codepup/" },
  { Icon: FaGithub, label: "GitHub", href: "https://www.linkedin.com/company/codepup/" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,105,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => ["AI Site Builder", "Frontend Innovator", "AI Development Partner"],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 ">
        <div
          className="
            absolute -top-32 -left-32
            w-[70vw] sm:w-[500vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse
          "
        ></div>
        <div
          className="
            absolute bottom-0 right-0
            w-[70vw] sm:w-[500vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[100px] sm:blur-[130px] md:blur-[150px]
            animate-pulse delay-500
          "
        ></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 max-w-[48rem]">
            <motion.div
              className="mb-3 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00b8ff] to-[#302c63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, future coder! <br />
              <span className="text-white font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                Welcome to CodePup.ai
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Let’s build something amazing together
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="mt-8 w-full max-w-lg mx-auto bg-[#191E2A] rounded-2xl shadow-lg flex items-center px-3 py-3 gap-2">
  <span className="mr-1 text-gray-400">≡</span>
  <input
    className="flex-1 min-w-0 bg-transparent border-none outline-none text-white placeholder-gray-400 text-base sm:text-lg"
    placeholder='Try: "Launch with CodePup"'
  />
  <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-3 sm:px-6 rounded-xl transition duration-200 text-base sm:text-lg shadow-lg whitespace-nowrap">
    Generate
  </button>
</div>

            </motion.div>

            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              right: "10px",
              width: "min(22vw , 410px)",
              height: "min(40vw , 760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic-gradient(from 0deg , #1cd8d2 , #00bf8f , #302b63 , #1cd8d2)",
            }}
          />

          <motion.img
            src={avatar}
            alt="Gaurav Gupta"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{ right: "-30px", width: "min(45vw, 700px)", maxHeight: "80vh" }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
