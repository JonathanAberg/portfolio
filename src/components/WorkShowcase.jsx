import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const WorkShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Twitter2",
      category: "Full-Stack Social Media",
      description:
        "A modern Twitter clone built with React frontend, featuring real-time posting, user interactions, and responsive design with Tailwind CSS.",
      detailedDescription:
        "A comprehensive social media platform that replicates Twitter's core functionality with modern web technologies. Features include real-time posting, user authentication, responsive design, and interactive UI components built with React and styled with Tailwind CSS.",
      year: "2024",
      link: "https://github.com/JonathanAberg/Twitter2-Frontend",
      featured: true,
      tech: ["React", "Tailwind CSS", "Frontend"],
      screenshots: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 2,
      title: "MinKompis",
      category: "Web Application",
      description:
        "A companion application designed to help users manage and track their daily activities with an intuitive and user-friendly interface.",
      detailedDescription:
        "A personal companion app focused on helping users organize their daily routines and activities. Built with user experience in mind, featuring clean interfaces, activity tracking, and intuitive navigation patterns.",
      year: "2024",
      link: "https://github.com/JonathanAberg/MinKompis",
      featured: true,
      tech: ["React", "JavaScript", "Web App"],
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop",
      ],
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
      screenshots: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1655635949147-35a4fbbd9faf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 4,
      title: "DogBook",
      category: "Social Platform",
      description:
        "A social platform for dog lovers to connect, share photos, and discover new friends for their furry companions with a clean, modern interface.",
      detailedDescription:
        "A specialized social network for dog enthusiasts to connect, share experiences, and find companions for their pets. Features photo sharing, user profiles, and community-focused interactions with a warm, friendly design.",
      year: "2024",
      link: "https://github.com/JonathanAberg/DogBook",
      featured: true,
      tech: ["React", "Social", "Community"],
      screenshots: [
        "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop",
      ],
    },
  ];

  // Animation variants
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
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section
        id="work"
        className="py-32 bg-meadow-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-sage-900 mb-6 tracking-tight">
              Selected Work
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed font-light">
              A curated collection of projects that showcase attention to
              detail, technical excellence, and thoughtful design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="space-y-6">
                  {/* Project Image/Visual */}
                  <div className="relative overflow-hidden bg-sage-100 rounded-sm aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-sage-300 group-hover:from-sage-300 group-hover:to-sage-400 transition-all duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-light text-sage-500 group-hover:text-sage-600 transition-colors duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>

                    {/* View Details Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-sage-900">
                        View Details
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-light text-sage-900 group-hover:text-sage-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sage-600 text-sm uppercase tracking-wide font-medium">
                          {project.category}
                        </p>
                      </div>
                      <span className="text-sage-500 text-sm font-light">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-sage-700 leading-relaxed font-light max-w-md">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-sage-100 text-sage-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center text-sage-900 font-light text-sm group-hover:text-sage-700 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <p className="text-sage-700 mb-8 font-light">
              Interested in working together?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-sage-800 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage-900 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
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
                  onClick={closeProject}
                  className="w-8 h-8 flex items-center justify-center text-sage-500 hover:text-sage-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                {/* Image Carousel */}
                <div className="relative mb-6">
                  <div className="aspect-[16/10] bg-sage-100 rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Carousel Controls */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sage-600 hover:text-sage-900 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sage-600 hover:text-sage-900 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedProject.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
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

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium text-sage-900 mb-2">
                      Technologies Used
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

                  {/* GitHub Link */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-sage-800 text-white rounded-lg hover:bg-sage-900 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
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
