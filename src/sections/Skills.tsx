import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import profileData from '../data/profile.json';

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Skills() {
  const { skills } = profileData;

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            02 // Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
            Tools of the <span className="text-muted-foreground italic">trade.</span>
          </h3>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariant} className="flex flex-col">
              <h4 className="text-lg font-medium mb-6 text-foreground border-b border-border pb-2">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-muted text-foreground text-sm rounded-md border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
