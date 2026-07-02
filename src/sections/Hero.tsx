import { motion } from 'framer-motion';
import { FileText, Briefcase, ArrowRight } from 'lucide-react';
import profileData from '../data/profile.json';
import AsciiGlitchRipple from '../components/AsciiGlitchRipple';
import FlipText from '../components/FlipText';
import MorphText from '../components/MorphText';



export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-border pt-20 pb-10 px-6">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-foreground rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-foreground rounded-full"
        />
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Portrait / Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative group w-64 h-80 lg:w-80 lg:h-96 shrink-0"
        >
          <div className="absolute inset-0 border border-foreground translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
          <div className="absolute inset-0 bg-muted border border-border overflow-hidden">
            {/* Placeholder for portrait */}
            <div className="w-full h-full bg-gradient-to-br from-muted-foreground/20 to-muted flex items-center justify-center text-muted-foreground text-sm tracking-widest uppercase">
              Portrait
            </div>
          </div>
        </motion.div>

        {/* Right: Text and Intro */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 ml-0 pl-0 flex justify-start origin-left"
          >
            <MorphText 
              words={[profileData.name, "CREATOR", "ENGINEER"]} 
              fontSize="clamp(3rem, 8vw, 6rem)"
              textClassName="justify-start text-left"
            />
          </motion.h1>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            <FlipText
              className="text-muted-foreground"
              duration={2}
              delay={0.5}
            >
              {profileData.tagline}
            </FlipText>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light"
          >
            {profileData.intro}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <FileText size={18} />
              <AsciiGlitchRipple as="span" dur={800}>
                Download Resume
              </AsciiGlitchRipple>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-border hover:border-foreground transition-colors group">
              <Briefcase size={18} />
              <AsciiGlitchRipple as="span" dur={800}>
                Hire Me
              </AsciiGlitchRipple>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-foreground"
        />
      </motion.div>
    </section>
  );
}
