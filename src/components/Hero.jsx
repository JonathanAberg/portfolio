import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VisualKeyboard from "./VisualKeyboard";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [showKeyboard, setShowKeyboard] = useState(false);
  const heroText = t.hero.greeting;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowKeyboard(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-meadow-50 to-sage-50 relative"
      id="home"
    >
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
            onComplete={() => {}}
            isActive={showKeyboard}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
