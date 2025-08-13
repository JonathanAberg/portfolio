import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import VisualKeyboard from "./VisualKeyboard";

const Hero = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardComplete, setKeyboardComplete] = useState(false);

  const heroText = "Hi,\nMy Name Is\nJonathan.";

  // Animation variants
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Start keyboard animation after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowKeyboard(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyboardComplete = () => {
    setKeyboardComplete(true);
  };

  return (
    <>
      {/* Hero Section with Keyboard */}
      <section className="min-h-screen bg-gradient-to-b from-meadow-50 to-sage-50 relative">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          {/* Initial Loading State */}
          {!showKeyboard && (
            <div className="min-h-screen flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl lg:text-8xl font-light text-sage-900 leading-tight">
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block w-2 h-20 md:h-28 lg:h-32 bg-sage-600"
                  />
                </div>
              </motion.div>
            </div>
          )}

          {/* Visual Keyboard Component */}
          {showKeyboard && (
            <VisualKeyboard
              text={heroText}
              onComplete={handleKeyboardComplete}
              isActive={showKeyboard}
            />
          )}
        </div>
      </section>

      {/* Content Section - Only shown after keyboard completes */}
      {keyboardComplete && (
        <section className="py-32 bg-gradient-to-b from-sage-50 to-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Subtitle */}
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto mb-16 leading-relaxed"
            >
              I craft digital experiences that are intuitive, elegant, and built
              to perform. From concept to launch, I bring your vision to life
              with precision and care.
            </motion.p>

            {/* Featured Projects Grid */}
            <motion.div
              variants={projectsVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
            >
              {/* Project Card 1 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                    <Code className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="text-xl text-sage-900 font-semibold mb-3">
                    Web Development
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    Modern, responsive websites built with the latest
                    technologies and best practices.
                  </p>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                    <Palette className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="text-xl text-sage-900 font-semibold mb-3">
                    UI/UX Design
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    User-centered design that creates meaningful connections
                    between people and technology.
                  </p>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-sage-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors">
                    <Zap className="w-6 h-6 text-sage-600" />
                  </div>
                  <h3 className="text-xl text-sage-900 font-semibold mb-3">
                    Performance
                  </h3>
                  <p className="text-sage-600 text-sm leading-relaxed">
                    Lightning-fast websites optimized for speed, accessibility,
                    and search engines.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center mt-16"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sage-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
