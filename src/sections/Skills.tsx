import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import profileData from '../data/profile.json';
import {
  SiTypescript, SiPython, SiGo, SiRust,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPostgresql, SiRedis,
  SiGit, SiDocker, SiFigma, SiMongodb
} from 'react-icons/si';
import { FaAws, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import type { ElementType } from 'react';

const iconMap: Record<string, ElementType> = {
  "TypeScript": SiTypescript,
  "JavaScript": FaJs,
  "Python": SiPython,
  "Go": SiGo,
  "Rust": SiRust,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TailwindCSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "MongoDB": SiMongodb,
  "Git": SiGit,
  "GitHub": FaGithub,
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

  const skillsList = Object.entries(skills).flatMap(([category, items]) => 
    items.map(name => ({ name, category }))
  );

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 items-start">
        {/* Heading Top */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground leading-[0.9]">
            SKILLS &
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-muted-foreground/20 leading-[0.9] mt-2">
            TECHNOLOGIES
          </h2>
        </div>

        {/* Grid Right */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 w-full"
        >
          {skillsList.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <motion.div
                key={skill.name}
                variants={itemVariant}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {Icon && <Icon className="text-3xl md:text-4xl text-background" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
