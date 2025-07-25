import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-20 pb-20 px-6 bg-gradient-to-br from-meadow-50 via-sage-50 to-meadow-100">
      <div className="max-w-6xl mx-auto">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 tracking-tight text-meadow-800">
            Hi, I&apos;m <br />
            Jonathan Åberg.
          </h1>
          <p className="text-xl md:text-2xl text-meadow-700 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer student at Jensen Yrkeshögskola, crafting digital
            experiences with React and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="aspect-video bg-meadow-100 rounded-lg overflow-hidden mb-6 border border-meadow-200/50">
            <img
              src="https://plus.unsplash.com/premium_photo-1739054760977-f9e246e4c1be?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jonathan Åberg - Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-light text-meadow-800">
              Portfolio Website
            </h2>
            <span className="text-sm text-meadow-600 hidden md:block">
              React & Tailwind CSS
            </span>
          </div>
        </motion.div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-light mb-8 text-meadow-700">Preview</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Organic Branding", date: "July 14, 2025" },
              { title: "Forest Analytics", date: "January 15, 2025" },
              { title: "Green Energy", date: "June 6, 2024" },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-meadow-100 rounded-lg overflow-hidden mb-4 border border-meadow-200/30">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0
                        ? "1441974231531-c6227db76b6e"
                        : index === 1
                        ? "1518837695005-2083093ee35b"
                        : "1473773508845-188df298d2d1"
                    }?w=400&h=300&fit=crop&crop=center`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-medium mb-1 text-meadow-800">
                  {project.title}
                </h4>
                <p className="text-sm text-meadow-600">{project.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
