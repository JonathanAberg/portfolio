import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jonathanImage from "../assets/images/jonathan-aberg.jpg";

const SECOND_MESSAGE = "Scrolla neråt för att utforska min portfolio.";

const VisualKeyboard = ({ text, onComplete, isActive }) => {
  const [activeText, setActiveText] = useState(text); // dynamic text phases
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState(null);
  const [displayText, setDisplayText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [floating, setFloating] = useState(false);
  const [showEnterHint, setShowEnterHint] = useState(false);
  const [secondPhaseStarted, setSecondPhaseStarted] = useState(false);
  const [selecting, setSelecting] = useState(false); // simulate selection highlight
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  // Track viewport and compute a consistent scale to keep composition unchanged
  useEffect(() => {
    const update = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const baseW = 1280; // reference design width
  const baseH = 860; // reference design height
  const scaleW = viewport.w > 0 ? Math.min(1, viewport.w / baseW) : 1;
  const scaleH = viewport.h > 0 ? Math.min(1, viewport.h / baseH) : 1;
  const scale = Math.max(0.72, Math.min(scaleW, scaleH)); // clamp to avoid too tiny

  // Keyboard layout (restored)
  const keyboardLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "{", "}", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?"],
  ];

  // Speed config
  const FAST_CHARS = 6;
  const FAST_INTERVAL = 60;
  const BASE_INTERVAL = 70;

  const specialKeys = useMemo(
    () => ({
      " ": "space",
      "\n": "enter",
    }),
    []
  );

  useEffect(() => {
    if (!isActive || selecting) return;
    if (currentIndex >= activeText.length) {
      if (
        currentIndex >= activeText.length &&
        onComplete &&
        !secondPhaseStarted
      ) {
        setTimeout(onComplete, 600);
      }
      return;
    }

    const interval = currentIndex < FAST_CHARS ? FAST_INTERVAL : BASE_INTERVAL;

    const timer = setTimeout(() => {
      const currentChar = activeText[currentIndex];
      const keyToPress = specialKeys[currentChar] || currentChar.toLowerCase();

      setPressedKey(keyToPress);
      setDisplayText((prev) => prev + currentChar);

      setTimeout(() => {
        setPressedKey(null);
      }, 85);

      setCurrentIndex((prev) => prev + 1);
    }, interval);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    activeText,
    isActive,
    onComplete,
    specialKeys,
    selecting,
    secondPhaseStarted,
  ]);

  useEffect(() => {
    if (isActive) {
      setActiveText(text);
      setCurrentIndex(0);
      setDisplayText("");
      setPressedKey(null);
      setShowImage(false);
      setFloating(false);
      setShowEnterHint(false);
      setSecondPhaseStarted(false);
      setSelecting(false);
      window.scrollTo(0, 0);
    }
  }, [isActive, text]);

  useEffect(() => {
    if (
      currentIndex === activeText.length &&
      activeText === text &&
      !selecting
    ) {
      const t = setTimeout(() => setShowImage(true), 80);
      const hintTimer = setTimeout(() => setShowEnterHint(true), 450);
      return () => {
        clearTimeout(t);
        clearTimeout(hintTimer);
      };
    }
  }, [currentIndex, activeText, text, selecting]);

  useEffect(() => {
    const simulate = () => {
      setPressedKey("enter");
      setTimeout(() => {
        setPressedKey((prev) => (prev === "enter" ? null : prev));
      }, 140);
    };
    window.addEventListener("simulateEnterPress", simulate);
    return () => window.removeEventListener("simulateEnterPress", simulate);
  }, []);

  const triggerNextSection = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
  };

  useEffect(() => {
    if (showImage) {
      const startFloatTimer = setTimeout(() => setFloating(true), 500);
      return () => clearTimeout(startFloatTimer);
    } else {
      setFloating(false);
    }
  }, [showImage]);

  useEffect(() => {
    if (!isActive || secondPhaseStarted) return;
    const selectionTimer = setTimeout(() => {
      setSelecting(true);

      const clearTimer = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setActiveText(SECOND_MESSAGE);
        setSecondPhaseStarted(true);
        setSelecting(false);
      }, 650);
      return () => clearTimeout(clearTimer);
    }, 7000); // 7s

    return () => clearTimeout(selectionTimer);
  }, [isActive, secondPhaseStarted]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.6, y: -14 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-sage-50 to-meadow-50">
      {/* Main Content Section */}
      <div className="flex items-start justify-center px-4 md:px-6 pt-8 pb-8 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <div className="max-w-screen-lg mx-auto w-full">
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Display */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="text-left pl-4 md:pl-8 lg:pl-14 xl:pl-20"
              >
                <div
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight ${
                    selecting ? "relative" : ""
                  } ${selecting ? "transition-colors duration-300" : ""} ${
                    selecting ? "text-sage-900" : "text-sage-900"
                  }`}
                >
                  {" "}
                  {displayText.split("\n").map((line, lineIndex) => {
                    const isLastLine =
                      lineIndex === displayText.split("\n").length - 1;
                    const shouldShowCursor =
                      isLastLine &&
                      currentIndex < activeText.length &&
                      !selecting;

                    return (
                      <motion.div
                        key={lineIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: lineIndex * 0.08 }}
                        className={`block ${
                          selecting ? "bg-sage-300 px-1 rounded-sm" : ""
                        }`}
                      >
                        {line}
                        {shouldShowCursor && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.65,
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
                          stiffness: 300,
                          damping: 20,
                          mass: 0.8,
                          bounce: 0.3,
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
                                  y: [0, -9, 0, -5, 0],
                                  transition: {
                                    duration: 10,
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
                          <motion.div
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ duration: 1.4, delay: 0.35 }}
                            className="absolute -top-4 -right-4 w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <span className="text-sage-700 text-xl">🏠</span>
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{ scale: 1, rotate: -360 }}
                            transition={{ duration: 1.5, delay: 0.45 }}
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-meadow-200 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <span className="text-meadow-700 text-xl">🚀</span>
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
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
      </div>

      {/* Keyboard Section */}
      <div className="absolute bottom-24 left-0 right-0 px-6">
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "bottom center",
          }}
        >
          <AnimatePresence>
            {showEnterHint && (
              <motion.div
                key="enter-hint-global"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.9 }}
                className="mb-2 text-center text-sage-600 text-xs md:text-sm font-light tracking-wide pointer-events-none select-none w-full"
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1], opacity: [1, 0.92, 1] }}
                  transition={{
                    duration: 1.8,
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="bg-sage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200/50 shadow-lg relative"
            >
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
                    <span className="relative z-10 rotate-90 md:rotate-0">
                      ↵
                    </span>
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
    </div>
  );
};

export default VisualKeyboard;
