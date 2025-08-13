import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VisualKeyboard = ({ text, onComplete, isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState(null);
  const [displayText, setDisplayText] = useState("");

  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "{", "}", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?"],
  ];

  const specialKeys = useMemo(
    () => ({
      " ": "space",
      "\n": "enter",
    }),
    []
  );

  useEffect(() => {
    if (!isActive || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        setTimeout(onComplete, 800);
      }
      return;
    }

    const timer = setTimeout(() => {
      const currentChar = text[currentIndex];
      const keyToPress = specialKeys[currentChar] || currentChar.toLowerCase();

      setPressedKey(keyToPress);
      setDisplayText((prev) => prev + currentChar);

      setTimeout(() => {
        setPressedKey(null);
      }, 100);

      setCurrentIndex((prev) => prev + 1);
    }, 90);

    return () => clearTimeout(timer);
  }, [currentIndex, text, isActive, onComplete, specialKeys]);

  useEffect(() => {
    if (isActive) {
      setCurrentIndex(0);
      setDisplayText("");
      setPressedKey(null);
      window.scrollTo(0, 0);
    }
  }, [isActive]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sage-50 to-meadow-50">
      {/* Text Display Section */}
      <div className="flex items-center justify-center px-6 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl"
        >
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-sage-900 leading-[0.9] tracking-tight">
            {displayText.split("\n").map((line, lineIndex) => {
              const isLastLine =
                lineIndex === displayText.split("\n").length - 1;
              const shouldShowCursor = isLastLine && currentIndex < text.length;

              return (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: lineIndex * 0.1 }}
                  className="block"
                >
                  {line}
                  {shouldShowCursor && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block w-1 h-16 md:h-20 lg:h-24 xl:h-28 bg-sage-700 ml-2 align-bottom"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Keyboard Section - Positioned higher from bottom */}
      <div className="absolute bottom-32 left-0 right-0 p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-sage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200/50 shadow-lg"
          >
            <div className="space-y-3">
              {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-2">
                  {row.map((key) => {
                    const isPressed = pressedKey === key;

                    return (
                      <motion.div
                        key={key}
                        animate={{
                          scale: isPressed ? 0.95 : 1,
                          backgroundColor: isPressed ? "#5E7D47" : "#FFFFFF",
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeOut",
                        }}
                        className={`
                          relative flex items-center justify-center
                          w-10 h-10 md:w-12 md:h-12 rounded-lg
                          text-xs md:text-sm font-medium text-sage-700
                          border border-sage-200/70
                          select-none shadow-sm
                          ${
                            isPressed
                              ? "text-white border-sage-600"
                              : "hover:border-sage-300"
                          }
                        `}
                      >
                        <AnimatePresence>
                          {isPressed && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0.3 }}
                              animate={{ scale: 1.2, opacity: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-sage-400 rounded-lg"
                            />
                          )}
                        </AnimatePresence>

                        <span className="relative z-10">{key}</span>
                      </motion.div>
                    );
                  })}
                </div>
              ))}

              <div className="flex justify-center pt-2">
                <motion.div
                  animate={{
                    scale: pressedKey === "space" ? 0.98 : 1,
                    backgroundColor:
                      pressedKey === "space" ? "#5E7D47" : "#FFFFFF",
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut",
                  }}
                  className={`
                    relative flex items-center justify-center
                    w-48 md:w-64 h-10 md:h-12 rounded-lg
                    text-xs md:text-sm font-medium
                    border border-sage-200/70
                    select-none shadow-sm
                    ${
                      pressedKey === "space"
                        ? "text-white border-sage-600"
                        : "text-sage-700 hover:border-sage-300"
                    }
                  `}
                >
                  <AnimatePresence>
                    {pressedKey === "space" && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.3 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-sage-400 rounded-lg"
                      />
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">space</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisualKeyboard;
