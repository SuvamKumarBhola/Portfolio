import { motion } from 'framer-motion';
import DiagonalCarousel from '../components/DiagonalCarousel';
import profileData from '../data/profile.json';

export default function Certifications() {
  if (!profileData.certifications || profileData.certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative w-full py-16 flex flex-col items-center justify-center border-b border-border bg-muted/20">
      <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A showcase of my continuous learning and professional milestones.
          </p>
        </motion.div>

        <div className="w-full h-[60vh] min-h-[500px]">
          <DiagonalCarousel items={profileData.certifications} loop={true} />
        </div>
      </div>
    </section>
  );
}
