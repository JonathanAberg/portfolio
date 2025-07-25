import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Vite", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "npm/yarn", level: 80 },
      ],
    },
    {
      title: "IT Background",
      skills: [
        { name: "Network Administration", level: 90 },
        { name: "IT Consulting", level: 95 },
        { name: "System Troubleshooting", level: 95 },
        { name: "Technical Documentation", level: 80 },
        { name: "Client Communication", level: 95 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-meadow-100 to-sage-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-meadow-800 text-center">
            Skills & Expertise
          </h2>
          <p className="text-lg text-meadow-600 text-center mt-4 max-w-2xl mx-auto">
            Combining frontend development skills with a strong IT foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 rounded-lg p-6 border border-meadow-200/50"
            >
              <h3 className="text-xl font-medium text-meadow-800 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-meadow-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-meadow-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-meadow-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-meadow-500 to-sage-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
