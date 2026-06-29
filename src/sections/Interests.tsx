import { motion } from 'framer-motion';
import { useRef } from 'react';
import profileData from '../data/profile.json';

const FloatingIcon = ({ text, index }: { text: string; index: number }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        y: [0, -15, 0],
        x: [0, index % 2 === 0 ? 10 : -10, 0],
      }}
      transition={{
        y: { repeat: Infinity, duration: 4 + (index % 3), ease: 'easeInOut' },
        x: { repeat: Infinity, duration: 5 + (index % 4), ease: 'easeInOut' },
        opacity: { duration: 1, delay: index * 0.1 },
      }}
      className="relative px-6 py-4 rounded-full border border-border bg-background hover:bg-foreground hover:text-background transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-default select-none group flex items-center justify-center text-center"
    >
      <span className="text-sm font-medium tracking-wide">{text}</span>
    </motion.div>
  );
};

export default function Interests() {
  const { interests } = profileData;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="interests"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-muted/20"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
        <div className="w-full lg:w-1/3">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            05 // Interests
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold leading-tight mb-6">
            Beyond the <span className="text-muted-foreground italic">code.</span>
          </h3>
          <p className="text-foreground/80 leading-relaxed font-light">
            When I'm not pushing pixels or optimizing algorithms, you can find me exploring these topics and hobbies.
          </p>
        </div>

        <div
          ref={containerRef}
          className="w-full lg:w-2/3 h-96 relative flex flex-wrap content-center justify-center gap-4 lg:gap-6 p-4"
        >
          {interests.map((interest, index) => (
            <FloatingIcon key={index} text={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
