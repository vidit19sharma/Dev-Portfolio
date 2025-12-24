import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education & Training</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Bachelor of Technology
                </h3>
                <p className="text-primary font-medium">Information Technology</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Noida Institute of Engineering and Technology
                </p>
                <p className="text-sm text-muted-foreground">Noida, Delhi</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm font-medium text-foreground">CGPA: 7.52</span>
                  <span className="text-sm text-muted-foreground">2016 - 2020</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Generative AI Foundations
                </h3>
                <p className="text-primary font-medium">Microsoft | Upgrad</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Professional certification in Generative AI technologies
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm text-muted-foreground">December 2025</span>
                  <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-600 dark:text-green-400 rounded-full font-medium">
                    Certified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
