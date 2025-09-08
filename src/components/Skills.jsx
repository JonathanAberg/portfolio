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
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
    }),
  };

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span key={index} variants={charVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const skills = [
    {
      name: "React & Next.js",
      percentage: 90,
      icon: <Code2 className="w-5 h-5 text-sage-600" />,
    },
    {
      name: "JavaScript/TypeScript",
      percentage: 85,
      icon: <FileText className="w-5 h-5 text-sage-600" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 88,
      icon: <Palette className="w-5 h-5 text-sage-600" />,
    },
    {
      name: "Node.js",
      percentage: 75,
      icon: <Server className="w-5 h-5 text-sage-600" />,
    },
    {
      name: "UI/UX Design",
      percentage: 80,
      icon: <Sparkles className="w-5 h-5 text-sage-600" />,
    },
    {
      name: "Git & GitHub",
      percentage: 92,
      icon: <Github className="w-5 h-5 text-sage-600" />,
    },
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Modern, responsive React & Next.js applications.",
      icon: <Monitor className="w-6 h-6 text-sage-600" />,
    },
    {
      title: "UI/UX Design",
      description: "User‑centred, accessible interface design.",
      icon: <Brush className="w-6 h-6 text-sage-600" />,
    },
    {
      title: "Performance",
      description: "Fast, optimised & Core Web Vitals focused.",
      icon: <Zap className="w-6 h-6 text-sage-600" />,
    },
    {
      title: "Responsive",
      description: "Seamless across all screen sizes.",
      icon: <Smartphone className="w-6 h-6 text-sage-600" />,
    },
  ];

  return (
    <section
      id="skills"
      data-enter-offset="90"
      className="min-h-screen px-6 pt-12 md:pt-14 pb-12 flex flex-col bg-gradient-to-b from-meadow-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-5xl font-light text-sage-900 mb-2 md:mb-3 tracking-tight"
          >
            {splitText("Skills & Services")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-sage-600 max-w-xl mx-auto"
          >
            Snapshot of core capabilities & what I bring to projects.
          </motion.p>
        </div>

        {/* Content + CTA wrapper to distribute space */}
        <div className="flex-1 flex flex-col">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 md:gap-8 flex-1 min-h-0">
            {/* Skills list */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3 flex flex-col gap-5 pr-0 lg:pr-2 overflow-visible"
            >
              <motion.h3
                variants={itemVariants}
                className="text-base md:text-lg text-sage-900"
              >
                Technical Skills
              </motion.h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-sm font-medium text-sage-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-sage-600 font-medium">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-sage-200 rounded-full overflow-hidden">
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

            {/* Services */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-5 pl-0 lg:pl-2 overflow-visible"
            >
              <motion.h3
                variants={itemVariants}
                className="text-base md:text-lg text-sage-900"
              >
                Services
              </motion.h3>
              <div className="grid grid-cols-1 gap-3 auto-rows-max">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-xl border border-sage-200/60 hover:border-sage-200 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      {service.icon}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-sage-900 mb-1 tracking-tight">
                          {service.title}
                        </h4>
                        <p className="text-xs text-sage-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-sage-600 text-sm mb-3">
              Ready to collaborate on something impactful?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-sage-900 text-white rounded-full hover:bg-sage-800 transition-colors text-sm font-medium"
            >
              Get in touch
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
      </div>
    </section>
  );
};

export default Skills;
