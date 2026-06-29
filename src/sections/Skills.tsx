import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import profileData from '../data/profile.json';
import { 
  SiTypescript, SiPython, SiGo, SiRust, 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiPostgresql, SiRedis, 
  SiGit, SiDocker, SiFigma 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { ElementType } from 'react';

const iconMap: Record<string, ElementType> = {
  "TypeScript": SiTypescript,
  "Python": SiPython,
  "Go": SiGo,
  "Rust": SiRust,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TailwindCSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Git": SiGit,
  "Docker": SiDocker,
  "AWS": FaAws,
  "Figma": SiFigma,
};

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Skills() {
  const { skills } = profileData;
  
  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat();

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8 border-b border-border/50 pb-6">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
            Skills & Technologies
          </h3>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          {allSkills.map((skill) => {
            const Icon = iconMap[skill];
            return (
              <motion.div 
                key={skill} 
                variants={itemVariant} 
                className="flex items-center gap-3 px-4 py-2.5 bg-background border border-border rounded-xl hover:bg-muted/50 transition-colors duration-300"
              >
                {Icon && <Icon className="text-muted-foreground text-lg" />}
                <span className="text-sm font-medium text-foreground/90">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
