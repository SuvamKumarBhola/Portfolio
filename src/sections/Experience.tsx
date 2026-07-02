import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import profileData from '../data/profile.json';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="w-full py-16 px-6 md:px-12 lg:px-24 bg-background text-foreground border-b border-border">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground leading-[0.9]">
            WORK &
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-muted-foreground/20 leading-[0.9] mt-2">
            EXPERIENCE
          </h2>
        </div>

        <div className="border-t border-dashed border-border">
          {profileData.experience.map((exp: any, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-dashed border-border py-6"
              >
                {/* Header (always visible) */}
                <div 
                  className="flex items-start justify-between cursor-pointer group"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Logo placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end text-sm">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      {exp.duration}
                      {isExpanded ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
                    </div>
                    <span className="text-muted-foreground mt-1">
                      {exp.location || 'Remote'}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-2 pl-[4rem]">
                        {/* Stats Row (optional) */}
                        {exp.stats && exp.stats.length > 0 && (
                          <div className="flex flex-wrap gap-8 mb-8 pb-6 border-b border-dashed border-border">
                            {exp.stats.map((stat: any, i: number) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-lg font-bold text-foreground">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-1">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Responsibilities list */}
                        <ul className="space-y-4 mb-8">
                          {exp.responsibilities.map((resp: string, idx: number) => (
                            <li key={idx} className="flex items-start text-foreground/80 text-sm leading-relaxed">
                              <span className="mr-3 text-muted-foreground mt-0.5">*</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground border border-border rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
