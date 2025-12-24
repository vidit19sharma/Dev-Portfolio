import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-6 pointer-events-none">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground"
        >
          Full Stack Developer — 4+ Years
        </motion.p>
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm"
          >
            Vidit Sharma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experienced SDE in JavaScript & HTML/CSS with 4+ years, specializing in React and Node.js Full-stack development, Gen AI & Agentic AI.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Rohini, Delhi
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> 9717687299
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> vidit19sharma@gmail.com
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto pt-4"
        >
          <a 
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
