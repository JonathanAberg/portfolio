import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-meadow-800 text-meadow-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-light mb-4">Let&apos;s Connect</h3>
            <p className="text-meadow-200 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and
              collaborations. Feel free to reach out if you&apos;d like to work
              together!
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="mailto:jonathan.aberg@hotmail.com"
              className="text-sm hover:text-meadow-200 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/jonathanaberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-meadow-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-aberg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-meadow-200 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="border-t border-meadow-700 pt-6">
            <p className="text-sm text-meadow-300">
              Jonathan Åberg © 2025 • Frontend Developer Student
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
