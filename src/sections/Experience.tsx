import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import profileData from '../data/profile.json';

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  const { experience } = profileData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            03 // Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
            Where I've made an <span className="text-muted-foreground italic">impact.</span>
          </h3>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-border ml-2 md:ml-0 md:pl-8 space-y-12"
        >
          {experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariant} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] md:-left-[41px] top-2 w-[17px] h-[17px] rounded-full bg-background border-2 border-muted-foreground group-hover:border-foreground group-hover:bg-foreground transition-all duration-300" />

              <div
                className="cursor-pointer select-none pl-6 md:pl-0"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-semibold">{exp.role}</h4>
                  <span className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full w-max">
                    {exp.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                  <p className="text-lg">{exp.company}</p>
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden pl-6 md:pl-0"
                  >
                    <div className="pt-6 pb-2 space-y-4">
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-foreground mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
