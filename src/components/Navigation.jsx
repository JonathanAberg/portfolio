import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe2 } from "lucide-react";

const Navigation = () => {
  const navRef = useRef(null);
  const { t, switchLanguage, lang, translations } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

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
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 bg-white text-sage-900 px-4 py-2 rounded-md shadow focus-visible:ring-2 focus-visible:ring-sage-500"
      >
        {t.nav.skip}
      </a>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-xl font-medium">
            <a
              href="#"
              className="text-sage-900 hover:text-sage-700 smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded"
            >
              Jonathan Åberg
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <motion.div
              variants={navVariants}
              className="hidden md:flex items-center space-x-8"
            >
              <motion.a
                variants={linkVariants}
                href="#"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.home}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#work-featured"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.featured}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#alla-projekt"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.all}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#about"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.about}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#skills"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.skills}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="#contact"
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-1"
              >
                {t.nav.contact}
              </motion.a>
              <motion.a
                variants={linkVariants}
                href="/cv/CV_Jonathan_Aberg.pdf"
                download
                className="text-sm inline-flex items-center gap-2 bg-sage-900 text-white px-4 py-2 rounded-full font-medium hover:bg-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 shadow-sm transition-colors"
              >
                <span>CV</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 20h16M12 4v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </motion.a>
            </motion.div>

            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={open}
                aria-label={t.nav.language}
                className="flex items-center gap-2 text-sage-600 hover:text-sage-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-2 py-1 text-sm"
              >
                <Globe2 className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">
                  {lang.toUpperCase()}
                </span>
              </button>
              {open && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-40 bg-white border border-sage-200 rounded-lg shadow-lg p-1 z-50"
                >
                  {Object.values(translations).map((opt) => (
                    <button
                      key={opt.code}
                      role="menuitem"
                      onClick={() => {
                        switchLanguage(opt.code);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between hover:bg-sage-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 ${
                        lang === opt.code
                          ? "text-sage-900 font-medium"
                          : "text-sage-600"
                      }`}
                    >
                      <span>{opt.label}</span>
                      {lang === opt.code && <span className="text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden">
              <motion.button
                variants={itemVariants}
                className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded px-2 py-1"
              >
                {t.nav.menu}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
