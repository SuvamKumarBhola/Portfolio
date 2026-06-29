import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import profileData from '../data/profile.json';
import { cn } from '../lib/utils';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white border-b border-border">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 text-white">Experiences</h2>

        <div className="border-t border-dashed border-white/10">
          {profileData.experience.map((exp: any, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-dashed border-white/10 py-6"
              >
                {/* Header (always visible) */}
                <div 
                  className="flex items-start justify-between cursor-pointer group"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Logo placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-white/50 text-sm mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end text-sm">
                    <div className="flex items-center gap-2 text-white/90 font-medium">
                      {exp.duration}
                      {isExpanded ? <ChevronUp size={16} className="text-white/50" /> : <ChevronDown size={16} className="text-white/50" />}
                    </div>
                    <span className="text-white/40 mt-1">
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
                          <div className="flex flex-wrap gap-8 mb-8 pb-6 border-b border-dashed border-white/5">
                            {exp.stats.map((stat: any, i: number) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-lg font-bold text-white">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-1">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Responsibilities list */}
                        <ul className="space-y-4 mb-8">
                          {exp.responsibilities.map((resp: string, idx: number) => (
                            <li key={idx} className="flex items-start text-white/60 text-sm leading-relaxed">
                              <span className="mr-3 text-white/40 mt-0.5">*</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-medium bg-white/5 text-white/60 border border-white/10 rounded-md"
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
