import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Code,
  Palette,
  Zap,
  Mail,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import m1 from "../assets/projects/minkompis/shot1.png";
import m2 from "../assets/projects/minkompis/shot2.png";
import m3 from "../assets/projects/minkompis/shot3.png";
import b1 from "../assets/projects/beatai/shot1.png";
import b2 from "../assets/projects/beatai/shot2.png";
import b3 from "../assets/projects/beatai/shot3.png";
const WorkShowcase = ({ variant = "all" }) => {
  const { t } = useLanguage();

  const effectiveVariant = variant === "all" ? "featured" : variant;
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeButtonRef = useRef(null);

  const projects = [
    {
      id: 2,
      title: "MinKompis",
      category: "Mobile Application",
      description:
        "A companion application designed to help users manage and track their daily activities with an intuitive and user-friendly interface.",
      detailedDescription:
        "A personal companion app focused on helping users organize their daily routines and activities. Built with user experience in mind, featuring clean interfaces, activity tracking, and intuitive navigation patterns.",
      year: "2024",
      link: "https://github.com/JonathanAberg/MinKompis",
      featured: true,
      tech: ["React", "JavaScript", "Web App"],
      screenshots: [m1, m2, m3],
      portrait: true,
    },
    {
      id: 3,
      title: "BeatAI",
      category: "AI Integration",
      description:
        "An innovative application that integrates AI technology to create an engaging user experience with intelligent features and modern design.",
      detailedDescription:
        "An AI-powered application that demonstrates the integration of artificial intelligence in modern web development. Features intelligent user interactions, dynamic content generation, and a sleek modern interface.",
      year: "2024",
      link: "https://github.com/JonathanAberg/BeatAI",
      featured: true,
      tech: ["AI", "React", "Modern UI"],
      screenshots: [b1, b2, b3],
      portrait: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
    document.body.dataset.modalOpen = "true";
    setTimeout(() => closeButtonRef.current?.focus(), 50);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
    delete document.body.dataset.modalOpen;
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeProject();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedProject, nextImage, prevImage]);

  const displayedProjects =
    effectiveVariant === "featured" ? projects.slice(0, 3) : projects;

  return (
    <>
      <section
        id={effectiveVariant === "featured" ? "work-featured" : "alla-projekt"}
        data-enter-offset={effectiveVariant === "featured" ? "150" : "0"}
        className={`py-32 ${
          effectiveVariant === "featured" ? "bg-meadow-50" : "bg-white"
        } relative overflow-hidden`}
        role="region"
        aria-labelledby={
          effectiveVariant === "featured" ? "heading-utvalda" : "heading-alla"
        }
      >
        {/* Background Elements */}
        {effectiveVariant === "featured" && (
          <div className="absolute top-40 right-20 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl" />
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2
              id={
                effectiveVariant === "featured"
                  ? "heading-utvalda"
                  : "heading-alla"
              }
              className="text-5xl md:text-6xl font-light text-sage-900 mb-6 tracking-tight"
            >
              {effectiveVariant === "featured"
                ? t.work.featuredTitle
                : t.work.allTitle}
            </h2>
            {effectiveVariant === "featured" && (
              <p className="text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed font-light">
                {t.work.featuredSubtitle}
              </p>
            )}
          </motion.div>

          {effectiveVariant === "featured" && <></>}

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          >
            {displayedProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openProject(project);
                    }
                  }}
                  aria-label={`${t.work.openProjectAria}: ${project.title}`}
                  className="group w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-xl"
                >
                  <div className="space-y-4">
                    {/* Project Image/Visual */}
                    <div className="relative overflow-hidden bg-sage-100 rounded-xl aspect-[4/3]">
                      <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-sage-300 group-hover:from-sage-300 group-hover:to-sage-400 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl font-light text-sage-500 group-hover:text-sage-600 transition-colors duration-500">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-sage-900">
                          {t.work.detailsBadge}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="text-xl font-light text-sage-900 group-hover:text-sage-700 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sage-600 text-xs uppercase tracking-wide font-medium">
                            {project.category}
                          </p>
                        </div>
                        <span className="text-sage-500 text-xs font-light">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-sage-700 leading-relaxed font-light text-sm max-w-md">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-sage-100 text-sage-700 text-[10px] rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        className="flex items-center text-sage-900 font-light text-xs group-hover:text-sage-700 transition-colors duration-300"
                        whileHover={{ x: 4 }}
                        aria-hidden="true"
                      >
                        {t.work.viewMore}
                        <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {effectiveVariant === "featured" && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
              className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#work-featured"
                className="bg-sage-600 text-white px-8 py-4 rounded-full text-sm md:text-base font-medium hover:bg-sage-700 transition-colors shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
              >
                {t.hero.ctaProjects}
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </a>
              <a
                href="#contact"
                className="bg-white text-sage-800 px-8 py-4 rounded-full text-sm md:text-base font-medium border border-sage-300 hover:border-sage-400 hover:bg-sage-50 transition-colors shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 inline-flex items-center"
              >
                {t.hero.ctaContact}
                <Mail className="w-4 h-4 inline ml-2" />
              </a>
              <a
                href="https://github.com/JonathanAberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-900 text-sm md:text-base font-medium inline-flex items-center gap-2 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 group"
                aria-label={t.githubSection.button}
              >
                <Github className="w-4 h-4" />
                <span className="underline-offset-4 group-hover:underline">
                  {t.githubSection.button}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-sage-200">
                <div>
                  <h3 className="text-2xl font-light text-sage-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sage-600 text-sm uppercase tracking-wide">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={closeProject}
                  className="w-8 h-8 flex items-center justify-center text-sage-500 hover:text-sage-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {/* Image Carousel */}
                <div className="relative mb-6">
                  {/* Dynamic container: use aspect ratio for landscape, fixed height with contain for portrait */}
                  <div
                    className={
                      selectedProject.portrait
                        ? "bg-sage-100 rounded-xl overflow-hidden h-[60vh] sm:h-[70vh] flex items-center justify-center"
                        : "bg-sage-100 rounded-xl overflow-hidden aspect-[16/10]"
                    }
                  >
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${
                        currentImageIndex + 1
                      }`}
                      className={
                        selectedProject.portrait
                          ? "h-full w-auto object-contain"
                          : "w-full h-full object-cover"
                      }
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Carousel Controls */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sage-600 hover:text-sage-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sage-600 hover:text-sage-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedProject.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                              index === currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <p className="text-sage-700 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                  <div>
                    <h4 className="text-sm font-medium text-sage-900 mb-2">
                      {t.work.modalTech}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-sage-100 text-sage-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-sage-800 text-white rounded-lg hover:bg-sage-900 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.work.github}
                    </a>
                    <span className="text-sage-500 text-sm">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkShowcase;
