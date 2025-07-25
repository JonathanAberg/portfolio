import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-meadow-50/95 backdrop-blur-sm border-b border-meadow-200/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-medium">
            <a href="#" className="hover:text-meadow-600 transition-colors">
              Jonathan Åberg
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-sm hover:opacity-60 transition-opacity">
              Menu
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
