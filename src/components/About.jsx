import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-sage-50 to-meadow-100"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <a
                href="https://github.com/jonathanaberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-meadow-600 transition-colors underline text-meadow-700"
              >
                GitHub
              </a>
            </div>
            <div className="flex-1">
              <a
                href="https://linkedin.com/in/jonathanaberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-meadow-600 transition-colors text-meadow-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-20"
        >
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-meadow-800">
            FrontWörk creates sustainable brand experiences by integrating
            biophilic design principles with cutting-edge technology.
          </p>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-meadow-800">
            We collaborate with forward-thinking organizations to create designs
            that honor our connection to the natural world while pushing the
            boundaries of digital innovation.
          </p>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium text-meadow-700">
            Design inspired by nature. Technology that nurtures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-meadow-800">
            About Me
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-meadow-700">
              I&apos;m Jonathan Åberg, a Frontend Developer student at Jensen
              Yrkeshögskola in Gothenburg. I&apos;m passionate about creating
              modern, user-friendly web applications using React and
              contemporary web technologies.
            </p>

            <p className="text-lg leading-relaxed text-meadow-700">
              With a background in IT as a network technician and consultant, I
              bring a unique perspective to frontend development. My technical
              foundation in networking and infrastructure gives me a deeper
              understanding of how applications interact with systems.
            </p>

            <p className="text-lg leading-relaxed text-meadow-700">
              Currently focused on mastering React, JavaScript, and modern CSS
              frameworks while building projects that showcase clean code,
              responsive design, and thoughtful user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
