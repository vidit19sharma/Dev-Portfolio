import React, { useEffect } from "react";
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

const GridPattern = ({ offsetX, offsetY }: { offsetX: ReturnType<typeof useMotionValue<number>>, offsetY: ReturnType<typeof useMotionValue<number>> }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern-global"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern-global)" />
    </svg>
  );
};

export const GridBackground = ({ children }: { children: React.ReactNode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5; 
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Static faint grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      
      {/* Mouse-reveal grid */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute right-[-20%] top-[-10%] w-[50%] h-[50%] rounded-full bg-teal-400/30 dark:bg-orange-600/15 blur-[150px]" />
        <div className="absolute right-[10%] top-[20%] w-[25%] h-[25%] rounded-full bg-cyan-500/25 dark:bg-primary/20 blur-[120px]" />
        <div className="absolute left-[-15%] top-[40%] w-[45%] h-[45%] rounded-full bg-emerald-400/30 dark:bg-blue-600/15 blur-[150px]" />
        <div className="absolute left-[20%] bottom-[-10%] w-[35%] h-[35%] rounded-full bg-sky-400/25 dark:bg-purple-600/10 blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
