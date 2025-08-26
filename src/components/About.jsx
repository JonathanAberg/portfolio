import { motion } from "framer-motion";

const About = () => {
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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span key={index} variants={charVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-meadow-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* About Us Header */}
        <div className="mb-24">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl text-sage-900 mb-8"
          >
            {splitText("About Me")}
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-sage-600 font-light">
                I&apos;m a curious maker and thoughtful problem-solver — driven
                by a love for new ideas, clever tools, and the question
                &quot;what if?&quot;
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl leading-relaxed text-sage-600">
                I believe great design and smart technology should feel
                effortless — not because they&apos;re simple, but because
                they&apos;re deeply considered. Every day, I help bold ideas
                take shape. One prototype, one interaction, one quiet &quot;this
                feels right&quot; at a time.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg leading-relaxed text-sage-600">
                What I create is meant to be clear, beautiful, and intuitive.
                Design that connects. Tech that just works.
              </p>
            </motion.div>

            {/* Skills/Technologies */}
            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-lg text-sage-900 mb-6">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-sage-600">
                <div>React & Next.js</div>
                <div>TypeScript</div>
                <div>Tailwind CSS</div>
                <div>Framer Motion</div>
                <div>Node.js</div>
                <div>MongoDB</div>
                <div>Git & GitHub</div>
                <div>Figma</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="flex items-center space-x-8">
                <a
                  href="https://github.com/jonathanaberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/jonathanaberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:jonathan@example.com"
                  className="text-sm text-sage-600 hover:text-sage-900 smooth-transition font-medium"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <div className="relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="aspect-[4/5] bg-gradient-to-br from-meadow-100 to-meadow-200/50 rounded-2xl overflow-hidden"
            >
              <img
                src="/DSCF1384.jpg"
                alt="Jonathan Åberg"
                className="w-full h-full object-cover block"
                style={{
                  imageRendering: "auto",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-100 rounded-full"
            />
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-sage-600 font-light">
              &ldquo;Great design is not just what it looks like and feels like.
              Great design is how it works.&rdquo;
            </p>
            <p className="text-sm text-sage-600 mt-8 font-medium">
              — Steve Jobs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
