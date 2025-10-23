import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo } from "react";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello", "नमस्ते", "Hola", "Bonjour",
      "Ciao", "Olá", "Здравствуйте",
      "Merhaba", "Γειά", "Hej", "Hallo", "Salam"
    ],
    []
  );

  // Define a matching color array for backgrounds
  const colors = [
    "#3C82F6", // blue
    "#FFB300", // yellow
    "#F87171", // red
    "#9D79F2", // purple
    "#FF69B4", // pink
    "#34D399", // green
    "#FF5E57", // coral
    "#FF7E5F", // orange
    "#7DD3FC", // light blue
    "#818CF8", // indigo
    "#10B981", // emerald
    "#FACC15", // gold
    "#FFFFFF"  // final: white
  ];

  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setInterval(() => setIndex((i) => i + 1), 180);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setVisible(false), 320);
      return () => clearTimeout(t);
    }
  }, [index, greetings.length]);

  // If at last state (final white), do not show any greeting
  const isLast = index >= colors.length - 1;

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center text-white overflow-hidden"
          style={{
            background: colors[index] || "#fff",
            transition: "background 0.3s"
          }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {!isLast && (
            <motion.h1
              key={index}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.12 }}
            >
              {greetings[index]}
            </motion.h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
