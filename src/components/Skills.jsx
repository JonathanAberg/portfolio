import { motion } from "framer-motion";
import {
  Code2,
  FileText,
  Palette,
  Server,
  Sparkles,
  Github,
  Monitor,
  Brush,
  Zap,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span key={index} variants={charVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  const skills = [
    {
      name: "React & Next.js",
      percentage: 90,
      icon: <Code2 className="w-6 h-6 text-sage-600" />,
    },
    {
      name: "JavaScript/TypeScript",
      percentage: 85,
      icon: <FileText className="w-6 h-6 text-sage-600" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 88,
      icon: <Palette className="w-6 h-6 text-sage-600" />,
    },
    {
      name: "Node.js",
      percentage: 75,
      icon: <Server className="w-6 h-6 text-sage-600" />,
    },
    {
      name: "UI/UX Design",
      percentage: 80,
      icon: <Sparkles className="w-6 h-6 text-sage-600" />,
    },
    {
      name: "Git & GitHub",
      percentage: 92,
      icon: <Github className="w-6 h-6 text-sage-600" />,
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description:
        "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
      icon: <Monitor className="w-8 h-8 text-sage-600" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Brush className="w-8 h-8 text-sage-600" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Lightning-fast websites optimized for speed, accessibility, and search engines.",
      icon: <Zap className="w-8 h-8 text-sage-600" />,
    },
    {
      title: "Responsive Design",
      description:
        "Pixel-perfect designs that work seamlessly across all devices and screen sizes.",
      icon: <Smartphone className="w-8 h-8 text-sage-600" />,
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-meadow-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl text-sage-900 mb-8"
          >
            {splitText("Skills & Services")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-sage-600 max-w-3xl mx-auto"
          >
            Combining technical expertise with creative vision to deliver
            exceptional digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skills Section */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl text-sage-900 mb-12"
            >
              Technical Skills
            </motion.h3>

            <div className="space-y-8">
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-sage-900">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-sage-600 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="h-2 bg-sage-200 rounded-full overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      custom={skill.percentage}
                      className="h-full bg-gradient-to-r from-sage-500 to-sage-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl text-sage-900 mb-12"
            >
              What I Offer
            </motion.h3>

            <div className="space-y-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start space-x-4 p-6 rounded-2xl border border-sage-200/50 hover:border-sage-200 hover:bg-sage-50/30 transition-all duration-300">
                    <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-sage-900 mb-2 group-hover:text-sage-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sage-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl text-sage-900 mb-6">
            Ready to work together?
          </h3>
          <p className="text-sage-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing
            together. I&apos;m always excited to take on new challenges.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-sage-900 text-white rounded-full hover:bg-sage-800 transition-colors font-medium"
          >
            Get In Touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
