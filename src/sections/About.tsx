import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import profileData from '../data/profile.json';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
  const { about } = profileData;

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Left Column: Heading */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-4">
            <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              01 // About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">
              Bridging the gap between <span className="text-muted-foreground italic">design</span> and <span className="text-muted-foreground italic">engineering.</span>
            </h3>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-8 space-y-8 lg:pl-12 border-l-0 lg:border-l lg:border-border">
            <div>
              <h4 className="text-lg font-medium mb-3">The Short Version</h4>
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                {about.shortBio}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-3">The Long Version</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                {about.longBio}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Vision</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {about.vision}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Goals</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {about.goals}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
