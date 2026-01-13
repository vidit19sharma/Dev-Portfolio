import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neogentic Agents",
    tech: ["Python", "Agentic AI", "Google ADK"],
    date: "December 2025",
    description: "Python-based AI multi-agent system demonstrating coordinated tasks with sequential, parallel and Loop Workflows.",
    highlights: [
      "Modular AI agent design for complex task decomposition into specialized roles",
      "Integrated real-world APIs (Google Search, weather) with LLM reasoning",
      "Custom AI tools for business logic and domain-specific workflows",
      "Implemented Model Context Protocol (MCP) and Long-Running Operation (LRO) for Human Approval"
    ],
    github: "https://github.com/vidit19sharma/Neogentic-Agents"
  },
  {
    title: "Inventory Pro",
    tech: ["Node.js", "Express.js", "EJS", "Tailwind CSS"],
    date: "September 2025",
    description: "Robust inventory management system with user and item registration, updates, and deletion.",
    highlights: [
      "EJS Template integration with express validator for code reusability",
      "Dynamic item listing with JavaScript and EJS",
      "Full CRUD functionality for item management",
      "Responsive design with HTML, CSS, and Tailwind CSS"
    ],
    github: "https://github.com/vidit19sharma/Inventory-Management-App"
  },
  {
    title: "Ecommerce API",
    tech: ["Node.js", "Express.js", "MongoDB"],
    date: "November 2024",
    description: "RESTful API for e-commerce platform to manage product inventory.",
    highlights: [
      "Scalable API endpoints for product management (CRUD operations)",
      "Well-organized folder structure for models, controllers, and routes",
      "MongoDB with Mongoose for seamless data interaction",
      "Thorough API testing using Postman"
    ],
    github: "https://github.com/vidit19sharma"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Featured projects showcasing full-stack development and AI integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                </div>
                <a 
                  href={project.github} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-1">
                {project.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
