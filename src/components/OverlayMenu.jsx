import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  // For smooth-scrolling and closing menu
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  // Sections you want to link!
  const sections = [
    { label: "Home", id: "home" },
    { label: "Benefits", id: "benefits" },
    { label: "Gallery", id: "gallery" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FaqSection", id: "faqsection" },
    { label: "Footer", id: "footer" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>
          <ul className="space-y-6 text-center">
            {sections.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300 bg-transparent border-none"
                  style={{ background: "none" }}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
