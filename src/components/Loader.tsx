import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence of loading steps matching the terminal vibe
    const timer1 = setTimeout(() => setStep(1), 600); // After first command
    const timer2 = setTimeout(() => setStep(2), 1100); 
    const timer3 = setTimeout(() => setStep(3), 1500); 
    const timer4 = setTimeout(() => setStep(4), 1900); 
    const timer5 = setTimeout(() => setStep(5), 2300); 
    const timer6 = setTimeout(() => setStep(6), 2800); 
    const timer7 = setTimeout(() => setStep(7), 3600); 
    const timer8 = setTimeout(() => setStep(8), 4400); // Final text
    const timer9 = setTimeout(() => {
      onComplete();
    }, 5500); // Complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-background text-foreground"
    >
      <div className="w-full max-w-2xl p-4 font-mono text-sm md:text-base">
        <div className="rounded-xl border border-border bg-[#0a0a0a] overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-border">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs text-white/40 flex-1 text-center pr-8">suvam@portfolio: ~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 flex flex-col gap-3 min-h-[350px] text-white">
            <div className="flex items-center">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.5, ease: 'linear' }}
                className="overflow-hidden whitespace-nowrap text-white font-medium"
              >
                &gt; pnpm dlx shadcn@latest init
              </motion.span>
              {step === 0 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-white ml-1"
                />
              )}
            </div>

            {step >= 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-green-500">
                ✔ Preflight checks.
              </motion.div>
            )}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-green-500">
                ✔ Verifying framework. Found Next.js.
              </motion.div>
            )}
            {step >= 3 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-green-500">
                ✔ Validating Tailwind CSS.
              </motion.div>
            )}
            {step >= 4 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-green-500">
                ✔ Installing dependencies.
              </motion.div>
            )}
            {step >= 5 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-blue-500 mt-2 flex flex-col gap-1">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-4 text-blue-500/80">- lib/utils.ts</span>
              </motion.div>
            )}

            {step >= 6 && (
              <div className="mt-4">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.6, ease: 'linear' }}
                  className="overflow-hidden whitespace-nowrap text-white/50 block"
                >
                  Success! Project initialization completed.
                </motion.span>
              </div>
            )}

            {step >= 7 && (
              <div className="flex items-center">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.6, ease: 'linear' }}
                  className="overflow-hidden whitespace-nowrap text-white/50"
                >
                  You may now view the portfolio.
                </motion.span>
                {step >= 7 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-white/50 ml-1"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
