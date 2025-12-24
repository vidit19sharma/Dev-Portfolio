import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (Advanced)", "Java", "HTML/CSS", "Python"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Redux", "Node.js", "Express.js", "jQuery", "Ajax"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Firebase", "MySQL", "AWS", "GCP"]
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Git", "Android Studio", "Postman"]
  },
  {
    title: "Core Competencies",
    skills: ["DSA", "OOPs", "Linux", "REST APIs", "CI/CD"]
  },
  {
    title: "AI & ML",
    skills: ["Gen AI", "Agentic AI", "TensorFlow", "OpenCV", "LLMs"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
