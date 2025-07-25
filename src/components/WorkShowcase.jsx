import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind CSS, and Framer Motion. Features responsive design and smooth animations.",
    date: "July 2025",
    link: "github.com/jonathanaberg",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Network Monitoring Dashboard",
    description:
      "Interactive dashboard for network infrastructure monitoring, leveraging my experience as a network technician.",
    date: "June 2025",
    link: "Coming Soon",
    tech: ["JavaScript", "Chart.js", "HTML/CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "IT Consulting Website",
    description:
      "Modern website design for IT consulting services, focusing on clean UI and professional presentation.",
    date: "May 2025",
    link: "In Development",
    tech: ["React", "Next.js", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Frontend Learning Projects",
    description:
      "Collection of projects from my studies at Jensen Yrkeshögskola, showcasing various frontend technologies and techniques.",
    date: "Ongoing",
    link: "github.com/jonathanaberg",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=center",
  },
];

const WorkShowcase = () => {
  return (
    <section
      id="work"
      className="py-20 px-6 bg-gradient-to-b from-meadow-50 to-sage-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-meadow-800">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-12">
          {projects.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer border-b border-meadow-200/30 pb-12 last:border-b-0 last:pb-0 card-bg rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-medium group-hover:text-meadow-600 transition-colors text-meadow-800">
                    {item.title}
                  </h3>

                  <p className="text-meadow-700 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((technology, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-meadow-100 text-meadow-700 rounded-full border border-meadow-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-meadow-600">{item.date}</span>
                    <span className="text-sm hover:text-meadow-500 transition-colors text-meadow-600">
                      {item.link}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="aspect-[4/3] bg-meadow-100 rounded-lg overflow-hidden border border-meadow-200/30">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
