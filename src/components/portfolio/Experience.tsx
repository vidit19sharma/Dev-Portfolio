import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Uniwide Technologies",
    role: "Software Developer",
    location: "New Delhi, Delhi",
    period: "Feb 2023 – Oct 2025",
    highlights: [
      "Leverage AI for structured problem-solving, brainstorming, and rapid prototyping.",
      "Developed and maintained 10+ dynamic websites using JS and React, increasing client engagement by 30%.",
      "Implemented React Router for seamless page navigation and improved user experience in SPAs.",
      "Developed scalable RESTful APIs using Node.js and Express.js, improving response time by 30%.",
      "Migrated legacy systems to modern JS frameworks (React), reducing maintenance costs by 20%."
    ]
  },
  {
    company: "Capgemini India",
    role: "Software Analyst",
    location: "Mumbai, Maharashtra",
    period: "Jun 2021 – Jan 2023",
    highlights: [
      "Collaborated with cross-functional teams on CWC project and automation testing for Telecom Italia Project.",
      "Implemented agile development methodologies, increasing team productivity and on-time delivery.",
      "Collaborated in automating deployment processes using CI/CD pipelines, decreasing deployment time by 60%.",
      "Enhanced user experience by designing responsive UIs, boosting mobile traffic by 35%.",
      "Integrated REST APIs and microservices for seamless data flow and robust application functionality."
    ]
  },
  {
    company: "Smart Chip Private Limited",
    role: "Trainee (Internship)",
    location: "Noida, Delhi",
    period: "2019",
    highlights: [
      "Contributed to the Access Control System project, implemented in Military Canteens across India.",
      "Designed and implemented custom tools using .NET and C#, embedding business logic.",
      "Technologies: React, Node.js, Microsoft Visual Studio."
    ]
  },
  {
    company: "Think Future Technologies",
    role: "Developer Intern",
    location: "Gurugram, Delhi",
    period: "2018",
    highlights: [
      "Contributed to development and testing of various AI Python-based products.",
      "Assisted in developing an LLM-based translation tool using TensorFlow, OpenCV, and Pandas.",
      "Technologies: Anaconda, PyCharm, TensorFlow, OpenCV, Django."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4+ years of professional experience building scalable web applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
