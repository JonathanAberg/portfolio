import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jonathanImage from "../assets/images/jonathan-aberg.jpg";

const VisualKeyboard = ({ text, onComplete, isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [floating, setFloating] = useState(false);
  const [showEnterHint, setShowEnterHint] = useState(false);

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
    }, 140);

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

  useEffect(() => {
    if (currentIndex === text.length) {
      const t = setTimeout(() => setShowImage(true), 180);

      const hintTimer = setTimeout(() => setShowEnterHint(true), 600);
      return () => {
        clearTimeout(t);
        clearTimeout(hintTimer);
      };
    }
  }, [currentIndex, text.length]);

  useEffect(() => {
    const simulate = () => {
      setPressedKey("enter");
      setTimeout(() => {
        setPressedKey((prev) => (prev === "enter" ? null : prev));
      }, 180);
    };
    window.addEventListener("simulateEnterPress", simulate);
    return () => window.removeEventListener("simulateEnterPress", simulate);
  }, []);

  const triggerNextSection = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
  };

  useEffect(() => {
    if (showImage) {
      const startFloatTimer = setTimeout(() => setFloating(true), 900);
      return () => clearTimeout(startFloatTimer);
    } else {
      setFloating(false);
    }
  }, [showImage]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.6, y: -16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sage-50 to-meadow-50">
      {/* Main Content Section */}
      <div className="flex items-start justify-center px-6 pt-8 pb-8 min-h-screen">
        <div className="max-w-screen-lg mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Display */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left pl-4 md:pl-8 lg:pl-14 xl:pl-20"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-sage-900 leading-[0.9] tracking-tight">
                {displayText.split("\n").map((line, lineIndex) => {
                  const isLastLine =
                    lineIndex === displayText.split("\n").length - 1;
                  const shouldShowCursor =
                    isLastLine && currentIndex < text.length;

                  return (
                    <motion.div
                      key={lineIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: lineIndex * 0.1 }}
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
                          className="inline-block w-1 h-12 md:h-16 lg:h-20 xl:h-24 bg-sage-700 ml-2 align-bottom"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              {/* Fixed-size wrapper prevents layout shift before image appears */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                <AnimatePresence>
                  {showImage && (
                    <motion.div
                      key="profile-image-wrapper"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 18,
                        mass: 0.9,
                        bounce: 0.35,
                      }}
                      className="relative will-change-transform"
                      style={{ transformOrigin: "center center" }}
                      onAnimationComplete={() => setFloating(true)}
                    >
                      <motion.div
                        key="profile-image-floating"
                        animate={
                          floating
                            ? {
                                y: [0, -10, 0, -6, 0],
                                transition: {
                                  duration: 12,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  times: [0, 0.25, 0.5, 0.75, 1],
                                },
                              }
                            : {}
                        }
                        className="relative"
                      >
                        <div className="w-full h-full avatar-oval overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center bg-white">
                          <img
                            src={jonathanImage}
                            alt="Jonathan Åberg - Frontend Developer"
                            className="w-full h-full object-cover"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            width={420}
                            height={420}
                          />
                        </div>

                        {/* Decorative elements appear after paste-in */}
                        <motion.div
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ duration: 2, delay: 0.5 }}
                          className="absolute -top-4 -right-4 w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <span className="text-sage-700 text-xl">🏠</span>
                        </motion.div>

                        <motion.div
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: -360 }}
                          transition={{ duration: 2, delay: 0.65 }}
                          className="absolute -bottom-4 -left-4 w-12 h-12 bg-meadow-200 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <span className="text-meadow-700 text-xl">🚀</span>
                        </motion.div>

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                          className="absolute top-1/2 -right-8 w-8 h-8 bg-sage-300 rounded-full flex items-center justify-center shadow-md"
                        >
                          <span className="text-sage-800 text-sm">💻</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Section - Part of content flow */}
      <div className="absolute bottom-24 left-0 right-0 px-6">
        <AnimatePresence>
          {showEnterHint && (
            <motion.div
              key="enter-hint-global"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 1.2 }}
              className="mb-2 text-center text-sage-600 text-xs md:text-sm font-light tracking-wide pointer-events-none select-none w-full"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                Tryck Enter
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-sage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200/50 shadow-lg relative"
          >
            {/* Hint moved outside for true centering */}
            <div className="space-y-4">
              {/* Row 1 (Numbers) */}
              <div className="flex justify-center gap-2">
                {keyboardLayout[0].map((key) => {
                  const isPressed = pressedKey === key;
                  return (
                    <motion.div
                      key={key}
                      animate={{
                        scale: isPressed ? 0.95 : 1,
                        backgroundColor: isPressed ? "#5E7D47" : "#FFFFFF",
                      }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg text-xs md:text-sm font-medium text-sage-700 border border-sage-200/70 select-none shadow-sm ${
                        isPressed
                          ? "text-white border-sage-600"
                          : "hover:border-sage-300"
                      }`}
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

              {/* Alpha rows + vertical Enter */}
              <div className="flex justify-center gap-4">
                {/* Rows 2 & 3 stacked with staggered indent */}
                <div className="flex flex-col gap-2">
                  {[1, 2].map((rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`flex gap-2 ${
                        rowIdx === 1 ? "ml-4 md:ml-6" : "ml-6 md:ml-10"
                      }`}
                    >
                      {keyboardLayout[rowIdx].map((key) => {
                        const isPressed = pressedKey === key;
                        return (
                          <motion.div
                            key={key}
                            animate={{
                              scale: isPressed ? 0.95 : 1,
                              backgroundColor: isPressed
                                ? "#5E7D47"
                                : "#FFFFFF",
                            }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                            className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg text-xs md:text-sm font-medium text-sage-700 border border-sage-200/70 select-none shadow-sm ${
                              isPressed
                                ? "text-white border-sage-600"
                                : "hover:border-sage-300"
                            }`}
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
                </div>
                {/* Vertical Enter aligned to rows 2 & 3 */}
                <motion.div
                  onClick={triggerNextSection}
                  animate={{
                    scale: pressedKey === "enter" ? 0.97 : 1,
                    backgroundColor:
                      pressedKey === "enter" ? "#5E7D47" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className={`relative flex items-center justify-center w-10 md:w-12 h-[5.5rem] md:h-[6.5rem] rounded-lg text-xs md:text-sm font-medium border border-sage-200/70 select-none shadow-sm cursor-pointer ${
                    pressedKey === "enter"
                      ? "text-white border-sage-600"
                      : "text-sage-700 hover:border-sage-300"
                  }`}
                  style={{
                    height: "5.5rem",
                  }}
                >
                  <AnimatePresence>
                    {pressedKey === "enter" && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.3 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-sage-400 rounded-lg"
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10 rotate-90 md:rotate-0">↵</span>
                </motion.div>
              </div>

              {/* Row 4 (bottom letters) */}
              <div className="flex justify-center gap-2 ml-10 md:ml-16">
                {keyboardLayout[3].map((key) => {
                  const isPressed = pressedKey === key;
                  return (
                    <motion.div
                      key={key}
                      animate={{
                        scale: isPressed ? 0.95 : 1,
                        backgroundColor: isPressed ? "#5E7D47" : "#FFFFFF",
                      }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg text-xs md:text-sm font-medium text-sage-700 border border-sage-200/70 select-none shadow-sm ${
                        isPressed
                          ? "text-white border-sage-600"
                          : "hover:border-sage-300"
                      }`}
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

              {/* Space bar row */}
              <div className="flex justify-center pt-2">
                <motion.div
                  animate={{
                    scale: pressedKey === "space" ? 0.98 : 1,
                    backgroundColor:
                      pressedKey === "space" ? "#5E7D47" : "#FFFFFF",
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className={`relative flex items-center justify-center w-56 md:w-72 h-10 md:h-12 rounded-lg text-xs md:text-sm font-medium border border-sage-200/70 select-none shadow-sm ${
                    pressedKey === "space"
                      ? "text-white border-sage-600"
                      : "text-sage-700 hover:border-sage-300"
                  }`}
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
