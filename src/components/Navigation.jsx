import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Navigation = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Scroll-based navbar background opacity
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbar = navRef.current;

      if (navbar) {
        const opacity = Math.min(scrollY / 100, 0.95);
        navbar.style.background = `rgba(250, 250, 250, ${opacity})`;
        navbar.style.backdropFilter = scrollY > 50 ? "blur(12px)" : "blur(0px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 border-b border-sage-200/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-xl font-medium">
            <a
              href="#"
              className="text-sage-900 hover:text-sage-700 smooth-transition"
            >
              Jonathan Åberg
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <motion.div
              variants={navVariants}
              className="hidden md:flex items-center space-x-8"
            >
              <motion.a
                variants={linkVariants}
                href="#work"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
              >
                Work
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#services"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
              >
                Services
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#about"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
              >
                About
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#contact"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
              >
                Contact
              </motion.a>
            </motion.div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <motion.button
                variants={itemVariants}
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
              >
                Menu
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
